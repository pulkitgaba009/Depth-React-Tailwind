function HeroSection() {
  return (
    <div className="px-4 py-2 flex items-center flex-col w-full">
      <div className="border px-8 py-1 rounded-full  border-neutral-200 bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition duration-200 cursor-pointer">
        What are early stage tax requirements?
      </div>

      <div>
        <h1 className="font-medium mt-10 text-7xl text-black tracking-tight text-center">
          Magially simplify <br /> accounting and taxes
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-neutral-700 text-center mt-4">
          Automated bookkeeping, effortless tax filing, real‑time insights. Set
          up in 10 mins. Back to building by 6:01pm.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white font-medium shadow-lg">
            Start free trial
          </button>

          <button className="cursor-pointer px-4 py-2 rounded-lg text-black font-medium shadow-lg">
            Pricing &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
