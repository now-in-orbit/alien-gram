
insert into sighting(sightingId, sightingCity, sightingSummary, sightingDateTime) values (uuid_to_bin(uuid()), 'Albuquerque', 'I saw a little green man eat my dog', now())

select bin_to_uuid(postId) as postId, bin_to_uuid(postProfileId) as postProfileId, postContent, postDate from post where postProfileId = uuid_to_bin('dcbf0a01-c726-11eb-aad0-0242ac160002') order by postDate desc

DROP TABLE IF EXISTS sighting;


insert into post(postId, postProfileId, postContent, postDate) values (uuid_to_bin(uuid()), uuid_to_bin('c09a5b7a-ca08-11eb-827a-0242ac1d0002'), 'I saw a little green man eat my dog', now())

SELECT sightingCity FROM sighting GROUP BY sightingCity HAVING COUNT(sightingCity) = 1

SELECT sightingLatitude FROM sighting GROUP BY sightingLatitude HAVING COUNT(sightingLatitude) = 1;
SELECT sightingLongitude FROM sighting GROUP BY sightingLongitude HAVING COUNT(sightingLongitude) = 1;