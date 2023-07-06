import sqlite3, { Database } from "sqlite3";

export class Model {
  #sqlite: typeof sqlite3;

  constructor(sqlite: typeof sqlite3) {
    this.#sqlite = sqlite;
  }

  init() {
    this.#getDB((db) =>
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );
      `),
    );
  }

  getUserById(
    params: { $id: number },
    cb: (err: Error | null, row: unknown) => undefined,
  ) {
    this.#getDB((db) =>
      db.get(
        `
          SELECT id, email, password 
          FROM users
          WHERE id = $id;
        `,
        params,
        cb,
      ),
    );
  }

  getUser(
    params: { $email: string; $password: string },
    cb: (err: Error | null, row: unknown) => undefined,
  ) {
    this.#getDB((db) =>
      db.get(
        `
          SELECT id, email, password 
          FROM users
          WHERE email = $email AND password = $password;
        `,
        params,
        cb,
      ),
    );
  }

  addUser(
    params: { $email: string; $password: string },
    cb: (err: Error | null) => undefined,
  ) {
    this.#getDB((db) =>
      db.run(
        `
          INSERT INTO users (email, password)
          VALUES($email, $password);
        `,
        params,
        cb,
      ),
    );
  }

  #getDB(cb: (db: Database) => Database) {
    return cb(new sqlite3.Database(process.env.DB_FILENAME ?? "")).close();
  }
}

const model = new Model(sqlite3);

export default model;
