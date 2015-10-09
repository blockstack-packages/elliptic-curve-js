'use strict'

var EC = require('elliptic').ec,
    isHexadecimal = require('validator').isHexadecimal

function secp256k1() {
}

var ec = new EC('secp256k1')

secp256k1.getPublicKey = function(privateKey, compressed) {
    if (typeof privateKey !== 'string') {
        throw 'private key must be a string'
    }
    if (!isHexadecimal(privateKey)) {
        throw Error('private key must be a hex string')
    }
    if (privateKey.length == 66) {
        privateKey = privateKey.slice(0, 64)
    } else if (privateKey.length <= 64) {
        // do nothing
    } else {
        throw Error('private key must be 66 characters or less')
    }
    if (compressed === undefined) {
        compressed = true
    }
    var keypair = ec.keyFromPrivate(privateKey)
    return keypair.getPublic(compressed, 'hex')
}

module.exports = secp256k1