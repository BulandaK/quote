(this.webpackJsonprekrutacja=this.webpackJsonprekrutacja||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),u=n(7),o=n.n(u),s=(n(13),n(14),n(8)),a=n(2),i=n(3),j=n(5),d=n(4),l=n(0),b=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"quote-container",children:[Object(l.jsx)("p",{children:Object(l.jsx)("q",{children:this.props.quote})}),Object(l.jsx)("p",{children:this.props.author})]})}}]),n}(r.Component),h=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).drawQuote=function(){var t=Math.floor(Math.random()*r.state.AllQuotes.length),e=r.state.AllQuotes[t];r.setState((function(t){return{randomQuotes:[].concat(Object(s.a)(t.randomQuotes),[e]),currentQuote:e,currentIndex:t.currentIndex+1}}))},r.previousQuote=function(){var t=r.state.randomQuotes[r.state.currentIndex-1];r.setState((function(e){return{currentQuote:t,currentIndex:e.currentIndex-1}}))},r.state={AllQuotes:null,randomQuotes:[],currentQuote:null,currentIndex:-1},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(t){return t.json()})).then((function(e){return t.setState({AllQuotes:e})}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"btns",children:[Object(l.jsx)("button",{onClick:this.drawQuote,children:"wylosuj cytat"}),this.state.currentIndex<=0?Object(l.jsx)("button",{disabled:!0,children:"poprzedni cytat"}):Object(l.jsx)("button",{onClick:this.previousQuote,children:"poprzedni cytat"})]}),null!=this.state.currentQuote?Object(l.jsx)(b,{author:this.state.currentQuote.author,quote:this.state.currentQuote.quote}):Object(l.jsx)(b,{})]})}}]),n}(r.Component);var f=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(h,{})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,u=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),u(t),o(t)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.13a8b5e3.chunk.js.map