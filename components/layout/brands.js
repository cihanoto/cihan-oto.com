import Link from "next/link"
import { List } from "../"
import { CONSTANTS } from "../../constants"
import { BRANDS } from "../../constants/brands"
import styles from "../../styles/home.module.css"

function Brands() {
	return (
		<div id="markalar" className={styles.brands}>
			<Link href={"/markalar"}>
				<a><h2>Araç Markaları</h2></a>
			</Link>
			<p>
				İkinci el araç almak veya satmak için bizimle <a className="link" href="#iletişim">iletişime geçin</a>. Hızlıca yedek parçalara göz atmak için <a className="link" href="#iletişim">buraya tıklayın</a>.
			</p>
			<List list={BRANDS.map((brand) => {
				return {
					...brand,
					url: `${CONSTANTS.sahibinden}${brand.text}`,
				}
			})} target="_blank" />
		</div >
	)
}

export default Brands