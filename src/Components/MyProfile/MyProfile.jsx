import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div
            className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 pb-8">

                <h1 className='text-5xl text-center pb-8'> Welcome</h1>
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'></img>
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img src={user.photoURL} alt="" />
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold text-2xl">{user.displayName}</h2>
                
            </div>
            
            <div className="p-4 border-t mx-8 mt-2">
                <button className=" block mx-auto rounded-full hover:shadow-lg font-semibold  px-6 py-2">Email : {user.email} </button>
            </div>
        </div>
    );
};

export default MyProfile;