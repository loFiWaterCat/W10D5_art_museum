import React from 'react';
import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import { Route } from 'react-router-dom';
import './galleryview.css';
import ArtDesc from '../ArtDescription';

const GalleryView = ({ galleries }) => {
  let { galleryId, artId } = useParams();
  let gallery = galleries.find(gallery => gallery.gallerynumber === galleryId);
  return (
    <>
      <h2>{gallery.name}</h2>
      <Route exact path="/galleries/:galleryId/">
        <p>{gallery.labeltext}</p>
      <div id="pic-grid">
      {
        gallery.objects.map(obj => {
          return (
            <div class="picture" key={obj.id}>
              <ArtImageTile pic={obj} galleryId={ galleryId } />
              </div>
          )
          
        })
      }
      </div>
      </Route>
      <Route exact path="/galleries/:galleryId/art/:artId">
        <ArtDesc gallery={gallery} />
      </Route>
      
      
    </>

  )
}

export default GalleryView;
