//Temperature
var f = document.getElementById('faren');
var c = document.getElementById('cel');

f.addEventListener('input', convertFah);
c.addEventListener('input', convertCel);

function convertFah() {
	if (isNaN(f.value) === false && f.value !== '') {
		c.value = Math.round(5/9 * (f.value - 32));
	}
}

function convertCel() {
	if (isNaN(c.value) === false && c.value !== '') {
		f.value = Math.round(9/5 * c.value + 32);
	}
}

//Length
var mi = document.getElementById('mi');
var km = document.getElementById('km');

mi.addEventListener('input', convertMiles);
km.addEventListener('input', convertKm);

function convertMiles() {
	if (isNaN(mi.value) === false && mi.value !== '') {
		km.value = 1.60934 * mi.value;
	}
}

function convertKm() {
	if (isNaN(km.value) === false && km.value !== '') {
		mi.value = 0.621371 * km.value;
	}
}

//Mass
var lb = document.getElementById('lb');
var kg = document.getElementById('kg');

lb.addEventListener('input', convertPounds);
kg.addEventListener('input', convertKilos);

function convertPounds() {
	if (isNaN(lb.value) === false && lb.value !== '') {
		kg.value = 0.453592 * lb.value;
	}
}

function convertKilos() {
	if (isNaN(kg.value) === false && kg.value !== '') {
		lb.value = 2.20462 * kg.value;
	}
}