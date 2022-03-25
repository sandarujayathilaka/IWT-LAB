function loadData(data){
if(data=='but1'){
    document.getElementById('para').innerHTML="The iPhone has a user interface built around a multi-touch screen. It connects to cellular networks or Wi-Fi, and can make calls, browse the web, take pictures, play music and send and receive emails and text messages. Since the iPhone's launch further features have been added, including larger screen sizes, shooting video, waterproofing, the ability to install third-party mobile apps through an app store, and many accessibility features. Up to iPhone 8 and 8 Plus, iPhones used a layout with a single button on the front panel that returns the user to the home screen. Since iPhone X, iPhone models have switched to a nearly bezel-less front screen design with app switching activated by gesture recognition.";
    document.getElementById('image').src="https://www.pngall.com/wp-content/uploads/2016/04/Apple-IPhone-PNG.png";
    document.getElementById('image').style.width='20%';

    var para=document.getElementById("para");
    document.getElementById("para").innerHTML = list;
    para.style.color="#d40f0f";
    para.style.backgroundColor="yellow";
    para.style.textAlign="justify";
    para.style.marginLeft="35%";
    para.style.marginRight="35%";
}
else if(data=='but2'){
    document.getElementById('para').innerHTML="Jobs unveiled the iPhone to the public on January 9, 2007, at the Macworld 2007 convention at the Moscone Center in San Francisco.[28] The two initial models, a 4 GB[a] model priced at US$499 and an 8 GB model at US$599 (both requiring a two-year contract), went on sale in the United States on June 29, 2007, at 6:00 pm local time, while hundreds of customers lined up outside the stores nationwide.[29] The passionate reaction to the launch of the iPhone resulted in sections of the media dubbing it the 'Jesus phone'.[30][31] Following this successful release in the US, the first generation iPhone was made available in the UK, France, and Germany in November 2007, and Ireland and Austria in the spring of 2008."
    document.getElementById('image').src="https://i.redd.it/c88isfw1c9k61.jpg";
    document.getElementById('image').style.width='10%';
}

else if(data=='but3'){
    document.getElementById('para').innerHTML="the Macworld 2007 convention at the Moscone Center in San Francisco.[28] The two initial models, a 4 GB[a] model priced at US$499 and an 8 GB model at US$599 (both requiring a two-year contract), went on sale in the United States on June 29, 2007, at 6:00 pm local time, while hundreds of customers lined up outside the stores nationwide.[29] The passionate reaction to the launch of the iPhone resulted in sections of the media dubbing it the 'Jesus phone'.[30][31] Following this successful release in the US, the first generation iPhone was made available in the UK, France, and Germany in November 2007, and Ireland and Austria in the spring of 2008."
    document.getElementById('image').src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-11-red.png";
    document.getElementById('image').style.width='20%';
}

else if(data=='but4'){
    document.getElementById('para').innerHTML="San Francisco.[28] The two initial models, a 4 GB[a] model priced at US$499 and an 8 GB model at US$599 (both requiring a two-year contract), went on sale in the United States on June 29, 2007, at 6:00 pm local time, while hundreds of customers lined up outside the stores nationwide.[29] The passionate reaction to the launch of the iPhone resulted in sections of the media dubbing it the 'Jesus phone'.[30][31] Following this successful release in the US, the first generation iPhone was made available in the UK, France, and Germany in November 2007, and Ireland and Austria in the spring of 2008."
    document.getElementById('image').src="https://freepngimg.com/thumb/apple_iphone/5-2-apple-iphone-png-picture.png";
    document.getElementById('image').style.width='20%';
}

}

function loop1(){
    const ary=["Iphone x Rs 10000/=","Apple Iphone XR 50000/=","Apple s6 Rs 300000/=","Red Apple Iphone XR 60000/="]
    document.getElementById('image').src="https://cdn.vox-cdn.com/thumbor/Z1V-m4y_u_JrtKuHtub1IC7bwF8=/0x0:1306x734/1820x1024/filters:focal(549x263:757x471):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68490964/Best_Phone_Grid_Fall_2021_16x9.10.jpg";
    var list="";
  
    var i;
    for(i=0,len =ary.length;i<len;i++){

    list = list+ary[i]+"<br>";


    }
    var para=document.getElementById("para");
    document.getElementById("para").innerHTML = list;
    para.style.color="#d40f0f";
    para.style.backgroundColor="yellow";
    para.style.textAlign="center";
    para.style.marginLeft="35%";
    para.style.marginRight="35%";
}


function loop2(){
    
    document.getElementById('image').src="https://cdn.vox-cdn.com/thumbor/Z1V-m4y_u_JrtKuHtub1IC7bwF8=/0x0:1306x734/1820x1024/filters:focal(549x263:757x471):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68490964/Best_Phone_Grid_Fall_2021_16x9.10.jpg";
    var list="This is a loop <br>";
  
   

    var ary =[];
    ary["iphone1"]=15000;
    ary["iphone2"]=50000;
    ary["iphone3"]=3000;
    ary["iphone4"]=60000;
    
   
    for(var items in ary){
        if(ary[items]>10000){
     list = list+items+":"+"Rs "+ary[items]+"<br>";


    
    }
}
    var para=document.getElementById("para");
    document.getElementById("para").innerHTML = list;
    para.style.color="#d40f0f";
    para.style.backgroundColor="#30d40f";
    para.style.textAlign="center";
    para.style.marginLeft="35%";
    para.style.marginRight="35%";
}


function loop3(){
    
    document.getElementById('image').src="https://cdn.vox-cdn.com/thumbor/Z1V-m4y_u_JrtKuHtub1IC7bwF8=/0x0:1306x734/1820x1024/filters:focal(549x263:757x471):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68490964/Best_Phone_Grid_Fall_2021_16x9.10.jpg";
   var list="";
  
    var ary =[];
    ary["iphone1"]=15000;
    ary["iphone2"]=5000;
    ary["iphone3"]=3000;
    ary["iphone4"]=60000;
    
    for(var item in ary){
        if(ary[item]<10000){
            list =list+item+":"+ary[item]+"<br>";
        }
    }
   
    var para=document.getElementById("para");
    document.getElementById("para").innerHTML = list;
    para.style.color="#d40f0f";
    para.style.backgroundColor="#00f0f0";
    para.style.textAlign="center";
    para.style.marginLeft="35%";
    para.style.marginRight="35%";
};


function checkPassword (){
    var pass1 = document.getElementById("P1").value;
    var pass2 = document.getElementById("p2").value;

    if(pass1=pass2){
        alert("password Successfuly set");
        
    }
    else
    alert("password Mismatch");
    
   console.log("pass1","pass2");
}

