class DatabaseManager {
  static #users = []
  static addUser(login, password) {
    DatabaseManager.#users.push(new User(login, password))
  }
  static checkUser(login, password) {
    for (let user of DatabaseManager.#users) {
      if (user.check(login, password)) {
        return true
      }
    }
    return false
  }
  static checkLogin(login) {
    for (let user of DatabaseManager.#users) {
        if (user.checkLogin(login)) {
          return true
        }
      }
      return false
  }
  static getPassword(login) {
    for (let user of DatabaseManager.#users) {
      const password = user.getPassword(login)
      if (password !== null) return password
    }
    return null
  }
  static getName(id) {
    for (let user of DatabaseManager.#users) {
      if (user.checkID(id)) {
        return user.login
      }
    }
    return null
  }
  static setID(login, password, id) {
    for (let user of DatabaseManager.#users) {
      if (user.check(login, password)) {
        user.id = id
      }
    }
  }
}

class User {
  #login = null
  #password = null
  #id = null
  constructor(login, password) {
    this.#login = login
    this.#password = password
  }
  check(login, password) {
    return this.#login === login && this.#password === password
  }
  checkLogin(login) {
    return this.#login === login
  }
  getPassword(login) {
    if (this.#login === login) return this.#password
    return null
  }
  set id(value) {
    this.#id = value
  }
  get login() {
    return this.#login
  }
  checkID(id) {
    return this.#id === id
  }
}

DatabaseManager.addUser('admin', '11111111')

module.exports = DatabaseManager
