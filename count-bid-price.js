var bidCounter = { 
	divs 		: document.getElementsByClassName('g-asmG'),
	getTotal 	: function () {
		var total = 0;
		
		for (var i = 0; i < this.divs.length; i++) { 
			total += parseInt(this.divs[i].innerHTML.substr(1)); 
		}
		
		return total;
	},
	displayTotal : function () {
		alert('£' + this.getTotal());
	}
};

bidCounter.displayTotal();