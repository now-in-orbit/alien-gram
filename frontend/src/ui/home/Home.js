import React from "react"
import { Welcome } from "./Welcome"
import {Posts} from "./Posts";

import {TransmissionComponent} from "../shared/components/transmissions/TransmissionComponent";




export const Home = () => {
	return (
		<>
			<Welcome />
			<Posts />
			<TransmissionComponent />
		</>
	)
}

