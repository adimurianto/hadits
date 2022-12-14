"use client";

import { useEffect, useState } from "react";
import Footers from "./common/footers";
import Headers from "./common/headers";
import axios from "axios";
import { Hadits } from "./types/hadits";
import { perawi } from "./types/perawi";
import { useSelector } from "react-redux";

export default function Home () {
  const perawiSelected = useSelector((state:any) => state?.perawi);
  
  // Set Default Value, Because we can't set props on Home
  let dataHadits:Hadits = {
    'code': 1,
    'data': {'id':'0','name':'','hadiths':[]},
    'error': false,
    'message': ''
  };

  let dataPerawi:perawi = {
    'data': [],
    'message': '',
    'code': 0,
    'error':false
  }

  // Create state for list data hadits
  const [list, setList] = useState(dataHadits);

  useEffect(()=>{
      const loadHadits = async ()=>{
        try {
          const result = await axios.get(`https://api.hadith.gading.dev/books/${(perawiSelected ? perawiSelected?.perawi : 'bukhari')}?range=1-15`);
          const initialData = result.data;
          setList(initialData);
        } catch (error) {
          console.log(error);
        }
      }
      loadHadits();
  },[perawiSelected])

  return (
    <div>
      <Headers result={dataPerawi} />

      <main className="overflow-hidden shadow sm:rounded-lg">
        {
          list?.data?.hadiths.map((item:any, index:number) => {
            return (
              <div key={index} className="px-4 py-5 sm:px-6">
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