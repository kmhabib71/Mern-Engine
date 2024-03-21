// crudRoute.js
const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  getById,
  update,
  remove,
} = require("../controller/CrudController");

// Routes
router.post("/:modelName", async (req, res) => {
  const modelName = req.params.modelName;
  const Model = require(`../models/${modelName}`);
  create(Model)(req, res);
});

router.get("/:modelName", async (req, res) => {
  const modelName = req.params.modelName;
  const Model = require(`../models/${modelName}`);
  getAll(Model)(req, res);
});

router.get("/:modelName/:id", async (req, res) => {
  const modelName = req.params.modelName;
  const Model = require(`../models/${modelName}`);
  getById(Model)(req, res);
});

router.put("/:modelName/:id", async (req, res) => {
  const modelName = req.params.modelName;
  const Model = require(`../models/${modelName}`);
  update(Model)(req, res);
});

router.delete("/:modelName/:id", async (req, res) => {
  const modelName = req.params.modelName;
  const Model = require(`../models/${modelName}`);
  remove(Model)(req, res);
});

module.exports = router;
