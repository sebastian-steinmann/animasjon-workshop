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
			console.log(this.getHeight());
			this.el.toggleClass("is-open");
			this.triggerEl.toggleClass("is-active");
			this.toggleExpanded();
		},
		toggleExpanded: function() {
			var expanded = this.el.attr("aria-expanded");
			if (expanded === "true") {
				this.el.attr("aria-expanded", "false");
			} else {
				this.el.attr("aria-expanded", "true");
				this.el.focus();
			}
		},
		getHeight: function() {
			this.el.css({
				visibility: "hidden",
				display: "block",
				height: "auto",
				position: "absolute"
			});

			var h = this.el.height();

			this.el.css({
				visibility: "",
				display: "",
				height: "",
				position: ""
			});
			return h;
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