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

	curr = Cookies.get("current");

	var dogPic = $(e.currentTarget);

	$("#d1").removeClass("dog-picture-selected");
	$("#d2").removeClass("dog-picture-selected");
	$("#d3").removeClass("dog-picture-selected");
	$("#d1").addClass("dog-picture-unselected");
	$("#d2").addClass("dog-picture-unselected");
	$("#d3").addClass("dog-picture-unselected");
	
	if(curr == "d1"){
		$("#d1").removeClass("dog-picture-unselected");
		$("#d1").addClass("dog-picture-selected"); 

	} else if(curr == "d2"){
		$("#d2").removeClass("dog-picture-unselected");
		$("#d2").addClass("dog-picture-selected");

	} else if(curr == "d3"){
		$("#d3").removeClass("dog-picture-unselected");
		$("#d3").addClass("dog-picture-selected");

	} else {
		console.log("plus");
	}
}

function saveDataToCookies(e){
	if($(e.currentTarget).hasClass("d1")){
		console.log("dog 1");
		$("#name").html("Barry");
		Cookies.set("current","d1")
	} else if($(e.currentTarget).hasClass("d2")){
		$("#name").html("Jonathon");
		console.log("dog 2");
		Cookies.set("current","d2");
	} else if($(e.currentTarget).hasClass("d3")){
		$("#name").html("Goldfinger");
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
