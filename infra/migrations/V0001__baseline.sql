-- Baseline migration (placeholder). Add real tables here.
CREATE TABLE IF NOT EXISTS app_user (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  display_name TEXT
);
