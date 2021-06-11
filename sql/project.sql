-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!

DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS tweet;
DROP TABLE IF EXISTS sighting;
DROP TABLE IF EXISTS `like`;
DROP TABLE IF EXISTS transmission;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile
(
    -- this creates the attribute for the primary key
    -- auto_increment tells mySQL to number them {1, 2, 3, ...}
    -- not null means the attribute is required!
    profileId              BINARY(16)   NOT NULL,
    profileActivationToken CHAR(32),
    profileAvatarUrl       VARCHAR(255),
-- to make sure duplicate data cannot exist, create a unique index
    profileEmail           VARCHAR(128) NOT NULL,
    profileFirstName       VARCHAR(32),
-- to make something optional, exclude the not null
    profileHash            CHAR(97)     NOT NULL,
    profileLastName        VARCHAR(32),
    profileUsername        VARCHAR(32),
    UNIQUE (profileEmail),
    UNIQUE (profileUsername),
-- this officiates the primary key for the entity
    PRIMARY KEY (profileId)
);
-- create the post entity
CREATE TABLE post
(
    -- this is for yet another primary key...
    postId        BINARY(16)   NOT NULL,
    -- this is for a foreign key; auto_incremented is omitted by design
    postProfileId BINARY(16)   NOT NULL,
    postContent   VARCHAR(500) NOT NULL,
    -- notice dates don't need a size parameter
    postDate      DATETIME(6)  NOT NULL,
    postImageUrl  VARCHAR(255),
    -- this creates an index before making a foreign key
    INDEX (postProfileId),
    -- this creates the actual foreign key relation
    FOREIGN KEY (postProfileId) REFERENCES profile (profileId),
    -- and finally create the primary key
    PRIMARY KEY (postId)
);
-- create the transmission entity
CREATE TABLE transmission
(
    transmissionId        BINARY(16)   NOT NULL,
    transmissionProfileId BINARY(16)   NOT NULL,
    transmissionPostId    BINARY(16)   NOT NULL,
    transmissionContent   VARCHAR(500) NOT NULL,
    transmissionDateTime  DATETIME(6)  NOT NULL,
    INDEX (transmissionId),
    INDEX (transmissionProfileId),
    INDEX (transmissionPostId),
    FOREIGN KEY (transmissionProfileId) REFERENCES profile (profileId),
    FOREIGN KEY (transmissionPostId) REFERENCES post (postId),
    PRIMARY KEY (transmissionId)
);
-- create the like entity (a weak entity from an m-to-n for profile --> tweet)
CREATE TABLE `like`
(
    -- these are not auto_increment because they're still foreign keys
    likePostId    BINARY(16)  NOT NULL,
    likeProfileId BINARY(16)  NOT NULL,
    likeDateTime  DATETIME(6) NOT NULL, -- index the foreign keys
    INDEX (likePostId),
    INDEX (likeProfileId),
    -- create the foreign key relations
    FOREIGN KEY (likePostId) REFERENCES post (postId),
    FOREIGN KEY (likeProfileId) REFERENCES profile (profileId),
    -- finally, create a composite foreign key with the two foreign keys
    PRIMARY KEY (likePostId, likeProfileId)
);

CREATE TABLE sighting
(
    sightingId       BINARY(16)  NOT NULL,
    sightingCity     VARCHAR(64) NOT NULL,
    sightingSummary  VARCHAR(1000),
    sightingLatitude VARCHAR(20),
    sightingLongitude VARCHAR(20),
    sightingDateTime DATETIME(6) NOT NULL, -- index the foreign keys...what foreign keys?
    PRIMARY KEY (sightingId)
);
