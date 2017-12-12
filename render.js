var app = require('electron').remote
var dialog = app.dialog
var fs = require('fs')

let content = "Some text to save into the file";

// You can obviously give a direct path without use the dialog (C:/Program Files/path/myfileexample.txt)
dialog.showSaveDialog((fileName) => {
    if (fileName === undefined){
        console.log("You didn't save the file");
        return;
    }

    // fileName is a string that contains the path and filename created in the save file dialog.  
    fs.writeFile(fileName, content, (err) => {
        if(err){
            alert("An error ocurred creating the file "+ err.message)
        }
                    
        alert("The file has been succesfully saved");
    });
}); 

dialog.showOpenDialog((fileNames) => {
    // fileNames is an array that contains all the selected
    if(fileNames === undefined){
        console.log("No file selected");
        return;
    }

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if(err){
            alert("An error ocurred reading the file :" + err.message);
            return;
        }

        // Change how to handle the file content
        console.log("The file content is : " + data);
    });
});
 

// Note that the previous example will handle only 1 file, if you want that the dialog accepts multiple files, then change the settings:
// And obviously , loop through the fileNames and read every file manually
dialog.showOpenDialog({ 
    properties: [ 
        'openFile', 'multiSelections', (fileNames) => {
            console.log(fileNames);
        }
    ]
});

var filepath = "C:/Previous-filepath/existinfile.txt";// you need to save the filepath when you open the file to update without use the filechooser dialog againg
var content = "This is the new content of the file";

fs.writeFile(filepath, content, (err) => {
    if (err) {
        alert("An error ocurred updating the file" + err.message);
        console.log(err);
        return;
    }

    alert("The file has been succesfully saved");
});

var filepath = "C:/Path-toFile/file.txt";// Previously saved path somewhere

if (fs.existsSync(filepath)) {
    fs.unlink(filepath, (err) => {
        if (err) {
            alert("An error ocurred updating the file" + err.message);
            console.log(err);
            return;
        }
        console.log("File succesfully deleted");
    });
} else {
    alert("This file doesn't exist, cannot delete");
}

dialog.showOpenDialog({
    title:"Select a folder",
    properties: ["openDirectory"]
}, (folderPaths) => {
    // folderPaths is an array that contains all the selected paths
    if(fileNames === undefined){
        console.log("No destination folder selected");
        return;
    }else{
        console.log(folderPaths);
    }
});