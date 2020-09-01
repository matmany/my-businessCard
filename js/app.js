let v = 1;
function main(){
    // let codigo1 = ["int main(){",""];
    const codPlace = $("#codigo");
    let codigo1 = `int main(){#print('Hey dude');`
    let html =  generateHTML(codigo1);
    codPlace.append(html);
    let index = 1;

   // window.setInterval(lines[index].UpdateRandomChar.bind(lines[index]), time);
   window.setInterval(showCode2,100,index);

}

function generateHTML(codigo){
    html = "";
    oneElement = "";
    let index = 0;
    for (charac of codigo) {
        if(charac === '#'){
            html+=`<br> &nbsp;&nbsp;`
            continue;
        }
        index++;
        oneElement = `<i id="${index}" class="invisible">${charac}</i>`;
        html+= oneElement;
    }

    return html;
}

function showCode2(){
    $(`#${v}`).removeClass("invisible");
    v++;
}

$(main);