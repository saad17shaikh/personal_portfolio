interface FormInputProps {
  register: any;
  label: string;
  type?: string;
  errors: any;
  name: string;
}
const FormInput = ({ register, type, errors, name }: FormInputProps) => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        {/* <label className="text-xl text-primary">{label}</label> */}
        <input
          type={type}
          {...register(name)}
          className="p-2 rounded-lg  bg-transparent border-gray-500 border text-sm text-primary focus:outline outline-primary"
          placeholder={name}
        />
        {errors && (
          <span style={{ color: "red" }} className="text-sm">
            {" "}
            {typeof errors?.message === "string" && errors.message}
          </span>
        )}
      </div>
    </>
  );
};

export default FormInput;

// Usage
//    <FormInput
//     label="Name"
//     register={register}
//     errors={errors.email}
//     name="email"
//     />
