const express = require("express");
const compactDiskController = require("../controllers/compact-disks");
const router = express.Router();


router.get("/", compactDiskController.getAllCompactDisks);


router.post("/", compactDiskController.createCompactDisk);


router.get("/:id", compactDiskController.getCompactDiskById);


router.put("/:id", compactDiskController.updateCompactDisk);


router.delete("/:id", compactDiskController.deleteCompactDisk);

router.get("/cds-by-genre/:genreId", compactDiskController.getCDsByGenre);


module.exports = router;
