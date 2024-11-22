import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import BrandDetails from '../BrandDetails/BrandDetails';
import Brands from '../Brand/Brand';

const Home = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/public/coupon.json')
            .then((res) => res.json())
            .then((data) => {
                setBrands(data);
                setLoading(false);
            })
            .catch((error) => console.error('Error fetching brands:', error));
    }, []);

    if (loading) return <p>Loading...</p>;

    const topBrands = brands.map((brand) => (
        // <img key={brand._id} src={brand.brand_logo} alt={brand.brand_name} style={{ width: '100px' }} />
        <div className='flex gap-10'>
            <img key={brand._id} src={brand.brand_logo} alt={brand.brand_name} style={{ width: '500px', }} />
        </div>
        
    ));

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center pt-20'>Welcome to Discount PRO</h1>
            <section>
                <h2 className='text-2xl text-center pt-6'>Top Brands</h2>
                <Marquee pauseOnHover>{topBrands}</Marquee>
            </section>
            <Brands></Brands>
            <BrandDetails></BrandDetails>
        </div>
        
    );
};

export default Home;

