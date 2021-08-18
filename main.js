const { app, BrowserWindow } = require('electron');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
		frame: process.platform === 'linux',
		resizable: false,
		movable: true,
		fullscreenable: false
  });

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});