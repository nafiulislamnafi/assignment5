


import buildingLogo from "../assets/banner-stack.png";
const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto flex min-h-105 max-w-285 items-center justify-between px-5 py-12">
        <div className="max-w-140">
          <h1 className="text-[40px] font-extrabold mb-0 text-[#111827]">
            <p className=" -mb-5 block text-[#111827]">Build Your Ideal</p>

            <p className="bg-linear-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </p>
          </h1>

          <p className="mt-3 max-w-110 text-[13px] text-[#475467]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex items-center gap-2">
            <button className=" btn rounded-md bg-linear-to-r from-orange-600 via-pink-600 to-purple-600 px-4 py-3 text-[13px] font-bold text-white ">
              Explore Technologies
            </button>

            <button className=" btn rounded-md border border-gray-200 bg-white px-4 py-3 text-[13px] font-bold text-gray-600 ">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-[45%] ">
          <img src={buildingLogo} alt="Development Stack" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
