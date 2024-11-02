const express = require("express");
const compactDisksController = require("../controllers/compact-disks");
const router = express.Router();

router.get("/", (req, res) => compactDisksController.getAllCompactDisks(req, res));
router.post("/", (req, res) => compactDisksController.createCompactDisk(req, res));
router.get("/:id", (req, res) => compactDisksController.getCompactDiskById(req, res));
router.put("/:id", (req, res) => compactDisksController.updateCompactDisk(req, res));
router.delete("/:id", (req, res) => compactDisksController.deleteCompactDisk(req, res));
router.get("/cds-by-genre/:genreId", (req, res) => compactDisksController.getCDsByGenre(req, res));

module.exports = router;
