import Head from "next/head"
import "normalize.css"
import { Button, List, Modal } from "../components"
import { Call, CarSport, Link as LinkIcon, LogOut, LogoWhatsapp } from "../components/icons"
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Modal visibility={false}>
				<h2>Lorem Ipsum Dolor Sit amet.</h2>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

				Why do we use it?
				It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


				Where does it come from?
				Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

				The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
			</Modal>

			<div className={styles.headerWrapper}>
				<header className={styles.header}>
					<b className={styles.logo}>
						{/* <CarSport style={{
							fontSize: "32px"
						}} /> */}
					Cihan Otomotiv</b>
					<Button size="small">
						<Call />
						İletişim
					</Button>
				</header>
			</div>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Cihan Otomotiv
				</h1>
				<p className={styles.description}>
					2007 yılından bu yana araç alım - satım ve yedek parça temininde <b>uzman ve tecrübeli kadromuz</b> ile hizmet vermekteyiz. Otomobil, kamyon, kamyonet, iş makineleri gibi her türden aracın; uygun fiyatlara alım ve satımını gerçekleştirmenin yanı sıra, mekanik, kaporta, iç aksesuar, elektrik, motor, şanzıman, kapı, koltuk, jant vs. bütün aksamlarını <b>garantili ve uygun fiyatlar</b>la tedarik ediyor, ihtiyaç halinde bütün şehirlerimize <b>kargo ile teslim ediyoruz</b>.
					<br /><br /><Button><Call />Telefon Edin</Button>
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
					<a href="#araçlar" className={styles.card}>
						<h3>Satılık Araçlar &rarr;</h3>
						<p>Satılık araçlarımızı görüntüleyin.</p>
					</a>
					<a href="#iletişim" className={styles.card}>
						<h3>Aracınızı Satın &rarr;</h3>
						<p>Aracınızı satmak için bizimle iletişime geçin.</p>
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
					<h2 className="txtCenter">İletişim</h2>
					<div className={styles.contact}>
						<address>
							<label>Adres</label><br />
							Altıayak Mahallesi, Recep Gürbüz Caddesi No:49, 07210 Kepez/Antalya
							<br />
							<a href="https://www.google.com/maps/place/Alt%C4%B1ayak,+Recep+G%C3%BCrb%C3%BCz+Caddesi+No:49,+07210+Kepez"
								target="_blank"
								className="link"
							>Google Maps'te görüntüleyin</a>

							<br /><br /><label>Telefon</label>

							<br />Cihan Bayrakçı: <a className="link"
								href="tel:+905452917017">0545 291 70 17</a>

							<br />Sadi Bayrakçı: <a className="link"
								href="tel:+905512075779">0551 207 57 79</a>

							<br />İbrahim Can Bayrakçı:  <a className="link"
								href="tel:+905432075779">0543 207 57 79</a>

							<br /><br /><label>WhatsApp</label><br />
							<a className="link" target="_blank"
								href="https://wa.me/905452917017"
							>Cihan Bayrakçı</a>,&nbsp;
							<a className="link" target="_blank"
								href="https://wa.me/905512075779"
							>Sadi Bayrakçı</a>,&nbsp;
							<a className="link" target="_blank"
								href="https://wa.me/905512075779"
							>İbrahim Can Bayrakçı</a>

						</address>
					</div>
				</div>
			</main>
			<footer className={styles.footer}>
				Copyright &copy; 2007 - {new Date().getFullYear()} Cihan Otomotiv
			</footer>
		</div >
	)
}