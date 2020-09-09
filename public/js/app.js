let v = 1;
let interval = [];
function main() {
    // let codigo1 = ["int main(){",""];
    let btn = $('#my-btn');
    const emailIcon = $('#my-email');
    //const myEmail = 'matmanymat@gmail.com';

    $(document).ready(function () {
        $('.sidenav').sidenav();
    });

    const codPlace = $("#codigo");
    let codigo1 = `int main(){#%%printf('Fala tu');#%%return 0;#%%}` +
        `###<?php#%%echo "<p>Olá Mundo</p>";#%%?>` +
        `###<script>#%%alert( 'Hello, world!' );#</script>` +
        `###namespace ConsoleApp1{##%%class Program{#%%%%static void Main(string[] args){#%%%%%%Console.WriteLine("Hello, world!");#%%%%%%Console.ReadLine();#%%%}#%%}#%}`;

    let html = generateHTML(codigo1);
    codPlace.append(html);
    let index = 1;

    btn.click(function () {
        $('#card-fundo').addClass('dis-none');
        $('#my-nav-div').removeClass('dis-none');
        $('#resume').removeClass('dis-none');
    });

    emailIcon.on("click",copieToClipboard);

    interval = window.setInterval(showCode2, 100, index);

}

function generateHTML(codigo) {
    html = "";
    oneElement = "";
    let index = 0;
    for (charac of codigo) {
        if (charac === '#') {
            html += `<br> &nbsp;&nbsp;`
            continue;
        } else if (charac === '%') {
            html += `&nbsp;`
            continue;
        }
        index++;
        oneElement = `<i id="${index}" class="invisible">${charac}</i>`;
        html += oneElement;
    }

    return html;
}

function showCode2() {
    $(`#${v}`).removeClass("invisible");
    v++;
    if(v>237)
        clearInterval(interval);
}

function copieToClipboard(){
    const newText = 'matmanymat@gmail.com';
    navigator.clipboard.writeText(newText).then(function(){
        // alert("email copiado " + newText);
        M.toast({html:'email copiado: ' + newText});
    }, function(){
        M.toast({html:'matmanymat@gmail.com'});
        // alert("email" + newText);
    });
}

$(main);