// src/utils/storage.js
const STORAGE_KEY = "music_collections";

export const storage = {
  // get all tracks in collection
  get() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  },

  // add track into collection
  add(track) {
    const list = this.get();
    // check if the track is already in the list
    if (
      !list.some(
        (item) =>
          item.name === track.name && item.artist.name === track.artist.name,
      )
    ) {
      list.push(track);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
  },

  // remove track from collections 
  remove(trackName, artistName) {
    // get the original list
    const list = this.get();
    // remove the track from the original list and save the new list in the newList variable
    const newList = list.filter(
      (item) => !(item.name === trackName && item.artist.name === artistName),
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
  },

  // check if the track is already in the collection
  isFavorite(trackName, artistName) {
    // get the original list
    const list = this.get();
    // return boolean (true if the track is already in the list)
    return list.some(
      (item) => item.name === trackName && item.artist.name === artistName,
    );
  },
};
