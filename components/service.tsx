import ServiceCard from "./ui/service-card";


export default function Service(){
    return(
        <section className="bg-gradient-to-r from-black via-black to-slate-800 overflow-hidden flex flex-col items-center h-screen w-full">
            {/* <h1 className="font-space text-[2.6rem] mt-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-600">SERVICES</h1> */}
            <h1 className="font-space text-[2.6rem] mt-16 text-white">SERVICES</h1>

            <hr className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-400 via-amber-500 to-orange-600 border-0 rounded-sm dark:bg-gray-700"/>

            <div className="flex flex-row gap-8 mt-16 overflow-hidden flex-wrap p-10 items-center justify-center">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />

            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            
           
           
            </div>
        </section>
    )
}