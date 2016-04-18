uvis.fileProvider = function (filename) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(filename === 'initial.vism') {
                resolve(vismfile);
            } else if(filename === 'initial.vis') {
                resolve(visfile);
            } else {
                reject("file " + filename + " not found!");
            }
        }, 500);
    });
});