import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";

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
      <div className="w-full md:w-1/2 text-white font-space leading-tight relative md:top-10 md:left-10">
        <h1 className="text-5xl md:text-[4.5rem] font-bold">Welcome To</h1>
        <h1 className="text-5xl md:text-[4.5rem] font-bold mt-2">ByteMorphIT</h1>

        <p className="font-manrope mt-5 text-slate-300 text-lg md:text-xl">
          At <span className="text-white font-semibold">ByteMorphIT</span>, we create seamless software solutions from{" "}
          <span className="text-white font-semibold">frontend designs</span> to powerful{" "}
          <span className="text-white font-semibold">backend systems</span>. Our expert{" "}
          <span className="text-white font-semibold">UI/UX team</span> crafts user-friendly experiences, while{" "}
          <span className="text-white font-semibold">data analysis</span> and{" "}
          <span className="text-white font-semibold">AI</span> drive smarter decisions and innovation. Whether building new 
          products or optimizing existing ones, ByteMorphIT transforms your ideas into impactful digital solutions.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src="https://via.placeholder.com/500"
          alt="ByteMorphIT"
          className="w-full max-w-md md:max-w-lg h-auto object-cover"
        />
      </div>
    </section>



  );
}
