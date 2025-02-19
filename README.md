# MyContract Project

## Description
`MyContract` is a smart contract built with Solidity that provides the following functionalities:
1. Accept ETH through the `receive` and `fallback` functions.
2. Display the current balance of the contract using the `getBalance` function.
3. Allow the contract owner to withdraw all ETH from the contract balance using the `withdrawAll` function.


---

## Team Members
This project was developed by the following team members:
1. **Amanbayev Marlen** 
2. **Nagumanov Azamat** 
3. **Tuspekova Gulzhan** 

---

## Project Structure
The project is organized as follows:

```
MyProject/
├── MyContract.sol  // Solidity smart contract
├── interact.js     // Node.js script to interact with the contract using web3.js
├── package.json    // Node.js project configuration
├── package-lock.json
├── README.md       // Documentation for the project
├── LICENSE         // License file
```

---

## Installation
To set up and run the project, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- [Ganache](https://trufflesuite.com/ganache/) to create a local blockchain.
- [MetaMask](https://metamask.io/) installed as a browser extension.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   cd YOUR_REPOSITORY_NAME
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start Ganache:
   - Open Ganache and start a new workspace or use the default one.
   - Make sure it is running at `http://127.0.0.1:7545` (default RPC).
![alt text](image.png)

4. Deploy the smart contract:
   - Open [Remix](https://remix.ethereum.org/).
   - Copy the `MyContract.sol` file into Remix and compile it.
   - Set the environment to **Injected Web3** in Remix.
   - Deploy the contract and copy the contract address.
![alt text](image-2.png)

   - The smart contract was deployed to the **Holesky Testnet** using **Hardhat**.
   - Steps:
     1. Configure the `hardhat.config.js` file to include the Holesky network.
     2. Deploy the contract with the following command:
        ```bash
        npx hardhat run scripts/deploy.js --network holesky
        ```
     3. Copy the deployed contract address.
        ```
        Contract deployed to: 0xYourContractAddress
        ```

   - **Verification**:
     1. Open [Holesky Etherscan](https://holesky.etherscan.io/).
     2. Search for the contract address to view its details.
     3. Verify that the contract balance updates after sending ETH.
     
   - **Testing**:
     1. Sent ETH to the contract using MetaMask.
        - Transaction was successful and verified on Holesky Etherscan.
     2. Called the `getBalance` function via the "Read Contract" tab.
        - The contract correctly displayed its balance.
     3. Called the `withdrawAll` function via MetaMask.
        - The owner successfully withdrew all funds, and the contract balance became `0`.

   - **Screenshots**:
     - **Deployment Output**: 
     ![alt text](image-7.png)
     - **Contract Address on Holesky Etherscan**: 
     ![alt text](image-8.png)
     - **Transaction Testing**:
       - Sending ETH: 
       ![alt text](image-9.png)
       - Contract Balance: Screenshot of the updated balance on Etherscan.
       ![alt text](image-10.png)
       - Withdrawal: 
       ![alt text](image-11.png)
       ![alt text](image-12.png)
       

5. Configure the script:
   - Open `interact.js`.
   - Replace the placeholder `contractAddress` with the actual deployed contract address.
   - Replace the placeholder `abi` with the actual ABI of the contract (copy it from Remix).

6. Run the interaction script:
   ```bash
   node interact.js
   ```
![alt text](image-3.png)
---

## Usage

### Interacting with the Contract
1. **Check Contract Balance**:
   - Run `node interact.js` to call the `getBalance` function.
   - Example output:
     ```
     Contract Balance: 1000000000000000000n
     ```
![alt text](image-1.png)
2. **Send ETH to the Contract**:
   - Use Remix or any wallet (e.g., MetaMask) to send ETH to the contract address.
![alt text](image-4.png)
3. **Withdraw ETH from the Contract**:
   - Call the `withdrawAll` function through the `interact.js` script.
   - Only the owner of the contract can execute this function.
![alt text](image-5.png)
4. **Expected Results**:
   - Before withdrawal:
     ```
     Contract Balance: 1000000000000000000n
     ```
   - After withdrawal:
     ```
     All funds withdrawn.
     Final Contract Balance: 0n
     ```

---

## Example Outputs
### Before Withdrawal:
```bash
Contract Balance: 1000000000000000000n
```
![alt text](image-1.png)

### After Withdrawal:
```bash
All funds withdrawn.
Final Contract Balance: 0n
```
![alt text](image-6.png)

---

## Dependencies
This project uses the following tools and libraries:
- [Solidity](https://soliditylang.org/) for writing the smart contract.
- [Ganache](https://trufflesuite.com/ganache/) for local blockchain development.
- [web3.js](https://web3js.readthedocs.io/) for interacting with the blockchain.
- [Node.js](https://nodejs.org/) for running the JavaScript interaction script.

---

License
This project is licensed under the MIT License(https://github.com/mara-werils/BlockchainAssignment_1/blob/main/LICENSE).

---

## Acknowledgements
- [Remix](https://remix.ethereum.org/) for writing and deploying the smart contract.
- [Ganache](https://trufflesuite.com/ganache/) for local blockchain development.
- [web3.js](https://web3js.readthedocs.io/) for enabling blockchain interactions.
- [MetaMask](https://metamask.io/) for interacting with the blockchain.
- [Holesky Etherscan](https://holesky.etherscan.io/) for verifying the deployment and transactions on a public testnet.