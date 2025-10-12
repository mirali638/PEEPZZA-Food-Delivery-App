import express from "express";
import isAuth from "../middleware/isAuth.js";
import {
  addItem,
  deleteItem,
  editItem,
  getItemById,
  rating,
  searchItems
} from "../controllers/item.controller.js";
import { upload } from "../middleware/multer.js";

const itemRouter = express.Router();

// Routes for managing items
itemRouter.post("/add-item", isAuth, upload.single("image"), addItem);
itemRouter.post("/edit-item/:itemId", isAuth, upload.single("image"), editItem);
itemRouter.get("/get-by-id/:itemId", isAuth, getItemById);
itemRouter.get("/delete/:itemId", isAuth, deleteItem);

// Routes for listing/searching items
// In single-shop setup, city and shopId parameters are unnecessary
itemRouter.get("/search-items", isAuth, searchItems); // can filter by name/category only
itemRouter.post("/rating", isAuth, rating);

export default itemRouter;
