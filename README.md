# Elliptic Curve JS

[![CircleCI](https://img.shields.io/circleci/project/blockstack/elliptic-curve-js.svg)](https://circleci.com/gh/blockstack/elliptic-curve-js)
[![npm](https://img.shields.io/npm/l/elliptic-curve.svg)](https://www.npmjs.com/package/elliptic-curve)
[![npm](https://img.shields.io/npm/v/elliptic-curve.svg)](https://www.npmjs.com/package/elliptic-curve)
[![npm](https://img.shields.io/npm/dm/elliptic-curve.svg)](https://www.npmjs.com/package/elliptic-curve)
[![Slack](http://slack.blockstack.org/badge.svg)](http://slack.blockstack.org/)

```
npm install elliptic-curve
```

### Getting Started

Import the secp256k1 module:

```
> var secp256k1 = require('elliptic-curve').secp256k1
```

### Private to Public Key Conversion

```js
> var privateKey = '278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f'
> secp256k1.getPublicKey(privateKey)
'03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479'
```

### Message Signing

```js
> var message = "Hello, world!",
> secp256k1.signMessage(message, privateKey)
'3046022100997b6210d959e67ad9cee01589d01daf0fe77ce0f002d040d769171c33504860022100e35a03d2354074d7e49d0499568e331be39af901a543d1731ea1ff8f423f21ab'
```
