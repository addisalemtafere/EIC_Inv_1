(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"2Ik6":function(l,n,u){"use strict";u.d(n,"a",function(){return o}),u("cWQe"),u("Pmkz"),u("/6jJ"),u("41ir"),u("Wxld"),u("gO9r"),u("Ae9k"),u("0j3R"),u("6Qz0"),u("mqR9");var t=u("NlQA"),e=u("tOET"),o=function(){function l(l,n,u,e,o,r,i,a,c,s,b,p){this.projectProfileService=l,this.router=n,this.route=u,this.errMsg=e,this.addressService=o,this.dataSharingService=r,this.projectCostService=i,this.projectOutputService=a,this.projectInputService=c,this.projectEmploymentService=s,this.projectRequirementService=b,this.nationalityCompositionService=p,this.projectShare=[],this.projectInputs=[],this.projectStatus=[],this.projectStage=[],this.projectStageItem=new t.h,this.projectStatusItem=new t.i}return l.prototype.ngOnInit=function(){this.getProjectId(),this.investorName=localStorage.getItem("investorName")},l.prototype.getProjectId=function(){var l=this;this.route.params.subscribe(function(n){l.projectId=+n.id,l.getProjectDetail(l.projectId),l.getAddress(l.projectId)})},l.prototype.getProjectStatus=function(l){var n=this,u=new t.i;e.h.forEach(function(t){t.Id==l&&(u={Id:t.Id.toString(),DescriptionEnglish:t.DescriptionEnglish,Description:t.Description},n.projectStatusItem=u)})},l.prototype.getProjectStage=function(l){var n=this,u=new t.h;e.g.forEach(function(t){t.Id==l&&(u={Id:t.Id.toString(),DescriptionEnglish:t.DescriptionEnglish,Description:t.Description},n.projectStageItem=u)})},l.prototype.getAddress=function(l){var n=this;this.addressService.getAddress(l).subscribe(function(l){n.addressList=l},function(l){return n.errMsg.getError(l)})},l.prototype.getProjectDetail=function(l){var n=this;this.projectProfileService.ProjectsDetail(l).subscribe(function(l){n.projectDetail=l,n.projectCost=l.ProjectCost[0],n.projectEmployement=l.ProjectEmployment[0],n.projectOutput=l.ProjectOutput,n.projectRequirement=l.ProjectRequirement[0],n.projectShare=l.ProjectNationalityComposition,n.projectInputs=l.ProjectInput,n.getProjectStatus(l.ProjectStatus),n.getProjectStage(l.ProjectStage)},function(l){return n.errMsg.getError(l)})},l.prototype.onProjectList=function(){this.router.navigate(["../../list"],{relativeTo:this.route})},l.prototype.onNewProject=function(){this.router.navigate(["../../new"],{relativeTo:this.route})},l.prototype.onDelete=function(l,n){var u=this;if(!0===confirm("Do you want to Delete this "+l+" ?")){switch(l){case"cost":case"address":this.projectCostService.delete(n).subscribe(function(){u.getProjectId()});break;case"Utility":this.projectRequirementService.delete(n).subscribe(function(){u.getProjectId()});break;case"Employment":this.projectEmploymentService.delete(n).subscribe(function(){});break;case"Output":this.projectOutputService.delete(n).subscribe(function(){u.getProjectId()});break;case"Input":this.projectInputService.delete(n).subscribe(function(){});break;case"nationalityComposition":this.nationalityCompositionService.delete(n).subscribe(function(){u.getProjectId()})}return!0}return!1},l.prototype.editProject=function(l,n){var u=this;setTimeout(function(){return u.dataSharingService.startingEditingProject.next(u.projectDetail)},0),setTimeout(function(){return u.dataSharingService.steeperIndex.next(l)},0),this.router.navigate(["/pro",n],{relativeTo:this.route})},l.prototype.back=function(){window.history.back()},l}()},L4ta:function(l,n,u){"use strict";var t=u("CcnG"),e=u("lzlj"),o=u("FVSy"),r=u("21Lb"),i=u("OzfB"),a=u("Fzqc"),c=u("5MRH"),s=u("KY8O"),b=u("Ip0R"),p=u("TtEo"),d=u("LC5p"),f=u("bujt"),m=u("UodH"),L=u("dWZg"),h=u("lLAP"),g=u("wFw1"),x=u("Mr+X"),j=u("SMsm"),y=u("2Ik6"),P=u("cWQe"),v=u("ZYCi"),C=u("mqR9"),k=u("6Qz0"),w=u("0j3R"),F=u("Pmkz"),S=u("Ae9k"),O=u("41ir"),M=u("gO9r"),_=u("/6jJ"),E=u("Wxld");u.d(n,"a",function(){return z});var I=t.rb({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{color:#333;font-family:Helvetica,Arial,sans-serif;border-collapse:collapse;border:1px solid #f1f1f1}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{height:40px;transition:all .3s}th[_ngcontent-%COMP%]{background:#fafafa;font-weight:700;font-size:12px}td[_ngcontent-%COMP%]{background:#f5f5f5;text-align:center}tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%]{background:#fefefe}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover{background:#d8e9f9;color:#fff}.caption[_ngcontent-%COMP%]{color:#5f9ea0!important;font-weight:bolder;margin:20px 6px 5px;text-decoration:underline;-webkit-text-decoration-color:#f1f1f1;text-decoration-color:#f1f1f1;text-align:center}.project_table_wdg[_ngcontent-%COMP%]{border:1px solid #f1f1f1;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;float:left}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;float:left;width:209px;margin:0;border:1px solid #f1f1f1;padding:2px;background-color:#fff}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-bottom:1px dashed #f1f1f1;padding:8px 0}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{color:#5f9ea0;font-size:18px;font-weight:700;background:#f5f5f5}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){font-size:12px;font-weight:700}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(n+4){font-size:12px}.project_table_wdg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .header[_ngcontent-%COMP%]{font-weight:700;padding-left:2px!important}"]],data:{}});function D(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(2,null,["",""])),(l()(),t.tb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(4,null,["",""])),(l()(),t.tb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(6,null,["",""])),(l()(),t.tb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(8,null,["",""])),(l()(),t.tb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(10,null,[""," %"])),(l()(),t.tb(11,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(12,null,[""," %"])),(l()(),t.tb(13,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(14,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.ProductName),l(n,6,0,n.context.$implicit.ProductQty),l(n,8,0,n.context.$implicit.ProductValue),l(n,10,0,n.context.$implicit.ExportMarketShare),l(n,12,0,n.context.$implicit.DomesticMarketShare),l(n,14,0,n.context.$implicit.Remark)})}function R(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(2,null,["",""])),(l()(),t.tb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(4,null,["",""])),(l()(),t.tb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(6,null,["",""])),(l()(),t.tb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(8,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.RawMaterialType),l(n,6,0,n.context.$implicit.IsForeign?"yes":"no"),l(n,8,0,n.context.$implicit.Remark)})}function q(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(2,null,["",""])),(l()(),t.tb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(4,null,["",""])),(l()(),t.tb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(6,null,["",""])),(l()(),t.tb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(8,null,["",""])),(l()(),t.tb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(10,null,["",""]))],null,function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,n.context.$implicit.Nationality),l(n,6,0,n.context.$implicit.Qty),l(n,8,0,n.context.$implicit.SharePercent),l(n,10,0,n.context.$implicit.Description)})}function N(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,251,"mat-card",[["class","mat-card"],["style","margin-top: 20px;"]],null,null,null,e.d,e.a)),t.sb(1,49152,null,0,o.a,[],null,null),(l()(),t.tb(2,0,null,0,25,"div",[["fxLayout","row"],["fxLayoutAlign","start center"],["fxLayoutGap","0"]],null,null,null,null,null)),t.sb(3,671744,null,0,r.e,[t.k,i.i,[2,r.o],i.f],{fxLayout:[0,"fxLayout"]},null),t.sb(4,1720320,null,0,r.f,[t.k,t.C,a.b,i.i,[2,r.n],i.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.sb(5,671744,null,0,r.d,[t.k,i.i,[2,r.m],i.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.tb(6,0,null,null,3,"div",[["class","block"],["fxFlex","20"]],null,null,null,null,null)),t.sb(7,671744,null,0,r.b,[t.k,i.i,i.e,r.l,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.tb(8,0,null,null,1,"app-page-header",[["icon","view_list"],["title","projectDetail"]],null,null,null,c.b,c.a)),t.sb(9,49152,null,0,s.a,[],{title:[0,"title"],icon:[1,"icon"]},null),(l()(),t.tb(10,0,null,null,17,"div",[["class","block"],["fxFlex","70"],["id","title1"]],null,null,null,null,null)),t.sb(11,671744,null,0,r.b,[t.k,i.i,i.e,r.l,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.tb(12,0,null,null,1,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.Lb(13,null,["Investor: ",""])),(l()(),t.tb(14,0,null,null,1,"span",[["class","slideBorder"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["/"])),(l()(),t.tb(16,0,null,null,1,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.Lb(17,null,["Project : ",""])),(l()(),t.Lb(-1,null,[" \xa0\xa0 "])),(l()(),t.tb(19,0,null,null,3,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Project Stage: "])),(l()(),t.tb(21,0,null,null,1,"span",[["style","color: #08b34d;"]],null,null,null,null,null)),(l()(),t.Lb(22,null,[" "," "])),(l()(),t.Lb(-1,null,[" \xa0\xa0 "])),(l()(),t.tb(24,0,null,null,3,"span",[["class","page-title"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Project Status: "])),(l()(),t.tb(26,0,null,null,1,"span",[["style","color: #08b34d;"]],null,null,null,null,null)),(l()(),t.Lb(27,null,["",""])),(l()(),t.tb(28,0,null,0,213,"mat-card-content",[["class","mat-card-content"],["style","margin-bottom: 30px;"]],null,null,null,null,null)),t.sb(29,16384,null,0,o.c,[],null,null),(l()(),t.tb(30,0,null,null,136,"div",[["fxLayout","margin-10 row wrap"],["style","margin-bottom: 40px;"]],null,null,null,null,null)),t.sb(31,671744,null,0,r.e,[t.k,i.i,[2,r.o],i.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.tb(32,0,null,null,134,"div",[["class","project_table_wdg mat-elevation-z6"]],null,null,null,null,null)),(l()(),t.tb(33,0,null,null,30,"ul",[],null,null,null,null,null)),(l()(),t.tb(34,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Address"])),(l()(),t.tb(36,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(37,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Specific Area Name :"])),(l()(),t.Lb(39,null,[" ",""])),(l()(),t.tb(40,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(41,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Kebele :"])),(l()(),t.Lb(43,null,["",""])),(l()(),t.tb(44,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(45,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Woreda :"])),(l()(),t.Lb(47,null,["",""])),(l()(),t.tb(48,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(49,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Zone :"])),(l()(),t.Lb(51,null,["",""])),(l()(),t.tb(52,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(53,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["RegionId :"])),(l()(),t.Lb(55,null,[""," "])),(l()(),t.tb(56,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(57,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Remark :"])),(l()(),t.Lb(59,null,["",""])),(l()(),t.tb(60,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.tb(61,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.tb(62,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.tb(63,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.tb(64,0,null,null,32,"ul",[],null,null,null,null,null)),(l()(),t.tb(65,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Utility"])),(l()(),t.tb(67,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(68,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Electric Power :"])),(l()(),t.Lb(70,null,["",""])),(l()(),t.tb(71,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(72,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Land Agricultural :"])),(l()(),t.Lb(74,null,["",""])),(l()(),t.tb(75,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(76,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Land Industrial :"])),(l()(),t.Lb(78,null,["",""])),(l()(),t.tb(79,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(80,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Land Service :"])),(l()(),t.Lb(82,null,["",""])),(l()(),t.tb(83,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(84,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Other Utility :"])),(l()(),t.Lb(86,null,["",""])),(l()(),t.tb(87,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(88,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Water :"])),(l()(),t.Lb(90,null,["",""])),(l()(),t.tb(91,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(92,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Remark :"])),(l()(),t.Lb(94,null,["",""])),(l()(),t.tb(95,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.tb(96,0,null,null,0,"li",[],null,null,null,null,null)),(l()(),t.tb(97,0,null,null,34,"ul",[],null,null,null,null,null)),(l()(),t.tb(98,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Cost"])),(l()(),t.tb(100,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(101,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Building Cost :"])),(l()(),t.Lb(103,null,["",""])),(l()(),t.tb(104,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(105,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Initial Working Capital Cost :"])),(l()(),t.Lb(107,null,["",""])),(l()(),t.tb(108,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(109,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Land Cost :"])),(l()(),t.Lb(111,null,["",""])),(l()(),t.tb(112,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(113,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Machinery Cost :"])),(l()(),t.Lb(115,null,["",""])),(l()(),t.tb(116,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(117,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Office Equipment Cost :"])),(l()(),t.Lb(119,null,["",""])),(l()(),t.tb(120,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(121,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Transport Cost :"])),(l()(),t.Lb(123,null,["",""])),(l()(),t.tb(124,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(125,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Equity Finance : "])),(l()(),t.Lb(127,null,["",""])),(l()(),t.tb(128,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(129,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Loan Finance :"])),(l()(),t.Lb(131,null,["",""])),(l()(),t.tb(132,0,null,null,34,"ul",[],null,null,null,null,null)),(l()(),t.tb(133,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Employment"])),(l()(),t.tb(135,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(136,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Permanent Female :"])),(l()(),t.Lb(138,null,["",""])),(l()(),t.tb(139,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(140,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Permanent Male :"])),(l()(),t.Lb(142,null,["",""])),(l()(),t.tb(143,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(144,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Permanent Foreign Female :"])),(l()(),t.Lb(146,null,["",""])),(l()(),t.tb(147,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(148,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Permanent Female :"])),(l()(),t.Lb(150,null,["",""])),(l()(),t.tb(151,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(152,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Temporary Female :"])),(l()(),t.Lb(154,null,["",""])),(l()(),t.tb(155,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(156,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Temporary Male :"])),(l()(),t.Lb(158,null,["",""])),(l()(),t.tb(159,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(160,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Temporary Foreign Female :"])),(l()(),t.Lb(162,null,["",""])),(l()(),t.tb(163,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.tb(164,0,null,null,1,"span",[["class","header"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Temporary Foreign Male :"])),(l()(),t.Lb(166,null,["",""])),(l()(),t.tb(167,0,null,null,1,"label",[["class","sub-label"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Project Output/Services"])),(l()(),t.tb(169,0,null,null,24,"div",[["class","margin-10"],["fxFlex","87%"],["fxLayout","row wrap"],["fxLayoutGap","3em"]],null,null,null,null,null)),t.sb(170,671744,null,0,r.e,[t.k,i.i,[2,r.o],i.f],{fxLayout:[0,"fxLayout"]},null),t.sb(171,1720320,null,0,r.f,[t.k,t.C,a.b,i.i,[2,r.n],i.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.sb(172,671744,null,0,r.b,[t.k,i.i,i.e,r.l,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.tb(173,0,null,null,20,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.sb(174,671744,null,0,r.b,[t.k,i.i,i.e,r.l,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.tb(175,0,null,null,18,"table",[["class","full-width mat-elevation-z3"]],null,null,null,null,null)),(l()(),t.tb(176,0,null,null,14,"thead",[],null,null,null,null,null)),(l()(),t.tb(177,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["No"])),(l()(),t.tb(179,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Product Name"])),(l()(),t.tb(181,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Product Qty"])),(l()(),t.tb(183,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Product Value"])),(l()(),t.tb(185,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Export Market Share"])),(l()(),t.tb(187,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Domestic Market Share"])),(l()(),t.tb(189,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Remark"])),(l()(),t.tb(191,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.kb(16777216,null,null,1,null,D)),t.sb(193,278528,null,0,b.l,[t.S,t.P,t.v],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(194,0,null,null,11,"div",[["fxFlex","87%"],["fxLayout","row wrap"],["fxLayoutGap","3em"],["style","margin-top: 50px !important;"]],null,null,null,null,null)),t.sb(195,671744,null,0,r.e,[t.k,i.i,[2,r.o],i.f],{fxLayout:[0,"fxLayout"]},null),t.sb(196,1720320,null,0,r.f,[t.k,t.C,a.b,i.i,[2,r.n],i.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.sb(197,671744,null,0,r.b,[t.k,i.i,i.e,r.l,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.tb(198,0,null,null,3,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.sb(199,671744,null,0,r.b,[t.k,i.i,i.e,r.l,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.tb(200,0,null,null,1,"label",[["class","sub-label"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Project Raw Material Input"])),(l()(),t.tb(202,0,null,null,3,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.sb(203,671744,null,0,r.b,[t.k,i.i,i.e,r.l,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.tb(204,0,null,null,1,"label",[["class","sub-label"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Project Nationality composition"])),(l()(),t.tb(206,0,null,null,35,"div",[["class"," mat-elevation-z2"],["fxFlex","87%"],["fxLayout","row wrap"],["fxLayoutGap","3em"]],null,null,null,null,null)),t.sb(207,671744,null,0,r.e,[t.k,i.i,[2,r.o],i.f],{fxLayout:[0,"fxLayout"]},null),t.sb(208,1720320,null,0,r.f,[t.k,t.C,a.b,i.i,[2,r.n],i.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.sb(209,671744,null,0,r.b,[t.k,i.i,i.e,r.l,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.tb(210,0,null,null,14,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.sb(211,671744,null,0,r.b,[t.k,i.i,i.e,r.l,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.tb(212,0,null,null,12,"table",[["class","full-width "]],null,null,null,null,null)),(l()(),t.tb(213,0,null,null,8,"thead",[],null,null,null,null,null)),(l()(),t.tb(214,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["No"])),(l()(),t.tb(216,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Raw Material Type"])),(l()(),t.tb(218,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Is Foreign"])),(l()(),t.tb(220,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Remark"])),(l()(),t.tb(222,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.kb(16777216,null,null,1,null,R)),t.sb(224,278528,null,0,b.l,[t.S,t.P,t.v],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(225,0,null,null,16,"div",[["class","block"],["fxFlex",""]],null,null,null,null,null)),t.sb(226,671744,null,0,r.b,[t.k,i.i,i.e,r.l,i.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.tb(227,0,null,null,14,"table",[["class","full-width"]],null,null,null,null,null)),(l()(),t.tb(228,0,null,null,10,"thead",[],null,null,null,null,null)),(l()(),t.tb(229,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["No"])),(l()(),t.tb(231,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Nationality"])),(l()(),t.tb(233,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Qty"])),(l()(),t.tb(235,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["SharePercent"])),(l()(),t.tb(237,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Description"])),(l()(),t.tb(239,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.kb(16777216,null,null,1,null,q)),t.sb(241,278528,null,0,b.l,[t.S,t.P,t.v],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(242,0,null,0,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,p.b,p.a)),t.sb(243,49152,null,0,d.a,[],null,null),(l()(),t.tb(244,0,null,0,7,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),t.sb(245,16384,null,0,o.b,[],null,null),(l()(),t.tb(246,0,null,null,5,"button",[["color","primary"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.back()&&t),t},f.d,f.b)),t.sb(247,180224,null,0,m.b,[t.k,L.a,h.h,[2,g.a]],{color:[0,"color"]},null),(l()(),t.tb(248,0,null,0,2,"mat-icon",[["class","mat-18 mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,x.b,x.a)),t.sb(249,9158656,null,0,j.b,[t.k,j.d,[8,null],[2,j.a]],null,null),(l()(),t.Lb(-1,0,["arrow_back"])),(l()(),t.Lb(-1,0,[" Back "]))],function(l,n){var u=n.component;l(n,3,0,"row"),l(n,4,0,"0"),l(n,5,0,"start center"),l(n,7,0,"20"),l(n,9,0,"projectDetail","view_list"),l(n,11,0,"70"),l(n,31,0,"margin-10 row wrap"),l(n,170,0,"row wrap"),l(n,171,0,"3em"),l(n,172,0,"87%"),l(n,174,0,""),l(n,193,0,u.projectOutput),l(n,195,0,"row wrap"),l(n,196,0,"3em"),l(n,197,0,"87%"),l(n,199,0,""),l(n,203,0,""),l(n,207,0,"row wrap"),l(n,208,0,"3em"),l(n,209,0,"87%"),l(n,211,0,""),l(n,224,0,u.projectInputs),l(n,226,0,""),l(n,241,0,u.projectShare),l(n,247,0,"primary"),l(n,249,0)},function(l,n){var u=n.component;l(n,13,0,u.investorName),l(n,17,0,null==u.projectDetail?null:u.projectDetail.ProjectName),l(n,22,0,u.projectStageItem.DescriptionEnglish),l(n,27,0,u.projectStatusItem.DescriptionEnglish),l(n,39,0,null==u.addressList?null:u.addressList.SpecificAreaName),l(n,43,0,null==u.addressList?null:u.addressList.Kebele.DescriptionEnglish),l(n,47,0,null==u.addressList?null:u.addressList.Woreda.DescriptionEnglish),l(n,51,0,null==u.addressList?null:u.addressList.Zone.DescriptionEnglish),l(n,55,0,null==u.addressList?null:u.addressList.Region.DescriptionEnglish),l(n,59,0,null==u.addressList?null:u.addressList.Remark),l(n,70,0,null==u.projectRequirement?null:u.projectRequirement.ElectricPower),l(n,74,0,null==u.projectRequirement?null:u.projectRequirement.LandAgricultural),l(n,78,0,null==u.projectRequirement?null:u.projectRequirement.LandIndustrial),l(n,82,0,null==u.projectRequirement?null:u.projectRequirement.LandService),l(n,86,0,null==u.projectRequirement?null:u.projectRequirement.OtherUtility),l(n,90,0,null==u.projectRequirement?null:u.projectRequirement.Water),l(n,94,0,null==u.projectRequirement?null:u.projectRequirement.Remark),l(n,103,0,null==u.projectCost?null:u.projectCost.BuildingCost),l(n,107,0,null==u.projectCost?null:u.projectCost.InitialWorkingCapitalCost),l(n,111,0,null==u.projectCost?null:u.projectCost.LandCost),l(n,115,0,null==u.projectCost?null:u.projectCost.MachineryCost),l(n,119,0,null==u.projectCost?null:u.projectCost.OfficeEquipmentCost),l(n,123,0,null==u.projectCost?null:u.projectCost.TransportCost),l(n,127,0,null==u.projectCost?null:u.projectCost.EquityFinance),l(n,131,0,null==u.projectCost?null:u.projectCost.LoanFinance),l(n,138,0,null==u.projectEmployement?null:u.projectEmployement.PermanentFemale),l(n,142,0,null==u.projectEmployement?null:u.projectEmployement.PermanentMale),l(n,146,0,null==u.projectEmployement?null:u.projectEmployement.PermanentForeignFemale),l(n,150,0,null==u.projectEmployement?null:u.projectEmployement.PermanentFemale),l(n,154,0,null==u.projectEmployement?null:u.projectEmployement.TemporaryFemale),l(n,158,0,null==u.projectEmployement?null:u.projectEmployement.TemporaryMale),l(n,162,0,null==u.projectEmployement?null:u.projectEmployement.TemporaryForeignFemale),l(n,166,0,null==u.projectEmployement?null:u.projectEmployement.TemporaryForeignMale),l(n,242,0,t.Db(n,243).vertical?"vertical":"horizontal",t.Db(n,243).vertical,!t.Db(n,243).vertical,t.Db(n,243).inset),l(n,244,0,"end"===t.Db(n,245).align),l(n,246,0,t.Db(n,247).disabled||null,"NoopAnimations"===t.Db(n,247)._animationMode),l(n,248,0,t.Db(n,249).inline,"primary"!==t.Db(n,249).color&&"accent"!==t.Db(n,249).color&&"warn"!==t.Db(n,249).color)})}function T(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-project-profile-detail",[],null,null,null,N,I)),t.sb(1,114688,null,0,y.a,[P.a,v.o,v.a,C.a,k.a,w.a,F.a,S.a,O.a,M.a,_.a,E.a],null,null)],function(l,n){l(n,1,0)},null)}var z=t.pb("app-project-profile-detail",y.a,T,{},{},[])},ah87:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){return function(){}}()},kR2P:function(l,n,u){"use strict";u.d(n,"a",function(){return t}),u("2Ik6");var t=function(){return function(){}}()}}]);