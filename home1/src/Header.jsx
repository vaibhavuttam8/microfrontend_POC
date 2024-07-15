import React from 'react' 
import MiniCart from "cart/MiniCart"
import Login from "cart/Login"


export default function Header(){
    return(
        <div className="text-7xl font-bold text-blue-500">
        <div className='flex'>
            <div className='flex-grow'>Kitten Karaoke</div>
            <div className='flexEnd'>
                <MiniCart />
                <Login />
            </div>
        </div>
            
        </div>
    )
}