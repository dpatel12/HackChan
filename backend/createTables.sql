CREATE TABLE comment_thread (init_com_time TIMESTAMP, recent_com_time TIMESTAMP, thread_name TEXT, number_of_comments INT, PRIMARY KEY(init_com_time));

CREATE TABLE comment_entry (comment_time TIMESTAMP, comment_text TEXT, parent_init_time TIMESTAMP, PRIMARY KEY(comment_time), CONSTRAINT foreign_def FOREIGN KEY (parent_init_time) REFERENCES comment_thread(init_com_time));
