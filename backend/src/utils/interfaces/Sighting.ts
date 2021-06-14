export interface Sighting {
	sightingId: string | null;
	sightingCity: string;
	sightingSummary: string;
	sightingLatitude: string;
	sightingLongitude: string;
	sightingDateTime: string | Date;
}