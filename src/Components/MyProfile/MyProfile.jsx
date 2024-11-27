import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden rounded-3xl">
            <div class="absolute inset-0">
                <img className='w-full rounded-3xl' src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" />
                <div class="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div class="relative z-10 flex flex-col justify-center items-center h-full text-center gap-28">
                <h1 class="text-5xl text-gray-400 font-bold leading-tight mb-4">Welcome to Our Website</h1>
                <div class="max-w-sm mx-auto overflow-hidden bg-gray-800 opacity-90 rounded-lg shadow-lg hover:shadow-blue-400">
                    <div class="relative">
                        <img class="w-full h-48 object-cover" src={user.photoURL} alt="Profile Image"/>
                    </div>
                    <div class="px-6 py-4">
                        <div class="text-xl font-semibold text-gray-800">{}</div>
                    </div>
                    <div class="px-4 ">
                        
                        <span class="inline-block px-4 py-2 font-semibold text-indigo-900 bg-indigo-200 text-xl rounded-full">{user.displayName}</span>
                        
                    </div>
                    <div class="px-6 py-4">
                        <p href="#" className="text-blue-500 border rounded-xl p-3  hover:underline">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;