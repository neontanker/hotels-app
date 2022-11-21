// https://www.npmjs.com/package/react-responsive-carousel || http://react-responsive-carousel.js.org/storybook/index.html?path=/story/01-basic--base
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageCarouselItem from "./ImageCarouselItem";
import classes from "./ImageCarousel.module.css";

// @TODO: get the image gallery to be contained within each hotel item nicely
const ImageCarousel: React.FC<{
  images: { url: string; alt?: string }[];
}> = (props) => {
  const imageGallery = props.images.map((image) => (
    <div>
      <ImageCarouselItem
        url={image.url}
        alt={image.alt}
        className={classes.hotelImage}
      />
    </div>
  ));
  return (
    <Carousel
      width="300px"
      dynamicHeight={true}
      showArrows={true}
      showThumbs={false}
    >
      {imageGallery}
    </Carousel>
  );
};

export default ImageCarousel;
