var CAT={L:["Mantiqiy savol","#4f6bff"],N:["Sonlar","#1f9d63"],V:["So‘z va analogiya","#d9822b"],S:["Fazoviy fikrlash","#a24cd6"]};
var P=["#4f6bff","#1f9d63","#d9822b","#a24cd6","#d6457a","#1590b8","#7a8f1f","#c4552d","#5a54d6","#2a8f8f"];
var NM=["Ali","Vali","Sardor","Bobur","Aziz","Jasur","Dilshod","Anvar","Nodir","Sherzod","Otabek","Timur"];
var DY=["Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba","Yakshanba"];
var DR=["Shimol","Sharq","Janub","G‘arb"],AL="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var AB=[["Qush : uchish = Baliq : ?","suzish",["suv","tangacha","akvarium"]],["Issiq : sovuq = Baland : ?","past",["uzun","katta","keng"]],["Shifokor : kasalxona = O‘qituvchi : ?","maktab",["kitob","dala","do‘kon"]],["Ko‘z : ko‘rish = Quloq : ?","eshitish",["hidlash","gapirish","yurish"]],["Kun : hafta = Oy : ?","yil",["soat","daqiqa","fasl"]],["Qalam : yozish = Pichoq : ?","kesish",["pishirish","tikish","chizish"]],["Ot : yugurish = Qush : ?","uchish",["suzish","sakrash","o‘rmalash"]],["Sovuq : qish = Issiq : ?","yoz",["bahor","kuz","tun"]],["Non : novvoy = Kitob : ?","yozuvchi",["o‘quvchi","kutubxona","varaq"]],["Soat : vaqt = Termometr : ?","harorat",["og‘irlik","uzunlik","tezlik"]],["Maktab : o‘quvchi = Kasalxona : ?","bemor",["dori","kitob","mashina"]],["Mashina : yo‘l = Kema : ?","dengiz",["osmon","tog‘","bog‘"]],["Tuxum : jo‘ja = Urug‘ : ?","o‘simlik",["tuproq","suv","meva"]],["Yosh : qari = Yangi : ?","eski",["katta","toza","yaxshi"]],["Quyosh : kun = Oy : ?","tun",["yulduz","bulut","kuz"]],["Qo‘l : barmoq = Daraxt : ?","shox",["ildiz","meva","bog‘"]]];
var GR=[["Olma","Nok","Uzum","Anor","Shaftoli"],["Sabzi","Piyoz","Karam","Lavlagi"],["Mushuk","It","Ot","Qo‘y"],["Stol","Stul","Shkaf","Divan"],["Qizil","Ko‘k","Yashil","Sariq"],["Toshkent","Samarqand","Buxoro","Xiva"],["Mashina","Poyezd","Samolyot","Velosiped"],["Qalam","Daftar","Ruchka","Kitob"],["Choy","Kofe","Sut","Sharbat"]];
var AN=[["katta","kichik"],["issiq","sovuq"],["tez","sekin"],["baland","past"],["yorug‘","qorong‘i"],["og‘ir","yengil"],["yangi","eski"],["ochiq","yopiq"],["quruq","ho‘l"],["uzoq","yaqin"],["to‘la","bo‘sh"],["qattiq","yumshoq"]];
var RD=[["Poygada ikkinchi o‘rindagi odamni quvib o‘tdingiz. Siz nechanchi o‘rindasiz?","2-o‘rin",["1-o‘rin","3-o‘rin","Aniqlab bo‘lmaydi"]],
["Xonaning 4 ta burchagida bittadan mushuk o‘tiribdi. Har mushukning qarshisida 3 ta mushuk bor. Jami nechta mushuk bor?","4",["3","12","16"]],
["1 kg paxta va 1 kg temirdan qaysi biri og‘irroq?","Ikkalasi teng",["Paxta","Temir","Aniqlab bo‘lmaydi"]],
["3 ta mushuk 3 ta sichqonni 3 daqiqada tutsa, 100 ta mushuk 100 ta sichqonni necha daqiqada tutadi?","3",["100","33","1"]],
["Kecha juma edi. Ertaga haftaning qaysi kuni bo‘ladi?","Yakshanba",["Shanba","Dushanba","Payshanba"]],
["Ota 40 yoshda, o‘g‘li 10 yoshda. Necha yildan keyin ota o‘g‘ildan 3 marta katta bo‘ladi?","5",["4","6","10"]],
["5 ta olma 15 000 so‘m tursa, 8 ta olma necha so‘m turadi?","24 000",["20 000","25 000","30 000"]],
["A > B va B = C. Qaysi xulosa to‘g‘ri?","A > C",["A < C","A = C","B > A"]],
["Bugun seshanba. 3 kun oldin haftaning qaysi kuni edi?","Shanba",["Yakshanba","Juma","Dushanba"]],
["Bir odam rasmga qarab: “Mening aka-ukam yo‘q, lekin bu odamning otasi mening otamning o‘g‘li”, dedi. Rasmda kim bor?","Uning o‘g‘li",["O‘zi","Otasi","Ukasi"]],
["Bir sinfda 30 ta o‘quvchi bor. Ularning hammasi bittadan 2 ta daftar olsa, nechta daftar kerak?","60",["30","32","15"]]];
var WD=["KITOB","QALAM","MAKTAB","DARAKT","OLMA","SUV","BAHOR","DALA","GUL","TOG"],PR=[2,3,5,7,11,13,17,19,23,29,31,37,41];
function PK(a,I){return a[I(0,a.length-1)]}
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function fn(v){return String(v).replace(/\B(?=(\d{3})+(?!\d))/g," ")}
function shuf(a,r){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(r()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function build(cat,q,c,w,r){var o=shuf([c].concat(w),r);return[cat,q,o,o.indexOf(c)]}
function num(cat,q,c,r,u){u=u||1;var D=[-1,1,-2,2,-3,3,4,-4,5,-5,10,-10,20],w=[],x,g=0;
  while(w.length<3&&g++<300){x=c+D[Math.floor(r()*D.length)]*u;if(x>=0&&x!==c&&w.indexOf(x)<0)w.push(x)}
  return build(cat,q,fn(c),w.map(fn),r)}
function enc(x,s){return x.split("").map(function(c){return AL[(AL.indexOf(c)+s)%26]}).join("")}
function lets(cat,t,c,r){var o=shuf(AL.split("").filter(function(x){return x!==c&&t.indexOf(x)<0}),r);return build(cat,"Harflar qatori: "+t.join(", ")+", ?",c,o.slice(0,3),r)}
var G=[
function(I,r){var a=I(1,30),d=I(2,12),s=[];for(var i=0;i<5;i++)s.push(a+d*i);return num("N",s.join(", ")+", ?",a+5*d,r)},
function(I,r){var a=I(1,5),m=I(2,4),s=[],v=a;for(var i=0;i<5;i++){s.push(v);v*=m}return num("N",s.join(", ")+", ?",v,r)},
function(I,r){var s=I(1,9),k=I(1,3),t=[s];for(var i=0;i<5;i++){s+=k+i;t.push(s)}return num("N",t.slice(0,5).join(", ")+", ?",t[5],r)},
function(I,r){var t=[I(1,5),I(2,6)];for(var i=2;i<7;i++)t.push(t[i-1]+t[i-2]);return num("N",t.slice(0,6).join(", ")+", ?",t[6],r)},
function(I,r){var s=I(2,6),k=I(1,4),t=[s];for(var i=1;i<7;i++)t.push(i%2?t[i-1]*2:t[i-1]-k);return num("N",t.slice(0,6).join(", ")+", ?",t[6],r)},
function(I,r){var v=I(3,9)*10,t=I(2,6);return num("N","Poyezd soatiga "+v+" km tezlik bilan "+t+" soat yurdi. Necha km yo‘l bosdi?",v*t,r,10)},
function(I,r){var p=PK([10,20,25,50],I),o=I(4,20)*10000,y=o*(100-p)/100;return num("N","Mahsulot "+p+"% chegirma bilan "+fn(y)+" so‘m turadi. Asl narxi necha so‘m?",o,r,1000)},
function(I,r){var m=I(2,3),w=I(2,6),d=m*I(2,8);return num("N",w+" ishchi ishni "+d+" kunda bajaradi. "+m*w+" ishchi necha kunda bajaradi?",d/m,r)},
function(I,r){var a=I(1,6),k=I(0,5),t=[];for(var i=0;i<6;i++)t.push((a+i)*(a+i)+k);return num("N",t.slice(0,5).join(", ")+", ?",t[5],r)},
function(I,r){var s=I(0,7);return num("N",PR.slice(s,s+5).join(", ")+", ?",PR[s+5],r)},
function(I,r){var a=I(1,9),b=I(10,30),d=I(2,5),e=I(2,6),t=[a,b,a+d,b+e,a+2*d,b+2*e,a+3*d];return num("N",t.slice(0,6).join(", ")+", ?",t[6],r)},
function(I,r){var m=I(2,3),k=I(1,3),x=I(1,4),t=[x];for(var i=0;i<5;i++){x=x*m+k;t.push(x)}return num("N",t.slice(0,5).join(", ")+", ?",t[5],r)},
function(I,r){var a=I(60,99),d=I(3,9),t=[];for(var i=0;i<5;i++)t.push(a-d*i);return num("N",t.join(", ")+", ?",a-5*d,r)},
function(I,r){var a=I(1,20),d=I(2,9);return num("N",a+", "+(a+d)+", ?, "+(a+3*d)+", "+(a+4*d),a+2*d,r)},
function(I,r){var a=I(10,40),b=I(10,40),c=I(10,40);c+=(3-(a+b+c)%3)%3;return num("N",a+", "+b+" va "+c+" sonlarining o‘rtachasi nechaga teng?",(a+b+c)/3,r)},
function(I,r){var p=PK([10,20,25,50,75],I),n=I(2,25)*20;return num("N",n+" sonining "+p+"% i nechaga teng?",n*p/100,r)},
function(I,r){var p=I(2,9)*500,n=I(3,12);return num("N","Bir dona daftar "+fn(p)+" so‘m. "+n+" dona daftar necha so‘m turadi?",p*n,r,500)},
function(I,r){var k=PK([2,3,4,5,6],I),n=k*I(3,12);return num("N",n+" sonining 1/"+k+" qismi nechaga teng?",n/k,r)},
function(I,r){var a=I(1,3),b=I(2,4),S=(a+b)*I(2,9)*1000;return num("N","Pul A va B ga "+a+":"+b+" nisbatda bo‘lindi. Jami "+fn(S)+" so‘m. A necha so‘m oldi?",S/(a+b)*a,r,1000)},
function(I,r){var x=I(20,60)*1000,y=I(5,15)*1000,z=I(3,12)*1000,n=PK(NM,I);return num("N",n+"da "+fn(x)+" so‘m bor edi. U "+fn(y)+" so‘m sarfladi, keyin "+fn(z)+" so‘m topdi. Hozir necha so‘mi bor?",x-y+z,r,1000)},
function(I,r){var a=I(7,10),b=I(12,17);return num("N","Ish soat "+a+":00 da boshlanib, "+b+":00 da tugadi. Necha daqiqa ishlandi?",(b-a)*60,r,30)},
function(I,r){var n=2*I(2,20);return num("N","Ketma-ket 3 ta juft sonning yig‘indisi "+(3*n+6)+". Eng kattasi qaysi?",n+4,r)},
function(I,r){var n=shuf(NM,r),t=I(0,1),w=t?"baland":"katta";return build("L",n[0]+" "+n[1]+"’dan "+w+", "+n[1]+" "+n[2]+"’dan "+w+". Kim eng "+(t?"past":"kichik")+"?",n[2],[n[0],n[1],"Aniqlab bo‘lmaydi"],r)},
function(I,r){var n=shuf(NM,r),t=I(0,1);return build("L",n[0]+" "+n[1]+"’dan baland, "+n[1]+" "+n[2]+"’dan baland, "+n[2]+" "+n[3]+"’dan baland. Kim eng "+(t?"baland":"past")+"?",t?n[0]:n[3],t?[n[1],n[2],n[3]]:[n[0],n[1],n[2]],r)},
function(I,r){var l=shuf(["A","B","C","D","E","F","K","M","P","T"],r),x=l[0],y=l[1],z=l[2];return build("L","Hamma "+x+" lar "+y+". Hamma "+y+" lar "+z+". Qaysi xulosa to‘g‘ri?","Hamma "+x+" lar "+z,["Hamma "+z+" lar "+x,"Hech bir "+x+" "+z+" emas","Ba’zi "+y+" lar "+z+" emas"],r)},
function(I,r){var l=shuf(["A","B","C","D","E","F","K","M","P","T"],r),x=l[0],y=l[1],z=l[2];return build("L","Hech bir "+x+" "+y+" emas. Hamma "+z+" lar "+x+". Qaysi xulosa to‘g‘ri?","Hech bir "+z+" "+y+" emas",["Hamma "+z+" lar "+y,"Ba’zi "+z+" lar "+y,"Hamma "+y+" lar "+z],r)},
function(I,r){var s=I(0,6),k=I(10,200),c=DY[(s+k)%7];return build("L","Bugun "+DY[s].toLowerCase()+". "+k+" kundan keyin haftaning qaysi kuni bo‘ladi?",c,shuf(DY.filter(function(d){return d!==c}),r).slice(0,3),r)},
function(I,r){var s=I(0,6),k=I(2,40),c=DY[((s-k)%7+7)%7];return build("L","Bugun "+DY[s].toLowerCase()+". "+k+" kun oldin haftaning qaysi kuni edi?",c,shuf(DY.filter(function(d){return d!==c}),r).slice(0,3),r)},
function(I,r){var d=I(20,35),x=I(5,15),y=I(2,9);return num("L","Ota o‘g‘ildan "+d+" yosh katta. O‘g‘il hozir "+x+" yoshda. "+y+" yildan keyin ota necha yoshda bo‘ladi?",x+d+y,r)},
function(I,r){var n=I(2,5),m=I(1,3);return num("L","Otaning "+n+" ta o‘g‘li bor. Har bir o‘g‘lining "+m+" tadan singlisi bor. Oilada nechta farzand bor?",n+m,r)},
function(I,r){var k=I(3,8),d=I(1,3),m=k+I(1,6);return num("L","Devor soati "+k+" marta urilganda "+(k-1)*d+" soniya o‘tadi. "+m+" marta urilganda necha soniya o‘tadi?",(m-1)*d,r)},
function(I,r){var n=I(4,10);return num("L",n+" ta odam bir-biri bilan bir martadan qo‘l siqishsa, jami nechta qo‘l siqish bo‘ladi?",n*(n-1)/2,r)},
function(I,r){var a=PK(RD,I);return build("L",a[0],a[1],a[2],r)},
function(I,r){var a=PK(AB,I);return build("V",a[0],a[1],a[2],r)},
function(I,r){var g=shuf(GR.map(function(_,i){return i}),r),w=shuf(GR[g[0]],r).slice(0,3),o=GR[g[1]];return build("V","Ortiqchasini toping.",PK(o,I),w,r)},
function(I,r){var p=PK(AN,I),w=shuf(AN.filter(function(x){return x!==p}).map(function(x){return x[0]}),r).slice(0,3);return build("V","“"+p[0]+"” so‘ziga qarama-qarshi ma’noli so‘z qaysi?",p[1],w,r)},
function(I,r){var w=shuf(WD,r),a=w[0],b=w[1],s=I(1,3),o=shuf([1,2,3,4,5].filter(function(x){return x!==s}),r).slice(0,3).map(function(x){return enc(b,x)});return build("L",a+" so‘zi "+enc(a,s)+" deb shifrlansa, "+b+" so‘zi qanday shifrlanadi?",enc(b,s),o,r)},
function(I,r){var l=[I(0,9),I(0,9),I(0,9)];return num("N","A=1, B=2, C=3, ... bo‘lsa, "+l.map(function(i){return AL[i]}).join("")+" harflari yig‘indisi necha?",l[0]+l[1]+l[2]+3,r)},
function(I,r){var s=0,t=[],k=I(3,5);for(var i=0;i<k;i++){var R=I(0,1);t.push(R?"o‘ngga":"chapga");s=(s+(R?1:3))%4}return build("S","Shimolga qarab turibsiz. "+t.join(", ")+" burildingiz. Qaysi tomonga qaraysiz?",DR[s],DR.filter(function(d){return d!==DR[s]}),r)},
function(I,r){var s=I(0,4),t=[s,s+1,s+3,s+6,s+10].map(function(i){return AL[i]});return lets("S",t,AL[s+15],r)},
function(I,r){var d=I(1,3),s=I(0,6),t=[0,1,2,3].map(function(i){return AL[s+d*i]});return lets("S",t,AL[s+4*d],r)},
function(I,r){var n=I(4,9);return num("S",n+" tomonli qavariq ko‘pburchakda nechta diagonal bor?",n*(n-3)/2,r)},
function(I,r){var h=I(1,6);return num("S","Soat "+h+":00 da soat va minut millari orasidagi burchak necha gradus?",30*h,r,10)},
function(I,r){var h=I(1,11);return num("S","Soat "+h+":30 da soat va minut millari orasidagi burchak necha gradus?",Math.abs(30*h+15-180),r,15)},
function(I,r){var S=[["Kubning",6,12,8],["To‘rtburchak piramidaning",5,8,5],["Uchburchakli prizmaning",5,9,6],["Uchburchakli piramidaning",4,6,4]],s=PK(S,I),p=I(0,2);return num("S",s[0]+" nechta "+["yog‘i","qirrasi","uchi"][p]+" bor?",s[p+1],r)},
function(I,r){var a=I(3,15),b=I(3,15),p=I(0,1);return num("S","Eni "+a+" sm, bo‘yi "+b+" sm bo‘lgan to‘rtburchakning "+(p?"perimetri":"yuzi")+" necha "+(p?"sm":"sm²")+"?",p?2*(a+b):a*b,r)},
function(I,r){var a=I(2,6);return num("S","Qirrasi "+a+" sm bo‘lgan kubning hajmi necha sm³?",a*a*a,r)},
function(I,r){var x=I(30,80),y=I(30,80);return num("S","Uchburchakning ikki burchagi "+x+"° va "+y+"°. Uchinchi burchagi necha gradus?",180-x-y,r)},
function(I,r){var t=PK([[3,4,5],[6,8,10],[5,12,13],[9,12,15],[8,15,17]],I);return num("S","Siz shimolga "+t[0]+" km, so‘ng sharqqa "+t[1]+" km yurdingiz. Boshlang‘ich nuqtadan to‘g‘ri chiziq bo‘yicha necha km uzoqdasiz?",t[2],r)}
];
G.slice().forEach(function(g){if(g(function(a){return a},rng(1))[0]==="V")G.push(g,g)});
var T=10,K=30,TS=[],used={},N=G.length,M=11;
function gcd(a,b){return b?gcd(b,a%b):a}
while(gcd(M,N)!==1)M++;
for(var t=0;t<T;t++){TS.push([]);for(var j=0;j<K;j++){var q,at=0;
  do{var r=rng((t*K+j)*7919+at*104729+13);q=G[(j*M+t*17+at)%N](function(a,b){return a+Math.floor(r()*(b-a+1))},r)}while(used[q[1]]&&++at<40);
  used[q[1]]=1;TS[t].push(q)}}
var cur=-1,qi=0,ans=[],tm=[],opened=[],last=Date.now(),finished=false;
for(var k=0;k<T*K;k++){ans.push(-1);tm.push(0)}
for(k=0;k<T;k++)opened.push(false);
var card=document.getElementById("card"),clk=document.getElementById("clk"),prog=document.getElementById("prog");
function setColor(c){document.documentElement.style.setProperty("--c",c)}
function esc(s){return String(s).replace(/[&<>]/g,function(m){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[m]})}
function fmt(s){s=Math.round(s);return Math.floor(s/60)+":"+("0"+(s%60)).slice(-2)}
function ix(){return cur*K+qi}
function flush(){var now=Date.now();if(cur>=0)tm[ix()]+=(now-last)/1000;last=now}
function total(){var s=0;tm.forEach(function(v){s+=v});return s}
function cnt(t){var c=0,s=0;for(var j=0;j<K;j++){if(ans[t*K+j]>=0)c++;s+=tm[t*K+j]}return[c,s]}
function tick(){if(finished)return;var ex=cur>=0?(Date.now()-last)/1000:0;
  clk.textContent=(cur>=0?"Bu savol: "+fmt(tm[ix()]+ex)+"  |  ":"")+"Umumiy: "+fmt(total()+ex)}
setInterval(tick,500);
function okOf(t){var o=0;for(var j=0;j<K;j++)if(ans[t*K+j]===TS[t][j][3])o++;return o}
function calcIQ(ok,an,tot){var avg=an?tot/an:0,b=0;if(ok>0){b=avg<=15?8:avg<=30?4:avg<=60?0:-4}return Math.max(70,Math.min(145,70+Math.round(60*ok/Math.max(an,K))+b))}
function lvl(iq){return iq>=130?"Juda yuqori":iq>=115?"Yuqori":iq>=100?"O‘rtadan yuqori":iq>=85?"O‘rtacha":"O‘rtachadan past"}
function testRes(t){setColor(P[t]);var c=cnt(t),o=okOf(t),iq=calcIQ(o,K,c[1]);
  prog.textContent=(t+1)+"-test yakunlandi";
  card.innerHTML='<div class="res"><span class="tag">'+(t+1)+'-test natijasi</span><div class="big">'+iq+'</div><p><b>'+lvl(iq)+'</b></p><p>To‘g‘ri javoblar: '+o+' / '+K+'</p><p>Vaqt: '+fmt(c[1])+' ('+Math.round(c[1])+' soniya), o‘rtacha '+Math.round(c[1]/K)+' soniya/savol</p><p class="small">Qaysi savollarda xato qilganingiz va to‘g‘ri javoblar ko‘rsatilmaydi.</p><div class="nav"><span></span><button class="btn" id="rb">Ro‘yxatga qaytish</button></div></div>';
  document.getElementById("rb").onclick=menu;tick();
}
function menu(){
  flush();cur=-1;setColor("#4f6bff");
  var done=ans.filter(function(a){return a>=0}).length;
  prog.textContent="Javob berilgan: "+done+" / "+T*K;
  var h='<span class="tag">Testlar ro‘yxati</span><div class="q">Testni tanlab “Boshlash” tugmasini bosing. Har birida 30 ta savol bor.</div>';
  for(var i=0;i<T;i++){var c=cnt(i);
    h+='<div class="row" style="--rc:'+P[i]+'"><span><b>'+(i+1)+'-test</b><span class="st">'+(c[0]===K?'Tugatildi · To‘g‘ri: '+okOf(i)+' / '+K+' · IQ '+calcIQ(okOf(i),K,c[1])+' · '+fmt(c[1]):opened[i]?'Javob berilgan: '+c[0]+' / '+K+' · '+fmt(c[1]):'Hali boshlanmagan')+'</span></span>'+
    '<button class="btn" data-i="'+i+'">'+(opened[i]?'Davom ettirish':'Boshlash')+'</button></div>'}
  h+='<div class="nav"><span></span><button class="btn" id="fn">Testni yakunlash</button></div>';
  card.innerHTML=h;
  card.querySelectorAll(".row .btn").forEach(function(b){b.onclick=function(){flush();cur=+b.dataset.i;opened[cur]=true;qi=0;question()}});
  document.getElementById("fn").onclick=finish;
  tick();
}
function go(i){flush();qi=i;question()}
function question(){
  var q=TS[cur][qi],cat=CAT[q[0]],a=ans[ix()];setColor(cat[1]);
  prog.textContent=(cur+1)+"-test, "+(qi+1)+" / "+K+"-savol";
  var h='<span class="tag">'+cat[0]+' · '+(qi+1)+' / '+K+'</span><div class="q">'+esc(q[1])+'</div><div class="opts">';
  q[2].forEach(function(o,k){h+='<button class="opt'+(a===k?' sel':'')+'" data-k="'+k+'">'+String.fromCharCode(65+k)+') '+esc(o)+'</button>'});
  h+='</div><div class="nav"><button class="btn grey" id="bk"'+(qi===0?' disabled':'')+'>Oldingisi</button>'+(qi===K-1?'<button class="btn" id="nx">Darajangizni ko‘rish</button>':'<button class="btn" id="nx">Keyingisi</button>')+'</div>';
  h+='<button class="btn save" id="sv">Saqlash va ro‘yxatga qaytish</button>';
  card.innerHTML=h;
  card.querySelectorAll(".opt").forEach(function(b){b.onclick=function(){ans[ix()]=+b.dataset.k;question()}});
  document.getElementById("bk").onclick=function(){go(qi-1)};
  document.getElementById("nx").onclick=function(){if(qi===K-1){flush();var t=cur;cur=-1;testRes(t)}else go(qi+1)};
  document.getElementById("sv").onclick=menu;
  tick();
}
function finish(){
  flush();
  var left=ans.filter(function(a){return a<0}).length;
  if(left>0&&!confirm("Javob berilmagan savollar: "+left+" ta. Baribir yakunlaysizmi?"))return;
  finished=true;setColor("#4f6bff");
  var ok=0,an=0,rows="";
  for(var t=0;t<T;t++){var c=cnt(t);an+=c[0];for(var j=0;j<K;j++)if(ans[t*K+j]===TS[t][j][3])ok++;
    rows+='<tr><td>'+(t+1)+'-test</td><td>'+c[0]+' / '+K+'</td><td>'+(c[0]===K?okOf(t)+' / '+K:'—')+'</td><td>'+fmt(c[1])+'</td></tr>'}
  var tot=total(),avg=an?tot/an:0,bonus=0;
  if(ok>0){bonus=avg<=15?8:avg<=30?4:avg<=60?0:-4}
  var iq=Math.max(70,Math.min(145,70+Math.round(60*ok/Math.max(an,K))+bonus));
  var l=iq>=130?"Juda yuqori":iq>=115?"Yuqori":iq>=100?"O‘rtadan yuqori":iq>=85?"O‘rtacha":"O‘rtachadan past";
  card.innerHTML='<div class="res"><span class="tag">Natija</span><div class="big">'+iq+'</div><p><b>'+l+'</b></p>'+
  '<p>Javob berilgan savollar: '+an+' / '+T*K+'</p><p>To‘g‘ri javoblar: '+ok+' / '+an+'</p><p>Umumiy vaqt: '+fmt(tot)+' ('+Math.round(tot)+' soniya), o‘rtacha '+Math.round(avg)+' soniya/savol</p>'+
  '<table><tr><th>Test</th><th>Javoblar</th><th>To‘g‘ri</th><th>Vaqt</th></tr>'+rows+'</table>'+
  '<p class="small">Ball hisobi: asos 70 + aniqlikka qarab ball (kamida 30 ta savolga javob bersangiz aniqroq bo‘ladi), tezlik uchun −4 dan +8 gacha. Qaysi savollarda xato qilganingiz va to‘g‘ri javoblar ko‘rsatilmaydi. Bu taxminiy natija, o‘yin-kulgi uchun va rasmiy IQ testi o‘rnini bosmaydi.</p>'+
  '<button class="btn" id="re">Qayta boshlash</button></div>';
  prog.textContent="Test yakunlandi";clk.textContent="Umumiy: "+fmt(tot);
  document.getElementById("re").onclick=function(){location.reload()};
}
menu();
