
import React, { useState, useEffect } from "react";
import brandsData from "../../../public/coupon.json";
import { useNavigate } from "react-router-dom";

const Brands = () => {
    const [search, setSearch] = useState("");
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        setBrands(brandsData);
    }, []);


    const filteredBrands = brands.filter((brand) =>
        brand.brand_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold text-center mb-6">All Brands</h1>


            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    placeholder="Search Brand"
                    className="input input-bordered w-full md:w-1/2"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBrands.length > 0 ? (
                    filteredBrands.map((brand) => (
                        <div key={brand._id} className="card bg-gray-100 shadow-lg p-4">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={brand.brand_logo}
                                    alt={brand.brand_name}
                                    className="w-16 h-16 rounded-full object-scale-down"
                                />
                                <div>
                                    <h2 className="text-xl font-bold">{brand.brand_name}</h2>
                                    <p className="text-yellow-500 flex items-center gap-1">
                                        <img className="w-6 h-auto mt-1" src="/Assets/star.png" alt="" /> {brand.rating}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">{brand.description}</p>


                            <div className="flex items-center gap-2">
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() =>
                                        navigate(`/brand/${brand._id}`, {
                                            state: { brand },
                                        })
                                    }
                                >
                                    View Coupons
                                </button>
                                {brand.isSaleOn && (
                                    <span className="text-red-500 font-bold animate-bounce">
                                        Sale is On!
                                    </span>
                                )}
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
