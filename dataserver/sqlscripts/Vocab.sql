drop table Vocab;
create table Vocab (
    id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),
    wE varchar(50) not null,
    wG varchar(50) not null,
    chapter int not null,
    PRIMARY KEY (id)
);

insert into vocab (wE,wG,chapter) values('house', 'Haus',1);
insert into vocab (wE,WG,chapter) values('car', 'Auto',1);
insert into vocab (wE,WG,chapter) values('plane', 'Flugzeug',1);
insert into vocab (wE,WG,chapter) values('train', 'Zug',1);
insert into vocab (wE,WG,chapter) values('dog', 'Hund',1);
insert into vocab (wE,WG,chapter) values('cat', 'Katze',1);
insert into vocab (wE,WG,chapter) values('street', 'Straße',1);
insert into vocab (wE,WG,chapter) values('city', 'Stadt',1);
insert into vocab (wE,WG,chapter) values('cow', 'Kuh',1);
insert into vocab (wE,WG,chapter) values('door', 'Tür',1);
insert into vocab (wE,WG,chapter) values('lamp', 'Lampe',1);
insert into vocab (wE,WG,chapter) values('television', 'Fernseher',1);
insert into vocab (wE,WG,chapter) values('music', 'Musik',1);
insert into vocab (wE,WG,chapter) values('stairway', 'Stiege',1);
insert into vocab (wE,WG,chapter) values('fork', 'Gabel',1);
insert into vocab (wE,WG,chapter) values('knife', 'Messer',1);
insert into vocab (wE,WG,chapter) values('spoon', 'Löffel',1);
insert into vocab (wE,WG,chapter) values('key', 'Schlüssel',1);
insert into vocab (wE,WG,chapter) values('music', 'Musik',1);
insert into vocab (wE,WG,chapter) values('stairway', 'Stiege',1);
insert into vocab (wE,WG,chapter) values('underground', 'U-Bahn',1);
insert into vocab (wE,WG,chapter) values('sign', 'Schild',1);
insert into vocab (wE,WG,chapter) values('ice cream', 'Eiscreme',1);
insert into vocab (wE,WG,chapter) values('Stadion', 'stadium',1);
insert into vocab (wE,WG,chapter) values('seat', 'Sessel',1);
insert into vocab (wE,WG,chapter) values('telephone', 'Telefon',1);
insert into vocab (wE,WG,chapter) values('game', 'Spiel',1);
insert into vocab (wE,WG,chapter) values('apple', 'Apfel',1);
insert into vocab (wE,WG,chapter) values('iron', 'Eisen',1);
insert into vocab (wE,WG,chapter) values('trousers', 'Hose',1);
insert into vocab (wE,WG,chapter) values('shoes', 'Schuhe',1);

insert into vocab (wE,wG,chapter) values('make', 'machen',2);
insert into vocab (wE,wG,chapter) values('do', 'tun',2);
insert into vocab (wE,wG,chapter) values('go', 'gehen',2);
insert into vocab (wE,wG,chapter) values('eat', 'essen',2);
insert into vocab (wE,wG,chapter) values('sleep', 'schlafen',2);
insert into vocab (wE,wG,chapter) values('drink', 'trinken',2);
insert into vocab (wE,wG,chapter) values('drive', 'fahren',2);
insert into vocab (wE,wG,chapter) values('speak', 'sprechen',2);
insert into vocab (wE,wG,chapter) values('read', 'lesen',2);
insert into vocab (wE,wG,chapter) values('write', 'schreiben',2);
insert into vocab (wE,wG,chapter) values('run', 'laufen',2);
insert into vocab (wE,wG,chapter) values('see', 'sehen',2);
insert into vocab (wE,wG,chapter) values('ask', 'fragen',2);
insert into vocab (wE,wG,chapter) values('cook', 'kochen',2);
insert into vocab (wE,wG,chapter) values('work', 'arbeiten',2);
insert into vocab (wE,wG,chapter) values('clean', 'putzen',2);
insert into vocab (wE,wG,chapter) values('fly', 'fliegen',2);
insert into vocab (wE,wG,chapter) values('paint', 'malen',2);
insert into vocab (wE,wG,chapter) values('play', 'spielen',2);
insert into vocab (wE,wG,chapter) values('forget', 'vergessen',2);
insert into vocab (wE,wG,chapter) values('touch', 'berühren',2);
insert into vocab (wE,wG,chapter) values('hear', 'hören',2);
insert into vocab (wE,wG,chapter) values('taste', 'schmecken',2);
insert into vocab (wE,wG,chapter) values('smell', 'riechen',2);
insert into vocab (wE,wG,chapter) values('think', 'denken',2);
insert into vocab (wE,wG,chapter) values('cut', 'schneiden',2);
insert into vocab (wE,wG,chapter) values('iron', 'bügeln',2);
insert into vocab (wE,wG,chapter) values('fold', 'falten',2);
insert into vocab (wE,wG,chapter) values('buy', 'kaufen',2);       
insert into vocab (wE,wG,chapter) values('sell', 'verkaufen',2); 
      
insert into vocab (wE,wG,chapter) values('big', 'groß',3);
insert into vocab (wE,wG,chapter) values('fast', 'schnell',3);
insert into vocab (wE,wG,chapter) values('sweet', 'süß',3);
insert into vocab (wE,wG,chapter) values('good', 'gut',3);
insert into vocab (wE,wG,chapter) values('beautiful', 'schön',3);    

select * from vocab;