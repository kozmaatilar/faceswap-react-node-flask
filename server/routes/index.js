const router = require("express").Router()
const logger = require("../config/logger.config.js")
const { ROOT } = require("../config/const.js")
const stock = require('./stock.router.js')
const upload = require("./upload.js")
const swap = require("./swap.router.js")

router.get('/store/images/:type/:imageName', async (req, res) => {
  try {
    const type = req.params.type
    const fileName = req.params.imageName
    const filePath = `${ROOT}/store/images/${type}/${fileName}`
    res.sendFile(filePath)

  } catch (err) {
    logger.error(`in getting stock image ${err.stack}`)
  }
})

router.use('/api/v1/upload', upload)
router.use('/api/v1/stock', stock)
router.use('/api/v1/swap', swap)

module.exports = router