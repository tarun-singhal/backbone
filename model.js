testModel = Backbone.Model.extend({
	
	defaults: {
		name : 'Tarun Singhal'
	},
	
	initialize : function() {
		this.bindEvents();
		console.log('welcome backbone');
	},
	
	bindEvents : function() {
		this.on("change:name", function(model){
			var new_name = model.get('name');
			console.log("New Name : "+new_name);
		});
	}
});
$(document).ready(function(){
	console.log('welcome');	
	//it initiate the model and run the initialize call first
	var obj = new testModel();
	obj.set({name: 'T.K.Singhal'});
	obj.set({name: 'Mohit'});
//	obj.set({name:"new website"});
//	console.log('model var callling:'+obj.get("name"));
});