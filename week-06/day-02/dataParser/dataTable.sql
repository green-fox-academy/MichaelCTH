CREATE TABLE users (
	id SERIAL,
    predix VARCHAR(20),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    address VARCHAR(100),
    height float,
    bitcoin_address char(34),
    color_preference varchar(7),
    PRIMARY KEY(id)
);