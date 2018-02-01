function Tool(){

};

Tool.prototype = {
    toObject:function(val){
        if(val == null){
            throw new TypeError('Object.assign cannot be called with null or undefined');
        };
        return Object(val);
    }
};


var result = new Tool();


export default result;