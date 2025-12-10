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
        <p className="italic">Belfast, ME | Since 2023</p>
        <p className="max-w-lg mx-auto text-xl">
        At Belfast Barbershop, our journey began with a deep passion for the craft of barbering and a strong commitment to Belfast's downtown community. Our story unfolded on 1 Beaver St, where our founder connected with neighbors and built lasting relationships with the very first clients.
        </p>
        <p className="max-w-lg mx-auto text-xl">Word quickly spread about the quality of service and welcoming atmosphere we offered. As our reputation grew, so did our shop. We expanded our team of skilled barbers while continuing to deliver precision haircuts and classic shaves that help people feel confident along the coast.</p>
        <p className="max-w-lg mx-auto text-xl">We proudly uphold the same values that guided us from day one: exceptional craftsmanship, a warm and inviting environment, and an unwavering dedication to helping our clients maintain their personal style through every season.</p>
        </div>
        
      </section>
      <section className="py-20 gap-4 flex justify-center relative text-neutral-950 bg-red-950 bg-opacity-10">
        <h2 className="text-9xl hidden lg:block absolute top-64 -left-48 text-red-900 rotate-90">Our Story</h2>
        <div className="flex flex-col gap-4 px-4">
        <p className="text-4xl">Who We Are</p>
        <p className="italic">Dedicated Professionals</p>
        <p className="max-w-lg mx-auto text-xl">
        In the heart of Belfast, a small, unassuming barbershop opened its doors. It was in this modest space that our team began the journey, armed with trusty scissors, razors, and a relentless pursuit of perfection. From the very beginning, our dedication to the craft set us apart.
        </p>
        <p className="max-w-lg mx-auto text-xl">As time went on, Belfast Barbershop became a trusted meeting place where friends gathered, stories were shared, and laughter echoed through the air.</p>
        <p className="max-w-lg mx-auto text-xl">Today, Belfast Barbershop has evolved, but our commitment to excellence remains unchanged. We've expanded our team of talented barbers, each handpicked for their skill and dedication. They are not just professionals; they're artists who understand that a great haircut is an experience that should feel unmistakably local.</p>
        </div>
        <img src='https://images.pexels.com/photos/7195808/pexels-photo-7195808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="w-1/4 object-cover hidden md:block" ></img>
      </section>
    </div>
  )
}

export default About