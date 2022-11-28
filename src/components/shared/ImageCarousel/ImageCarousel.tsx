// https://www.npmjs.com/package/react-responsive-carousel || http://react-responsive-carousel.js.org/storybook/index.html?path=/story/01-basic--base
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageCarouselItem from "./ImageCarouselItem";
import classes from "./ImageCarousel.module.css";

const ImageCarousel: React.FC<{
  images: { url: string; alt?: string }[];
}> = (props) => {
  const imageGallery = props.images.map((image, index) => (
    <ImageCarouselItem
      url={image.url}
      alt={image.alt}
      className={classes.hotelImage}
      key={index}
    />
  ));
  return (
    <Carousel showArrows={true} showThumbs={false}>
      {imageGallery}
    </Carousel>
  );
};

export default ImageCarousel;
