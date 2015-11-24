'use strict'

var EC = require('elliptic').ec,
    isHexadecimal = require('validator').isHexadecimal,
    crypto = require('crypto'),
    MissingParametersError = require('./errors').MissingParametersError

function secp256k1() {
}

secp256k1.ellipticCurve = new EC('secp256k1')

secp256k1.createHash = function(signingInput) {
    return crypto.createHash('sha256').update(signingInput).digest()
}

secp256k1.loadPrivateKey = function(rawPrivateKey) {
    if (rawPrivateKey.length === 66) {
        rawPrivateKey = rawPrivateKey.slice(0, 64)
    }
    return secp256k1.ellipticCurve.keyFromPrivate(rawPrivateKey)
}

secp256k1.loadPublicKey = function(rawPublicKey) {
    return secp256k1.keyFromPublic(rawPublicKey, 'hex')
}

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
    var keypair = secp256k1.ellipticCurve.keyFromPrivate(privateKey)
    return keypair.getPublic(compressed, 'hex')
}

secp256k1.signHash = function(signingInputHash, rawPrivateKey) {
    // make sure the required parameters are provided
    if (!(signingInputHash && rawPrivateKey)) {
        throw new MissingParametersError(
            'a signing input hash and private key are all required')
    }
    // prepare the private key
    var privateKeyObject = secp256k1.loadPrivateKey(rawPrivateKey)
    // calculate the signature
    var signatureObject = privateKeyObject.sign(signingInputHash),
        derSignature = new Buffer(signatureObject.toDER())
    // return the DER-formatted signature
    return derSignature.toString('hex')
}

secp256k1.signMessage = function(message, rawPrivateKey) {
    var messageHash = secp256k1.createHash(message)
    return secp256k1.signHash(messageHash, rawPrivateKey)
}

secp256k1.verifyHash = function(signingInputHash, derSignatureBuffer, rawPublicKey) {
    // make sure the required parameters are provided
    if (!(signingInputHash && derSignatureBuffer && rawPublicKey)) {
        throw new MissingParametersError(
            'a signing input hash, der signature, + public key are required')
    }
    // prepare the public key
    var publicKeyObject = secp256k1.loadPublicKey(rawPublicKey)
    // verify the token
    return publicKeyObject.verify(signingInputHash, derSignatureBuffer)
}

module.exports = secp256k1
