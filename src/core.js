/**
 * 核心模块
 * 功能：
 * 
 * */


import tool from './tool';
function Core() {

}

Core.prototype = {
    extend: function (target, source) {
        if (Object.assign) {
            return Object.assign(target, source);
        } else {
            var from,keys,to=tool.toObject(target);
            for(var s=1;s<arguments.length;s++){
                form=arguments[s];
                keys=Object.keys(Object(from));
                for(var i=0;i<keys.length;i++){
                    to[keys[i]] = from[keys[i]];
                }
            }
            return to;
        }
    }
}



var result = new Core();


export default result;
