import { useSelector } from 'react-redux';
import useFetchImages from '../../customHooks/useFetchImages'
import { favoriteImages } from '../../store/images/selectors';
import ImageList from '../ImageList/ImageList';
import withApiLoaderOrFailure from '../hocs/with-api-loader-or-failure';

const Favorites = () => {
  useFetchImages();

  const favoriteImageList = useSelector(favoriteImages);

  return (
    <>
      <h1>Favorites</h1>
      <ImageList imageList={favoriteImageList} />
    </>
  );
};

export default withApiLoaderOrFailure(Favorites);
