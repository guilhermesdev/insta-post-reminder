import Notifier from "./Notifier.js";
import Timer from "./Timer.js";
import Emitter from "./Emitter.js";

const notify = Notifier.notify({
	title: 'Hora de postar',
	body: 'Crie conteúdo para ajudar a comunidade'
});

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