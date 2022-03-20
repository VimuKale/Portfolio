import React from 'react'
import Typical from "react-typical"
import "./HeroCover.css"


function HeroCover() {

    return (
        <>
            <div className='hero-container'>
                <div className='section-one'>
                    <h1 className="headline">
                        <p className="animate__animated animate__wobble">Hey,👋</p>
                        I'm Vimu Kale<br />
                        <p>Imma{' '}
                            <span className='typer'><Typical
                                loop={1}
                                wrapper="b"
                                steps={
                                    ['Tech Enthusiast', 1000, 'Web Developer', 1000]
                                }
                            /></span>

                        </p>
                    </h1>

                </div>
                <div className='section-two'>
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_5h3lsf0r.json" background="transparent" speed={1} loop autoPlay />

                    {/* <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ztkxcqfv.json" background="transparent" speed={1} loop autoPlay /> */}
                </div>
            </div>
        </>
    )
}

export default HeroCover