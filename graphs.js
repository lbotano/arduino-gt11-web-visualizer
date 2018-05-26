function t(e,a,p)
{
    c = document.getElementById(e).getContext('2d');
    c.strokeRect(60*a,20*a,40*a,260*a);
    c.fillStyle='#ff0000';
    h=p*5.2;
    c.fillRect(60*a,(280-h)*a,40*a,h*a);
    
    c.font=20*a+'px Roboto';
    c.fillStyle = '#000000';
    for(i=0;i<6;i++)
    {
        c.fillText(5-i+'0 C',0,(20+i*52)*a);
        c.moveTo(40*a,(20+i*52)*a);
        c.lineTo(300*a,(20+i*52)*a);
        c.stroke();
    }
}

t('t',1,tmp);
t('ti',.5,tmpI);
t('te',.5,tmpE);
t('ta',.5,tmpA);

function q(element, scale, percent)
{
    ctx = document.getElementById(element).getContext("2d");
    ctx.lineWidth = 10; size = 100 * scale;
    ctx.arc(size, size, size - 10, 0, Math.PI * 2 * percent/100);
    ctx.stroke(); ctx.font = size * 0.55 + "px Roboto";
    ctx.fillText(percent + "%", size * 0.4, size * 1.2);
}

q('h',1,hum);
q('hi',.5,humI);
q('he',.5,humE);
q('ha',.5,humA);

setTimeout(function(){
    window.location.reload(1);
}, 5000);
 