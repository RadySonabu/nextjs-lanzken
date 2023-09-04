import Footer from '@/components/index/Footer'
import MyNavbar from '@/components/index/Navbar'
import React from 'react'

const products = [
    {
      id: 1,
      name: 'Chicken Inasal',
      href: '#',
      imageSrc: 'https://media.istockphoto.com/id/1316967319/photo/chicken-inasal-a-variant-of-lechon-manok-on-a-banana-leaf-on-top-of-wooden-platter-it-is.jpg?s=612x612&w=0&k=20&c=a3BxaJuUdEfd4gG2k5_w-iDtuf_pbHVgvma8EkE-nVQ=',
      imageAlt: "",
      price: 'P349',
      
    },
    
    {
        id: 2,
        name: 'Fried Legpops',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1056651714/photo/fried-chicken-wings-and-chicken-legs.jpg?s=612x612&w=0&k=20&c=7XWanAjRFSePK0VXHG5WwNg0SfUEWJTddgL3XKnV1KM=',
        imageAlt: "",
        price: 'P299',
        
      },

      {
        id: 3,
        name: 'Chicken Barbecubes',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=0&k=20&c=IsvHBVukF10ZLODFrM0OiqkyDgd35Dd1L6oq3fwOE4I=',
        imageAlt: "",
        price: 'P49',
        
      },

      {
        id: 4,
        name: 'Grilled Chick Breast',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/580114116/photo/grilled-chicken-fillets-in-a-spicy-marinade.jpg?s=612x612&w=0&k=20&c=ZpRLP1xUUtAoiXPSGxPh9HUJ9L5JVh9wIfd-cRYTj1k=',
        imageAlt: "",
        price: 'P499',
        
      },

      {
        id: 5,
        name: 'Chick in Nuggets',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/700771078/photo/fried-crispy-chicken-nuggets-with-ketchup-on-white-board.jpg?s=612x612&w=0&k=20&c=3VTbi_VYMo6KBKXuMacXgM0Z1r9yinWb97qLeuE5iVw=',
        imageAlt: "",
        price: 'P199',
        
      },

      {
        id: 6,
        name: 'Chick in Burger',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1202811884/photo/vegan-meatless-plant-based-protein-chicken-strip-burger-on-a-whole-wheat-bun-with-lettuce.jpg?s=612x612&w=0&k=20&c=lKhSG7nAzsSOTTQLTBg2tTtuJh0RGGt6yy5P9LANJag=',
        imageAlt: "",
        price: 'P99',
        
      },

      {
        id: 7,
        name: 'Chicken Wings',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.jpg?s=612x612&w=0&k=20&c=SH8ZCkEKuWD_wxulpntIJ0uD4yRnUf9UXovQwSwrmmA=',
        imageAlt: "",
        price: 'P259',
        
      },

      {
        id: 8,
        name: 'Chick in Rice',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/672810138/photo/a-traditional-asian-dish-pilaf-with-meat-mushrooms-and-pepper-capi-in-a-bowl-on-a-dark-wooden.jpg?s=612x612&w=0&k=20&c=aDB8wTyGNycfOv0h3VQHj8GaMprTvDWcXdn4zRvumUg=',
        imageAlt: "",
        price: 'P79',
        
      },
  ]

function Menu() {
  return (
    <div>
        <MyNavbar/>

        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">WHAT'S HOT</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

        <Footer/>
    </div>
  )
}

export default Menu