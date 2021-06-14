import {Router} from "express";
import {getDirtySightingLatLngController} from "./dirty.sighting.controller";

export const dirtySightingRoute = Router()


dirtySightingRoute.route('/sightingLatLng').get(getDirtySightingLatLngController);

