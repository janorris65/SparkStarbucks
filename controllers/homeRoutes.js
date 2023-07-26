const router = require("express").Router();
router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
  // Loads homepage (search input)
});
router.get("/Spark", async (req, res) => {
  try {
    res.render("spark");
  } catch (err) {
    res.status(500).json(err);
  }
  // Loads homepage (search input)
});
module.exports = router;
