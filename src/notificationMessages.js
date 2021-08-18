import getRandomInt from "./utils/getRandomInt.js";

const messages = [
	{
		title: 'Hora de postar!',
		body: 'Crie conteúdo para ajudar a comunidade'
	},
	{
		title: 'Hora de postar!',
		body: 'Poste uma frase que possa motivar outras pessoas'
	},
	{
		title: 'Hora de postar!',
		body: 'Poste uma dica sobre uma ferramenta que te ajuda no trabalho'
	},
	{
		title: 'Hora de postar!',
		body: 'Ensine algo que você aprendeu recentemente'
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
	},
	{
		title: 'Pesquisa de campo',
		body: 'Estude o conteúdo de outros perfis'
	}
];

let messagesAvailable = [...messages];

const removeFromMessagesAvailable = messageToRemove => {
	messagesAvailable = messagesAvailable
		.filter(message => message !== messageToRemove);
};


const getRandomMessage = () => {
	if (!messagesAvailable.length){
		messagesAvailable = messages;
	}

	console.log(messagesAvailable);

	return messagesAvailable[getRandomInt(0, messagesAvailable.length - 1)];
};

export { getRandomMessage, removeFromMessagesAvailable };