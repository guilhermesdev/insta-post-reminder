const { app } = require('electron');

const controlWindow = require('./controlWindow');

function App(){
  const win = require('./createWindow.js');
  const tray = require('./Tray.js');

  const { toggle } = controlWindow(win, tray);

  tray.on('click', toggle);
}

app.whenReady().then(App);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.dock?.hide();
