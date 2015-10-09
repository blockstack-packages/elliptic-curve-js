'use strict'

var test = require('tape'),
    secp256k1 = require('./index')

var privateKey = '278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f',
    publicKey = '03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479'

test('secp256k1', function(t) {
    t.plan(2)

    var derivedPublicKey = secp256k1.privateKeyToPublicKey(privateKey)
    t.ok(derivedPublicKey, 'raw public key should have been derived')
    t.equal(derivedPublicKey, publicKey, 'derived raw public key should match the reference value')
})
