(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"JHo+":function(l,n,a){"use strict";a.r(n);var t=a("CcnG"),u=function(){},e=a("t68o"),i=a("zbXB"),o=a("NcP4"),c=a("xYTU"),r=a("2eEv"),b=a("5/Ol"),s=a("+euy"),d=a("vJ90"),p=a("p4hA"),m=a("ZYCi"),f=a("0j3R"),g=a("cWQe"),h=a("f5ms"),S=a("t5SW"),v=a("gIcY"),R=a("vARd"),I=a("7r4+"),y=a("mqR9"),k=a("SZbH"),_=a("hxlX"),x=a("iG2X"),C=a("Rlre"),j=a("La40"),w=a("lzlj"),A=a("FVSy"),L=a("bujt"),F=a("UodH"),P=a("dWZg"),O=a("lLAP"),q=a("wFw1"),J=a("Ip0R"),M=a("PfRI"),N=a("ngzk"),B=a("o3x0"),D=a("r+1v"),T=a("nSco"),E=a("0mNP"),V=a("wtVs"),z=a("x05g"),U=a("MlvX"),Z=a("Wf4p"),K=a("seP3"),X=a("Mr+X"),Y=a("SMsm"),G=a("TtEo"),W=a("LC5p"),Q=a("21Lb"),H=a("OzfB"),$=a("Fzqc"),ll=a("dJrM"),nl=a("Azqq"),al=a("uGex"),tl=a("qAlS"),ul=a("b716"),el=a("/VYK"),il=a("mrSG"),ol=a("ByIy"),cl=a("9Z1F"),rl=a("t/Na"),bl=function(l){function n(n,a,t){var u=l.call(this,n,a.urls.url("ProjectSubstitutes"),t)||this;return u.http=n,u.appConfig=a,u.errMsg=t,u}return Object(il.c)(n,l),n.prototype.getSubstituteByServiceApplicationId=function(l){return this.httpClient.get(this.appConfig.urls.url("ServiceApplicationSubstitute")+"/"+l).pipe(Object(cl.a)(this.errMsg.parseObservableResponseError))},n.ngInjectableDef=t.V({factory:function(){return new n(t.Z(rl.c),t.Z(E.a),t.Z(y.a))},token:n,providedIn:"root"}),n}(ol.a),sl=function(){function l(l,n,a,t,u,e,i,o,c,r){this.fb=l,this.projetServices=n,this.dataSharing=a,this.accountService=t,this.snackbar=u,this.route=e,this.errMsg=i,this.toast=o,this.toastr=c,this.substituteService=r,this.loading=!1,this.CancellationReasonData=[{type:"Lose"}],this.formErrors={Reason:"Please select the reason for substitution!"}}return l.prototype.ngOnInit=function(){this.ServiceId=this.route.snapshot.params.ServiceId,this.InvestorId=this.route.snapshot.params.InvestorId,this.ProjectId=this.route.snapshot.params.ProjectId,this.ServiceApplicationId=this.route.snapshot.params.ServiceApplicationId,this.initForm(),this.getAllProjects(),this.isInvestor=this.accountService.getUserType(),this.ServiceApplicationId>1&&this.getServiceApplicationSubstitute()},l.prototype.initForm=function(){this.projectsubstituteForm=this.fb.group({ProjectId:new v.f(this.ProjectId),ServiceId:this.ServiceId,Reason:["",v.x.required],SubstituteRemark:new v.f,InvestorId:this.InvestorId,ServiceApplicationId:this.ServiceApplicationId})},l.prototype.onSubmit=function(){var l=this;console.log("Submitted!"),this.substituteService.create(this.projectsubstituteForm.value).subscribe(function(n){l.dataSharing.renewalIndex.next(2),l.toast.success(l.isInvestor?"Request for substitute  has been sent":"Request for substitute  has been Approved","success!!")})},l.prototype.getAllProjects=function(){var l=this;this.projetServices.getProjectOnlyByInvestorId(this.InvestorId).subscribe(function(n){l.projectList=n})},l.prototype.notification=function(l){this.loading=!1,this.toast.success(" Succesfully "+l+" Data.!","success!!"),this.snackbar.open(" Succesfully "+l+" Data.!","Close",{duration:3e3})},l.prototype.ngAfterContentChecked=function(){},l.prototype.getServiceApplicationSubstitute=function(){var l=this;this.substituteService.getSubstituteByServiceApplicationId(this.ServiceApplicationId).subscribe(function(n){l.projectsubstituteForm.patchValue(n.ProjectSubstitute[0]),null!=n.ProjectSubstitute[0]&&(l.editMode=!0,localStorage.setItem("ProjectSubstituteId",n.ProjectSubstitute[0].ProjectSubstituteId.toString()),console.log(n.ProjectSubstitute[0].ProjectSubstituteId.toString()))},function(n){return l.errMsg.getError(n)})},l.prototype.approve=function(){var l=this,n=this.mapApproval(this.projectsubstituteForm.value),a=localStorage.getItem("ProjectSubstituteId").toString();console.log("Substitute ID="+a),this.substituteService.update(n,a).subscribe(function(n){console.log(n),l.toastr.success("Substitution successfully Approved.","Success")})},l.prototype.mapApproval=function(l){return l.IsApproved=!0,l},l}(),dl=t.Qa({encapsulation:0,styles:[[""]],data:{}});function pl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,n,a){var u=!0;return"click"===n&&(u=!1!==t.cb(l,1)._selectViaInteraction()&&u),"keydown"===n&&(u=!1!==t.cb(l,1)._handleKeydown(a)&&u),u},U.c,U.a)),t.Ra(1,8568832,[[8,4]],0,Z.s,[t.k,t.h,[2,Z.l],[2,Z.r]],{value:[0,"value"]},null),(l()(),t.kb(2,0,[" "," "]))],function(l,n){l(n,1,0,n.context.index)},function(l,n){l(n,0,0,t.cb(n,1)._getTabIndex(),t.cb(n,1).selected,t.cb(n,1).multiple,t.cb(n,1).active,t.cb(n,1).id,t.cb(n,1).selected.toString(),t.cb(n,1).disabled.toString(),t.cb(n,1).disabled),l(n,2,0,n.context.$implicit.type)})}function ml(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,"mat-error",[["align","start"],["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),t.Ra(1,16384,[[4,4]],0,K.b,[],null,null),(l()(),t.kb(2,null,["",""]))],null,function(l,n){var a=n.component;l(n,0,0,t.cb(n,1).id),l(n,2,0,a.formErrors.Reason)})}function fl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,5,"button",[["color","primary"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,L.d,L.b)),t.Ra(1,180224,null,0,F.b,[t.k,P.a,O.g,[2,q.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t.Sa(2,0,null,0,2,"mat-icon",[["class","mat-18 mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,X.b,X.a)),t.Ra(3,638976,null,0,Y.a,[t.k,Y.c,[8,null]],null,null),(l()(),t.kb(-1,0,["done"])),(l()(),t.kb(5,0,[" "," "]))],function(l,n){l(n,1,0,!n.component.projectsubstituteForm.valid,"primary"),l(n,3,0)},function(l,n){var a=n.component;l(n,0,0,t.cb(n,1).disabled||null,"NoopAnimations"===t.cb(n,1)._animationMode),l(n,2,0,t.cb(n,3).inline),l(n,5,0,a.editMode?"Update":"Save")})}function gl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,6,"button",[["color","primary"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var t=!0;return"click"===n&&(t=!1!==l.component.approve()&&t),t},L.d,L.b)),t.Ra(1,180224,null,0,F.b,[t.k,P.a,O.g,[2,q.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),t.Sa(2,0,null,0,2,"mat-icon",[["class","mat-18 mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,X.b,X.a)),t.Ra(3,638976,null,0,Y.a,[t.k,Y.c,[8,null]],null,null),(l()(),t.kb(-1,0,["done"])),(l()(),t.Sa(5,0,null,0,1,"span",[["class","agree"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Approve"]))],function(l,n){l(n,1,0,!n.component.projectsubstituteForm.valid,"primary"),l(n,3,0)},function(l,n){l(n,0,0,t.cb(n,1).disabled||null,"NoopAnimations"===t.cb(n,1)._animationMode),l(n,2,0,t.cb(n,3).inline)})}function hl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,"div",[["class","loadme-circleBounce"]],null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,0,"div",[["class","loadme-circleBounce1"]],null,null,null,null,null)),(l()(),t.Sa(2,0,null,null,0,"div",[["class","loadme-circleBounce2"]],null,null,null,null,null))],null,null)}function Sl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,69,"form",[["novalidate",""],["style","padding: 2px"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,a){var u=!0,e=l.component;return"submit"===n&&(u=!1!==t.cb(l,2).onSubmit(a)&&u),"reset"===n&&(u=!1!==t.cb(l,2).onReset()&&u),"ngSubmit"===n&&(u=!1!==e.onSubmit()&&u),u},null,null)),t.Ra(1,16384,null,0,v.A,[],null,null),t.Ra(2,540672,null,0,v.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.hb(2048,null,v.c,null,[v.i]),t.Ra(4,16384,null,0,v.r,[[4,v.c]],null,null),(l()(),t.Sa(5,0,null,null,64,"mat-card",[["class","mat-card"]],null,null,null,w.d,w.a)),t.Ra(6,49152,null,0,A.a,[],null,null),(l()(),t.Sa(7,0,null,0,4,"mat-card-subtitle",[["class","sub-title mat-card-subtitle"]],null,null,null,null,null)),t.Ra(8,16384,null,0,A.g,[],null,null),(l()(),t.kb(-1,null,[" Project Substitute "])),(l()(),t.Sa(10,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-inset",null]],null,null,G.b,G.a)),t.Ra(11,49152,null,0,W.a,[],null,null),(l()(),t.Sa(12,0,null,0,57,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),t.Ra(13,16384,null,0,A.c,[],null,null),(l()(),t.Sa(14,0,null,null,55,"div",[["class","content"],["fxLayout","row wrap"],["fxLayout.lt-sm","column"],["fxLayoutAlign","start center"],["fxLayoutGap","2em"]],null,null,null,null,null)),t.Ra(15,737280,null,0,Q.g,[H.n,t.k,H.s],{layout:[0,"layout"],layoutLtSm:[1,"layoutLtSm"]},null),t.Ra(16,1785856,null,0,Q.h,[H.n,t.k,[6,Q.g],t.A,$.b,H.s],{gap:[0,"gap"]},null),t.Ra(17,737280,null,0,Q.f,[H.n,t.k,[6,Q.g],H.s],{align:[0,"align"]},null),(l()(),t.Sa(18,0,null,null,27,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.Ra(19,737280,null,0,Q.b,[H.n,t.k,[3,Q.g],H.s,[2,H.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(20,0,null,null,25,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,ll.b,ll.a)),t.Ra(21,7389184,null,7,K.c,[t.k,t.h,[2,Z.j],[2,$.b],[2,K.a],P.a,t.A,[2,q.a]],null,null),t.ib(335544320,1,{_control:0}),t.ib(335544320,2,{_placeholderChild:0}),t.ib(335544320,3,{_labelChild:0}),t.ib(603979776,4,{_errorChildren:1}),t.ib(603979776,5,{_hintChildren:1}),t.ib(603979776,6,{_prefixChildren:1}),t.ib(603979776,7,{_suffixChildren:1}),(l()(),t.Sa(29,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.Ra(30,16384,[[3,4]],0,K.f,[],null,null),(l()(),t.kb(-1,null,["Substitute Reason"])),(l()(),t.Sa(32,0,null,1,11,"mat-select",[["class","mat-select"],["formControlName","Reason"],["role","listbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null]],[[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,a){var u=!0;return"keydown"===n&&(u=!1!==t.cb(l,37)._handleKeydown(a)&&u),"focus"===n&&(u=!1!==t.cb(l,37)._onFocus()&&u),"blur"===n&&(u=!1!==t.cb(l,37)._onBlur()&&u),u},nl.b,nl.a)),t.hb(6144,null,Z.l,null,[al.c]),t.Ra(34,671744,null,0,v.g,[[3,v.c],[8,null],[8,null],[8,null],[2,v.C]],{name:[0,"name"]},null),t.hb(2048,null,v.p,null,[v.g]),t.Ra(36,16384,null,0,v.q,[[4,v.p]],null,null),t.Ra(37,2080768,null,3,al.c,[tl.e,t.h,t.A,Z.d,t.k,[2,$.b],[2,v.s],[2,v.i],[2,K.c],[6,v.p],[8,null],al.a],null,null),t.ib(603979776,8,{options:1}),t.ib(603979776,9,{optionGroups:1}),t.ib(335544320,10,{customTrigger:0}),t.hb(2048,[[1,4]],K.d,null,[al.c]),(l()(),t.Ja(16777216,null,1,1,null,pl)),t.Ra(43,802816,null,0,J.l,[t.R,t.O,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ja(16777216,null,5,1,null,ml)),t.Ra(45,16384,null,0,J.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(46,0,null,null,18,"div",[["class","blocks"],["fxFlex","50"]],null,null,null,null,null)),t.Ra(47,737280,null,0,Q.b,[H.n,t.k,[3,Q.g],H.s,[2,H.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(48,0,null,null,16,"mat-form-field",[["class","full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,ll.b,ll.a)),t.Ra(49,7389184,null,7,K.c,[t.k,t.h,[2,Z.j],[2,$.b],[2,K.a],P.a,t.A,[2,q.a]],null,null),t.ib(335544320,11,{_control:0}),t.ib(335544320,12,{_placeholderChild:0}),t.ib(335544320,13,{_labelChild:0}),t.ib(603979776,14,{_errorChildren:1}),t.ib(603979776,15,{_hintChildren:1}),t.ib(603979776,16,{_prefixChildren:1}),t.ib(603979776,17,{_suffixChildren:1}),(l()(),t.Sa(57,0,null,1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","SubstituteRemark"],["matInput",""],["placeholder","Remark"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(l,n,a){var u=!0;return"input"===n&&(u=!1!==t.cb(l,58)._handleInput(a.target.value)&&u),"blur"===n&&(u=!1!==t.cb(l,58).onTouched()&&u),"compositionstart"===n&&(u=!1!==t.cb(l,58)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t.cb(l,58)._compositionEnd(a.target.value)&&u),"blur"===n&&(u=!1!==t.cb(l,63)._focusChanged(!1)&&u),"focus"===n&&(u=!1!==t.cb(l,63)._focusChanged(!0)&&u),"input"===n&&(u=!1!==t.cb(l,63)._onInput()&&u),u},null,null)),t.Ra(58,16384,null,0,v.d,[t.F,t.k,[2,v.a]],null,null),t.hb(1024,null,v.o,function(l){return[l]},[v.d]),t.Ra(60,671744,null,0,v.g,[[3,v.c],[8,null],[8,null],[6,v.o],[2,v.C]],{name:[0,"name"]},null),t.hb(2048,null,v.p,null,[v.g]),t.Ra(62,16384,null,0,v.q,[[4,v.p]],null,null),t.Ra(63,999424,null,0,ul.b,[t.k,P.a,[6,v.p],[2,v.s],[2,v.i],Z.d,[8,null],el.a,t.A],{placeholder:[0,"placeholder"]},null),t.hb(2048,[[11,4]],K.d,null,[ul.b]),(l()(),t.Sa(65,0,null,null,4,"div",[["class","blocks"]],null,null,null,null,null)),(l()(),t.Ja(16777216,null,null,1,null,fl)),t.Ra(67,16384,null,0,J.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Ja(16777216,null,null,1,null,gl)),t.Ra(69,16384,null,0,J.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Ja(16777216,null,null,1,null,hl)),t.Ra(71,16384,null,0,J.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var a=n.component;l(n,2,0,a.projectsubstituteForm),l(n,15,0,"row wrap","column"),l(n,16,0,"2em"),l(n,17,0,"start center"),l(n,19,0,""),l(n,34,0,"Reason"),l(n,37,0),l(n,43,0,a.CancellationReasonData),l(n,45,0,a.formErrors.Reason),l(n,47,0,"50"),l(n,60,0,"SubstituteRemark"),l(n,63,0,"Remark"),l(n,67,0,a.isInvestor),l(n,69,0,!a.isInvestor),l(n,71,0,a.loading)},function(l,n){l(n,0,0,t.cb(n,4).ngClassUntouched,t.cb(n,4).ngClassTouched,t.cb(n,4).ngClassPristine,t.cb(n,4).ngClassDirty,t.cb(n,4).ngClassValid,t.cb(n,4).ngClassInvalid,t.cb(n,4).ngClassPending),l(n,10,0,t.cb(n,11).vertical?"vertical":"horizontal",t.cb(n,11).vertical,t.cb(n,11).inset),l(n,20,1,["standard"==t.cb(n,21).appearance,"fill"==t.cb(n,21).appearance,"outline"==t.cb(n,21).appearance,"legacy"==t.cb(n,21).appearance,t.cb(n,21)._control.errorState,t.cb(n,21)._canLabelFloat,t.cb(n,21)._shouldLabelFloat(),t.cb(n,21)._hideControlPlaceholder(),t.cb(n,21)._control.disabled,t.cb(n,21)._control.autofilled,t.cb(n,21)._control.focused,"accent"==t.cb(n,21).color,"warn"==t.cb(n,21).color,t.cb(n,21)._shouldForward("untouched"),t.cb(n,21)._shouldForward("touched"),t.cb(n,21)._shouldForward("pristine"),t.cb(n,21)._shouldForward("dirty"),t.cb(n,21)._shouldForward("valid"),t.cb(n,21)._shouldForward("invalid"),t.cb(n,21)._shouldForward("pending"),!t.cb(n,21)._animationsEnabled]),l(n,32,1,[t.cb(n,36).ngClassUntouched,t.cb(n,36).ngClassTouched,t.cb(n,36).ngClassPristine,t.cb(n,36).ngClassDirty,t.cb(n,36).ngClassValid,t.cb(n,36).ngClassInvalid,t.cb(n,36).ngClassPending,t.cb(n,37).id,t.cb(n,37).tabIndex,t.cb(n,37)._ariaLabel,t.cb(n,37).ariaLabelledby,t.cb(n,37).required.toString(),t.cb(n,37).disabled.toString(),t.cb(n,37).errorState,t.cb(n,37).panelOpen?t.cb(n,37)._optionIds:null,t.cb(n,37).multiple,t.cb(n,37)._ariaDescribedby||null,t.cb(n,37)._getAriaActiveDescendant(),t.cb(n,37).disabled,t.cb(n,37).errorState,t.cb(n,37).required]),l(n,48,1,["standard"==t.cb(n,49).appearance,"fill"==t.cb(n,49).appearance,"outline"==t.cb(n,49).appearance,"legacy"==t.cb(n,49).appearance,t.cb(n,49)._control.errorState,t.cb(n,49)._canLabelFloat,t.cb(n,49)._shouldLabelFloat(),t.cb(n,49)._hideControlPlaceholder(),t.cb(n,49)._control.disabled,t.cb(n,49)._control.autofilled,t.cb(n,49)._control.focused,"accent"==t.cb(n,49).color,"warn"==t.cb(n,49).color,t.cb(n,49)._shouldForward("untouched"),t.cb(n,49)._shouldForward("touched"),t.cb(n,49)._shouldForward("pristine"),t.cb(n,49)._shouldForward("dirty"),t.cb(n,49)._shouldForward("valid"),t.cb(n,49)._shouldForward("invalid"),t.cb(n,49)._shouldForward("pending"),!t.cb(n,49)._animationsEnabled]),l(n,57,1,[t.cb(n,62).ngClassUntouched,t.cb(n,62).ngClassTouched,t.cb(n,62).ngClassPristine,t.cb(n,62).ngClassDirty,t.cb(n,62).ngClassValid,t.cb(n,62).ngClassInvalid,t.cb(n,62).ngClassPending,t.cb(n,63)._isServer,t.cb(n,63).id,t.cb(n,63).placeholder,t.cb(n,63).disabled,t.cb(n,63).required,t.cb(n,63).readonly,t.cb(n,63)._ariaDescribedby||null,t.cb(n,63).errorState,t.cb(n,63).required.toString()])})}var vl=a("FyNw"),Rl=a("H/eM"),Il=a("ii4k"),yl=a("WW+7"),kl=a("I0cO"),_l=a("nNRk"),xl=a("NrRt"),Cl=a("wOkt"),jl=a("SOmk"),wl=a("p6Vt"),Al=a("PMPD"),Ll=a("Pmkz"),Fl=a("dAh3"),Pl=a("Ae9k"),Ol=a("6Qz0"),ql=a("DMQS"),Jl=a("v/pT"),Ml=a("OPEb"),Nl=a("5MRH"),Bl=a("KY8O"),Dl=a("iY7m"),Tl=function(){function l(l,n,a,t){this.accountService=l,this.dialog=n,this.route=a,this.dataSharing=t}return l.prototype.ngOnInit=function(){var l=this;this.getUserType(),this.subscription=this.dataSharing.renewalIndex.subscribe(function(n){l.renewalIndex=n}),this.title=localStorage.getItem("title"),this.projectName=localStorage.getItem("projectName"),this.investorName=localStorage.getItem("investorName"),this.ServiceApplicationId=this.route.snapshot.params.ServiceApplicationId,this.userName=this.accountService.currentUser.FullName},l.prototype.getUserType=function(){this.isInvestor=this.accountService.getUserType()},l.prototype.addMessage=function(){var l=new B.g;l.data={ServiceApplicationId:this.ServiceApplicationId,title:"Angular For Beginners"},this.dialog.open(Dl.a,l)},l}(),El=t.Qa({encapsulation:0,styles:[[""]],data:{}});function Vl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"app-service-info",[],null,null,null,s.c,s.a)),t.Ra(1,114688,null,0,d.a,[p.a,m.o,f.a,g.a,m.a],null,null)],function(l,n){l(n,1,0)},null)}function zl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"app-aftercare-recommendation",[],null,null,null,h.b,h.a)),t.Ra(1,114688,null,0,S.a,[v.e,R.c,I.a,g.a,f.a,m.a,y.a,k.k,_.a,x.a],null,null)],function(l,n){l(n,1,0)},null)}function Ul(l){return t.mb(0,[(l()(),t.Sa(0,16777216,null,null,5,"mat-tab",[["label","After Care Recommendation"]],null,null,null,C.d,C.a)),t.Ra(1,770048,[[1,4]],2,j.b,[t.R],{textLabel:[0,"textLabel"]},null),t.ib(335544320,4,{templateLabel:0}),t.ib(335544320,5,{_explicitContent:0}),(l()(),t.Ja(0,[[5,2]],0,1,null,zl)),t.Ra(5,16384,null,0,j.e,[t.O],null,null),(l()(),t.Ja(0,null,null,0))],function(l,n){l(n,1,0,"After Care Recommendation")},null)}function Zl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,8,"mat-card",[["class","margin-2 simple-card mat-card"]],null,null,null,w.d,w.a)),t.Ra(1,49152,null,0,A.a,[],null,null),(l()(),t.Sa(2,0,null,0,6,"mat-card-header",[["class","mat-card-header"]],null,null,null,w.c,w.b)),t.Ra(3,49152,null,0,A.e,[],null,null),(l()(),t.Sa(4,0,null,1,1,"mat-card-subtitle",[["class","sub-title mat-card-subtitle"]],null,null,null,null,null)),t.Ra(5,16384,null,0,A.g,[],null,null),(l()(),t.Sa(6,0,null,2,2,"button",[["class","margin-10 certificate-title"],["color","primary"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var t=!0;return"click"===n&&(t=!1!==l.component.addMessage()&&t),t},L.d,L.b)),t.Ra(7,180224,null,0,F.b,[t.k,P.a,O.g,[2,q.a]],{color:[0,"color"]},null),(l()(),t.kb(-1,0,[" Add Message "]))],function(l,n){l(n,7,0,"primary")},function(l,n){l(n,6,0,t.cb(n,7).disabled||null,"NoopAnimations"===t.cb(n,7)._animationMode)})}function Kl(l){return t.mb(0,[(l()(),t.Ja(16777216,null,null,1,null,Zl)),t.Ra(1,16384,null,0,J.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(2,0,null,null,1,"app-service-prerequisite",[],null,null,null,M.b,M.a)),t.Ra(3,2211840,null,0,N.a,[R.c,B.e,D.a,k.k,y.a,m.a,T.a,E.a,f.a,V.a,p.a,z.a,v.e],null,null)],function(l,n){l(n,1,0,!n.component.isInvestor),l(n,3,0)},null)}function Xl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"app-project-substitute",[],null,null,null,Sl,dl)),t.Ra(1,2211840,null,0,sl,[v.e,g.a,f.a,I.a,R.c,m.a,y.a,k.k,k.k,bl],null,null)],function(l,n){l(n,1,0)},null)}function Yl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"app-payment",[],null,null,null,vl.b,vl.a)),t.Ra(1,12697600,null,0,Rl.a,[Il.a,v.e,m.a,yl.a,I.a,kl.a,_l.a],null,null)],function(l,n){l(n,1,0)},null)}function Gl(l){return t.mb(0,[(l()(),t.Sa(0,16777216,null,null,5,"mat-tab",[["label","Payment"]],null,null,null,C.d,C.a)),t.Ra(1,770048,[[1,4]],2,j.b,[t.R],{textLabel:[0,"textLabel"]},null),t.ib(335544320,10,{templateLabel:0}),t.ib(335544320,11,{_explicitContent:0}),(l()(),t.Ja(0,[[11,2]],0,1,null,Yl)),t.Ra(5,16384,null,0,j.e,[t.O],null,null),(l()(),t.Ja(0,null,null,0))],function(l,n){l(n,1,0,"Payment")},null)}function Wl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"app-certificate",[],null,null,null,xl.b,xl.a)),t.Ra(1,114688,null,0,Cl.a,[jl.a,wl.a,y.a,f.a,m.a,g.a,x.a,Il.a,B.e,k.k,m.o,v.e,Al.a,Ll.a,Fl.a,Pl.a,Ol.a,ql.a],null,null)],function(l,n){l(n,1,0)},null)}function Ql(l){return t.mb(0,[(l()(),t.Sa(0,16777216,null,null,5,"mat-tab",[["label","Certificate"]],null,null,null,C.d,C.a)),t.Ra(1,770048,[[1,4]],2,j.b,[t.R],{textLabel:[0,"textLabel"]},null),t.ib(335544320,12,{templateLabel:0}),t.ib(335544320,13,{_explicitContent:0}),(l()(),t.Ja(0,[[13,2]],0,1,null,Wl)),t.Ra(5,16384,null,0,j.e,[t.O],null,null),(l()(),t.Ja(0,null,null,0))],function(l,n){l(n,1,0,"Certificate")},null)}function Hl(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"app-service-confirmation",[],null,null,null,Jl.c,Jl.a)),t.Ra(1,114688,null,0,Ml.a,[V.a,m.o,y.a,k.k,m.a],null,null)],function(l,n){l(n,1,0)},null)}function $l(l){return t.mb(0,[(l()(),t.Sa(0,16777216,null,null,5,"mat-tab",[["label","Confirmation"]],null,null,null,C.d,C.a)),t.Ra(1,770048,[[1,4]],2,j.b,[t.R],{textLabel:[0,"textLabel"]},null),t.ib(335544320,14,{templateLabel:0}),t.ib(335544320,15,{_explicitContent:0}),(l()(),t.Ja(0,[[15,2]],0,1,null,Hl)),t.Ra(5,16384,null,0,j.e,[t.O],null,null),(l()(),t.Ja(0,null,null,0))],function(l,n){l(n,1,0,"Confirmation")},null)}function ln(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,19,"div",[["fxLayout","row"],["fxLayoutAlign","start center"],["fxLayoutGap","0"]],null,null,null,null,null)),t.Ra(1,737280,null,0,Q.g,[H.n,t.k,H.s],{layout:[0,"layout"]},null),t.Ra(2,1785856,null,0,Q.h,[H.n,t.k,[6,Q.g],t.A,$.b,H.s],{gap:[0,"gap"]},null),t.Ra(3,737280,null,0,Q.f,[H.n,t.k,[6,Q.g],H.s],{align:[0,"align"]},null),(l()(),t.Sa(4,0,null,null,3,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.Ra(5,737280,null,0,Q.b,[H.n,t.k,[3,Q.g],H.s,[2,H.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(6,0,null,null,1,"app-page-header",[["icon",""],["title","projectsubstitute"]],null,null,null,Nl.b,Nl.a)),t.Ra(7,49152,null,0,Bl.a,[],{title:[0,"title"],icon:[1,"icon"]},null),(l()(),t.Sa(8,0,null,null,11,"div",[["class","block"],["fxFlex","50"],["id","title1"]],null,null,null,null,null)),t.Ra(9,737280,null,0,Q.b,[H.n,t.k,[3,Q.g],H.s,[2,H.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(10,0,null,null,1,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.kb(11,null,["",""])),(l()(),t.Sa(12,0,null,null,1,"span",[["class","slideBorder"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["/"])),(l()(),t.Sa(14,0,null,null,1,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.kb(15,null,["",""])),(l()(),t.Sa(16,0,null,null,1,"span",[["class","slideBorder"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["/"])),(l()(),t.Sa(18,0,null,null,1,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.kb(19,null,["",""])),(l()(),t.Sa(20,0,null,null,28,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,C.c,C.b)),t.Ra(21,3325952,null,1,j.f,[t.k,t.h],{selectedIndex:[0,"selectedIndex"]},null),t.ib(603979776,1,{_tabs:1}),(l()(),t.Sa(23,16777216,null,null,5,"mat-tab",[["label","Service Info"]],null,null,null,C.d,C.a)),t.Ra(24,770048,[[1,4]],2,j.b,[t.R],{textLabel:[0,"textLabel"]},null),t.ib(335544320,2,{templateLabel:0}),t.ib(335544320,3,{_explicitContent:0}),(l()(),t.Ja(0,[[3,2]],0,1,null,Vl)),t.Ra(28,16384,null,0,j.e,[t.O],null,null),(l()(),t.Ja(16777216,null,null,1,null,Ul)),t.Ra(30,16384,null,0,J.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(31,16777216,null,null,5,"mat-tab",[["label","Document"]],null,null,null,C.d,C.a)),t.Ra(32,770048,[[1,4]],2,j.b,[t.R],{textLabel:[0,"textLabel"]},null),t.ib(335544320,6,{templateLabel:0}),t.ib(335544320,7,{_explicitContent:0}),(l()(),t.Ja(0,[[7,2]],0,1,null,Kl)),t.Ra(36,16384,null,0,j.e,[t.O],null,null),(l()(),t.Sa(37,16777216,null,null,5,"mat-tab",[["label","Project Substitute"]],null,null,null,C.d,C.a)),t.Ra(38,770048,[[1,4]],2,j.b,[t.R],{textLabel:[0,"textLabel"]},null),t.ib(335544320,8,{templateLabel:0}),t.ib(335544320,9,{_explicitContent:0}),(l()(),t.Ja(0,[[9,2]],0,1,null,Xl)),t.Ra(42,16384,null,0,j.e,[t.O],null,null),(l()(),t.Ja(16777216,null,null,1,null,Gl)),t.Ra(44,16384,null,0,J.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Ja(16777216,null,null,1,null,Ql)),t.Ra(46,16384,null,0,J.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Ja(16777216,null,null,1,null,$l)),t.Ra(48,16384,null,0,J.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var a=n.component;l(n,1,0,"row"),l(n,2,0,"0"),l(n,3,0,"start center"),l(n,5,0,""),l(n,7,0,"projectsubstitute",""),l(n,9,0,"50"),l(n,21,0,a.renewalIndex),l(n,24,0,"Service Info"),l(n,30,0,!a.isInvestor),l(n,32,0,"Document"),l(n,38,0,"Project Substitute"),l(n,44,0,!a.isInvestor),l(n,46,0,!a.isInvestor),l(n,48,0,a.isInvestor)},function(l,n){var a=n.component;l(n,11,0,a.title),l(n,15,0,a.investorName),l(n,19,0,a.projectName),l(n,20,0,t.cb(n,21).dynamicHeight,"below"===t.cb(n,21).headerPosition)})}var nn=t.Oa("app-substitute-tab",Tl,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"app-substitute-tab",[],null,null,null,ln,El)),t.Ra(1,114688,null,0,Tl,[I.a,B.e,m.a,f.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),an=a("RLuC"),tn=a("8Kh0"),un=a("eDkP"),en=a("4tE/"),on=a("M2Lx"),cn=a("jQLj"),rn=a("mVsa"),bn=a("v9Dh"),sn=a("4epT"),dn=a("ZYjt"),pn=a("vGXY"),mn=a("OkvK"),fn=a("wmQ5"),gn=a("hUWP"),hn=a("V9q+"),Sn=a("4c35"),vn=a("u7R8"),Rn=a("de3e"),In=a("/dO6"),yn=a("YhbO"),kn=a("jlZm"),_n=a("r43C"),xn=a("0/Q6"),Cn=a("Z+uX"),jn=a("Blfk"),wn=a("9It4"),An=a("Nsh5"),Ln=a("w+lc"),Fn=a("kWGw"),Pn=a("y4qS"),On=a("BHnd"),qn=a("8mMr"),Jn=a("Lwpp"),Mn=a("6Wmm"),Nn=a("Bw/2"),Bn=a("A7o+"),Dn=a("ttZ8"),Tn=function(){},En=a("mvAr"),Vn=a("R4Xi"),zn=a("K4TP"),Un=a("zLjn"),Zn=a("KLo2"),Kn=a("4Ve2"),Xn=a("1oss"),Yn=a("ISnz"),Gn=a("ygB/"),Wn=a("dmTD"),Qn=a("YSh2"),Hn=a("xd+6"),$n=a("y1mS");a.d(n,"ProjectSubstituteModuleNgFactory",function(){return la});var la=t.Pa(u,[],function(l){return t.Za([t.ab(512,t.j,t.Ea,[[8,[e.a,i.b,i.a,o.a,c.a,c.b,r.a,b.a,nn,s.b,Jl.b,an.a,tn.a]],[3,t.j],t.y]),t.ab(4608,J.o,J.n,[t.v,[2,J.A]]),t.ab(5120,H.d,H.e,[[3,H.d],[2,H.c],[2,H.k],[2,H.b]]),t.ab(5120,H.h,H.v,[[3,H.h],H.d]),t.ab(5120,H.m,H.w,[[3,H.m],t.A,t.C,J.d]),t.ab(4608,H.n,H.n,[H.h,H.m]),t.ab(5120,H.p,H.o,[[3,H.p],H.m,H.h]),t.ab(5120,H.t,H.r,[[3,H.t]]),t.ab(4608,H.s,H.s,[[2,H.t],[2,H.q],t.C,[2,H.l]]),t.ab(5120,t.b,function(l,n){return[H.u(l,n)]},[J.d,t.C]),t.ab(4608,v.B,v.B,[]),t.ab(4608,v.e,v.e,[]),t.ab(4608,rl.m,rl.s,[J.d,t.C,rl.q]),t.ab(4608,rl.t,rl.t,[rl.m,rl.r]),t.ab(5120,rl.a,function(l){return[l]},[rl.t]),t.ab(4608,rl.p,rl.p,[]),t.ab(6144,rl.n,null,[rl.p]),t.ab(4608,rl.l,rl.l,[rl.n]),t.ab(6144,rl.b,null,[rl.l]),t.ab(4608,rl.g,rl.o,[rl.b,t.s]),t.ab(4608,rl.c,rl.c,[rl.g]),t.ab(4608,un.c,un.c,[un.i,un.e,t.j,un.h,un.f,t.s,t.A,J.d,$.b]),t.ab(5120,un.j,un.k,[un.c]),t.ab(5120,en.a,en.b,[un.c]),t.ab(4608,on.c,on.c,[]),t.ab(4608,Z.d,Z.d,[]),t.ab(5120,B.c,B.d,[un.c]),t.ab(4608,B.e,B.e,[un.c,t.s,[2,J.i],[2,B.b],B.c,[3,B.e],un.e]),t.ab(4608,cn.i,cn.i,[]),t.ab(5120,cn.a,cn.b,[un.c]),t.ab(5120,rn.b,rn.g,[un.c]),t.ab(4608,Z.c,Z.z,[[2,Z.h],P.a]),t.ab(5120,al.a,al.b,[un.c]),t.ab(5120,bn.b,bn.c,[un.c]),t.ab(5120,sn.c,sn.a,[[3,sn.c]]),t.ab(4608,dn.f,Z.e,[[2,Z.i],[2,Z.n]]),t.ab(4608,R.c,R.c,[un.c,O.i,t.s,pn.a,[3,R.c],R.b]),t.ab(5120,mn.d,mn.a,[[3,mn.d]]),t.ab(4608,fn.a,fn.a,[]),t.ab(1073742336,J.c,J.c,[]),t.ab(1073742336,H.j,H.j,[]),t.ab(1073742336,$.a,$.a,[]),t.ab(1073742336,Q.d,Q.d,[]),t.ab(1073742336,gn.a,gn.a,[]),t.ab(1073742336,hn.a,hn.a,[[2,H.q],t.C]),t.ab(1073742336,v.y,v.y,[]),t.ab(1073742336,v.k,v.k,[]),t.ab(1073742336,v.v,v.v,[]),t.ab(1073742336,rl.e,rl.e,[]),t.ab(1073742336,rl.d,rl.d,[]),t.ab(1073742336,Z.n,Z.n,[[2,Z.f]]),t.ab(1073742336,P.b,P.b,[]),t.ab(1073742336,Z.y,Z.y,[]),t.ab(1073742336,Z.w,Z.w,[]),t.ab(1073742336,Z.t,Z.t,[]),t.ab(1073742336,Sn.g,Sn.g,[]),t.ab(1073742336,tl.b,tl.b,[]),t.ab(1073742336,un.g,un.g,[]),t.ab(1073742336,en.c,en.c,[]),t.ab(1073742336,F.c,F.c,[]),t.ab(1073742336,vn.a,vn.a,[]),t.ab(1073742336,A.f,A.f,[]),t.ab(1073742336,on.d,on.d,[]),t.ab(1073742336,Rn.c,Rn.c,[]),t.ab(1073742336,In.b,In.b,[]),t.ab(1073742336,B.j,B.j,[]),t.ab(1073742336,O.a,O.a,[]),t.ab(1073742336,cn.j,cn.j,[]),t.ab(1073742336,yn.c,yn.c,[]),t.ab(1073742336,kn.b,kn.b,[]),t.ab(1073742336,Z.o,Z.o,[]),t.ab(1073742336,_n.b,_n.b,[]),t.ab(1073742336,Y.b,Y.b,[]),t.ab(1073742336,el.c,el.c,[]),t.ab(1073742336,K.e,K.e,[]),t.ab(1073742336,ul.c,ul.c,[]),t.ab(1073742336,W.b,W.b,[]),t.ab(1073742336,xn.c,xn.c,[]),t.ab(1073742336,rn.e,rn.e,[]),t.ab(1073742336,Z.A,Z.A,[]),t.ab(1073742336,Z.q,Z.q,[]),t.ab(1073742336,al.d,al.d,[]),t.ab(1073742336,bn.e,bn.e,[]),t.ab(1073742336,sn.d,sn.d,[]),t.ab(1073742336,Cn.b,Cn.b,[]),t.ab(1073742336,jn.c,jn.c,[]),t.ab(1073742336,wn.c,wn.c,[]),t.ab(1073742336,An.h,An.h,[]),t.ab(1073742336,Ln.a,Ln.a,[]),t.ab(1073742336,Fn.b,Fn.b,[]),t.ab(1073742336,R.f,R.f,[]),t.ab(1073742336,mn.e,mn.e,[]),t.ab(1073742336,Pn.p,Pn.p,[]),t.ab(1073742336,On.m,On.m,[]),t.ab(1073742336,j.j,j.j,[]),t.ab(1073742336,qn.b,qn.b,[]),t.ab(1073742336,Jn.d,Jn.d,[]),t.ab(1073742336,fn.b,fn.b,[]),t.ab(1073742336,Mn.b,Mn.b,[]),t.ab(1073742336,Nn.a,Nn.a,[]),t.ab(1073742336,Bn.h,Bn.h,[]),t.ab(1073742336,Dn.a,Dn.a,[]),t.ab(1073742336,m.s,m.s,[[2,m.x],[2,m.o]]),t.ab(1073742336,Tn,Tn,[]),t.ab(1073742336,En.a,En.a,[]),t.ab(1073742336,Vn.a,Vn.a,[]),t.ab(1073742336,zn.a,zn.a,[]),t.ab(1073742336,Un.a,Un.a,[]),t.ab(1073742336,Zn.a,Zn.a,[]),t.ab(1073742336,Kn.a,Kn.a,[]),t.ab(1073742336,Xn.a,Xn.a,[]),t.ab(1073742336,Yn.a,Yn.a,[]),t.ab(1073742336,Gn.a,Gn.a,[]),t.ab(1073742336,Wn.a,Wn.a,[]),t.ab(1073742336,u,u,[]),t.ab(256,rl.q,"XSRF-TOKEN",[]),t.ab(256,rl.r,"X-XSRF-TOKEN",[]),t.ab(256,In.a,{separatorKeyCodes:[Qn.f]},[]),t.ab(256,Z.g,Z.k,[]),t.ab(1024,m.m,function(){return[[{path:"",component:Tl}],[{path:"",component:d.a}],[{path:"",component:Ml.a}],[{path:"",component:Hn.a}],[{path:"",component:Ml.a}],[{path:"",component:d.a}],[{path:"",component:$n.a}]]},[])])})}}]);