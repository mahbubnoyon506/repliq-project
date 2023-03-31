import React, { useEffect, useState } from 'react';
import { MdVerticalAlignTop } from 'react-icons/md';

const BackToTop = () => {
    const [backtoTop, setBacktoTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setBacktoTop(true)
            } else {
                setBacktoTop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            {
                backtoTop && <button className='m-1 text-4xl fixed bottom-3 md:bottom-5 lg:bottom-10 right-3 md:right-5 lg:right-10 text-red-600 opacity-80' onClick={scrollUp}><MdVerticalAlignTop color='#ff1e00' /></button>
            }

        </div>
    );
};

export default BackToTop;