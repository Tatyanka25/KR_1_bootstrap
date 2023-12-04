function V() {
    console.log("A, H, R, M")
    let A = parseInt(elementA.innerText);
    let H = parseInt(elementH.innerText);
    let R = parseInt(elementR.innerText);
    let M = parseInt(elementM.innerText);
    console.log(A, H, R, M)

    let pi = Math.PI

    if (A*A*A >= M) {

        if (pi*R*R*H < M){
            result = "Жидкость объема "+M+" поместится в первую емкость"
            document.getElementById("result").innerText =  result;}

        if (pi*R*R*H >= M){
            result = "Жидкость объема "+M+" поместится в обе емкости"
            document.getElementById("result").innerText =  result;}
    }
    else {

        if (pi*R*R*H < M){
            result = "Жидкость объема "+M+" не поместится ни в одну емкость"
            document.getElementById("result").innerText =  result;}

        if (pi*R*R*H >= M){
            result = "Жидкость объема "+M+" поместится во вторую емкость"
            document.getElementById("result").innerText =  result;}
    }
}

const elementA = document.getElementById("A");
const elementH = document.getElementById("H");
const elementR = document.getElementById("R");
const elementM = document.getElementById("M");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', V);