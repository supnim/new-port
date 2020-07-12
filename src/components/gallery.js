import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import { images } from "../components/photography"
import { graphql, useStaticQuery } from "gatsby";

function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const images = useStaticQuery(graphql`
    query {
      photo: allFile(filter: { relativeDirectory: { glob: "photography/*" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 400) {
                src
                srcSet
                aspectRatio
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  //in here height and width isnt being asigned
  const photos = images.photo.edges.map(
    ({ node }) => node.childImageSharp.fluid
  );

  return (
    <div>
      <Gallery
        photos={photos}
        direction="row"
        margin="1rem"
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.originalName
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default PhotoGallery;

//link photos
