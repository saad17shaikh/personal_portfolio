import RightSideBar from "./components/right-sidebar";

export default function Home() {
  return (
    <>
      <main className=" bg-[#0e1217] flex gap-5 w-full px-6">
        {/* Left section */}
        <aside className="h-[96vh] sticky top-5 rounded-lg bg-white/5  w-[22%] ">
          Left side section
        </aside>
        {/* Center section */}
        <section className=" min-h-screen w-full grid grid-cols-1 py-5 px-4">
          <section className="min-h-[80vh] bg-white/10 rounded-lg">
            section 1
          </section>
          <section className="min-h-[80vh]">section 1</section>
          <section className="min-h-[80vh]">section 1</section>
          <section className="min-h-[80vh]">section 1</section>
          <section className="min-h-[80vh]">section 1</section>
        </section>
        {/* Right section */}
        {/* <aside className="h-[96vh] rounded-lg  sticky top-3 bg-gray-700 w-[8%] my-3">
          Left side section
        </aside> */}
        <RightSideBar />
      </main>
    </>
  );
}
