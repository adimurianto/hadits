"use client";

import Footers from "./common/footers";
import Headers from "./common/headers";
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Home() {
  return (
    <div>
      <Headers />

      <main className="overflow-hidden shadow sm:rounded-lg">
        {
          [0,1,2,3,4,5,6,7,8,9].map((index) => {
            return (
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg font-large leading-6 text-white">Hadits Berbagai Perawi</h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Kumpulan hadits dari berbagai perawi kami sajikan disini.</p>
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