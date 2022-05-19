"use strict";(self.webpackChunkAngular_Test=self.webpackChunkAngular_Test||[]).push([[640],{4640:(I,d,r)=>{r.r(d),r.d(d,{AccountModule:()=>L});var u=r(9808),s=r(2382),a=r(6418),n=r(1223);let p=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-layout"]],decls:3,vars:0,template:function(t,i){1&t&&(n.TgZ(0,"p"),n._uU(1,"layout works!"),n.qZA(),n._UZ(2,"router-outlet"))},directives:[a.lC],styles:[""]}),o})();var g=r(9927);function f(o,e){1&o&&(n.TgZ(0,"div"),n._uU(1,"Email is required"),n.qZA())}function v(o,e){1&o&&(n.TgZ(0,"div"),n._uU(1," Enter either a valid Email Address "),n.qZA())}function _(o,e){if(1&o&&(n.TgZ(0,"div"),n.YNc(1,f,2,0,"div",2),n.YNc(2,v,2,0,"div",2),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",null==t.email||null==t.email.errors?null:t.email.errors.required),n.xp6(1),n.Q6J("ngIf",null==t.email||null==t.email.errors?null:t.email.errors.pattern)}}function h(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"i",9),n.NdJ("click",function(){return n.CHM(t),n.oxw().passwordify()}),n.qZA()}}function w(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"i",10),n.NdJ("click",function(){return n.CHM(t),n.oxw().passwordify()}),n.qZA()}}function Z(o,e){1&o&&(n.TgZ(0,"div"),n._uU(1,"Password is required"),n.qZA())}function C(o,e){if(1&o&&(n.TgZ(0,"div"),n.YNc(1,Z,2,0,"div",2),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",null==t.password||null==t.password.errors?null:t.password.errors.required)}}function T(o,e){1&o&&(n.O4$(),n._UZ(0,"svg",11))}const m=function(o){return{"is-invalid":o}},y=[{path:"",component:p,children:[{path:"login",component:(()=>{class o{constructor(t,i,l,c){this.formBuilder=t,this.router=i,this.accountService=l,this.route=c,this.loginForm=new s.cw({email:new s.NI(""),password:new s.NI("")}),this.loading=!1,this.submitted=!1,this.title="Login",this.show=!1}ngOnInit(){this.loginForm=this.formBuilder.group({email:["",[s.kI.required,s.kI.pattern(/^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))$|^(\d{11})$/)]],password:["",s.kI.required]})}passwordify(){this.show=!this.show}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}onSubmit(){var t,i;this.submitted=!0,!this.loginForm.invalid&&(this.loading=!0,this.accountService.login(null===(t=this.email)||void 0===t?void 0:t.value,null===(i=this.password)||void 0===i?void 0:i.value).pipe().subscribe({next:l=>{this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl||"")},error:l=>{alert(l.statusText),this.loading=!1}}))}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(s.qu),n.Y36(a.F0),n.Y36(g.B),n.Y36(a.gz))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:25,vars:14,consts:[[3,"formGroup","ngSubmit"],["type","email","formControlName","email","placeholder","Email",3,"ngClass"],[4,"ngIf"],["formControlName","password","placeholder","Password",3,"type","ngClass"],["class","fas fa-eye",3,"click",4,"ngIf"],["class","fas fa-eye-slash",3,"click",4,"ngIf"],["href","#"],["type","submit",3,"disabled"],["class","animate-spin","viewBox","0 0 24 24",4,"ngIf"],[1,"fas","fa-eye",3,"click"],[1,"fas","fa-eye-slash",3,"click"],["viewBox","0 0 24 24",1,"animate-spin"]],template:function(t,i){1&t&&(n.TgZ(0,"div")(1,"div")(2,"h2"),n._uU(3,"Sign in your EHR account"),n.qZA()(),n.TgZ(4,"div")(5,"form",0),n.NdJ("ngSubmit",function(){return i.onSubmit()}),n.TgZ(6,"div"),n._UZ(7,"input",1),n.YNc(8,_,3,2,"div",2),n.qZA(),n.TgZ(9,"div")(10,"div"),n._UZ(11,"input",3),n.TgZ(12,"div")(13,"span"),n.YNc(14,h,1,0,"i",4),n.qZA(),n.TgZ(15,"span"),n.YNc(16,w,1,0,"i",5),n.qZA()()(),n.YNc(17,C,2,1,"div",2),n.qZA(),n.TgZ(18,"div")(19,"a",6),n._uU(20,"Forgot your password?"),n.qZA()(),n.TgZ(21,"div")(22,"button",7),n.YNc(23,T,1,0,"svg",8),n._uU(24," Sign In "),n.qZA()()()()()),2&t&&(n.xp6(5),n.Q6J("formGroup",i.loginForm),n.xp6(2),n.Q6J("ngClass",n.VKq(10,m,i.submitted&&(null==i.email?null:i.email.errors))),n.xp6(1),n.Q6J("ngIf",i.submitted&&(null==i.email?null:i.email.errors)),n.xp6(3),n.Q6J("type",i.show?"text":"password")("ngClass",n.VKq(12,m,i.submitted&&(null==i.password?null:i.password.errors))),n.xp6(3),n.Q6J("ngIf",!i.show),n.xp6(2),n.Q6J("ngIf",i.show),n.xp6(1),n.Q6J("ngIf",i.submitted&&(null==i.password?null:i.password.errors)),n.xp6(5),n.Q6J("disabled",i.loading),n.xp6(1),n.Q6J("ngIf",i.loading))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,u.mk,u.O5],styles:[""]}),o})()}]}];let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[a.Bz.forChild(y)],a.Bz]}),o})(),L=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[u.ez,s.UX,A]]}),o})()}}]);