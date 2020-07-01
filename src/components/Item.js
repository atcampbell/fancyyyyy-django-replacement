import React from 'react';

export default function Item({ img, artist, title, url }) {
    const handleClick = (e) => {
        console.log(e);
        if (
            (e.keyCode === 13 || e.type === 'click') &&
            typeof window !== undefined
        ) {
            window.location.href = url;
        }
    };

    return (
        <div
            className="item"
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleClick(e)}
        >
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
