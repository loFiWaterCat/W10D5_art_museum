import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
    return (
        <nav>
        <h1>Galleries</h1>
        <NavLink exact to="/">Home</NavLink>
        {
            galleries.map(gallery => {
                const galleryId = "/galleries/" + gallery.id;
                return <NavLink key={gallery.id} to={galleryId}>{gallery.name}
                        </NavLink>
})
        }
        </nav>
    )
}

export default GalleryNavigation;
