const View = {
	render({ minutes, seconds } = {}){
		document.querySelector('#app').innerHTML = `
			<p>Próximo post em</p>
			<span>${minutes || '--'}:${seconds || '--'}</span>
		`;
	}
};

export default View;