import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';
import {TodoMain} from '../components/TodoMain.js'
import IndexCSS from '../index.css'

export default function Home({
    user,
    setAuthState,
    setUser
}) {

    const signOutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setAuthState('login');
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className=''>
            Ana ekrana hosgeldiniz
            - {user}

            <button 
                onClick={signOutHandler}
                className='w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                
                Çıkış Yap
            </button>
            <TodoMain />
        </div>
    )
}