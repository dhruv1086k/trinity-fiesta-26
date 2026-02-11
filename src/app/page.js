import Image from "next/image";

export default function Home() {
  return (
    <div className="relative z-10 w-full h-screen bg-[url('/assets/bg.png')] bg-center bg-cover">
      {/* Mandala Border Design */}
      <img
        src="/assets/mandala.png"
        alt="Mandala Border"
        className="absolute top-0 left-0 w-40 opacity-80"
      />
      <img
        src="/assets/mandala.png"
        alt="Mandala Border"
        className="absolute top-0 right-0 w-40 opacity-80 rotate-90"
      />
      <img
        src="/assets/mandala.png"
        alt="Mandala Border"
        className="absolute bottom-0 left-0 w-40 opacity-80 -rotate-90"
      />
      <img
        src="/assets/mandala.png"
        alt="Mandala Border"
        className="absolute bottom-0 right-0 w-40 opacity-80 rotate-180"
      />

      {/* content */}
      <div className="w-full h-screen flex items-center justify-center flex-col z-10">
        <h1 className="text-[clamp(2.5rem,8vw,10rem)]">
          Trinity Fiesta
        </h1>
        <h4 className="text-3xl my-6">Annual fest of Trinity Dwarka</h4>
        <h5 className="text-2xl">Insanely Crafted For You</h5>
        <div className="flex gap-10 mt-16">
          <button className="bg-amber-400 text-black px-7 py-3 rounded-full">Experience</button>
          <button className="bg-amber-400 text-black px-7 py-3 rounded-full">Explore Events</button>
        </div>
      </div>

    </div>
  );
}

