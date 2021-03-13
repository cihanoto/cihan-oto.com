export const PARTS = [
	{ text: "Bagaj" },
	{ text: "Cam" },
	{ text: "Çamurluk" },
	{ text: "Diferansiyel" },
	{ text: "Dinamo" },
	{ text: "Döşeme" },
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
		url: `/parcalar/${i + 1}`,
		//url: encodeURI(`/parcalar/${part.text.toLowerCase()}-araç-yedek-parçası-ucuz`)
	}
})