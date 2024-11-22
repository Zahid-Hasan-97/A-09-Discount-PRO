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
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/brand'>Brands</NavLink></li>
        <li><NavLink to='dev'>About Dev</NavLink></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <NavLink to='/' className=" font-bold flex items-center gap-3 text-xl" > <span><img className='w-12' src="/Assets/discount.png" alt="" /></span>Discount PRO</NavLink>
            </div>
            <div className="navbar-center lg:flex">
                <ul className=" menu-horizontal px-1 gap-10 bg-white text-black">
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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <NavLink  to='/myprofile'>Profile</NavLink>
                                </li>
                                <li><a onClick={handleSignOut}>Logout</a></li>
                            </ul>
                        </div>
                    
                    :
                    <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;