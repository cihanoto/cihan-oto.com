import { CONSTANTS } from "../../constants"
import { Button } from "../"
import { Call, LogOut } from "../icons"
import styles from "../../styles/home.module.css"

function Home() {
	return (
		<div>
			<h1 className={styles.title}>
				{CONSTANTS.title}
			</h1>
			<div className={styles.description}>
				<p>
					2007 yılından bu yana araç alım - satım ve yedek parça temininde <b>uzman ve tecrübeli kadromuz</b> ile hizmet vermekteyiz. Otomobil, kamyon, kamyonet, iş makineleri gibi her türden aracın; uygun fiyatlara alım ve satımını gerçekleştirmenin yanı sıra, mekanik, kaporta, iç aksesuar, elektrik, motor, şanzıman, kapı, koltuk, jant vs. bütün aksamlarını <b>garantili ve uygun fiyatlar</b>la tedarik ediyor, ihtiyaç halinde bütün şehirlerimize <b>kargo ile teslim ediyoruz</b>.
				</p>
				<Button href="#iletişim"><Call />Telefon Edin</Button>
			</div>
			<div className={styles.grid}>
				<a href="#markalar" className={styles.card}>
					<h3>Araç Markaları &rarr;</h3>
					<p>Yedek parçasını bulmak için araç markalarına göz atın.</p>
				</a>
				<a href="#parçalar" className={styles.card}>
					<h3>Parçalar &rarr;</h3>
					<p>Aradığınız araç parçasını bulmak için göz atın, inceleyin.</p>
				</a>
				<a href={CONSTANTS.sahibinden} target="_blank" className={styles.card}>
					<h3>Satılık Araçlar &rarr;</h3>
					<p>Satılık araçlarımızı görüntüleyin.</p>
				</a>
				<a href="#iletişim" className={styles.card}>
					<h3>Aracınızı Satın &rarr;</h3>
					<p>Aracınızı satmak için bizimle iletişime geçin.</p>
				</a>
				<a href={CONSTANTS.sahibinden} target="_blank" className={styles.card}>
					<h3><LogOut />sahibinden.com</h3>
					<p>sahibinden.com adresimizi ziyaret ederek aradığınız parçaları bulun.</p>
				</a>
				<a href="#iletişim" className={styles.card}>
					<h3>İletişim & Adres &rarr;</h3>
					<p>Sorunlarınızın çözümü için arayın ya da adresimizde ziyaret edin.</p>
				</a>
			</div>
		</div>
	)
}

export default Home