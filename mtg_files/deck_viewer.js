//update 2011.10.19
//fix the IE attr() bugs
//fix the IE "xx>yy" selector bugs
var JQyd=jQuery.noConflict();
JQyd(document).ready(function(){
	var color = JQyd(".bgtrend_mtgdeck_card").css("background-color");
	JQyd('.bgtrend_mtgdeck_card:nth-child(even)').css("color","gray");
    //before 2011.10.19
    //var sImgCardBack	=	$("div#zoomer>img").attr("src");
	var sImgCardBack	=	JQyd("div.bgtrend_mtgdeck_cardviewer").children("img").attr("src");
    //if(!sImgCardBack)   {sImgCardBack = "source/plugin/bgtrend_mtgdeck/image/card/common/cardback.gif";}
	if(!sImgCardBack)   {sImgCardBack = "http://data.iplaymtg.com/mtgdeck/card/common/cardback.gif";}
    //
	JQyd(".bgtrend_mtgdeck_card").hover(function(){
		var index	=	JQyd(this).children(".sindex").html();
		var set		=JQyd(this).children(".set").html();
		var lang		=JQyd(this).children(".lang").html();
        var sImgCard    =   "http://bgtrend.com/mtg/image/card/"+lang+"/"+set+"/"+index+".jpg";
		//var sImgCard    =   "source/plugin/bgtrend_mtgdeck/image/card/"+lang+"/"+set+"/"+index+".jpg";
		var sImgCard    =   "http://data.iplaymtg.com/mtgdeck/card/"+lang+"/"+set+"/"+index+".jpg";
		//alert(sImgCard);
        //before 2011.10.19
        //$("div#zoomer>img").attr("src",sImgCard);
		JQyd("div.bgtrend_mtgdeck_cardviewer").children("img").remove();
		JQyd("div.bgtrend_mtgdeck_cardviewer").prepend('<img src="'+sImgCard+'" />');
        //
		JQyd(this).css("background-color","white");
	},function(){
		JQyd(this).css("background-color",color);
        JQyd("div.bgtrend_mtgdeck_cardviewer").children("img").remove();
		JQyd("div.bgtrend_mtgdeck_cardviewer").fadeIn(200).prepend('<img src="'+sImgCardBack+'" />');
		JQyd("div.bgtrend_mtgdeck_cardviewer").children("table").html("");
	});
	JQyd("li.card").click(function(){
		var index	=	JQyd(this).children("span.index").html();
		var set		=	JQyd(this).children("span.set").html();
		var lang		=JQyd(this).children("span.lang").html();
		var link		=	"card.php?setAbbr="+set+"&index="+index+"&lang="+lang;
		//alert(link);
		window.open(link);
	});
})
