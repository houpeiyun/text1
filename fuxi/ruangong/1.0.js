data:{
    name:云南白药
    price:3.5
    count:库存量
    <button>缺药</button>
}
var div1=document.getElementById("mokuai2");
var oli=div1.getElementsByTagName('li');
var oul1=document.getElementById('mokuai3');
var oli1=oul1.getElementsByTagName('div');
for(i=0;i<oli.length;i++){
    oli[i].index=i;
    oli[i].onmouseover=function () {
        for(j=0;j<oli.length;j++)
        {
            oli[j].style.backgroundColor="";
            oli1[j].style.display="none";
            oli[j].style.color = 'white'
        }
        this.style.backgroundColor = 'red';
        this.style.color = 'black'
        oli1[this.index].style.display="block";
    }
}
