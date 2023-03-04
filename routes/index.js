let express = require("express");
let router = express.Router();
const prisma = require("../prisma");

// Controllers Here
const {
  showData,
  addData,
  updateData,
  deleteData,
} = require("../controller/create");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200);
  res.json({ title: "Express" });
});

router.get("/api", (req, res) => {
  res.json({
    message: "Hello from express API",
  });
});

router.get("/data", (req, res) => {
  (async function () {
    const data = await prisma.data.findMany();
    res.json({ data: data });
  })();
});

router.get("/showData", showData);

router.post("/addData", addData);

router.post("/updateData/{id}", updateData);

router.delete("/deleteData/{id}", deleteData);

module.exports = router;
