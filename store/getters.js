const getters = {
  getCollectionItemById: ( state ) => (id) => {
    if (state.collection && state.collection.items && state.collection.items.length > 0) {
      return state.collection.items.filter( item => item.id == id)[0]
    }
    return false;
  },
  collectionItemsCount: (state) => {
    return state.collection.items.length
  }
}

export default getters
