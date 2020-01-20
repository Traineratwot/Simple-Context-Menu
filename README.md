# Simple-context-menu

Пример массива для меню

```js
[{ item: "itemName", title: "title", function: function() {} }];
```

```js
MyMeny = new SCM(
	[
		{
			item: "test1",
			function: function(e, self, AnyValue) {
				console.log(e, self, AnyValue);
			}
		},
		{
			item: "test2",
			function: function(e, self, AnyValue) {
				console.warn(e, self, AnyValue);
			}
		},
		{
			item: "test3",
			function: function(e, self, AnyValue) {
				console.error(e, self, AnyValue);
			}
		}
	],
	function(self, event, AnyValue) {}
);
```

обратите анимание на строку

```js
function (self, event, AnyValue) {}
```

это необязательный параметр в который вы можете передать функцию позиционирования меню<br>
по умолчанию это позиция курсора<br>
в функцию предается 3 обязательных параметра<br>
self синоним this это объект класс SCM<br>
event это объект класс event который получается вы передаете при вызове show()<br>
и ваша кастомная переменная<br>

Пример вызова меню

```js
$("#test").on("click", function(event) {
	MyMeny.show(event);
});
```

Подробнее о стрктуре,<br>
это ваша функция в которая будет исполнаться при клике по соответсвующему пункту меню

```js
function (e,self,AnyValue){}
```

e - это event нажатия на пункт меню<br>
self это обект класса SCM в котором по мимо прочего есть self.event<br>
self.event это event который передался в класс при вызове show()<br>

```js
$("#test").on("click", function(event) {
	MyMeny.show(event);
});
```

AnyValue Это ваша пременная, <br>
пример использования

```html
<input
	type="text"
	oncontextmenu="test.show(event,$(this).val());return false"
/>
```
