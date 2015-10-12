'use strict'

var test = require('tape'),
    secp256k1 = require('./index').secp256k1

var privateKey = '278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f',
    privateKey2 = '278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f01',
    privateKey3 = '494651c7602fa047590386dbf48ad47ecd2a25ae4f0f39334e57f5bc62771f',
    publicKey = '03fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea5358479',
    publicKey3  = '02ccaa8fb748f1b1d260178092b8eb96be96097fb437a247ed03dbaf13fa5a5a35',
    uncompresedPublicKey = '04fdd57adec3d438ea237fe46b33ee1e016eda6b585c3e27ea66686c2ea535847946393f8145252eea68afe67e287b3ed9b31685ba6c3b00060a73b9b1242d68f7'

test('secp256k1', function(t) {
    t.plan(8)

    var derivedPublicKey = secp256k1.getPublicKey(privateKey)
    t.ok(derivedPublicKey, 'compressed public key should have been derived')
    t.equal(derivedPublicKey, publicKey, 'derived compressed public key should match the reference value')

    var derivedPublicKey2 = secp256k1.getPublicKey(privateKey2)
    t.ok(derivedPublicKey2, 'compressed public key should have been derived')
    t.equal(derivedPublicKey2, publicKey, 'derived compressed public key should match the reference value')

    var derivedPublicKey3 = secp256k1.getPublicKey(privateKey3)
    t.ok(derivedPublicKey3, 'compressed public key should have been derived')
    t.equal(derivedPublicKey3, publicKey3, 'derived compressed public key should match the reference value')

    var derivedUncompressedPublicKey = secp256k1.getPublicKey(privateKey, false)
    t.ok(derivedUncompressedPublicKey, 'uncompressed public key should have been derived')
    t.equal(derivedUncompressedPublicKey, uncompresedPublicKey, 'derived uncompressed public key should match the reference')
})
