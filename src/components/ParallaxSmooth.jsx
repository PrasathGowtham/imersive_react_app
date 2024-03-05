import React, { useState, useEffect, useRef } from 'react';

export default function ParallaxSmooth() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [parallaxTranslateY, setParallaxTranslateY] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('black');
    const [secondDivWidth, setSecondDivWidth] = useState('40%');
    const requestIdRef = useRef(null);
    const stopThresholdRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            requestIdRef.current = requestAnimationFrame(() => {
                const firstDivHeight = document.getElementById('first-div').offsetHeight;
                const secondDivHeight = document.getElementById('second-div').offsetHeight;
                const stoppingPoint = secondDivHeight - firstDivHeight / 2;

                setScrollPosition(window.scrollY);

                if (window.scrollY < stoppingPoint) {
                    setParallaxTranslateY(window.scrollY * 3);
                    stopThresholdRef.current = stoppingPoint;
                } else {
                    if (window.scrollY > stopThresholdRef.current) {
                        cancelAnimationFrame(requestIdRef.current);
                    }
                }

                const newBackgroundColor = `rgba(255, 255, 255, ${window.scrollY / stoppingPoint})`;
                setBackgroundColor(newBackgroundColor);

                const scrollPercentage = (window.scrollY - stoppingPoint) / (window.innerHeight - stoppingPoint);
                const newWidth = `${40 + scrollPercentage * 100}%`; // Transition from 40% to 100%
                setSecondDivWidth(newWidth);
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (requestIdRef.current) {
                cancelAnimationFrame(requestIdRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div
                id="first-div"
                className="parallax-div"
                style={{
                    transform: `translateY(${parallaxTranslateY}px) translateZ(0)`,
                    height: '70vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    fontSize: '7em',
                    position: 'relative',
                    zIndex: 1,
                    mixBlendMode: 'difference'
                }}
            >
                <span style={{ color: 'white', fontWeight: 'bold' }}>3D SERVICES</span>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div
                    id="second-div"
                    className="parallax-div"
                    style={{
                        transform: `translateY(${scrollPosition * 0.01}px) translateZ(0)`,
                        height: '60vh',
                        backgroundColor,
                        position: 'relative',

                        width: secondDivWidth,
                    }}
                >
                </div>
            </div>


            <div className="spacer" style={{ height: '40vh', backgroundColor: 'transparent' }}></div>
        </div>
    );
}
