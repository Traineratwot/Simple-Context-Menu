// [
// 	{item:'itemName',title:'title',function:function(){}}
// ]
class SCM {

	constructor(list = []) {
		document.addEventListener('mousemove', this.Mouse, false);
		this.list = list;
		this.menu;
		this.ul
		this.li = {};
		if (this.list) {
			this.init()
		}
	}
	Mouse(e){
		this.event = e;
	}
	addItem(item = {}){
		this.list.push(item);
		if (this.list) {
			this.init()
		}
	}
	setList(list = []) {
		this.list = list;
		if (this.list) {
			this.init()
		}
	}
	setup(){
		show()

	}
	init(){
		var self = this;
		this.menu = $('<div class="SCM">');
		this.menu.css({
			display:'none',
			position:'absolute',
		})
		this.ul = $('<ul>').appendTo(this.menu);
		for (const key in this.list) {
			if (this.list.hasOwnProperty(key)) {
				const e = this.list[key];
				var li = $('<li class="SCM">')
				li.html(e.item)
				li.on('click',function (params) {
					self.list[key].function(e,self,self.AnyValue)
					self.hide()
				})
				this.li[key] = li
				li.appendTo(this.ul)
			}
		}
		$('body').append(this.menu);
	}
	show(event,AnyValue={}){
		if (!this.menu) {
			console.warn('меню не обнаружено попробуйте добавить саписок либо вызвать функуцию init()');
			return true;
		}
		if(event){
			this.event = event
		}
		this.AnyValue = AnyValue
		this.menu.offset({
			top: event.pageY,
			left: event.pageX
		});
		this.menu.fadeIn();
		
	}
	hide(event){
		if (!this.menu) {
			console.warn('меню не обнаружено попробуйте добавить саписок либо вызвать функуцию init()');
			return true;
		}
		this.menu.fadeOut();
		this.menu.offset({
			top: -9999,
			left: -9999
		});
		this.menu.fadeIn(0);
	}
	remove(){
		for (const key in this.li) {
			if (this.li.hasOwnProperty(key)) {
				const e = this.li[key];
				e.unbind('click');
			}
		}
		this.menu.remove()
		this.menu = null;
		this.ul = null;
		this.li = null;
	}
	
}