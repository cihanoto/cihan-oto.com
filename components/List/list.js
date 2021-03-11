import styles from "./list.module.css"

const list = [
	{
		text: "Fiat",
		url: "https://sahibinden.com/",
		image: "/public/images/fiat.png"
	},
	{
		text: "Mercedes",
		url: "https://sahibinden.com/",
		image: "/public/images/fiat.png"
	},
	{
		text: "Renault",
		url: "https://sahibinden.com/",
		image: "/public/images/fiat.png"
	},
	{
		text: "Vokswagen",
		url: "https://sahibinden.com/",
		image: "/public/images/fiat.png"
	},
	{
		text: "Tesla",
		url: "https://sahibinden.com/",
		image: "/public/images/fiat.png"
	}
]

function List({ list }) {
	return (
		<ul className={styles.list}>
			{list.map((item) =>
				<ul className={styles.itemWrapper}>
					<a
						href={item.url}
						className={styles.item}
					>
						{item?.image}
						{item.text}
					</a>
				</ul>)}
		</ul>
	)
}

export default List