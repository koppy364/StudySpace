"use strict";

const hello = (req, res) => {
  res.render("home/index");
};

/* 위에랑 같은것
function hello(req, res){
  res.render("home/index");
};*/

const login = (req, res) => {
  res.render("home/login");
;}

module.exports = {
  hello,
  login,
}

/*object
{key:value} 이지만 Key만 입력하면 -> {key: key}*/
