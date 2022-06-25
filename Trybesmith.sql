DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA IF NOT EXISTS Trybesmith;

CREATE TABLE Trybesmith.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  classe TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trybesmith.Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id)
);

CREATE TABLE Trybesmith.Products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  orderId INTEGER,
  FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id)
);

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("Poppy", "Guardiã", 15, "martelada123");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("Elesis", "Cavaleira", 8, "00sieghart");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("Tyrande", "Sacerdotisa", 31, "wh1sperw1nd");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("Link", "Aventureiro", 56, "adlez321");

INSERT INTO
  Trybesmith.Users (username, classe, level, password)
VALUES
  ("Sabrina", "Bruxa", 24, "salem666");

INSERT INTO
  Trybesmith.Orders (userId)
VALUES
  (1);

INSERT INTO
  Trybesmith.Orders (userId)
VALUES
  (3);

INSERT INTO
  Trybesmith.Orders (userId)
VALUES
  (2);

INSERT INTO
  Trybesmith.Products (name, amount)
VALUES
  ("Espada Simples", "10 peças de ouro");

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  ("Escudo Desnecessariamente Grande", "20 peças de ouro", 1);

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  ("Adaga de Aço Valírico", "5 peças de ouro", 2);

INSERT INTO
  Trybesmith.Products (name, amount)
VALUES
  ("Chave Misteriosa", "1 peça de ouro");

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  ("Elixir da Restauração", "23 peças de ouro", 3);

INSERT INTO
  Trybesmith.Products (name, amount)
VALUES
  ("Espada Enferrujada", "5 peças de ouro");

INSERT INTO
  Trybesmith.Products (name, amount)
VALUES
  ("Bota de Couro", "12 peças de ouro");

INSERT INTO
  Trybesmith.Products (name, amount, orderId)
VALUES
  ("Engenhoca Aleatória", "15 peças de ouro", 3);

INSERT INTO
  Trybesmith.Products (name, amount)
VALUES
  ("Cajado do Crepúsculo", "55 peças de ouro");
