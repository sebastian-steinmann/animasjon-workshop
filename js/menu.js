'use strict';
var MenuView = (function(window, $) {
	var View = function(options) {
		this.el = $(options.el);
		this.triggerEl = $(options.triggerEl);

		this.triggerEl.on('click', this.onOpen.bind(this));
	};
	View.prototype = {
		onOpen: function(event) {
			event.preventDefault();

			this.el.toggleClass("is-open");
			this.triggerEl.toggleClass("is-active");
		}
	};
	return View;
})(window, jQuery)

var menuEl = $("[data-component~=menu]");
if (menuEl.length) {
	var triggerEl = menuEl.data("trigger");
	new MenuView({
		el: menuEl,
		triggerEl: triggerEl
	});
}