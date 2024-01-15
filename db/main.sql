CREATE TYPE type_lesson AS ENUM ('lecture', 'lab', 'practice');

CREATE TABLE typeLesson (
    idTypeLesson SERIAL PRIMARY KEY,
    typesLessons type_lesson
);

INSERT INTO typeLesson (typesLessons) VALUES ('lecture');
INSERT INTO typeLesson (typesLessons) VALUES ('lab');
INSERT INTO typeLesson (typesLessons) VALUES ('practice');

select * from typeLesson;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'types_facultet') THEN
        CREATE TYPE types_facultet AS ENUM ('nniftcn');
    END IF;
END $$;

DROP TABLE IF EXISTS numGroop;

CREATE TABLE numGroop (
    idNumGroop SERIAL PRIMARY KEY,
    nameGroop VARCHAR(15),
    nameSpecialty VARCHAR(100),
    facultet types_facultet,
    contactUse VARCHAR(150)
);

INSERT INTO numGroop (nameGroop, nameSpecialty, facultet, contactUse) 
VALUES ('231 sk', '174 - Automation, computer-integrated technologies and robotics', 'nniftcn', '+380733249239 Andriy');

drop TABLE numberLessons;
CREATE TABLE numberLessons (
    idNumLessons SERIAL PRIMARY KEY,
    numLessons INT UNIQUE,
    startTimeOfTheLesson TIME,
    endTimeOfTheLesson TIME,
    CHECK (startTimeOfTheLesson < endTimeOfTheLesson)
);

-- Insert data into the table
INSERT INTO numberLessons (numLessons, startTimeOfTheLesson, endTimeOfTheLesson)
VALUES 
    (1, '08:20:00', '09:40:00'),
    (2, '09:50:00', '11:10:00'),
    (3, '11:30:00', '13:50:00'),
	(4, '13:00:00', '14:20:00'),
	(5, '14:40:00', '16:00:00'),
	(6, '16:10:00', '17:30:00');

select * from numberLessons;

CREATE TYPE status_user AS ENUM ('Admin','Teacher');

create table Users(
	userId SERIAL PRIMARY KEY,
	login varchar(50),
	passwords varchar(50),
	email varchar(100),
	nameSurename varchar(150),
	status status_user
);

INSERT INTO Users (login,passwords,email,nameSurename,status) VALUES ('admin','admin','admin@gmail.com','sd','Admin');

select * from Users;