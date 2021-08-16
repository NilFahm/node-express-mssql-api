"use strict";

const express = require("express");
const eventController = require("../controllers/eventscontroller");
const router = express.Router();

const { getEvents, getById, createUser } = eventController;

router.get("/events", getEvents);
router.get("/event/:id", getById);
router.post("/event", createUser);

module.exports = {
  routes: router,
};
