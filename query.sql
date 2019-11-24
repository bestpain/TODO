use todo;

CREATE TABLE `buckets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ;

ALTER TABLE buckets AUTO_INCREMENT=1; 

CREATE TABLE tasks (
    id int NOT NULL AUTO_INCREMENT,
    task varchar(50) NOT NULL,
    isComplete bool,
    bucketid int not null,
    PRIMARY KEY (id),
	FOREIGN KEY (bucketid) REFERENCES buckets(id) ON DELETE CASCADE
);

ALTER TABLE tasks AUTO_INCREMENT=100; 

INSERT INTO buckets (category) value ('College');
INSERT INTO buckets (category) value ('Home');
INSERT INTO buckets (category) value ('Work');

