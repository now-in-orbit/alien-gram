import React from "react"
import { Welcome } from "./Welcome"
import {Posts} from "./Posts";
import {TransmissionComponent} from "./transmissions/TransmissionComponent";



export const Home = () => {
	return (
		<>
			<Welcome />
			<Posts />
			<TransmissionComponent />
		</>
	)
}

