const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // 기존 loadFile('index.html') -> 변경
    mainWindow.loadFile('public/index.html'); // 빌드된 Svelte 파일 로드
});
