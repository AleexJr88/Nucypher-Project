const config = require('../config')
const utils = require('../utils')
const maticPOSClient = utils.getMaticPOSClient()

const execute = async () => {
  try {
    const tx = await maticPOSClient.burnERC20(config.child.MaticWETH, config.user.amount,  {from: '0xf974263F93C3e026784d18426494Ff7f7BB4Cb77'})
    console.log(tx.transactionHash) // eslint-disable-line
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}

execute().then(() => process.exit(0))
