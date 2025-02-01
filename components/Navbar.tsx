"use client"
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import { AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] =useState(false)    
    const toggleMenu = () => {setIsOpen(!isOpen); }
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const router = useRouter();
          
    const handleSearch = () => {
      if (searchQuery.trim()) {
          router.push(`/search/${encodeURIComponent(searchQuery)}`);
         }};
          
    const handleCombinedClick = () => {
     handleSearch();
     setIsOpen(!isOpen)
    };
          
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          handleSearch();
          }
        };
          
        useEffect(() => {
          window.addEventListener("keydown", handleKeyPress);
            return () => {
              window.removeEventListener("keydown", handleKeyPress);
              };
            }, [searchQuery]);


  return (
    <div className='bg-[#1a1a1a] text-[#c0baba] top-0 flex flex-wrap flex-row justify-between items-center gap-4 p-4 max-[600px]:flex-row'>
                 <div className="flex gap-4 items-stretch sm:h-min-[88px] ">
                    <Link href="/">
                      <Image src="/logo.png" alt="logo" width={200} height={100} style={{ height: "auto" }} className="max-[600px]:w-[250px]"/>
                    </Link>
                 </div>


                 <div className="max-[900px]:hidden flex flex-wrap justify-center items-center gap-8 font-bold text-[20px]">   
                <div className="flex items-center justify-center">
                      {isSearchOpen ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            className="px-4 py-2 rounded-l-md border border-gray-300 text-[15px]"
                          />
                          <button
                            id="search" aria-label="search button"
                            onClick={handleSearch}
                            className="px-4 py-3 bg-green-500 text-white border-gray-300 rounded-r-md "
                          >
                            <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
                          </button>
                          <button
                            id="close-search" aria-label="close search button"
                            onClick={() => setIsSearchOpen(false)}
                            className="px-4 py-3 bg-[#8F95A0] text-white border-gray-300 rounded-r-md"
                          >
                            <X className="cursor-pointer h-4 w-4 hover:text-red-1" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setIsSearchOpen(true)}
                          className=""
                        >
                          <Search size={24} />
                        </button>
                      )}
                 </div>
                 <a href="/" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Home</a> 
                 <div ><Dropdown/></div>
                 <a href="/contact" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">Contact</a>
                 <a href="/aboutme" className="hover:font-bold  hover:underline hover:text-red-500 hover:border-primary transition-colors duration-500">About Me</a>
                </div>




        <button className='min-[901px]:hidden inline-block text-[30px] text-[#c0baba]' onClick={toggleMenu}>
               {
                isOpen?  <AiOutlineClose/> : <AiOutlineMenu/>
               }
        </button>
        {isOpen && (
          
        <div className='flex flex-col justify-between items-center text-center gap-3 basis-full '>
            <Link href='/' className="w-[250px] shadow-sm rounded-md hover:bg-red-500" onClick={() => setIsOpen(!isOpen)}>Home</Link>
            <div ><DropdownItem/></div>
            <Link href='/contact' className="w-[250px] shadow-sm rounded-md hover:bg-red-500" onClick={() => setIsOpen(!isOpen)}>Contact</Link>
            <Link href='/aboutme' className="w-[250px] shadow-sm rounded-md hover:bg-red-500" onClick={() => setIsOpen(!isOpen)}>About Me</Link>
            <div className="flex items-center justify-center">
                      
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search..."
                          className="px-2 py-2 rounded-l-md border border-gray-300  w-[200px] h-[30px]"
                        />
                        <button
                          onClick={handleCombinedClick}
                          className="px-4 py-2 bg-green-500 text-white border-gray-300 rounded-r-md h-[30px] items-center justify-center text-center"
                        >
                          <Search className="cursor-pointer items-center h-4 w-4 hover:text-red-1" />
                        </button>

                      </div>
            </div>

        </div>
         )}
    </div>
  )
}

export default Navbar