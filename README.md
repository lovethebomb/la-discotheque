# La Discothèque

[![Build Status](https://travis-ci.com/lovethebomb/la-discotheque.svg?branch=master)](https://travis-ci.com/lovethebomb/la-discotheque) [![Greenkeeper badge](https://badges.greenkeeper.io/lovethebomb/la-discotheque.svg)](https://greenkeeper.io/)

Fancy Discogs-powered collection viewer.

## Configuration

You'll need to specify these environment variables:

```bash
DISCOGS_API_KEY=my-api-key
DISCOGS_API_SECRET=my-api-secret
DISCOGS_USERNAME=my-username
BASE_URL=https://my-domain (http://ip:port if needed)
```

Note: The secret is needed to fetch image resources.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Docker

Avalaible on Docker Hub as [lovethebomb/la-discotheque](https://hub.docker.com/r/lovethebomb/la-discotheque/)

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
