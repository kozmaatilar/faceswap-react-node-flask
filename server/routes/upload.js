const router = require("express").Router()
const multer = require("multer")
const httpStatus = require("http-status")
const logger = require("../config/logger.config")
const { IMAGE_PATH } = require("../config/const")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'store/images/temp')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage })

router.post('/', upload.single('file'), (req, res) => {
  try {
    const fileName = req.file.filename

    res.status(httpStatus.OK).send({
      code: httpStatus.OK,
      file: IMAGE_PATH + 'temp/' + fileName
    })

  } catch (err) {
    logger.error(`in uploading file ${err.stack}`)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      code: httpStatus.INTERNAL_SERVER_ERROR, 
      message: 'Failed to upload file',
    })
  }
})

module.exports = router