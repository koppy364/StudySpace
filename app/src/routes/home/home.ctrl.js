"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  }
}

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
}

module.exports = {
  output,
  process,
}

/* 위에랑 같은것
function hello(req, res){
  res.render("home/index");
};*/

/*object
{key:value} 이지만 Key만 입력하면 -> {key: key}*/
