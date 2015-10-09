'use strict'

var EC = require('elliptic').ec

function secp256k1() {
}

var ec = new EC('secp256k1')

secp256k1.getPublicKey = function(privateKey, compressed) {
    if (typeof privateKey !== 'string') {
        throw 'private key must be a string'
    }
    if (privateKey.length === 66) {
        privateKey = privateKey.slice(0, 64)
    } else if (privateKey.length === 64) {
        // do nothing
    } else {
        throw 'private key must be a 64 or 66 character hex string'
    }
    if (compressed === undefined) {
        compressed = true
    }
    var keypair = ec.keyFromPrivate(privateKey)
    return keypair.getPublic(compressed, 'hex')
}

module.exports = secp256k1