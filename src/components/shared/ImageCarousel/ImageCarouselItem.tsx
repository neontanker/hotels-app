const ImageCarouselItem: React.FC<{
  url: string;
  alt?: string;
  className?: string;
}> = (props) => {
  return (
    <img
      className={props.className}
      src={props.url}
      alt={props.alt ? props.alt : ""}
    />
  );
};

export default ImageCarouselItem;
