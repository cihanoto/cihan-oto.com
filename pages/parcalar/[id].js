import React from "react"
import { useRouter } from "next/router"
import { PARTS } from "../../constants/parts"
import Layout from "../../components/layout/layout"
import { TEXTS } from "../../constants/texts"

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			part: PARTS.filter((part) => part.id.toString() === params.id)
		}
	}
}

export const getStaticPaths = async () => {
	const paths = PARTS.map((part) => ({
		params: { id: part.id.toString() },
	}))
	return { paths, fallback: false }
}

function Part({ part }) {
	const text = part[0].text
	const router = useRouter()
	const { marka } = router.query

	return (
		<Layout
			pageTitle={`${text} Yedek Parçası`}
			pageDescription={TEXTS.PART_DESCRIPTION_PLAIN_TEXT(text)}
		>
			<h1 className={"title"}>{marka && marka} {text}</h1>
			<p>
				{TEXTS.PART_DESCRIPTION(text)}
			</p>
		</Layout>
	)
}

export default Part