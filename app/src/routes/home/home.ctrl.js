"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  ;}
}

const users = {
  id: ["kys1", "kys2", "kys3"],
  psword: ["1234", "1234", "1234"],
}

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

      if(users.id.includes(id)){
        const idx = users.id.indexOf(id);
        if(users.psword[idx] === psword){
            return res.json({
              success: true,
            });
        }
      }

      return res.json({
        success: false,
        msg: "로그인에 실패하셨습니다.",
      });
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
