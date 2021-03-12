import { CONTACTS } from "../../constants/contacts"
import styles from "../../styles/home.module.css"

function Contact() {
	return (
		<div id="iletişim">
			<h2>İletişim</h2>
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
					{
						CONTACTS.map((contact, i) => (
							<div key={i}>
								{contact.name}:&nbsp;
								<a className="link"
									href="tel:{contact.phone}"
								>{contact.phoneDisplay}</a>
							</div>
						))
					}

					<br /><label>WhatsApp</label><br />
					{
						CONTACTS.map((contact, i) => (
							<a key={i}
								className="link"
								target="_blank"
								href={`https://wa.me/${contact.phone}`}
							>{contact.name}</a>
						)).reduce((prev, curr) => [prev, ", ", curr])
					}
				</address>
			</div>
		</div >
	)
}

export default Contact