import React from 'react';
import { Link  , Route, useParams } from 'react-router-dom';
import "./artdescription.css"

const ArtDescription = ({gallery }) => {

    let { artId, galleryId } = useParams();
    // console.log(typeof artId);

    let obra = gallery.objects.find((obj) => obj.id === parseInt(artId));

    return (
        <>
        <Link to={`/galleries/${galleryId}`}>
            Back to the Gallery "{gallery.name}"
        </Link>
            <h3><a href={obra.url}>{obra.title}</a></h3>
            <div id="pic-grid">
                {
                    obra.images.map((image) => {
                        return (
                            <div className="picture" id={image.imageid}>
                                <img src={image.baseimageurl} alt={image.alttext}></img>
                            </div>
                        )
                    })
                }

            </div>
            <h4>Technique</h4>
            <p>{obra.technique}</p>
            <h4>Description</h4>
            <p>{obra.description}</p>
            <h4>Credit</h4>
            <p>{obra.creditline}</p>
        </>
    )

}

export default ArtDescription;