const Emitter = {
	events: {},
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

export default Emitter;