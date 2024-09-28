export const CREATE_TABLES_SQLITE = `
CREATE TABLE IF NOT EXISTS "account" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "name" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "balance" REAL NOT NULL,
  "icon" TEXT NOT NULL,
  "color" TEXT NOT NULL,
  "create_at" TEXT DEFAULT NULL,
  "update_at" TEXT DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS "category" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "name" TEXT NOT NULL,
  "description" TEXT DEFAULT NULL,
  "type" TEXT NOT NULL,
  "icon" TEXT NOT NULL,
  "color" TEXT NOT NULL,
  "create_at" TEXT DEFAULT NULL,
  "update_at" TEXT DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS "transaction" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "source_account_id" INTEGER NOT NULL,
  "amount" REAL NOT NULL,
  "description" TEXT DEFAULT NULL,
  "type" TEXT NOT NULL,
  "create_at" TEXT DEFAULT NULL,
  "update_at" TEXT DEFAULT NULL,
  FOREIGN KEY ("source_account_id") REFERENCES "account" ("id")
);

CREATE TABLE IF NOT EXISTS "transfer_detail" (
  "id" INTEGER PRIMARY KEY,
  "target_account_id" INTEGER NOT NULL,
  FOREIGN KEY ("id") REFERENCES "transaction" ("id"),
  FOREIGN KEY ("target_account_id") REFERENCES "account" ("id")
);

CREATE TABLE IF NOT EXISTS "income_detail" (
  "id" INTEGER PRIMARY KEY,
  "category_id" INTEGER NOT NULL,
  FOREIGN KEY ("id") REFERENCES "transaction" ("id"),
  FOREIGN KEY ("category_id") REFERENCES "category" ("id")
);

CREATE TABLE IF NOT EXISTS "expense_detail" (
  "id" INTEGER PRIMARY KEY,
  "category_id" INTEGER NOT NULL,
  FOREIGN KEY ("id") REFERENCES "transaction" ("id"),
  FOREIGN KEY ("category_id") REFERENCES "category" ("id")
);
`;
