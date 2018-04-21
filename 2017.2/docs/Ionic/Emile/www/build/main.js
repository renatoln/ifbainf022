webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EnvioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnvioPage = (function () {
    function EnvioPage(navCtrl, navParams, toast, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.userProvider = userProvider;
        this.destinatario = new Array();
        this.remetente = new Array();
        this.mensagemEnviada = new Array();
        this.remetente = JSON.parse(localStorage.getItem("remetente"));
        this.idRemetente = JSON.parse(localStorage.getItem("idRemetente"));
        console.log(this.idRemetente);
    }
    EnvioPage.prototype.enviarMensagem = function () {
        var _this = this;
        this.destinatario.push(parseInt(this.destinatarios));
        this.userProvider.enviarMensagem(this.titulo, this.mensagem, this.destinatario, this.idRemetente)
            .then(function (result) {
            _this.mensagemEnviada = result;
            if (!isEmpty(_this.mensagemEnviada)) {
                _this.toast.create({ message: "Mensagem enviada com sucesso. ", duration: 3000 }).present();
            }
            else {
                _this.toast.create({ message: "Erro ao tentar enviar mensagem.", duration: 3000 }).present();
            }
        })
            .catch(function (error) {
            _this.toast.create({ message: "Erro ao tentar enviar mensagem.", duration: 3000 }).present();
        });
        /*
          Valida se o objeto esta preenchido.
        */
        function isEmpty(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }
            return true;
        }
    };
    EnvioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-envio',template:/*ion-inline-start:"/home/andre/andre/ionic/appMenu/src/pages/envio/envio.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Envio de Mensagem </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page2" style="background-color:#FFFFFF;">\n\n  <ion-card id="muralEnvioMensagem">\n      <ion-card-header>\n          <ion-item id="tituloEnvioMensagem">\n              <ion-label>Titulo: </ion-label>\n          </ion-item> \n          <ion-item id="tituloEnvioMensagem">\n              <ion-input type="titulo" placeholder="Titulo" name="titulo" [(ngModel)]="titulo"></ion-input>\n          </ion-item>\n          <ion-item id="textoEnvioMensagem">\n            <ion-label>Mensagem:</ion-label> \n          </ion-item>\n          <ion-item id="textoEnvioMensagem2">\n            <ion-input type="mensagem" placeholder="Mensagem" name="mensagem" [(ngModel)]="mensagem"></ion-input>\n         </ion-item>\n         <ion-item id="destinatorioEnvioMensagem">\n            <ion-label>Destinatario:</ion-label> \n          </ion-item>\n          <ion-item id="destinatorioMensagem2">\n            <ion-input type="destinatarios" placeholder="Destinatario" name="destinatarios" [(ngModel)]="destinatarios"></ion-input>\n            <ion-item>\n              <ion-label>Alunos</ion-label>\n              <ion-select *ngFor="let disciplina of listaDisciplinas">\n                <ion-option value="f" selected="true">Female</ion-option>\n                <ion-option value="m">Male</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label>Toppings</ion-label>\n              <ion-select [(ngModel)]="toppings" multiple="true">\n                <ion-option>Bacon</ion-option>\n                <ion-option>Black Olives</ion-option>\n                <ion-option>Extra Cheese</ion-option>\n                <ion-option>Mushrooms</ion-option>\n                <ion-option>Pepperoni</ion-option>\n                <ion-option>Sausage</ion-option>\n              </ion-select>\n            </ion-item>\n         </ion-item>\n      </ion-card-header>    \n    \n  </ion-card>\n  <button id="envio-button1" ion-button color="calm" on-click="enviarMensagem()">Enviar</button>\n  \n</ion-content>\n'/*ion-inline-end:"/home/andre/andre/ionic/appMenu/src/pages/envio/envio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */]])
    ], EnvioPage);
    return EnvioPage;
}());

