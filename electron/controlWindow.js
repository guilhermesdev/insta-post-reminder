const { screen } = require('electron');

function controlWindow(win, tray){
	function toggle(){
		if (win.isVisible()){
			win.hide();
		} else {
			show();
		}
	}

	function show(){
		const { x, y } = getPosition();

		win.setPosition(x, y, false);

		win.show();
		win.focus();
	}

	function getPosition(){
		if (process.platform !== 'linux') {
			const { width: winWidth } = win.getBounds();
			const {
				x: trayX,
				y: trayY,
				height: trayHeight,
				width: trayWidth
			} = tray.getBounds();

			const x = Math.round(trayX + (trayWidth / 2) - (winWidth / 2));
			const y = Math.round(trayY + trayHeight + 3);
	
			return { x, y };
		} else {
			const winBounds = win.getBounds();
			const { y, x: screenX } = screen.getCursorScreenPoint();
			
			const x = screenX - (winBounds.width / 2);
	
			return { x, y };
		}
	}

	return { toggle };
}

module.exports = controlWindow;