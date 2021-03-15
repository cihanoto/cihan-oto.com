import { useRouter } from "next/router"
import Layout from "../../components/layout/layout"
import { List } from "../../components"
import { PARTS } from "../../constants/parts"
import { TEXTS } from "../../constants/texts"

function Parts() {
	const router = useRouter()
	const { marka } = router.query

	return (
		<Layout
			pageTitle="Araç Yedek Parçaları"
			pageDescription={TEXTS.PARTS_DESCRIPTION_PLAIN_TEXT}
		>
			<h1 className={"title"}>{marka && marka + " "}Araç Parçaları</h1>
			<p>{TEXTS.PARTS_DESCRIPTION_PLAIN_TEXT}</p>
			<List list={
				!marka ? PARTS : PARTS.map((part) => {
					return {
						...part,
						url: `/parcalar/${part.id}?marka=${marka}`
					}
				})
			} />
		</Layout>
	)
}

export default Parts