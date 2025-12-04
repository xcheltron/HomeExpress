import multer from "multer";
import path from "path";

// STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // GUARDA en public/uploads
        cb(null, path.join(__dirname, '../../public/uploads'));
    },

    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop();
        const uniqueName = `user_${Date.now()}.${ext}`;
        cb(null, uniqueName);
    }
});

// Filtrar solo imágenes
function fileFilter(req, file, cb) {
    if (!file.mimetype.startsWith("image/")) {
        return cb(new Error("Solo se permiten imágenes"), false);
    }
    cb(null, true);
}

const uploadUserImage = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Máximo 5 MB
});

module.exports = uploadUserImage;