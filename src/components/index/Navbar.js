"use client"
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Menu', href: '/menu', current: false },
  { name: 'Deals', href: '/deals', current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MyNavbar() {
  return (
    <div className="min-h-full">
        <Disclosure as="nav" className="bg-white" >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image width="400" height="400"
                        className="h-18 w-20"
                        src="https://t4.ftcdn.net/jpg/02/58/12/45/240_F_258124515_nTOLZOB7kQIsEAAVR8qA5fvJ7zeD3Smg.jpg"
                        alt="Your Company"
                      />
                    </div>

                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-10">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray text-black'
                                : 'text-black hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                 

                  <div class="flex space-x-0 justify-right">
                      <div> 
                        
                      <a href="/signin" title="" class="inline-block px-6 py-2 border-2 border-black text-black font-medium text-xs leading-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" role="button"> Sign in </a>
 
                      </div>   
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-white text-black' : 'text-black hover:bg-gray-700 hover:text-black',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        </div>

  )
}
