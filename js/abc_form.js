function verify() {
    console.log("A, H, R, M")
    let A = parseInt(elementA.value);
    let H = parseInt(elementH.value);
    let R = parseInt(elementR.value);
    let M = parseInt(elementM.value);
    console.log(A, H, R, M)

    let pi = Math.PI

    if (A*A*A >= M) {

        if (pi*R*R*H < M){
            result = "Жидкость объема "+M+" поместится в первую емкость"
            document.getElementById("result").innerText = messageText + result;
            document.getElementsByName('result')[0].value = result;
            check = true;}


        if (pi*R*R*H >= M){
            result = "Жидкость объема "+M+" поместится в обе емкости"
            document.getElementById("result").innerText = messageText + result;
            document.getElementsByName('result')[0].value = result;
            check = false;}

    }
    else {

        if (pi*R*R*H < M){
            result = "Жидкость объема "+M+" не поместится ни в одну емкость"
            document.getElementById("result").innerText = messageText + result;
            document.getElementsByName('result')[0].value = result;
            check = false;}


        if (pi*R*R*H >= M){
            result = "Жидкость объема "+M+" поместится во вторую емкость"
            document.getElementById("result").innerText = messageText + result;
            document.getElementsByName('result')[0].value = result;
            check = true;}

    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementA = document.getElementById("A");
elementA.addEventListener('keyup', verify);

const elementH = document.getElementById("H");
elementH.addEventListener('keyup', verify);

const elementR = document.getElementById("R");
elementR.addEventListener('keyup', verify);

const elementM = document.getElementById("M");
elementM.addEventListener('input', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send)