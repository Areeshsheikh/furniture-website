import Image from "next/image";
import Link from "next/link";


export default function Griddefault() {
  return (
    <div className="">
      
      <div className="bg-[#F6F5FF] max-w-[1790px] mx-auto h-[280px] items-center">
      <div className="max-w-[1790px] mx-auto px-[115px] flex gap-[70px] items-center">
      <h1 className="mt-[120px] text-[36px] font-bold text-[#101750]">Shop Grid Default</h1>
        </div>
      
      <div className="max-w-[1790px] mx-auto px-[115px] flex gap-[70px] items-center"> 
      <div className="links flex gap-[15px] items-center">
                <Link href="/">Home</Link>
                <Link href="/">Pages</Link>
              <div className="text-[#FB2E86]">
                <Link href="/">Shop Grid Default</Link>
                
                </div>
              </div>
      </div>
      </div>
      <div className="py-4 flex flex-col lg:flex-row justify-between px-8">
        <div>
          <h1 className="text-[#151875] text-2xl font-semibold font-[Josefin Sans] mb-2">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="perPage"
              className="text-sm font-medium text-gray-700"
            >
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sortBy"
              className="text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium text-gray-700">
              View:
            </label>
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      </div>
      
        
      
    
  );
}

