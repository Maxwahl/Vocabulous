alter table account
add CONSTRAINT FK_StartingTheme FOREIGN KEY (startingTheme) REFERENCES Theme(Id);

alter table result
add CONSTRAINT FK_result_account FOREIGN KEY (account) REFERENCES Account(Id);
alter table result
add CONSTRAINT FK_result_chapter FOREIGN KEY (unitID) REFERENCES Chapter(Id);

alter table chapter
add CONSTRAINT FK_chapter_account FOREIGN KEY (owner) REFERENCES Account(Id);

alter table theme
add CONSTRAINT FK_theme_account FOREIGN KEY (owner) REFERENCES Account(Id);

alter table vocab
add CONSTRAINT FK_vocab_chapter FOREIGN KEY (chapter) REFERENCES Chapter(Id);