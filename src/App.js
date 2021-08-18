import Notifier from "./Notifier.js";
import Timer from "./Timer.js";
import Emitter from "./Emitter.js";

import { getRandomMessage } from './notificationMessages.js';

const App = {
	async start(){
		const time = 5 * 60;

		try {
			await Notifier.init();

			Emitter.on('countdown-start', () => {
				const message = getRandomMessage();
				Notifier.notify(message);
			});
			Emitter.on('countdown-end', () => Timer.init(time));

			Timer.init(time);
		} catch (error) {
			console.error(error.message);
		}
	}
};

export default App;