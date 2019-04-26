(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2Ik6":function(l,n,u){"use strict";u.d(n,"a",function(){return a}),u("cWQe"),u("Pmkz"),u("/6jJ"),u("41ir"),u("Wxld"),u("gO9r"),u("Ae9k"),u("0j3R"),u("6Qz0"),u("mqR9");var t=u("NlQA"),e=u("tOET"),a=function(){function l(l,n,u,e,a,o,r,i,c,s,p,d){this.projectProfileService=l,this.router=n,this.route=u,this.errMsg=e,this.addressService=a,this.dataSharingService=o,this.projectCostService=r,this.projectOutputService=i,this.projectInputService=c,this.projectEmploymentService=s,this.projectRequirementService=p,this.nationalityCompositionService=d,this.projectShare=[],this.projectInputs=[],this.projectStatus=[],this.projectStage=[],this.projectStageItem=new t.h,this.projectStatusItem=new t.i}return l.prototype.ngOnInit=function(){this.getProjectId(),this.investorName=localStorage.getItem("investorName")},l.prototype.getProjectId=function(){var l=this;this.route.params.subscribe(function(n){l.projectId=+n.id,l.getProjectDetail(l.projectId),l.getAddress(l.projectId)})},l.prototype.getProjectStatus=function(l){var n=this,u=new t.i;e.h.forEach(function(t){t.Id==l&&(u={Id:t.Id.toString(),DescriptionEnglish:t.DescriptionEnglish,Description:t.Description},n.projectStatusItem=u)})},l.prototype.getProjectStage=function(l){var n=this,u=new t.h;e.g.forEach(function(t){t.Id==l&&(u={Id:t.Id.toString(),DescriptionEnglish:t.DescriptionEnglish,Description:t.Description},n.projectStageItem=u)})},l.prototype.getAddress=function(l){var n=this;this.addressService.getAddress(l).subscribe(function(l){n.addressList=l},function(l){return n.errMsg.getError(l)})},l.prototype.getProjectDetail=function(l){var n=this;this.projectProfileService.ProjectsDetail(l).subscribe(function(l){n.projectDetail=l,n.projectCost=l.ProjectCost[0],n.projectEmployement=l.ProjectEmployment[0],n.projectOutput=l.ProjectOutput,n.projectRequirement=l.ProjectRequirement[0],n.projectShare=l.ProjectNationalityComposition,n.projectInputs=l.ProjectInput,n.getProjectStatus(l.ProjectStatus),n.getProjectStage(l.ProjectStage)},function(l){return n.errMsg.getError(l)})},l.prototype.onProjectList=function(){this.router.navigate(["../../list"],{relativeTo:this.route})},l.prototype.onNewProject=function(){this.router.navigate(["../../new"],{relativeTo:this.route})},l.prototype.onDelete=function(l,n){var u=this;if(!0===confirm("Do you want to Delete this "+l+" ?")){switch(l){case"cost":case"address":this.projectCostService.delete(n).subscribe(function(){u.getProjectId()});break;case"Utility":this.projectRequirementService.delete(n).subscribe(function(){u.getProjectId()});break;case"Employment":this.projectEmploymentService.delete(n).subscribe(function(){});break;case"Output":this.projectOutputService.delete(n).subscribe(function(){u.getProjectId()});break;case"Input":this.projectInputService.delete(n).subscribe(function(){});break;case"nationalityComposition":this.nationalityCompositionService.delete(n).subscribe(function(){u.getProjectId()})}return!0}return!1},l.prototype.editProject=function(l,n){var u=this;setTimeout(function(){return u.dataSharingService.startingEditingProject.next(u.projectDetail)},0),setTimeout(function(){return u.dataSharingService.steeperIndex.next(l)},0),this.router.navigate(["/pro",n],{relativeTo:this.route})},l.prototype.back=function(){window.history.back()},l}()},L4ta:function(l,n,u){"use strict";var t=u("CcnG"),e=u("lzlj"),a=u("FVSy"),o=u("21Lb"),r=u("OzfB"),i=u("Fzqc"),c=u("5MRH"),s=u("KY8O"),p=u("Ip0R"),d=u("TtEo"),b=u("LC5p"),S=u("bujt"),m=u("UodH"),g=u("dWZg"),k=u("lLAP"),f=u("wFw1"),h=u("Mr+X"),j=u("SMsm"),x=u("2Ik6"),y=u("cWQe"),P=u("ZYCi"),v=u("mqR9"),C=u("6Qz0"),R=u("0j3R"),w=u("Pmkz"),O=u("Ae9k"),M=u("41ir"),_=u("gO9r"),E=u("/6jJ"),I=u("Wxld");u.d(n,"a",function(){return T});var F=t.Qa({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{color:#333;font-family:Helvetica,Arial,sans-serif;border-collapse:collapse;border:1px solid #f1f1f1}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{height:40px;transition:all .3s}th[_ngcontent-%COMP%]{background:#fafafa;font-weight:700;font-size:12px}td[_ngcontent-%COMP%]{background:#f5f5f5;text-align:center}tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%]{background:#fefefe}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover{background:#d8e9f9;color:#fff}.caption[_ngcontent-%COMP%]{color:#5f9ea0!important;font-weight:bolder;margin:20px 6px 5px;text-decoration:underline;-webkit-text-decoration-color:#f1f1f1;text-decoration-color:#f1f1f1;text-align:center}.project_table_wdg[_ngcontent-%COMP%]{border:1px solid #f1f1f1;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;float:left}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;float:left;width:209px;margin:0;border:1px solid #f1f1f1;padding:2px;background-color:#fff}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px dashed #f1f1f1;padding:8px 0}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{color:#5f9ea0;font-size:18px;font-weight:700;background:#f5f5f5}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){font-size:12px;font-weight:700}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(n+4){font-size:12px}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .header[_ngcontent-%COMP%]{font-weight:700;padding-left:2px!important}"]],data:{}});function L(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(2,null,["",""])),(l()(),t.Sa(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(4,null,["",""])),(l()(),t.Sa(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(6,null,["",""])),(l()(),t.Sa(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(8,null,["",""])),(l()(),t.Sa(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(10,null,[""," %"])),(l()(),t.Sa(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(12,null,[""," %"])),(l()(),t.Sa(13,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(14,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.ProductName),l(n,6,0,n.context.$implicit.ProductQty),l(n,8,0,n.context.$implicit.ProductValue),l(n,10,0,n.context.$implicit.ExportMarketShare),l(n,12,0,n.context.$implicit.DomesticMarketShare),l(n,14,0,n.context.$implicit.Remark)})}function D(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(2,null,["",""])),(l()(),t.Sa(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(4,null,["",""])),(l()(),t.Sa(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(6,null,["",""])),(l()(),t.Sa(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(8,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.RawMaterialType),l(n,6,0,n.context.$implicit.IsForeign?"yes":"no"),l(n,8,0,n.context.$implicit.Remark)})}function q(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(2,null,["",""])),(l()(),t.Sa(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(4,null,["",""])),(l()(),t.Sa(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(6,null,["",""])),(l()(),t.Sa(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(8,null,["",""])),(l()(),t.Sa(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.kb(10,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.Nationality),l(n,6,0,n.context.$implicit.Qty),l(n,8,0,n.context.$implicit.SharePercent),l(n,10,0,n.context.$implicit.Description)})}function A(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,251,"mat-card",[["class","mat-card"],["style","margin-top: 20px;"]],null,null,null,e.d,e.a)),t.Ra(1,49152,null,0,a.a,[],null,null),(l()(),t.Sa(2,0,null,0,25,"div",[["fxLayout","row"],["fxLayoutAlign","start center"],["fxLayoutGap","0"]],null,null,null,null,null)),t.Ra(3,737280,null,0,o.g,[r.n,t.k,r.s],{layout:[0,"layout"]},null),t.Ra(4,1785856,null,0,o.h,[r.n,t.k,[6,o.g],t.A,i.b,r.s],{gap:[0,"gap"]},null),t.Ra(5,737280,null,0,o.f,[r.n,t.k,[6,o.g],r.s],{align:[0,"align"]},null),(l()(),t.Sa(6,0,null,null,3,"div",[["class","block"],["fxFlex","20"]],null,null,null,null,null)),t.Ra(7,737280,null,0,o.b,[r.n,t.k,[3,o.g],r.s,[2,r.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(8,0,null,null,1,"app-page-header",[["icon","view_list"],["title","projectDetail"]],null,null,null,c.b,c.a)),t.Ra(9,49152,null,0,s.a,[],{title:[0,"title"],icon:[1,"icon"]},null),(l()(),t.Sa(10,0,null,null,17,"div",[["class","block"],["fxFlex","70"],["id","title1"]],null,null,null,null,null)),t.Ra(11,737280,null,0,o.b,[r.n,t.k,[3,o.g],r.s,[2,r.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(12,0,null,null,1,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.kb(13,null,["Investor: ",""])),(l()(),t.Sa(14,0,null,null,1,"span",[["class","slideBorder"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["/"])),(l()(),t.Sa(16,0,null,null,1,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.kb(17,null,["Project : ",""])),(l()(),t.kb(-1,null,[" \xa0\xa0 "])),(l()(),t.Sa(19,0,null,null,3,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.kb(-1,null,[" Project Stage: "])),(l()(),t.Sa(21,0,null,null,1,"span",[["style","color: #08b34d;"]],null,null,null,null,null)),(l()(),t.kb(22,null,[" "," "])),(l()(),t.kb(-1,null,[" \xa0\xa0 "])),(l()(),t.Sa(24,0,null,null,3,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Project Status: "])),(l()(),t.Sa(26,0,null,null,1,"span",[["style","color: #08b34d;"]],null,null,null,null,null)),(l()(),t.kb(27,null,["",""])),(l()(),t.Sa(28,0,null,0,213,"mat-card-content",[["class","mat-card-content"],["style","margin-bottom: 30px;"]],null,null,null,null,null)),t.Ra(29,16384,null,0,a.c,[],null,null),(l()(),t.Sa(30,0,null,null,136,"div",[["fxLayout","margin-10 row wrap"],["style","margin-bottom: 40px;"]],null,null,null,null,null)),t.Ra(31,737280,null,0,o.g,[r.n,t.k,r.s],{layout:[0,"layout"]},null),(l()(),t.Sa(32,0,null,null,134,"div",[["class","project_table_wdg mat-elevation-z6"]],null,null,null,null,null)),(l()(),t.Sa(33,0,null,null,30,"ul",[],null,null,null,null,null)),(l()(),t.Sa(34,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Address"])),(l()(),t.Sa(36,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(37,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Specific Area Name :"])),(l()(),t.kb(39,null,[" ",""])),(l()(),t.Sa(40,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(41,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Kebele :"])),(l()(),t.kb(43,null,["",""])),(l()(),t.Sa(44,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(45,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Woreda :"])),(l()(),t.kb(47,null,["",""])),(l()(),t.Sa(48,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(49,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Zone :"])),(l()(),t.kb(51,null,["",""])),(l()(),t.Sa(52,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(53,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["RegionId :"])),(l()(),t.kb(55,null,[""," "])),(l()(),t.Sa(56,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(57,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Remark :"])),(l()(),t.kb(59,null,["",""])),(l()(),t.Sa(60,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.Sa(61,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.Sa(62,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.Sa(63,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.Sa(64,0,null,null,32,"ul",[],null,null,null,null,null)),(l()(),t.Sa(65,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Utility"])),(l()(),t.Sa(67,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(68,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Electric Power :"])),(l()(),t.kb(70,null,["",""])),(l()(),t.Sa(71,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(72,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Land Agricultural :"])),(l()(),t.kb(74,null,["",""])),(l()(),t.Sa(75,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(76,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Land Industrial :"])),(l()(),t.kb(78,null,["",""])),(l()(),t.Sa(79,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(80,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Land Service :"])),(l()(),t.kb(82,null,["",""])),(l()(),t.Sa(83,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(84,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Other Utility :"])),(l()(),t.kb(86,null,["",""])),(l()(),t.Sa(87,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(88,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Water :"])),(l()(),t.kb(90,null,["",""])),(l()(),t.Sa(91,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(92,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Remark :"])),(l()(),t.kb(94,null,["",""])),(l()(),t.Sa(95,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.Sa(96,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.Sa(97,0,null,null,34,"ul",[],null,null,null,null,null)),(l()(),t.Sa(98,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Cost"])),(l()(),t.Sa(100,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(101,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Building Cost :"])),(l()(),t.kb(103,null,["",""])),(l()(),t.Sa(104,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(105,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Initial Working Capital Cost :"])),(l()(),t.kb(107,null,["",""])),(l()(),t.Sa(108,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(109,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Land Cost :"])),(l()(),t.kb(111,null,["",""])),(l()(),t.Sa(112,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(113,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Machinery Cost :"])),(l()(),t.kb(115,null,["",""])),(l()(),t.Sa(116,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(117,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Office Equipment Cost :"])),(l()(),t.kb(119,null,["",""])),(l()(),t.Sa(120,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(121,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Transport Cost :"])),(l()(),t.kb(123,null,["",""])),(l()(),t.Sa(124,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(125,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Equity Finance : "])),(l()(),t.kb(127,null,["",""])),(l()(),t.Sa(128,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(129,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Loan Finance :"])),(l()(),t.kb(131,null,["",""])),(l()(),t.Sa(132,0,null,null,34,"ul",[],null,null,null,null,null)),(l()(),t.Sa(133,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Employment"])),(l()(),t.Sa(135,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(136,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Permanent Female :"])),(l()(),t.kb(138,null,["",""])),(l()(),t.Sa(139,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(140,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Permanent Male :"])),(l()(),t.kb(142,null,["",""])),(l()(),t.Sa(143,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(144,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Permanent Foreign Female :"])),(l()(),t.kb(146,null,["",""])),(l()(),t.Sa(147,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(148,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Permanent Female :"])),(l()(),t.kb(150,null,["",""])),(l()(),t.Sa(151,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(152,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Temporary Female :"])),(l()(),t.kb(154,null,["",""])),(l()(),t.Sa(155,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(156,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Temporary Male :"])),(l()(),t.kb(158,null,["",""])),(l()(),t.Sa(159,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(160,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Temporary Foreign Female :"])),(l()(),t.kb(162,null,["",""])),(l()(),t.Sa(163,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.Sa(164,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Temporary Foreign Male :"])),(l()(),t.kb(166,null,["",""])),(l()(),t.Sa(167,0,null,null,1,"label",[["class","sub-label"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Project Output/Services"])),(l()(),t.Sa(169,0,null,null,24,"div",[["class","margin-10"],["fxFlex","87%"],["fxLayout","row wrap"],["fxLayoutGap","3em"]],null,null,null,null,null)),t.Ra(170,737280,null,0,o.g,[r.n,t.k,r.s],{layout:[0,"layout"]},null),t.Ra(171,1785856,null,0,o.h,[r.n,t.k,[6,o.g],t.A,i.b,r.s],{gap:[0,"gap"]},null),t.Ra(172,737280,null,0,o.b,[r.n,t.k,[3,o.g],r.s,[2,r.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(173,0,null,null,20,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.Ra(174,737280,null,0,o.b,[r.n,t.k,[3,o.g],r.s,[2,r.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(175,0,null,null,18,"table",[["class","full-width mat-elevation-z3"]],null,null,null,null,null)),(l()(),t.Sa(176,0,null,null,14,"thead",[],null,null,null,null,null)),(l()(),t.Sa(177,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["No"])),(l()(),t.Sa(179,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Product Name"])),(l()(),t.Sa(181,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Product Qty"])),(l()(),t.Sa(183,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Product Value"])),(l()(),t.Sa(185,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Export Market Share"])),(l()(),t.Sa(187,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Domestic Market Share"])),(l()(),t.Sa(189,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Remark"])),(l()(),t.Sa(191,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.Ja(16777216,null,null,1,null,L)),t.Ra(193,802816,null,0,p.l,[t.R,t.O,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Sa(194,0,null,null,11,"div",[["fxFlex","87%"],["fxLayout","row wrap"],["fxLayoutGap","3em"],["style","margin-top: 50px !important;"]],null,null,null,null,null)),t.Ra(195,737280,null,0,o.g,[r.n,t.k,r.s],{layout:[0,"layout"]},null),t.Ra(196,1785856,null,0,o.h,[r.n,t.k,[6,o.g],t.A,i.b,r.s],{gap:[0,"gap"]},null),t.Ra(197,737280,null,0,o.b,[r.n,t.k,[3,o.g],r.s,[2,r.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(198,0,null,null,3,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.Ra(199,737280,null,0,o.b,[r.n,t.k,[3,o.g],r.s,[2,r.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(200,0,null,null,1,"label",[["class","sub-label"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Project Raw Material Input"])),(l()(),t.Sa(202,0,null,null,3,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.Ra(203,737280,null,0,o.b,[r.n,t.k,[3,o.g],r.s,[2,r.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(204,0,null,null,1,"label",[["class","sub-label"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Project Nationality composition"])),(l()(),t.Sa(206,0,null,null,35,"div",[["class"," mat-elevation-z2"],["fxFlex","87%"],["fxLayout","row wrap"],["fxLayoutGap","3em"]],null,null,null,null,null)),t.Ra(207,737280,null,0,o.g,[r.n,t.k,r.s],{layout:[0,"layout"]},null),t.Ra(208,1785856,null,0,o.h,[r.n,t.k,[6,o.g],t.A,i.b,r.s],{gap:[0,"gap"]},null),t.Ra(209,737280,null,0,o.b,[r.n,t.k,[3,o.g],r.s,[2,r.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(210,0,null,null,14,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.Ra(211,737280,null,0,o.b,[r.n,t.k,[3,o.g],r.s,[2,r.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(212,0,null,null,12,"table",[["class","full-width "]],null,null,null,null,null)),(l()(),t.Sa(213,0,null,null,8,"thead",[],null,null,null,null,null)),(l()(),t.Sa(214,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["No"])),(l()(),t.Sa(216,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Raw Material Type"])),(l()(),t.Sa(218,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Is Foreign"])),(l()(),t.Sa(220,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Remark"])),(l()(),t.Sa(222,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.Ja(16777216,null,null,1,null,D)),t.Ra(224,802816,null,0,p.l,[t.R,t.O,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Sa(225,0,null,null,16,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.Ra(226,737280,null,0,o.b,[r.n,t.k,[3,o.g],r.s,[2,r.a]],{flex:[0,"flex"]},null),(l()(),t.Sa(227,0,null,null,14,"table",[["class","full-width"]],null,null,null,null,null)),(l()(),t.Sa(228,0,null,null,10,"thead",[],null,null,null,null,null)),(l()(),t.Sa(229,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["No"])),(l()(),t.Sa(231,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Nationality"])),(l()(),t.Sa(233,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Qty"])),(l()(),t.Sa(235,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["SharePercent"])),(l()(),t.Sa(237,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Description"])),(l()(),t.Sa(239,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.Ja(16777216,null,null,1,null,q)),t.Ra(241,802816,null,0,p.l,[t.R,t.O,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Sa(242,0,null,0,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-inset",null]],null,null,d.b,d.a)),t.Ra(243,49152,null,0,b.a,[],null,null),(l()(),t.Sa(244,0,null,0,7,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),t.Ra(245,16384,null,0,a.b,[],null,null),(l()(),t.Sa(246,0,null,null,5,"button",[["color","primary"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.back()&&t),t},S.d,S.b)),t.Ra(247,180224,null,0,m.b,[t.k,g.a,k.g,[2,f.a]],{color:[0,"color"]},null),(l()(),t.Sa(248,0,null,0,2,"mat-icon",[["class","mat-18 mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,h.b,h.a)),t.Ra(249,638976,null,0,j.a,[t.k,j.c,[8,null]],null,null),(l()(),t.kb(-1,0,["arrow_back"])),(l()(),t.kb(-1,0,[" Back "]))],function(l,n){var u=n.component;l(n,3,0,"row"),l(n,4,0,"0"),l(n,5,0,"start center"),l(n,7,0,"20"),l(n,9,0,"projectDetail","view_list"),l(n,11,0,"70"),l(n,31,0,"margin-10 row wrap"),l(n,170,0,"row wrap"),l(n,171,0,"3em"),l(n,172,0,"87%"),l(n,174,0,""),l(n,193,0,u.projectOutput),l(n,195,0,"row wrap"),l(n,196,0,"3em"),l(n,197,0,"87%"),l(n,199,0,""),l(n,203,0,""),l(n,207,0,"row wrap"),l(n,208,0,"3em"),l(n,209,0,"87%"),l(n,211,0,""),l(n,224,0,u.projectInputs),l(n,226,0,""),l(n,241,0,u.projectShare),l(n,247,0,"primary"),l(n,249,0)},function(l,n){var u=n.component;l(n,13,0,u.investorName),l(n,17,0,null==u.projectDetail?null:u.projectDetail.ProjectName),l(n,22,0,u.projectStageItem.DescriptionEnglish),l(n,27,0,u.projectStatusItem.DescriptionEnglish),l(n,39,0,null==u.addressList?null:u.addressList.SpecificAreaName),l(n,43,0,null==u.addressList?null:u.addressList.Kebele.DescriptionEnglish),l(n,47,0,null==u.addressList?null:u.addressList.Woreda.DescriptionEnglish),l(n,51,0,null==u.addressList?null:u.addressList.Zone.DescriptionEnglish),l(n,55,0,null==u.addressList?null:u.addressList.Region.DescriptionEnglish),l(n,59,0,null==u.addressList?null:u.addressList.Remark),l(n,70,0,null==u.projectRequirement?null:u.projectRequirement.ElectricPower),l(n,74,0,null==u.projectRequirement?null:u.projectRequirement.LandAgricultural),l(n,78,0,null==u.projectRequirement?null:u.projectRequirement.LandIndustrial),l(n,82,0,null==u.projectRequirement?null:u.projectRequirement.LandService),l(n,86,0,null==u.projectRequirement?null:u.projectRequirement.OtherUtility),l(n,90,0,null==u.projectRequirement?null:u.projectRequirement.Water),l(n,94,0,null==u.projectRequirement?null:u.projectRequirement.Remark),l(n,103,0,null==u.projectCost?null:u.projectCost.BuildingCost),l(n,107,0,null==u.projectCost?null:u.projectCost.InitialWorkingCapitalCost),l(n,111,0,null==u.projectCost?null:u.projectCost.LandCost),l(n,115,0,null==u.projectCost?null:u.projectCost.MachineryCost),l(n,119,0,null==u.projectCost?null:u.projectCost.OfficeEquipmentCost),l(n,123,0,null==u.projectCost?null:u.projectCost.TransportCost),l(n,127,0,null==u.projectCost?null:u.projectCost.EquityFinance),l(n,131,0,null==u.projectCost?null:u.projectCost.LoanFinance),l(n,138,0,null==u.projectEmployement?null:u.projectEmployement.PermanentFemale),l(n,142,0,null==u.projectEmployement?null:u.projectEmployement.PermanentMale),l(n,146,0,null==u.projectEmployement?null:u.projectEmployement.PermanentForeignFemale),l(n,150,0,null==u.projectEmployement?null:u.projectEmployement.PermanentFemale),l(n,154,0,null==u.projectEmployement?null:u.projectEmployement.TemporaryFemale),l(n,158,0,null==u.projectEmployement?null:u.projectEmployement.TemporaryMale),l(n,162,0,null==u.projectEmployement?null:u.projectEmployement.TemporaryForeignFemale),l(n,166,0,null==u.projectEmployement?null:u.projectEmployement.TemporaryForeignMale),l(n,242,0,t.cb(n,243).vertical?"vertical":"horizontal",t.cb(n,243).vertical,t.cb(n,243).inset),l(n,244,0,"end"===t.cb(n,245).align),l(n,246,0,t.cb(n,247).disabled||null,"NoopAnimations"===t.cb(n,247)._animationMode),l(n,248,0,t.cb(n,249).inline)})}var T=t.Oa("app-project-profile-detail",x.a,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"app-project-profile-detail",[],null,null,null,A,F)),t.Ra(1,114688,null,0,x.a,[y.a,P.o,P.a,v.a,C.a,R.a,w.a,O.a,M.a,_.a,E.a,I.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[])},ah87:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){}},kR2P:function(l,n,u){"use strict";u.d(n,"a",function(){return t}),u("2Ik6");var t=function(){}}}]);