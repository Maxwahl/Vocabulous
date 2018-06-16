drop table result;
create table Result(
    id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),
    unitID int not null,
    account int not null,
    correct int not null,
    secondTry int not null,
    wrong int not null,
    time double not null,
    date varchar(50) not null,
    mode int not null,
    PRIMARY KEY (id)
);