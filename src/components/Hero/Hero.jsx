/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

const Hero = () => {
  return (
<>
{/* <!-- hero seciton --> */}
<div className="relative w-full h-[820px] flex flex-col items-center justify-center text-center text-white" >
    <div className="absolute inset-0 opacity-35">
        <video className="min-w-full min-h-full absolute object-cover" 
        src="https://videos.pexels.com/video-files/1216594/1216594-sd_640_360_30fps.mp4"
        type="video/mp4" autoPlay muted loop></video> 
</div>
<div className="video-content mt-0 mb-[17rem] space-y-2 z-10">
        <h3 className="font-bold-2 text-2xl text-[#E5DBC9]">You're always welcome</h3>
        <h1 class="md:text-8xl sm:text-6xl text-4xl md:py-0 text-[#E5DBC9]">Fueling Your Day, ✧</h1>
        <h1 class="md:text-7xl sm:text-5xl text-3xl font-semibold md:ml-[17px] py-0 text-[#E5DBC9]">✺ The Gourmet Way</h1>
</div>  
</div>

{/* <!-- our services section --> */}
<section class="py-10" id="services">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-100 mb-8 text-center">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg" alt="wheat flour grinding"
                    class="w-full h-64 object-cover"/>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Espresso</h3>
                    <p class="text-gray-700 text-base">Espresso is the foundation of many coffee drinks and is known for its rich, 
                        concentrated flavor.  It is brewed by forcing hot water through finely-ground coffee beans under high pressure, 
                        resulting in a small, potent shot of coffee.</p>
                        <details>
                        <summary>Read More</summary>
                        <p>Our Latte Coffee is also
                            a good source of protein and fiber, making it a healthy choice for your family.
                            Espresso has a thick consistency, a strong taste, and a characteristic crema 
                        (a golden layer of foam) on top. Typically served in 1-2 oz portions, it is enjoyed on its own or as the base for lattes, cappuccinos, 
                        and other drinks.
                            </p>
                    </details>
                

                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://www.nescafe.com/mena/sites/default/files/2023-08/Coffee%20Types%20Banner%20Desktop.jpg" alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Americano</h3>
                    <p class="text-gray-700 text-base">
                    An Americano is made by diluting a shot of espresso with hot water, resulting in a coffee that is similar in strength to regular drip coffee but with a different flavor profile. 
                    {/* The addition of water lessens the intensity of the espresso, giving it a smoother taste while retaining the rich espresso notes. The strength of an Americano can be adjusted by changing the ratio of water to espresso, making it a versatile choice for those who enjoy a milder coffee with depth. */}
                    </p>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BoyNnRSQetGlJc3qif1Y_VQXUCGQyfjJFA&s" alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Latte</h3>
                    <p class="text-gray-700 text-base">A latte is a popular coffee drink made with one or more shots of espresso and steamed milk, 
                        topped with a thin layer of milk foam. The creamy milk helps mellow the strong taste of the espresso, creating a smooth, velvety beverage. 
                        
                    <details>
                        <summary>Read More</summary>
                        <p>Our Latte Coffee is also
                            a good source of protein and fiber, making it a healthy choice for your family.
                            Lattes are often flavored with syrups like vanilla, caramel, or hazelnut, making them a customizable option for those who enjoy a balance of coffee and sweetness. 
                            Served in large cups, lattes are perfect for those who prefer a rich and creamy coffee experience.</p>
                    </details>
                    </p>

                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvid7Rti2V2O18lHOD46fsRqEkN4WLH29Ow&s" alt="Coffee"
                    class="w-full h-64 object-cover"/>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Cappuccino</h3>
                    <p class="text-gray-700 text-base">Cappuccino is similar to a latte but has a more equal balance of espresso, steamed milk, and milk foam, typically in a 1:1:1 ratio. 
                        
                    <details>
                        <summary>Read More</summary>
                        <p> Often topped with a sprinkle of cinnamon or cocoa powder, 
                        cappuccino is enjoyed for its frothy, indulgent quality. 
                        It is served in smaller cups than a latte, making it a great choice for those who enjoy a strong coffee flavor with a smooth finish.
                        The milk foam gives cappuccino a lighter texture compared to a latte, while still maintaining the bold flavor of the espresso. </p>
                    </details>
                    </p>
                </div>
            </div>
            {/* <!-- special card --> */}
            <div
                class="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
                <div class="text-center text-black font-medium">Special Coffee</div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnyWvuweBb5GAPiNK8cX979l_qssbNgQG-ug&s" alt="Coffee"
                    class="w-full h-64 object-cover rounded-t-lg"/>
                <div class="p-6 bg-white text-center rounded-b-lg md:min-h-full">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Macchiato</h3>
                    <p class="text-gray-700 text-base"><span class="font-medium underline">Our speciality is </span>
                        
                 A macchiato is a more espresso-forward drink, consisting of a shot of espresso stained with a small amount of steamed milk or milk foam. 
                 {/* The term "macchiato" means "stained" or "spotted" in Italian, referring to the way the milk slightly mellows the intense flavor of the espresso without diluting it.  */}
                 {/* It’s typically served in a small cup and offers a strong, rich coffee experience with just a hint of creaminess, making it ideal for those who prefer a bold coffee flavor with minimal milk. */}
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9PHUJeS_2_J7L_5KEDA4D0eEZdCA0ZJJUA&s" alt="papad"
                    class="w-full h-64 object-cover"/>
                <div class="p-6 text-center">
                    <h3 class="text-xl font-medium text-gray-800 mb-2">Mocha</h3>
                    <p class="text-gray-700 text-base">A mocha is a delicious combination of espresso, steamed milk, and chocolate syrup or cocoa powder, creating a sweet and rich coffee drink. 
                    {/* The addition of chocolate makes the mocha a popular choice for those who enjoy a sweeter coffee with a dessert-like quality. It is often topped with whipped cream and a drizzle of chocolate sauce, 
                    enhancing the indulgent experience. */}


                    <details>
                        <summary>Read More</summary>
                        <p> We offer a variety of Coffee, including plain, Hot, Cold, and flavored. We
                            also
                            offer a variety of sizes and shapes to choose from. Our papad is available in bulk or in
                            individual packages.
                            The balance of the bitterness of the espresso and the sweetness of the chocolate makes the mocha a decadent treat for coffee lovers.
                            </p>
                    </details>
                    </p>
                </div>
            </div>

        </div>
    </div>
</section>

</>
  )
}

export default Hero



