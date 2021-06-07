
insert into sighting(sightingId, sightingCity, sightingSummary, sightingDateTime) values (uuid_to_bin(uuid()), 'Albuquerque', 'I saw a little green man eat my dog', now())

select bin_to_uuid(postId) as postId, bin_to_uuid(postProfileId) as postProfileId, postContent, postDate from post where postProfileId = uuid_to_bin('dcbf0a01-c726-11eb-aad0-0242ac160002') order by postDate desc

DROP TABLE IF EXISTS sighting;

