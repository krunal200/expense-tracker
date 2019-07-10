import React from 'react';
import './loader.scss';

export default function Loader ({ className = '' }) {
    className = `lds-ring ${className}`;
    return <div className={className}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>;
}