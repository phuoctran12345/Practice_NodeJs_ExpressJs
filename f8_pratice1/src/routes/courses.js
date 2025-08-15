var express = require("express");
var router = express.Router();

// TẠM THỜI: dùng controller trong thư mục có khoảng trắng
const courseController = require("../app/controller/CourseController");

// GET /courses
router.get("/", courseController.index);

// GET /courses/create
router.get("/create", courseController.create);

// POST /courses/store
router.post("/store", courseController.store);

// GET /courses/:id
router.get("/:id/edit", courseController.edit);

// PUT /courses/:id
router.put("/:id", courseController.update);

// DELETE /courses/:slug
router.delete("/:id", courseController.destroy);

// GET /courses/:slug
router.get("/:slug", courseController.show);

module.exports = router;
