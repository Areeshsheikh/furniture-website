import Image from "next/image";

export default function Footer() {
  return (
    <>
    <div className="">
        <div>
          
              <div className="bg-[#EEEFFB] text-[#8A8FB9]">
  <div className="max-w-screen-xl mx-auto px-8 h-[279px] flex items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      
      <div className="footer-column">
        <h3 className="text-[#000000] text-[38px] font-Josefin Sans mb-4">Hekto</h3>
        <div>
          <form className="flex">
            <input className="font-Lato text-[16px] rounded-[5px]" placeholder="Enter Email Address" type="text" />
            <button className ="bg-[#FB2E86] text-[#EEEFFB] p-1"type="submit">Sign Up</button>
          </form>
          <div className="font-Lato text-[16px]">Contact Info</div>
          <div className="font-Lato text-[16px]">17 Princess Road, London, Greater London NW1 8JR, UK</div>
        </div>
      </div>
      
      
      <div className="footer-column">
        <h3 className="text-[#000000] font-Lato text-[16px] mb-4">Catagories</h3>
        <ul>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Laptops & Computers</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Cameras & Photography</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Smart Phones & Tablets</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Video Games & Consoles</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Waterproof Headphones</a></li>
        </ul>
      </div>

      
      <div className="footer-column">
        <h3 className="text-[#000000] font-Lato text-[16px] mb-4">Customer Care</h3>
        <ul>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">My Account</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Discount</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Returns</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Orders History</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Order Tracking</a></li>
        </ul>
      </div>

      
      <div className="footer-column">
        <h3 className="text-[#000000] font-Lato text-[16px] mb-4">Pages</h3>
        <ul>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Blog</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Browse the Shop</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Category</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Pre-Built Pages</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">Visual Composer Elements</a></li>
          <li><a href="/" className="text-sm text-#8A8FB9 hover:text-white">WooCommerce Pages</a></li>
        </ul>
      </div>

    </div>
  </div>
</div>


          

        </div>
        <div className="bg-[#E7E4F8] flex gap-[25px] justify-between items-center">
            <div className="max-w-[1920px] mx-auto px-[155px] h-[53px] w-[1920px] jutify-between flex items-center ">
                <p className="m-0 p-0 text-[#9DA0AE]">©Webecy - All Rights Reserved</p>
                </div>
                <div className="flex px-[155px] text-[#1A1A8C]">
                    <div className="flex gap-[20px]">
                      
                <a href="/"><i className="bi bi-facebook"></i></a>
                <a href="/"><i className="bi bi-instagram"></i></a>
                <a href="/"><i className="bi bi-twitter"></i></a>
                
                
                </div>
                

            </div>
            

        </div>
      
      </div>
      </>
    
  );
}
