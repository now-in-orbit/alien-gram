import axios from 'axios';
import { v1 as uuid } from 'uuid';
import {insertSighting} from '../sighting/insertSighting';
import {Sighting} from '../interfaces/Sighting';
import {finished} from 'stream';
const fs = require('fs')
const csv = require('csv-parser')

export function ufoSightingDataDownloader() : Promise<any> {
	async function main() {
		try{
			await downloadSightings()

		} catch (error) {
			console.error(error)
		}

	}

	return main()

	async function downloadSightings() {
		try {
			const results : any = [];

			fs.createReadStream('./ufo.csv')
				.pipe(csv())
				.on('data', (data: any) => results.push(data))
				.on('end',  async () => {
					try {
						for (let result of results) {
							const {sightingCity, sightingSummary, sightingDateTime} = result
							const sighting: Sighting = {
								sightingId: uuid(),
								sightingCity: result.city as string,
								sightingSummary: result.summary as string,
								sightingDateTime: new Date(result.date_time)
 							}
							console.log(sighting.sightingDateTime)
							const reply = await insertSighting(sighting)
							console.log(reply)
						}
					} catch (error) {
						throw error
					}
				});

		} catch (error) {
			throw error
		}
	}
}

ufoSightingDataDownloader()
	.then(finished => {
		console.log("finished")
	}).catch(error => {
	console.error(error)
})