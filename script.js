var CAT={L:["Mantiqiy savol","#4f6bff"],N:["Sonlar","#1f9d63"],V:["So‘z va analogiya","#d9822b"],S:["Fazoviy fikrlash","#a24cd6"]};
var P=["#4f6bff","#1f9d63","#d9822b","#a24cd6","#d6457a","#1590b8","#7a8f1f","#c4552d","#5a54d6","#2a8f8f"];
var NM=["Ali","Vali","Sardor","Bobur","Aziz","Jasur","Dilshod","Anvar","Nodir","Sherzod","Otabek","Timur"];
var DY=["Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba","Yakshanba"];
var DR=["Shimol","Sharq","Janub","G‘arb"],AL="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var AB=[["Qush : uchish = Baliq : ?","suzish",["suv","tangacha","akvarium"]],["Issiq : sovuq = Baland : ?","past",["uzun","katta","keng"]],["Shifokor : kasalxona = O‘qituvchi : ?","maktab",["kitob","dala","do‘kon"]],["Ko‘z : ko‘rish = Quloq : ?","eshitish",["hidlash","gapirish","yurish"]],["Kun : hafta = Oy : ?","yil",["soat","daqiqa","fasl"]],["Qalam : yozish = Pichoq : ?","kesish",["pishirish","tikish","chizish"]],["Ot : yugurish = Qush : ?","uchish",["suzish","sakrash","o‘rmalash"]],["Sovuq : qish = Issiq : ?","yoz",["bahor","kuz","tun"]]];
var GR=[["Olma","Nok","Uzum","Anor","Shaftoli"],["Sabzi","Piyoz","Karam","Lavlagi"],["Mushuk","It","Ot","Qo‘y"],["Stol","Stul","Shkaf","Divan"],["Qizil","Ko‘k","Yashil","Sariq"],["Toshkent","Samarqand","Buxoro","Xiva"]];
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function fn(v){return String(v).replace(/\B(?=(\d{3})+(?!\d))/g," ")}
function shuf(a,r){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(r()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function build(cat,q,c,w,r){var o=shuf([c].concat(w),r);return[cat,q,o,o.indexOf(c)]}
function num(cat,q,c,r,u){u=u||1;var D=[-1,1,-2,2,-3,3,4,-4,5,-5,10,-10,20],w=[],x,g=0;
  while(w.length<3&&g++<300){x=c+D[Math.floor(r()*D.length)]*u;if(x>=0&&x!==c&&w.indexOf(x)<0)w.push(x)}
  return build(cat,q,fn(c),w.map(fn),r)}
var G=[
function(I,r){var a=I(1,20),d=I(2,9),s=[];for(var i=0;i<5;i++)s.push(a+d*i);return num("N",s.join(", ")+", ?",a+5*d,r)},
function(I,r){var a=I(1,4),m=I(2,4),s=[],v=a;for(var i=0;i<5;i++){s.push(v);v*=m}return num("N",s.join(", ")+", ?",v,r)},
function(I,r){var s=I(1,9),k=I(1,3),t=[s];for(var i=0;i<5;i++){s+=k+i;t.push(s)}return num("N",t.slice(0,5).join(", ")+", ?",t[5],r)},
function(I,r){var t=[I(1,5),I(2,6)];for(var i=2;i<7;i++)t.push(t[i-1]+t[i-2]);return num("N",t.slice(0,6).join(", ")+", ?",t[6],r)},
function(I,r){var s=I(2,6),k=I(1,4),t=[s];for(var i=1;i<7;i++)t.push(i%2?t[i-1]*2:t[i-1]-k);return num("N",t.slice(0,6).join(", ")+", ?",t[6],r)},
function(I,r){var v=I(3,9)*10,t=I(2,6);return num("N","Poyezd soatiga "+v+" km tezlik bilan "+t+" soat yurdi. Necha km yo‘l bosdi?",v*t,r,10)},
function(I,r){var p=[10,20,25,50][I(0,3)],o=I(4,20)*10000,y=o*(100-p)/100;return num("N","Mahsulot "+p+"% chegirma bilan "+fn(y)+" so‘m turadi. Asl narxi necha so‘m?",o,r,1000)},
function(I,r){var m=I(2,3),w=I(2,6),d=m*I(2,8);return num("N",w+" ishchi ishni "+d+" kunda bajaradi. "+m*w+" ishchi necha kunda bajaradi?",d/m,r)},
function(I,r){var n=shuf(NM,r),tall=I(0,1);return build("L",n[0]+" "+n[1]+"’dan "+(tall?"baland":"katta")+", "+n[1]+" "+n[2]+"’dan "+(tall?"baland":"katta")+". Kim eng "+(tall?"baland":"kichik")+"?",tall?n[0]:n[2],[tall?n[1]:n[1],tall?n[2]:n[0],"Aniqlab bo‘lmaydi"],r)},
function(I,r){var l=shuf(["A","B","C","D","E","F","K","M","P","T"],r),x=l[0],y=l[1],z=l[2];return build("L","Hamma "+x+" lar "+y+". Hamma "+y+" lar "+z+". Qaysi xulosa to‘g‘ri?","Hamma "+x+" lar "+z,["Hamma "+z+" lar "+x,"Hech bir "+x+" "+z+" emas","Ba’zi "+y+" lar "+z+" emas"],r)},
function(I,r){var s=I(0,6),k=I(10,200),c=DY[(s+k)%7];return build("L","Bugun "+DY[s].toLowerCase()+". "+k+" kundan keyin haftaning qaysi kuni bo‘ladi?",c,shuf(DY.filter(function(d){return d!==c}),r).slice(0,3),r)},
function(I,r){var d=I(20,35),x=I(5,15),y=I(2,9);return num("L","Ota o‘g‘ildan "+d+" yosh katta. O‘g‘il hozir "+x+" yoshda. "+y+" yildan keyin ota necha yoshda bo‘ladi?",x+d+y,r)},
function(I,r){var a=AB[I(0,AB.length-1)];return build("V",a[0],a[1],a[2],r)},
function(I,r){var g=shuf([0,1,2,3,4,5],r),w=shuf(GR[g[0]],r).slice(0,3),o=GR[g[1]];return build("V","Ortiqchasini toping.",o[I(0,o.length-1)],w,r)},
function(I,r){var s=0,t=[];for(var i=0;i<3;i++){var R=I(0,1);t.push(R?"o‘ngga":"chapga");s=(s+(R?1:3))%4}return build("S","Shimolga qarab turibsiz. "+t.join(", ")+" burildingiz. Qaysi tomonga qaraysiz?",DR[s],DR.filter(function(d){return d!==DR[s]}),r)},
function(I,r){var d=I(1,3),s=I(0,6),t=[0,1,2,3].map(function(i){return AL[s+d*i]}),c=AL[s+4*d],w=[];
  var o=shuf(AL.split("").filter(function(x){return x!==c&&t.indexOf(x)<0}),r);return build("S","Harflar qatori: "+t.join(", ")+", ?",c,o.slice(0,3),r)},
function(I,r){var n=I(4,9);return num("S",n+" tomonli qavariq ko‘pburchakda nechta diagonal bor?",n*(n-3)/2,r)},
function(I,r){var h=I(1,6);return num("S","Soat "+h+":00 da soat va minut millari orasidagi burchak necha gradus?",30*h,r,10)}
];
var ORD=[8,0,12,14,9,1,13,15,10,2,16,11,3,17,5,4,6,7],T=10,K=30,TS=[];
for(var t=0;t<T;t++){TS.push([]);for(var j=0;j<K;j++){var r=rng((t+1)*7919+j*104729+13);TS[t].push(G[ORD[(j+t)%18]](function(a,b){return a+Math.floor(r()*(b-a+1))},r))}}
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
