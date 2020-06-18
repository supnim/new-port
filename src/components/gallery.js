import React from "react";
import "../utils/css/components/gallery.scss";
import { useStaticQuery, graphql } from "gatsby";
import Gallery from "react-photo-gallery";

export default class Sample extends React.Component {
  render() {
    return <Gallery photos={PHOTO_SET} direction={"column"} />;
  }
}

const PHOTO_SET = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 4,
    height: 3
  }
];

// function Gallery({ url, caption }) {
//   return (
//     <section>
//       <div className="container-fluid">
//         <div>
//           <link rel="stylesheet" type="text/css" href="gallery.css" />
//           <div className="masonry">
//             <div className="item">
//               <h2>gallery component</h2>
//               <div className="item__content item">
//                 {/* <Img fluid={url} />
//                 <hp>image</hp>
//                 <h1>{caption}</h1> */}
//                 <h2>gallery component</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Gallery
