import React from "react"
import { Welcome } from "./Welcome"
import {ThreadComponent} from "./components/ThreadComponent";



export const Home = () => {
	return (
		<>
			<Welcome />
			<ThreadComponent />
		</>
	)
}

