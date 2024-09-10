const router = require("express").Router()
const logger = require("../config/logger.config")
const fs = require("fs")
const httpStatus = require("http-status")
const { ROOT, STOCK_PATH, IMAGE_PATH } = require("../config/const")

const getStocks = async (req, res) => {
  try {
    fs.readdir(ROOT + STOCK_PATH, (err, files) => {
      if (err) {
        logger.error(err.stack);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
          code: httpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal sever error'
        })
      }

      if (!files || !files.length) {
        return res.status(httpStatus.NOT_FOUND).send({
          code: httpStatus.NOT_FOUND,
          message: 'No stock images'
        })
      }

      let imageFile = []
      files.forEach((file) => {
        file = IMAGE_PATH + 'stocks/' + file
        imageFile.push(file)
      })

      res.status(httpStatus.OK).send({
        code: httpStatus.OK,
        files: imageFile
      })
    });

  } catch (err) {
    logger.error(`in getting stock images ${err.stack}`)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      code: httpStatus.INTERNAL_SERVER_ERROR,
      message: "Internal server error"
    })
  }
}

router.get('/list', getStocks)
module.exports = router
