export const selectImagesFetchStatus = (state) => (state.images.status);

export const selectImageById = (state, id) => (
  state.images.images.find(image => image.id === id)
);

export const favoriteImages = (state) => (
  state.images.images.filter(image => image.favorited)
);

const dateComparator = (aDate, bDate) => {
  const firstDate = new Date(aDate).getTime();
  const secondDate = new Date(bDate).getTime();
  if (firstDate < secondDate) return -1;
  if (firstDate > secondDate) return 1;
  return 0;
};

export const recentlyAddedImages = (state) => {
  const images = [...state.images.images];
  return images.sort((imageA, imageB) => dateComparator(imageA.createdAt, imageB.createdAt));
};
