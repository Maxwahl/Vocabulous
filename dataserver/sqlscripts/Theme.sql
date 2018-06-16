drop table Theme;
create table Theme(
    id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 0, INCREMENT BY 1),
    owner int not null,
    name varchar(50) not null,
    hBgC varchar(6) not null,
    mFC varchar(6) not null,
    hFC varchar(6) not null,
    cABgC varchar(6) not null,
    mNC varchar(6) not null,
    mBgC varchar(6) not null,
    cBG varchar(6) not null,
    mNFC varchar(6) not null,
    cHL varchar(6) not null,
    pF varchar(6) not null,
    PRIMARY KEY (id)
);

insert into theme (owner,name,hBgC,mFC,hFC,cABgC,mNC,mBgC,cBG,mNFC,cHL,pF) values (-1,'Dark','2E2E2E','FFFFFF','FFFFFF','585858','6E6E6E','424242','FFFFFF','424242','FFFFFF','E0ECF8');
insert into theme (owner,name,hBgC,mFC,hFC,cABgC,mNC,mBgC,cBG,mNFC,cHL,pF) values (-1,'Default','1976d2','212121','fafafa','ededed','e8e8e8','ffffff','212121','ffffff','1976d2','565656');
insert into theme (owner,name,hBgC,mFC,hFC,cABgC,mNC,mBgC,cBG,mNFC,cHL,pF) values ( 1,'Red','d32f2f','424242','fafafa','f5f5f5','e0e0e0','eeeeee','424242','fafafa','d32f2f','424242');
insert into theme (owner,name,hBgC,mFC,hFC,cABgC,mNC,mBgC,cBG,mNFC,cHL,pF) values ( 1,'Turquoise','009688','616161','f5f5f5','f5f5f5','bdbdbd','eeeeee','424242','fafafa','009688','424242');

select * from theme;