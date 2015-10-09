'use strict'

var test = require('tape'),
    secp256k1 = require('./index')

var privateKey = '278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f',
    publicKey = '03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479',
    uncompresedPublicKey = '04fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea535847946393f8145252eea68afe67e287b3ed9b31685ba6c3b00060a73b9b1242d68f7'

test('secp256k1', function(t) {
    t.plan(4)

    var derivedPublicKey = secp256k1.getPublicKey(privateKey)
    t.ok(derivedPublicKey, 'compressed public key should have been derived')
    t.equal(derivedPublicKey, publicKey, 'derived compressed public key should match the reference value')

    var derivedUncompressedPublicKey = secp256k1.getPublicKey(privateKey, false)
    t.ok(derivedUncompressedPublicKey, 'uncompressed public key should have been derived')
    t.equal(derivedUncompressedPublicKey, uncompresedPublicKey, 'derived uncompressed public key should match the reference')
})
