(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,r){e.exports=r(32)},24:function(e,t,r){},30:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),u=r(12),l=r.n(u),o=(r(24),r(13)),i=r(14),c=r(17),p=r(15),s=r(18),m=r(4),b=r(6),v=function(e){return a.a.createElement("button",{onClick:e.onClick,className:e.style},e.value)};var f=function(e){var t=Number(e.displayValue);return a.a.createElement("div",{className:"display"},t)},y=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(c.a)(this,Object(p.a)(t).call(this,e))).onClick=r.onClick.bind(Object(m.a)(Object(m.a)(r))),r}return Object(s.a)(t,e),Object(i.a)(t,[{key:"onClick",value:function(e){this.props.setDisplay(e)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"app-body"},a.a.createElement("div",null,a.a.createElement("div",{className:"calculator-title"},a.a.createElement("h1",null,"ekino.")),a.a.createElement("div",{className:"calculator-subtitle"},a.a.createElement("h2",null,"Basic Calculator")),a.a.createElement(f,{displayValue:this.props.displayValue}),a.a.createElement("div",{className:"button-container"},a.a.createElement("div",{className:"button-row"},a.a.createElement(v,{value:"7",style:"number",onClick:function(){return e.props.inputNumber("7")}}),a.a.createElement(v,{value:"8",style:"number",onClick:function(){return e.props.inputNumber("8")}}),a.a.createElement(v,{value:"9",style:"number",onClick:function(){return e.props.inputNumber("9")}}),a.a.createElement(v,{value:"+",style:"operator",onClick:function(){return e.props.inputOperator("+")}})),a.a.createElement("div",{className:"button-row"},a.a.createElement(v,{value:"4",style:"number",onClick:function(){return e.props.inputNumber("4")}}),a.a.createElement(v,{value:"5",style:"number",onClick:function(){return e.props.inputNumber("5")}}),a.a.createElement(v,{value:"6",style:"number",onClick:function(){return e.props.inputNumber("6")}}),a.a.createElement(v,{value:"-",style:"operator",onClick:function(){return e.props.inputOperator("-")}})),a.a.createElement("div",{className:"button-row"},a.a.createElement(v,{value:"1",style:"number",onClick:function(){return e.props.inputNumber("1")}}),a.a.createElement(v,{value:"2",style:"number",onClick:function(){return e.props.inputNumber("2")}}),a.a.createElement(v,{value:"3",style:"number",onClick:function(){return e.props.inputNumber("3")}}),a.a.createElement(v,{value:"/",style:"operator",onClick:function(){return e.props.inputOperator("/")}})),a.a.createElement("div",{className:"button-row"},a.a.createElement(v,{value:"0",style:"number",onClick:function(){return e.props.inputNumber("0")}}),a.a.createElement(v,{value:".",style:"number",onClick:function(){return e.props.inputNumber(".")}}),a.a.createElement(v,{value:"=",style:"equals",onClick:function(){return e.props.inputOperator("=")}}),a.a.createElement(v,{value:"*",style:"operator",onClick:function(){return e.props.inputOperator("*")}})),a.a.createElement("div",{className:"button-full-row"},a.a.createElement(v,{value:"CLEAR",style:"clear",onClick:this.props.clear})))))}}]),t}(n.Component),E=Object(b.b)(function(e){return{displayValue:e.displayValue}},{clear:function(){return{type:"CLEAR"}},inputNumber:function(e){return{type:"INPUT_NUMBER",number:e}},inputOperator:function(e){return{type:"INPUT_OPERATOR",operator:e}}})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=r(5),d=r(1),V={currentValue:0,inputValue:0,displayValue:0,operator:null,history:{inputValue:null,operator:null}},C={"+":function(e,t){return Number(e)+Number(t)},"-":function(e,t){return Number(e)-Number(t)},"*":function(e,t){return Number(e)*Number(t)},"/":function(e,t){return Number(e)/Number(t)},"=":function(e,t){return Number(e)}},O=Object(N.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR":return Object(d.a)({},V);case"INPUT_NUMBER":var r;if(r=0===e.inputValue?function(e,t){switch(t){case".":return"0.";case"0":return""+e;default:return""+t}}(e.inputValue,t.number):function(e,t){var r;if("."===t){var n=""+e;r=n.match(/\./)?n.match(/^./)?".":n:n+t}else r=e+t;return r}(e.inputValue,t.number),null!==e.operator&&0===e.currentValue){var n="."===t.number?"0.":t.number;return Object(d.a)({},e,{currentValue:e.inputValue,inputValue:n,displayValue:n})}return Object(d.a)({},e,{inputValue:r,displayValue:r});case"INPUT_OPERATOR":var a;if(null===e.operator)return"="===t.operator&&e.history.operator?(a=C[e.history.operator](e.currentValue,e.history.inputValue),Object(d.a)({},e,{currentValue:a,inputValue:0,displayValue:a})):0===e.inputValue?Object(d.a)({},e,{currentValue:0,inputValue:e.currentValue,operator:t.operator}):Object(d.a)({},e,{currentValue:e.inputValue,inputValue:0,operator:t.operator});a=C[e.operator](e.currentValue,e.inputValue);var u="="===t.operator?null:t.operator;return Object(d.a)({},e,{currentValue:a,inputValue:0,displayValue:a,operator:u,history:Object(d.a)({},e.history,{inputValue:e.inputValue,operator:e.operator})});default:return e}});r(30);l.a.render(a.a.createElement(b.a,{store:O},a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.0d767cdd.chunk.js.map