'use strict';
var SearchView = (function(window, $) {
	var View = function(options) {
		this.el = $(options.el);
		this.input = this.el.find("input");
		this.el.on("click", ".header-search-icon", this.onClick.bind(this));
		this.el.on("blur", "input", this.onBlur.bind(this));
	};
	View.prototype = {
		onClick: function(event) {
			event.preventDefault();

			this.el.toggleClass("is-open");
			if (this.el.is(".is-open")) {
				this.input.focus();
			}
		},
		onBlur: function(event) {
			if (this.el.is(".is-open") && this.input.val() === "") {
				this.onClick(event);
			}
		}
	};
	return View;
})(window, jQuery)

var searchEl = $("[data-component~=search]");
if (searchEl.length) {
	new SearchView({
		el: searchEl
	});
}