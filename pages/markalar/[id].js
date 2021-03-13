import { BRANDS } from "../../constants/brands"
import Layout from "../../components/layout/layout"
import { TEXTS } from "../../constants/texts"

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			part: BRANDS.filter((p) => p.id.toString() === params.id)
		}
	}
}

export const getStaticPaths = async () => {
	const paths = BRANDS.map((part) => ({
		params: { id: part.id.toString() },
	}))
	return { paths, fallback: false }
}

function Part({ part }) {
	const text = part[0].text

	return (
		<Layout
			pageTitle={`${text} Yedek Parça, İkinci El`}
			pageDescription={TEXTS.BRAND_DESCRIPTION_PLAIN_TEXT(text)}
		>
			<h1 className={"title"}>{text}</h1>
			<p>
				{TEXTS.BRAND_DESCRIPTION(text)}
			</p>
		</Layout>
	)
}

export default Part