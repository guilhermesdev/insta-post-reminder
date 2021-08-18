import Emitter from "./Emitter.js";
import View from "./View.js";

View.render();

const Timer = {
	initialTime: 0,
	currentTime: 0,
	interval: null,
	timeToMinutes(time = Timer.currentTime) {
		return Math.floor(time / 60).toString().padStart(2, 0);
	},
	timeToSeconds(time = Timer.currentTime) {
		return Math.floor(time % 60).toString().padStart(2, '0');
	},
	init(time = 60 * 60){
		Emitter.emit('countdown-start');

		Timer.initialTime = time;
		Timer.currentTime = Timer.initialTime;
		Timer.interval = setInterval(Timer.countdown, 1000);
	},
	countdown(){
		Timer.currentTime--;
		
		const minutes = Timer.timeToMinutes();
		const seconds = Timer.timeToSeconds();

		View.render({ minutes, seconds });
		
		if (Timer.currentTime === 0){
			clearInterval(Timer.interval);
			Emitter.emit('countdown-end');
			return;
		}
	}
};

export default Timer;