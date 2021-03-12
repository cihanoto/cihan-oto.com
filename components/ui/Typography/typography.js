import cn from "classnames"
import styles from "./typography.module.css"

export const H1 = ({ children, props }) => {
	return (
		<h1 className={cn(styles.closeButton)} {...props}>
			{children}
		</h1>
	)
}