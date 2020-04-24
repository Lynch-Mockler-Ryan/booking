DROP TABLE IF EXISTS member;

CREATE TABLE member
(
    id            INT AUTO_INCREMENT PRIMARY KEY,
    name          VARCHAR(250) NOT NULL,
    email         VARCHAR(250) NOT NULL,
    mobile        VARCHAR(250) NOT NULL,
    member_number VARCHAR(250) NOT NULL,
    since         DATE DEFAULT NULL,
    expires       DATE DEFAULT NULL
);

/*
insert into member
values (1, 'Colm', 'a@b.ie', 0871111111, 1, sysdate, null);

insert into member
values (2, 'Peter', 'a@b.ie', 0872222222, 1, sysdate, null);

insert into member
values (3, 'Niall', 'a@b.ie', 0873333333, 1, sysdate, null);*/
