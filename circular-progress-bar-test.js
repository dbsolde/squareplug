function getScripts(scripts) {
    var prArr = [];
    scripts.forEach(function(script) { 
        (function(script){
            prArr .push(new Promise(function(resolve){
                $.getScript(script, function () {
                    resolve();
                });
            }));
        })(script);
    });
    return Promise.all(prArr, function(){
        return true;
    });
}
