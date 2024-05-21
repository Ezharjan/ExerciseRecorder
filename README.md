# Exercise Recorder

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Common Issues

1. While installing npm packages, outputs: `npm ERR! code CERT_HAS_EXPIRED` || `npm ERR! errno CERT_HAS_EXPIRED`.
* Try following steps to disable certificate validation before `npm i`:
```bash
npm cache clean --force
npm config set strict-ssl false
```