'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("sections/about/about.directive.tpl.html","{{about}}<div id=jquery-test>I am the directive test</div>");
$templateCache.put("sections/about/about.tpl.html","<h1>Welcome to the about me page</h1><h2>Yey!</h2><about-directive></about-directive>");
$templateCache.put("sections/dashboard/dashboard.tpl.html","<h1>Bine ai venit in contul taau!</h1><h2>Esti conectat cu medicul Daniel Dughy</h2><h3>Atentie</h3>");
$templateCache.put("sections/home/home.tpl.html","<div id=home><h1>Esti conectat deja cu un medic?</h1><a title=Autentifica-te href=javascript:void(0)>Autentifica-te</a><h2>Conecteaza-te cu medicul tau!</h2><div class=entity ng-repeat=\"entity in homeCtrl.entities\">{{entity.name}}<br>{{entity.city}}<br><a title=Detalii href=javascript:void(0) ng-click=homeCtrl.viewEntityDetails(entity.id)>Detalii</a> <a title=Conecteaza-te href=javascript:void(0) ng-click=homeCtrl.connectToEntity(entity.id)>Conecteaza-te</a></div></div>");
$templateCache.put("sections/auth/login/login.tpl.html","<h1>Ai facut cea mai buna alegere!</h1><h2>Ne trebuie cateva detalii pentru a te conecta cu medicul ales.</h2><hr><login-form></login-form><br><h3>Nu ai cont? <a href=javascript:void(0) ng-click=loginCtrl.signup()>Inregistreaza-te!</a></h3>");
$templateCache.put("sections/auth/signup/signup.tpl.html","<h1>Inregistreaza-te!</h1><hr><signup-form></signup-form>");
$templateCache.put("sections/auth/components/login/login.tpl.html","<div class=login-directive><form name=loginForm novalidate><div class=form-group ng-class=\"{\'has-error\': loginForm.email.$invalid && (loginForm.email.$touched || loginForm.$submitted)}\"><label for=email>Adresa de email*</label> <input class=form-control type=email name=email autocomplete=email ng-model=fields.name required><div class=help-block ng-messages=loginForm.email.$error ng-if=\"loginForm.email.$touched || loginForm.$submitted\"><p ng-message=required>Nu ai completat adresa de email.</p><p ng-message=email>Formatul adresei de email este invalid.</p></div></div><div class=form-group ng-class=\"{\'has-error\': loginForm.password.$invalid && (loginForm.password.$touched || loginForm.$submitted)}\"><label for=password>Parola</label> <input class=form-control type=password name=password autocomplete=password ng-model=fields.password required><div class=help-block ng-messages=loginForm.password.$error ng-if=\"loginForm.password.$touched || loginForm.$submitted\"><p ng-message=required>Nu ai completat parola.</p></div></div><div class=form-group><button type=submit class=btn ng-click=formSubmit(loginForm)>Autentifica-te</button></div></form></div>");
$templateCache.put("sections/auth/components/signup/signup.tpl.html","<div class=signup-directive><form name=signupForm novalidate><div class=form-group ng-class=\"{\'has-error\': signupForm.email.$invalid && (signupForm.email.$touched || signupForm.$submitted)}\"><label for=email>Adresa de email*</label> <input class=form-control type=email name=email autocomplete=email ng-model=fields.name required><div class=help-block ng-messages=signupForm.email.$error ng-if=\"signupForm.email.$touched || signupForm.$submitted\"><p ng-message=required>Nu ai completat adresa de email.</p><p ng-message=email>Formatul adresei de email este invalid.</p></div></div><div class=form-group ng-class=\"{\'has-error\': signupForm.password.$invalid && (signupForm.password.$touched || signupForm.$submitted)}\"><label for=password>Parola*</label> <input class=form-control type=password name=password autocomplete=password ng-model=fields.password required><div class=help-block ng-messages=signupForm.password.$error ng-if=\"signupForm.password.$touched || signupForm.$submitted\"><p ng-message=required>Nu ai completat parola.</p></div></div><div class=form-group><button type=submit class=btn ng-click=formSubmit(signupForm)>Inregistreaza-te</button></div></form></div>");}]);