


const Cards = () => {
  return (

    <>
    <div className="bg-gray-900">
          <div className="text-center p-10">
              <h1 className="font-bold text-4xl text-white mb-4">Our Products</h1>
              <h1 className="text-3xl"></h1>
          </div><section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

              <div className="w-72 bg-gray-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                      <img src="https://cdn.prod.website-files.com/64c63de40c1e1a75439e3e66/64d265502498315641f0d0cd_tyler-nix-YVdhzpHD7E8-unsplash-p-800.webp"
                          alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                      <div className="px-4 py-3 w-72">
                          <h2 className="text-lg font-bold text-white truncate block capitalize">Our Heritage</h2>
                          <div className="flex items-center">
                              <p className="text-lg font-semibold text-white text-xs cursor-auto my-3">Tracing our roots back to a small garge, our passion for coffee has fueled our journey.</p>
                              <del>
                              </del>

                          </div>
                      </div>
                  </a>
              </div>
              <div className="w-72 bg-gray-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                      <img src="https://cdn.prod.website-files.com/64c63de40c1e1a75439e3e66/64d2654e5f4debb17511f9c2_nathan-dumlao-zUNs99PGDg0-unsplash-p-800.webp"
                          alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                      <div className="px-4 py-3 w-72">
                          <h2 className="text-lg font-bold text-white truncate block capitalize">Bean Philosophy</h2>
                          <div className="flex items-center">
                              <p className="text-lg font-semibold text-white text-xs cursor-auto my-3">Each bean is a story waiting to be brewed, We source globally, ensuring unparalled freshness.</p>

                          </div>
                      </div>
                  </a>
              </div>
              <div className="w-72 bg-gray-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                      <img src="https://cdn.prod.website-files.com/64c63de40c1e1a75439e3e66/64d1244bc579e75db0bf39d1_pexels-los-muertos-crew-7487523-p-800.webp"
                          alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                      <div className="px-4 py-3 w-72">
                          <h2 className="text-lg font-bold text-white truncate block capitalize">Community First</h2>
                          <div className="flex items-center">
                              <p className="text-lg font-semibold text-white text-xs cursor-auto my-3">More than just a coffee shop, We are a hub where memories are made, stories shared, and dreams brewed daily.</p>

                          </div>
                      </div>
                  </a>
              </div>


         </section></div><div>
               {/* <section className="container mx-auto py-12">
                  <h2 className="text-3xl font-bold text-center text-white mb-8">Coffee Origins by Country</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                   

                   
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                          <img src="/src/assets/brazil-coffee.jpg" alt="Brazil Coffee" className="w-full h-48 object-cover" />
                          <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">Brazil</h3>
                              <p className="text-gray-700">Brazil is the largest producer of coffee in the world, known for its nutty and chocolatey flavors.</p>
                          </div>
                      </div>

                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                          <img src="/src/assets/ethiopia-coffee.jpg" alt="Ethiopia Coffee" className="w-full h-48 object-cover" />
                          <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">Ethiopia</h3>
                              <p className="text-gray-700">Ethiopia is considered the birthplace of coffee, offering rich, fruity, and floral coffee profiles.</p>
                          </div>
                      </div>

                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                          <img src="/src/assets/colombia-coffee.jpg" alt="Colombia Coffee" className="w-full h-48 object-cover" />
                          <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">Colombia</h3>
                              <p className="text-gray-700">Colombian coffee is famous for its smooth, balanced, and slightly fruity flavors.</p>
                          </div>
                      </div>
                  </div>
              </section> */}
          </div>
          </>
    
  )
}

export default Cards