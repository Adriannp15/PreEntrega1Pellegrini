const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica el directorio donde se guardarán las imágenes
      console.log(__dirname)
      cb(null, __dirname + '/.././public/uploads/');      
      
    },
    filename: function (req, file, cb) {
      // Genera un nombre de archivo único basado en la marca de tiempo actual
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      // Usa la extensión original del archivo
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
  });

const uploader = multer({
  storage,
  limits: { fileSize: 1024 * 1024 } // 1MB
});


module.exports = uploader.single('myfile');