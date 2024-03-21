// Controller functions
const create = async (Model) => async (req, res) => {
  try {
    const newItem = await Model.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAll = async (Model) => async (req, res) => {
  try {
    const items = await Model.find();
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getById = async (Model) => async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (Model) => async (req, res) => {
  try {
    const updatedItem = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const remove = async (Model) => async (req, res) => {
  try {
    const deletedItem = await Model.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Export controller functions
module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