//# sourceMappingURL=envio.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/envio/envio.module": [
		283,
		3
	],
	"../pages/login/login.module": [
		156
	],
	"../pages/notificacao/notificacao.module": [
		284,
		1
	],
	"../pages/perfil/perfil.module": [
		285,
		0
	],
	"../pages/sair/sair.module": [
		286,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_users__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toast, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.userProvider = userProvider;
        this.listaMensagens = new Array();
        this.listaUsuarios = new Array();
        this.lista = new Array();
        this.muralDeMensagens_card21 = false;
        this.muralDeMensagens_card22 = false;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.userProvider.login(this.email, this.senha)
            .then(function (result) {
            _this.usuarioLogado = result;
            if (!isEmpty(_this.usuarioLogado[0])) {
                if (_this.usuarioLogado[0].tipo == 1) {
                    localStorage.setItem('remetente', JSON.stringify(_this.usuarioLogado[0]));
                    localStorage.setItem('idRemetente', JSON.stringify(_this.usuarioLogado[0].id));
                    _this.consultaMensagemEnviada(_this.usuarioLogado[0].id);
                }
                else {
                    _this.consultaUsuarios();
                    _this.consultaMensagem(_this.usuarioLogado[0].id);
                }
                _this.toast.create({ message: "Usuário logado com sucesso. ", duration: 3000 }).present();
            }
            else {
                _this.toast.create({ message: "Erro ao tentar logar.", duration: 3000 }).present();
            }
        })
            .catch(function (error) {
            _this.toast.create({ message: "Erro ao tentar logar.", duration: 3000 }).present();
        });
        /*
          Valida se o objeto esta preenchido.
        */
        function isEmpty(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }
            return true;
        }
    };
    LoginPage.prototype.consultaMensagem = function (id) {
        var _this = this;
        this.userProvider.listarMensagens(id)
            .then(function (result) {
            _this.listaMensagens = result;
            var i;
            var obj;
            var j = 0;
            var r = 0;
            for (i = 0; i < _this.listaMensagens.length; i++) {
                for (j = 0; j < _this.listaUsuarios.length; j++) {
                    if (_this.listaMensagens[i].remetente == _this.listaUsuarios[j].id) {
                        obj = {
                            idAluno: _this.usuarioLogado[0].id,
                            tituloMensagem: _this.listaMensagens[i].titulo,
                            textoMensagem: _this.listaMensagens[i].texto,
                            nomeRemetente: _this.listaUsuarios[j].nome,
                            dataEnvioMensagem: _this.listaMensagens[i].data
                        };
                        _this.lista[r] = obj;
                        r++;
                    }
                }
            }
            _this.muralDeMensagens_card21 = false;
            _this.muralDeMensagens_card22 = true;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { listaMensagens: _this.listaMensagens, lista: _this.lista,
                muralDeMensagens_card21: _this.muralDeMensagens_card21, muralDeMensagens_card22: _this.muralDeMensagens_card22 });
            /*
             Objeto JavaScript que usamos para armazenar dados no navegador.
            */
            localStorage.setItem('listaObjetos', JSON.stringify(_this.lista));
            localStorage.setItem('flagHtml', JSON.stringify(_this.muralDeMensagens_card21));
        });
    };
    LoginPage.prototype.consultaUsuarios = function () {
        var _this = this;
        this.userProvider.listarUsuarios()
            .then(function (result) {
            _this.listaUsuarios = result;
        });
    };
    LoginPage.prototype.consultaMensagemEnviada = function (id) {
        var _this = this;
        this.userProvider.listarMensagensEnviadas(id)
            .then(function (result) {
            _this.listaMensagens = result;
            _this.muralDeMensagens_card21 = true;
            _this.muralDeMensagens_card22 = false;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { listaMensagens: _this.listaMensagens,
                muralDeMensagens_card21: _this.muralDeMensagens_card21, muralDeMensagens_card22: _this.muralDeMensagens_card22 });
            localStorage.setItem('listaObjetos', JSON.stringify(_this.listaMensagens));
            localStorage.setItem('flagHtml', JSON.stringify(_this.muralDeMensagens_card21));
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/andre/andre/ionic/appMenu/src/pages/login/login.html"*/'<ion-content padding style="background:url(assets/img/5iCndnD2SVKQ1M71ASut_site-header-brand.png) no-repeat center;background-size:cover;" id="page1">\n  <div class="spacer" style="width:300px;height:47px;" id="login-spacer2"></div>\n  <img src="assets/img/UmvrjHaDTx72zuTjGSaY_unnamed.png" style="display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="width:300px;height:27px;" id="login-spacer1"></div>\n  <form id="login-form1">\n    <ion-item id="login-input2">\n      <ion-label></ion-label>\n      <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item id="login-input3">\n      <ion-label></ion-label>\n      <ion-input type="password" placeholder="Senha" name="senha" [(ngModel)]="senha"></ion-input>\n    </ion-item>\n    <div class="spacer" style="width:300px;height:27px;" id="login-spacer3"></div>\n    <button id="login-button1" ion-button color="calm" block style="font-weight:300;border-radius:25px 25px 25px 25px;" on-click="login()">\n      Login\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/andre/andre/ionic/appMenu/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_users_users__["a" /* UsersProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_users__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisciplinasPage = (function () {
    function DisciplinasPage(navCtrl, navParams, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.lista = new Array();
        this.listaDisciplinas = new Array();
        this.lista = JSON.parse(localStorage.getItem('listaObjetos'));
        var aluno = JSON.parse(localStorage.getItem("flagHtml"));
        var idProfessor = JSON.parse(localStorage.getItem("idRemetente"));
        if (!aluno) {
            this.consultasDisciplinas(this.lista[0].idAluno);
            // this.muralDeDisciplinas1 = false;
            // this.muralDeDisciplinas2 = true;
        }
        else {
            this.consultasDisciplinasProfessor(idProfessor);
            // this.muralDeDisciplinas1 = true;
            // this.muralDeDisciplinas2 = false;
        }
    }
    /*
      MÉTODO PARA CONSULTAR DISCIPLINAS
    */
    DisciplinasPage.prototype.consultasDisciplinas = function (id) {
        var _this = this;
        this.userProvider.listarDisciplinas(id)
            .then(function (result) {
            _this.listaDisciplinas = result;
            // this.muralDeDisciplinas1 = false;
            _this.muralDeDisciplinas1 = true;
            // this.muralDeDisciplinas2 = false;
            // this.muralDeDisciplinas2 = true;
        });
    };
    /*
     MÉTODO PARA CONSULTAR DISCIPLINAS DO PROFESSOR
   */
    DisciplinasPage.prototype.consultasDisciplinasProfessor = function (id) {
        var _this = this;
        this.userProvider.listarDisciplinasProfessor(id)
            .then(function (result) {
            _this.listaDisciplinas = result;
            // this.muralDeDisciplinas1 = true;
            // this.muralDeDisciplinas2 = false;
            _this.muralDeDisciplinas2 = true;
            // this.muralDeDisciplinas1 = false;
        });
    };
    DisciplinasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/andre/andre/ionic/appMenu/src/pages/disciplinas/disciplinas.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Disciplinas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page2" style="background-color:#FFFFFF;">\n  <div *ngIf="muralDeDisciplinas1">\n    <!-- <ion-card id="muralDeDisciplinas1" [hidden]=muralDeDisciplinas1 *ngFor="let disciplina of listaDisciplinas"> -->\n        <ion-card id="muralDeDisciplinas1" *ngFor="let disciplina of listaDisciplinas">\n        <ion-card-header>\n            Disciplina: {{disciplina.disciplina.nome}}\n          </ion-card-header>\n          <ion-card-content>\n              Código: {{disciplina.disciplina.codigo}}\n          </ion-card-content>     \n      \n    </ion-card>\n  </div>\n  <div *ngIf="muralDeDisciplinas2">\n    <!-- <ion-card id="muralDeDisciplinas2" [hidden]=muralDeDisciplinas2 *ngFor="let disciplina of listaDisciplinas"> -->\n        <ion-card id="muralDeDisciplinas2" *ngFor="let disciplina of listaDisciplinas">\n      <ion-card-header>\n        Disciplina: {{disciplina.nome}}\n        </ion-card-header>\n        <ion-card-content>\n            Código: {{disciplina.codigo}}\n        </ion-card-content>     \n    \n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/andre/andre/ionic/appMenu/src/pages/disciplinas/disciplinas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_users_users__["a" /* UsersProvider */]])
    ], DisciplinasPage);
    return DisciplinasPage;
}());

