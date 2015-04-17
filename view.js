theView = Backbone.View.extend({
//	tagName : 'span',
//	className : 'myclass',
//	id : 'spanId',
	defaults: {
//		el : $("#testId")
	},
//	el : $("#testId"),
	initialize:function() {
		this.render();
	},
	render:function(){
		var that  = this;
		var template = _.template($("#bTemplateId").html(), {});
		that.$el.html(template);
	},
	
	events: {
		"click div#clickId" : "showhit",
	},
	
	showhit: function(){
		console.log('click event happen');
	}
});

$(document).ready(function(){
	console.log('welcome view');	
	var obj = new theView({el:$("testId")});
//	obj.set({el:$("testId")});
});
//el : point to the dom element
//$el is the jquery reference same dom object