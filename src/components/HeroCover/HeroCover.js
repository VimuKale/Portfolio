import React from 'react'
import "./HeroCover.css"



function HeroCover() {
    return (
        <>
            <div className='hero-container'>
                <div className='section-one'>
                    <h1 className="headline"> Hi, I'm Vimu Kale<br />
                        I'm a Web Developer</h1>
                </div>
                <div className='section-two'>
                    <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ztkxcqfv.json" background="transparent" speed={1} loop autoPlay />
                </div>
            </div>
        </>
    )
}

export default HeroCover