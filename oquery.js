Array.prototype.where = function(exp){
    var exp = new Function("$", "return " + exp);
    var arr=[];
    for(var i=0; i<=this.length-1; i++){
        if(exp(this[i])){
            arr.push(this[i])
        }
    }
    return arr;
};

Array.prototype.collect = function(exp){
    var exp = new Function("$", "return " + exp);
    var arr=[];
    for(var i=0; i<=this.length-1; i++){
        arr.push(exp(this[i]))
    }
    return arr;
};
Array.prototype.join = function(arr){
    this.joined_data = arr;
    return this;
};

Array.prototype.as = function(key,exp){
    var exp = new Function("$",key, "return " + exp);
    var arr=[];
    
    for(var i=0; i<=this.length-1; i++){
        for(var j=0; j<=this.joined_data.length-1; j++){
            if(exp(this[i], this.joined_data[j])){
                var obj = {};
                for(var k in this[i]) {
                    if((this[i]).hasOwnProperty(k)) {
                        obj[k] = this[i][k]
                    }
                }
                obj[key] = this.joined_data[j];
                arr.push(obj)
                //this[i][key]=this.joined_data[j];
            }
        }
    }
    return arr;
};