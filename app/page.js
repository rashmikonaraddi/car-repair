import React from 'react';
import Image from 'next/image';

export default function Landing() {
    return (
      <div className='bg-violet-100 dark:bg-black'>
        <div className="item-center h-[750px] items-center bg-black rounded-[80px] dark:bg-indigo-900 relative flex flex-col mx-[5px]">
            <div className="bg-black-600 h-[80px] md:w-[900px] flex flex-row">
          <Image src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png" alt="logo" width={1} height={1} />
          <div className='hidden md:block font-bold text-red-800 ml-[40px] text-md mt-2.5 mr-[10]'>Home</div>
          <div className='hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]'>About Us</div>
            <div className='hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]'>Pages</div>
            <div className='hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]'>Services</div>
            <div className='hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]'>Shop</div>
            <div className='hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]'>Blog</div>
            <div className='hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]'>Contact</div>
<div className="hidden md:block flex-row">
             <div className="rounded-full bg-green-950 border-4 w-[150px] h-[50px] text-center mt-[10px] text-blue-700">f</div>
            </div>
        </div>
         
        <div className="flex flex-row h-[60%] mt-10 w-full justify-between items-center">
  <div className="text-white md:text-6xl text-2xl font-semibold ml-10 mt-0.5">
    Where Quality Is A<br /> Service Meets The<br/>
    <span className="text-red-500">Open Road</span>

    <div className="text-white text-lg mt-[50px] font-bold">
      Car service is essential for maintaining the performance,<br />
      and longitivity of vehical.From oil changes car services<br />
    </div>

    <div className="flex flex-col md:flex-row space-x-4 mt-15">
      <div className="rounded-full border-4 font-bold text-xl w-[200px] h-[60px] flex items-center justify-center">
        GET STARTED
      </div>
      <div className="rounded-full bg-white border-4 w-18 h-18 flex items-center justify-center">
        <Image
          src="https://cdn-icons-png.flaticon.com/128/527/527995.png"
          alt="icon"
          width={1} height={1}
        />
      </div>
    </div>
  </div>

  <div className="hidden md:block w-[450px] ml-10 mt-15">
    <Image
      src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-1.jpg"
      alt="car"
      className="rounded-2xl"
      width={1} height={1}
    />
  </div>
</div>
<div className="bg-white w-full md:w-[1000px] dark:text-white dark:bg-black md:h-[100px] md:absolute bottom-[-60px] rounded-md shadow-white dark:border-red shadow-md border border-black flex flex-col md:flex-row items-center justify-evenly space-x-2.5 p-5">
  <div className='font-extrabold text-4xl'>
    600+<br/>
   <span className="text-xl font-light">Team member</span> 

  </div>
  <div className='font-extrabold text-4xl md:justify-items-center'>
    2K+<br/>
    <span className="text-xl font-light">Service Complete</span> 
  </div>
  <div className='font-extrabold text-4xl'>
    53+<br/>
    <span className="text-xl font-light">Winning award</span> 
  </div>
  <div className='font-extrabold text-4xl'>
    3k+<br/>
    <span className="text-xl font-light">Client Review</span> 
</div>

</div>
</div>
<div className="bg-amber-50 rounded-[70px] mt-30 dark:bg-violet-950">
  <div className="justify-items-center">
    <div className='text-0.5xl text-red-400 absolute bottom-[-350px]'>LATEST SERVICE</div>
    <div className='md:text-5xl text-2xl font-bold absolute bottom-[-450px] dark:text-white'>Your Trusted Car Provider<br/>
Keeping Your Vehicle</div>
  </div>
  <div className="md:flex-row flex flex-col justify-center md:space-x-10 space-y-4 md:space-y-0 p-4 pt-80">
  <div className="border border-black w-80 md:w-90 h-70 rounded-4xl p-4 dark:text-white">
    <div className='rounded-full bg-white border-4 bg-black-500 ml-30 h-[80px] text-center mt-[20px] w-[80px]'></div>
    <div className='text-2xl font-bold text-center'>Transformation Advising</div>
    <div className='text-xl font-medium text-center'>Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service</div>
  </div>
  <div className="border border-black w-80 md:w-90 h-70 rounded-4xl p-4 dark:text-white">
    <div className='rounded-full bg-white border-4 bg-black-500 ml-30 h-[80px] text-center mt-[20px] w-[80px] dark:text-white'></div>
    <div className='text-2xl font-bold text-center'>Easy Drive Maintenance</div>
    <div className='text-xl font-medium text-center'>Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service</div>
  </div>
  <div className="border border-black w-80 md:w-90 h-70 rounded-4xl p-4 dark:text-white">
    <div className='rounded-full bg-white border-4 bg-black-500 ml-30 h-[80px] text-center mt-[20px] w-[80px]'></div>
    <div className='text-2xl font-bold text-center'>Elite Auto Services</div>
    <div className='text-xl font-medium text-center'>Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service</div>
  </div>
</div>
</div>
<div className="md:flex-row flex flex-col items-center justify-between mt-25 md:mt-50 text-black">
  
  <div className="w-1/2 md:pr-10">
    <div className="md:text-xl font-bold mb-4 md:mb-6 text-red-500 md:ml-10">ABOUT US</div>
    <div className="md:text-5xl mb-4 md:mb-6 md:ml-7 dark:text-white">
      Fast and Reliable Car Care<br/>
Your Car Our Priority
    </div>
    <div className="md:text-xl font-light md:ml-7 dark:text-white">Car service is essential for maintaining the performance and
longevity of your vehicle. From oil changes</div>
<div className='md:text-xl font-medium mt-8 md:ml-12 dark:text-white'>
  <ul>
<li>Fast and Reliable Car Care Your Car Our Priority</li><br/>

<li>Free with Our Services Care for Your Car</li><br/>

<li>Top-notch Care for Your Vehicle Your Vehicle</li><br/>

<li>Expert Service for Your Vehicle Drive Stress</li><br/>

<li>Your Trusted Car Service Provider Keeping</li><br/></ul></div>
    
  </div>

  
  <div className="w-1/2 flex justify-center">
    <Image
      src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
      alt="Example"
      className="w-[450px] md:h-[500px] rounded-4xl shadow-lg"
      width={1} height={1}
    />
  </div>
</div>
<div className="bg-black w-full md:w-[1200px] h-[150px] absolute bottom-[-1800px] md:ml-20 rounded-4xl flex flex-row justify-items-center justify-evenly space-x-2.5">
  <div className='mt-15'>
   <Image src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-2.png" alt="brand" width={1} height={1}/>

  </div>
  <div className='hidden md:block mt-15'>
    <Image src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-5.png" alt="brand" width={1} height={1} />
  </div>
  <div className='hidden md:block mt-15'>
    <Image src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-4.png" alt="brand" width={1} height={1} />
  </div>
  <div className='hidden md:block mt-15'>
    <Image src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-3.png" alt="brand" width={1} height={1} />
</div>
<div className='hidden md:block mt-15'>
<Image src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-1.png" alt="brand" width={1} height={1} />
</div>
</div>
</div>

      
  )
}