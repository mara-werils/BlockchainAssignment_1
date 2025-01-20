const hre = require("hardhat");

async function main() {
  console.log("Deploying contract...");

  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy();

  console.log("Waiting for deployment...");
  const receipt = await myContract.deploymentTransaction().wait(1);

  console.log("Contract deployed successfully!");
  console.log("Contract Address:", myContract.target);
  console.log("Transaction Hash:", receipt.transactionHash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
