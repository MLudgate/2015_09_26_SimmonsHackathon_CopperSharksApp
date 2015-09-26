Cookies.set("current","d1");


function checkboxes(){
	return _.map($("input"),function(box){return $(box).is(":checked");});
}


$(".btn2").bind("click",function(e){
	$(e.currentTarget.nextElementSibling).toggle();
});

$(".dog-picture").bind("click",function(e){
	saveDataToCookies(e);

	highlightDog(e);
});

function highlightDog(e){
	console.log("Dog pic clicked!!");

	var dogPic = $(e.currentTarget);

	dogPic.removeClass("dog-picture-unselected");
	dogPic.addClass("dog-picture-selected");

	
	if(dogPic.hasClass("d1")){

	} else if(dogPic.hasClass("d2")){

	} else if(dogPic.hasClass("d3")){

	} else {
		console.log("plus");
	}
}

function saveDataToCookies(e){
	if($(e.currentTarget).hasClass("d1")){
		console.log("dog 1");
		Cookies.set("current","d1")
	} else if($(e.currentTarget).hasClass("d2")){
		console.log("dog 2");
		Cookies.set("current","d2");
	} else if($(e.currentTarget).hasClass("d3")){
		console.log("dog 3");
		Cookies.set("current","d3");
	} else {
		console.log("plus");

	}
	fillAll();
}


d = Date(Date.now);
s = d.toString().slice(0,10);
$("h1.header").html(s);

$("textarea").bind("input", function(e){
	Cookies.set("notes"+curr,$("textarea").val());
});

$("input").bind("click", function(e){
	curr = Cookies.get("current");
	Cookies.set("boxes"+curr,checkboxes());
})

function bool(s){
	a = s.split(",");
	return _.map(a, function(val){
		if(val.indexOf("true") > -1){
			return true;
		} else {
			return false;
		}
	});
}

function fillBoxes(){
	curr = Cookies.get("current");
	if(Cookies.get("boxes"+curr)!=null){
		b = bool(Cookies.get("boxes"+curr));
		_.each(b,function(val,i){
			$($("input")[i]).prop("checked",val);
		});
	} else{
		_.each($("input"),function(val, i){
			$($("input")[i]).prop("checked",false);
		});
	}
}

function fillNotes(){
	curr = Cookies.get("current");
	$("textarea").val(Cookies.get("notes"+curr));
}

function fillAll(){
	fillBoxes();
	fillNotes();
}



fillAll();
