import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { getBrandsOnSale } from '../Brand/Brand';
import { Link } from 'react-router-dom';


const Home = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);


    const brandOnSale = getBrandsOnSale();

    useEffect(() => {
        fetch('/public/coupon.json')
            .then((res) => res.json())
            .then((data) => {
                setBrands(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching brands:', error));
    }, []);
    const topBrands = brands.map((brand) => (
        <div className=' px-10 0 pt-16 pb-10'>
            <img key={brand._id} src={brand.brand_logo} alt={brand.brand_name} className=' border gap-10 px-2 w-48 h-32 object-scale-down rounded-2xl ' />
        </div>
        
    ));

    return (
        <div className='pb-20'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src="/public/Amazon poster 2.jpg"
                        className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="/public/daraz-electronics-week.png"
                        className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="/public/Myntra poster.jpg"
                        className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="/public/Flipkart poster.jpg"
                        className="w-full rounded-3xl" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl font-semibold text-center pt-20'>Welcome to Discount PRO</h1>
            <h2 className='text-2xl text-center pt-6'>Top Brands</h2>
            <section>
                <Marquee pauseOnHover>{topBrands}</Marquee>
            </section>

            <section className='flex flex-col gap-y-20 pt-20'>
                <div>
                    <h1 className='text-4xl font-bold text-center animate-bounce text-red-400'>Brands On Sale</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {brandOnSale.length > 0 ? (
                        brandOnSale.map((brand) => (

                            <div key={brand._id} className=" card w-96 shadow-2xl relative">
                                <div>
                                    {brand.isSaleOn && (
                                        <span className="flex flex-col justify-center items-center gap-5 pb-5">
                                            <div className=" px-10 pt-10 
                                             mx-auto">
                                                <img src={brand.brand_logo} alt="" className="rounded-xl object-scale-down w-52 h-12" />
                                            </div>
                                            <h2 className=" card-title text-2xl font-bold">{brand.brand_name}</h2>
                                            <div className="card-body items-center text-center border rounded-2xl">
                                                <div className="flex gap-3">
                                                    <img className="w-6" src="/public/discount-tag.png" alt="" />
                                                    <p>Total Coupons: {brand.coupons.length}</p>
                                                </div>
                                                <div className="flex gap-3">
                                                    <img className="w-6" src="/public/categories.png" alt="" />
                                                    <p>{brand.category}</p>
                                                </div>

                                            </div>
                                            <Link to={`/login`} className="border p-3 rounded-2xl bg-red-400 text-white">View Coupons</Link>
                                        </span>
                                    )}

                                </div>

                            </div>


                        ))
                    ) : (
                        <p className="text-center text-gray-600">No brands found.</p>
                    )}
                </div>
            </section>
        </div>
        
    );
};

export default Home;

