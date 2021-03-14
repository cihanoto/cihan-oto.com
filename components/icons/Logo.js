import * as React from "react"

function SvgLogo(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 480 480"
			{...props}
		>
			<defs>
				<style>
					{
						".logo_svg__cls-2{fill:none;stroke:#000;stroke-width:36px}"
					}
				</style>
			</defs>
			<g id="logo_svg__Artboard_1" data-name="Artboard 1">
				<rect
					width={480}
					height={480}
					rx={96}
					ry={96}
					fill="currentColor"
				/>
				<circle className="logo_svg__cls-2" cx={240} cy={240} r={193} />
				<path
					d="M240 240L409.706 70.294 579.411 240l-169.7 169.706z"
					fillRule="evenodd"
					fill="currentColor"
				/>
				<circle className="logo_svg__cls-2" cx={240} cy={240} r={119} />
			</g>
		</svg>
	)
}

export default SvgLogo
