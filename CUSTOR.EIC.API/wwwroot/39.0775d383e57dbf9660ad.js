(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{Azqq:function(t,l,a){"use strict";a.d(l,"a",function(){return o}),a.d(l,"b",function(){return b});var e=a("CcnG"),n=(a("uGex"),a("Ip0R")),r=a("eDkP"),i=a("Fzqc"),o=(a("M2Lx"),a("4c35"),a("dWZg"),a("qAlS"),a("Wf4p"),a("ZYjt"),a("seP3"),a("gIcY"),a("lLAP"),e.rb({encapsulation:2,styles:[".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}"],data:{animation:[{type:7,name:"transformPanel",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"scaleY(0.8)",minWidth:"100%",opacity:0},offset:null},options:void 0},{type:0,name:"showing",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:0,name:"showing-multiple",styles:{type:6,styles:{opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:{type:4,styles:null,timings:"120ms cubic-bezier(0, 0, 0.2, 1)"},options:null},{type:1,expr:"* => void",animation:{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"100ms 25ms linear"},options:null}],options:{}}]}}));function c(t){return e.Nb(0,[(t()(),e.tb(0,0,null,null,1,"span",[["class","mat-select-placeholder"]],null,null,null,null,null)),(t()(),e.Lb(1,null,["",""]))],null,function(t,l){t(l,1,0,l.component.placeholder||"\xa0")})}function d(t){return e.Nb(0,[(t()(),e.tb(0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),e.Lb(1,null,["",""]))],null,function(t,l){t(l,1,0,l.component.triggerValue||"\xa0")})}function s(t){return e.Nb(0,[e.Cb(null,0),(t()(),e.kb(0,null,null,0))],null,null)}function u(t){return e.Nb(0,[(t()(),e.tb(0,0,null,null,5,"span",[["class","mat-select-value-text"]],null,null,null,null,null)),e.sb(1,16384,null,0,n.q,[],{ngSwitch:[0,"ngSwitch"]},null),(t()(),e.kb(16777216,null,null,1,null,d)),e.sb(3,16384,null,0,n.s,[e.S,e.P,n.q],null,null),(t()(),e.kb(16777216,null,null,1,null,s)),e.sb(5,278528,null,0,n.r,[e.S,e.P,n.q],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(t,l){t(l,1,0,!!l.component.customTrigger),t(l,5,0,!0)},null)}function m(t){return e.Nb(0,[(t()(),e.tb(0,0,[[2,0],["panel",1]],null,2,"div",[],[[24,"@transformPanel",0],[4,"transformOrigin",null],[4,"font-size","px"]],[[null,"@transformPanel.done"],[null,"keydown"]],function(t,l,a){var e=!0,n=t.component;return"@transformPanel.done"===l&&(e=!1!==n._panelDoneAnimatingStream.next(a.toState)&&e),"keydown"===l&&(e=!1!==n._handleKeydown(a)&&e),e},null,null)),e.sb(1,278528,null,0,n.k,[e.v,e.w,e.k,e.H],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Cb(null,1)],function(t,l){var a=l.component;t(l,1,0,e.vb(1,"mat-select-panel ",a._getPanelTheme(),""),a.panelClass)},function(t,l){var a=l.component;t(l,0,0,a.multiple?"showing-multiple":"showing",a._transformOrigin,a._triggerFontSize)})}function b(t){return e.Nb(2,[e.Jb(402653184,1,{trigger:0}),e.Jb(671088640,2,{panel:0}),e.Jb(402653184,3,{overlayDir:0}),(t()(),e.tb(3,0,[[1,0],["trigger",1]],null,9,"div",[["aria-hidden","true"],["cdk-overlay-origin",""],["class","mat-select-trigger"]],null,[[null,"click"]],function(t,l,a){var e=!0;return"click"===l&&(e=!1!==t.component.toggle()&&e),e},null,null)),e.sb(4,16384,[["origin",4]],0,r.b,[e.k],null,null),(t()(),e.tb(5,0,null,null,5,"div",[["class","mat-select-value"]],null,null,null,null,null)),e.sb(6,16384,null,0,n.q,[],{ngSwitch:[0,"ngSwitch"]},null),(t()(),e.kb(16777216,null,null,1,null,c)),e.sb(8,278528,null,0,n.r,[e.S,e.P,n.q],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),e.kb(16777216,null,null,1,null,u)),e.sb(10,278528,null,0,n.r,[e.S,e.P,n.q],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),e.tb(11,0,null,null,1,"div",[["class","mat-select-arrow-wrapper"]],null,null,null,null,null)),(t()(),e.tb(12,0,null,null,0,"div",[["class","mat-select-arrow"]],null,null,null,null,null)),(t()(),e.kb(16777216,null,null,1,function(t,l,a){var e=!0,n=t.component;return"backdropClick"===l&&(e=!1!==n.close()&&e),"attach"===l&&(e=!1!==n._onAttached()&&e),"detach"===l&&(e=!1!==n.close()&&e),e},m)),e.sb(14,671744,[[3,4]],0,r.a,[r.c,e.P,e.S,r.j,[2,i.b]],{origin:[0,"origin"],positions:[1,"positions"],offsetY:[2,"offsetY"],minWidth:[3,"minWidth"],backdropClass:[4,"backdropClass"],scrollStrategy:[5,"scrollStrategy"],open:[6,"open"],hasBackdrop:[7,"hasBackdrop"],lockPosition:[8,"lockPosition"]},{backdropClick:"backdropClick",attach:"attach",detach:"detach"})],function(t,l){var a=l.component;t(l,6,0,a.empty),t(l,8,0,!0),t(l,10,0,!1),t(l,14,0,e.Db(l,4),a._positions,a._offsetY,null==a._triggerRect?null:a._triggerRect.width,"cdk-overlay-transparent-backdrop",a._scrollStrategy,a.panelOpen,"","")},null)}},lzlj:function(t,l,a){"use strict";a.d(l,"a",function(){return n}),a.d(l,"d",function(){return r}),a.d(l,"b",function(){return i}),a.d(l,"c",function(){return o});var e=a("CcnG"),n=(a("FVSy"),a("Fzqc"),a("Wf4p"),a("ZYjt"),e.rb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px 0}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function r(t){return e.Nb(2,[e.Cb(null,0),e.Cb(null,1)],null,null)}var i=e.rb({encapsulation:2,styles:[],data:{}});function o(t){return e.Nb(2,[e.Cb(null,0),(t()(),e.tb(1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),e.Cb(null,1),e.Cb(null,2)],null,null)}},pIm3:function(t,l,a){"use strict";a.d(l,"c",function(){return r}),a.d(l,"f",function(){return i}),a.d(l,"a",function(){return o}),a.d(l,"d",function(){return c}),a.d(l,"b",function(){return d}),a.d(l,"e",function(){return s});var e=a("CcnG"),n=(a("BHnd"),a("Ip0R"),a("y4qS")),r=(a("Fzqc"),a("Wf4p"),a("ZYjt"),a("dWZg"),e.rb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}}));function i(t){return e.Nb(2,[e.Jb(402653184,1,{_rowOutlet:0}),e.Jb(402653184,2,{_headerRowOutlet:0}),e.Jb(402653184,3,{_footerRowOutlet:0}),e.Cb(null,0),(t()(),e.tb(4,16777216,null,null,1,null,null,null,null,null,null,null)),e.sb(5,16384,[[2,4]],0,n.s,[e.S,e.k],null,null),(t()(),e.tb(6,16777216,null,null,1,null,null,null,null,null,null,null)),e.sb(7,16384,[[1,4]],0,n.q,[e.S,e.k],null,null),(t()(),e.tb(8,16777216,null,null,1,null,null,null,null,null,null,null)),e.sb(9,16384,[[3,4]],0,n.r,[e.S,e.k],null,null)],null,null)}var o=e.rb({encapsulation:2,styles:[],data:{}});function c(t){return e.Nb(2,[(t()(),e.tb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.sb(1,147456,null,0,n.c,[e.S],null,null)],null,null)}var d=e.rb({encapsulation:2,styles:[],data:{}});function s(t){return e.Nb(2,[(t()(),e.tb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.sb(1,147456,null,0,n.c,[e.S],null,null)],null,null)}},rlga:function(t,l,a){"use strict";a.r(l),a.d(l,"ShareModuleNgFactory",function(){return Ct});var e=a("CcnG"),n=a("1v4B"),r=a("t68o"),i=a("zbXB"),o=a("NcP4"),c=a("xYTU"),d=a("2eEv"),s=a("5/Ol"),u=a("pMnS"),m=a("Ril8"),b=a("6V+0"),p=a("Ip0R"),f=a("OzfB"),h=a("gIcY"),g=a("t/Na"),B=a("eDkP"),x=a("Fzqc"),w=a("4tE/"),y=a("M2Lx"),v=a("Wf4p"),k=a("o3x0"),S=a("jQLj"),C=a("mVsa"),z=a("dWZg"),j=a("uGex"),q=a("v9Dh"),P=a("ZYjt"),Y=a("4epT"),N=a("OkvK"),W=a("wmQ5"),_=a("p4hA"),A=a("0mNP"),O=a("mqR9"),R=a("Wxld"),Z=a("21Lb"),L=a("hUWP"),F=a("3pJQ"),J=a("V9q+"),D=a("4c35"),V=a("qAlS"),E=a("UodH"),G=a("u7R8"),I=a("FVSy"),K=a("de3e"),M=a("/dO6"),T=a("lLAP"),Q=a("YhbO"),X=a("jlZm"),H=a("r43C"),U=a("SMsm"),$=a("/VYK"),tt=a("seP3"),lt=a("b716"),at=a("LC5p"),et=a("0/Q6"),nt=a("Z+uX"),rt=a("Blfk"),it=a("9It4"),ot=a("Nsh5"),ct=a("w+lc"),dt=a("kWGw"),st=a("vARd"),ut=a("y4qS"),mt=a("BHnd"),bt=a("La40"),pt=a("8mMr"),ft=a("Lwpp"),ht=a("6Wmm"),gt=a("Bw/2"),Bt=a("A7o+"),xt=a("ttZ8"),wt=a("ZYCi"),yt=a("gwyZ"),vt=a("YSh2"),kt=a("AxZV"),St=a("r0oQ"),Ct=e.qb(n.a,[],function(t){return e.Ab([e.Bb(512,e.j,e.fb,[[8,[r.a,i.b,i.a,o.a,c.a,c.b,d.a,s.a,u.a,m.a,b.a]],[3,e.j],e.A]),e.Bb(4608,p.o,p.n,[e.x,[2,p.B]]),e.Bb(5120,e.b,function(t,l){return[f.j(t,l)]},[p.d,e.E]),e.Bb(4608,h.D,h.D,[]),e.Bb(4608,h.f,h.f,[]),e.Bb(4608,g.m,g.s,[p.d,e.E,g.q]),e.Bb(4608,g.t,g.t,[g.m,g.r]),e.Bb(5120,g.a,function(t){return[t]},[g.t]),e.Bb(4608,g.p,g.p,[]),e.Bb(6144,g.n,null,[g.p]),e.Bb(4608,g.l,g.l,[g.n]),e.Bb(6144,g.b,null,[g.l]),e.Bb(4608,g.g,g.o,[g.b,e.t]),e.Bb(4608,g.c,g.c,[g.g]),e.Bb(4608,B.c,B.c,[B.i,B.e,e.j,B.h,B.f,e.t,e.C,p.d,x.b,[2,p.i]]),e.Bb(5120,B.j,B.k,[B.c]),e.Bb(5120,w.a,w.b,[B.c]),e.Bb(4608,y.c,y.c,[]),e.Bb(4608,v.d,v.d,[]),e.Bb(5120,k.c,k.d,[B.c]),e.Bb(135680,k.e,k.e,[B.c,e.t,[2,p.i],[2,k.b],k.c,[3,k.e],B.e]),e.Bb(4608,S.i,S.i,[]),e.Bb(5120,S.a,S.b,[B.c]),e.Bb(5120,C.b,C.g,[B.c]),e.Bb(4608,v.c,v.y,[[2,v.h],z.a]),e.Bb(5120,j.a,j.b,[B.c]),e.Bb(5120,q.b,q.c,[B.c]),e.Bb(4608,P.f,v.e,[[2,v.i],[2,v.n]]),e.Bb(5120,Y.c,Y.a,[[3,Y.c]]),e.Bb(5120,N.d,N.a,[[3,N.d]]),e.Bb(5120,W.b,W.a,[[3,W.b]]),e.Bb(4608,_.a,_.a,[g.c,A.a,O.a]),e.Bb(4608,R.a,R.a,[g.c,A.a,O.a]),e.Bb(1073742336,p.c,p.c,[]),e.Bb(1073742336,f.c,f.c,[]),e.Bb(1073742336,x.a,x.a,[]),e.Bb(1073742336,Z.j,Z.j,[]),e.Bb(1073742336,L.b,L.b,[]),e.Bb(1073742336,F.a,F.a,[]),e.Bb(1073742336,J.a,J.a,[[2,f.g],e.E]),e.Bb(1073742336,h.A,h.A,[]),e.Bb(1073742336,h.m,h.m,[]),e.Bb(1073742336,h.x,h.x,[]),e.Bb(1073742336,g.e,g.e,[]),e.Bb(1073742336,g.d,g.d,[]),e.Bb(1073742336,v.n,v.n,[[2,v.f],[2,P.g]]),e.Bb(1073742336,z.b,z.b,[]),e.Bb(1073742336,v.x,v.x,[]),e.Bb(1073742336,v.v,v.v,[]),e.Bb(1073742336,v.s,v.s,[]),e.Bb(1073742336,D.g,D.g,[]),e.Bb(1073742336,V.c,V.c,[]),e.Bb(1073742336,B.g,B.g,[]),e.Bb(1073742336,w.c,w.c,[]),e.Bb(1073742336,E.c,E.c,[]),e.Bb(1073742336,G.a,G.a,[]),e.Bb(1073742336,I.f,I.f,[]),e.Bb(1073742336,y.d,y.d,[]),e.Bb(1073742336,K.c,K.c,[]),e.Bb(1073742336,M.b,M.b,[]),e.Bb(1073742336,k.j,k.j,[]),e.Bb(1073742336,T.a,T.a,[]),e.Bb(1073742336,S.j,S.j,[]),e.Bb(1073742336,Q.c,Q.c,[]),e.Bb(1073742336,X.c,X.c,[]),e.Bb(1073742336,v.o,v.o,[]),e.Bb(1073742336,H.b,H.b,[]),e.Bb(1073742336,U.c,U.c,[]),e.Bb(1073742336,$.c,$.c,[]),e.Bb(1073742336,tt.e,tt.e,[]),e.Bb(1073742336,lt.c,lt.c,[]),e.Bb(1073742336,at.b,at.b,[]),e.Bb(1073742336,et.c,et.c,[]),e.Bb(1073742336,C.e,C.e,[]),e.Bb(1073742336,v.z,v.z,[]),e.Bb(1073742336,v.p,v.p,[]),e.Bb(1073742336,j.d,j.d,[]),e.Bb(1073742336,q.e,q.e,[]),e.Bb(1073742336,Y.d,Y.d,[]),e.Bb(1073742336,nt.c,nt.c,[]),e.Bb(1073742336,rt.c,rt.c,[]),e.Bb(1073742336,it.c,it.c,[]),e.Bb(1073742336,ot.h,ot.h,[]),e.Bb(1073742336,ct.a,ct.a,[]),e.Bb(1073742336,dt.c,dt.c,[]),e.Bb(1073742336,st.e,st.e,[]),e.Bb(1073742336,N.e,N.e,[]),e.Bb(1073742336,ut.p,ut.p,[]),e.Bb(1073742336,mt.m,mt.m,[]),e.Bb(1073742336,bt.k,bt.k,[]),e.Bb(1073742336,pt.b,pt.b,[]),e.Bb(1073742336,ft.e,ft.e,[]),e.Bb(1073742336,W.c,W.c,[]),e.Bb(1073742336,ht.b,ht.b,[]),e.Bb(1073742336,gt.a,gt.a,[]),e.Bb(1073742336,Bt.h,Bt.h,[]),e.Bb(1073742336,xt.a,xt.a,[]),e.Bb(1073742336,wt.s,wt.s,[[2,wt.y],[2,wt.o]]),e.Bb(1073742336,yt.a,yt.a,[]),e.Bb(1073742336,n.a,n.a,[]),e.Bb(256,g.q,"XSRF-TOKEN",[]),e.Bb(256,g.r,"X-XSRF-TOKEN",[]),e.Bb(256,M.a,{separatorKeyCodes:[vt.f]},[]),e.Bb(256,v.g,v.k,[]),e.Bb(1024,wt.m,function(){return[[{path:"",component:kt.a},{path:":id",component:St.a}]]},[])])})}}]);