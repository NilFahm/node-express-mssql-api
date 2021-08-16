"use strict";

const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

const getEvents = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("events");
    console.log(sqlQueries);
    const lists = await pool.request().query(sqlQueries.eventlist);
    return lists.recordset;
  } catch (error) {
    return error.message;
  }
};

const getById = async (userId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("events");
    const oneEvent = await pool
      .request()
      .input("UserId", sql.Int, userId)
      .query(sqlQueries.eventbyid);
    return oneEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const createUser = async (userData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("events");
    console.log(sqlQueries.Insertuser);
    const insertUser = await pool
      .request()
      .input("UserName", sql.NVarChar(100), userData.UserName)
      .input("Email", sql.NVarChar(150), userData.Email)
      .query(sqlQueries.Insertuser);
    return insertUser.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getEvents,
  getById,
  createUser,
};
