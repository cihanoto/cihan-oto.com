import { useEffect, useState } from "react"
import cn from "classnames"
import FocusTrap from "focus-trap-react"
import noScroll from "no-scroll"
import { CloseCircle, CloseCircleOutline } from "../../icons"
import styles from "./modal.module.css"

const CloseButton = ({ onClick, props }) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<button
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			className={cn(styles.closeButton)}
			onClick={onClick || undefined}
			{...props}>
			{isHovered
				? <CloseCircle />
				: <CloseCircleOutline />
			}
		</button>
	)
}

function Modal({ children, visibility = false, ...props }) {
	const [vb, setVb] = useState(visibility)

	useEffect(() => {
		if (vb) {
			noScroll.on()
		} else {
			noScroll.off()
		}
	}, [vb])

	return (
		<div className={cn(
			styles.wrapper,
			props.className, vb || styles.hide
		)} {...props}>
			{vb && <FocusTrap>
				<div className={styles.modal}>
					<CloseButton onClick={() => setVb(false)} />
					{children}
				</div>
			</FocusTrap>}
		</div>
	)
}

export default Modal