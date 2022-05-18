require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remember universe hidden knee blush secret'; 
let testAccounts = [
"0xf2bfeff12e60167ea6c117810ebecb676d2037179867094830f355339a98a374",
"0xa3dedcfa17be1788d62592c63212941b31a5aadeeea25382fb616d5918d75a73",
"0xcf7e89be2b04d65d6eecfe40cbc84f97dc4b561ccf746664a63a8fa0e546af19",
"0xc95d698ba6297b511d86a27bcfd0bb9dc7c91bd49c0e9cb6b50f30f4ac84b124",
"0x48ba329e8c5a6089a36e932aa9c4bcffd13338f9cdd9f89dda4319ecf8bf439e",
"0x85bd0c3bd260ca33fa721603828c2ede232d4bb5c7c292d46b70a9344806cff0",
"0xb8533e9c5bef8a96ea5530a488f5ac08c2413083e75691371c9dacf1ccaaf38c",
"0x3134b9b3bb35e85ae62d383ee1c6b731e2bcce35220413fa99f6dd66b774d36c",
"0xffc9af6c51f85b3556231cd8c4187e40be93de7b1569d93423f52beb1884637c",
"0x02480728c2ec1bf4057ce10cefab7bc93256db35e6f8545299557cd169383a87"
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
            gas: 8000000,
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


