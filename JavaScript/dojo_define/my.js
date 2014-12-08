/**
 * Created by GZR on 2014/12/8.
 */
define(['dojo/dom'],function(dom){
    var oldText={};
    return {
        settext:function(id,text){
        var node=dom.byId(id);
            oldText[id]=node.innerHTML;
            node.innerHTML=text;
    },
        restorText:function(id){
            var node=dom.byId(id);
            node.innerHTML=oldText[id];
            delete oldText[id];
        }
    }
});