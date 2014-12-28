/**
 * Created by GZR on 2014/12/15.
 */
define(['dojo/dom',
        'dojo/dom-construct',
        'dojo/on'],
    function(dom,domConstruct,on){
        return{
            setText:function(id,text){
                var node= dom.byId(id);
                node.innerHTML+=text;
            },
            setClass:function(id,className){
                var node=dom.byId(id);

            }
        }


});