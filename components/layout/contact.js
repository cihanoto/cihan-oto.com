import { CONSTANTS } from "../../constants"
import { CONTACTS } from "../../constants/contacts"
import styles from "../../styles/home.module.css"

function Contact() {
	return (
		<div id="iletişim">
			<h2>İletişim</h2>
			<div className={styles.contact}>
				<address>
					<label>Adres</label><br />
					{CONSTANTS.address}
					<br />
					<a href={`https://maps.google.com/?q=${encodeURI(CONSTANTS.address)}`}
						target="_blank"
						className="link"
					>Google Maps'te görüntüleyin</a>
					<br /><br /><label>Telefon</label>
					{
						CONTACTS.map((contact, i) => (
							<div key={i}>
								{contact.name}:&nbsp;
								<a className="link"
									href={`tel:${contact.phone}`}
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