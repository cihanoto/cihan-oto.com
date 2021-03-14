import Link from "next/link"
import Layout from "../../components/layout/layout"
import { List } from "../../components"
import { BRANDS } from "../../constants/brands"
import { CONSTANTS } from "../../constants"

function Brands() {
	return (
		<Layout
			pageTitle="Araç Markaları"
			pageDescription="İkinci el araç almak, satmak veya yedek parçasını satın almak için bizimle iletişime geçin."
		>
			<h1 className={"title"}>Araç Markaları</h1>
			<p>Her marka ve türden aracınızı değerine alıyor ve satıyoruz. Satılık araçlarımızı görmek için <a href={CONSTANTS.sahibinden} target="_blank" className="link">çevrimiçi mağazamızı</a> ziyaret edebilir, mevcut aracınızı satmak için bizimle iletişime geçebilirsiniz. <br /><br />Aracınız için uygun fiyatlara yedek parça bulmak için <Link href="/parcalar"><a className="link">buraya dokunun</a></Link>.</p>
			<List list={BRANDS} />
		</Layout>
	)
}

export default Brands