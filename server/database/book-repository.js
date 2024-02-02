class BookRepository {
  constructor(connectionPool) {
    this.connectionPool = connectionPool;
  }

  get pool() {}

  save(book, callback) {
    this.pool.query("insert into books set ?", book, callback);
  }

  get(id) {}

  getAll() {}

  update(id, book) {}

  delete(id) {}
}

module.exports = BookRepository;
