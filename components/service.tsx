import ServiceCard from "./ui/service-card";

import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
const tableName = 'service'
async function fetchServiceData(){
    const {data, error} = await supabase.from(tableName).select('*');

    if(error){
        console.log('Error while getting the data: ', error)
        return;
    }
    console.log('Data: ', data)

}


export default function Service(){
    return(
        <section className="bg-gradient-to-r from-black via-black to-slate-800 overflow-hidden flex flex-col items-center h-screen w-full">
            {/* <h1 className="font-space text-[2.6rem] mt-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-600">SERVICES</h1> */}
            <h1 className="font-space text-[2.6rem] mt-16 text-white">SERVICES</h1>

            <hr className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-400 via-amber-500 to-orange-600 border-0 rounded-sm dark:bg-gray-700"/>

            <div className="flex flex-row gap-8 mt-16 overflow-hidden flex-wrap p-10 items-center justify-center">
            <ServiceCard title="Frontend" description="we work" icon="https://zqxjnmmnnoowuipnewcz.supabase.co/storage/v1/object/sign/images/public/ui:ux.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHVibGljL3VpOnV4LnBuZyIsImlhdCI6MTc0MDA2NTYzOSwiZXhwIjoxNzcxNjAxNjM5fQ.bhlbuIxsgglz0ANrPv7OFKjTClYuX6RLWDfl12PUb0k" />
            
            
           
           
            </div>
        </section>
    )
}