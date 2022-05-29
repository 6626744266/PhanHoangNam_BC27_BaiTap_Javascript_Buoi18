var number = []
var number2 = []


function display(array) {
    baiTap1(array)
    baiTap2(array)
    baiTap3(array)
    baiTap4(array)
    baiTap5(array)
    baiTap8(array)
    baiTap10(array)
    var divResult = document.getElementById("arraySpan")
    divResult.style.display = "inline";
    divResult.innerHTML = `${array}`

}
function addNumber() {
    var numberAdd = +document.getElementById("getNumber").value;
    number.push(numberAdd)
    display(number)

    var divResult = document.getElementById("arraySpan")
    divResult.style.display = "inline";
    divResult.innerHTML = `${number}`

}

function removeNumber() {
    number.pop()
    display(number)


}
function baiTap1(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i]) && array[i] > 0) {
            total += array[i];
        }

    }
    var divResult = document.getElementById("ketQua1");
    divResult.innerHTML = `Tổng số nguyên dương: ${total}`;
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
    if (array.length === 0) {
        var divResult = document.getElementById("ketQua3");
        divResult.innerHTML = `Số nhỏ nhất:`;
        return;
    }
    else {
        for (i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i]
            }
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
    if (array.length === 0) {
        var divResult = document.getElementById("ketQua5");
        divResult.innerHTML = `Số chẵn cuối cùng:`;
        return;
    } else {

        for (i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                lastEvenNumber = array[i]
            }
        }
    }
    var divResult = document.getElementById("ketQua5");
    divResult.innerHTML = `Số chẵn cuối cùng: ${lastEvenNumber}`;
}


function baiTap6() {
    var temp = 0
    var i = +document.getElementById("getFirstPosition").value
    var n = +document.getElementById("getSecondPosition").value

    temp = number[i]
    number[i] = number[n]
    number[n] = temp

    var divResult = document.getElementById("ketQua6")
    divResult.innerHTML = ` Mảng sau khi đổi: ${number}`
    display(number)

}

function baiTap7() {
    number.sort(compare)
    var divResult = document.getElementById("ketQua7")
    divResult.innerHTML = ` Mảng sau khi sắp xếp: ${number}`
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
    divResult.innerHTML = `Số nguyên tố đầu tiên: ${primeArray}`;
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
        divResult.innerHTML = `Số dương > Số âm `
    }
    else if (negative > positive) {
        var divResult = document.getElementById("ketQua10")
        divResult.innerHTML = `Số âm > Số dương`
    }
    else {
        var divResult = document.getElementById("ketQua10")
        divResult.innerHTML = `Số âm = Số dương `
    }
}