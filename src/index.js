/*
* vue-randomcolor
* 
* Author: Alexander Becker
*/

const randomColor = require('randomcolor');

export default {
	install(Vue) {

		Object.defineProperties(Vue.prototype, {

			$randomColor: {
				get() {
					return randomColor;
				}
			},
			
		});

	}
}