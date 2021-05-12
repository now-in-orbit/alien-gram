import React from "react"
import { Welcome } from "./Welcome"
import {NavBar} from "./components/NavBar"
import {Footer} from "./Footer.js"



export const Home = () => {
	return (
		<>


			<h1>Home</h1>
			<NavBar />
			<Footer />

			<NavBar />
			<Welcome />

		</>
	)
}

