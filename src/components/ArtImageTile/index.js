import React from 'react';
import { Link } from 'react-router-dom';
import "./artimagetile.css"
const ArtImage = ({ pic , galleryId }) => {
  console.log(pic);

  let artId = pic.id;

  let urlpath = `/galleries/${galleryId}/art/${artId}`;
  return (
    <Link to={urlpath}>
      <img src={pic.images[0].baseimageurl } alt="" />
    </Link>
  )
}

export default ArtImage;
