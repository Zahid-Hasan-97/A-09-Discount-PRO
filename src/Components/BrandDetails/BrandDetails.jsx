// src/pages/BrandDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import brands from "../../../public/coupon.json";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const BrandDetails = () => {
    const { id } = useParams();
    const brand = brands.find((brand) => brand._id === id);

    return (
        <div className="p-4">
            <div className="flex items-center gap-4 mb-6 ">
                <img src={brand.brand_logo} alt={brand.brand_name} className="w-20 h-20 object-scale-down" />
                <div>
                    <h1 className="text-2xl font-bold">{brand.brand_name}</h1>
                    <p>Rating: {brand.rating}</p>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Available Coupons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {brand.coupons.map((coupon) => (
                    <div key={coupon.coupon_code} className="card p-4 bg-gray-100 shadow-md">
                        <h3 className="font-bold">{coupon.coupon_code}</h3>
                        <p>{coupon.description}</p>
                        <p>Expires on: {coupon.expiry_date}</p>
                        <CopyToClipboard text={coupon.coupon_code} onCopy={() => toast.success("Coupon copied!")}>
                            <button className="btn btn-sm btn-primary mt-2">Copy Code</button>
                        </CopyToClipboard>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandDetails;
