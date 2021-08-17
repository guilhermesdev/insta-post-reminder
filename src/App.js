import Notifier from "./Notifier.js";
import Timer from "./Timer.js";

const App = {
	async start(){
		try {
			const time = 5;
			Timer.init(time);
			await Notifier.init();
			// Notifier.notify({
			// 	title: 'Hora de postar',
			// 	body: 'Crie conteúdo para ajudar a comunidade'
			// });
		} catch (error) {
			console.error(error.message);
		}
	}
};

export default App;