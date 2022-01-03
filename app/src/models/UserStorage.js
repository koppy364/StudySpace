"use strict";

class UserStorage {
  static #users = {
  id: ["kys1", "kys2", "kys3"],
  psword: ["1234", "1234", "1234"],
  name: ["이름1", "이름2", "이름3"],
  };

  static getUsers(...fields) { 
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
