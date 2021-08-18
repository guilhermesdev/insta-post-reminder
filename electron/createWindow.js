const { BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
		show: false,
		frame: false,
		resizable: false,
		movable: false,
		fullscreenable: false
  });

	win.on('blur', win.hide);

  win.loadFile('index.html');

	return win;
}

module.exports = createWindow();