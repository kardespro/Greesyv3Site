/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from "react";
import Head from 'next/head'

const navigation = [
  { name: 'AnaSayfa', href: '/' },
  { name: 'Komutlar', href: '/komutlar' },
  { name: 'Premium', href: '/premium' },
  { name: 'Discord', href: '/discord' },
]

export default function Example({ apii }) {
  return (
    <>
          <div className=" relative bg-black-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative  pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <a href="#" className="bg-green-600 font-medium text-indigo-600 hover:text-indigo-500">
                    Giriş Yap
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-white-400 hover:text-white-500 hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-white-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="bg-green-600 block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-white-50 hover:bg-gray-100"
                  >
                    Giriş Yap
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
<div className="bg-gray-900">

                      </div>
          <main className=" mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="bg-dark-200 sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="text-center text-green-500 block xl:inline">Greesy </span>{' '}
                <span className="block text-indigo-600 text-center text-size-200 xl:inline">Best Bot</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Moderasyon , Müzik , Yönetim Panelli Bir Discord Botu
                      
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Giriş Yap
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                   Botu Davet Et !
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
          alt=""
        />
      </div>
    </div>
            

<div className="py-12 bg-dark-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Birazda Sayısal Konuşalım</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                    İstatistikler
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
                        <div className="w-full rounded-md shadow-lg bg-dark-2 p-5">
                            <h6 className="text-center"><i className="text-7xl text-indigo-400 fad fa-server"></i></h6>
                            <h3 className="mt-5 text-3xl text-center text-white font-bold">
            {apii.swsayi}
                                        <i className="fas text-red-600 fa-exclamation"></i>
                                    <i className="fad fa-spinner-third fa-spin"></i>
                                
                            </h3>
                            <h6 className="text-lg text-center text-gray-100">Sunucu Sayısı</h6>
                        </div>
                        <div className="w-full rounded-md shadow-lg bg-dark-2 p-5">
                            <h6 className="text-center"><i className="text-7xl text-indigo-400 fad fa-users"></i></h6>
                            <h3 className="mt-5 text-3xl text-center text-white font-bold">
            {apii.kulsayi}
                                        <i className="fas text-red-600 fa-exclamation"></i>
                                    <i className="fad fa-spinner-third fa-spin"></i>
                                
                            </h3>
                            <h6 className="text-lg text-center text-gray-100">Kullanıcı Sayısı</h6>
                        </div>
                        <div className="w-full rounded-md shadow-lg bg-dark-2 p-5">
                            <h6 className="text-center"><i className="text-7xl text-indigo-400 fad fa-terminal"></i></h6>
                            <h3 className="mt-5 text-3xl text-center text-white font-bold">
            { apii.cmsayi  }                  
            <i className="fas text-red-600 fa-exclamation"></i>
                                    <i className="fad fa-spinner-third fa-spin"></i>
                                
                            </h3>
                            <h6 className="text-lg text-center text-gray-100">Komut Sayısı</h6>
                        </div>
                        <div className="w-full rounded-md shadow-lg bg-dark-2 p-5">
                            <h6 className="text-center"><i className="text-7xl text-indigo-400 fad fa-icons"></i></h6>
                            <h3 className="mt-5 text-3xl text-center text-white font-bold">
                       {apii.emojisayi}               <i className="fas text-red-600 fa-exclamation"></i>
                                    <i className="fad fa-spinner-third fa-spin"></i>
                                
                            </h3>
                            <h6 className="text-lg text-center text-gray-100">Emoji Sayısı</h6>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
  </>
  )
}
//properties

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://Apigressy.kardespro.repl.co/api')
  const apii = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      apii,
    },
  }
}