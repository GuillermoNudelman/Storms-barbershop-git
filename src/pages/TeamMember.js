import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import scrollToTop from '../helpers/scrollToTop'

function TeamMember() {
    const params = useParams()
    const [member, setMember] = useState({})
    const members = {
        sierra: {
            name: 'Sierra',
        desc: `
        Sierra, a talented female hairstylist, had always been drawn to the world of beauty and grooming. Growing up in a quiet town, she often experimented with hairdos on her friends and family, showcasing an innate talent for creating stunning looks. Her childhood fascination eventually blossomed into a passion, and she decided to pursue a career in hairstyling.

        After graduating from beauty school with top honors, Sierra set her sights on Belfast. She heard about "Belfast Barbershop," a refined yet welcoming space along the waterfront, and knew she'd found the right next chapter.

        Sierra believed her skills could add a fresh dimension to the shop. After perfecting her portfolio, she approached Billy, the owner, and her dedication quickly earned her a seat on the floor.

        Over time, Sierra's talent and enthusiasm became evident to both her colleagues and Belfast Barbershop clients. She seamlessly wove modern styling techniques into classic barbering, helping the shop balance forward-looking flair with tradition.
        `,
            image: 'https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            subheader: 'Expert Stylist'
        },
        billy: {
            name: 'Billy',
        desc: `
        Billy, the charismatic owner of Belfast Barbershop, has always held a deep love for the art of traditional barbering. Born and raised near Belfast Harbor, he learned the importance of community and hard work from a young age. Billy's father had been a barber, and he remembers watching him transform clients with expert precision.

        After honing his skills through years of apprenticeship under his father's guidance, Billy decided to continue their family's legacy by opening Belfast Barbershop. He wanted to build a space where people could not only get a top-notch haircut but also relax, unwind, and connect with neighbors.

        Belfast Barbershop quickly became a beloved institution in town. It is more than a barbershop; it is a community hub where locals gather for conversation, camaraderie, and the comforting feeling of belonging.

        Over the years, Billy's commitment never wavered. He believes in the timeless art of barbering, where a well-executed haircut can restore confidence and provide a sense of renewal. Billy is known for his warm demeanor, impeccable skills, and his ability to make every guest feel like a cherished friend.

        Despite the fast-paced world around him, Billy remains dedicated to preserving the traditions of the shop. He mentors young barbers, passing down the wisdom he acquired from his father and instilling in them the values of craftsmanship and community.
        `,
            image: 'https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            subheader: 'Master Barber'
        },
        jonny: {
            name: 'Jonny',
        desc: `
        Jonny, the talented stylist at Belfast Barbershop, brings a unique flair to the establishment. Growing up in a family of artists, he was drawn to hair styling at an early age and often experimented with bold looks on friends and family.

        After completing his formal education, Jonny came to Belfast searching for a place that aligned with his vision of artistic expression. He discovered Belfast Barbershop, a refined yet welcoming space celebrated for its combination of precision and personality.

        The shop welcomed Jonny's unique perspective with open arms. Billy, the owner, recognized his passion and creativity and invited him to join the floor alongside the barbers.

        Jonny's daring, avant-garde designs attracted clients seeking something beyond the conventional. From vibrant colors to sculpted fades, his creations showcase both artistic spirit and attention to detail.

        What makes Jonny truly special is his ability to listen and collaborate, treating every guest like a canvas waiting to be transformed. His eclectic approach has become a celebrated part of Belfast Barbershop's reputation for innovation.
        `,
            image: 'https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            subheader: 'Expert Stylist'
        }
    }
    useEffect(() => {
        scrollToTop()
        if(params.id === 'sierra') {
            setMember(members.sierra)
        }
        if(params.id === 'billy') {
            setMember(members.billy)
        }
        if(params.id === 'jonny') {
            setMember(members.jonny)
        }
      },[])
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