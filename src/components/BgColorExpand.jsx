import React, { useState, useEffect, useRef } from 'react';

export default function ParallaxSmooth() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('black');
    const [width, setWidth] = useState('100vw');
    const requestIdRef = useRef(null);
    const stopDelayRef = useRef(false);
    const stopThresholdRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            requestIdRef.current = requestAnimationFrame(() => {
                const firstDivHeight = document.getElementById('first-div').offsetHeight;
                const secondDivHeight = document.getElementById('second-div').offsetHeight;
                const stoppingPoint = secondDivHeight - firstDivHeight / 2;

                if (window.scrollY >= stoppingPoint) {
                    if (!stopDelayRef.current && window.scrollY > stopThresholdRef.current) {
                        stopDelayRef.current = true;
                        cancelAnimationFrame(requestIdRef.current);
                    }
                } else {
                    const newBackgroundColor = `rgba(255, 255, 255, ${window.scrollY / stoppingPoint})`;
                    setBackgroundColor(newBackgroundColor);
                    const newWidth = `${100 - (window.scrollY / stoppingPoint) * 40}vw`;
                    setWidth(newWidth);
                    stopDelayRef.current = false;
                    stopThresholdRef.current = stoppingPoint;
                }
                setScrollPosition(window.scrollY);
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
                    transform: `translateY(${scrollPosition * 3.2}px) translateZ(0)`,
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

            <div
                id="second-div"
                className="parallax-div"
                style={{
                    transform: `translateY(${scrollPosition * 0.01}px) translateZ(0)`,
                    height: '60vh',
                    backgroundColor,
                    width
                }}
            >
            </div>

            <div className="spacer" style={{ height: '30vh', backgroundColor: 'transparent' }}></div>
        </div>
    );
}
