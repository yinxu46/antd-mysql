(self.webpackChunkantd_mysql=self.webpackChunkantd_mysql||[]).push([[345],{58927:function(){},74345:function(oe,P,t){"use strict";t.r(P),t.d(P,{DuoPage:function(){return H},Foo:function(){return O},MysqlFieldItem:function(){return T.MysqlFieldItem},MysqlFieldTable:function(){return B},MysqlFieldTableProps:function(){return T.MysqlFieldTableProps},MysqlFieldTableRef:function(){return T.MysqlFieldTableRef},MysqlFieldType:function(){return T.MysqlFieldType},MysqlFieldTypeOptions:function(){return V}});var y=t(67294),F=t(10932),a=t(85893),N=function(x){return(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{children:x.title}),(0,a.jsx)(F.ZP,{type:"primary",children:"test"})]})},O=N,K=t(27424),M=t.n(K),L=t(78957),W=function(x){var p=y.useState([{name:"id",type:"int",size:10,key:!0,comment:"ID",nullable:!1}]),c=M()(p,2),u=c[0],b=c[1],g=y.useRef();return(0,a.jsxs)("div",{children:[(0,a.jsx)(B,{ref:g,defaultValue:u,onChange:function(m){b(m),console.log(m)}}),(0,a.jsx)("div",{style:{marginTop:16},children:(0,a.jsxs)(L.Z,{children:[(0,a.jsx)(F.ZP,{onClick:function(m){var d;console.log((d=g.current)===null||d===void 0?void 0:d.data)},children:"\u83B7\u53D6\u6570\u636E"}),(0,a.jsx)(F.ZP,{onClick:function(m){var d;(d=g.current)===null||d===void 0||d.add()},children:"\u65B0\u589E\u6570\u636E"})]})}),(0,a.jsx)("div",{children:JSON.stringify(u)})]})},H=W,T=t(58927),J=t(861),Z=t.n(J),Y=t(42122),l=t.n(Y),G=t(70215),Q=t.n(G),U=t(81520),$=t(12598),X=t(323),z=t(77429),E=t(84567),w=t(71744),q=t(96671),_=t(24193),ee=t(11132),ne=t(87307),k=t(13538),te=t(77727),ae=["children"],V=[{label:"bigint",value:"bigint"},{label:"char",value:"char"},{label:"date",value:"date"},{label:"datetime",value:"datetime"},{label:"decimal",value:"decimal"},{label:"int",value:"int"},{label:"json",value:"json"},{label:"longtext",value:"longtext"},{label:"text",value:"text"},{label:"timestamp",value:"timestamp"},{label:"tinyint",value:"tinyint"},{label:"varchar",value:"varchar"}],re=function(x){var p=x.children,c=Q()(x,ae),u=(0,k.nB)({id:c["data-row-key"]}),b=u.attributes,g=u.listeners,v=u.setNodeRef,m=u.setActivatorNodeRef,d=u.transform,R=u.transition,f=u.isDragging,C=l()(l()({},c.style),{},{transform:te.ux.Transform.toString(d&&l()(l()({},d),{},{scaleY:1})),transition:R},f?{position:"relative",zIndex:9999}:{});return(0,a.jsx)("tr",l()(l()(l()({},c),{},{ref:v,style:C},b),{},{children:y.Children.map(p,function(I){return I.key==="sort"?y.cloneElement(I,{children:(0,a.jsx)(w.Z,l()({ref:m,style:{touchAction:"none",cursor:"move"}},g))}):I})}))},le=function(x,p){var c=x.defaultValue,u=x.onChange,b=y.useState(),g=M()(b,2),v=g[0],m=g[1],d=y.useState((c!=null?c:[]).map(function(i,e){return l()({_key:e+1},i)})),R=M()(d,2),f=R[0],C=R[1],I=function(){var e=Date.now();m(e),C([].concat(Z()(f),[{_key:e,name:"",type:"int",nullable:!1,key:!1,comment:""}]))},A=function(e){var n=Z()(f);n.splice(e,1),C(n)},j=function(e,n){var r=Z()(f);r[n]=e,C(r)},ie=function(e){var n=e.active,r=e.over;n.id!==(r==null?void 0:r.id)&&C(function(s){var o=s.findIndex(function(D){return D._key===n.id}),h=s.findIndex(function(D){return D._key===(r==null?void 0:r.id)});return(0,k.Rp)(s,o,h)})};return(0,y.useEffect)(function(){u==null||u(f)},[f]),y.useImperativeHandle(p,function(){return{data:f,add:I,remove:A}}),(0,a.jsxs)("div",{children:[(0,a.jsx)(ee.LB,{modifiers:[ne.DL],onDragEnd:ie,children:(0,a.jsx)(k.Fo,{items:f.map(function(i){var e;return(e=i._key)!==null&&e!==void 0?e:0}),strategy:k.qw,children:(0,a.jsx)(U.Z,{onRow:function(e,n){return{onClick:function(){m(e._key)}}},size:"small",pagination:!1,components:{body:{row:re}},rowKey:"_key",dataSource:f,scroll:{x:680,y:400},columns:[{key:"sort",width:30},{dataIndex:"name",title:"\u540D\u79F0",width:100,render:function(e,n,r){return n._key==v?(0,a.jsx)($.Z,{size:"small",defaultValue:e,onInput:function(o){return j(l()(l()({},n),{},{name:o.currentTarget.value.trim()}),r)}}):e}},{dataIndex:"type",title:"\u7C7B\u578B",width:100,render:function(e,n,r){return n._key==v?(0,a.jsx)(X.Z,{size:"small",defaultValue:e,options:V,onChange:function(o){return j(l()(l()({},n),{},{type:o}),r)},style:{width:"100%"}}):e}},{dataIndex:"size",title:"\u957F\u5EA6",width:100,render:function(e,n,r){return n._key==v?(0,a.jsx)(z.Z,{size:"small",type:"number",defaultValue:e,min:0,onInput:function(o){return j(l()(l()({},n),{},{size:parseInt(o)}),r)}}):e>0?e:""}},{dataIndex:"digit",title:"\u5C0F\u6570",width:100,render:function(e,n,r){return n._key==v?(0,a.jsx)(z.Z,{size:"small",type:"number",defaultValue:e,min:0,onInput:function(o){return j(l()(l()({},n),{},{digit:parseInt(o)}),r)}}):e>0?e:""}},{dataIndex:"nullable",title:"Nullable",width:60,render:function(e,n,r){return(0,a.jsx)(E.Z,{checked:e,onClick:function(o){var h;return j(l()(l()({},n),{},{nullable:(h=o.target)===null||h===void 0?void 0:h.checked}),r)}})}},{dataIndex:"key",title:"\u952E",width:30,render:function(e,n,r){return(0,a.jsx)(E.Z,{checked:e,onClick:function(o){var h;return j(l()(l()({},n),{},{key:(h=o.target)===null||h===void 0?void 0:h.checked}),r)}})}},{dataIndex:"comment",title:"\u6CE8\u91CA",width:120,render:function(e,n,r){return n._key==v?(0,a.jsx)($.Z,{size:"small",defaultValue:e,onInput:function(o){return j(l()(l()({},n),{},{comment:o.currentTarget.value.trim()}),r)}}):e}},{width:30,render:function(e,n,r){return(0,a.jsx)(q.Z,{onClick:function(o){return A(r)}})}}]})})}),(0,a.jsx)(F.ZP,{style:{marginTop:8},block:!0,type:"dashed",icon:(0,a.jsx)(_.Z,{}),onClick:function(e){return I()},children:"\u65B0\u589E\u5B57\u6BB5"})]})},B=y.forwardRef(le)}}]);
