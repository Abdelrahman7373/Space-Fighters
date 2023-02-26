const electron =require('electron');
const{app,BrowserWindow}=electron;
const url = require('url');
const path = require('path')


var isDev = process.env.APP_DEV ? (process.env.APP_DEV.trim() == "true") : false;

if (isDev){
require('electron-reload')(__dirname,{
    electron:path.join(__dirname,'node_modules','.bin','electron')
  });
}
let gameWindow=null;

function createGameWindow(){
    gameWindow = new BrowserWindow({
        width:530,
        height:600,
        center:true,
        alwaysOnTop:true,
        autoHideMenuBar:true,
        icon: "290836.ico",
        webPreferences: {
            devTools: false
            }
    });



    gameWindow.loadURL(url.format(path.join(__dirname,'index.html')));

    gameWindow.on('closed',()=>{
        gameWindow=null;
    });
    autoUpdater.checkForUpdates();
}

app.whenReady().then(createGameWindow);