var _write = $('#write'), shift = false, capslock = false;
number = false;
var keyboard = $('#keyboard');
$(function(){
	// var $this_span = $('#keyboard span');	
	$('#keyboard li').click(function(){
		var $this = $(this)
		if($this.hasClass('symbol')){			
			character = $('span:visible', $this).html();
			console.log('chrk :'+character)
		}else{
			character = $this.html();
			console.log('chrk :'+character)
		}		
				
		
		// Shift keys
		if ($this.hasClass('left-shift')){
			$('.letter').toggleClass('uppercase');
			$('.symbol span').toggle();
			
			shift = (shift === true) ? false : true;
			capslock = false;
			return false;
		}

		// Shift numbers
		if ($this.hasClass('shift-number')) {
			$('.symbol span').toggle();
		}	

		// Caps lock		
		
		if ($this.hasClass('capslock')) {
			$('.letter').toggleClass('uppercase');
			capslock = true;
			return false;
		}	
		
		// Delete
		if ($this.hasClass('delete')) {
			var html = _write.html();
			// console.log("html: "+html)			
			_write.html(html.substr(0, html.length - 1));
			return false;
		}		
		// Special characters
		if ($this.hasClass('symbol ')) character = $('span:visible', $this).html();
		if ($this.hasClass('space')) character = ' ';
		if ($this.hasClass('tab')) character = "\t";		
		
		// Uppercase letter
		if ($this.hasClass('uppercase')) character = character.toUpperCase();
		
		// Remove shift once a key is clicked.
		if (shift === true) {
			$('.symbol span').toggle();
			if (capslock === false) $('.letter').toggleClass('uppercase');
			
			shift = false;
		}
		
		// Add the character
		// _write.html(_write.html() + character);
		_write.text(_write.text() + character);
		
	});	
	
});