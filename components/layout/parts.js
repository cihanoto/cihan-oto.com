import Link from "next/link"
import { CONSTANTS } from "../../constants"
import { PARTS } from "../../constants/parts"
import styles from "../../styles/home.module.css"
import { List } from "../"
import { TEXTS } from "../../constants/texts"

function Parts() {
	return (
		<div id="parçalar" className={styles.parts}>
			<Link href={"/parcalar"}>
				<a><h2>Araç Parçaları</h2></a>
			</Link>
			<p>{TEXTS.PARTS_DESCRIPTION_PLAIN_TEXT}</p>
			<List list={PARTS.map((part) => {
				return {
					...part,
					url: `${CONSTANTS.sahibinden}${part.text}`,
				}
			})} target="_blank" />
		</div>
	)
}

export default Parts