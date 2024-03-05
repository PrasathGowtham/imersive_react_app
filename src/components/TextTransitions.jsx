import React from 'react';
import carBackGround from "../assets/lambo.jpg";

function TextTransitions() {
    const divStyle = {
        backgroundImage: `url(${carBackGround})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', 
        width: '100%',
        height: '100vh'
    };

    return (
        <div style={divStyle}>
            {/* Your content */}
        </div>
    );
}

export default TextTransitions;
