import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
     <div className="bg-[#7E33E0]">
    <div className="max-w-[1790px] mx-auto px-[115px] text-white flex justify-between items-center h-[44px]">
        <div className="flex gap-[25px]">
            <div className="flex gap-[10px]">
            <i className="bi bi-envelope"></i>
            <p>mhhasanul@gmail.com</p>
            </div>
            <div className="flex gap-[10px]">
            <i className="bi bi-telephone"></i>
            <p>(12345)67890</p>
            </div>

        </div>
        <div className="flex">
         <div className="flex gap-[15px]">
          <div>
            <Link href="/">english</Link>
            <i className="bi bi-chevron-down"></i>
            </div>
            <div>
            <Link href="/">USD</Link>
            <i className="bi bi-chevron-down"></i>
            </div>
            <div>
            <Link href="/">login</Link>
            <button>
            <i className="bi bi-person"></i>
            </button>
            </div>
            <div>
            <Link href="/">wishlist </Link>
            <button>
            <i className="bi bi-heart"></i>
            </button>
            </div>
            <button>
            <i className="bi bi-cart"></i>
            </button>
            
           
          </div>
           
         

        </div>

    </div>
 </div>
      <div className="bg-[#FFF]">
        <div className="max-w-[1790px] mx-auto px-[115px] flex gap-[70px] h-[40px] items-center">
        <div>
           <h1 className="font-bold text-[34px]">Hekto</h1>
        </div>
        <div className="flex gap-[371px]">
            <div className="links flex gap-[20px] items-center">
              <div className="text-[#FB2E86]">
                <Link href="/">Home</Link>
                <i className="bi bi-chevron-down"></i>
                </div>
                <Link href="/Griddefault">Pages</Link>
                <Link href="/">Products</Link>
                <Link href="/BlogPage">Blog
</Link>
                <Link href="/Shoplist">Shop</Link>
                <Link href="/Contact">Contact</Link>
              
            </div>
            <div>
            <form className="flex">
            <input className="bg-[#E7E6EF] rounded-[2px]" placeholder="" type="text" />
            <button className ="bg-[#FB2E86] text-[#EEEFFB]"type="submit"><i className="bi bi-search"></i></button>
          </form>
      </div>
              
            
            </div>

        </div>

      </div>
      
    
    </>

  );
  }
