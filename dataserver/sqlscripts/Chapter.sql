create table Chapter(
    id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),
    name varchar(50) not null,
    owner int not null,
    PRIMARY KEY (id)
);

insert into Chapter(name,owner) values ('Basic Nouns',-1);
insert into Chapter(name,owner) values ('Basic Verbs',-1);
insert into Chapter(name,owner) values ('Basic Adjectives',-1);

select * from chapter;