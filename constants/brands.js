export const BRANDS = [
	{ text: "BMW" },
	{ text: "Citroën" },
	{ text: "Dacia" },
	{ text: "Fiat" },
	{ text: "Ford" },
	{ text: "Honda" },
	{ text: "Hyundai" },
	{ text: "Land Rover" },
	{ text: "Mazda" },
	{ text: "Mercedes" },
	{ text: "Mitsubishi" },
	{ text: "Opel" },
	{ text: "Peugeot" },
	{ text: "Renault" },
	{ text: "Škoda" },
	{ text: "Vokswagen" },
	{ text: "Tofaş" },
	{ text: "Toyota" }
].map((part, i) => {
	return {
		...part,
		id: i + 1,
		url: `/markalar/${i + 1}`
	}
})