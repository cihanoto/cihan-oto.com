import { PARTS } from "../../constants/parts"
import styles from "../../styles/home.module.css"
import { List } from "../"

function Parts() {
	return (
		<div id="parçalar" className={styles.parts}>
			<h2>Araç Parçaları</h2>
			<List list={PARTS} />
		</div>
	)
}

export default Parts