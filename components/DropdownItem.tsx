'use client'

import {useState, useRef} from 'react';

const DropdownItem = () => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className='overflow-hidden w-[250px] shadow-sm rounded-md hover:bg-red-500'>
            <button
            className='w-full text-center px-4 py-2 focus:outline-none '
            onClick={() => setIsOpen(!isOpen)}
            >Inventories</button>
            <div
            ref={contentRef}
            className={`transition-height duration-500 ease-in-out ${isOpen ? 'h-auto' : 'h-0'}`}
            style={{height: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0'}}
            >
                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-60 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-3">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <a
                                    href="/crochets"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Crochets
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/drawings"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Drawings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/jewelries"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Jewelries
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/paintings"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Paintings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/tattoos"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Tattoos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/wearables"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Wearables
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/woodburnings"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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

export default DropdownItem