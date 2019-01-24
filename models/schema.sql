DROP DATABASE IF EXISTS blogdb;
CREATE DATABASE blogdb;

use blogdb;

CREATE TABLE Blogs(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    text VARCHAR(300) NOT NULL,
    createdAt   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

ALTER TABLE Blogs
ADD title varchar(255);

