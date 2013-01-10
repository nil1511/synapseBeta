var c=0,r=0;	
function op(s)
{
window.open(s);
}
$(document).keyup(function(e){
if (event.keyCode == 27) {
    $("#popup").slideUp();
		$("#spmore").slideUp();
    }
});
$(document).click(function(e){
if($("#popup").css('display')!='none' ||$("#spmore").css('display')!='none')
{
//console.log(e.target.id.substring(0,16));
if(e.target.id!='spmore'&&e.target.id!='moresponsor'&&e.target.id!='popup'&&e.target.id.substring(0,16)!='finalists_slider')
 {
    $("#popup").slideUp();
		$("#spmore").slideUp();
 }
}
});
$(window)
    .load(function() {
    // Animate loader off screen
    $("#loader_image")
        .delay(100)
        .animate({
        top: -400
    }, 500);
    $("#loader_background")
        .delay(750)
        .slideUp(750, 'easeInOutExpo');
    $("#finalfour_logo1")
        .delay(1000)
        .animate({
        left: 0
    }, 500);
	$("#finalfour_logo1").css('background','none');
	$("#finalfour_logo1_image").animate({height:128,width:128},500);
    $("#finalfour_logo2")
        .delay(1500)
        .animate({
        height: 169
    }, 500);
    $("#finalfour_logo3")
        .delay(2000)
        .animate({
        width: 718
    }, 500);
    $("#date")
        .delay(2250)
        .fadeIn(500);
    $("#scroll_down")
        .delay(2500)
        .fadeIn(500)
        .animate({
        bottom: 100
    }, 500);
});
window.addEvent('domready', function() {
   var scroll = new Fx.Scroll(window, {
        duration: 1000,
        wait: false,
        transition: Fx.Transitions.Cubic.easeInOut
    });
   var h= $$('.gotohome')
        .addEvent('click', function(event) {
        event = new Event(event)
            .stop();
			r=c=0;
        scroll.toElement('home');
    });
    $$('#scroll_down')
        .addEvent('click', function(event) {
        event = new Event(event)
            .stop();
			r=1;c=0;
        scroll.toElement('event');
    });

    $$('.gotoevent')
        .addEvent('click', function(event) {
        event = new Event(event)
            .stop();
			r=1;c=0;
        scroll.toElement('event');
    });
    $$('.gotocontact')
        .addEvent('click', function(event) {
        event = new Event(event)
            .stop();
			r=0;c=2;
        scroll.toElement('contact');
    });
    $$('.gotosponsor')
        .addEvent('click', function(event) {
        event = new Event(event)
            .stop();
			r=1;c=1;
        scroll.toElement('sponsor');
    });
    $$('.gotoregister')
        .addEvent('click', function(event) {
        event = new Event(event)
            .stop();
			r=1;c=2;
        scroll.toElement('register');
    });
	$$('.gotoreachus')
        .addEvent('click', function(event) {
        event = new Event(event)
            .stop();
			r=0;c=1;
        scroll.toElement('reachus');
    });
	window.onkeydown = function (e) {
	switch(e.keyIdentifier){
	case 'Left':
		if(c>0)
		c--;
		break;
	case 'Right':
		if(c<2)
		c++;
		break;
	case 'Down':
		r=1;
		break;
	case 'Up':
		r=0;
		break;
	default:
		return;
	}
	if(r==0&&c==0)
			$$('.gotohome').fireEvent('click');
	else if(r==0&&c==1)
			$$('.gotoreachus').fireEvent('click');
	else if(r==0&&c==2)
			$$('.gotocontact').fireEvent('click');
	else if(r==1&&c==0)
			$$('.gotoevent').fireEvent('click');
	else if(r==1&&c==1)
			$$('.gotosponsor').fireEvent('click');
	else if(r==1&&c==2){
			$$('.gotoregister').fireEvent('click');}
	}
});
$(document).ready(function(e) {
	$("#moresponsor").click(function(){
		$("#spmore").slideDown();
	});
$("#clsp").click(function(){
	$("#spmore").slideUp();
});
$("#cpop").click(function(e) {
    $("#popup").slideUp();
});
	var h=window.innerHeight;
	var w=window.innerWidth;
	$("#intro").css('height',h-50);
	$(".positioning").css('width',w-50);
	$(".positioning").css('height',h-50);
	$("#container").css('width',(3*w)+100);
	$("#container").css('height',(2*h)+50);
	$("#event").css('top',(h)+50);
	$("#event").css('left',0);
	$("#sponsor").css('top',h+50);
	$("#sponsor").css('left',w+50);
	$("#register").css('top',h+50);
	$("#register").css('left',(2*w)+100);
	$("#reachus").css('top',0);
	$("#reachus").css('left',w+50);
	$("#contact").css('top',0);
	$("#contact	").css('left',(2*w)+100);
	$("#ame").css('height',h-120);
	$("#yv").css('position','relative');	
	$("#yv").css('left',((w-50)/2)-320);
	 $("#finalists_slider")
        .hover(

    function() {
    },

    function() {
        $('#finalists_slider_team1_number')
            .fadeIn(250);
        $('#finalists_slider_team2_number')
            .fadeIn(250);
        $('#finalists_slider_team3_number')
            .fadeIn(250);
        $('#finalists_slider_team4_number')
            .fadeIn(250);
        $('.finalists_slider_number')
            .css('left',80);
        $('#finalists_slider_team1_number')
            .css('left',25);
        $("#finalists_slider_team1")
            .animate({
            left: '0%'
        }, 250);
        $("#finalists_slider_team2")
            .animate({
            left: '20%'
        }, 250);
        $("#finalists_slider_team3")
            .animate({
            left: '45%'
        }, 250);
        $("#finalists_slider_team4")
            .animate({
            left: '70%'
        }, 250);
    });
    $("#finalists_slider_team1")
        .hover(

    function() {
        $('#finalists_slider_team1_number')
            .fadeOut(250);
        $('#finalists_slider_team2_number')
            .css('left',10);
        $('#finalists_slider_team3_number')
            .css('left',10);
        $('#finalists_slider_team4_number')
            .css('left',10);
        $("#finalists_slider_team1")
            .animate({
            left: '0%'
        }, 250);
        $("#finalists_slider_team2")
            .animate({
            left: '40%'
        }, {
            duration: 'fast'
        });
        $("#finalists_slider_team3")
            .animate({
            left: '60%'
        }, {
            duration: 'fast'
        });
        $("#finalists_slider_team4")
            .animate({
            left: '80%'
        }, {
            duration: 'fast'
        });
    },

    function() {
    });

    $("#finalists_slider_team2")
        .hover(

    function() {
        $('#finalists_slider_team2_number')
            .fadeOut(250);
        $('#finalists_slider_team1_number')
            .css('left',10);
        $('#finalists_slider_team3_number')
            .css('left',10);
        $('#finalists_slider_team4_number')
            .css('left',10);
        $("#finalists_slider_team1")
            .animate({
            left: '0%'
        }, 250);
        $("#finalists_slider_team2")
            .animate({
            left: '15%'
        }, 250);
        $("#finalists_slider_team3")
            .animate({
            left: '55%'
        }, 250);
        $("#finalists_slider_team4")
            .animate({
            left: '75%'
        }, 250);
    },

    function() {
    });

    $("#finalists_slider_team3")
        .hover(

    function() {
        $('#finalists_slider_team3_number').fadeOut(250);
        $('#finalists_slider_team2_number')
            .css('left',10);
        $('#finalists_slider_team1_number')
            .css('left',10);
        $('#finalists_slider_team4_number')
            .css('left',10);
        $("#finalists_slider_team1")
            .animate({
            left: '0%'
        }, 250);
        $("#finalists_slider_team2")
            .animate({
            left: '10%'
        }, 250);
        $("#finalists_slider_team3")
            .animate({
            left: '35%'
        }, 250);
        $("#finalists_slider_team4")
            .animate({
            left: '75%'
        }, 250);
    },

    function() {
    });
	
    $("#finalists_slider_team4")
        .hover(
    function() {
        $('#finalists_slider_team4_number')
            .fadeOut(250);
        $('#finalists_slider_team2_number')
            .css('left',10);
        $('#finalists_slider_team3_number')
            .css('left',10);
        $('#finalists_slider_team1_number')
            .css('left',10);
        $("#finalists_slider_team1")
            .animate({
            left: '0%'
        }, 250);
        $("#finalists_slider_team2")
            .animate({
            left: '10%'
        }, 250);
        $("#finalists_slider_team3")
            .animate({
            left: '30%'
        }, 250);
        $("#finalists_slider_team4")
            .animate({
            left: '50%'
        }, 250);
    },

    function() {
    });
    $("#finalists_slider_team1")
        .click(
    function() {
	//$("#con").html();
	$("#popup").slideDown('fast');
    });
	
    $("#finalists_slider_team2")
        .click(
    function() {
	$("#popup").slideDown('fast');
    });
    
	$("#finalists_slider_team3")
        .click(
    function() {
	$("#popup").slideDown('fast');
    });
    
	$("#finalists_slider_team4")
        .click(
    function() {
	$("#popup").slideDown('fast');
    });
	
	$(".spimg").click(
	function(e){
	var l=e.currentTarget.src;
	l=l.substring(l.indexOf('sponsors/'));
	l=l.substring(9,l.length-4);
	switch(l)
	{
		case '2':
		op("http://www.radiomirchi.com/");
		break;
		case '3':
		op("http://www.audi.in/");
		break;
		case '4':
		op("http://www.heromotocorp.com/");
		break;
		case '6':
		op("http://www.ongcindia.com/");
		break;
		case '7':
		op("http://www.ganeshhousing.com/");
		break;
		case '29':
		op("http://flipkart.com/");
		break;
		case '32':
		op("http://www.codechef.com");
		break;
		case '33':
		op("http://www.dominos.co.in");
		break;
		case '35':
		op("http://www.iocl.com/");
		break;
		case '25':
		op("http://travelplaza.biz/");
		break;
		case '31':
		op("http://www.open-silicon.com/");
		break;
		case '26':
		op("http://www.campusfrance.org/en");
		break;
		case '27':
		op("http://www.shiamak.com/");
		break;
		case '23':
		op("http://www.freecharge.in/");
		break;
		case '24':
		op("http://www.studyinholland.nl/");
		break;
		case '20':
		op("http://www.tatasteel.com/");
		break;
		case '19':
		op("https://www.tie.org/");
		break;
		case '18':
		op("http://www.clarislifesciences.com/");
		break;
		case '17':
		op("http://www.endeavorcareers.com/home.php");
		break;
		case '16':
		op("http://www.shreebalajiconstruction.com/");
		break;
		case '15':
		op("http://www.wildcraft.in/");
		break;
		case '13':
		op("http://www.pepsi.com/");
		break;		
		case '12':
		op("http://spykar.com/");
		break;
		case '11':
		op("http://www.birlasunlife.com/");
		break;
		case '10':
		op("http://www.bankofbaroda.co.in/");
		break;
		case '9':
		op("http://www.cafecoffeeday.com/");
		break;
		case '8':
		op("http://time4education.com/default_afterbanner.asp");
		break;
		default:
		console.log(l);
		break;
	}
	}	
	);
});