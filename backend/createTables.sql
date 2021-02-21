CREATE TABLE comment_thread (init_com_time TIME, recent_com_time TIME, thread_name TEXT, number_of_comments INT, PRIMARY KEY(init_com_time));

CREATE TABLE comment_entry (comment_time TIME, comment_text TEXT, parent_init_time TIME, PRIMARY KEY(comment_time), CONSTRAINT foreign_def FOREIGN KEY (parent_init_time) REFERENCES comment_thread(init_com_time));