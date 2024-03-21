const Model = require("../models/Model");

// Create a new record
const createRecord = async (req, res) => {
  try {
    const newRecord = new Model(req.body);
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: "Failed to create record" });
  }
};

// Get all records
const getAllRecords = async (req, res) => {
  try {
    const records = await Model.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch records" });
  }
};

// Get a single record by ID
const getRecordById = async (req, res) => {
  try {
    const record = await Model.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch record" });
  }
};

// Update a record by ID
const updateRecordById = async (req, res) => {
  try {
    const record = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ error: "Failed to update record" });
  }
};

// Delete a record by ID
const deleteRecordById = async (req, res) => {
  try {
    const record = await Model.findByIdAndDelete(req.params.id);
    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete record" });
  }
};

module.exports = {
  createRecord,
  getAllRecords,
  getRecordById,
  updateRecordById,
  deleteRecordById,
};
