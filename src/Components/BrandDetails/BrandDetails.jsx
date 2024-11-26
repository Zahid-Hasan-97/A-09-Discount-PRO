
import React from "react";
import { useParams } from "react-router-dom";
import brands from "../../../public/coupon.json";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BrandDetails = () => {


    const { id } = useParams();
    const brand = brands.find((brand) => brand._id === id);

    if (!brand) return <div>Brand not found</div>;

    return (
        <div className="p-4">
            <div className="card rounded-2xl flex items-center gap-4 pb-16">
                <div>
                    <img src={brand.brand_logo} alt={brand.brand_name} className="w-28 h-28 object-scale-down border rounded-badge p-2" />
                </div>
                <div>
                    <div className="flex items-center justify-center gap-2">
                        <img className="w-5 h-5 " src="https://i.ibb.co.com/Kq2ShvH/star.png" alt="" />
                        <p className="">{brand.rating}</p>
                    </div>
                    <h1 className="text-2xl font-bold">{brand.brand_name}</h1>
                </div>
            </div>

            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {brand.coupons.map((coupon) => (
                    <div key={coupon.coupon_code} class="container bg-gradient-to-r from-gray-500 to-gray-300 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                        <div class="text-3xl font-bold mb-4">{coupon.condition}</div>
                        <div class="text-lg mb-4">{coupon.description}</div>
                        <div class="text-base mb-4">Use coupon code:</div>
                        <div class="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
                            <span class="text-2xl font-semibold">{coupon.coupon_code}</span>

                            <CopyToClipboard text={coupon.coupon_code} onCopy={() => toast.success("Coupon successfully copied!")}>
                                <button className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-black focus:outline-none focus:ring-2">
                                    Copy Code
                                </button>
                            </CopyToClipboard>
                            
                        </div>
                        <div class="text-sm mt-4 flex justify-between">
                            <div>
                                <p>Valid until <span class="font-semibold">{coupon.expiry_date}</span></p>
                                <p className="text-xl">{coupon.coupon_type}</p>

                            </div>
                            <a className=" font-semibold p-3 rounded-2xl bg-red-400" href={brand.shop_Link}>Use Now</a>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandDetails;
