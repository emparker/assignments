const express = require("express");
const fruitRouter = express.Router();
const uuid = require("uuid").v4;

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid(),
    },
    {
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid(),
    },
    {
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid(),
    },
    {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid(),
    },
    {
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid(),
    },
    {
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid(),
    },
    {
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid(),
    },
];

fruitRouter.get("/", (req, res) => {
    if (!req.query.type) {
        return res.send(inventoryItems);
    } else {
        const filteredItems = inventoryItems.filter((item) => {
        return item.type === req.query.type;
        });
        res.send(filteredItems);
    }
});

//filter by max and min price
fruitRouter.get("/price", (req, res) => {
    let { lowPrice, highPrice } = req.query;

    if (lowPrice === undefined) {
        lowPrice = 0;
    }
    // console.log("low", lowPrice);
    if (highPrice === undefined) {
        highPrice = 10000000;
    }
    // console.log("high", highPrice);
    
    const filteredPrice = inventoryItems.filter((item) => {
        return item.price >= lowPrice && item.price <= highPrice;
    });
    res.send(filteredPrice);
});

module.exports = fruitRouter;
