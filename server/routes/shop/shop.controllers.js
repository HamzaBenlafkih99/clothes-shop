const SHOP_DATA = require("./shop.data");

function httpGetCollectionItems(req, res) {
  res.status(200).json({
    status: "success",
    collectionItems: SHOP_DATA,
  });
}

module.exports = { httpGetCollectionItems };
