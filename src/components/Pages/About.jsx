/* eslint-disable react/jsx-no-undef */

import Footer from "../Footer/Footer"


const About = () => {
  return (
    <>

       {/* <!-- about us --> */}
<section className="bg-gray-100" id="aboutus">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg">
                Aroma Restaurant is a culinary destination that blends authentic flavors with a modern dining experience. Established with a passion for 
                crafting dishes that celebrate both traditional and contemporary cuisine, Aroma prides itself on using the freshest ingredients sourced locally and globally. 
                Our expert chefs, with years of experience, curate a menu that caters to diverse palates, offering a range of dishes from comfort foods to gourmet selections. 
                With a warm, inviting ambiance and a commitment to exceptional service, Aroma is dedicated to creating memorable dining experiences for every guest.</p>
            </div>
            <div className="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
    
</section>
<Footer/>
    </>
 
  )
}

export default About