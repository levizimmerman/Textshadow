var values = {},
	s,
	m,
	b,
	d,
	shadow = [];

var textShadow = {

	init: function(){

		var input = $('form#text_shadow input');
			size = input.length - 1,
			self = this;

		input.each(function(index){
			var val = this.value,
				name = $(this).attr('name');

				values[name] = val;

				if(index == size){
					self.getValue(values);	
				}
		});

	},
	getValue: function(v){

		var self = this;

		if(v.darkness && v.reach && v.blur && v.density){
			self.applyShadow(v.darkness, v.reach, v.blur, v.density);
		}

	},
	applyShadow : function(s, m, b, d){

		var a = $('#apply_shadow'),
			i = 1,
			p = s / m,
			d = parseInt(d);

		if(a){
			
			shadow = [];

			while (i < m){

				t = s - (i * p);

				shadow.push(i+'px '+i+'px '+b+'px rgba(0,0,0,'+t+')'); 				

				i = i + d;

			}
		}

		var totalShadow = shadow.join(', ');
		
		a.css({
			textShadow : totalShadow
		});

	}
}

textShadow.init();