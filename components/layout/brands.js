import { List } from "../"
import { BRANDS } from "../../constants/brands"
import styles from "../../styles/home.module.css"

function Brands() {
	return (
		<div id="markalar" className={styles.brands}>
			<h2>Araç Markaları</h2>
			<List list={BRANDS} />
		</div>
	)
}

export default Brands