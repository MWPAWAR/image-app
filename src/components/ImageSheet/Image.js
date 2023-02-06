import { useDispatch } from 'react-redux';
import imageStyles from './Image.module.css';
import classNames from 'classnames';
import { getMbsTextByBytes } from '../../utils/get-mbs-by-bytes';
import { toggleFavoriteImg } from '../../store/images/images';

const Image = ({ selectedImage }) => {
  const dispatch = useDispatch();
  const handleFavtClick = () => dispatch(toggleFavoriteImg(selectedImage.id));

  return (
    <div>
      <img
        src={selectedImage.url}
        className={imageStyles.image}
        alt={selectedImage.filename}
      />
      <div className={imageStyles.imgNameAndFavtIconContainer}>
        <div className={imageStyles.imageName}>{selectedImage.filename}</div>
        <div className={classNames(
          imageStyles.favtIcon,
          selectedImage.favorited ? imageStyles.favtIconFilled : imageStyles.favtIconOutlined
        )} onClick={handleFavtClick} />
      </div>
      <div className={imageStyles.imageSize}>{getMbsTextByBytes(selectedImage.sizeInBytes)}</div>
    </div>
  );
};

export default Image;
