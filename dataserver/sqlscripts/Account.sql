create table Account(
    id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),
    username varchar(50) not null,
    password varchar(50) not null,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    email varchar(50) not null,
    institution varchar(50) not null,
    birthdate varchar(50) not null,
    startingTheme int not null,
    PRIMARY KEY (id)
);

insert into account (username,password,firstName,lastName,email,institution,birthdate,startingTheme) values ('admin','admin','Max','Muster','max.m@gmx.at','htllleonding','1.1.1970',1);
insert into account (username,password,firstName,lastName,email,institution,birthdate,startingTheme) values ('tester','test','David','Urbanides','d.u@gmx.at','htllleonding','1.1.2000',1);

select * from account;