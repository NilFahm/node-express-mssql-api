"use strict";

const eventdata = require("../data/events");

const getEvents = async (req, res, next) => {
  try {
    const events = await eventdata.getEvents();
    res.status(200).send(events);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getById = async (req, res, next) => {
  try {
    const UserId = req.params.id;
    const oneEvent = await eventdata.getById(UserId);
    res.status(200).send(oneEvent);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const insertUser = await eventdata.createUser(data);
    const allUsers = await eventdata.getEvents();
    const isInserted = allUsers.map((x) => x.UserName == data.UserName);
    if (isInserted) {
      res.status(200).send("Inserted Successfully");
    } else {
      res.status(200).send("Something Error To Insert");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getEvents,
  getById,
  createUser,
};
