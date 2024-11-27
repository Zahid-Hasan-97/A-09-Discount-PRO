import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {

    // const authInfo = useContext(AuthContext);
    // console.log(authInfo)

    const {user, signOutUser} = useContext(AuthContext)
    console.log(user)
 

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log('user sign out successfully')
        })
        .catch(error => console.log("error", error.message))
    }

    const links = <>
        <li><NavLink to='/' className='flex gap-2 focus:bg-red-400  focus:p-2 focus:border focus:text-white focus:rounded-3xl focus:shadow-lg '><img className='w-6' src="https://i.ibb.co.com/LC0J7sb/home-agreement.png" alt="" /><p>Home</p></NavLink></li>
        <li><NavLink to='/brand' className='flex gap-2 focus:bg-red-400  focus:p-2 focus:border focus:text-white focus:rounded-3xl focus:shadow-lg'><img className='w-8' src="https://i.ibb.co.com/X5G89nY/brand.png" alt="" /><p>Brands</p></NavLink></li>
        <li><NavLink to='dev' className='flex gap-2 focus:bg-red-400  focus:p-2 focus:border focus:text-white focus:rounded-3xl focus:shadow-lg'><img className='w-7' src="https://i.ibb.co.com/1mtdfsn/about.png" alt="" /><p>About Dev</p></NavLink></li>
    </>
    return (
        <div className="w-full mx-auto navbar pt-5 pb-5  top-0 left-0 z-50 ">
            <div className="navbar-start ">
                <NavLink to='/' className=" font-bold flex items-center gap-3 text-2xl " > <span><img className='w-12' src="https://i.ibb.co.com/SdCBSq8/discount.png" alt="" /></span >Discount PRO</NavLink>
            </div>
            <div className="navbar-center lg:flex">
                <ul className=" menu-horizontal px-1 gap-10 text-black text-xl font-normal">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? 
                        <div className="dropdown dropdown-end ">
                            <div className='flex items-center gap-3'>
                                <div>{user.displayName}</div>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </div>
                            </div>
                            
                            <ul
                                tabIndex={0}
                                className=" dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                                <li>
                                    <NavLink to='/myprofile'>Profile</NavLink>
                                </li>
                                <li><a onClick={handleSignOut}>Logout</a></li>
                            </ul>
                        </div>
                    
                    :

                    <>
                        <div className='flex gap-4'>
                                <Link className='text-xl border rounded-2xl p-2 bg-red-400 animate-pulse text-white' to='/register'>Register</Link>
                                <Link className='text-xl border rounded-2xl p-2 focus:bg-red-400  focus:p-2 focus:border focus:text-white focus:rounded-2xl focus:shadow-lg' to="/login">Login</Link>
                        </div>
                        
                    </>
                    
                }
            </div>
        </div>
    );
};

export default Header;