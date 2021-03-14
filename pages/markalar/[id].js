import { BRANDS } from "../../constants/brands"
import Layout from "../../components/layout/layout"
import { TEXTS } from "../../constants/texts"

export const getStaticProps = async ({ params }) => {
	return {
		props: {
			brand: BRANDS.filter((brand) => brand.id.toString() === params.id)
		}
	}
}

export const getStaticPaths = async () => {
	const paths = BRANDS.map((brand) => ({
		params: { id: brand.id.toString() },
	}))
	return { paths, fallback: false }
}

function Brand({ brand }) {
	const text = brand[0].text

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

export default Brand