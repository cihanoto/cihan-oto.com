import React from "react"
import Head from "next/head"
import "normalize.css"
import Contact from "./contact"
import { Button } from "../"
import { Call } from "../icons"
import styles from "../../styles/home.module.css"

function Layout({ children }) {
	const title = "Twitter Web App Clone With ReactJS & NextJS"
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App / Lorem Ipsum</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="google" value="notranslate" />
				<meta name="description" content={title} />
				<meta name="robots" content="index, follow" />

				<meta property="og:title" content={title} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={title} />
				<meta property="twitter:site" content="@sirridemirtas" />
				<meta property="twitter:creator" content="@sirridemirtas" />
				<meta property="twitter:image" content={"/preview.png"} />
			</Head>
			<div className={styles.headerWrapper}>
				<header className={styles.header}>
					<b className={styles.logo}>
						Cihan Otomotiv</b>
					<Button size="small">
						<Call />
						İletişim
					</Button>
				</header>
			</div>
			<main className={styles.main}>
				{children}
				<Contact />
			</main>
			<footer className={styles.footer}>
				Copyright &copy; 2007 - {new Date().getFullYear()} Cihan Otomotiv
			</footer>
		</div>
	)
}

export default Layout