import cn from "classnames"
import styles from "./button.module.css"

function Button({ children, size, href, props }) {
	const commonProps = {
		className: cn(styles.button, styles[size]),
		children: children,
		props: props
	}

	return (href
		? <a href={href} {...commonProps} />
		: <button {...commonProps} />
	)
}

export default Button