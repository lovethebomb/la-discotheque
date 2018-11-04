require('isomorphic-fetch')

class Discogs {
  constructor({ apiKey, secret = false }) {
    if (!apiKey) {
      throw new Error('missing apiKey parameter')
    }
    this.apiKey = apiKey
    this.secret = secret

    this.baseURL = 'https://api.discogs.com'
  }

  async getCollection(
    user,
    collectionId = 0,
    sort = 'added',
    sortOrder = 'desc',
    page = 1,
    perPage = 50
  ) {
    const endpoint = `/users/${user}/collection/folders/${collectionId}/releases`
    const res = await this.createRequest(
      endpoint,
      `&sort=${sort}&sort_order=${sortOrder}&page=${page}&per_page=${perPage}`
    )
    const data = await res.json()
    return {
      data,
      ok: res.ok,
      status: res.status
    }
  }

  async getLastestCollectionItem(user, collectionId = 0) {
    return this.getCollection(user, collectionId, 'added', 'desc', 1, 1)
  }

  async getWantlist(
    user,
    sort = 'added',
    sortOrder = 'desc',
    page = 1,
    perPage = 50
  ) {
    const endpoint = `/users/${user}/wants`
    const res = await this.createRequest(
      endpoint,
      `&sort=${sort}&sort_order=${sortOrder}&page=${page}&per_page=${perPage}`
    )
    const data = await res.json()
    return {
      data,
      ok: res.ok,
      status: res.status
    }
  }

  async getLatestWanted(user) {
    return await this.getWantlist(user, 'added', 'desc', 1, 1)
  }

  async getRelease(releaseId) {
    const endpoint = `/releases/${releaseId}`
    const res = await this.createRequest(endpoint)
    const data = await res.json()
    return {
      data,
      ok: res.ok,
      status: res.status
    }
  }

  async createRequest(endpoint, parameters = '') {
    const url = `${this.baseURL}${endpoint}?key=${this.apiKey}${
      this.secret ? `&secret=${this.secret}` : ''
    }${parameters}`

    return fetch(url)
  }
}
module.exports = Discogs
