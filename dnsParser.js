

var fs = require('fs');

exports.parse = function(){

    var hostMap = {};

    try {
        var contents = fs.readFileSync('./hosts').toString();
    } catch (e) {
        throw e;
    }

    var lines = contents.split('\n');

    lines.forEach(function(v){
        var res = /^([^ #]+) +([^ ]+)/.exec(v.trim());

        if (res != null) {
            hostMap[res[2]] = res[1];
        }
    });

    console.log(hostMap);

    return hostMap;
};

//exports.parse();