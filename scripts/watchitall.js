const records = document.getElementById("rectable");
if (localStorage.getItem("table") == null) localStorage.setItem("table", records.innerHTML);
function datagrab(vx, vy, vr) {
    fetch('./scripts/blep.php?rbX=' + vx + '&txtY=' + vy + '&cbR=' + vr).then(
        resp => { return resp.text(); }).then( text => {
        const values = text.split('+');
        console.log("okay so " + values);
        let row = records.insertRow(1);
        let x = row.insertCell(0); x.innerHTML = values[0];
        let y = row.insertCell(1); y.innerHTML = values[1];
        let r = row.insertCell(2); r.innerHTML = values[2];
        let hit = row.insertCell(3); hit.innerHTML = values[3];
        let time = row.insertCell(4); time.innerHTML = values[4];
        let date = row.insertCell(5); date.innerHTML = values[5];
        var temp = document.getElementById("rectable").innerHTML;
        var count = (temp.match(/<tr>/g) || []).length;
        if (count == 12){
            let tr = -1, sltr = -1;
            for (i = temp.length-4; i >= 0; i--){
                if (tr == -1 && temp[i] + temp[i+1] + temp[i+2] + temp[i+3] == "<tr>") tr = i;
                if (sltr == -1 && temp[i-4] + temp[i-3] + temp[i-2] + temp[i-1] + temp[i] == "</tr>") sltr = i+1;
                if (tr != -1 && sltr != -1) break;
            }
            let remov = temp.substring(tr, sltr);
            document.getElementById("rectable").innerHTML = temp.replace(remov, "");
        }
        localStorage.setItem("table", document.getElementById("rectable").innerHTML);
    });
}
document.getElementById("rectable").innerHTML = localStorage.getItem("table");
