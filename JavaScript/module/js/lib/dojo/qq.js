/**
 * Created by GZR on 2014/12/15.
 */
define(['query','on'],function(query,on){
    return {
        flashHeaderOnClick:function(buttonID){
            on(buttonID,"click",function(){
                query(buttonID).style('color','red');
            });
        }
    }
})