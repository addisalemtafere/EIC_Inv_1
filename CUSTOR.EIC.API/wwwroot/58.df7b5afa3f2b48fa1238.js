(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{PNhd:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),o=function(){},u=e("t68o"),a=e("zbXB"),d=e("NcP4"),i=e("xYTU"),r=e("2eEv"),c=e("5/Ol"),p=e("lzlj"),m=e("FVSy"),s=e("bujt"),f=e("UodH"),g=e("dWZg"),b=e("lLAP"),h=e("wFw1"),y=e("Mr+X"),v=e("SMsm"),_=e("TtEo"),O=e("LC5p"),x=e("21Lb"),M=e("OzfB"),k=e("Fzqc"),C=e("Ip0R"),R=e("Q2rD"),P=e("kd80"),w=function(){function l(l,n,e,t,o,u){this.http=l,this.activatedRoute=n,this.custService=e,this.router=t,this.route=o,this.toastr=u}return l.prototype.ngOnInit=function(){var l=this.activatedRoute.snapshot.params.id;l<1||this.getPres(l)},l.prototype.getPres=function(l){var n=this;this.title=localStorage.getItem("title"),this.loadingIndicator=!0,this.custService.getPrerequisites(l).subscribe(function(l){n.checkLists=l},function(l){n.toastr.error('Error: "'+P.a.getHttpResponseMessage(l)+'"')}),this.loadingIndicator=!1},l.prototype.continue=function(){localStorage.getItem("ServiceId"),this.router.navigate(["/login"])},l.prototype.back=function(){window.history.back()},l}(),F=e("t/Na"),L=e("ZYCi"),N=e("SZbH"),E=t["\u0275crt"]({encapsulation:0,styles:[['.page-content[_ngcontent-%COMP%]{padding:24px;width:1000px;margin:auto;background-color:#fff}h3[_ngcontent-%COMP%]{color:#00bcd4;font-size:medium}h4[_ngcontent-%COMP%]{margin-bottom:0;font-size:smaller;font-weight:400}.border[_ngcontent-%COMP%]{border:1px solid #ccc;border-top-left-radius:6px;border-top-right-radius:6px}.alert-info[_ngcontent-%COMP%], .appGuid[_ngcontent-%COMP%] > ol[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,"Noto Sans Ethiopic";font-size:13px;line-height:1.428571429;color:#333;padding:10px;text-align:justify!important}.service[_ngcontent-%COMP%] > ol[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{font-size:14px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,"Noto Sans Ethiopic";line-height:1.428571429;color:#333}.footerButton[_ngcontent-%COMP%]{border-bottom-left-radius:6px;border:1px solid #ccc;border-top:none;border-bottom-right-radius:6px;background-color:#fafafa}.agree[_ngcontent-%COMP%]{color:#fff;font-weight:700}.alert-info[_ngcontent-%COMP%]{background-color:#d9edf7;border-color:#bce8f1;color:#31708f;margin:20px}.header-description[_ngcontent-%COMP%]{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif,"Noto Sans Ethiopic";font-size:13px;line-height:32px;color:#333;padding:10px;text-align:justify!important;margin:10px 15px}.hdr-brk[_ngcontent-%COMP%], .hm-bg-cnt[_ngcontent-%COMP%]   .hm-bg-slick[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%]{font-size:16px}.bld[_ngcontent-%COMP%]{font-weight:700}.hdr-brk[_ngcontent-%COMP%]{padding:5px 0;background:#fff;border-bottom:1px solid #ccc;line-height:1}']],data:{animation:[{type:7,name:"fadeInOut",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"0.4s ease-in"}],options:null},{type:1,expr:":leave",animation:[{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"0.4s 10ms ease-out"}],options:null}],options:{}}]}});function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.DescriptionEnglish)})}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](2,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.Description)})}function j(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,54,"mat-card",[["class","page-content mat-elevation-z8 mat-card"],["style","margin: 40px auto;"]],[[24,"@fadeInOut",0]],null,null,p.d,p.a)),t["\u0275did"](1,49152,null,0,m.a,[],null,null),(l()(),t["\u0275eld"](2,0,null,0,8,"mat-card-header",[["class","mat-card-header"]],null,null,null,p.c,p.b)),t["\u0275did"](3,49152,null,0,m.e,[],null,null),(l()(),t["\u0275eld"](4,0,null,2,6,"button",[["class","mr-16"],["color","primary"],["mat-icon-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.back()&&t),t},s.d,s.b)),t["\u0275did"](5,180224,null,0,f.b,[t.ElementRef,g.a,b.g,[2,h.a]],{color:[0,"color"]},null),(l()(),t["\u0275eld"](6,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,y.b,y.a)),t["\u0275did"](7,638976,null,0,v.a,[t.ElementRef,v.c,[8,null]],null,null),(l()(),t["\u0275ted"](-1,0,["arrow_back"])),(l()(),t["\u0275eld"](9,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Back"])),(l()(),t["\u0275eld"](11,0,null,0,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-inset",null]],null,null,_.b,_.a)),t["\u0275did"](12,49152,null,0,O.a,[],null,null),(l()(),t["\u0275eld"](13,0,null,0,36,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t["\u0275did"](14,16384,null,0,m.c,[],null,null),(l()(),t["\u0275eld"](15,0,null,null,34,"div",[["fxLayout","row"],["fxLayoutAlign","start  "],["fxLayoutGap","4em"]],null,null,null,null,null)),t["\u0275did"](16,737280,null,0,x.f,[M.n,t.ElementRef,M.s],{layout:[0,"layout"]},null),t["\u0275did"](17,1785856,null,0,x.g,[M.n,t.ElementRef,[6,x.f],t.NgZone,k.b,M.s],{gap:[0,"gap"]},null),t["\u0275did"](18,737280,null,0,x.e,[M.n,t.ElementRef,[6,x.f],M.s],{align:[0,"align"]},null),(l()(),t["\u0275eld"](19,0,null,null,15,"div",[["class","  block"],["fxFlex","60%"]],null,null,null,null,null)),t["\u0275did"](20,737280,null,0,x.b,[M.n,t.ElementRef,[3,x.f],M.s,[2,M.a]],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](21,0,null,null,1,"div",[["class","hdr-brk sub-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](22,null,["Service Type: ",""])),(l()(),t["\u0275eld"](23,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Requirements"])),(l()(),t["\u0275eld"](25,0,null,null,2,"ol",[["type","none"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](27,802816,null,0,C.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](28,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\u1218\u121f\u120b\u1275 \u12eb\u1208\u1263\u1278\u12cd"])),(l()(),t["\u0275eld"](30,0,null,null,4,"div",[["class","checkList"],["fxFlex","100"]],null,null,null,null,null)),t["\u0275did"](31,737280,null,0,x.b,[M.n,t.ElementRef,[3,x.f],M.s,[2,M.a]],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](32,0,null,null,2,"ol",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](34,802816,null,0,C.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](35,0,null,null,14,"div",[["class","appGuid block"],["fxFlex","40%"]],null,null,null,null,null)),t["\u0275did"](36,737280,null,0,x.b,[M.n,t.ElementRef,[3,x.f],M.s,[2,M.a]],{flex:[0,"flex"]},null),(l()(),t["\u0275eld"](37,0,null,null,1,"div",[["class","hdr-brk sub-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Application Form guide"])),(l()(),t["\u0275eld"](39,0,null,null,10,"ol",[],null,null,null,null,null)),(l()(),t["\u0275eld"](40,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Please make sure that you have created an online account and customer profile that enables you to access our portal. "])),(l()(),t["\u0275eld"](42,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["After logging in to the portal, please select the service you would like to request from the provided list, and fill the Request Form properly in order to submit your service request application. Fields marked with \u2018astrics (*)\u2019 sign are mandatory information that should be provided. "])),(l()(),t["\u0275eld"](44,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" Make sure that you have prepared scanned copies of the list of documnets listed here in order to uplaod them later, when requested. "])),(l()(),t["\u0275eld"](46,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,['If you wish to pause your application request process and continue later, your can do so by saving your application as a Draft and Resume it later by cliking on "Draft Applications" menu item. '])),(l()(),t["\u0275eld"](48,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,[" After you Submit your Service Request Application, you will receive a confirmation email indicating receipt of your application by our staff that will handle the case. The staff who will handle your case may contact you for further information regarding your application. "])),(l()(),t["\u0275eld"](50,0,null,0,4,"mat-card-actions",[["align","start center"],["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),t["\u0275did"](51,16384,null,0,m.b,[],{align:[0,"align"]},null),(l()(),t["\u0275eld"](52,0,null,null,2,"div",[["fxLayout","row"],["fxLayoutGap","2em"]],null,null,null,null,null)),t["\u0275did"](53,737280,null,0,x.f,[M.n,t.ElementRef,M.s],{layout:[0,"layout"]},null),t["\u0275did"](54,1785856,null,0,x.g,[M.n,t.ElementRef,[6,x.f],t.NgZone,k.b,M.s],{gap:[0,"gap"]},null)],function(l,n){var e=n.component;l(n,5,0,"primary"),l(n,7,0),l(n,16,0,"row"),l(n,17,0,"4em"),l(n,18,0,"start  "),l(n,20,0,"60%"),l(n,27,0,e.checkLists),l(n,31,0,"100"),l(n,34,0,e.checkLists),l(n,36,0,"40%"),l(n,51,0,"start center"),l(n,53,0,"row"),l(n,54,0,"2em")},function(l,n){var e=n.component;l(n,0,0,void 0),l(n,4,0,t["\u0275nov"](n,5).disabled||null,"NoopAnimations"===t["\u0275nov"](n,5)._animationMode),l(n,6,0,t["\u0275nov"](n,7).inline),l(n,11,0,t["\u0275nov"](n,12).vertical?"vertical":"horizontal",t["\u0275nov"](n,12).vertical,t["\u0275nov"](n,12).inset),l(n,22,0,e.title),l(n,50,0,"end"===t["\u0275nov"](n,51).align)})}var q=t["\u0275ccf"]("app-requirement",w,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-requirement",[],null,null,null,j,E)),t["\u0275did"](1,114688,null,0,w,[F.c,L.a,R.a,L.o,L.a,N.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),S=e("gIcY"),T=e("eDkP"),D=e("4tE/"),z=e("M2Lx"),Z=e("Wf4p"),B=e("o3x0"),H=e("jQLj"),G=e("mVsa"),Y=e("uGex"),U=e("v9Dh"),X=e("4epT"),V=e("ZYjt"),K=e("vARd"),W=e("vGXY"),Q=e("OkvK"),J=e("wmQ5"),$=e("hUWP"),ll=e("V9q+"),nl=e("4c35"),el=e("qAlS"),tl=e("u7R8"),ol=e("de3e"),ul=e("/dO6"),al=e("YhbO"),dl=e("jlZm"),il=e("r43C"),rl=e("/VYK"),cl=e("seP3"),pl=e("b716"),ml=e("0/Q6"),sl=e("Z+uX"),fl=e("Blfk"),gl=e("9It4"),bl=e("Nsh5"),hl=e("w+lc"),yl=e("kWGw"),vl=e("y4qS"),_l=e("BHnd"),Ol=e("La40"),xl=e("8mMr"),Ml=e("Lwpp"),kl=e("6Wmm"),Cl=e("Bw/2"),Rl=e("A7o+"),Pl=e("ttZ8"),wl=function(){},Fl=e("YSh2");e.d(n,"RequirementModuleNgFactory",function(){return Ll});var Ll=t["\u0275cmf"](o,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,a.b,a.a,d.a,i.a,i.b,r.a,c.a,q]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,C.NgLocalization,C.NgLocaleLocalization,[t.LOCALE_ID,[2,C["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](5120,M.d,M.e,[[3,M.d],[2,M.c],[2,M.k],[2,M.b]]),t["\u0275mpd"](5120,M.h,M.v,[[3,M.h],M.d]),t["\u0275mpd"](5120,M.m,M.w,[[3,M.m],t.NgZone,t.PLATFORM_ID,C.DOCUMENT]),t["\u0275mpd"](4608,M.n,M.n,[M.h,M.m]),t["\u0275mpd"](5120,M.p,M.o,[[3,M.p],M.m,M.h]),t["\u0275mpd"](5120,M.t,M.r,[[3,M.t]]),t["\u0275mpd"](4608,M.s,M.s,[[2,M.t],[2,M.q],t.PLATFORM_ID,[2,M.l]]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(l,n){return[M.u(l,n)]},[C.DOCUMENT,t.PLATFORM_ID]),t["\u0275mpd"](4608,S["\u0275angular_packages_forms_forms_i"],S["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,S.FormBuilder,S.FormBuilder,[]),t["\u0275mpd"](4608,F.m,F.s,[C.DOCUMENT,t.PLATFORM_ID,F.q]),t["\u0275mpd"](4608,F.t,F.t,[F.m,F.r]),t["\u0275mpd"](5120,F.a,function(l){return[l]},[F.t]),t["\u0275mpd"](4608,F.p,F.p,[]),t["\u0275mpd"](6144,F.n,null,[F.p]),t["\u0275mpd"](4608,F.l,F.l,[F.n]),t["\u0275mpd"](6144,F.b,null,[F.l]),t["\u0275mpd"](4608,F.g,F.o,[F.b,t.Injector]),t["\u0275mpd"](4608,F.c,F.c,[F.g]),t["\u0275mpd"](4608,T.c,T.c,[T.i,T.e,t.ComponentFactoryResolver,T.h,T.f,t.Injector,t.NgZone,C.DOCUMENT,k.b]),t["\u0275mpd"](5120,T.j,T.k,[T.c]),t["\u0275mpd"](5120,D.a,D.b,[T.c]),t["\u0275mpd"](4608,z.c,z.c,[]),t["\u0275mpd"](4608,Z.d,Z.d,[]),t["\u0275mpd"](5120,B.c,B.d,[T.c]),t["\u0275mpd"](4608,B.e,B.e,[T.c,t.Injector,[2,C.Location],[2,B.b],B.c,[3,B.e],T.e]),t["\u0275mpd"](4608,H.i,H.i,[]),t["\u0275mpd"](5120,H.a,H.b,[T.c]),t["\u0275mpd"](5120,G.b,G.g,[T.c]),t["\u0275mpd"](4608,Z.c,Z.z,[[2,Z.h],g.a]),t["\u0275mpd"](5120,Y.a,Y.b,[T.c]),t["\u0275mpd"](5120,U.b,U.c,[T.c]),t["\u0275mpd"](5120,X.c,X.a,[[3,X.c]]),t["\u0275mpd"](4608,V.f,Z.e,[[2,Z.i],[2,Z.n]]),t["\u0275mpd"](4608,K.c,K.c,[T.c,b.i,t.Injector,W.a,[3,K.c],K.b]),t["\u0275mpd"](5120,Q.d,Q.a,[[3,Q.d]]),t["\u0275mpd"](4608,J.a,J.a,[]),t["\u0275mpd"](1073742336,C.CommonModule,C.CommonModule,[]),t["\u0275mpd"](1073742336,M.j,M.j,[]),t["\u0275mpd"](1073742336,k.a,k.a,[]),t["\u0275mpd"](1073742336,x.d,x.d,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,ll.a,ll.a,[[2,M.q],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,S["\u0275angular_packages_forms_forms_bb"],S["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,S.FormsModule,S.FormsModule,[]),t["\u0275mpd"](1073742336,S.ReactiveFormsModule,S.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,F.e,F.e,[]),t["\u0275mpd"](1073742336,F.d,F.d,[]),t["\u0275mpd"](1073742336,Z.n,Z.n,[[2,Z.f]]),t["\u0275mpd"](1073742336,g.b,g.b,[]),t["\u0275mpd"](1073742336,Z.y,Z.y,[]),t["\u0275mpd"](1073742336,Z.w,Z.w,[]),t["\u0275mpd"](1073742336,Z.t,Z.t,[]),t["\u0275mpd"](1073742336,nl.g,nl.g,[]),t["\u0275mpd"](1073742336,el.b,el.b,[]),t["\u0275mpd"](1073742336,T.g,T.g,[]),t["\u0275mpd"](1073742336,D.c,D.c,[]),t["\u0275mpd"](1073742336,f.c,f.c,[]),t["\u0275mpd"](1073742336,tl.a,tl.a,[]),t["\u0275mpd"](1073742336,m.f,m.f,[]),t["\u0275mpd"](1073742336,z.d,z.d,[]),t["\u0275mpd"](1073742336,ol.c,ol.c,[]),t["\u0275mpd"](1073742336,ul.b,ul.b,[]),t["\u0275mpd"](1073742336,B.j,B.j,[]),t["\u0275mpd"](1073742336,b.a,b.a,[]),t["\u0275mpd"](1073742336,H.j,H.j,[]),t["\u0275mpd"](1073742336,al.c,al.c,[]),t["\u0275mpd"](1073742336,dl.b,dl.b,[]),t["\u0275mpd"](1073742336,Z.o,Z.o,[]),t["\u0275mpd"](1073742336,il.b,il.b,[]),t["\u0275mpd"](1073742336,v.b,v.b,[]),t["\u0275mpd"](1073742336,rl.c,rl.c,[]),t["\u0275mpd"](1073742336,cl.e,cl.e,[]),t["\u0275mpd"](1073742336,pl.c,pl.c,[]),t["\u0275mpd"](1073742336,O.b,O.b,[]),t["\u0275mpd"](1073742336,ml.c,ml.c,[]),t["\u0275mpd"](1073742336,G.e,G.e,[]),t["\u0275mpd"](1073742336,Z.A,Z.A,[]),t["\u0275mpd"](1073742336,Z.q,Z.q,[]),t["\u0275mpd"](1073742336,Y.d,Y.d,[]),t["\u0275mpd"](1073742336,U.e,U.e,[]),t["\u0275mpd"](1073742336,X.d,X.d,[]),t["\u0275mpd"](1073742336,sl.b,sl.b,[]),t["\u0275mpd"](1073742336,fl.c,fl.c,[]),t["\u0275mpd"](1073742336,gl.c,gl.c,[]),t["\u0275mpd"](1073742336,bl.h,bl.h,[]),t["\u0275mpd"](1073742336,hl.a,hl.a,[]),t["\u0275mpd"](1073742336,yl.b,yl.b,[]),t["\u0275mpd"](1073742336,K.f,K.f,[]),t["\u0275mpd"](1073742336,Q.e,Q.e,[]),t["\u0275mpd"](1073742336,vl.p,vl.p,[]),t["\u0275mpd"](1073742336,_l.m,_l.m,[]),t["\u0275mpd"](1073742336,Ol.j,Ol.j,[]),t["\u0275mpd"](1073742336,xl.b,xl.b,[]),t["\u0275mpd"](1073742336,Ml.d,Ml.d,[]),t["\u0275mpd"](1073742336,J.b,J.b,[]),t["\u0275mpd"](1073742336,kl.b,kl.b,[]),t["\u0275mpd"](1073742336,Cl.a,Cl.a,[]),t["\u0275mpd"](1073742336,Rl.h,Rl.h,[]),t["\u0275mpd"](1073742336,Pl.a,Pl.a,[]),t["\u0275mpd"](1073742336,L.s,L.s,[[2,L.x],[2,L.o]]),t["\u0275mpd"](1073742336,wl,wl,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](256,F.q,"XSRF-TOKEN",[]),t["\u0275mpd"](256,F.r,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,ul.a,{separatorKeyCodes:[Fl.f]},[]),t["\u0275mpd"](256,Z.g,Z.k,[]),t["\u0275mpd"](1024,L.m,function(){return[[{path:"",component:w}]]},[])])})}}]);