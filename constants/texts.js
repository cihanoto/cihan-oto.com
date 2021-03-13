import Link from "next/link"
import {CONSTANTS} from "./"

export const TEXTS = {
	PART_DESCRIPTION: (text)=> (
		<>Uzman ve tecrübeli kadromuzla, kamyon, kamyonet, otomobil vs. tüm araçlar için uygun fiyata {text.toLowerCase()} sağlıyoruz. Antalya Kepez'den kendiniz teslim alabileceğiniz gibi tüm şehirlerimize kargo ile teslim ediyoruz. Çevrimiçi mağazamızdaki {text.toLowerCase()} ilanlarına bakmak için <a href={`${CONSTANTS.sahibinden}${text}`} target="_blank" className={"link"}>buraya tıklayın</a>. Çevrimiçi mağazamız stoklarında bulamazsanız, aracınız için ucuz fiyata {text.toLowerCase()} almak için bizimle iletişime geçin.
				<br /><br />Diğer araç parçalarına <Link href="/parcalar"><a className="link">gözatın</a></Link>.</>
	),
	PART_DESCRIPTION_PLAIN_TEXT: (text) => (
		`Uzman ve tecrübeli kadromuzla, kamyon, kamyonet, otomobil vs. tüm araçlar için uygun fiyata ${text.toLowerCase()} sağlıyoruz. Antalya Kepez'den kendiniz teslim alabileceğiniz gibi tüm şehirlerimize kargo ile teslim ediyoruz. Çevrimiçi mağazamızdaki ${text.toLowerCase()} ilanlarına bakmak için ziyaret edin. Çevrimiçi mağazamız stoklarında bulamazsanız, aracınız için ucuz fiyata ${text.toLowerCase()} almak için bizimle iletişime geçin.`
	),
	BRAND_DESCRIPTION: (text)=> (
		<>
			İkinci el {text} marka aracınızı satmak veya başka bir araç almak için bizimle <a className="link" href="#iletişim">iletişime geçin</a>. {text} marka aracınızın yedek parçalarına göz atmak için <Link href={`/parcalar?marka=${text}`}><a className="link">buraya tıklayın</a></Link>. Yedek parçaları Antalya Kepez'den kendiniz teslim alabileceğiniz gibi tüm şehirlerimize kargo ile de teslim ediyoruz.
		</>
	),
	BRAND_DESCRIPTION_PLAIN_TEXT: (text) => (
		`İkinci el ${text} marka aracınızı satmak veya başka bir araç almak için bizimle iletişime geçin. ${text} marka aracınızın yedek parçalarına göz atmak için sitemizi ziyaret edin. Yedek parçaları Antalya Kepez'den kendiniz teslim alabileceğiniz gibi tüm şehirlerimize kargo ile de teslim ediyoruz.`
	)
}