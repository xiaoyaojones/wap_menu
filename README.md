手機網站側欄模塊 wap_menu
=============================

效果演示
-----------------------------
![menu_wap](https://github.com/xiaoyaojones/wap_menu/blob/master/demo.gif "menu_wap")

使用說明
-----------------------------
* 依賴zepto or jQuery；

* 參考index.html or index_right_noscroll.html的框架組織
```
	<div class="m__wrap" id="wrap">
		<div class="m__main" id="main"></div>
		<div class="m__menu" id="menu">
			<div class="m__menu-box">
				menu內容
			</div>
		</div>
	</div>
```

* 使用前請實例化一個對象，並執行初始化，如：
```
	var fModuleMenu = new FModuleMenu();
	fModuleMenu.init();
```

參數說明
-----------------------------
`direction`：menu所在位置<br/>
__type__: String<br/>
__value__: 'left' or 'right'<br/>
__default__: 'left'<br/>

`width`：menu寬度<br/>
__type__: Number<br/>
__value__: all number<br/>
__default__: 230<br/>

`bAnimate`：是否啓用css3動畫滑動<br/>
__type__: Boolean<br/>
__value__: true or false<br/>
__default__: true<br/>

`duration`：完成過渡效果需要多少毫秒(ms)<br/>
__type__: Number<br/>
__value__: all number<br/>
__default__: 200<br/>

`timingFunction`：定義過渡效果的速度曲線<br/>
__type__: String<br/>
__value__: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n)[CSS3 transition-timing-function 属性]:(http://www.w3school.com.cn/cssref/pr_transition-timing-function.asp)<br/>
__: 'ease-out'<br/>

`bInnerScroll`：側欄是否內部滾動，推薦true<br/>
__type__: Boolean<br/>
__value__: true or false<br/>
__default__: true