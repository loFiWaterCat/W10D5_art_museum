import React from 'react';

const ArtImage = ({ gallery }) => {
  return (
    <img src={ gallery.objects[0].images[0].baseimageurl } alt=""/>
  )
}

export default ArtImage;
