# Elliptic Curve JS

[![CircleCI](https://img.shields.io/circleci/project/blockstack/elliptic-curve-js.svg)](https://circleci.com/gh/blockstack/elliptic-curve-js)
[![npm](https://img.shields.io/npm/l/elliptic-curve.svg)](https://www.npmjs.com/package/elliptic-curve)
[![npm](https://img.shields.io/npm/v/elliptic-curve.svg)](https://www.npmjs.com/package/elliptic-curve)
[![Slack](http://slack.blockstack.org/badge.svg)](http://slack.blockstack.org/)

[![](https://nodei.co/npm/elliptic-curve.png?downloads=true)](https://www.npmjs.com/package/elliptic-curve)

```
npm install elliptic-curve
```

### Private Keys to Public Keys

```js
> var secp256k1 = require('secp256k1.js').secp256k1
> var privateKey = '278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f'
> secp256k1.getPublicKey(privateKey)
'03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479'
```
