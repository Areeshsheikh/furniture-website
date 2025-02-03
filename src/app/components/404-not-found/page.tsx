import Image from "next/image";
import Link from "next/link";


export default function found() {
  return (
    <div className="">
      
      <div className="bg-[#F6F5FF] max-w-[1790px] mx-auto h-[280px] items-center">
      <div className="max-w-[1790px] mx-auto px-[115px] flex gap-[70px] items-center">
      <h1 className="mt-[120px] text-[36px] font-bold text-[#101750]">404 Not Found</h1>
        </div>
      
      <div className="max-w-[1790px] mx-auto px-[115px] flex gap-[70px] items-center"> 
      <div className="links flex gap-[15px] items-center">
                <Link href="/">Home</Link>
                <Link href="/">Pages</Link>
              <div className="text-[#FB2E86]">
                <Link href="/">404 Not Found</Link>
                
                </div>
              </div>
      </div>
      </div>
      </div>
     );
    }