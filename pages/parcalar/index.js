import { useRouter } from "next/router"
import Layout from "../../components/layout/layout"
import { List } from "../../components"
import { PARTS } from "../../constants/parts"

function Parts() {
	const router = useRouter()
	const { marka } = router.query

	return (
		<Layout
			pageTitle="Araç Yedek Parçaları"
			pageDescription="Her marka aracınız içiny yedek parça satın almak için bizimle iletişime geçin."
		>
			<h1 className={"title"}>{marka && marka + " "}Araç Parçaları</h1>
			<List list={
				!marka ? PARTS : PARTS.map((part) => {
					return {
						...part,
						url: part.url + "?marka=" + marka
					}
				})
			} />
		</Layout>
	)
}

export default Parts