const hre = require("hardhat")

async function main() {
  const FlashLoanTemplate= await hre.ethers.getContractFactory("FlashLoanTemplate")
  const flashLoanTemplate = await FlashLoanTemplate.deploy()

  await leveragedYieldFarm.deployed()

  console.log(`Leveraged Yield Farm deployed to ${flashLoanTemplate.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});