const router = require("express").Router()
const logger = require("../config/logger.config")
const axios = require('axios')
const httpStatus = require("http-status")
const { ROOT, AI_SERVER_ENDPOINT, IMAGE_PATH } = require("../config/const")

const faceSwap = async (req, res) => {
  try {
    const sourceImage = req.body.sourceImage
    const targetImage = req.body.targetImage
    const sourceImagePath = ROOT + '/store/images/' + sourceImage.type + '/' + sourceImage.name
    const targetImagePath = ROOT + '/store/images/' + targetImage.type + '/' + targetImage.name
    const outputImageName = Date.now() + '-' + targetImage.name
    const outputImagePath = ROOT + '/store/images/swap/' + outputImageName

    const result = await axios.post(`${AI_SERVER_ENDPOINT}/swap-faces`, {
      sourcePath: sourceImagePath,
      targetPath: targetImagePath,
      outputPath: outputImagePath
    })

    if (result.data.code === 200) {
      res.status(httpStatus.OK).send({
        code: httpStatus.OK,
        file: IMAGE_PATH + 'swap/' + outputImageName
      })
    } else {
      res.status(httpStatus.BAD_REQUEST).send({
        code: httpStatus.BAD_REQUEST,
        message: 'Failed in swapping'
      })
    }
  } catch (err) {
    logger.error(`in swapping faces ${err.stack}`)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      code: httpStatus.INTERNAL_SERVER_ERROR,
      message: 'Failed in swapping'
    })
  }
}

router.post('/image', faceSwap)
module.exports = router
