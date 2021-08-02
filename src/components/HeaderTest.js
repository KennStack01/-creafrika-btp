/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Link } from 'gatsby'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { StaticImage } from "gatsby-plugin-image"


const navigation = [
    { name: 'Accueil', route: '/', current: false },
    { name: 'Services', route: '/services', current: false },
    { name: 'Projects', route: '/projects', current: false },
    { name: 'Education', route: '/education', current: false },
    { name: 'Contact', route: '/contact', current: false },
]

const activeLinkStyles = { color: "white", backgroundColor: "#239FCD", cursor: "pointer", paddingTop: "", paddingBottom: "", paddingLeft: "", paddingRight: "" }



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HeaderTest() {
    return (
        <Disclosure as="nav" className="">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-curios-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-curios-blue-500">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="flex-1 flex items-center justify-start sm:items-start sm:justify-end md:flex-row md:justify-between">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <StaticImage
                                src='../images/creafrika-btp.png'
                                width={120}
                                quality={95}
                                placeholder="blurred"
                                layout="fixed"
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="WebContract Logo"
                            />
                        </Link>
                        <div className="hidden sm:block sm:ml-6 my-auto">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.route}
                                    className={classNames(
                                    item.current ? 'bg-white text-gray-600' : 'text-gray-900 hover:text-curious-blue-500',
                                    'py-3 px-8 text-sm font-semibold'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                    activeStyle={activeLinkStyles} 
                                    activeClassName="active"
                                >
                                    {item.name}
                                </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <Link
                        key={item.name}
                        to={item.route}
                        className={classNames(
                            item.current ? 'bg-white text-gray-600' : 'text-gray-900 hover:text-curious-blue-500',
                            'block py-3 px-8 rounded-md text-base font-semibold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        activeStyle={activeLinkStyles} 
                        activeClassName="active"
                        >
                        {item.name}
                        </Link>
                    ))}
                    </div>
                </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    )
}
