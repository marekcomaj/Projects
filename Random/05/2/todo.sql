CREATE DATABASE TODOAPP;

USE TODOAPP;

CREATE TABLE TODO (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    task TEXT,
    Completed BIT
    );

DESCRIBE TODO;

INSERT INTO TODO (task, completed) VALUES ('Buy Milk', 1);

INSERT INTO TODO (task, completed) VALUES ('Go out', 0);

INSERT INTO TODO (task, completed) VALUES ('Exercise', 1);

INSERT INTO TODO (task, completed) VALUES ('eat pizza', 1);

UPDATE TODO
SET completed = 0
WHERE id = 3;

DELETE FROM TODO WHERE id = 2;


SELECT * FROM TODO