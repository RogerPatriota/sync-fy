import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url(/v882-kul-35.jpg)] bg-cover bg-center">
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-zinc-400 text-8xl font-hero">Transform a
          <span className="text-green-600"> Spotify </span><br/> 
          playlist to a 
          <span className="text-red-600"> YouTube</span>
        </h1>

        <div className="bg-green-600 rounded-full p-2">
          <ArrowDown strokeWidth={3}/>
        </div>
                
      </div>
    </div>
  )
}