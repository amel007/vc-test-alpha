const ed = require("noble-ed25519");
const sha256 = require("crypto-js/sha256.js");

module.exports = {
    createPresentation,
    signPresentation,
    verifyPresentation
}

async function createPresentation(verifiableCredential, id, holder) {
    const presentation = {
        '@context': ['https://www.w3.org/2018/credentials/v1'],
        type: ['VerifiablePresentation']
    };
    if(verifiableCredential) {
        presentation.verifiableCredential = [].concat(verifiableCredential);
    }
    if(id) {
        presentation.id = id;
    }
    if(holder) {
        presentation.holder = holder;
    }

    return presentation;
}

async function signPresentation(presentation, issuerDID, secretKey) {

    presentation.proof = {
        "type": "Ed25519Signature2020",
        "created": (new Date()).toJSON(),
        "verificationMethod": issuerDID,
        "proofPurpose": "assertionMethod",
        "proofValue": await signData(JSON.stringify(presentation), secretKey)
    };

    return presentation;
}

async function verifyPresentation(verifiablePresentation, publicKey) {

    return await verifyData(verifiablePresentation.proof.proofValue, JSON.stringify(verifiablePresentation), publicKey)
}

async function signData(msg, secretKey){

    const msgHash = sha256(msg).toString();

    return await ed.sign(msgHash, secretKey);
}

async function verifyData(signatureHex, msg, publicKey){

    const msgHash = sha256(msg).toString();

    return await ed.verify(signatureHex, msgHash, publicKey);
}


