const getters = {
  getItemById: ( state ) => (folderName, id) => {
    if (!folderName) {
      console.error('[store][getters] getItemById - missing arg folderName');
      return;
    }

    folderName = folderName === "wishlist" ? "wantlist" : folderName;

    const folder = state[folderName];
    if (folder.items && folder.items.length > 0) {
      return folder.items.filter( item => item.id == id)[0]
    }
    return false;
  },

  getItemByIndex: ( state ) => (folderName, index) => {
    if (!folderName) {
      console.error('[store][getters] getItemByIndex - missing arg folderName');
      return;
    }

    folderName = folderName === "wishlist" ? "wantlist" : folderName;

    const folder = state[folderName];
    if (folder.items && folder.items.length > 0) {
      return folder.items[index]
    }
    return false;
  },

  getFolderIndexById: ( state ) => (folderName, id) => {
    if (!folderName) {
      console.error('[store][getters] getFolderIndexById - missing arg folderName');
      return;
    }

    folderName = folderName === "wishlist" ? "wantlist" : folderName;

    const folder = state[folderName];
    if (folder.items && folder.items.length > 0) {
      return folder.items.findIndex( item => item.id == id)
    }
    return false;
  },

  collectionItemsCount: (state) => {
    return state.collection.items.length
  },

  wantlistItemsCount: (state) => {
    return state.wantlist.items.length
  }
}

export default getters
