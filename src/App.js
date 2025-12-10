import VideoBanner from "./components/VideoBanner";
import ImageCarousel from "./components/ImageCarousel";
import BarberServices from "./components/BarberServices";
import SalonServices from "./components/SalonServices";
import { useEffect } from "react";
import scrollToTop from "./helpers/scrollToTop";

function App() {
  useEffect(() => {
    scrollToTop()
  },[])
  return (
    <div className="relative">
      <VideoBanner/>
      <h2 className="text-center py-4 text-6xl text-red-900">Storms Barbershop</h2>
      <p className="italic text-center text-xl">Storms Barbershop keeps Belfast polished from 18 Anderson Street with curated cuts and warm, attentive service.</p>
      <p className="text-center text-base text-neutral-800">Drop by for a walk-in trim or reserve your chair online—our floor is tuned for calm efficiency and genuine Maine hospitality.</p>
      <section className="py-4">
        <ImageCarousel/>
      </section>
      <section className="py-4 gap-4 flex justify-center relative text-neutral-950">
        <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90">About Us</h2>
        <div className="flex flex-col gap-4 px-4">
        <p className="text-4xl">Who We Are</p>
        <p className="italic">Belfast, ME | Crafted on Anderson Street</p>
        <p className="max-w-lg mx-auto text-xl">
        Storms Barbershop launched to blend modern barbering techniques with the relaxed pace of coastal Maine. Each station on Anderson Street is tuned for precision, comfort, and real conversations.
        </p>
        <p className="max-w-lg mx-auto text-xl">Storms has already become a steady downtown destination where every visit is guided by thoughtful consults and meticulous finishing details.</p>
        <p className="max-w-lg mx-auto text-xl">Our crew of experienced barbers and stylists keeps sharpening their craft so every cut, shave, and style feels personalized to how you live, move, and explore Belfast.</p>
        </div>
        <img className="w-1/4 grayscale object-cover hidden md:block" src='https://images.pexels.com/photos/1895701/pexels-photo-1895701.jpeg'></img>
      </section>
      <section className="w-xl pb-4 px-4 bg-red-950 bg-opacity-10 mt-4 flex flex-col md:flex-row mx-auto justify-center items-center gap-12">
        <BarberServices/>
        <SalonServices/>
      </section>
    </div>
  );
}

export default App;
