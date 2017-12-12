const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain
const Menu = electron.Menu
var fs = require('fs');

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        height: 600,
        width: 475
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu)

    mainWindow.on('closed', function () {
        console.log('closed');
        mainWindow = null
    })
})
const template = [
    {
        label: "File",
        submenu: [
            {
                label: "Open",
                
                }
        ]
    },
        {
            label: "Edit",
            submenu: [
                {
                    label: "Add",
                },
                {type: 'separator'},
                {
                    label: "Save",
                },
                {type: 'separator'},
                {
                    label: "Clear List"
                }
            ]
        },
        
            {
                label: "Toggle Dev Tools",
                click: function(item, focusedWindow){
                    focusedWindow.toggleDevTools()
                },
                accelerator: 'Ctrl+I'
            },
            {
                label: "Quit",
                click: _=>{
                    app.quit()
                },
                accelerator: 'Ctrl+Q'
            },
        ]
