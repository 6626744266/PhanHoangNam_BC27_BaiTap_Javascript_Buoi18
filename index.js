var number = []
var number2 = []
init()
init2()
function init() {
    number = JSON.parse(localStorage.getItem("number")) || [];
}
function init2() {
    number2 = JSON.parse(localStorage.getItem("number2")) || [];
}


function display(array) {
    baiTap1(array)
    baiTap2(array)
    baiTap3(array)
    baiTap4(array)
    baiTap5(array)
    var divResult = document.getElementById("arraySpan")
    divResult.style.display = "inline";
    divResult.innerHTML = `${array}`

    baiTap8(array)
    baiTap10(array)
}
function addNumber() {
    var numberAdd = +document.getElementById("getNumber").value;
    number.push(numberAdd)
    display(number)

    var divResult = document.getElementById("arraySpan")
    divResult.style.display = "inline";
    divResult.innerHTML = `${number}`
    localStorage.setItem('number', JSON.stringify(number));

}

function removeNumber() {
    number.pop()
    display(number)
    var divResult = document.getElementById("arraySpan")
    divResult.style.display = "inline";
    divResult.innerHTML = `${number}`
    localStorage.setItem('number', JSON.stringify(number));

}
function baiTap1(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i]) && array[i] > 0) {
            total += array[i];
        }

    }
    var divResult = document.getElementById("ketQua1");
    divResult.innerHTML = total;
}

function baiTap2(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++;
        }
    }
    var divResult = document.getElementById("ketQua2");
    divResult.innerHTML = `Số dương: ${count}`;
}

function baiTap3(array) {
    var min = array[0]
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    var divResult = document.getElementById("ketQua3");
    divResult.innerHTML = `Số nhỏ nhất: ${min}`;
}

function baiTap4(array) {
    var positiveNumberArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveNumberArray.push(array[i])
        }
    }
    if (positiveNumberArray.length === 0) {
        var divResult = document.getElementById("ketQua4");
        divResult.innerHTML = `Không có số dương trong mảng`;
        return 0
    } else {
        min = positiveNumberArray[0]
        for (i = 0; i < positiveNumberArray.length; i++) {
            if (positiveNumberArray[i] < min) {
                min = positiveNumberArray[i]
            }
        }

    }
    var divResult = document.getElementById("ketQua4");
    divResult.innerHTML = `Số dương nhỏ nhất: ${min}`;
}

function baiTap5(array) {
    var lastEvenNumber = array[0]
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            lastEvenNumber = array[i]
        }
    }
    var divResult = document.getElementById("ketQua5");
    divResult.innerHTML = `Số chẵn cuối cùng ${lastEvenNumber}`;
}


function baiTap6() {
    var temp = 0
    var i = +document.getElementById("getFirstPosition").value
    var n = +document.getElementById("getSecondPosition").value

    temp = number[i]
    number[i] = number[n]
    number[n] = temp

    var divResult = document.getElementById("ketQua6")
    divResult.innerHTML = ` Mảng sau khi đổi ${number}`
    localStorage.setItem('number', JSON.stringify(number));
    display(number)

}

function baiTap7() {
    number.sort(compare)
    var divResult = document.getElementById("ketQua7")
    divResult.innerHTML = ` Mảng sau khi sắp xếp ${number}`
    localStorage.setItem('number', JSON.stringify(number));
    display(number)
}
function compare(a, b) {
    return a - b;
}

function baiTap8() {
    var primeArray = []
    for (var i = 0; i < number.length; i++) {

        if (isPrime(number[i]) === true) {
            primeArray.push(number[i])
            break;
        }
    }
    if (primeArray.length === 0) {
        var divResult = document.getElementById("ketQua8");
        divResult.innerHTML = `Không có số nguyên tố nào trong mảng`;
        return 0;
    }
    var divResult = document.getElementById("ketQua8");
    divResult.innerHTML = `Số nguyên tố đàu tiên: ${primeArray}`;
}



function isPrime(n) {
    var count = 0;
    if (n < 2) {
        count++;

    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            count++;
        }
    }
    if (count != 0) {
        return false;
    } else {
        return true;
    }
}



function addNumber2() {
    var numberAdd2 = +document.getElementById("getNumber2").value;
    number2.push(numberAdd2)

    var divResult = document.getElementById("arraySpan2")
    divResult.style.display = "inline";
    divResult.innerHTML = `${number2}`
    localStorage.setItem('number2', JSON.stringify(number2));

}

function calcInteger() {
    var count = 0;
    for (i = 0; i < number2.length; i++) {
        if (Number.isInteger(number2[i])) {
            count++
        }
    }
    var divResult = document.getElementById("ketQua9")
    divResult.innerHTML = `Số nguyên: ${count}`
}

function baiTap10(array) {
    var positive = 0;
    var negative = 0;
    for (var i = 0; i < number.length; i++) {
        if (array[i] > 0) {
            positive++
        }
        else if (array[i] < 0) {
            negative++
        }
    }
    console.log(positive, negative)
    if (positive > negative) {
        var divResult = document.getElementById("ketQua10")
        divResult.innerHTML = `Số dương > số âm `
    }
    else if (negative > positive) {
        var divResult = document.getElementById("ketQua10")
        divResult.innerHTML = `Số âm > số dương`
    }
    else {
        var divResult = document.getElementById("ketQua10")
        divResult.innerHTML = `Số âm = số dương `
    }
}