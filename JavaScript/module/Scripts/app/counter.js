define(function () {
    var privateValue = 0;
    return {
        //increment为函数，供index.html中require中应用模块调用 ，本程序中是counter.increment();
        increment: function () {
            privateValue++;
        },

        decrement: function () {
            privateValue--;
            console.log("自减1");
        },

        getValue: function () {
            return privateValue;
        }
    };
});