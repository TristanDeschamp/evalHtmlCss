// Afficher le loader lors du chargement de page
window.addEventListener('beforeunload', function() {
	this.document.getElementById('loader').style.display = 'flex';
});

// Masque le loader après un certain temps
window.addEventListener('load', function() {
	setTimeout(function() {
		document.getElementById('loader').style.display = 'none';
	}, 1000);
});

