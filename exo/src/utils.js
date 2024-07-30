// src/utils.js
export const getCoverImageUrl = (isbn, size = 'M') => {
    return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
  };
  