import Notifier from "./Notifier.js";

const App = {
	async start(){
		try {
			await Notifier.init();
			Notifier.notify({
				title: 'Hora de postar',
				body: 'Crie conteúdo para ajudar a comunidade'
			});
		} catch (error) {
			console.error(error.message);
		}
	}
}

export default App;