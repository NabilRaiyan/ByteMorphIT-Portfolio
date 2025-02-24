
import { GlobeDemo } from "./ui/GlobeDemo";

// header section
export default function Header() {
  return (
    // <div 
    //   className="relative w-full h-screen flex flex-col justify-center bg-[url('https://zqxjnmmnnoowuipnewcz.supabase.co/storage/v1/object/sign/images/img-6.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvaW1nLTYuanBnIiwiaWF0IjoxNzM5NzEwNzM0LCJleHAiOjE3NDAzMTU1MzR9.DAoQPCyMQadrg8pg_cDEZ_sGx4pB4TvbbI54LK8Fxiw')] 
    //   bg-cover bg-center bg-no-repeat">
  
    //   {/* Dark Overlay for better contrast (Optional) */}
    //   <div className="absolute inset-0 bg-black/40"></div>

      
    // </div>
    <section className="bg-gradient-to-r from-black via-black to-slate-800 flex flex-col md:flex-row items-center h-screen w-full overflow-hidden px-6 md:px-12">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 text-white font-space leading-tight relative md:top-3 md:left-10">
        <h1 className="text-5xl md:text-[4.5rem] font-bold">Welcome To</h1>
        <h1 className="text-5xl md:text-[4.5rem] font-bold mt-2">ByteMorph<span className="text-orange-500">IT</span></h1>

        <p className="font-manrope mt-10 text-slate-300 text-xl md:text-lg text-wrap text-justify">
          At <span className="text-amber-500 font-semibold">ByteMorphIT</span>, we create seamless software solutions from{" "}
          <span className="text-amber-500 font-light">frontend designs</span> to powerful{" "}
          <span className="text-amber-500 font-light">backend systems</span>. Our expert{" "}
          <span className="text-amber-500 font-light">UI/UX team</span> crafts user-friendly experiences, while{" "}
          <span className="text-amber-500 font-light">data analysis</span> and{" "}
          <span className="text-amber-500 font-light">AI</span> drive smarter decisions and innovation. Whether building new 
          products or optimizing existing ones, ByteMorphIT transforms your ideas into impactful digital solutions.
        </p>

        {/* hero section button */}
        <div className="flex flex-row gap-7 mt-10">
          <button className="text-white bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-sm font-space transition-all hover:from-orange-700 hover:to-amber-500 delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Our Services</button>
          <button className="text-white bg-black border border-amber-500 p-3 rounded-sm font-manrope transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Let's connect</button>
        </div>

      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
        <GlobeDemo />
      </div>
    </section>



  );
}
