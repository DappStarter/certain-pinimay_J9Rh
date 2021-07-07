require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth script column harvest help furnace gentle'; 
let testAccounts = [
"0x3b89ff26ce3c2d2f0ec1df3513baf41a7412269306c8ff4b8aaaa8b90740a1e1",
"0x2efebadb4fcbeeebd31ac4c1cd4d031b7c25363b2d27059f4fcc0894c1e0161c",
"0x80f8bfeabefb1790329ca2b96e9259c6882d983aa6ffd393d110ac581095ed47",
"0x30acad19d03be7dd050ac2ea3c5b87df5793efa85316c44421d21e0b92d7a279",
"0x7d9983cb9002336a6d40a343e9f977c936c3833a25e343dc4feb8275b56851ba",
"0xa19e2da0327f48e12b1ffd3587a16645e301044b1797fe19971ad7037d06d85b",
"0x3d1d66c7ee0c8d9444e5a2c35e9a7a499b34f9a508c2e130b8d5e27dff5fa573",
"0x23a63fc095a62e70e5236e788fd644e2a99677eaf5fa9f7c550a1d41b074ccad",
"0xb2a4663f6849186351d41816805460d2d171d92d01c8659f31d293442b2c73ab",
"0x8731bee8567457c20fb05780f3b627bcc3951424ad8e19299f248ba21583c270"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


