# SECP256k1 JS

[![npm](https://img.shields.io/npm/l/secp256k1.js.svg)](https://www.npmjs.com/package/secp256k1.js)
[![Slack](http://slack.blockstack.org/badge.svg)](http://slack.blockstack.org/)

[![](https://nodei.co/npm/secp256k1.js.png?downloads=true)](https://www.npmjs.com/package/secp256k1.js)

```
npm install secp256k1
```

### Private Keys to Public Keys

```js
> var secp256k1 = require('secp256k1')
> var privateKey = '278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f'
> secp256k1.privateKeyToPublicKey(privateKey)
'03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479'
```
