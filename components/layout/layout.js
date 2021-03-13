import React from "react"
import Head from "next/head"
import Link from "next/link"
import "normalize.css"
import { CONSTANTS } from "../../constants"
import Contact from "./contact"
import { Button } from "../"
import { Call } from "../icons"
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
			</Head>
			<div className={styles.headerWrapper}>
				<header className={styles.header}>
					<Link href="/">
						<b className={styles.logo}>{CONSTANTS.title}</b>
					</Link>
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
				Copyright &copy; 2007 - {new Date().getFullYear()} {CONSTANTS.title}
			</footer>
		</div>
	)
}

export default Layout