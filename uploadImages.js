const cloudinary = require('./cloudinaryConfig');

async function uploadImages(imagePaths) {
    try {
        const uploadPromises = imagePaths.map(imagePath => {
            return cloudinary.uploader.upload(imagePath);
    });

    const uploadResults = await Promise.all(uploadPromises);
    console.log('Upload successful:', uploadResults);
    return uploadResults;
    } catch (error) {
        console.error('Error uploading images:', error);
    }
}

module.exports = uploadImages;
