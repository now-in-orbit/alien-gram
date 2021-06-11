import React from "react"
import { Welcome } from "./Welcome"
import {Posts} from "./Posts";

import {TransmissionComponent} from "../shared/components/transmissions/TransmissionComponent";


import {PostModal} from "./components/post/PostModal";




export const Home = () => {
	return (
		<>
			<Welcome />
			<PostModal />
			<Posts />
			<TransmissionComponent />
		</>
	)
}

