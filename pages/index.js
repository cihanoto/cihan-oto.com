import Layout from "../components/layout/layout"
import Home from "../components/layout/home"
import Parts from "../components/layout/parts"
import Brands from "../components/layout/brands"

export default function HomePage() {
	return (
		<Layout>
			<Home key={"Home"} />
			<Brands key={"Brands"} />
			<Parts key={"Parts"} />
		</Layout>
	)
}