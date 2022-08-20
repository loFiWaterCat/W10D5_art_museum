import React from 'react';
import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';

const GalleryView = ({ galleries }) => {
  let { galleryId } = useParams();
  let gallery = galleries.find(gallery => gallery.gallerynumber === galleryId);
  return (
    <>
      <h2>{gallery.name}</h2>
      <ArtImageTile gallery={gallery}/>
      <p>{gallery.labeltext}</p>
      
    </>

  )
}

export default GalleryView;
