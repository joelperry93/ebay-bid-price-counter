var bidCounter = { 
	total 		: 0,
	divs 		: document.getElementsByClassName('g-asmG'),
	calculate 	: function () {
		for (var i = 0; i < this.divs.length; i++) { 
			this.total += parseInt(this.divs[i].innerHTML.substr(1)); 
		}
		
		return this.total;
	}
};

console.log('£' + bidCounter.calculate());
