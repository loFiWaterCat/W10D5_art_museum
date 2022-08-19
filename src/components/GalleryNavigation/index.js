import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function GalleryNavigation({ galleries }) {
    return (
        <nav>
        <h1>Galleries {console.log(galleries)}</h1>
        <NavLink to="/">Home</NavLink>
        {
            galleries.map(gallery => {
                const galleryId = "/galleries/" + gallery.id;
                return <NavLink to={galleryId}>{gallery.name}</NavLink>
})
        }
        </nav>
    )
}

export default GalleryNavigation;