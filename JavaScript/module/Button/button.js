define([
    //引入命名空间（类型java引入类，该路径是相对顶级dojo目录）
    "../js/lib/dojo/_base/declare",//          示例是这样的../js/lib/dojo/_base/declare
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin"
],function(declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin){
    return declare('Button/button',[_WidgetBase, _OnDijitClickMixin, _TemplatedMixin], {
        //模板
        templateString: '<div class="${baseClass}"><div class="${baseClass}Title" data-dojo-attach-point="titleNode" data-dojo-attach-event="ondijitclick:_onClick"></div><div>And our container:</div><div class="${baseClass}Container" data-dojo-attach-point="containerNode"></div></div>',
        //属性
        baseClass: "someWidget",
        title: "222",
        //隐藏计数器
        _counter: 1,
        _firstClicked: false,
        //重写_onClick
        _onClick: function(){
            if(this._firstClicked){
                this.titleNode.innerHTML = this.title + " was clicked " + (++this._counter) + " times.";
            } else {
                this.titleNode.innerHTML = this.title + " was clicked!";
                this._firstClicked = true;
            }
        },
        //父类初始化函数
        postCreate: function(){
            this.titleNode.innerHTML = this.title;
            console.log("日志信息demo");
            console.debug("调试信息demo");
            console.info("信息demo");
            console.warn("警告信息demo");
            console.error("错误信息demo");
        },
        //函数测试
        demoFunction:function(){
            console.log("执行demoFunciton");
        }
    });
});/**
 * Created by GZR on 2014/12/19.
 */
