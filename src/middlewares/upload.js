import sharp from 'sharp';

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }

  try {
    const outputPath = `${req.file.path}_thumb`;

    await sharp(req.file.path).resize(160, 160).png().toFile(outputPath);

    console.log('Thumbnail successfully created at:', outputPath);
    next();
  } catch (error) {
    console.error('Error generating thumbnail:', error);
    next(error);
  }
};

export {createThumbnail};
