export const uploadOnCloudinary = async (localFilePath) => {
    if (!localFilePath) {
        return null;
    }

    throw new Error(
        "Cloudinary upload is not configured. Install and configure cloudinary before using upload routes."
    );
};
