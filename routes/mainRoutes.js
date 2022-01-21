const express = require("express");
const router = express();
const libraryManager = require('../controllers/libraryManager');
router.get("/getBooks", libraryManager.getBooks)
router.post("/createRecord", libraryManager.createRecord)
router.get("/getRecords", libraryManager.getRecords)
router.post("/updateRecord/:recordId", libraryManager.updateRecord)
router.delete("/deleteRecord/:recordId", libraryManager.deleteRecord)

module.exports = router;