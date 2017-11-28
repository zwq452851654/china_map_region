$(document).ready(function(){
	maphover();
});

	function removeClassFun(obj,self){
		self.children("div").hide();
		self.removeClass("hover");
		$(obj).removeClass("hover");
		$(obj).children("div").hide();
	}
	function addClassFun(obj,self){
		self.addClass("hover").children("div").show();
		$(obj).addClass("hover").children("div").show();
	}

function maphover(){
	var self = "";
	$(".city").hover(
		function(){
			self = $(this);
			let Id= self.context.id;
			if(Id == 'city_xibei'){
				addClassFun('.city_xibei',self)
			}
			if(Id == 'city_huabei'){
				addClassFun('.city_huabei',self)
			}
			if(Id == 'city_dongbei'){
				addClassFun('.city_dongbei',self)
			}
			if(Id == 'city_huadong'){
				addClassFun('.city_huadong',self)
			}
			if(Id == 'city_huazhong'){
				addClassFun('.city_huazhong',self)
			}
			if(Id == 'city_huanan'){
				addClassFun('.city_huanan',self)
			}
			if(Id == 'city_xinan'){
				addClassFun('.city_xinan',self)
			}
			
		},
		function(){
			self = $(this);
			let Id= self.context.id;
			if(Id == 'city_xibei'){
				removeClassFun('.city_xibei',self);
			}
			if(Id == 'city_huabei'){
				removeClassFun('.city_huabei',self);
			}
			if(Id == 'city_dongbei'){
				removeClassFun('.city_dongbei',self);
			}
			if(Id == 'city_huadong'){
				removeClassFun('.city_huadong',self);
			}
			if(Id == 'city_huazhong'){
				removeClassFun('.city_huazhong',self);
			}
			if(Id == 'city_huanan'){
				removeClassFun('.city_huanan',self);
			}
			if(Id == 'city_xinan'){
				removeClassFun('.city_xinan',self);
			}
		}
	);
	$(".city").click(
		function(){
			self = $(this);
			self.addClass("hover").children("div").show();
		},
		function(){
			self = $(this);
			self.children("div").hide();
			self.removeClass("hover");
		}
	);
		
};
