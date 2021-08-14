const express = require("express");
const { httpGetCollectionItems } = require("./shop.controllers");
const shopRouter = express.Router();

shopRouter.get("/", httpGetCollectionItems);

module.exports = shopRouter;
