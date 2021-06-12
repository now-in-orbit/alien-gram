export interface Sighting {
	sightingId: string | null;
	sightingCity: string;
	sightingSummary: string;
	sightingLatitude: number;
	sightingLongitude: number;
	sightingDateTime: string | Date;
}