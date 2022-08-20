import React from 'react';
import { Link  , Route, useParams } from 'react-router-dom';

const ArtDescription = ({gallery }) => {

    let { artId, galleryId } = useParams();
    console.log(typeof artId);

    let obra = gallery.objects.find((obj) => obj.id === parseInt(artId));

    return (
        <>
        <Link to={`/galleries/${galleryId}`}>
            Back to the Gallery "{gallery.name}"
        </Link>

            <h3><a href={obra.url}>{obra.title}</a></h3>
        </>
    )

}

export default ArtDescription;