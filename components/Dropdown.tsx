'use client'
import React, { useState } from 'react'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className='w-full'>
            <div className="relative inline-block">
                <button
                    type="button"
                    className="px-4 py-2 "
                    onMouseEnter={toggleDropdown}
                    onClick={closeDropdown}
                >Inventories</button>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-60 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-3">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <a
                                    href="/crochets"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Crochets
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/drawings"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Drawings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/jewelries"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Jewelries
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/paintings"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Paintings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/tattoos"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Tattoos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/wearables"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Wearables
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/woodburnings"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Wood Burnings
                                </a>
                            </li>

                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown;