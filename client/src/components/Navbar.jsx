import React from 'react'
import { CircleUserRound, Menu, AlignLeft  } from 'lucide-react';
import { useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {

    const [show, setShow] = useState(false);
     const [showBar, setShowBar] = useState(false);

    const showModal = () =>{
          setShow(!show);
    };

    const showNav = () =>{
        setShowBar(!showBar);
  };

  return (
    <>
<div className='hidden lg:flex lg:justify-center lg:pb-2'>
  <div className="fixed w-full flex justify-center items-center border-b border-b-black z-30 border-opacity-40">  
    <div className='flex justify-between w-[1000px] items-center py-5 gap-10'>
      <Link to={"/"}><p id='logo' className='text-4xl font-bold'>Narrative</p></Link>
      <div className='flex justify-center items-center'>
        <ul className='flex justify-center gap-8 items-center text-lg font-normal'>
          <li>Home</li>
          <li>Articles</li>
          <li>About</li>
          <div className="relative">  {/* Added relative container */}
            <CircleUserRound onClick={showModal}/>
            {/* Modal */}
            <div className={`${show ? 'block' : 'hidden'} absolute top-full -ml-20 mt-3`}>
              <ul className='flex flex-col gap-2 h-[100px] border-black border-2 border-opacity-50 w-[100px] justify-center items-center rounded-lg text-base bg-white'>
                <Link to={"/register"}><button>Register</button></Link>
                <div className='w-[85px] h-[0.2px] bg-slate-600 opacity-45'></div>
                <Link to={"/login"}><button>Log in</button></Link>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</div>


<div className='flex lg:hidden lg:justify-center lg:pb-2 z-40'>
  <div className="fixed w-full flex justify-center items-center border-b border-b-black z-30 border-opacity-40">  
    <div className='flex justify-around w-[1000px] items-center py-5 gap-20'>
    <Link to={"/"}><p id='logo' className='text-4xl font-bold'>Narrative</p></Link>
    <div className='flex items-center gap-6'>
      <h1 onClick={showNav}>{showBar ? <AlignLeft size={40} /> : <Menu size={40} />}</h1>
      <div className='z-50'>
       <CircleUserRound onClick={showModal} size={40}/>
       <ul className={`${show ? 'block': 'hidden'} absolute flex gap-4 flex-col -ml-24 mt-3 duration-75 border-black border-2 border-opacity-50 w-[140px] justify-center items-center rounded-lg text-xl bg-white py-10`}>
       <Link to={"/register"}><button>Register</button></Link>
       <div className='w-[85px] h-[0.2px] bg-slate-600 opacity-45'></div>
       <Link to={"/login"}><button>Log in</button></Link>
       </ul>
       </div>
       </div>
       <div className={`h-screen w-screen top-4 ${showBar ? 'right-0' : '-right-[1000px]'}  mt-16 bg-white absolute duration-75` }>
     <ul className='flex flex-col gap-28 pt-24 justify-center items-center text-center text-2xl'>
          <li>Home</li>
          <li>Articles</li>
          <li>About</li>
     </ul>
  </div>
    </div>
    </div>
  </div>
  
 
 
    </>
  )
}

export default Navbar