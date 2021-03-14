export const PARTS = [
	{ text: "Akü" },
	{ text: "Bagaj" },
	{ text: "Cam" },
	{ text: "Çamurluk" },
	{ text: "Diferansiyel" },
	{ text: "Dinamo" },
	{ text: "Döşeme" },
	{ text: "Elektrik Aksamı" },
	{ text: "Hava Kompresörü" },
	{ text: "Jant" },
	{ text: "Kaput" },
	{ text: "Kapı" },
	{ text: "Koltuk" },
	{ text: "Kaporta" },
	{ text: "Lastik" },
	{ text: "Mekanik" },
	{ text: "Motor" },
	{ text: "Şanzıman" },
	{ text: "Tesisat" },
].map((part, i) => {
	return {
		...part,
		id: i + 1,
		url: `parcalar/${i + 1}`,
		//url: `parcalar/${part.text.toLowerCase()}-${i + 1}`.replace(" ", "-")
	}
})