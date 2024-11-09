function cls() {
    document.getElementById('res ').innerHTML=0;
    
}

function dis(x) {
    document.getElementById('res').innerHTML+=x;
}

function resu() {
    op=document.getElementById('res').innerHTML;
    res=eval(document.getElementById('res').innerHTML);
    document.getElementById('res').innerHTML=`${op}<br>${res}`;
}
function del() {
    op=document.getElementById('res').innerHTML;
    res=op.substring(0,op.length-1)
    document.getElementById('res').innerHTML=res
}
function down(x) {
    x.classList.add('click');
    
}
function up(y) {
    y.classList.remove('click');
    
}