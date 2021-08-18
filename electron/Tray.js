const { Tray } = require('electron');
const { resolve } = require('path');

const iconPath = resolve(__dirname, '..', 'assets', 'instagram-icon.png');

function createTray(){
	const tray = new Tray(iconPath);
	tray.setToolTip('Insta Post Reminder');

	return tray;
}

module.exports = createTray();