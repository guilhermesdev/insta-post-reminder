import getRandomInt from "./utils/getRandomInt.js";

const messages = [
	{
		title: 'Hora de postar!',
		body: 'Crie conteúdo para ajudar a comunidade'
	},
	{
		title: 'Hora da organização!',
		body: 'Que tal dar uma organizada no seu perfil?'
	},
	{
		title: 'Dados são importantes',
		body: 'Analise os dados da sua conta'
	},
	{
		title: 'Hora de se comunicar!',
		body: 'Que tal gravar uns stories repondendo perguntas?'
	}
];

const getRandomMessage = () => {
	return messages[getRandomInt(0, messages.length - 1)];
};

export { getRandomMessage };