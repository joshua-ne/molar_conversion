if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('../sw.js').then( () => {
    console.log('Service Worker Registered')
   })
 })
}


var chk;
var chk1=true;
var chk2=true;
var chk3=true;
var chk4=true;
var n1=0;
var n2=0;
var n3=0;
var n4=0;
var q1=0;
var m2=0;
var c3=0;
var m4=0;
function res()
{
    n1=0;
    n2=0;
    n3=0;
    n4=0;
    chk1=true;
    chk2=true;
    chk3=true;
    chk4=true;
    q1=0;
    m2=0;
    c3=0;
    m4=0;
}
function helpp()
{
    window.open('../scripts/h01_04.html','help', config='height=500,width=540,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no');
    self.name="Main window"
}
function Mrec()
{
    if(chk1==0){conv1()};
    if(chk2==0){conv2()};
    if(chk3==0){conv3()};
    if(chk4==0){conv4()};
}
function Mi()
{
    chk=true;
    M = parseFloat(document.prot.M.value);
// ##03
    if(isNaN(M)||M==0){alert("\"Molecule molecular weight [kDa]\" should be number."); document.prot.M.focus(); return true;};
    M =  Math.abs(M);
    document.prot.M.value=M+"kDa"
    chk=false;
}
function conv1()
{
    Mi();
    if(chk){return true};
    m1=parseFloat(document.prot.m1.value);
// ##04
    if(isNaN(m1)||m1==0){alert("\"Weight\" should be number."); document.prot.m1.focus(); return true;};
    m1 =  Math.abs(m1)
    q1=m1/Math.pow(10,3*document.prot.Dm1.selectedIndex)/M/1000;
    q1sh=Math.round(q1*6.022045*Math.pow(10,23));
    n=0;
    while(n<6&&q1<1) {n++; q1 = q1*1000};
    n1=n;
    r=Math.round(q1*100)/100;
    if(r>0){q1=r};
    document.prot.m1.value=m1;
    document.prot.q1.value=q1;
    document.prot.q1sh.value=q1sh;
    document.prot.Dq1.selectedIndex=n;
    chk1=false;
}
function rclc1()
{
// ##05
    if(chk1){alert("Only after calculation."); return true};
    document.prot.q1.value = q1*Math.pow(10,3*document.prot.Dq1.selectedIndex)/Math.pow(10,3*n1);
}
function conv2()
{
    Mi();
    if(chk){return true};
    q2=parseFloat(document.prot.q2.value);
// ##06
    if(isNaN(q2)||q2==0){alert("\"mole quantity\" should be number."); document.prot.q2.focus(); return true;};
    q2 =  Math.abs(q2)
    q2sh=Math.round(q2*6.022045*Math.pow(10,23))/Math.pow(10,3*document.prot.Dq2.selectedIndex);
    m2=q2/Math.pow(10,3*document.prot.Dq2.selectedIndex)*M*1000;
    n=0;
    while(n<5&&m2<1) {n++; m2 = m2*1000};
    n2=n;
    r=Math.round(m2*100)/100;
    if(r>0){m2=r};
    document.prot.q2.value=q2;
    document.prot.m2.value=m2;
    document.prot.q2sh.value=q2sh;
    document.prot.Dm2.selectedIndex=n;
    chk2=false;
}
function rclc2()
{
// ##05
    if(chk2){alert("Only after calculation."); return true};
    document.prot.m2.value = m2*Math.pow(10,3*document.prot.Dm2.selectedIndex)/Math.pow(10,3*n2);
}
function conv3()
{
    Mi();
    if(chk){return true};
    m3=parseFloat(document.prot.m3.value);
// ##04
    if(isNaN(m3)||m3==0){alert("\"Weight\" should be number."); document.prot.m3.focus(); return true;};
    m3 =  Math.abs(m3)
    v3=parseFloat(document.prot.v3.value);
// ##07
    if(isNaN(v3)||v3==0){alert("\"Volume\" should be number."); document.prot.v3.focus(); return true;};
    v3 =  Math.abs(v3)
    c3=m3*Math.pow(10,3*document.prot.Dv3.selectedIndex)/v3/M/1000/Math.pow(10,3*document.prot.Dm3.selectedIndex)
    n=0;
    while(n<6&&c3<1) {n++; c3 = c3*1000};
    n3=n;
    r=Math.round(c3*100)/100;
    if(r>0){c3=r};
    document.prot.m3.value=m3;
    document.prot.v3.value=v3;
    document.prot.c3.value=c3;
    document.prot.Dc3.selectedIndex=n;
    chk3=false;
}
function rclc3()
{
// ##05
    if(chk3){alert("Only after calculation."); return true};
    document.prot.c3.value = c3*Math.pow(10,3*document.prot.Dc3.selectedIndex)/Math.pow(10,3*n3);
}
function conv4()
{
    Mi();
    if(chk){return true};
    c4=parseFloat(document.prot.c_4.value);
// ##08
    if(isNaN(c4)||c4==0){alert("\"Concentration\" should be number."); document.prot.c_4.focus(); return true;};
    c4 =  Math.abs(c4)
    v4=parseFloat(document.prot.v4.value);
// ##07
    if(isNaN(v4)||v4==0){alert("\"Volume\" should be number."); document.prot.v4.focus(); return true;};
    v4 =  Math.abs(v4)
    m4=c4/Math.pow(10,3*document.prot.Dc4.selectedIndex)*v4/Math.pow(10,3*document.prot.Dv4.selectedIndex)*M*1000
    n=0;
    while(n<5&&m4<1) {n++; m4 = m4*1000};
    n4=n;
    r=Math.round(m4*100)/100;
    if(r>0){m4=r};
    document.prot.c_4.value=c4;
    document.prot.v4.value=v4;
    document.prot.m4.value=m4;
    document.prot.Dm4.selectedIndex=n;
    chk4=false;
}
function rclc4()
{
// ##06
    if(chk4){alert("Only after calculation."); return true};
    document.prot.m4.value = m4*Math.pow(10,3*document.prot.Dm4.selectedIndex)/Math.pow(10,3*n4);
}
// -->





