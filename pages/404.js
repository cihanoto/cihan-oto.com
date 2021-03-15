import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout/layout"

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<meta name="robots" content="noindex" />
			</Head>
			<p>
				<h1>Aradığınız sayfa bulunamadı! </h1>
				<Link href="/"><a className="link">Anasayfaya gidin.</a></Link>
			</p>
		</Layout>
	)
}