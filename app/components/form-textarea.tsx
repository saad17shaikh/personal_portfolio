interface FormInputProps {
  register: any;
  label: string;
  errors: any;
  name: string;
}
const FormTextArea = ({ register, errors, name }: FormInputProps) => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        {/* <label className="text-xl text-primary">{label}</label> */}
        <textarea
          {...register(name)}
          className="p-2 rounded-lg  bg-transparent border-gray-500 border text-sm text-primary focus:outline outline-primary "
          placeholder={name}
        />
        {errors && (
          <span className="text-sm text-red-500">
            {" "}
            {typeof errors?.message === "string" && errors.message}
          </span>
        )}
      </div>
    </>
  );
};

export default FormTextArea;

// Usage
//    <FormInput
//     label="Name"
//     register={register}
//     errors={errors.email}
//     name="email"
//     />
