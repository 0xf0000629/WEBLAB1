function draw(x, y, r){
    const canv = document.getElementById("canv");
    const ctx = canv.getContext("2d");
    ctx.clearRect(0, 0, canv.width, canv.height);
    let w = canv.width; let ws = canv.width/40;
    let h = canv.height; let hs = canv.height/40;

    ctx.beginPath();
    ctx.moveTo(0, h/2);
    ctx.lineTo(w, h/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w/2, 0);
    ctx.lineTo(w/2, h);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w/4, h/2-hs);
    ctx.lineTo(w/4, h/2+hs);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w/8*3, h/2-hs);
    ctx.lineTo(w/8*3, h/2+hs);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w/4*3, h/2-hs);
    ctx.lineTo(w/4*3, h/2+hs);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w/8*5, h/2-hs);
    ctx.lineTo(w/8*5, h/2+hs);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w/2-ws, h/4);
    ctx.lineTo(w/2+ws, h/4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w/2-ws, h/8*3);
    ctx.lineTo(w/2+ws, h/8*3);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w/2-ws, h/4*3);
    ctx.lineTo(w/2+ws, h/4*3);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w/2-ws, h/8*5);
    ctx.lineTo(w/2+ws, h/8*5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w/2, 0);
    ctx.lineTo(w/2-ws, hs);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w/2, 0);
    ctx.lineTo(w/2+ws, hs);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w, h/2);
    ctx.lineTo(w-ws, h/2-hs);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w, h/2);
    ctx.lineTo(w-ws, h/2+hs);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(w/2, h/2, w/4, -0.5 * Math.PI, 1 * Math.PI, true);
    ctx.lineTo(w/2, h/4*3);
    ctx.lineTo(w/4*3, h/4*3);
    ctx.lineTo(w/4*3, h/2);
    ctx.lineTo(w/2, h/2);
    ctx.lineTo(w/2, h/4);
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fill();

    if (r == null){   
        ctx.textAlign = "center";
        ctx.font = w/20+"px Terminus";
        ctx.fillText("-R", w/4, h/2+hs*3);
        ctx.fillText("-R/2", w/8*3, h/2+hs*3);
        ctx.fillText("R", w/4*3, h/2+hs*3);
        ctx.fillText("R/2", w/8*5, h/2+hs*3);
        ctx.textAlign = "left";
        ctx.fillText("R", w/2+hs*2, h/4+hs/2);
        ctx.fillText("R/2", w/2+hs*2, h/8*3+hs/2);
        ctx.fillText("-R", w/2+hs*2, h/4*3+hs/2);
        ctx.fillText("-R/2", w/2+hs*2, h/8*5+hs/2);
    }
    else {   
        ctx.font = w/20+"px Terminus";
        ctx.textAlign = "center";
        ctx.fillText(-r, w/4, h/2+hs*3);
        ctx.fillText(-r/2, w/8*3, h/2+hs*3);
        ctx.fillText(r, w/4*3, h/2+hs*3);
        ctx.fillText(r/2, w/8*5, h/2+hs*3);
        ctx.textAlign = "left";
        ctx.fillText(r, w/2+hs*2, h/4+hs/2);
        ctx.fillText(r/2, w/2+hs*2, h/8*3+hs/2);
        ctx.fillText(-r, w/2+hs*2, h/4*3+hs/2);
        ctx.fillText(-r/2, w/2+hs*2, h/8*5+hs/2);
    }
    if (x != null && y != null){
        let rmod = w/4/r;
        ctx.beginPath();
        ctx.arc(x*rmod+w/2, h/2-y*rmod, 4, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'black'; ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x*rmod+w/2, h/2-y*rmod);
        ctx.lineTo(w/2, h/2-y*rmod);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x*rmod+w/2, h/2-y*rmod);
        ctx.lineTo(x*rmod+w/2, h/2);
        ctx.stroke();
    }
}
