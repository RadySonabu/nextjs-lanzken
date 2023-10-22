import Image from 'next/image'
import React from 'react'

function Content() {
  return (
    <div>
         <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Pride Chicken!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            The delicious fried chicken are here.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src="https://media.istockphoto.com/id/1316967319/photo/chicken-inasal-a-variant-of-lechon-manok-on-a-banana-leaf-on-top-of-wooden-platter-it-is.jpg?s=612x612&w=0&k=20&c=a3BxaJuUdEfd4gG2k5_w-iDtuf_pbHVgvma8EkE-nVQ="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://media.istockphoto.com/id/1056651714/photo/fried-chicken-wings-and-chicken-legs.jpg?s=612x612&w=0&k=20&c=7XWanAjRFSePK0VXHG5WwNg0SfUEWJTddgL3XKnV1KM="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=0&k=20&c=IsvHBVukF10ZLODFrM0OiqkyDgd35Dd1L6oq3fwOE4I="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://media.istockphoto.com/id/580114116/photo/grilled-chicken-fillets-in-a-spicy-marinade.jpg?s=612x612&w=0&k=20&c=ZpRLP1xUUtAoiXPSGxPh9HUJ9L5JVh9wIfd-cRYTj1k="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://media.istockphoto.com/id/700771078/photo/fried-crispy-chicken-nuggets-with-ketchup-on-white-board.jpg?s=612x612&w=0&k=20&c=3VTbi_VYMo6KBKXuMacXgM0Z1r9yinWb97qLeuE5iVw="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://media.istockphoto.com/id/1202811884/photo/vegan-meatless-plant-based-protein-chicken-strip-burger-on-a-whole-wheat-bun-with-lettuce.jpg?s=612x612&w=0&k=20&c=lKhSG7nAzsSOTTQLTBg2tTtuJh0RGGt6yy5P9LANJag="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.jpg?s=612x612&w=0&k=20&c=SH8ZCkEKuWD_wxulpntIJ0uD4yRnUf9UXovQwSwrmmA="
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Content