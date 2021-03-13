export const BRANDS = [
	{
		text: "BMW",
		image: "/public/images/bmw.png"
	},
	{
		text: "Citroën",
		image: "/public/images/citroen.png"
	},
	{
		text: "Fiat",
		image: "/public/images/fiat.png"
	},
	{
		text: "Ford",
		image: "/public/images/ford.png"
	},
	{
		text: "Hyundai",
		image: "/public/images/hyundai.png"
	},
	{
		text: "Land Rover",
		image: "/public/images/land-rover.png"
	},
	{
		text: "Mazda",
		image: "/public/images/mazda.png"
	},
	{
		text: "Mercedes",
		image: "/public/images/fiat.png"
	},
	{
		text: "Mitsubishi",
		image: "/public/images/mitsubishi.png"
	},
	{
		text: "Opel",
		image: "/public/images/opel.png"
	},
	{
		text: "Peugeot",
		image: "/public/images/peugeot.png"
	},
	{
		text: "Renault",
		image: "/public/images/fiat.png"
	},
	{
		text: "Škoda",
		image: "/public/images/skoda.png"
	},
	{
		text: "Vokswagen",
		image: "/public/images/fiat.png"
	},
	{
		text: "Tofaş",
		image: "/public/images/tofas.png"
	},
	{
		text: "Toyota",
		image: "/public/images/toyota.png"
	}
].map((part, i) => {
	return {
		...part,
		id: i + 1,
		url: `/markalar/${i + 1}`
	}
})