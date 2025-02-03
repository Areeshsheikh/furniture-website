import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="h-[764px] flex items-center justify-between bg-[#F2F0FF]">
      <div className='ml-[184px] mt-[625px]'>
      <Image
          src="/images/Ellipse.png"
          alt="Ellipse"
          width={15}
          height={15}
        />
      </div>
      <div className="ml-[70px]">
      <Image
          src="/images/image 32.png" 
          alt="Lamp"
          width={387}
          height={387}
        />
        </div>
      
      <div className="max-w-[644px] h-[248px] mb-10 lg:mb-0 text-center lg:text-left">
        <p className="text-[#FB2E86] font-Lato text-[16px]">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-[53px] lg:text-5xl font-bold text-[#000000] mb-4">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="text-[#8A8FB9] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <li>
          <a href='/' className="inline-block bg-[#FB2E86] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition">
          Shop Now
          </a>
        </li>
    </div>

      
      <div className="mr-[184px] flex space-x-6">
        <Image
          src="/images/sofa promotional header.png"
          alt="Sofa"
          width={629}
          height={629}
          
        />
      </div>
      </section>
    
  );
}
      
      export function Hero() {
        return (
            <div className='bg-[#F2F0FF] p-1 flex justify-center items-center'>
           <Image
            src="/images/page nav.png"
            alt='page nav'
            width={67}
            height={15}
            className=''
            />
            </div>
        )
      }





    export function Hero1() {
        return (
         
         <div className='pt-32'>
            <h2 className='text-3xl text-[#1A0B5B] text-center font-bold'>Featured Products</h2>
            <div className='p-1 flex justify-center items-center'>
            <Image
             src="/images/featured product(1).png"
             alt='product(1)' 
             width={270}
             height={361}
             className=''
             />
             <Image
             src="/images/featured product(2).png"
             alt='product(2)'
             width={270}
             height={361}
             className=''
             />
             <Image
             src="/images/featured product(3).png"
             alt='product(3)'
             width={270}
             height={361}
             className=''
             />
             <Image
             src="/images/featured product(4).png"
             alt='product(4)'
             width={270}
             height={361}
             className=''
             />
             </div>
             <div className='mt-[30px] flex text-center justify-center'>
                <Image
                src="/images/slider.png"
                alt='slider'
                width={91}
                height={4}
                className=''
                />
             </div>
             <div className='pt-32'>
                <h2 className='text-3xl text-center text-[#151875] font-bold'>Leatest Products</h2>
             </div>
             <div className="links flex gap-[40px] text-center justify-center mt-[23px] text-[#151875]">
              <div className="text-[#FB2E86] text-center underline">
                <Link href="/">New Arrival</Link>
                </div>
                <Link href="/">Best Seller</Link>
                <Link href="/">Featured</Link>
                <Link href="/">Special Offer</Link>
               </div>

               <div className='mt-[60px] gap-[25px] p-1 flex justify-center items-center'>
               
               <Image
                src="/images/component1.png"
                alt='component1'
                width={360}
                height={306}
                className=''
                />
                <Image
                src="/images/component2.png"
                alt='component2'
                width={360}
                height={306}
                className=''
                />
                <Image
                src="/images/component3.png"
                alt='component3'
                width={360}
                height={306}
                className=''
                />
                </div>
                <div className='mt-[60px] gap-[25px] p-1 flex justify-center items-center'>
                <Image
                src="/images/component4.png"
                alt='component4'
                width={360}
                height={306}
                className=''
                />
                <Image
                src="/images/component5.png"
                alt='component5'
                width={360}
                height={306}
                className=''
                />
                <Image
                src="/images/component6.png"
                alt='component6'
                width={360}
                height={306}
                className=''
                />
               </div>
                 <section className="my-16  text-center">
                       <h2 className="text-3xl text-[#151875] font-bold mb-8">What Shopex Offer!</h2>
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#151875]">
                         {[
                           { icon: "/images/free-delivery.png", title: "Free Delivery" },
                           { icon: "/images/cashback.png", title: "100% Cash Back" },
                           { icon: "/images/premium-quality.png", title: "Quality Product" },
                           { icon: "/images/support.png", title: "24/7 Support" },
                         ].map((feature, index) => (
                           <div
                             key={index}
                             className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
                           >
                             <Image
                               src={feature.icon}
                               alt={feature.title}
                               width={60}
                               height={60}
                               className="mb-4 mx-auto"
                             />
                             <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                             <p className="text-gray-600 text-sm">
                               Lorem ipsum dolor sit amet consectetur adipisicing.
                             </p>
                           </div>
                         ))}
                       </div>
                     </section>
                  <div className="flex justify-center items-center pt-32 bg-[#F1F0FF]">
                 <Image
                 src="/images/unique feature sofa.png"
                 alt='sofa'
                 width={1050}
                 height={800}
                 className=''
                 />
                  </div>
                  <div className='pt-32'>
                  <h2 className='text-3xl text-center text-[#151875] font-bold'>Trending Products</h2>
                  <div className='flex justify-center items-center'>
                  <Image
                  src="/images/trending products.png"
                  alt='product'
                  width={270}
                  height={350}
                  className=''
                  />
                   <Image
                  src="/images/trending products (1).png"
                  alt='product1'
                  width={270}
                  height={350}
                  className=''
                  />
                   <Image
                  src="/images/trending products (2).png"
                  alt='product2'
                  width={270}
                  height={350}
                  className=''
                  />
                   <Image
                  src="/images/trending products (3).png"
                  alt='product3'
                  width={270}
                  height={350}
                  className=''
                  />
                  </div>
                  <div className="gap-1 p-1 flex justify-center items-center">
                    <Image
                    src="/images/Group 154.png"
                    alt='trending'
                    width={420}
                    height={270}
                    className=''
                    />
                     <Image
                    src="/images/Group 155.png"
                    alt='trending1'
                    width={420}
                    height={270}
                    className=''
                    />
                    <div>
                        <Image
                        src="/images/Trending products list.png"
                        alt='product'
                        width={267}
                        height={74}
                        />
                        <Image
                        src="/images/chair.png"
                        alt='product1'
                        width={267}
                        height={74}
                        />
                        <Image
                        src="/images/chairl.png"
                        alt='product2'
                        width={267}
                        height={74}
                        />
                    </div>
                  </div>
                  </div>
                  <div className='pt-32'>
                    <h2 className='text-3xl text-center text-[#151875] font-bold'>Discount Item</h2>
                    <div className="links flex gap-[40px] text-center justify-center mt-[23px] text-[#151875]">
              <div className="text-[#FB2E86] text-center underline">
                <Link href="/">Wood Chair</Link>
                </div>
                <Link href="/">Plastic Chair</Link>
                <Link href="/">Sofa Colletion</Link>
                </div>
                <div className='gap-1 p-1 flex justify-center items-center'>
               <Image
                        src="/images/discount sofa.png"
                        alt='sofa'
                        width={1214}
                        height={597}
                        className=''
                        />
                        </div>
               </div>
               <div className='max-w-[1920px] pt-32'>
               <h2 className='text-3xl text-center text-[#151875] font-bold'>Top Categories</h2>
               <div className="gap-1 p-1 flex justify-center items-center">
                  <Image src="/images/T.C1.png" alt="Image 1" width={269} height={345} className="" />
                  <Image src="/images/T.C2.png" alt="Image 2" width={269} height={345} className="" />
                  <Image src="/images/T.C3.png" alt="Image 3" width={269} height={345} className="" />
                  <Image src="/images/T.C4.png" alt="Image 4" width={269} height={345} className="" />
                  </div>
               </div>
               <div className='pt-32 flex justify-center items-center'>
               <Image
                        src="/images/Group 162.png"
                        alt='updated'
                        width={1920}
                        height={462}
                        className=''
                        />
               </div>
               <div className='pt-16 flex justify-center items-center'>
               <Image
                        src="/images/image 1174.png"
                        alt='bar image'
                        width={904}
                        height={93}
                        className=''
                        />
                        </div>
                <div className='max-w-[1920px] pt-32'>
                <h2 className='text-3xl text-center text-[#151875] font-bold'>Leatest Blog</h2>
                <div className="gap-1 p-1 flex justify-center items-center">
                  <Image src="/images/Leatest blog.png" alt="Image 1" width={370} height={493} className="" />
                  <Image src="/images/l.b.png" alt="Image 2" width={370} height={493} className="" />
                  <Image src="/images/l.b (1).png" alt="Image 3" width={370} height={493} className="" />
                  </div>
                </div>
         </div>
         
        );
    }
  

