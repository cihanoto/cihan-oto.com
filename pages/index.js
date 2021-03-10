import Head from "next/head"
import "normalize.css"
import { Button } from "../components"
import { Call, CarSport, Link, LogOut } from "../components/icons"
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.headerWrapper}>
				<header className={styles.header}>
					<b className={styles.logo}>
						<CarSport style={{
							fontSize: "32px"
						}} />
					CİHAN OTOMOTİV</b>
					<span>Menü</span>
				</header>
			</div>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Cihan Otomotiv {/* <a href="/">Next.js!</a> */}
				</h1>

				<p className={styles.description}>
					Cihan oto parça{" "}
					<Button><Call />Telefon Edin</Button>
					{/* <code className={styles.code}>pages/index.js</code> */}
				</p>

				<div className={styles.grid}>
					<a href="#markalar" className={styles.card}>
						<h3>Araç Markaları &rarr;</h3>
						<p>Yedek parçasını bulmak için araç markalarına göz atın.</p>
					</a>

					<a href="#parçalar" className={styles.card}>
						<h3>Parçalar &rarr;</h3>
						<p>Aradığınız araç parçasını bulmak için göz atın, inceleyin.</p>
					</a>

					<a href="/" className={styles.card}>
						<h3><LogOut />sahibinden.com</h3>
						<p>sahibinden.com adresimizi ziyaret ederek aradığınız parçaları bulun.</p>
					</a>

					<a href="tel:+905325320000" className={styles.card}>
						<h3>İletişim & Adres &rarr;</h3>
						<p>Sorunlarınızın çözümü için arayın ya da adresimizde ziyaret edin.</p>
					</a>
				</div>

				<div id="markalar">
					<h2>Araç Markaları</h2>
				</div>

				<div id="parçalar">
					<h2>Araç Parçaları</h2>
				</div>

				<div id="iletişim">
					<h2>İletişim</h2>
				</div>
			</main>

			<footer className={styles.footer}>
				Copyright &copy; {new Date().getFullYear()} Cihan Otomotiv
			</footer>
		</div >
	)
}