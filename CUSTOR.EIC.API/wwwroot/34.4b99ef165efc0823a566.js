(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Ae9k:function(i,n,e){"use strict";e.d(n,"a",function(){return m});var t=e("mrSG"),r=e("ByIy"),o=e("0mNP"),p=e("mqR9"),s=e("67Y/"),c=e("9Z1F"),d=e("CcnG"),D=e("t/Na"),m=function(i){function n(n,e,t){var r=i.call(this,n,e.urls.url("pOutPut"),t)||this;return r.http=n,r.appConfig=e,r}return Object(t.c)(n,i),n.prototype.getPOutPutByProject=function(i){return this.httpClient.get(this.appConfig.urls.url("pOutPutByProject")+"/"+i).pipe(Object(s.a)(function(i){return i}),Object(c.a)(this.errMsg.parseObservableResponseError))},n.prototype.getPOutActual=function(i){return this.httpClient.get(this.appConfig.urls.url("ActualProduct")+"/"+i).pipe(Object(s.a)(function(i){return i}),Object(c.a)(this.errMsg.parseObservableResponseError))},n.ngInjectableDef=d.defineInjectable({factory:function(){return new n(d.inject(D.c),d.inject(o.a),d.inject(p.a))},token:n,providedIn:"root"}),n}(r.a)},tOET:function(i,n,e){"use strict";e.d(n,"f",function(){return t}),e.d(n,"c",function(){return r}),e.d(n,"g",function(){return o}),e.d(n,"h",function(){return p}),e.d(n,"j",function(){return s}),e.d(n,"i",function(){return c}),e.d(n,"n",function(){return d}),e.d(n,"b",function(){return D}),e.d(n,"k",function(){return m}),e.d(n,"d",function(){return a}),e.d(n,"o",function(){return l}),e.d(n,"a",function(){return I}),e.d(n,"e",function(){return g}),e.d(n,"l",function(){return u}),e.d(n,"m",function(){return h});var t=[{Id:"1",Description:"\u12e8\u1203\u1308\u122d \u12cd\u1235\u1325 \u1263\u1208\u1203\u1265\u1275",DescriptionEng:"Domestic Investor"},{Id:"2",Description:"\u12e8\u12cd\u132d \u1203\u1308\u122d \u12a2\u1295\u1268\u1235\u1270\u122d",DescriptionEng:"Foreign Investor"},{Id:"3",Description:"\u12a5\u1295\u12f0 \u1203\u1308\u122d \u12cd\u1235\u1325 \u1263\u1208\u1203\u1265\u1275",DescriptionEng:"As Domestic Investor"},{Id:"4",Description:"\u12e8\u1200\u1308\u122d \u12cd\u1235\u1325 \u12a5\u1293 \u12e8\u12cd\u132d \u1263\u1208\u1200\u1265\u1275",DescriptionEng:"Joint Investment"},{Id:"5",Description:"\u1245\u122d\u132b\u134d",DescriptionEng:"Branch"}],r=[{Id:"1",Description:"Own Interest",DescriptionEng:"Own Interest"},{Id:"2",Description:"by law",DescriptionEng:"by law"},{Id:"3",Description:"Lose",DescriptionEng:"Lose"},{Id:"4",Description:"By Authority",DescriptionEng:"By Authority"},{Id:"5",Description:"Sales",DescriptionEng:"Sales"},{Id:"6",Description:"Late Renewal",DescriptionEng:"Late Renewal"}],o=[{Id:"1",Description:"\u1245\u12f5\u1218 \u1275\u130d\u1260\u122b",DescriptionEnglish:"PreImplementation"},{Id:"2",Description:"\u1275\u130d\u1260\u122b",DescriptionEnglish:"Implementation"},{Id:"3",Description:"\u1260\u1235\u122b \u120b\u12ed",DescriptionEnglish:"Operation"}],p=[{Id:"4",Description:"\u1270\u1230\u122d\u12df\u120d",DescriptionEnglish:"Cancelled"},{Id:"5",Description:"\u1273\u130d\u12f7\u120d",DescriptionEnglish:"Injected "},{Id:"6",Description:"\u1270\u12d8\u130d\u1277\u120d",DescriptionEnglish:"Closed"},{Id:"7",Description:"\u1270\u12db\u12cd\u122f\u120d",DescriptionEnglish:"Transfer"},{Id:"8",Description:"\u12e8\u121b\u12ed\u1295\u1240\u1233\u1240\u1235",DescriptionEnglish:"Not Active"},{Id:"9",Description:"active",DescriptionEnglish:"Active"}],s=[{Id:"1",Description:"I",DescriptionEnglish:"I"},{Id:"2",Description:"II",DescriptionEnglish:"II"},{Id:"3",Description:"III",DescriptionEnglish:"III"},{Id:"4",Description:"IV",DescriptionEnglish:"IV"}],c=[{Id:"1",Description:"\u1260\u12ae\u1352",DescriptionEnglish:"Copy"},{Id:"2",Description:"\u1260\u1230\u12cd",DescriptionEnglish:"Person"},{Id:"3",Description:"\u1260\u1274\u121d\u1265\u122d",DescriptionEnglish:"Stamp"},{Id:"4",Description:"\u1260\u1350\u122d\u1230\u1295\u1275",DescriptionEnglish:"Percent"},{Id:"5",Description:"\u120c\u120b",DescriptionEnglish:"Others"}],d=[{Id:"1",Description:"\u124b\u121a",DescriptionEnglish:"Fixed"},{Id:"2",Description:"\u1270\u1328\u121b\u122a",DescriptionEnglish:"Incremental"},{Id:"3",Description:"\u1350\u122d\u1230\u1295\u1275",DescriptionEnglish:"Percent"}],D=[{Id:"1",Description:"\u130d\u1208\u1230\u1265",DescriptionEnglish:"Individual"},{Id:"2",Description:"\u1295\u130d\u12f5 \u121b\u1205\u1260\u122d",DescriptionEnglish:"Business Organization"},{Id:"3",Description:"\u1208\u1201\u1209\u121d",DescriptionEnglish:"All"}],m=[{Id:"1",Description:"\u12a0\u1295\u12f0\u129b",DescriptionEnglish:"Primary"},{Id:"2",Description:"\u1201\u1208\u1270\u129b",DescriptionEnglish:"Secondary"},{Id:"3",Description:"\u1236\u1235\u1270\u129b",DescriptionEnglish:"Teritiary"}],a=[{Id:"1",Description:"\u12f6\u120b\u122d",DescriptionEnglish:"Dollar"},{Id:"2",Description:"\u1353\u12cd\u1295\u12f5",DescriptionEnglish:"Pound"},{Id:"3",Description:"\u12e9\u122e",DescriptionEnglish:"Euro"},{Id:"3",Description:"\u12f5\u122d\u1203\u121d",DescriptionEnglish:"Dereham"}],l=[{Id:"1",Description:"\u12aa\u130d",DescriptionEnglish:"Kg"},{Id:"2",Description:"\u120a\u1275\u122d",DescriptionEnglish:"Liter"},{Id:"3",Description:"\u121c\u1275\u122d",DescriptionEnglish:"Meter"},{Id:"4",Description:"\u12f0\u122d\u12d8\u1295",DescriptionEnglish:"Dull"},{Id:"5",Description:"\u1241\u122b\u132d",DescriptionEnglish:"Pcs"},{Id:"6",Description:"\u12ab\u122d\u1276\u1295",DescriptionEnglish:"Carton"},{Id:"7",Description:"\u1325\u1295\u12f5",DescriptionEnglish:"Pair"},{Id:"8",Description:"\u12a5\u1235\u122d",DescriptionEnglish:"Set"},{Id:"9",Description:"\u12f5\u1228\u121d",DescriptionEnglish:"Drum"},{Id:"10",Description:"\u121c \u1276\u1295",DescriptionEnglish:"M.Ton"},{Id:"11",Description:"\u130b\u120e\u1295",DescriptionEnglish:"Galon"},{Id:"12",Description:"\u123a\u1275",DescriptionEnglish:"Sheet"},{Id:"13",Description:"\u1353\u12f5",DescriptionEnglish:"Pad"},{Id:"14",Description:"\u122e\u120d",DescriptionEnglish:"Roll"},{Id:"15",Description:"\u12ab\u122c \u121c\u1275\u122d",DescriptionEnglish:"KMeter"},{Id:"16",Description:"\u12a8\u1228\u1322\u1275",DescriptionEnglish:"Bages"},{Id:"17",Description:"\u1306\u130d",DescriptionEnglish:"Jar"},{Id:"18",Description:"\u1232\u120a\u1295\u12f0\u122d",DescriptionEnglish:"Cylinder"},{Id:"19",Description:"\u1260\u1241\u1325\u122d",DescriptionEnglish:"Number"},{Id:"20",Description:"\u1260\u1348\u1228\u1231\u120b",DescriptionEnglish:"Feresula"},{Id:"21",Description:"\u1260\u1230\u12d3\u1275",DescriptionEnglish:"Hour"},{Id:"22",Description:"\u1260\u12cb\u1275",DescriptionEnglish:"Wat"},{Id:"23",Description:"\u120c\u120b",DescriptionEnglish:"Other"}],I=[{Id:"44450",Description:"Drafted",DescriptionEnglish:"Drafted"},{Id:"44446",Description:"Submitted",DescriptionEnglish:"Submitted"},{Id:"44447",Description:"Approved",DescriptionEnglish:"Approved"},{Id:"44448",Description:"Pending",DescriptionEnglish:"Pending"},{Id:"44449",Description:"Completed",DescriptionEnglish:"Completed"}],g=[{Id:1,Description:"\u1270\u1348\u1245\u12f7\u120d",DescriptionEnglish:"Permitted"},{Id:2,Description:"\u12cd\u12f5\u1245 \u1270\u12f0\u122d\u1313\u120d",DescriptionEnglish:"Not Permitted"}],u=[{Id:1,Description:"\u12a0\u12f2\u1235 \u12e8\u12a2\u1295\u1268\u1235\u1275\u1218\u1295\u1275 \u1348\u1243\u12f5",DescriptionEnglish:"New Investment Permit"},{Id:2,Description:"\u12e8\u12a2\u1295\u1268\u1235\u1275\u1218\u1295\u1275 \u1348\u1243\u12f5 \u12a5\u12f5\u1233\u1275",DescriptionEnglish:"Renewal of IP"},{Id:3,Description:"\u12e8\u12a2\u1295\u1268\u1235\u1275\u1218\u1295\u1275 \u1348\u1243\u12f5 \u1235\u1228\u12db",DescriptionEnglish:"Cancellation of IP"},{Id:4,Description:"\u12e8\u12a2\u1295\u1268\u1235\u1275\u1218\u1295\u1275 \u1348\u1243\u12f5 \u121b\u1235\u134b\u134a\u12eb",DescriptionEnglish:"IP Expansion"},{Id:5,Description:"\u12e8\u12a2\u1295\u1268\u1235\u1275\u1218\u1295\u1275 \u1348\u1243\u12f5 \u121d\u1275\u12ad",DescriptionEnglish:"Substitute IP"},{Id:6,Description:"\u12e8\u1355\u122e\u1300\u12ad\u1275 \u1208\u12cd\u1325",DescriptionEnglish:"Amendment of IP"},{Id:7,Description:"Incentive Tax holiday",DescriptionEnglish:"Tax Holiday "},{Id:8,Description:"Incentive Duty Free",DescriptionEnglish:"Duty Free"},{Id:9,Description:"Incentive Construction Material",DescriptionEnglish:"Construction Material"},{Id:10,Description:"Raw Material",DescriptionEnglish:"Raw Material"},{Id:11,Description:"Business License",DescriptionEnglish:"Business License"}],h=[{Id:1,Description:"\u12ad\u1275\u1275\u120d",DescriptionEnglish:"After care"},{Id:2,Description:"\u1295\u130d\u12f5  \u121d\u12dd\u1308\u1263",DescriptionEnglish:"Commercial  Registration"},{Id:3,Description:"\u12e8\u12a2\u1295\u1268\u1235\u1275\u1218\u1295\u1275 \u12a0\u1308\u120d\u130d\u120e\u1275",DescriptionEnglish:"Investment Service"},{Id:4,Description:"\u121b\u1260\u1228\u1273\u127b  \u12a0\u1308\u120d\u130d\u120e\u1275",DescriptionEnglish:"Incentive Service"}]},zCir:function(i,n,e){"use strict";e.r(n),e.d(n,"ProductModuleNgFactory",function(){return bi});var t=e("CcnG"),r=e("Jd7M"),o=e("t68o"),p=e("zbXB"),s=e("NcP4"),c=e("xYTU"),d=e("2eEv"),D=e("5/Ol"),m=e("xrCh"),a=e("adoU"),l=e("Ip0R"),I=e("OzfB"),g=e("gIcY"),u=e("t/Na"),h=e("eDkP"),E=e("Fzqc"),f=e("4tE/"),b=e("M2Lx"),P=e("Wf4p"),v=e("o3x0"),O=e("jQLj"),C=e("mVsa"),y=e("dWZg"),j=e("uGex"),M=e("v9Dh"),R=e("4epT"),_=e("ZYjt"),A=e("vARd"),w=e("lLAP"),F=e("vGXY"),L=e("OkvK"),T=e("wmQ5"),N=e("21Lb"),S=e("hUWP"),B=e("V9q+"),k=e("4c35"),q=e("qAlS"),x=e("UodH"),U=e("u7R8"),Y=e("FVSy"),Z=e("de3e"),z=e("/dO6"),G=e("YhbO"),K=e("jlZm"),V=e("r43C"),X=e("SMsm"),W=e("/VYK"),J=e("seP3"),H=e("b716"),Q=e("LC5p"),$=e("0/Q6"),ii=e("Z+uX"),ni=e("Blfk"),ei=e("9It4"),ti=e("Nsh5"),ri=e("w+lc"),oi=e("kWGw"),pi=e("y4qS"),si=e("BHnd"),ci=e("La40"),di=e("8mMr"),Di=e("Lwpp"),mi=e("6Wmm"),ai=e("Bw/2"),li=e("A7o+"),Ii=e("ttZ8"),gi=e("ZYCi"),ui=e("BTDi"),hi=e("YSh2"),Ei=e("qweP"),fi=e("VUIX"),bi=t["\u0275cmf"](r.a,[],function(i){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,p.b,p.a,s.a,c.a,c.b,d.a,D.a,m.a,a.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,l.NgLocalization,l.NgLocaleLocalization,[t.LOCALE_ID,[2,l["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](5120,I.d,I.e,[[3,I.d],[2,I.c],[2,I.k],[2,I.b]]),t["\u0275mpd"](5120,I.h,I.v,[[3,I.h],I.d]),t["\u0275mpd"](5120,I.m,I.w,[[3,I.m],t.NgZone,t.PLATFORM_ID,l.DOCUMENT]),t["\u0275mpd"](4608,I.n,I.n,[I.h,I.m]),t["\u0275mpd"](5120,I.p,I.o,[[3,I.p],I.m,I.h]),t["\u0275mpd"](5120,I.t,I.r,[[3,I.t]]),t["\u0275mpd"](4608,I.s,I.s,[[2,I.t],[2,I.q],t.PLATFORM_ID,[2,I.l]]),t["\u0275mpd"](5120,t.APP_BOOTSTRAP_LISTENER,function(i,n){return[I.u(i,n)]},[l.DOCUMENT,t.PLATFORM_ID]),t["\u0275mpd"](4608,g["\u0275angular_packages_forms_forms_i"],g["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,g.FormBuilder,g.FormBuilder,[]),t["\u0275mpd"](4608,u.m,u.s,[l.DOCUMENT,t.PLATFORM_ID,u.q]),t["\u0275mpd"](4608,u.t,u.t,[u.m,u.r]),t["\u0275mpd"](5120,u.a,function(i){return[i]},[u.t]),t["\u0275mpd"](4608,u.p,u.p,[]),t["\u0275mpd"](6144,u.n,null,[u.p]),t["\u0275mpd"](4608,u.l,u.l,[u.n]),t["\u0275mpd"](6144,u.b,null,[u.l]),t["\u0275mpd"](4608,u.g,u.o,[u.b,t.Injector]),t["\u0275mpd"](4608,u.c,u.c,[u.g]),t["\u0275mpd"](4608,h.c,h.c,[h.i,h.e,t.ComponentFactoryResolver,h.h,h.f,t.Injector,t.NgZone,l.DOCUMENT,E.b]),t["\u0275mpd"](5120,h.j,h.k,[h.c]),t["\u0275mpd"](5120,f.a,f.b,[h.c]),t["\u0275mpd"](4608,b.c,b.c,[]),t["\u0275mpd"](4608,P.d,P.d,[]),t["\u0275mpd"](5120,v.c,v.d,[h.c]),t["\u0275mpd"](4608,v.e,v.e,[h.c,t.Injector,[2,l.Location],[2,v.b],v.c,[3,v.e],h.e]),t["\u0275mpd"](4608,O.i,O.i,[]),t["\u0275mpd"](5120,O.a,O.b,[h.c]),t["\u0275mpd"](5120,C.b,C.g,[h.c]),t["\u0275mpd"](4608,P.c,P.z,[[2,P.h],y.a]),t["\u0275mpd"](5120,j.a,j.b,[h.c]),t["\u0275mpd"](5120,M.b,M.c,[h.c]),t["\u0275mpd"](5120,R.c,R.a,[[3,R.c]]),t["\u0275mpd"](4608,_.f,P.e,[[2,P.i],[2,P.n]]),t["\u0275mpd"](4608,A.c,A.c,[h.c,w.i,t.Injector,F.a,[3,A.c],A.b]),t["\u0275mpd"](5120,L.d,L.a,[[3,L.d]]),t["\u0275mpd"](4608,T.a,T.a,[]),t["\u0275mpd"](1073742336,l.CommonModule,l.CommonModule,[]),t["\u0275mpd"](1073742336,I.j,I.j,[]),t["\u0275mpd"](1073742336,E.a,E.a,[]),t["\u0275mpd"](1073742336,N.d,N.d,[]),t["\u0275mpd"](1073742336,S.a,S.a,[]),t["\u0275mpd"](1073742336,B.a,B.a,[[2,I.q],t.PLATFORM_ID]),t["\u0275mpd"](1073742336,g["\u0275angular_packages_forms_forms_bb"],g["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,g.FormsModule,g.FormsModule,[]),t["\u0275mpd"](1073742336,g.ReactiveFormsModule,g.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,u.e,u.e,[]),t["\u0275mpd"](1073742336,u.d,u.d,[]),t["\u0275mpd"](1073742336,P.n,P.n,[[2,P.f]]),t["\u0275mpd"](1073742336,y.b,y.b,[]),t["\u0275mpd"](1073742336,P.y,P.y,[]),t["\u0275mpd"](1073742336,P.w,P.w,[]),t["\u0275mpd"](1073742336,P.t,P.t,[]),t["\u0275mpd"](1073742336,k.g,k.g,[]),t["\u0275mpd"](1073742336,q.b,q.b,[]),t["\u0275mpd"](1073742336,h.g,h.g,[]),t["\u0275mpd"](1073742336,f.c,f.c,[]),t["\u0275mpd"](1073742336,x.c,x.c,[]),t["\u0275mpd"](1073742336,U.a,U.a,[]),t["\u0275mpd"](1073742336,Y.f,Y.f,[]),t["\u0275mpd"](1073742336,b.d,b.d,[]),t["\u0275mpd"](1073742336,Z.c,Z.c,[]),t["\u0275mpd"](1073742336,z.b,z.b,[]),t["\u0275mpd"](1073742336,v.j,v.j,[]),t["\u0275mpd"](1073742336,w.a,w.a,[]),t["\u0275mpd"](1073742336,O.j,O.j,[]),t["\u0275mpd"](1073742336,G.c,G.c,[]),t["\u0275mpd"](1073742336,K.b,K.b,[]),t["\u0275mpd"](1073742336,P.o,P.o,[]),t["\u0275mpd"](1073742336,V.b,V.b,[]),t["\u0275mpd"](1073742336,X.b,X.b,[]),t["\u0275mpd"](1073742336,W.c,W.c,[]),t["\u0275mpd"](1073742336,J.e,J.e,[]),t["\u0275mpd"](1073742336,H.c,H.c,[]),t["\u0275mpd"](1073742336,Q.b,Q.b,[]),t["\u0275mpd"](1073742336,$.c,$.c,[]),t["\u0275mpd"](1073742336,C.e,C.e,[]),t["\u0275mpd"](1073742336,P.A,P.A,[]),t["\u0275mpd"](1073742336,P.q,P.q,[]),t["\u0275mpd"](1073742336,j.d,j.d,[]),t["\u0275mpd"](1073742336,M.e,M.e,[]),t["\u0275mpd"](1073742336,R.d,R.d,[]),t["\u0275mpd"](1073742336,ii.b,ii.b,[]),t["\u0275mpd"](1073742336,ni.c,ni.c,[]),t["\u0275mpd"](1073742336,ei.c,ei.c,[]),t["\u0275mpd"](1073742336,ti.h,ti.h,[]),t["\u0275mpd"](1073742336,ri.a,ri.a,[]),t["\u0275mpd"](1073742336,oi.b,oi.b,[]),t["\u0275mpd"](1073742336,A.f,A.f,[]),t["\u0275mpd"](1073742336,L.e,L.e,[]),t["\u0275mpd"](1073742336,pi.p,pi.p,[]),t["\u0275mpd"](1073742336,si.m,si.m,[]),t["\u0275mpd"](1073742336,ci.j,ci.j,[]),t["\u0275mpd"](1073742336,di.b,di.b,[]),t["\u0275mpd"](1073742336,Di.d,Di.d,[]),t["\u0275mpd"](1073742336,T.b,T.b,[]),t["\u0275mpd"](1073742336,mi.b,mi.b,[]),t["\u0275mpd"](1073742336,ai.a,ai.a,[]),t["\u0275mpd"](1073742336,li.h,li.h,[]),t["\u0275mpd"](1073742336,Ii.a,Ii.a,[]),t["\u0275mpd"](1073742336,gi.s,gi.s,[[2,gi.x],[2,gi.o]]),t["\u0275mpd"](1073742336,ui.a,ui.a,[]),t["\u0275mpd"](1073742336,r.a,r.a,[]),t["\u0275mpd"](256,u.q,"XSRF-TOKEN",[]),t["\u0275mpd"](256,u.r,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,z.a,{separatorKeyCodes:[hi.f]},[]),t["\u0275mpd"](256,P.g,P.k,[]),t["\u0275mpd"](1024,gi.m,function(){return[[{path:"",component:Ei.a},{path:":id",component:fi.a}]]},[])])})}}]);