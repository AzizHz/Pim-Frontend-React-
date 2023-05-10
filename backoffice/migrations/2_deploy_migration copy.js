const AlleyoopNFT = artifacts.require('AlleyoopNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(AlleyoopNFT, 'Alleyoop NFTs', 'TNT', 10, accounts[1])
}
