const express = require('express');
const router = express.Router()
const apicache = require('apicache');
const cache = apicache.middleware;

const discogs = require('./discogs');
// const mockDiscogs = require('./__mocks__/collection.json')
const config = require('./config.js');

const DEFAULT_CACHE = "10 minutes"

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

const service = new discogs({ apiKey: config.DISCOGS_API_KEY, secret: config.DISCOGS_API_SECRET })

router.get('/collection', cache(DEFAULT_CACHE), async (req, res) => {
  const query = await service.getCollection('ltb_lucas');
  res.json(query)
})

router.get('/wantlist', cache(DEFAULT_CACHE), async (req, res) => {
  const query = await service.getWantlist(config.DISCOGS_USERNAME);
  res.json(query)
})

router.get('/releases/:id', cache(DEFAULT_CACHE), async (req, res) => {
  const query = await service.getRelease(req.params.id);
  res.json(query)
})


// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}
