const express = require("express");
const compactDisksController = require("../controllers/compact-disks");
const router = express.Router();

router.get("/", compactDisksController.getAllCompactDisks);
router.post("/", compactDisksController.createCompactDisk);
router.get("/:id", compactDisksController.getCompactDiskById);
router.put("/:id", compactDisksController.updateCompactDisk);
router.delete("/:id", compactDisksController.deleteCompactDisk);
router.get("/cds-by-genre/:genreId", compactDisksController.getCDsByGenre);

module.exports = router;
