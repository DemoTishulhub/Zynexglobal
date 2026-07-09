import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export async function initDB() {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      product_interest TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);
}

export async function insertSubmission(data: {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
  product_interest?: string;
}) {
  const result = await client.execute({
    sql: "INSERT INTO contact_submissions (first_name, last_name, email, subject, message, product_interest) VALUES (?, ?, ?, ?, ?, ?)",
    args: [
      data.first_name,
      data.last_name,
      data.email,
      data.subject,
      data.message,
      data.product_interest || null,
    ],
  });
  return result;
}

export default client;
