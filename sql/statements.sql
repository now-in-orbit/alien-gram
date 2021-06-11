
insert into sighting(sightingId, sightingCity, sightingSummary, sightingDateTime) values (uuid_to_bin(uuid()), 'Albuquerque', 'I saw a little green man eat my dog', now())

select bin_to_uuid(postId) as postId, bin_to_uuid(postProfileId) as postProfileId, postContent, postDate from post where postProfileId = uuid_to_bin('dcbf0a01-c726-11eb-aad0-0242ac160002') order by postDate desc

DROP TABLE IF EXISTS sighting;


insert into post(postId, postProfileId, postContent, postDate) values (uuid_to_bin(uuid()), uuid_to_bin('c09a5b7a-ca08-11eb-827a-0242ac1d0002'), 'I saw a little green man eat my dog', now())

# profile seed data
INSERT INTO profile (profileId, profileActivationToken, profileAvatarUrl, profileEmail, profileFirstName, profileHash, profileLastName, profileUsername) VALUES (UUID_TO_BIN("1627502e-c794-11eb-b8bc-0242ac130003"), "null", "👽", "aliens4life@gmail.com", "Mars", "Starsarecool", "Pluto", "Mars");

INSERT INTO profile (profileId, profileActivationToken, profileAvatarUrl, profileEmail, profileFirstName, profileHash, profileLastName, profileUsername) VALUES (UUID_TO_BIN("9a123606-c794-11eb-b8bc-0242ac130003"), "null", "👽", "ufo@gmail.com", "Zim", "Starsarecool", "Invid", "ZIM");

INSERT INTO profile (profileId, profileActivationToken, profileAvatarUrl, profileEmail, profileFirstName, profileHash, profileLastName, profileUsername) VALUES (UUID_TO_BIN("c360a498-c794-11eb-b8bc-0242ac130003"), "null", "👽", "marsrover@gmail.com", "Dib", "Starsarecool", "Membrane", "DIB");

# post seed data
INSERT INTO post (postId, postProfileId, postContent, postDate, postImageUrl) VALUES (UUID_TO_BIN("41f4f642-c795-11eb-b8bc-0242ac130003"), UUID_TO_BIN("1627502e-c794-11eb-b8bc-0242ac130003"), "Last night I saw a UFO!!!", NOW(), "null")

INSERT INTO post (postId, postProfileId, postContent, postDate, postImageUrl) VALUES (UUID_TO_BIN("7b7d651c-c7a3-11eb-b8bc-0242ac130003"), UUID_TO_BIN("9a123606-c794-11eb-b8bc-0242ac130003"), "They are out there...", NOW(), null);

INSERT INTO post (postId, postProfileId, postContent, postDate, postImageUrl) VALUES (UUID_TO_BIN("28d3f78a-c7a4-11eb-b8bc-0242ac130003"), UUID_TO_BIN("c360a498-c794-11eb-b8bc-0242ac130003"), "AlienGram is fake news 😤", NOW(), null)

# transmissions seed data
INSERT INTO transmission(transmissionId, transmissionProfileId, transmissionPostId, transmissionContent, transmissionDateTime) VALUES (UUID_TO_BIN("a42e78f8-c7a7-11eb-b8bc-0242ac130003"), UUID_TO_BIN("c360a498-c794-11eb-b8bc-0242ac130003"), UUID_TO_BIN("28d3f78a-c7a4-11eb-b8bc-0242ac130003"), "TRUTH", NOW());

INSERT INTO transmission(transmissionId, transmissionProfileId, transmissionPostId, transmissionContent, transmissionDateTime) VALUES (UUID_TO_BIN("2e3bd0f4-c7a8-11eb-b8bc-0242ac130003"), UUID_TO_BIN("c360a498-c794-11eb-b8bc-0242ac130003"), UUID_TO_BIN("41f4f642-c795-11eb-b8bc-0242ac130003"), "LIES!", NOW());

INSERT INTO transmission(transmissionId, transmissionProfileId, transmissionPostId, transmissionContent, transmissionDateTime) VALUES (UUID_TO_BIN("57cec552-c7a8-11eb-b8bc-0242ac130003"), UUID_TO_BIN("c360a498-c794-11eb-b8bc-0242ac130003"), UUID_TO_BIN("7b7d651c-c7a3-11eb-b8bc-0242ac130003"), "LIES LIES LIES!!!", NOW());
