import React from 'react';

export default function Item({ img, artist, title, url }) {
    const handleClick = () => {
        if (typeof window !== undefined) {
            window.location.href = url;
        }
    };

    return (
        <div className="item" onClick={handleClick}>
            <img src={img} alt={title} />
            <div className="contentText">
                {artist && (
                    <h1>
                        <span>{artist}</span>
                    </h1>
                )}
                <h1>
                    <span>{title}</span>
                </h1>
            </div>
        </div>
    );
}
