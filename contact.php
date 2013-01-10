<?php
//tested using vpn connection --Nilesh
$f=curl_init("http://graph.facebook.com/alientec");
curl_setopt($f,CURLOPT_HEADER,1);
curl_setopt($f,CURLOPT_NOBODY,1);
curl_setopt($f, CURLOPT_RETURNTRANSFER, true);
curl_setopt($f, CURLOPT_TIMEOUT, 10);
$fa = curl_exec($f);
curl_close($f);
if(strstr($fa,'Access denied')!='')
$u='http://d-wing.appspot.com/graph.facebook.com';
else
	$u='http://graph.facebook.com';
?>
<html><link rel="stylesheet" href="css/main1.css" media="all" type="text/css" />
<link href='http://fonts.googleapis.com/css?family=Rancho' rel='stylesheet' type='text/css'>

    <div  id="tes"><br /></div>
<table id="ctab" >
<tr>
<td>
<!--<?php // echo $u; ?>/AakashParmar09/picture?type=large-->
<a href="http://facebook.com/AakashParmar09" target="_blank" ><img id="conimg" src="images/aap.png" ></a><div id="cdd">
    <strong>Convener</strong><br />Aakash Parmar<br />aakash_parmar@daiict.ac.in<br />9913146603</div></td>
<td><img id="conimg" src="images/aj.jpg"  ><div id="cdd">
    <strong>Deputy Convener</strong><br />Ashish Jain<br />201001068@daiict.ac.in<br />9409211725</div></td>
    </tr>
</table>
	<div id="te">Mentor</div>
<table id="ctab">
    <tr >
	<td><a href="http://facebook.com/ashish.soni.777" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/ashish.soni.777/picture?type=large"  /></a><div id="ctype">Mentor</div><div id="cdd">
   Ashish Soni<br />ashish_soni@daiict.ac.in<br />9016425916</div></td>
    <td><a href="http://facebook.com/malvaniaviral" target="_blank"><img id="conimg" src="<?php echo $u; ?>/malvaniaviral/picture?type=large"  /></a><div id="ctype">Mentor</div><div id="cdd">
   Viral Malvania<br />malvania_viral@daiict.ac.in<br /><br /> </div>
    </td>
	</tr>
 </table>
<div id="te">PR/Marketing</div>
 <table id="ctab">
	<tr>
<td><a href="http://facebook.com/swatmohit" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/swatmohit/picture?type=large"  /></a><div id="ctype">PR/Marketing</div><div id="cdd">
    Mohit Chouhdary<br />mohit_choudhary@daiict.ac.in<br />9624157104</div></td>
<td><a href="http://facebook.com/manasvi.batra" target="_blank" ><img id="conimg" src="images/mansi.png"  /></a><div id="ctype">PR/Marketing</div><div id="cdd">
   Manasvi Batra<br />201101171@daiict.ac.in<br />8460506962</div></td>
<td><a href="http://facebook.com/tushar.juneja.18" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/tushar.juneja.18/picture?type=large"  /></a><div id="ctype">PR/Marketing</div><div id="cdd">
   Tushar Juneja<br />201101087@daiict.ac.in<br />7698941853</div></td>
	</tr>
</table>	
<div id="te">Sponsorship</div>
<table id="ctab">
	<tr>
<td><a href="http://facebook.com/abhishek.panday.311" target="_blank" ><img id="conimg" src="images/ap.png"  /></a><div id="ctype">Sponsorship</div><div id="cdd">
    Abhishek Panday<br />abhishek_panday@daiict.ac.in<br />9998808282<br /></div></td>	
<td><a href="http://facebook.com/dubeyrocks" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/dubeyrocks/picture?type=large"  /></a><div id="ctype">Sponsorship</div><div id="cdd">
    Ayushi Dubey<br />ayushi_dubey@daiict.ac.in<br />9427325566</div></td>
<td><a href="http://facebook.com/ompatel224" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/ompatel224/picture?type=large"  /></a><div id="ctype">Sponsorship</div><div id="cdd">
   Om Patel<br />201101032@daiict.ac.in<br />9537811281<br /></div></td>
</table>
<div id="te">Hospitality</div>
<table id="ctab">
   <tr>

<td><a href="" ><a href="http://facebook.com/ram.varanasi.1"target="_blank" ><img id="conimg" src="images/rv.png" /></a></a><div id="ctype">Event Management</div><div id="cdd">
    Ram Varanasi<br /><br />7359457479</div></td>
<td><a href="http://facebook.com/kunal.l.chawla" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/kunal.l.chawla/picture?type=large"  /></a><div id="ctype">Hospitality</div><div id="cdd">
    Kunal Chawla<br />kunal_chawla@daiict.ac.in<br />9722242532</div></td>   
   </tr>
</table>
<div id="te">Event Management</div>
<table id="ctab">
<tr>
<td><a href="http://facebook.com/ashish.raj.710" target="_blank" ><img id="conimg" src="images/ar.png"  /></a><div id="ctype">Event Management</div><div id="cdd">
    Ashish Raj<br />ashish_raj@daiict.ac.in<br />9737800511</div></td>
	<td><a href="http://facebook.com/aviral.varshney.1" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/aviral.varshney.1/picture?type=large"  /></a><div id="ctype">Hospitality</div><div id="cdd">
    Aviral Varshney<br />201101077@daiict.ac.in<br />9714725603</div></td>
<td><a href="http://facebook.com/ankit.patel.779642" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/ankit.patel.779642/picture?type=large"  /></a><div id="ctype">Event Management</div><div id="cdd">
    Ankit Patel<br /><br /><br /></div></td>
</tr>
</table>
<div id="te">Web Developer</div>
<table id="ctab">
<tr>
<td><a href="http://facebook.com/jay.mehta.796" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/jay.mehta.796/picture?type=large"  /></a><div id="ctype">Web Master</div><div id="cdd">
    Jay Mehta<br /><br /></div></td>
<td><a href="http://facebook.com/anuj.kosambi" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/anuj.kosambi/picture?type=large"  /></a><div id="ctype">Web Master</div><div id="cdd">
    Anuj Kosambi<br /><br /></div></td>
<td><a href="http://facebook.com/alientec" target="_blank" ><img id="conimg" src="<?php echo $u; ?>/alientec/picture?type=large"  /></a><div id="ctype">Web Master</div><div id="cdd">
    Nilesh Suthar<br /><br /></div></td>
</tr>
</table>
</html> 
 