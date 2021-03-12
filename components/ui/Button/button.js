import cn from "classnames"
import styles from "./button.module.css"

function Button({ children, size, props }) {
	return (
		<button className={cn(styles.button, styles[size])} {...props}>
			{children}
		</button>
	)
}

export default Button