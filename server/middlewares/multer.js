const multer = require('multer')

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})

function fileFilter(req, file, cb) {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/png'
    ) {
        cb(null, true)
    } else {
        cb({ message: 'Unsupported file format' }, false)
    }
}
const upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 },
    fileFilter,
})

module.exports = upload
