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
}

class News {
  id = null
  title = null
  image = null
  text = null

  constructor(id, title, image, text) {
    this.id = id
    this.title = title
    this.image = image
    this.text = text
  }
}

module.exports = NewsDatabase
