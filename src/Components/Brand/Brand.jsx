// src/pages/Brands.js
import React, { useState, useEffect, useContext } from "react";
import brandsData from "../../../public/coupon.json";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

export const getBrandsOnSale = () => {
    return brandsData.filter((brand) => brand.isSaleOn);
};



const Brands = () => {
    const [search, setSearch] = useState("");
    const [brands, setBrands] = useState([]);

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleViewCoupons = (brand) => {
        if (user) {
            // If logged in, navigate to BrandDetails route
            navigate(`/brand/${brand._id}`, { state: { brand } });
        } else {
            // If not logged in, navigate to Login page
            navigate("/login");
        }
    };

    useEffect(() => {
        // Load brand data from JSON
        setBrands(brandsData);
    }, []);

    // Filter brands based on search input
    const filteredBrands = brands.filter((brand) =>
        brand.isSaleOn && brand.brand_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="pt-28">
            {/* Page Title */}
            <div className="pb-10">
                <h1 className="text-3xl font-bold text-red-400 text-center">Brands We Offer</h1>
            </div>

            {/* Search Bar */}
            <div className="mb-6 flex justify-center pb-20">
                <input
                    type="text"
                    placeholder="Search Brand"
                    className="input input-bordered w-full md:w-1/2"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            

            {/* Brand Cards */}
            <div className="w-full flex flex-col gap-10 pb-10">
                {filteredBrands.length > 0 ? (
                    filteredBrands.map((brand) => (

                        <div className="w-full flex gap-8">
                            <div className="p-5 w-1/5 my-auto bg-gray-300 rounded-2xl">
                                <img
                                    src={brand.brand_logo}
                                    alt=""
                                    className="rounded-xl w-48 h-16 object-scale-down mx-auto" />
                            </div>
                            <div className="w-3/4 text-center flex justify-between border rounded-2xl pl-10 pr-10 items-center relative">

                                <div className="flex gap-2 items-center flex-col">
                                    <div className="flex items-center justify-center gap-3">
                                        <img className="w-5 h-5 " src="https://i.ibb.co.com/Kq2ShvH/star.png" alt="" />
                                        <p className="">{brand.rating}</p>
                                    </div>
                                    
                                    <h1 className="card-title text-xl font-semibold">{brand.brand_name}</h1>
                                </div>
                                <div >
                                    <h1 className="card-title text-xl font-semibold pb-3">{brand.brand_name}</h1>
                                    <p>{brand.description}</p>
                                </div>
                                <div className="flex flex-col">
                                    <div>
                                        {brand.isSaleOn && (
                                            <span className="text-green-500 text-xl font-bold animate-bounce absolute top-4 right-14">
                                                Sale is on
                                            </span>
                                        )}
                                    </div>
                                        
                                    <button onClick={() => handleViewCoupons(brand)} className=" mt-10 p-3 rounded-2xl bg-red-400 text-white">View Coupons</button>

 
                                </div>

                            </div>
                        </div>
                        

                    ))
                ) : (
                    <p className="text-center text-gray-600">No brands found.</p>
                )}
            </div>
        </div>
    );
};

export default Brands;
