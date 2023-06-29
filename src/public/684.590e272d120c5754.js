<<<<<<< HEAD
"use strict";(self.webpackChunkproject_dw_2023_client=self.webpackChunkproject_dw_2023_client||[]).push([[684],{6684:(ht,Z,s)=>{s.r(Z),s.d(Z,{ProtectedModule:()=>ft});var d=s(4755),p=s(4660),I=s(5577),m=s(5580),t=s(2223),T=s(2340),L=s(4004),U=s(3144);let S=(()=>{class o{constructor(e){this.http=e,this.baseUrl=T.N.apiUrl||"http://localhost:3000/api"}updateImage(e,n,a){const r=new FormData;return r.append("file",e),this.http.put(`${this.baseUrl}/uploads/${n}/${a}`,r).pipe((0,L.U)(_=>_.img))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(U.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var b=s(2018),u=s(1728),Y=s(7081);function q(o,i){1&o&&t._UZ(0,"mat-progress-bar",7)}let y=(()=>{class o{constructor(e,n,a,r){this.dialogRef=e,this.data=n,this.fileUploadService=a,this.toastr=r,this.isUploading=!1}changeImage(e){this.uploadImg=e.target.files[0]}uploadImage(){this.isUploading=!0;const{collection:e,id:n}=this.data;this.fileUploadService.updateImage(this.uploadImg,e,n).subscribe({next:a=>{this.dialogRef.close(a),this.toastr.success("Image changed successfully")},error:a=>{this.toastr.error(a.error.errors[0].msg),this.isUploading=!1}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.so),t.Y36(m.WI),t.Y36(S),t.Y36(b._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-upload-file-dialog"]],decls:10,vars:5,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"d-flex","flex-column","justify-content-center","aling-items-center","gap-3"],["type","file","id","formFile",1,"form-control",3,"disabled","change"],["color","primary","mat-flat-button","",3,"disabled","click"],["mode","indeterminate",4,"ngIf"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","","cdkFocusInitial","",3,"mat-dialog-close"],["mode","indeterminate"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Upload New Image"),t.qZA(),t.TgZ(2,"div",1)(3,"input",2),t.NdJ("change",function(r){return n.changeImage(r)}),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){return n.uploadImage()}),t._uU(5),t.qZA(),t.YNc(6,q,1,0,"mat-progress-bar",4),t.qZA(),t.TgZ(7,"div",5)(8,"button",6),t._uU(9," Close "),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("disabled",n.isUploading),t.xp6(1),t.Q6J("disabled",!n.uploadImg||n.isUploading),t.xp6(1),t.hij(" ",n.isUploading?"Uploading...":"Update Image"," "),t.xp6(1),t.Q6J("ngIf",n.isUploading),t.xp6(2),t.Q6J("mat-dialog-close",!1))},dependencies:[d.O5,u.lW,m.ZT,m.uh,m.xY,m.H8,Y.pW]}),o})(),f=(()=>{class o{constructor(e){this.http=e,this.baseUrl=T.N.apiUrl||"http://localhost:3000/api"}getUserById(e){return this.http.get(`${this.baseUrl}/users/${e}`)}updateUser(e,n){return this.http.put(`${this.baseUrl}/users/${e}`,n)}getLookingForGroupUsers(){return this.http.get(`${this.baseUrl}/users?lfg=true`)}createComment(e){return this.http.post(`${this.baseUrl}/comments`,e)}getComments(e){return this.http.get(`${this.baseUrl}/comments${e}`)}deleteComment(e){return this.http.delete(`${this.baseUrl}/comments/${e}`)}createCampaign(e){return this.http.post(`${this.baseUrl}/campaigns`,e)}getCampaigns(){return this.http.get(`${this.baseUrl}/campaigns`)}getCampaign(e){return this.http.get(`${this.baseUrl}/campaigns/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(U.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var g=s(7556),C=s(3617),l=s(6012),c=s(9401),h=s(430),v=s(9114),F=s(8097),k=s(8467);let J=(()=>{class o{constructor(e,n){this.dialogRef=e,this.data=n}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.so),t.Y36(m.WI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-confirm-dialog"]],decls:9,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","",3,"mat-dialog-close"],["mat-button","","mat-dialog-close","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(e,n){1&e&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1),t._uU(3),t.qZA(),t.TgZ(4,"div",2)(5,"button",3),t._uU(6,"No"),t.qZA(),t.TgZ(7,"button",4),t._uU(8," Yes "),t.qZA()()),2&e&&(t.xp6(1),t.Oqu(n.data.title),t.xp6(2),t.Oqu(n.data.message),t.xp6(2),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("mat-dialog-close",!0))},dependencies:[u.lW,m.ZT,m.uh,m.xY,m.H8]}),o})();function w(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"button",6),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.updateComment())}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",7),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.deleteComment())}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()()}}let O=(()=>{class o{get activeUser(){return this.authService.activeUser}constructor(e,n,a,r){this.authService=e,this.apiService=n,this.toastr=a,this.dialog=r,this.editMode=!1,this.deleteCommentEvent=new t.vpe}deleteComment(){this.dialog.open(J,{width:"250px",data:{title:"Delete Comment",message:"Are you sure you want to delete this comment?"}}).afterClosed().subscribe({next:n=>{n&&this.comment.id&&this.apiService.deleteComment(this.comment.id).subscribe({next:()=>{this.deleteCommentEvent.emit(this.comment),this.toastr.success("Comment deleted successfully")},error:()=>{this.toastr.error("Error deleting comment")}})}})}updateComment(){this.editMode=!0}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.e),t.Y36(f),t.Y36(b._W),t.Y36(m.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-comment"]],inputs:{comment:"comment"},outputs:{deleteCommentEvent:"deleteCommentEvent"},decls:9,vars:5,consts:[[1,"comment","gap-2","p-2","d-flex","justify-content-between","border"],[1,"d-flex","flex-column","justify-content-center","align-items-center",3,"routerLink"],["mat-card-avatar","","alt","",3,"src"],[1,"text-center"],["class","gap-2 d-flex flex-column justify-content-center align-items-center",4,"ngIf"],[1,"gap-2","d-flex","flex-column","justify-content-center","align-items-center"],["disabled","","mat-mini-fab","","color","primary","aria-label","Example icon button with a menu icon",3,"click"],["mat-mini-fab","","color","secondary","aria-label","Example icon button with a menu icon",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"p",3),t._uU(4),t.qZA()(),t.TgZ(5,"div")(6,"p"),t._uU(7),t.qZA()(),t.YNc(8,w,7,0,"div",4),t.qZA()),2&e&&(t.xp6(1),t.MGl("routerLink","/dashboard/profile/",n.comment.creator.id,""),t.xp6(1),t.Q6J("src",n.comment.creator.img,t.LSH),t.xp6(2),t.Oqu(n.comment.creator.username),t.xp6(3),t.hij(" ",n.comment.content," "),t.xp6(1),t.Q6J("ngIf",n.comment.creator.id===(null==n.activeUser?null:n.activeUser.id)))},dependencies:[d.O5,p.rH,u.nh,h.Hw,l.kc],styles:[".comment[_ngcontent-%COMP%]{width:20em}"]}),o})();function R(o,i){1&o&&(t.TgZ(0,"button",9)(1,"mat-icon"),t._uU(2,"send"),t.qZA()())}function M(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"app-comment",12),t.NdJ("deleteCommentEvent",function(a){t.CHM(e);const r=t.oxw(3);return t.KtG(r.deleteComment(a))}),t.qZA()()}if(2&o){const e=i.$implicit;t.xp6(1),t.Q6J("comment",e)}}function G(o,i){if(1&o&&(t.TgZ(0,"div",10),t.YNc(1,M,2,1,"div",11),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.comments)}}function E(o,i){1&o&&(t.TgZ(0,"p",13),t._uU(1,"No comments to display"),t.qZA())}function Q(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.sendComment())}),t.TgZ(2,"mat-form-field",4)(3,"mat-label"),t._uU(4,"Leave a comment"),t.qZA(),t._UZ(5,"textarea",5),t.YNc(6,R,3,0,"button",6),t.qZA()(),t.YNc(7,G,2,1,"div",7),t.YNc(8,E,2,0,"ng-template",null,8,t.W1O),t.qZA()}if(2&o){const e=t.MAs(9),n=t.oxw();let a;t.xp6(1),t.Q6J("formGroup",n.commentForm),t.xp6(5),t.Q6J("ngIf",null==(a=n.commentForm.get("comment"))?null:a.value),t.xp6(1),t.Q6J("ngIf",n.comments.length)("ngIfElse",e)}}function D(o,i){1&o&&(t.TgZ(0,"div",14),t._UZ(1,"mat-spinner"),t.qZA())}let A=(()=>{class o{get activeUser(){return this.authService.activeUser}constructor(e,n,a,r){this.fb=e,this.authService=n,this.apiService=a,this.toastr=r,this.userRef=null,this.postRef=null,this.comments=[],this.isLoadingComments=!1,this.commentForm=this.fb.group({comment:[""]})}ngOnInit(){this.isLoadingComments=!0,this.apiService.getComments(this.postRef?`?postRef=${this.postRef}`:`?userRef=${this.userRef}`).subscribe({next:n=>{this.comments=n.comments,this.isLoadingComments=!1},error:n=>{this.toastr.error(n.error.errors[0].msg),this.isLoadingComments=!1}})}ngOnChanges(){this.isLoadingComments=!0,this.apiService.getComments(this.postRef?`?postRef=${this.postRef}`:`?userRef=${this.userRef}`).subscribe({next:n=>{this.comments=n.comments,this.isLoadingComments=!1},error:n=>{this.toastr.error(n.error.errors[0].msg),this.isLoadingComments=!1}})}sendComment(){if(!this.commentForm.value.comment)return;const e={userRef:this.userRef,postRef:this.postRef,creator:this.authService.activeUser,content:this.commentForm.value.comment};this.apiService.createComment(e).subscribe({next:n=>{e.id=n.id,this.comments.push(e),this.commentForm.reset()},error:n=>{console.error(n),this.toastr.error(n.error.errors[0].msg)}})}deleteComment(e){const n=this.comments.findIndex(a=>a.id===e.id);-1!==n&&this.comments.splice(n,1)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.qu),t.Y36(g.e),t.Y36(f),t.Y36(b._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-comments-section"]],inputs:{userRef:"userRef",postRef:"postRef"},features:[t.TTD],decls:3,vars:2,consts:[["class","d-flex justify-content-around align-items-center flex-column",4,"ngIf","ngIfElse"],["loadingComments",""],[1,"d-flex","justify-content-around","align-items-center","flex-column"],["action","",3,"formGroup","ngSubmit"],[1,"m-3"],["formControlName","comment","matInput","","placeholder","Ex. Wow! Such Cool!..."],["matSuffix","","mat-icon-button","","aria-label","Send",4,"ngIf"],["class","d-flex flex-column gap-2",4,"ngIf","ngIfElse"],["noComments",""],["matSuffix","","mat-icon-button","","aria-label","Send"],[1,"d-flex","flex-column","gap-2"],[4,"ngFor","ngForOf"],[3,"comment","deleteCommentEvent"],[1,"text-center"],[1,"p-5","d-flex","justify-content-center","align-items-center","flex-column"]],template:function(e,n){if(1&e&&(t.YNc(0,Q,10,4,"div",0),t.YNc(1,D,2,0,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",!n.isLoadingComments)("ngIfElse",a)}},dependencies:[d.sg,d.O5,u.RK,h.Hw,v.KE,v.hX,v.R9,F.Nt,k.Ou,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,O]}),o})();function j(o,i){1&o&&(t.TgZ(0,"mat-card-actions")(1,"button",6),t._uU(2,"INVITE TO GAME"),t.qZA()())}function $(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(3);return t.KtG(a.toogleLookingForGroup())}),t._uU(1," LOOK FOR A GROUP "),t.qZA()}if(2&o){const e=t.oxw(3);t.Q6J("disabled",e.isLoadingLookingForGroup)}}function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(3);return t.KtG(a.toogleLookingForGroup())}),t._uU(1," STOP LOOKING FOR GROUP "),t.qZA()}if(2&o){const e=t.oxw(3);t.Q6J("disabled",e.isLoadingLookingForGroup)}}function X(o,i){if(1&o&&(t.TgZ(0,"mat-card-actions"),t.YNc(1,$,2,1,"button",7),t.YNc(2,H,2,1,"button",8),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.user.isLookingForGroup),t.xp6(1),t.Q6J("ngIf",e.user.isLookingForGroup)}}function K(o,i){if(1&o&&t._UZ(0,"app-comments-section",11),2&o){const e=t.oxw(2);t.Q6J("userRef",e.user.id)}}function B(o,i){1&o&&t._uU(0," Content 2 ")}function W(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"mat-card")(2,"mat-card-header")(3,"img",1),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.openImageDialog())}),t.qZA(),t.TgZ(4,"mat-card-title"),t._uU(5),t.qZA(),t.TgZ(6,"mat-card-subtitle"),t._uU(7),t.qZA()(),t.YNc(8,j,3,0,"mat-card-actions",0),t.YNc(9,X,3,2,"mat-card-actions",0),t.qZA(),t.TgZ(10,"mat-tab-group",2)(11,"mat-tab",3),t.YNc(12,K,1,1,"ng-template",4),t.qZA(),t.TgZ(13,"mat-tab",5),t.YNc(14,B,1,0,"ng-template",4),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(3),t.Akn((null==e.activeUser?null:e.activeUser.id)===e.user.id?"cursor: pointer":""),t.Q6J("src",e.user.img,t.LSH),t.xp6(2),t.Oqu(e.user.username),t.xp6(2),t.hij("@",e.user.username,""),t.xp6(1),t.Q6J("ngIf",(null==e.activeUser?null:e.activeUser.id)!==e.user.id),t.xp6(1),t.Q6J("ngIf",(null==e.activeUser?null:e.activeUser.id)===e.user.id)}}let z=(()=>{class o{get activeUser(){return this.authService.activeUser}constructor(e,n,a,r){this.activatedRoute=e,this.apiService=n,this.authService=a,this.dialog=r,this.isLoadingLookingForGroup=!1}ngOnInit(){this.activatedRoute.params.pipe((0,I.z)(e=>this.apiService.getUserById(e.id))).subscribe({next:e=>{this.user=e.user}})}openImageDialog(){this.activeUser&&this.activeUser.id===this.user.id&&this.dialog.open(y,{width:"30em",data:{id:this.user.id,collection:"users"}}).afterClosed().subscribe(n=>{n&&(this.user.img=n)})}toogleLookingForGroup(){!this.activeUser||this.activeUser.id!==this.user.id||(this.isLoadingLookingForGroup=!0,this.apiService.updateUser(this.user.id,{isLookingForGroup:!this.user.isLookingForGroup}).subscribe({next:e=>{this.user.isLookingForGroup=e.user.isLookingForGroup,this.isLoadingLookingForGroup=!1},error:e=>{this.isLoadingLookingForGroup=!1}}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.gz),t.Y36(f),t.Y36(g.e),t.Y36(m.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-profile"]],decls:1,vars:1,consts:[[4,"ngIf"],["mat-card-avatar","","alt","A user avatar",1,"profile-avatar",3,"src","click"],["mat-align-tabs","center"],["label","Comments"],["matTabContent",""],["label","Character Sheet"],["color","accent","mat-flat-button",""],["color","primary","mat-flat-button","",3,"disabled","click",4,"ngIf"],["color","warn","mat-flat-button","",3,"disabled","click",4,"ngIf"],["color","primary","mat-flat-button","",3,"disabled","click"],["color","warn","mat-flat-button","",3,"disabled","click"],[3,"userRef"]],template:function(e,n){1&e&&t.YNc(0,W,15,7,"div",0),2&e&&t.Q6J("ngIf",n.user)},dependencies:[d.O5,u.lW,C.Vc,C.uX,C.SP,l.a8,l.hq,l.kc,l.dk,l.$j,l.n5,A],styles:[".profile-avatar[_ngcontent-%COMP%]{width:5em;height:5em}"]}),o})();var P=s(5085);function V(o,i){if(1&o&&(t.TgZ(0,"div",1)(1,"div")(2,"p"),t._uU(3),t.qZA()(),t.TgZ(4,"div",2)(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"button",3)(8,"mat-icon"),t._uU(9,"play_circle"),t.qZA()()()()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.post.title),t.xp6(3),t.AsE("",e.post.currentPlayers.length,"/",e.post.playersNeeded,""),t.xp6(1),t.MGl("routerLink","/dashboard/campaign-details/",e.post._id,"")}}let tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post"]],inputs:{post:"post"},decls:1,vars:1,consts:[["class","d-flex align-items-center justify-content-between border post-container ps-2 mx-1","style","background-color: rgb(235, 208, 173)",4,"ngIf"],[1,"d-flex","align-items-center","justify-content-between","border","post-container","ps-2","mx-1",2,"background-color","rgb(235, 208, 173)"],[1,"d-flex","align-items-center"],["mat-icon-button","","color","primary","aria-label","Example icon button with a vertical three dot icon",3,"routerLink"]],template:function(e,n){1&e&&t.YNc(0,V,10,4,"div",0),2&e&&t.Q6J("ngIf",n.post)},dependencies:[d.O5,p.rH,u.RK,h.Hw],styles:["p[_ngcontent-%COMP%]{margin:0;padding:0}.post-container[_ngcontent-%COMP%]{height:4em}"]}),o})();function et(o,i){if(1&o&&(t.TgZ(0,"mat-list-item"),t._UZ(1,"app-post",1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Q6J("post",e)}}let ot=(()=>{class o{constructor(){this.filteredPosts=[]}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-post-list"]],inputs:{filteredPosts:"filteredPosts"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"post"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-list"),t.YNc(1,et,2,1,"mat-list-item",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.filteredPosts))},dependencies:[d.sg,P.i$,P.Tg,tt],styles:[".mdc-list-item[_ngcontent-%COMP%]{display:contents;margin-left:1em;margin-right:1em}mat-list-item[_ngcontent-%COMP%]{margin-bottom:10px}"]}),o})(),nt=(()=>{class o{constructor(e){this.api=e,this.campaignPosts=[],this.lfgPosts=[]}ngOnInit(){this.getCampaigns()}getCampaigns(){this.api.getCampaigns().subscribe({next:e=>{this.campaignPosts=e.campaigns}})}getLfgPosts(){this.api.getLookingForGroupUsers().subscribe({next:e=>{this.lfgPosts=e.users}})}onTabClick(e){"Campaigns"===e.tab.textLabel?this.getCampaigns():"Looking for group"===e.tab.textLabel&&this.getLfgPosts()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-feed"]],decls:7,vars:2,consts:[["mat-align-tabs","center",3,"selectedTabChange"],["label","Campaigns"],[1,"content"],[3,"filteredPosts"],["label","Looking for group"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-tab-group",0),t.NdJ("selectedTabChange",function(r){return n.onTabClick(r)}),t.TgZ(1,"mat-tab",1)(2,"div",2),t._UZ(3,"app-post-list",3),t.qZA()(),t.TgZ(4,"mat-tab",4)(5,"div",2),t._UZ(6,"app-post-list",3),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("filteredPosts",n.campaignPosts),t.xp6(3),t.Q6J("filteredPosts",n.lfgPosts))},dependencies:[C.uX,C.SP,ot]}),o})();var N=s(9383);let it=(()=>{class o{constructor(e,n){this.authService=e,this.router=n}openProfile(){this.router.navigateByUrl(`dashboard/profile/${this.authService.activeUser.id}`)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.e),t.Y36(p.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-bottom-nav"]],decls:10,vars:0,consts:[["color","primary",1,"d-flex","justify-content-evenly","aling-items-center"],["mat-icon-button","","routerLink","/dashboard/feed","aria-label","Example icon button with a vertical three dot icon"],["mat-fab","","matTooltip","Primary","color","accent","aria-label","Example fab with a heart icon","routerLink","/dashboard/create-post"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-toolbar",0)(1,"button",1)(2,"mat-icon"),t._uU(3,"forum"),t.qZA()(),t.TgZ(4,"button",2)(5,"mat-icon"),t._uU(6,"add"),t.qZA()(),t.TgZ(7,"button",3),t.NdJ("click",function(){return n.openProfile()}),t.TgZ(8,"mat-icon"),t._uU(9,"account_circle"),t.qZA()()())},dependencies:[p.rH,N.Ye,u.RK,u.cs,h.Hw]}),o})();var x=s(2659),at=s(5308);let st=(()=>{class o{constructor(e,n){this.authService=e,this.router=n}logout(){this.router.navigateByUrl("/auth/login"),this.authService.logout().subscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.e),t.Y36(p.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-top-nav"]],decls:23,vars:1,consts:[["color","primary",1,"d-flex","justify-content-between"],["mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon"],["matBadge","15","matBadgeColor","warn"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-toolbar",0)(1,"span"),t._uU(2,"DnT"),t.qZA(),t.TgZ(3,"div")(4,"button",1)(5,"mat-icon",2),t._uU(6,"notifications"),t.qZA()(),t.TgZ(7,"button",1)(8,"mat-icon"),t._uU(9,"chat_bubble"),t.qZA()(),t.TgZ(10,"button",1)(11,"mat-icon"),t._uU(12,"description"),t.qZA()(),t.TgZ(13,"button",3)(14,"mat-icon"),t._uU(15,"more_vert"),t.qZA()(),t.TgZ(16,"mat-menu",null,4)(18,"button",5),t.NdJ("click",function(){return n.logout()}),t.TgZ(19,"mat-icon"),t._uU(20,"logout"),t.qZA(),t.TgZ(21,"span"),t._uU(22,"Logout"),t.qZA()()()()()),2&e){const a=t.MAs(17);t.xp6(13),t.Q6J("matMenuTriggerFor",a)}},dependencies:[N.Ye,u.RK,h.Hw,x.VK,x.OP,x.p6,at.k]}),o})();function lt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-card")(1,"mat-card-header",2),t._UZ(2,"img",3),t.TgZ(3,"mat-card-title"),t._uU(4),t.qZA(),t.TgZ(5,"mat-card-subtitle",4),t._uU(6),t.qZA(),t.TgZ(7,"div",5)(8,"p",6),t._uU(9),t._UZ(10,"br"),t._uU(11," Players "),t.qZA()()(),t.TgZ(12,"img",7),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.updateImage())}),t.qZA(),t.TgZ(13,"mat-card-content")(14,"p"),t._uU(15),t.qZA()(),t.TgZ(16,"mat-card-actions")(17,"button",8),t._uU(18,"Join"),t.qZA()()()}if(2&o){const e=t.oxw(2);t.xp6(2),t.s9C("src",e.campaign.creator.img,t.LSH),t.MGl("routerLink","/dashboard/profile/",e.campaign.creator.id,""),t.xp6(2),t.Oqu(e.campaign.title),t.xp6(2),t.hij("Dungeon Master: ",e.campaign.creator.username,""),t.xp6(3),t.AsE(" ",e.campaign.currentPlayers.length,"/",e.campaign.playersNeeded," "),t.xp6(3),t.s9C("src",e.campaign.img,t.LSH),t.xp6(3),t.hij(" ",e.campaign.description," ")}}function pt(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,lt,19,8,"mat-card",0),t._UZ(2,"app-comments-section",1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.campaign),t.xp6(1),t.Q6J("postRef",e.campaign._id)}}const ut=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-main"]],decls:4,vars:0,consts:[[1,"main-content"]],template:function(e,n){1&e&&(t._UZ(0,"app-top-nav"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-bottom-nav"))},dependencies:[p.lC,it,st],styles:["app-top-nav[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;background-color:#f1f1f1;z-index:3}app-bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;background-color:#f1f1f1;z-index:3}.main-content[_ngcontent-%COMP%]{padding-top:56px;padding-bottom:3px;max-height:calc(100vh - 56px);overflow-y:auto}"]}),o})(),children:[{path:"profile/:id",component:z},{path:"feed",component:nt},{path:"create-post",component:(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-post"]],decls:11,vars:0,consts:[[1,"d-flex","gap-5","flex-column","justify-content-center","align-items-center","h100"],["mat-fab","","extended","","color","accent","routerLink","/dashboard/create-campaign"],["mat-fab","","extended","","color","accent"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"button",1)(2,"mat-icon"),t._uU(3,"add"),t.qZA(),t._uU(4," Create Campaign "),t.qZA(),t.TgZ(5,"p"),t._uU(6,"OR"),t.qZA(),t.TgZ(7,"button",2)(8,"mat-icon"),t._uU(9,"add"),t.qZA(),t._uU(10," Look for a Group "),t.qZA()())},dependencies:[p.rH,u.cs,h.Hw],styles:[".h100[_ngcontent-%COMP%]{height:87vh}p[_ngcontent-%COMP%]{margin:0;padding:0;font-weight:bolder;font-size:large}"]}),o})()},{path:"create-campaign",component:(()=>{class o{get user(){return this.auth.activeUser}constructor(e,n,a,r){this.fb=e,this.api=n,this.auth=a,this.toastr=r,this.campaignForm=this.fb.group({title:["",[c.kI.required]],description:["",[c.kI.required]],playersNeeded:["",[c.kI.required]]})}createPost(){const{title:e,description:n,playersNeeded:a}=this.campaignForm.value;return this.api.createCampaign({title:e,description:n,playersNeeded:a,creator:this.user.id}).subscribe({next:_=>{_.id&&(this.toastr.success("Campaign created successfully!"),this.campaignForm.reset())},error:_=>{console.error(_),this.toastr.error(_.error.errors[0].msg)}}),this.campaignForm.value}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.qu),t.Y36(f),t.Y36(g.e),t.Y36(b._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-campaign"]],decls:16,vars:2,consts:[[1,"d-flex","gap-3","flex-column","justify-content-center","align-items-center","p-3",3,"formGroup","ngSubmit"],[1,"example-full-width"],["matInput","","placeholder","Ex. Curse of Strahd","formControlName","title"],["matInput","","type","number","placeholder","Ex. 4","formControlName","playersNeeded"],["matInput","","placeholder","Ex. You are trapped in the lands of Barovia...","formControlName","description"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(e,n){1&e&&(t.TgZ(0,"div")(1,"form",0),t.NdJ("ngSubmit",function(){return n.createPost()}),t.TgZ(2,"mat-form-field",1)(3,"mat-label"),t._uU(4,"Campaign Name"),t.qZA(),t._UZ(5,"input",2),t.qZA(),t.TgZ(6,"mat-form-field",1)(7,"mat-label"),t._uU(8,"Number of Players"),t.qZA(),t._UZ(9,"input",3),t.qZA(),t.TgZ(10,"mat-form-field",1)(11,"mat-label"),t._uU(12,"Description"),t.qZA(),t._UZ(13,"textarea",4),t.qZA(),t.TgZ(14,"button",5),t._uU(15," Post "),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.campaignForm),t.xp6(13),t.Q6J("disabled",n.campaignForm.invalid))},dependencies:[u.lW,v.KE,v.hX,F.Nt,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u],styles:["mat-form-field[_ngcontent-%COMP%]{width:87%}"]}),o})()},{path:"campaign-details/:id",component:(()=>{class o{get activeUser(){return this.auth.activeUser}constructor(e,n,a,r){this.api=e,this.route=n,this.auth=a,this.dialog=r}ngOnInit(){this.route.params.subscribe(e=>{this.api.getCampaign(e.id).subscribe(n=>{this.campaign=n.campaign})})}updateImage(){this.activeUser.id===this.campaign.creator.id&&this.dialog.open(y,{width:"30em",data:{id:this.campaign._id,collection:"campaigns"}}).afterClosed().subscribe(n=>{n&&(this.campaign.img=n)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f),t.Y36(p.gz),t.Y36(g.e),t.Y36(m.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-campaign-details"]],inputs:{campaign:"campaign"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"postRef"],[1,"d-flex"],["alt","Dungeon master profile pic","mat-card-avatar","",3,"src","routerLink"],[1,"me-5"],[1,"d-flex","align-items-center","justify-items-end"],[1,"p-0","m-0","text-center","fw-bolder"],["mat-card-image","","alt","Photo of the campaign",3,"src","click"],["mat-button",""]],template:function(e,n){1&e&&t.YNc(0,pt,3,2,"div",0),2&e&&t.Q6J("ngIf",n.campaign)},dependencies:[d.O5,p.rH,u.lW,l.a8,l.hq,l.kc,l.dn,l.dk,l.G2,l.$j,l.n5,A]}),o})()},{path:"**",redirectTo:"feed"}]}];let dt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(ut),p.Bz]}),o})();var gt=s(3766);let ft=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,dt,gt.q,c.UX]}),o})()}}]);
=======
'use strict';
(self.webpackChunkproject_dw_2023_client =
	self.webpackChunkproject_dw_2023_client || []).push([
	[684],
	{
		6684: (ht, Z, s) => {
			s.r(Z), s.d(Z, { ProtectedModule: () => ft });
			var d = s(4755),
				p = s(4660),
				I = s(5577),
				m = s(5580),
				t = s(2223),
				T = s(2340),
				L = s(4004),
				U = s(3144);
			let S = (() => {
				class o {
					constructor(e) {
						(this.http = e),
							(this.baseUrl = T.N.apiUrl || 'http://localhost:3000/api');
					}
					updateImage(e, n, a) {
						const r = new FormData();
						return (
							r.append('file', e),
							this.http
								.put(`${this.baseUrl}/uploads/${n}/${a}`, r)
								.pipe((0, L.U)(_ => _.img))
						);
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.LFG(U.eN));
					}),
					(o.ɵprov = t.Yz7({ token: o, factory: o.ɵfac, providedIn: 'root' })),
					o
				);
			})();
			var b = s(2018),
				u = s(1728),
				Y = s(7081);
			function q(o, i) {
				1 & o && t._UZ(0, 'mat-progress-bar', 7);
			}
			let y = (() => {
					class o {
						constructor(e, n, a, r) {
							(this.dialogRef = e),
								(this.data = n),
								(this.fileUploadService = a),
								(this.toastr = r),
								(this.isUploading = !1);
						}
						changeImage(e) {
							this.uploadImg = e.target.files[0];
						}
						uploadImage() {
							this.isUploading = !0;
							const { collection: e, id: n } = this.data;
							this.fileUploadService
								.updateImage(this.uploadImg, e, n)
								.subscribe({
									next: a => {
										this.dialogRef.close(a),
											this.toastr.success('Image changed successfully');
									},
									error: a => {
										this.toastr.error(a.error.errors[0].msg),
											(this.isUploading = !1);
									},
								});
						}
					}
					return (
						(o.ɵfac = function (e) {
							return new (e || o)(
								t.Y36(m.so),
								t.Y36(m.WI),
								t.Y36(S),
								t.Y36(b._W)
							);
						}),
						(o.ɵcmp = t.Xpm({
							type: o,
							selectors: [['app-upload-file-dialog']],
							decls: 10,
							vars: 5,
							consts: [
								['mat-dialog-title', ''],
								[
									'mat-dialog-content',
									'',
									1,
									'd-flex',
									'flex-column',
									'justify-content-center',
									'aling-items-center',
									'gap-3',
								],
								[
									'type',
									'file',
									'id',
									'formFile',
									1,
									'form-control',
									3,
									'disabled',
									'change',
								],
								[
									'color',
									'primary',
									'mat-flat-button',
									'',
									3,
									'disabled',
									'click',
								],
								['mode', 'indeterminate', 4, 'ngIf'],
								['mat-dialog-actions', ''],
								[
									'mat-button',
									'',
									'mat-dialog-close',
									'',
									'cdkFocusInitial',
									'',
									3,
									'mat-dialog-close',
								],
								['mode', 'indeterminate'],
							],
							template: function (e, n) {
								1 & e &&
									(t.TgZ(0, 'h1', 0),
									t._uU(1, 'Upload New Image'),
									t.qZA(),
									t.TgZ(2, 'div', 1)(3, 'input', 2),
									t.NdJ('change', function (r) {
										return n.changeImage(r);
									}),
									t.qZA(),
									t.TgZ(4, 'button', 3),
									t.NdJ('click', function () {
										return n.uploadImage();
									}),
									t._uU(5),
									t.qZA(),
									t.YNc(6, q, 1, 0, 'mat-progress-bar', 4),
									t.qZA(),
									t.TgZ(7, 'div', 5)(8, 'button', 6),
									t._uU(9, ' Close '),
									t.qZA()()),
									2 & e &&
										(t.xp6(3),
										t.Q6J('disabled', n.isUploading),
										t.xp6(1),
										t.Q6J('disabled', !n.uploadImg || n.isUploading),
										t.xp6(1),
										t.hij(
											' ',
											n.isUploading ? 'Uploading...' : 'Update Image',
											' '
										),
										t.xp6(1),
										t.Q6J('ngIf', n.isUploading),
										t.xp6(2),
										t.Q6J('mat-dialog-close', !1));
							},
							dependencies: [d.O5, u.lW, m.ZT, m.uh, m.xY, m.H8, Y.pW],
						})),
						o
					);
				})(),
				f = (() => {
					class o {
						constructor(e) {
							(this.http = e),
								(this.baseUrl = T.N.apiUrl || 'http://localhost:3000/api');
						}
						getUserById(e) {
							return this.http.get(`${this.baseUrl}/users/${e}`);
						}
						updateUser(e, n) {
							return this.http.put(`${this.baseUrl}/users/${e}`, n);
						}
						getLookingForGroupUsers() {
							return this.http.get(`${this.baseUrl}/users?lfg=true`);
						}
						createComment(e) {
							return this.http.post(`${this.baseUrl}/comments`, e);
						}
						getComments(e) {
							return this.http.get(`${this.baseUrl}/comments${e}`);
						}
						deleteComment(e) {
							return this.http.delete(`${this.baseUrl}/comments/${e}`);
						}
						createCampaign(e) {
							return this.http.post(`${this.baseUrl}/campaigns`, e);
						}
						getCampaigns() {
							return this.http.get(`${this.baseUrl}/campaigns`);
						}
						getCampaign(e) {
							return this.http.get(`${this.baseUrl}/campaigns/${e}`);
						}
					}
					return (
						(o.ɵfac = function (e) {
							return new (e || o)(t.LFG(U.eN));
						}),
						(o.ɵprov = t.Yz7({
							token: o,
							factory: o.ɵfac,
							providedIn: 'root',
						})),
						o
					);
				})();
			var g = s(7556),
				C = s(3617),
				l = s(6012),
				c = s(9401),
				h = s(430),
				v = s(9114),
				F = s(8097),
				k = s(8467);
			let J = (() => {
				class o {
					constructor(e, n) {
						(this.dialogRef = e), (this.data = n);
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(m.so), t.Y36(m.WI));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-confirm-dialog']],
						decls: 9,
						vars: 4,
						consts: [
							['mat-dialog-title', ''],
							['mat-dialog-content', ''],
							['mat-dialog-actions', ''],
							['mat-button', '', 'mat-dialog-close', '', 3, 'mat-dialog-close'],
							[
								'mat-button',
								'',
								'mat-dialog-close',
								'',
								'cdkFocusInitial',
								'',
								3,
								'mat-dialog-close',
							],
						],
						template: function (e, n) {
							1 & e &&
								(t.TgZ(0, 'h1', 0),
								t._uU(1),
								t.qZA(),
								t.TgZ(2, 'div', 1),
								t._uU(3),
								t.qZA(),
								t.TgZ(4, 'div', 2)(5, 'button', 3),
								t._uU(6, 'No'),
								t.qZA(),
								t.TgZ(7, 'button', 4),
								t._uU(8, ' Yes '),
								t.qZA()()),
								2 & e &&
									(t.xp6(1),
									t.Oqu(n.data.title),
									t.xp6(2),
									t.Oqu(n.data.message),
									t.xp6(2),
									t.Q6J('mat-dialog-close', !1),
									t.xp6(2),
									t.Q6J('mat-dialog-close', !0));
						},
						dependencies: [u.lW, m.ZT, m.uh, m.xY, m.H8],
					})),
					o
				);
			})();
			function w(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'div', 5)(1, 'button', 6),
						t.NdJ('click', function () {
							t.CHM(e);
							const a = t.oxw();
							return t.KtG(a.updateComment());
						}),
						t.TgZ(2, 'mat-icon'),
						t._uU(3, 'edit'),
						t.qZA()(),
						t.TgZ(4, 'button', 7),
						t.NdJ('click', function () {
							t.CHM(e);
							const a = t.oxw();
							return t.KtG(a.deleteComment());
						}),
						t.TgZ(5, 'mat-icon'),
						t._uU(6, 'delete'),
						t.qZA()()();
				}
			}
			let O = (() => {
				class o {
					get activeUser() {
						return this.authService.activeUser;
					}
					constructor(e, n, a, r) {
						(this.authService = e),
							(this.apiService = n),
							(this.toastr = a),
							(this.dialog = r),
							(this.editMode = !1),
							(this.deleteCommentEvent = new t.vpe());
					}
					deleteComment() {
						this.dialog
							.open(J, {
								width: '250px',
								data: {
									title: 'Delete Comment',
									message: 'Are you sure you want to delete this comment?',
								},
							})
							.afterClosed()
							.subscribe({
								next: n => {
									n &&
										this.comment.id &&
										this.apiService.deleteComment(this.comment.id).subscribe({
											next: () => {
												this.deleteCommentEvent.emit(this.comment),
													this.toastr.success('Comment deleted successfully');
											},
											error: () => {
												this.toastr.error('Error deleting comment');
											},
										});
								},
							});
					}
					updateComment() {
						this.editMode = !0;
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(g.e), t.Y36(f), t.Y36(b._W), t.Y36(m.uw));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-comment']],
						inputs: { comment: 'comment' },
						outputs: { deleteCommentEvent: 'deleteCommentEvent' },
						decls: 9,
						vars: 5,
						consts: [
							[
								1,
								'comment',
								'gap-2',
								'p-2',
								'd-flex',
								'justify-content-between',
								'border',
							],
							[
								1,
								'd-flex',
								'flex-column',
								'justify-content-center',
								'align-items-center',
								3,
								'routerLink',
							],
							['mat-card-avatar', '', 'alt', '', 3, 'src'],
							[1, 'text-center'],
							[
								'class',
								'gap-2 d-flex flex-column justify-content-center align-items-center',
								4,
								'ngIf',
							],
							[
								1,
								'gap-2',
								'd-flex',
								'flex-column',
								'justify-content-center',
								'align-items-center',
							],
							[
								'disabled',
								'',
								'mat-mini-fab',
								'',
								'color',
								'primary',
								'aria-label',
								'Example icon button with a menu icon',
								3,
								'click',
							],
							[
								'mat-mini-fab',
								'',
								'color',
								'secondary',
								'aria-label',
								'Example icon button with a menu icon',
								3,
								'click',
							],
						],
						template: function (e, n) {
							1 & e &&
								(t.TgZ(0, 'div', 0)(1, 'div', 1),
								t._UZ(2, 'img', 2),
								t.TgZ(3, 'p', 3),
								t._uU(4),
								t.qZA()(),
								t.TgZ(5, 'div')(6, 'p'),
								t._uU(7),
								t.qZA()(),
								t.YNc(8, w, 7, 0, 'div', 4),
								t.qZA()),
								2 & e &&
									(t.xp6(1),
									t.MGl(
										'routerLink',
										'/dashboard/profile/',
										n.comment.creator.id,
										''
									),
									t.xp6(1),
									t.Q6J('src', n.comment.creator.img, t.LSH),
									t.xp6(2),
									t.Oqu(n.comment.creator.username),
									t.xp6(3),
									t.hij(' ', n.comment.content, ' '),
									t.xp6(1),
									t.Q6J(
										'ngIf',
										n.comment.creator.id ===
											(null == n.activeUser ? null : n.activeUser.id)
									));
						},
						dependencies: [d.O5, p.rH, u.nh, h.Hw, l.kc],
						styles: ['.comment[_ngcontent-%COMP%]{width:20em}'],
					})),
					o
				);
			})();
			function R(o, i) {
				1 & o &&
					(t.TgZ(0, 'button', 9)(1, 'mat-icon'), t._uU(2, 'send'), t.qZA()());
			}
			function M(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'div')(1, 'app-comment', 12),
						t.NdJ('deleteCommentEvent', function (a) {
							t.CHM(e);
							const r = t.oxw(3);
							return t.KtG(r.deleteComment(a));
						}),
						t.qZA()();
				}
				if (2 & o) {
					const e = i.$implicit;
					t.xp6(1), t.Q6J('comment', e);
				}
			}
			function G(o, i) {
				if (
					(1 & o &&
						(t.TgZ(0, 'div', 10), t.YNc(1, M, 2, 1, 'div', 11), t.qZA()),
					2 & o)
				) {
					const e = t.oxw(2);
					t.xp6(1), t.Q6J('ngForOf', e.comments);
				}
			}
			function E(o, i) {
				1 & o &&
					(t.TgZ(0, 'p', 13), t._uU(1, 'No comments to display'), t.qZA());
			}
			function Q(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'div', 2)(1, 'form', 3),
						t.NdJ('ngSubmit', function () {
							t.CHM(e);
							const a = t.oxw();
							return t.KtG(a.sendComment());
						}),
						t.TgZ(2, 'mat-form-field', 4)(3, 'mat-label'),
						t._uU(4, 'Leave a comment'),
						t.qZA(),
						t._UZ(5, 'textarea', 5),
						t.YNc(6, R, 3, 0, 'button', 6),
						t.qZA()(),
						t.YNc(7, G, 2, 1, 'div', 7),
						t.YNc(8, E, 2, 0, 'ng-template', null, 8, t.W1O),
						t.qZA();
				}
				if (2 & o) {
					const e = t.MAs(9),
						n = t.oxw();
					let a;
					t.xp6(1),
						t.Q6J('formGroup', n.commentForm),
						t.xp6(5),
						t.Q6J(
							'ngIf',
							null == (a = n.commentForm.get('comment')) ? null : a.value
						),
						t.xp6(1),
						t.Q6J('ngIf', n.comments.length)('ngIfElse', e);
				}
			}
			function D(o, i) {
				1 & o && (t.TgZ(0, 'div', 14), t._UZ(1, 'mat-spinner'), t.qZA());
			}
			let A = (() => {
				class o {
					get activeUser() {
						return this.authService.activeUser;
					}
					constructor(e, n, a, r) {
						(this.fb = e),
							(this.authService = n),
							(this.apiService = a),
							(this.toastr = r),
							(this.userRef = null),
							(this.postRef = null),
							(this.comments = []),
							(this.isLoadingComments = !1),
							(this.commentForm = this.fb.group({ comment: [''] }));
					}
					ngOnInit() {
						(this.isLoadingComments = !0),
							this.apiService
								.getComments(
									this.postRef
										? `?postRef=${this.postRef}`
										: `?userRef=${this.userRef}`
								)
								.subscribe({
									next: n => {
										(this.comments = n.comments), (this.isLoadingComments = !1);
									},
									error: n => {
										this.toastr.error(n.error.errors[0].msg),
											(this.isLoadingComments = !1);
									},
								});
					}
					ngOnChanges() {
						(this.isLoadingComments = !0),
							this.apiService
								.getComments(
									this.postRef
										? `?postRef=${this.postRef}`
										: `?userRef=${this.userRef}`
								)
								.subscribe({
									next: n => {
										(this.comments = n.comments), (this.isLoadingComments = !1);
									},
									error: n => {
										this.toastr.error(n.error.errors[0].msg),
											(this.isLoadingComments = !1);
									},
								});
					}
					sendComment() {
						if (!this.commentForm.value.comment) return;
						const e = {
							userRef: this.userRef,
							postRef: this.postRef,
							creator: this.authService.activeUser,
							content: this.commentForm.value.comment,
						};
						this.apiService.createComment(e).subscribe({
							next: n => {
								(e.id = n.id), this.comments.push(e), this.commentForm.reset();
							},
							error: n => {
								console.error(n), this.toastr.error(n.error.errors[0].msg);
							},
						});
					}
					deleteComment(e) {
						const n = this.comments.findIndex(a => a.id === e.id);
						-1 !== n && this.comments.splice(n, 1);
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(c.qu), t.Y36(g.e), t.Y36(f), t.Y36(b._W));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-comments-section']],
						inputs: { userRef: 'userRef', postRef: 'postRef' },
						features: [t.TTD],
						decls: 3,
						vars: 2,
						consts: [
							[
								'class',
								'd-flex justify-content-around align-items-center flex-column',
								4,
								'ngIf',
								'ngIfElse',
							],
							['loadingComments', ''],
							[
								1,
								'd-flex',
								'justify-content-around',
								'align-items-center',
								'flex-column',
							],
							['action', '', 3, 'formGroup', 'ngSubmit'],
							[1, 'm-3'],
							[
								'formControlName',
								'comment',
								'matInput',
								'',
								'placeholder',
								'Ex. Wow! Such Cool!...',
							],
							[
								'matSuffix',
								'',
								'mat-icon-button',
								'',
								'aria-label',
								'Send',
								4,
								'ngIf',
							],
							['class', 'd-flex flex-column gap-2', 4, 'ngIf', 'ngIfElse'],
							['noComments', ''],
							['matSuffix', '', 'mat-icon-button', '', 'aria-label', 'Send'],
							[1, 'd-flex', 'flex-column', 'gap-2'],
							[4, 'ngFor', 'ngForOf'],
							[3, 'comment', 'deleteCommentEvent'],
							[1, 'text-center'],
							[
								1,
								'p-5',
								'd-flex',
								'justify-content-center',
								'align-items-center',
								'flex-column',
							],
						],
						template: function (e, n) {
							if (
								(1 & e &&
									(t.YNc(0, Q, 10, 4, 'div', 0),
									t.YNc(1, D, 2, 0, 'ng-template', null, 1, t.W1O)),
								2 & e)
							) {
								const a = t.MAs(2);
								t.Q6J('ngIf', !n.isLoadingComments)('ngIfElse', a);
							}
						},
						dependencies: [
							d.sg,
							d.O5,
							u.RK,
							h.Hw,
							v.KE,
							v.hX,
							v.R9,
							F.Nt,
							k.Ou,
							c._Y,
							c.Fj,
							c.JJ,
							c.JL,
							c.sg,
							c.u,
							O,
						],
					})),
					o
				);
			})();
			function j(o, i) {
				1 & o &&
					(t.TgZ(0, 'mat-card-actions')(1, 'button', 6),
					t._uU(2, 'INVITE TO GAME'),
					t.qZA()());
			}
			function $(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'button', 9),
						t.NdJ('click', function () {
							t.CHM(e);
							const a = t.oxw(3);
							return t.KtG(a.toogleLookingForGroup());
						}),
						t._uU(1, ' LOOK FOR A GROUP '),
						t.qZA();
				}
				if (2 & o) {
					const e = t.oxw(3);
					t.Q6J('disabled', e.isLoadingLookingForGroup);
				}
			}
			function H(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'button', 10),
						t.NdJ('click', function () {
							t.CHM(e);
							const a = t.oxw(3);
							return t.KtG(a.toogleLookingForGroup());
						}),
						t._uU(1, ' STOP LOOKING FOR GROUP '),
						t.qZA();
				}
				if (2 & o) {
					const e = t.oxw(3);
					t.Q6J('disabled', e.isLoadingLookingForGroup);
				}
			}
			function X(o, i) {
				if (
					(1 & o &&
						(t.TgZ(0, 'mat-card-actions'),
						t.YNc(1, $, 2, 1, 'button', 7),
						t.YNc(2, H, 2, 1, 'button', 8),
						t.qZA()),
					2 & o)
				) {
					const e = t.oxw(2);
					t.xp6(1),
						t.Q6J('ngIf', !e.user.isLookingForGroup),
						t.xp6(1),
						t.Q6J('ngIf', e.user.isLookingForGroup);
				}
			}
			function K(o, i) {
				if ((1 & o && t._UZ(0, 'app-comments-section', 11), 2 & o)) {
					const e = t.oxw(2);
					t.Q6J('userRef', e.user.id);
				}
			}
			function B(o, i) {
				1 & o && t._uU(0, ' Content 2 ');
			}
			function W(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'div')(1, 'mat-card')(2, 'mat-card-header')(3, 'img', 1),
						t.NdJ('click', function () {
							t.CHM(e);
							const a = t.oxw();
							return t.KtG(a.openImageDialog());
						}),
						t.qZA(),
						t.TgZ(4, 'mat-card-title'),
						t._uU(5),
						t.qZA(),
						t.TgZ(6, 'mat-card-subtitle'),
						t._uU(7),
						t.qZA()(),
						t.YNc(8, j, 3, 0, 'mat-card-actions', 0),
						t.YNc(9, X, 3, 2, 'mat-card-actions', 0),
						t.qZA(),
						t.TgZ(10, 'mat-tab-group', 2)(11, 'mat-tab', 3),
						t.YNc(12, K, 1, 1, 'ng-template', 4),
						t.qZA(),
						t.TgZ(13, 'mat-tab', 5),
						t.YNc(14, B, 1, 0, 'ng-template', 4),
						t.qZA()()();
				}
				if (2 & o) {
					const e = t.oxw();
					t.xp6(3),
						t.Akn(
							(null == e.activeUser ? null : e.activeUser.id) === e.user.id
								? 'cursor: pointer'
								: ''
						),
						t.Q6J('src', e.user.img, t.LSH),
						t.xp6(2),
						t.Oqu(e.user.username),
						t.xp6(2),
						t.hij('@', e.user.username, ''),
						t.xp6(1),
						t.Q6J(
							'ngIf',
							(null == e.activeUser ? null : e.activeUser.id) !== e.user.id
						),
						t.xp6(1),
						t.Q6J(
							'ngIf',
							(null == e.activeUser ? null : e.activeUser.id) === e.user.id
						);
				}
			}
			let z = (() => {
				class o {
					get activeUser() {
						return this.authService.activeUser;
					}
					constructor(e, n, a, r) {
						(this.activatedRoute = e),
							(this.apiService = n),
							(this.authService = a),
							(this.dialog = r),
							(this.isLoadingLookingForGroup = !1);
					}
					ngOnInit() {
						this.activatedRoute.params
							.pipe((0, I.z)(e => this.apiService.getUserById(e.id)))
							.subscribe({
								next: e => {
									this.user = e.user;
								},
							});
					}
					openImageDialog() {
						this.activeUser &&
							this.activeUser.id === this.user.id &&
							this.dialog
								.open(y, {
									width: '30em',
									data: { id: this.user.id, collection: 'users' },
								})
								.afterClosed()
								.subscribe(n => {
									n && (this.user.img = n);
								});
					}
					toogleLookingForGroup() {
						!this.activeUser ||
							this.activeUser.id !== this.user.id ||
							((this.isLoadingLookingForGroup = !0),
							this.apiService
								.updateUser(this.user.id, {
									isLookingForGroup: !this.user.isLookingForGroup,
								})
								.subscribe({
									next: e => {
										(this.user.isLookingForGroup = e.user.isLookingForGroup),
											(this.isLoadingLookingForGroup = !1);
									},
									error: e => {
										this.isLoadingLookingForGroup = !1;
									},
								}));
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(p.gz), t.Y36(f), t.Y36(g.e), t.Y36(m.uw));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-profile']],
						decls: 1,
						vars: 1,
						consts: [
							[4, 'ngIf'],
							[
								'mat-card-avatar',
								'',
								'alt',
								'A user avatar',
								1,
								'profile-avatar',
								3,
								'src',
								'click',
							],
							['mat-align-tabs', 'center'],
							['label', 'Comments'],
							['matTabContent', ''],
							['label', 'Character Sheet'],
							['color', 'accent', 'mat-flat-button', ''],
							[
								'color',
								'primary',
								'mat-flat-button',
								'',
								3,
								'disabled',
								'click',
								4,
								'ngIf',
							],
							[
								'color',
								'warn',
								'mat-flat-button',
								'',
								3,
								'disabled',
								'click',
								4,
								'ngIf',
							],
							[
								'color',
								'primary',
								'mat-flat-button',
								'',
								3,
								'disabled',
								'click',
							],
							['color', 'warn', 'mat-flat-button', '', 3, 'disabled', 'click'],
							[3, 'userRef'],
						],
						template: function (e, n) {
							1 & e && t.YNc(0, W, 15, 7, 'div', 0),
								2 & e && t.Q6J('ngIf', n.user);
						},
						dependencies: [
							d.O5,
							u.lW,
							C.Vc,
							C.uX,
							C.SP,
							l.a8,
							l.hq,
							l.kc,
							l.dk,
							l.$j,
							l.n5,
							A,
						],
						styles: [
							'.profile-avatar[_ngcontent-%COMP%]{width:5em;height:5em}',
						],
					})),
					o
				);
			})();
			var P = s(5085);
			function V(o, i) {
				if (
					(1 & o &&
						(t.TgZ(0, 'div', 1)(1, 'div')(2, 'p'),
						t._uU(3),
						t.qZA()(),
						t.TgZ(4, 'div', 2)(5, 'p'),
						t._uU(6),
						t.qZA(),
						t.TgZ(7, 'button', 3)(8, 'mat-icon'),
						t._uU(9, 'play_circle'),
						t.qZA()()()()),
					2 & o)
				) {
					const e = t.oxw();
					t.xp6(3),
						t.Oqu(e.post.title),
						t.xp6(3),
						t.AsE(
							'',
							e.post.currentPlayers.length,
							'/',
							e.post.playersNeeded,
							''
						),
						t.xp6(1),
						t.MGl('routerLink', '/dashboard/campaign-details/', e.post._id, '');
				}
			}
			let tt = (() => {
				class o {}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)();
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-post']],
						inputs: { post: 'post' },
						decls: 1,
						vars: 1,
						consts: [
							[
								'class',
								'd-flex align-items-center justify-content-between border post-container ps-2 mx-1',
								'style',
								'background-color: rgb(235, 208, 173)',
								4,
								'ngIf',
							],
							[
								1,
								'd-flex',
								'align-items-center',
								'justify-content-between',
								'border',
								'post-container',
								'ps-2',
								'mx-1',
								2,
								'background-color',
								'rgb(235, 208, 173)',
							],
							[1, 'd-flex', 'align-items-center'],
							[
								'mat-icon-button',
								'',
								'color',
								'primary',
								'aria-label',
								'Example icon button with a vertical three dot icon',
								3,
								'routerLink',
							],
						],
						template: function (e, n) {
							1 & e && t.YNc(0, V, 10, 4, 'div', 0),
								2 & e && t.Q6J('ngIf', n.post);
						},
						dependencies: [d.O5, p.rH, u.RK, h.Hw],
						styles: [
							'p[_ngcontent-%COMP%]{margin:0;padding:0}.post-container[_ngcontent-%COMP%]{height:4em}',
						],
					})),
					o
				);
			})();
			function et(o, i) {
				if (
					(1 & o &&
						(t.TgZ(0, 'mat-list-item'), t._UZ(1, 'app-post', 1), t.qZA()),
					2 & o)
				) {
					const e = i.$implicit;
					t.xp6(1), t.Q6J('post', e);
				}
			}
			let ot = (() => {
					class o {
						constructor() {
							this.filteredPosts = [];
						}
					}
					return (
						(o.ɵfac = function (e) {
							return new (e || o)();
						}),
						(o.ɵcmp = t.Xpm({
							type: o,
							selectors: [['app-post-list']],
							inputs: { filteredPosts: 'filteredPosts' },
							decls: 2,
							vars: 1,
							consts: [
								[4, 'ngFor', 'ngForOf'],
								[3, 'post'],
							],
							template: function (e, n) {
								1 & e &&
									(t.TgZ(0, 'mat-list'),
									t.YNc(1, et, 2, 1, 'mat-list-item', 0),
									t.qZA()),
									2 & e && (t.xp6(1), t.Q6J('ngForOf', n.filteredPosts));
							},
							dependencies: [d.sg, P.i$, P.Tg, tt],
							styles: [
								'.mdc-list-item[_ngcontent-%COMP%]{display:contents;margin-left:1em;margin-right:1em}mat-list-item[_ngcontent-%COMP%]{margin-bottom:10px}',
							],
						})),
						o
					);
				})(),
				nt = (() => {
					class o {
						constructor(e) {
							(this.api = e), (this.campaignPosts = []), (this.lfgPosts = []);
						}
						ngOnInit() {
							this.getCampaigns();
						}
						getCampaigns() {
							this.api.getCampaigns().subscribe({
								next: e => {
									this.campaignPosts = e.campaigns;
								},
							});
						}
						getLfgPosts() {
							this.api.getLookingForGroupUsers().subscribe({
								next: e => {
									this.lfgPosts = e.users;
								},
							});
						}
						onTabClick(e) {
							'Campaigns' === e.tab.textLabel
								? this.getCampaigns()
								: 'Looking for group' === e.tab.textLabel && this.getLfgPosts();
						}
					}
					return (
						(o.ɵfac = function (e) {
							return new (e || o)(t.Y36(f));
						}),
						(o.ɵcmp = t.Xpm({
							type: o,
							selectors: [['app-feed']],
							decls: 7,
							vars: 2,
							consts: [
								['mat-align-tabs', 'center', 3, 'selectedTabChange'],
								['label', 'Campaigns'],
								[1, 'content'],
								[3, 'filteredPosts'],
								['label', 'Looking for group'],
							],
							template: function (e, n) {
								1 & e &&
									(t.TgZ(0, 'mat-tab-group', 0),
									t.NdJ('selectedTabChange', function (r) {
										return n.onTabClick(r);
									}),
									t.TgZ(1, 'mat-tab', 1)(2, 'div', 2),
									t._UZ(3, 'app-post-list', 3),
									t.qZA()(),
									t.TgZ(4, 'mat-tab', 4)(5, 'div', 2),
									t._UZ(6, 'app-post-list', 3),
									t.qZA()()()),
									2 & e &&
										(t.xp6(3),
										t.Q6J('filteredPosts', n.campaignPosts),
										t.xp6(3),
										t.Q6J('filteredPosts', n.lfgPosts));
							},
							dependencies: [C.uX, C.SP, ot],
						})),
						o
					);
				})();
			var N = s(9383);
			let it = (() => {
				class o {
					constructor(e, n) {
						(this.authService = e), (this.router = n);
					}
					openProfile() {
						this.router.navigateByUrl(
							`dashboard/profile/${this.authService.activeUser.id}`
						);
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(g.e), t.Y36(p.F0));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-bottom-nav']],
						decls: 10,
						vars: 0,
						consts: [
							[
								'color',
								'primary',
								1,
								'd-flex',
								'justify-content-evenly',
								'aling-items-center',
							],
							[
								'mat-icon-button',
								'',
								'routerLink',
								'/dashboard/feed',
								'aria-label',
								'Example icon button with a vertical three dot icon',
							],
							[
								'mat-fab',
								'',
								'matTooltip',
								'Primary',
								'color',
								'accent',
								'aria-label',
								'Example fab with a heart icon',
								'routerLink',
								'/dashboard/create-post',
							],
							[
								'mat-icon-button',
								'',
								'aria-label',
								'Example icon button with a vertical three dot icon',
								3,
								'click',
							],
						],
						template: function (e, n) {
							1 & e &&
								(t.TgZ(0, 'mat-toolbar', 0)(1, 'button', 1)(2, 'mat-icon'),
								t._uU(3, 'forum'),
								t.qZA()(),
								t.TgZ(4, 'button', 2)(5, 'mat-icon'),
								t._uU(6, 'add'),
								t.qZA()(),
								t.TgZ(7, 'button', 3),
								t.NdJ('click', function () {
									return n.openProfile();
								}),
								t.TgZ(8, 'mat-icon'),
								t._uU(9, 'account_circle'),
								t.qZA()()());
						},
						dependencies: [p.rH, N.Ye, u.RK, u.cs, h.Hw],
					})),
					o
				);
			})();
			var x = s(2659),
				at = s(5308);
			let st = (() => {
				class o {
					constructor(e, n) {
						(this.authService = e), (this.router = n);
					}
					logout() {
						this.router.navigateByUrl('/auth/login'),
							this.authService.logout().subscribe();
					}
				}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)(t.Y36(g.e), t.Y36(p.F0));
					}),
					(o.ɵcmp = t.Xpm({
						type: o,
						selectors: [['app-top-nav']],
						decls: 23,
						vars: 1,
						consts: [
							['color', 'primary', 1, 'd-flex', 'justify-content-between'],
							[
								'mat-icon-button',
								'',
								'aria-label',
								'Example icon-button with heart icon',
								1,
								'example-icon',
								'favorite-icon',
							],
							['matBadge', '15', 'matBadgeColor', 'warn'],
							[
								'mat-icon-button',
								'',
								'aria-label',
								'Example icon-button with share icon',
								1,
								'example-icon',
								3,
								'matMenuTriggerFor',
							],
							['menu', 'matMenu'],
							['mat-menu-item', '', 3, 'click'],
						],
						template: function (e, n) {
							if (
								(1 & e &&
									(t.TgZ(0, 'mat-toolbar', 0)(1, 'span'),
									t._uU(2, 'DnT'),
									t.qZA(),
									t.TgZ(3, 'div')(4, 'button', 1)(5, 'mat-icon', 2),
									t._uU(6, 'notifications'),
									t.qZA()(),
									t.TgZ(7, 'button', 1)(8, 'mat-icon'),
									t._uU(9, 'chat_bubble'),
									t.qZA()(),
									t.TgZ(10, 'button', 1)(11, 'mat-icon'),
									t._uU(12, 'description'),
									t.qZA()(),
									t.TgZ(13, 'button', 3)(14, 'mat-icon'),
									t._uU(15, 'more_vert'),
									t.qZA()(),
									t.TgZ(16, 'mat-menu', null, 4)(18, 'button', 5),
									t.NdJ('click', function () {
										return n.logout();
									}),
									t.TgZ(19, 'mat-icon'),
									t._uU(20, 'logout'),
									t.qZA(),
									t.TgZ(21, 'span'),
									t._uU(22, 'Logout'),
									t.qZA()()()()()),
								2 & e)
							) {
								const a = t.MAs(17);
								t.xp6(13), t.Q6J('matMenuTriggerFor', a);
							}
						},
						dependencies: [N.Ye, u.RK, h.Hw, x.VK, x.OP, x.p6, at.k],
					})),
					o
				);
			})();
			function lt(o, i) {
				if (1 & o) {
					const e = t.EpF();
					t.TgZ(0, 'mat-card')(1, 'mat-card-header', 2),
						t._UZ(2, 'img', 3),
						t.TgZ(3, 'mat-card-title'),
						t._uU(4),
						t.qZA(),
						t.TgZ(5, 'mat-card-subtitle', 4),
						t._uU(6),
						t.qZA(),
						t.TgZ(7, 'div', 5)(8, 'p', 6),
						t._uU(9),
						t._UZ(10, 'br'),
						t._uU(11, ' Players '),
						t.qZA()()(),
						t.TgZ(12, 'img', 7),
						t.NdJ('click', function () {
							t.CHM(e);
							const a = t.oxw(2);
							return t.KtG(a.updateImage());
						}),
						t.qZA(),
						t.TgZ(13, 'mat-card-content')(14, 'p'),
						t._uU(15),
						t.qZA()(),
						t.TgZ(16, 'mat-card-actions')(17, 'button', 8),
						t._uU(18, 'Join'),
						t.qZA()()();
				}
				if (2 & o) {
					const e = t.oxw(2);
					t.xp6(2),
						t.s9C('src', e.campaign.creator.img, t.LSH),
						t.MGl(
							'routerLink',
							'/dashboard/profile/',
							e.campaign.creator.id,
							''
						),
						t.xp6(2),
						t.Oqu(e.campaign.title),
						t.xp6(2),
						t.hij('Dungeon Master: ', e.campaign.creator.username, ''),
						t.xp6(3),
						t.AsE(
							' ',
							e.campaign.currentPlayers.length,
							'/',
							e.campaign.playersNeeded,
							' '
						),
						t.xp6(3),
						t.s9C('src', e.campaign.img, t.LSH),
						t.xp6(3),
						t.hij(' ', e.campaign.description, ' ');
				}
			}
			function pt(o, i) {
				if (
					(1 & o &&
						(t.TgZ(0, 'div'),
						t.YNc(1, lt, 19, 8, 'mat-card', 0),
						t._UZ(2, 'app-comments-section', 1),
						t.qZA()),
					2 & o)
				) {
					const e = t.oxw();
					t.xp6(1),
						t.Q6J('ngIf', e.campaign),
						t.xp6(1),
						t.Q6J('postRef', e.campaign._id);
				}
			}
			const ut = [
				{
					path: '',
					component: (() => {
						class o {}
						return (
							(o.ɵfac = function (e) {
								return new (e || o)();
							}),
							(o.ɵcmp = t.Xpm({
								type: o,
								selectors: [['app-main']],
								decls: 4,
								vars: 0,
								consts: [[1, 'main-content']],
								template: function (e, n) {
									1 & e &&
										(t._UZ(0, 'app-top-nav'),
										t.TgZ(1, 'div', 0),
										t._UZ(2, 'router-outlet'),
										t.qZA(),
										t._UZ(3, 'app-bottom-nav'));
								},
								dependencies: [p.lC, it, st],
								styles: [
									'app-top-nav[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;background-color:#f1f1f1;z-index:3}app-bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;background-color:#f1f1f1;z-index:3}.main-content[_ngcontent-%COMP%]{padding-top:56px;padding-bottom:3px;max-height:calc(100vh - 56px);overflow-y:auto}',
								],
							})),
							o
						);
					})(),
					children: [
						{ path: 'profile/:id', component: z },
						{ path: 'feed', component: nt },
						{
							path: 'create-post',
							component: (() => {
								class o {}
								return (
									(o.ɵfac = function (e) {
										return new (e || o)();
									}),
									(o.ɵcmp = t.Xpm({
										type: o,
										selectors: [['app-create-post']],
										decls: 11,
										vars: 0,
										consts: [
											[
												1,
												'd-flex',
												'gap-5',
												'flex-column',
												'justify-content-center',
												'align-items-center',
												'h100',
											],
											[
												'mat-fab',
												'',
												'extended',
												'',
												'color',
												'accent',
												'routerLink',
												'/dashboard/create-campaign',
											],
											['mat-fab', '', 'extended', '', 'color', 'accent'],
										],
										template: function (e, n) {
											1 & e &&
												(t.TgZ(0, 'div', 0)(1, 'button', 1)(2, 'mat-icon'),
												t._uU(3, 'add'),
												t.qZA(),
												t._uU(4, ' Create Campaign '),
												t.qZA(),
												t.TgZ(5, 'p'),
												t._uU(6, 'OR'),
												t.qZA(),
												t.TgZ(7, 'button', 2)(8, 'mat-icon'),
												t._uU(9, 'add'),
												t.qZA(),
												t._uU(10, ' Look for a Group '),
												t.qZA()());
										},
										dependencies: [p.rH, u.cs, h.Hw],
										styles: [
											'.h100[_ngcontent-%COMP%]{height:87vh}p[_ngcontent-%COMP%]{margin:0;padding:0;font-weight:bolder;font-size:large}',
										],
									})),
									o
								);
							})(),
						},
						{
							path: 'create-campaign',
							component: (() => {
								class o {
									get user() {
										return this.auth.activeUser;
									}
									constructor(e, n, a, r) {
										(this.fb = e),
											(this.api = n),
											(this.auth = a),
											(this.toastr = r),
											(this.campaignForm = this.fb.group({
												title: ['', [c.kI.required]],
												description: ['', [c.kI.required]],
												playersNeeded: ['', [c.kI.required]],
											}));
									}
									createPost() {
										const {
											title: e,
											description: n,
											playersNeeded: a,
										} = this.campaignForm.value;
										return (
											this.api
												.createCampaign({
													title: e,
													description: n,
													playersNeeded: a,
													creator: this.user.id,
												})
												.subscribe({
													next: _ => {
														_.id &&
															(this.toastr.success(
																'Campaign created successfully!'
															),
															this.campaignForm.reset());
													},
													error: _ => {
														console.error(_),
															this.toastr.error(_.error.errors[0].msg);
													},
												}),
											this.campaignForm.value
										);
									}
								}
								return (
									(o.ɵfac = function (e) {
										return new (e || o)(
											t.Y36(c.qu),
											t.Y36(f),
											t.Y36(g.e),
											t.Y36(b._W)
										);
									}),
									(o.ɵcmp = t.Xpm({
										type: o,
										selectors: [['app-create-campaign']],
										decls: 16,
										vars: 2,
										consts: [
											[
												1,
												'd-flex',
												'gap-3',
												'flex-column',
												'justify-content-center',
												'align-items-center',
												'p-3',
												3,
												'formGroup',
												'ngSubmit',
											],
											[1, 'example-full-width'],
											[
												'matInput',
												'',
												'placeholder',
												'Ex. Curse of Strahd',
												'formControlName',
												'title',
											],
											[
												'matInput',
												'',
												'type',
												'number',
												'placeholder',
												'Ex. 4',
												'formControlName',
												'playersNeeded',
											],
											[
												'matInput',
												'',
												'placeholder',
												'Ex. You are trapped in the lands of Barovia...',
												'formControlName',
												'description',
											],
											[
												'mat-raised-button',
												'',
												'color',
												'primary',
												'type',
												'submit',
												3,
												'disabled',
											],
										],
										template: function (e, n) {
											1 & e &&
												(t.TgZ(0, 'div')(1, 'form', 0),
												t.NdJ('ngSubmit', function () {
													return n.createPost();
												}),
												t.TgZ(2, 'mat-form-field', 1)(3, 'mat-label'),
												t._uU(4, 'Campaign Name'),
												t.qZA(),
												t._UZ(5, 'input', 2),
												t.qZA(),
												t.TgZ(6, 'mat-form-field', 1)(7, 'mat-label'),
												t._uU(8, 'Number of Players'),
												t.qZA(),
												t._UZ(9, 'input', 3),
												t.qZA(),
												t.TgZ(10, 'mat-form-field', 1)(11, 'mat-label'),
												t._uU(12, 'Description'),
												t.qZA(),
												t._UZ(13, 'textarea', 4),
												t.qZA(),
												t.TgZ(14, 'button', 5),
												t._uU(15, ' Post '),
												t.qZA()()()),
												2 & e &&
													(t.xp6(1),
													t.Q6J('formGroup', n.campaignForm),
													t.xp6(13),
													t.Q6J('disabled', n.campaignForm.invalid));
										},
										dependencies: [
											u.lW,
											v.KE,
											v.hX,
											F.Nt,
											c._Y,
											c.Fj,
											c.wV,
											c.JJ,
											c.JL,
											c.sg,
											c.u,
										],
										styles: ['mat-form-field[_ngcontent-%COMP%]{width:87%}'],
									})),
									o
								);
							})(),
						},
						{
							path: 'campaign-details/:id',
							component: (() => {
								class o {
									get activeUser() {
										return this.auth.activeUser;
									}
									constructor(e, n, a, r) {
										(this.api = e),
											(this.route = n),
											(this.auth = a),
											(this.dialog = r);
									}
									ngOnInit() {
										this.route.params.subscribe(e => {
											this.api.getCampaign(e.id).subscribe(n => {
												this.campaign = n.campaign;
											});
										});
									}
									updateImage() {
										this.activeUser.id === this.campaign.creator.id &&
											this.dialog
												.open(y, {
													width: '30em',
													data: {
														id: this.campaign._id,
														collection: 'campaigns',
													},
												})
												.afterClosed()
												.subscribe(n => {
													n && (this.campaign.img = n);
												});
									}
								}
								return (
									(o.ɵfac = function (e) {
										return new (e || o)(
											t.Y36(f),
											t.Y36(p.gz),
											t.Y36(g.e),
											t.Y36(m.uw)
										);
									}),
									(o.ɵcmp = t.Xpm({
										type: o,
										selectors: [['app-campaign-details']],
										inputs: { campaign: 'campaign' },
										decls: 1,
										vars: 1,
										consts: [
											[4, 'ngIf'],
											[3, 'postRef'],
											[1, 'd-flex'],
											[
												'alt',
												'Dungeon master profile pic',
												'mat-card-avatar',
												'',
												3,
												'src',
												'routerLink',
											],
											[1, 'me-5'],
											[1, 'd-flex', 'align-items-center', 'justify-items-end'],
											[1, 'p-0', 'm-0', 'text-center', 'fw-bolder'],
											[
												'mat-card-image',
												'',
												'alt',
												'Photo of the campaign',
												3,
												'src',
												'click',
											],
											['mat-button', ''],
										],
										template: function (e, n) {
											1 & e && t.YNc(0, pt, 3, 2, 'div', 0),
												2 & e && t.Q6J('ngIf', n.campaign);
										},
										dependencies: [
											d.O5,
											p.rH,
											u.lW,
											l.a8,
											l.hq,
											l.kc,
											l.dn,
											l.dk,
											l.G2,
											l.$j,
											l.n5,
											A,
										],
									})),
									o
								);
							})(),
						},
						{ path: '**', redirectTo: 'feed' },
					],
				},
			];
			let dt = (() => {
				class o {}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)();
					}),
					(o.ɵmod = t.oAB({ type: o })),
					(o.ɵinj = t.cJS({ imports: [p.Bz.forChild(ut), p.Bz] })),
					o
				);
			})();
			var gt = s(3766);
			let ft = (() => {
				class o {}
				return (
					(o.ɵfac = function (e) {
						return new (e || o)();
					}),
					(o.ɵmod = t.oAB({ type: o })),
					(o.ɵinj = t.cJS({ imports: [d.ez, dt, gt.q, c.UX] })),
					o
				);
			})();
		},
	},
]);
>>>>>>> c51b4487f73898813183fc1b791f1e7441f74548
