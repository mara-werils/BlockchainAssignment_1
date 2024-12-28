const { Web3 } = require('web3');

(async () => {
    const web3 = new Web3('http://127.0.0.1:7545');
    const contractAddress = '0x31CAc0881A4e1926886cEe3004D6F8dAb1D95ae5';


    const abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [],
            "name": "withdrawAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const myContract = new web3.eth.Contract(abi, contractAddress);
    const accounts = await web3.eth.getAccounts();

    const balance = await myContract.methods.getBalance().call();
    console.log('Contract Balance::', balance);



    await myContract.methods.withdrawAll().send({ from: accounts[1] });
    console.log('All funds have been withdrawn.');

    const finalBalance = await myContract.methods.getBalance().call();
    console.log('The final balance of the contract:', finalBalance);

})();
