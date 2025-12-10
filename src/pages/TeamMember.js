import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import scrollToTop from '../helpers/scrollToTop'

const members = {
    sierra: {
        name: 'Sierra',
        desc: `
        Sierra grew up experimenting with hair design and color, always chasing the perfect blend of texture and movement. When Storms Barbershop opened on Anderson Street, she became part of the founding crew and now consults with clients who want refined layers or clean fades.

        Her calm listening style paired with razor-sharp technique keeps every visit feeling effortless and intentional.
        `,
        image: 'https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        subheader: 'Expert Stylist'
    },
    remi: {
        name: 'Remi',
        desc: `
        Remi is Storms Barbershop's lead barber, the steady presence who guides the floor and mentors the team. Their career across New England taught them that a great haircut hinges on both consultation and craft.

        Clients value Remi's thoughtful approach to clean, traditional cuts and their ability to make every guest feel at ease.
        `,
        image: 'https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        subheader: 'Master Barber'
    },
    jin: {
        name: 'Jin',
        desc: `
        Jin brings bold creativity to Storms Barbershop. Inspired by contemporary art and streetwear, they sculpt modern fades, daring colors, and textured looks that still feel grounded for everyday wear.

        Jin treats every appointment as a collaboration, translating stories into confident, wearable style.
        `,
        image: 'https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        subheader: 'Expert Stylist'
    }
}

function TeamMember() {
    const params = useParams()
    const [member, setMember] = useState(members.sierra)

    useEffect(() => {
        scrollToTop()
        setMember(members[params.id] || members.sierra)
    },[params.id])

    return (
      <div className='min-h-screen'>
          <div className='relative'>
              <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-4.jpg'></img>
              <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">Our Team</h2>
          </div>
        <section className="py-20 gap-4 flex justify-center relative text-neutral-950">
          <div className="flex flex-col gap-4 px-4">
            <p className="text-4xl">{member.name}</p>
            <p className="italic">{member.subheader}</p>
            <p className="max-w-lg mx-auto text-xl">{member.desc}</p>
          </div>
          <img src={member.image} className="w-1/4 h-fit grayscale object-cover hidden md:block" ></img>
        </section>
      </div>
    )
}

export default TeamMember
