// Create a new file
const createFile = async (req, res) => {
  try {
    const db = client.db("cnn");
    const bucket = new mongodb.GridFSBucket(db);
    const file = req.file;
    const fileBuffer = file.buffer;
    const uniqueIdentifier = uuid.v4();
    const newFilename = `${uniqueIdentifier}_${file.originalname}`;
    const uploadStream = bucket.openUploadStream(newFilename);
    uploadStream.end(fileBuffer);
    uploadStream.on("error", (error) => {
      console.error(error);
      return res.status(500).json({ message: "Error uploading file" });
    });
    uploadStream.on("finish", () => {
      res.status(201).json({ message: "File uploaded successfully" });
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create file" });
  }
};

// Get a file by ID
const getFileById = async (req, res) => {
  try {
    const db = client.db("cnn");
    const bucket = new mongodb.GridFSBucket(db);
    const fileId = req.params.id;
    const downloadStream = bucket.openDownloadStream(fileId);
    downloadStream.on("error", (error) => {
      console.error(error);
      return res.status(500).json({ message: "Error downloading file" });
    });
    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch file" });
  }
};

// Delete a file by ID
const deleteFileById = async (req, res) => {
  try {
    const db = client.db("cnn");
    const bucket = new mongodb.GridFSBucket(db);
    const fileId = req.params.id;
    await bucket.delete(fileId);
    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete file" });
  }
};

module.exports = {
  createFile,
  getFileById,
  deleteFileById,
};
