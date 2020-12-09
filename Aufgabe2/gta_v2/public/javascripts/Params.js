var Params = {

    Param : {
        min : 1,
        max : 4,
        doubleOfBoth : 100,
    },

    getParams : function(){

        var s = "min " + this.Param.min + '\n';
        s += "max " + this.Param.max + '\n';
        s += "double of both " + this.Param.doubleOfBoth + '\n';
        return s;
    }
};

console.log(Params.Param.min);
console.log(Params.getParams());