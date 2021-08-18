import Notifier from "./Notifier.js";
import Timer from "./Timer.js";
import Emitter from "./Emitter.js";

import { getRandomMessage, removeFromMessagesAvailable } from './notificationMessages.js';

const notify = () => {
	const message = getRandomMessage();
	removeFromMessagesAvailable(message);
	const sendNotication = Notifier.notify(message);
	sendNotication();
}

const App = {
	async start(){
		const time = 5 * 60;

		try {
			await Notifier.init();

			Emitter.on('countdown-start', notify);

			Emitter.on('countdown-end', () => Timer.init(time));

			Timer.init(time);
		} catch (error) {
			console.error(error.message);
		}
	}
};

export default App;