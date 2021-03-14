import React from "react"
import Head from "next/head"
import Link from "next/link"
import "normalize.css"
import { CONSTANTS } from "../../constants"
import Contact from "./contact"
import { Button } from "../"
import { Navigate, Logo } from "../icons"
import styles from "../../styles/home.module.css"

function Layout({ children, pageTitle, pageDescription }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{pageTitle && pageTitle + " / "}{CONSTANTS.title}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={pageDescription || "Her marka ve tipte aracınızı satmak veya uygun fiyata yedek parçasını satın almak için sitemizi ziyaret edin."} />
				<meta name="robots" content="index, follow" />

				<meta name="geo.region" content="TR" />
				<meta name="geo.placename" content="Kepez" />
				<meta name="geo.position" content="36.996225;30.754462" />
				<meta name="ICBM" content="36.996225, 30.754462" />
			</Head>
			<div className={styles.headerWrapper}>
				<header className={styles.header}>
					<Link href="/">
						<b className={styles.logo}>
							{<Logo style={{ color: "white", fontSize: "32px" }} />}
							{CONSTANTS.title}</b>
					</Link>
					<Button href="#iletişim" size="small">
						<Navigate />
						İletişim
					</Button>
				</header>
			</div>
			<main className={styles.main}>
				{children}
				<Contact />
			</main>
			<footer className={styles.footer}>
				<a style={{ cursor: "pointer" }} onClick={(event) => {
					event.preventDefault()
					event.target.innerText = "sirridemirtas@gmail.com"
				}} title="Tasarım ve Programlama">t&p.</a>
				<section>&nbsp;&copy;&nbsp;2007&nbsp;-&nbsp;{new Date().getFullYear()}&nbsp;{CONSTANTS.title}</section>
			</footer>
		</div>
	)
}

export default Layout