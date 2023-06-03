CREATE DATABASE cf5;

-- Conectarse a la base de datos
\c cf5;

-- Crear la tabla "Sales"
CREATE TABLE Sales (
    id SERIAL PRIMARY KEY,
    datetime TIMESTAMP,
    user_id INTEGER REFERENCES Users(id),
    product_id INTEGER REFERENCES Product(id),
    quantity INTEGER,
    amount NUMERIC(10, 2),
    pay BOOLEAN DEFAULT FALSE,
    debtor_id INTEGER REFERENCES Debtors(id),
    method_id INTEGER REFERENCES PaymentMethods(id),
    promo_id INTEGER REFERENCES Promotions(id)
);


-- Crear la tabla "Product"
CREATE TABLE Product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE,
    price NUMERIC(10, 2),
    bulto INTEGER,
    description TEXT
);

-- Crear la tabla "Stock"
CREATE TABLE Stock (
    id SERIAL PRIMARY KEY,
    date DATE,
    product_id INTEGER REFERENCES Product(id),
    quantity INTEGER
);

-- Crear la tabla "Users"
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE,
    mail VARCHAR(100),
    role_id INTEGER REFERENCES UserRole(id)
);

-- Crear la tabla "UserRole"
CREATE TABLE UserRole (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(100) UNIQUE
);

-- Crear la tabla "Debtors"
CREATE TABLE Debtors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    debt NUMERIC(10, 2)
);

-- Crear la tabla "PaymentMethods"
CREATE TABLE PaymentMethods (
    id SERIAL PRIMARY KEY,
    method_name VARCHAR(100) UNIQUE
);

-- Crear la tabla "Promotions"
CREATE TABLE Promotions (
    id SERIAL PRIMARY KEY,
    promo_name VARCHAR(100) UNIQUE,
    discount NUMERIC(10, 2)
);



-- Crear la tabla "Courts"
CREATE TABLE Courts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE,
    day_price NUMERIC(10, 2),
    night_price NUMERIC(10, 2)
);

-- Crear la tabla "Rentals"
CREATE TABLE Rentals (
    id SERIAL PRIMARY KEY,
    date DATE,
    court_id INTEGER REFERENCES Courts(id),
    ball_id INTEGER REFERENCES Balls(id),
    paid_amount NUMERIC(10, 2),
    paid BOOLEAN,
    debtor_id INTEGER REFERENCES Debtors(id)
);

-- Crear la tabla "Balls"
CREATE TABLE Balls (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(100),
    model VARCHAR(100),
    serial_number VARCHAR(100),
    registration_date DATE,
    description TEXT
);
