require('isomorphic-fetch');

const actions = {
  'GET_COLLECTION': async ({ context, commit }) => {
    // TODO fix absolute url for SSR
    const query = await fetch('http://localhost:3000/api/collection');
    const payload = await query.json();

    if (payload.ok) {
      return commit('SET_COLLECTION', payload)
    }
    // TOOD handle error
  },
  'GET_RELEASE': async ({ getters, commit }, id) => {
    const query = await fetch(`http://localhost:3000/api/releases/${id}`);
    const payload = await query.json();

    if (payload.ok) {
      return commit('SET_RELEASE', payload)
    }
    // TOOD handle error
  },
}

export default actions
