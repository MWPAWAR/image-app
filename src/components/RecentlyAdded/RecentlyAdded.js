import { useSelector } from 'react-redux';
import { recentlyAddedImages } from '../../store/images/selectors';
import useFetchImages from '../../customHooks/useFetchImages';
import ImageList from '../ImageList/ImageList';
import ImageSheet from '../ImageSheet/ImageSheet';
import withApiLoaderOrFailure from '../hocs/with-api-loader-or-failure';
import { selectImageById } from '../../store/imageUiState/selectors';
import recentlyAddedStyles from './RecentlyAdded.module.css';
import { Fragment } from 'react';

const RecentlyAdded = () => {
  useFetchImages();

  const selectedImage = useSelector(selectImageById);
  const recentlyAddedImageList = useSelector(recentlyAddedImages);

  return (
    <div className={recentlyAddedStyles.mainContainer}>
      <div className={selectedImage ? recentlyAddedStyles.listContainerSplitWidth : recentlyAddedStyles.listContainerFullWidth}>
        <h1>Recently added</h1>
        <ImageList imageList={recentlyAddedImageList} />
      </div>
      {selectedImage ? (
        <div className={recentlyAddedStyles.sheetContainer}>
          <ImageSheet />
        </div>
      ) : <Fragment />}
      
    </div>
  );
};

export default withApiLoaderOrFailure(RecentlyAdded);