//# sourceMappingURL=disciplinas.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SairPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SairPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SairPage = (function () {
    function SairPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SairPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SairPage');
    };
    SairPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sair',template:/*ion-inline-start:"/home/andre/andre/ionic/appMenu/src/pages/sair/sair.html"*/'<!--\n  Generated template for the SairPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sair</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/andre/andre/ionic/appMenu/src/pages/sair/sair.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SairPage);
    return SairPage;
}());

//# sourceMappingURL=sair.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_disciplinas_disciplinas__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_users_users__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_envio_envio__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sair_sair__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_disciplinas_disciplinas__["a" /* DisciplinasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_envio_envio__["a" /* EnvioPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sair_sair__["a" /* SairPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/envio/envio.module#EnvioPageModule', name: 'EnvioPage', segment: 'envio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificacao/notificacao.module#NotificacaoPageModule', name: 'NotificacaoPage', segment: 'notificacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sair/sair.module#SairPageModule', name: 'SairPage', segment: 'sair', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_disciplinas_disciplinas__["a" /* DisciplinasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_envio_envio__["a" /* EnvioPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sair_sair__["a" /* SairPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_users_users__["a" /* UsersProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_disciplinas_disciplinas__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_envio_envio__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Disciplinas', component: __WEBPACK_IMPORTED_MODULE_5__pages_disciplinas_disciplinas__["a" /* DisciplinasPage */] },
            { title: 'Envio', component: __WEBPACK_IMPORTED_MODULE_7__pages_envio_envio__["a" /* EnvioPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.closePage = function () {
        this.nav.setRoot(this.rootPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/andre/andre/ionic/appMenu/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" [id]="p.title">\n        {{p.title}}\n      </button>\n      <button  menuClose ion-item id="fechar" (click)="closePage()" >\n        Sair\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"/home/andre/andre/ionic/appMenu/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersProvider = (function () {
    function UsersProvider(http) {
        this.http = http;
        /*
         VARIÁVEIS DE ENDEREÇOS DOS SERVIÇOS
       */
        this.API_REST_LOGIN = "http://renatoln.pythonanywhere.com/usuarios/?email=";
        this.API_REST_MENSAGEM = "http://renatoln.pythonanywhere.com/mensagens/?destinatario=";
        this.API_REST_MENSAGEM_ENVIADA = "http://renatoln.pythonanywhere.com/mensagens/?remetente=";
        this.API_REST_USUARIOS = "http://renatoln.pythonanywhere.com/usuarios/";
        this.API_REST_DISCIPLINAS_USUARIOS = "http://renatoln.pythonanywhere.com/disciplina_alunoss/?estudante=";
        this.API_REST_DISCIPLINAS_PROFESSOR = "http://renatoln.pythonanywhere.com/disciplinas/?professor=";
        this.API_REST_ENVIAR_MENSAGEM = "http://renatoln.pythonanywhere.com/mensagens/";
    }
    /*
      MÉTODO PARA CONSULTAR LOGIN
    */
    UsersProvider.prototype.login = function (email, senha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (email != null && senha != null) {
                var data = {
                    email: email,
                    senha: senha
                };
            }
            else {
                (function (error) {
                    reject(error);
                });
            }
            _this.http.get(_this.API_REST_LOGIN + data.email + '&senha=', data.senha)
                .subscribe(function (result) {
                resolve(result.json());
            }),
                function (error) {
                    reject(error);
                };
        });
    };
    /*
    MÉTODO PARA LISTAR MENSAGENS
  */
    UsersProvider.prototype.listarMensagens = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (id != null) {
                var objeto = {
                    id: id
                };
            }
            else {
                (function (error) {
                    reject(error);
                });
            }
            _this.http.get(_this.API_REST_MENSAGEM + objeto.id)
                .subscribe(function (result) {
                resolve(result.json());
            }),
                function (error) {
                    reject(error);
                };
        });
    };
    /*
       MÉTODO PARA LISTAR MENSAGENS ENVIADAS
     */
    UsersProvider.prototype.listarMensagensEnviadas = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (id != null) {
                var objeto = {
                    id: id
                };
            }
            else {
                (function (error) {
                    reject(error);
                });
            }
            _this.http.get(_this.API_REST_MENSAGEM_ENVIADA + objeto.id)
                .subscribe(function (result) {
                resolve(result.json());
            }),
                function (error) {
                    reject(error);
                };
        });
    };
    /*
      MÉTODO PARA LISTAR USUARIOS
    */
    UsersProvider.prototype.listarUsuarios = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_REST_USUARIOS)
                .subscribe(function (result) {
                resolve(result.json());
            }),
                function (error) {
                    reject(error);
                };
        });
    };
    /*
      MÉTODO PARA LISTAR DISCIPLINAS
    */
    UsersProvider.prototype.listarDisciplinas = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_REST_DISCIPLINAS_USUARIOS + id)
                .subscribe(function (result) {
                resolve(result.json());
            }),
                function (error) {
                    reject(error);
                };
        });
    };
    /*
      MÉTODO PARA LISTAR DISCIPLINAS DO PROFESSOR
    */
    UsersProvider.prototype.listarDisciplinasProfessor = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_REST_DISCIPLINAS_PROFESSOR + id)
                .subscribe(function (result) {
                resolve(result.json());
            }),
                function (error) {
                    reject(error);
                };
        });
    };
    /*
      MÉTODO PARA ENVIAR MENSAGEM PARA ALUNO
    */
    UsersProvider.prototype.enviarMensagem = function (titulo, texto, destinatario, remetente) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Colocando informação no header da requisição usando o metodo post
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var obj = {
                data: new Date,
                titulo: titulo,
                texto: texto,
                remetente: remetente,
                destinatario: destinatario
            };
            _this.http.post(_this.API_REST_ENVIAR_MENSAGEM, obj, header)
                .subscribe(function (result) {
                resolve(result.json());
            }, function (error) {
                reject(error.json());
            });
        });
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lista_mensagens = new Array();
        this.lista = new Array();
        this.muralDeMensagens_card21 = false;
        this.muralDeMensagens_card22 = false;
        this.lista = JSON.parse(localStorage.getItem('listaObjetos'));
        this.muralDeMensagens_card21 = JSON.parse(localStorage.getItem('flagHtml'));
        var id;
        if (this.muralDeMensagens_card21 != false) {
            this.muralDeMensagens_card22 = false;
            id = document.getElementById('Envio');
            id.hidden = false;
        }
        else {
            id = document.getElementById('Envio');
            id.hidden = true;
            this.muralDeMensagens_card22 = true;
        }
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/andre/andre/ionic/appMenu/src/pages/home/home.html"*/'<ion-header>\n    <!--<ion-navbar>-->\n   <ion-toolbar primary> \n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        Mural de Mensagens\n      </ion-title>\n    <!--</ion-navbar>-->\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding id="page2" style="background-color:#FFFFFF;">\n   \n    <!--<button ion-button secondary menuToggle>Menu</button>-->\n    <ion-card id="muralDeMensagens_card21" [hidden]=muralDeMensagens_card21 *ngFor="let mensagem of lista">\n        <ion-card-header>\n            Prof:{{mensagem.nomeRemetente}}\n          </ion-card-header>\n          <ion-card-content>\n              Mensagem: \n              {{mensagem.textoMensagem}}\n          </ion-card-content>\n          <ion-item>\n              <ion-label>Data</ion-label>\n              <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]=mensagem.dataEnvioMensagem></ion-datetime>\n          </ion-item>\n     \n    </ion-card>\n\n    <ion-card id="muralDeMensagens_card22" [hidden]=muralDeMensagens_card22 *ngFor="let mensagem of lista">\n        <ion-card-header>\n            Titulo: {{mensagem.titulo}}\n          </ion-card-header>\n          <ion-card-content>\n              Mensagem Enviada:  \n              {{mensagem.texto}}\n          </ion-card-content>\n          <ion-item>\n              <ion-label>Data</ion-label>\n              <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]=mensagem.data></ion-datetime>\n          </ion-item>\n     \n    </ion-card>\n    \n  </ion-content>'/*ion-inline-end:"/home/andre/andre/ionic/appMenu/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map