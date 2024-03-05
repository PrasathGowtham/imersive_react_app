import React, { useState, useEffect } from 'react';

function ParallaxDivs() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Simple easing function
    const easeInOut = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    return (
        <div>
            <div
                className="parallax-div"
                style={{
                    transform: `translateY(${easeInOut(scrollPosition / window.innerHeight) * 600}px)`, // Adjust the multiplier to change the scrolling speed
                    height: '100vh', // Ensure the div fills the viewport height
                    backgroundColor: 'lightblue', // Just for visualization
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '7em'
                }}
            >
                3D SERVICES
            </div>
            <div
                className="parallax-div"
                style={{
                    transform: `translateY(${easeInOut(scrollPosition / window.innerHeight) * 10}px)`, // Adjust the multiplier to change the scrolling speed
                    height: '100vh', // Ensure the div fills the viewport height
                    backgroundColor: 'lightgreen', // Just for visualization
                }}
            >
                Lebansty valan
            </div>
            {/* Additional content to create space for scrolling */}
            <div style={{ height: '200vh', backgroundColor: 'transparent' }}> Test</div>
        </div>
    );
}

export default ParallaxDivs;
