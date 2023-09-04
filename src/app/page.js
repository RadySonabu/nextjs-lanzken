"use client"
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import MyNavbar from '@/components/index/Navbar'
import Footer from '@/components/index/Footer'
import Content from '@/components/index/Content'

const navigation = [
  { name: 'Menu', href: '#', current: false },
  { name: 'Order', href: '#', current: false },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div className="min-h-full">
        <MyNavbar/>
          
        <Content/>

        <Footer/>
    </div>
  )
}
