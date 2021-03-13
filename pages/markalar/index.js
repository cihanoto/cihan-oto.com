import Layout from "../../components/layout/layout"
import { List } from "../../components"
import { BRANDS } from "../../constants/brands"

function Brands() {
	return (
		<Layout
			pageTitle="Araç Markaları"
			pageDescription="İkinci el araç almak, satmak veya yedek parçasını satın almak için bizimle iletişime geçin."
		>
			<h1 className={"title"}>Araç Markaları</h1>
			<List list={BRANDS} />
		</Layout>
	)
}

export default Brands