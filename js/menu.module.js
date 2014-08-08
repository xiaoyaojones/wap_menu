/**
 * 手機端框架 - 切換目錄顯隱
 *
 * @class FModuleMenu
 * @constructor
*/

function FModuleMenu(params) {

	var _this = this;

	var defaults = {
		direction : 'left', //menu所在位置
		width     : 230,    //menu寬度
		bAnimate: true,   //是否啓用css3動畫滑動
		duration: 200,      //完成過渡效果需要多少毫秒
		timingFunction: 'ease-out', //過渡動畫類型: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
		bInnerScroll : true   //側欄是否內部滾動，推薦true
	};

	params = params || {};
	for (var prop in defaults) {
		if (prop in params && typeof params[prop] === 'object') {
			for (var subProp in defaults[prop]) {
				if (!(subProp in params[prop])) {
					params[prop][subProp] = defaults[prop][subProp];
				}
			}
		}
		else if (!(prop in params)) {
			params[prop] = defaults[prop];
		}
	}

	//定義所需變量 start
	_this.params = params;

	_this.WRAP = $('#wrap');
	_this.MAIN = $('#main');
	_this.MENU = $('#menu');
	_this.MENUBTN = $('#menuBtn');
	_this.BODY = $('html');
	_this.MAINMASK = $('#mainMask');
	_this.eClick = 'ontouchstart' in window ? 'touchend' : 'click';
}

FModuleMenu.prototype = {
	constructor: FModuleMenu,
	init       : function () {
		var _this = this,
		    _params = _this.params,
		    cssText_menu = '.m__menu{' +
			    'width: ' + _params.width + 'px;' +
			    'height: 100%;' +
			    '}';

		if (_params.direction === 'left') {
			cssText_menu += '.m__menu{' +
				'left: 0;' +
				'}' +
				'.show_menu .m__main{' +
				'transform: translate3d(' + _params.width + 'px,0,0);' +
				'}';
		} else {
			cssText_menu += '.m__menu{' +
				'right: 0;' +
				'}' +
				'.show_menu .m__main{' +
				'transform: translate3d(-' + _params.width + 'px,0,0);' +
				'}'
		}

		if (!!_params.bAnimate) {
			cssText_menu += '.m__main{' +
				'transition:transform ' + _params.duration + 'ms ' + _params.timingFunction + ' 0;' +
				'}';
		}

		//menu 內部 scroll
		if (!!_params.bInnerScroll) {
			cssText_menu += '.m__wrap{' +
				'height:100%;' +
				'overflow:hidden;' +
				'}' +
				'.show_menu,.show_menu body{' +
				'height:100%;' +
				'}';
		} else {
			cssText_menu += '.show_menu body{' +
				'height:100%;' +
				'overflow: visible;' +
				'}' +
				'.show_menu .m__wrap{' +
				'height: inherit;' +
				'}' +
				'.show_menu .m__menu{' +
				'height: 100%;' +
				'}';
		}

		_this.insertCSS(cssText_menu);
		_this.menuEffect();

	},
	insertCSS  : function (rule) {
		var head = document.head || document.getElementsByTagName('head')[0];

		if (!!head.getElementsByTagName('style').length) {
			var style = head.getElementsByTagName('style')[0];
			if (style.styleSheet) {
				style.styleSheet.cssText = rule;
			} else {
				style.appendChild(document.createTextNode(rule));
			}
		} else {
			var style = document.createElement('style');

			style.type = 'text/css';
			if (style.styleSheet) {
				style.styleSheet.cssText = rule;
			} else {
				style.appendChild(document.createTextNode(rule));
			}

			head.appendChild(style);
		}

	},
	menuEffect : function () {
		var _this = this,
		    bMenuShow = false,
			_menu_box = _this.MENU.find('.m__menu-box');

		_this.MENUBTN.on(_this.eClick, function () {
			_this.BODY.addClass('show_menu');
			bMenuShow = !bMenuShow;
		});

		_this.MAINMASK.on(_this.eClick, function () {
			_this.BODY.removeClass('show_menu');
			bMenuShow = !bMenuShow;

		});

	}
}
