"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[170],{170:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var i,t,o,a,c,s,d,l,x=r(439),h=r(166),f=r(791),p=r(689),u=r(168),g=r(87),j=r(934),v=(0,j.Z)(g.rU)(i||(i=(0,u.Z)(["\n  font-family: Teko;\n  font-weight: 0;\n  font-size: 16px;\n  color: #ffffff;\n  background: linear-gradient(90deg, #818589 0%, #28a718 100%);\n  padding: 10px 47px;\n  border: none;\n  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;\n  border-radius: 22px 50px;\n  transition: 327ms;\n  transform: translateY(0);\n  width: 55px;\n  &:hover,\n  &:focus {\n    transition: 327ms;\n    padding: 10px 50px;\n    transform: translateY(-0px);\n    background: linear-gradient(90deg, #818589 0%, #cfe70b 100%);\n    color: #ffffff;\n    border: none;\n  }\n"]))),m=j.Z.div(t||(t=(0,u.Z)(["\nmargin-top:50px;\ndisplay:flex;\n"]))),b=j.Z.div(o||(o=(0,u.Z)(["\nmargin-left:50px;\n"]))),Z=j.Z.div(a||(a=(0,u.Z)(["\npadding:15px;\n"]))),w=(0,j.Z)(g.rU)(c||(c=(0,u.Z)(["\ncolor:black;\ntext-decoration:none;\n:hover{\n    background-color:red;\n    color:white;\n}\n"]))),k=j.Z.div(s||(s=(0,u.Z)(["\nmargin-top:40px;\n"]))),_=j.Z.ul(d||(d=(0,u.Z)(["\npadding:15px;\n"]))),U=j.Z.li(l||(l=(0,u.Z)(["\ncolor:red;\nmargin-bottom:15px;\n"]))),y=r(184),A=function(n){var e=n.query,r=(0,p.UO)().id,i=(0,f.useState)(null),t=(0,x.Z)(i,2),o=t[0],a=t[1],c=(0,f.useState)(""),s=(0,x.Z)(c,2),d=s[0],l=s[1];(0,f.useEffect)((function(){(0,h.h_)(r).then((function(n){var e=n.data;a([e]),l("good")})).catch((function(n){l("bad")}))}),[r]);var u=function(n){if(null!==n)return n.map((function(n){return n.name})).join(", ")};return null===o&&"bad"===d?(0,y.jsxs)(Z,{children:[(0,y.jsx)(v,{to:"/",children:"back"}),(0,y.jsx)("p",{children:"No DATA"})]}):null!==o?(0,y.jsxs)(Z,{children:[e?(0,y.jsx)(v,{to:"/movies/search/".concat(e),children:"back"}):(0,y.jsx)(v,{to:"/",children:"back"}),o.map((function(n){return(0,y.jsxs)(m,{children:[(0,y.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(n.backdrop_path),alt:n.name,width:"600"}),(0,y.jsxs)(b,{children:[(0,y.jsxs)("h2",{children:[n.title," (",n.release_date,")"]}),(0,y.jsx)("p",{children:"User Score:".concat((e=n.vote_average,Math.floor(10*e)+"%"))}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{children:"OverView:"}),n.overview]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{children:"Genres:"}),u(n.genres)]})]})]},n.id);var e})),(0,y.jsxs)(k,{children:["Aditional Information",(0,y.jsxs)(_,{children:[(0,y.jsx)(U,{children:(0,y.jsx)(w,{to:"cast",children:"cast"})}),(0,y.jsx)(U,{children:(0,y.jsx)(w,{to:"reviews",children:"reviews"})}),(0,y.jsx)(p.j3,{})]})]})]}):void 0}}}]);
//# sourceMappingURL=170.95302115.chunk.js.map