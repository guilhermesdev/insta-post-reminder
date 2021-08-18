const Emitter = {
	events: {
		// click(){
		// 	console.log('Cliquei');
		// }
	},
	on(event, callback){
		Emitter.events[event] = Emitter.events[event] || [];
		Emitter.events[event].push(callback);
	},
	emit(event, ...rest){
		if (!(event in Emitter.events)) {
			return console.error(`Event '${event}' is not defined`);
		}

		Emitter.events[event].forEach(callback => {
			callback(...rest);
		});
	}
};

Emitter.on('click', () => console.log('Cliquei'));
Emitter.on('click', () => console.log('Cliquei de novo'));
Emitter.on('click', () => console.log('Terceiro clique'));

Emitter.emit('click');

export default Emitter;