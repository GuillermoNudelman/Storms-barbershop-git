import React, { useEffect } from 'react'
import scrollToTop from '../helpers/scrollToTop'

function About() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className='min-h-screen'>
        <div className='relative'>
            <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-5.jpg'></img>
            <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">About Us</h2>
        </div>
        <section className="py-20 gap-4 flex justify-center relative text-neutral-950">
        <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90"></h2>
        <img src='https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-1/4 grayscale object-cover hidden md:block" ></img>
        <div className="flex flex-col gap-4 px-4">
        <p className="text-4xl">How We Started</p>
        <p className="italic">Belfast, ME | Storms Barbershop</p>
        <p className="max-w-lg mx-auto text-xl">
        Storms Barbershop launched when a small crew of stylists wanted to pair cutting-edge grooming with the neighborly energy of Belfast. Anchored at 18 Anderson Street, we built relationships with locals and travelers alike from day one.
        </p>
        <p className="max-w-lg mx-auto text-xl">Word about our intentional service and calm atmosphere spread quickly. As demand grew, we expanded our roster of artisans while keeping every visit focused on precision, comfort, and real conversations.</p>
        <p className="max-w-lg mx-auto text-xl">We still uphold the same values we opened with: thoughtful craftsmanship, an inviting environment, and a steadfast commitment to helping clients feel confident through every season.</p>
        </div>
        
      </section>
      <section className="py-20 gap-4 flex justify-center relative text-neutral-950 bg-red-950 bg-opacity-10">
        <h2 className="text-9xl hidden lg:block absolute top-64 -left-48 text-red-900 rotate-90">Our Story</h2>
        <div className="flex flex-col gap-4 px-4">
        <p className="text-4xl">Who We Are</p>
        <p className="italic">Dedicated Professionals</p>
        <p className="max-w-lg mx-auto text-xl">
        Storms Barbershop is a relaxed, inclusive space where neighbors stop by between errands and visitors find a calm escape. Every stylist on our floor brings a different specialty, yet we all share the same focus on precise cutting and warm hospitality.
        </p>
        <p className="max-w-lg mx-auto text-xl">We believe the best cuts come from listening. Storms has become a meeting place for laughter, storytelling, and intentional styling that feels unmistakably local.</p>
        <p className="max-w-lg mx-auto text-xl">Our team continues to grow, guided by thoughtful mentorship and a commitment to techniques that keep Storms Barbershop at the forefront of modern grooming.</p>
        </div>
        <img src='https://images.pexels.com/photos/7195808/pexels-photo-7195808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-1/4 object-cover hidden md:block" ></img>
      </section>
    </div>
  )
}

export default About