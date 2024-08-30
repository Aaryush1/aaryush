import React from 'react';

interface F1BackgroundProps {
    children: React.ReactNode;
}

const F1Background: React.FC<F1BackgroundProps> = ({ children }) => {
    return (
        <div className="relative">
            <div className="absolute inset-0 opacity-5 checkered-bg"></div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default F1Background;