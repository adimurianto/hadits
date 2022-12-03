"use client";

import { useEffect, useState } from "react";
import Footers from "./common/footers";
import Headers from "./common/headers";
import axios from "axios";
import { Hadits } from "./types/hadits";

interface haditsPageProps {
  hadits: Hadits
}

export default function Home({hadits}: haditsPageProps) {
  const [list, setList] = useState(hadits);

  useEffect(()=>{
      const loadHadits = async ()=>{
        try {
          const result = await axios.get("https://api.hadith.gading.dev/books/bukhari?range=1-10");
          const initialData = result.data;
          setList(initialData);
        } catch (error) {
          console.log(error);
        }
      }
      loadHadits();
  },[])
  
  console.log('List Hadits : ', list?.data?.hadiths);

  return (
    <div>
      <Headers />

      <main className="overflow-hidden shadow sm:rounded-lg">
        {
          list?.data?.hadiths.map((item:any, index:number) => {
            return (
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg font-large leading-6 text-white text-right">{item.arab}</h2>
                <p className="mt-1 text-sm text-gray-500 w-full">{item.id}</p>
                <hr className="w-full"/>
              </div>
            )
          })
        }

      </main>

      <Footers />
    </div>
  )
}