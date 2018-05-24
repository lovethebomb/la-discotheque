# la-discotheque

[![Build Status](https://travis-ci.com/lovethebomb/la-discotheque.svg?branch=master)](https://travis-ci.com/lovethebomb/la-discotheque)

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

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
