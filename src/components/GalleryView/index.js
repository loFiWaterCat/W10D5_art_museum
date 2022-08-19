import React from 'react';
import { useParams } from 'react-router-dom';

const GalleryView = ({ galleries }) => {
  let { galleryId } = useParams();
  let gallery = galleries.find(gallery => gallery.gallerynumber === galleryId);
  return (
    <>
      <h2>{gallery.name}</h2>
      <p>{gallery.labeltext}</p>
    </>

  )
}

export default GalleryView;
