// TODO: hämta dagens datum från store
import { getToday } from "../utils/date" 

const currentDayName = getToday()

const Footer = () => (
	<footer>
		<p> Idag är det: {currentDayName} </p>
		<p> Studieguide | 2024 </p>
	</footer>
)

export default Footer
