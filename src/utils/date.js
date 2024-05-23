const weekdays = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']

// Den här funktionen är beroende av JavaScripts Date-modul och är svår att testa separat. Du behöver inte skriva enhetstest för den.
function getToday() {
	return weekdays[new Date().getDay()]
}

export { getToday }
