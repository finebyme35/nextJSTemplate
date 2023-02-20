const Image = ({ image }: any) => {
  return (
    <div className="file-item">
      <img
        alt={`img - ${image.id}`}
        src={image.src}
        className="file-img"
      />
    </div>
  );
};
const ImageGride = ({ images }: any) => {
  const renderImage = (image: any, index: any) => {
    return <Image image={image} key={`${image.id}-image`} />;
  };
  return (
    <section className="file-list">{images.map(renderImage)}</section>
  );
};
export default ImageGride;