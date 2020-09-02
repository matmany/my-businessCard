let v = 1;
let interval = [];
function main(){
    // let codigo1 = ["int main(){",""];
    let btn = $('#my-btn');
    $(document).ready(function(){
        $('.sidenav').sidenav();
      });
    
    const codPlace = $("#codigo");
    let codigo1 = `int main(){#print('Hey dude');`
    let html =  generateHTML(codigo1);
    codPlace.append(html);
    let index = 1;

    btn.click(function(){
        $('#card-fundo').addClass('dis-none');
        $('#my-nav-div').removeClass('dis-none');
        $('#resume').removeClass('dis-none');
    });

   // window.setInterval(lines[index].UpdateRandomChar.bind(lines[index]), time);
   interval = window.setInterval(showCode2,100,index);

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