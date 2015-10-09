'use strict'

var EC = require('elliptic').ec

function secp256k1() {
}

var ec = new EC('secp256k1')

secp256k1.privateKeyToPublicKey = function(privateKey) {
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
    var keypair = ec.keyFromPrivate(privateKey)
    return keypair.getPublic(true, 'hex')
}

module.exports = secp256k1