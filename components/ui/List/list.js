import styles from "./list.module.css"

function List({ list }) {
	return (
		<ul className={styles.list}>
			{list.map((item, i) =>
				<li className={styles.itemWrapper} key={i}>
					<a
						href={item.url}
						className={styles.item}
					>
						{/* {item?.image} */}
						{item.text}
					</a>
				</li>)}
		</ul>
	)
}

export default List