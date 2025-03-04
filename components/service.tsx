"use client";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import ServiceCard from "./ui/service-card";


// supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// service section
export default function Service() {
  const tableName = "service";

  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchServiceData() {
    const { data, error } = await supabase.from(tableName).select("*");
    
    if (error) {
      console.error("Error while getting the data: ", error);
      setLoading(false);
      return;
    }

    setServices(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchServiceData();
  }, []);

  return (
    <section className="bg-gradient-to-r from-black via-black to-slate-800 overflow-hidden flex flex-col items-center min-h-screen w-full">
      <h1 className="font-space text-[2.6rem] mt-16 text-white">SERVICES</h1>

      <hr className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-400 via-amber-500 to-orange-600 border-0 rounded-sm dark:bg-gray-700" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 p-16 items-center justify-center">
        {loading ? (
          <div className="col-span-full flex items-center justify-center min-h-[200px]">
            <p className="text-emerald-400 font-space text-4xl font-bold">Loading...</p>
          </div>
        ) : services.length > 0 ? (
          services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))
        ) : (
          <p className="text-red-400 font-space text-3xl col-span-full text-center">
            No services available.
          </p>
        )}
      </div>
      <button className="text-white bg-black border border-amber-500 p-3 mb-10 rounded-sm font-manrope transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Let's Connect</button>


    </section>
  );
}
