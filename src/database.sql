-- create a database with the name of "weekend-4-gallery" and then use this data to create the table

CREATE TABLE "images" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(250) NOT NULL,
	"description" VARCHAR(300) NOT NULL,
	"likes" INT NOT NULL DEFAULT 0
);

INSERT INTO "images"("path", "description")
VALUES ('images/balancing-rock.jpg', 'Photo of a huge rock balancing precariously in Colorado.');
INSERT INTO "images"("path", "description")
VALUES ('images/cancun-sign.jpg
', 'Photo of me and my girlfriend behind a cancun sign in Cancun, Mexico.');
INSERT INTO "images"("path", "description")
VALUES ('images/jungle-cancun.jpg
', 'Photo of a river through the jungle in Cancun, Mexico.');
INSERT INTO "images"("path", "description")
VALUES ('images/my-dog.jpg
', 'Photo of my black lab named Koda.');
INSERT INTO "images"("path", "description")
VALUES ('images/utah-petroglyphs.jpg
', 'Photo of a large wall of petroglyphs in southwest Utah.');
INSERT INTO "images"("path", "description")
VALUES ('images/voyageurs-camping.jpg
', 'Photo of my dog and I camping in Voyageurs National Park, MN.');
INSERT INTO "images"("path", "description")
VALUES ('images/waterfall-co.jpg
', 'Photo of me standing in front of a waterfall at hanging lake, Colorado.');
INSERT INTO "images"("path", "description")
VALUES ('images/zion-narrows.jpg
', 'Photo of me rappeling into the narrows at Zion National Park, Utah.');