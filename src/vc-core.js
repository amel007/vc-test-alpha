const { TonClient, signerNone, abiContract, signerKeys } = require("@tonclient/core");
const { Account } = require("@tonclient/appkit");

const AES = require("crypto-js/aes");
const Utf8 = require('crypto-js/enc-utf8');


const { VCRootStorageContract } = require("../src/contract-package/VCRootStorageContract.js");
const { VCStorageContract } = require("../src/contract-package/VCStorageContract.js");


module.exports = {
    encryptVerifiableCredential,
    decryptVerifiableCredential,
    createVCStorage,
    loadVCToStorage,
    deployVCRootStorage
}

async function encryptVerifiableCredential (verifiableCredential, secretKey) {

    return AES.encrypt(JSON.stringify(verifiableCredential), secretKey).toString();

}

async function decryptVerifiableCredential (cipherVC, secretKey) {

    const bytes = AES.decrypt(cipherVC, secretKey);
    return JSON.parse(bytes.toString(Utf8));
}

async function createVCStorage(client, accWallet, addressVCRootStorage) {

    console.log('send msg for create VC Storage');
    const res = await sendMsgCreateVCStorage(client, accWallet, addressVCRootStorage);

    if(!res) return false;

    console.log('VC Storage was created');

    return true;

    //todo how get id of VC Storage????? and get address via resolveVC

    // console.log('Wait for transaction');
    // const waitAccount = await settings.client.net.wait_for_collection({
    //     collection: "accounts",
    //     filter: {
    //         id: { eq: addressDidDoc },
    //     },
    //     result: "boc",
    //     timeout: 60000
    // });
}

async function loadVCToStorage(client, accWallet, addressVCStorage, cipherVC) {

    console.log('send msg for load VC to Storage');

    const resLt = await sendMsgLoadVCToStorage(client, accWallet, addressVCStorage, cipherVC);

    if(!resLt) return false;

    await waitForAccountUpdate (addressVCStorage, resLt);

    console.log('VC was loaded to Storage');

    return true;

}

async function sendMsgCreateVCStorage(client, accWallet, addressVCRootStorage) {
    try {

        const { body } = await client.abi.encode_message_body({
            abi: { type: "Contract", value: VCRootStorageContract.abi },
            signer: { type: "None" },
            is_internal: true,
            call_set: {
                function_name: "createStorageVC",
                input: { },
            },
        });

        return await sendMsgPayload(accWallet, addressVCRootStorage, 500000000, body);

    } catch (e) {
        console.error(e);
        return false;
    }
}

async function sendMsgPayload(accWallet, destAddress, valueEver, body) {
    try {

        const res = await accWallet.run("sendTransaction", {
            dest: destAddress,
            value: valueEver,
            bounce: true,
            flags: 3,
            payload: body,
        });

        console.log(res.transaction.lt);
        return res.transaction.lt;
    } catch (e) {
        console.error(e);
        return false;
    }
}

async function sendMsgLoadVCToStorage(client, accWallet, addressVCStorage, cipherVC) {
    try {

        const { body } = await client.abi.encode_message_body({
            abi: { type: "Contract", value: VCStorageContract.abi },
            signer: { type: "None" },
            is_internal: true,
            call_set: {
                function_name: "setType",
                input: {
                    "Type": cipherVC
                },
            },
        });

        return await sendMsgPayload(accWallet, addressVCStorage, 500000000, body);

    } catch (e) {
        console.error(e);
        return false;
    }
}

async function waitForAccountUpdate(address, transLt) {
    console.log('Waiting for did document update');
    const startTime = Date.now();
    const account = await settings.client.net.wait_for_collection({
        collection: 'accounts',
        filter: {
            id: { eq: address },
            last_trans_lt: { gt: transLt },
        },
        result: 'data',
    });
    const duration = Math.floor((Date.now() - startTime) / 1000);
    console.log(`Success. Did document ${address} was updated, it took ${duration} sec.\n`);
    return account;
}

async function deployVCRootStorage(client, giverAccount) {

    const valueFromGiver = 500000000;

    const SEED_PHRASE_WORD_COUNT = 12;
    const SEED_PHRASE_DICTIONARY_ENGLISH = 1;
    const HD_PATH = "m/44'/396'/0'/0/0";
    const { crypto } = client;
    const { phrase } = await crypto.mnemonic_from_random({
        dictionary: SEED_PHRASE_DICTIONARY_ENGLISH,
        word_count: SEED_PHRASE_WORD_COUNT,
    });

    console.log(`Generated seed phrase "${phrase}"`);

    let keyPair = await crypto.mnemonic_derive_sign_keys({
        phrase,
        path: HD_PATH,
        dictionary: SEED_PHRASE_DICTIONARY_ENGLISH,
        word_count: SEED_PHRASE_WORD_COUNT,
    });
    const rootKeys = signerKeys(keyPair);

    console.log(rootKeys);

    const VCRootStorageAcc = new Account(VCRootStorageContract, {
        signer: rootKeys,
        client,
    });

    const address = await VCRootStorageAcc.getAddress();
    console.log(`Future address of the contract will be: ${address}`);

    const deployMessage = await client.abi.encode_message(await VCRootStorageAcc.getParamsOfDeployMessage({
        initFunctionName:"constructor",
        initInput:{
            codeVC: VCStorageContract.code
        },
    }));

    const response = await giverAccount.run("sendTransaction", {dest:address,value:valueFromGiver,bounce:false});
    console.log("Giver send " + (valueFromGiver/1000000000).toString() + " ever to VC Root Storage:", address);

    let shard_block_id;
    shard_block_id = (await client.processing.send_message({
            message: deployMessage.message,
            send_events: true,
        }, logEvents,
    )).shard_block_id;
    console.log(`Deploy message was sent.`);


    const deploy_processing_result = await client.processing.wait_for_transaction({
            abi: abiContract(VCRootStorageContract.abi),
            message: deployMessage.message,
            shard_block_id: shard_block_id,
            send_events: true,
        },
        logEvents,
    );

    console.log(`Contract was deployed at address: ${address}`);

    return { address:address, keys:rootKeys, seed:phrase };
}

async function logEvents(params, response_type) {
    // console.log(`params = ${JSON.stringify(params, null, 2)}`);
    // console.log(`response_type = ${JSON.stringify(response_type, null, 2)}`);
}