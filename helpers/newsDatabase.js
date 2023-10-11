class NewsDatabase {
  static news = []
  static #idCounter = 1

  static addNews(title, image, text) {
    NewsDatabase.news.push(new News(NewsDatabase.#idCounter++, title, image, text))
  }

  static getNews(id) {
    for (let i of NewsDatabase.news) {
      if (i.id == id) {
        return i
      }
    }
  }

  static getNewsList() {
    return NewsDatabase.news
  }

  static removeNews(id) {
    for (let i = 0; i < NewsDatabase.news.length; i++) {
      if (NewsDatabase.news[i].id == id) {
        NewsDatabase.news.splice(i, 1)
      }
    }
  }

  static changeNews(id, newData) {
    for (let i = 0; i < NewsDatabase.news.length; i++) {
      if (NewsDatabase.news[i].id == id) {
        NewsDatabase.news[i].title = newData.title
        NewsDatabase.news[i].image = newData.image
        NewsDatabase.news[i].text = newData.text
      }
    }
  }
}

class News {
  id = null
  title = null
  image = null
  text = null
  fullDate = new Date()
  dateTime = `${this.fullDate.getHours()}:${this.fullDate.getMinutes()}  ${this.fullDate.getDate()}-${this.fullDate.getMonth()}-${this.fullDate.getFullYear()}`

  constructor(id, title, image, text) {
    this.id = id
    this.title = title
    this.image = image
    this.text = text
  }
}

module.exports = NewsDatabase
