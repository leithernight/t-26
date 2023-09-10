//1
let t1_1 = document.querySelector('.t1_1');
let t1_2 = document.querySelector('.t1_2');
let b1 = document.querySelector('.b1');
let answer1 = document.querySelector('.answer1');

b1.onclick = () => {
    let sum = 0;
    for (let i = +t1_1.value; i <= +t1_2.value; i++) {
        sum += i;
    }
    answer1.innerHTML = sum;
}

//2
let t2 = [document.querySelector('.t2_1'), document.querySelector('.t2_2'), document.querySelector('.t2_3'),document.querySelector('.t2_4'), document.querySelector('.t2_5'), document.querySelector('.t2_6'), document.querySelector('.t2_7'), document.querySelector('.t2_8'), document.querySelector('.t2_9'), document.querySelector('.t2_10')];
let b2 = document.querySelector('.b2');
let answer2 = document.querySelector('.answer2');

b2.onclick = () => {
    let odd = 0, notOdd = 0, zero = 0, pos = 0, neg = 0;
    for (let i = 0; i < 10; i++) {
        if (t2[i].value > 0) {
            pos += 1;
        }
        else if (t2[i].value < 0) {
            neg += 1;
        }
        else {
            zero += 1;
        }

        if ((t2[i].value % 2) == 0) {
            odd += 1;
        }
        else {
            notOdd += 1;
        }
    }
    answer2.innerHTML = 'Положительных: ' + pos + ', отрицательных: ' + neg + ', нулей: ' + zero + ', четных: ' + odd + ', нечетных: ' + notOdd;
}

//3
let t3 = document.querySelector('.t3');
let b3 = document.querySelector('.b3');
let answer3 = document.querySelector('.answer3');

b3.onclick = () => {
    answer3.innerHTML = '';
    for (let i = 1; i <= 100; i++){
        let arr = [100];
        let num = i % t3.value;
        if (num == 0) {
            answer3.innerHTML += i + ' ';
        }
    }
}

//4
let t4 = document.querySelector('.t4');
let b4 = document.querySelector('.b4');
let answer4 = document.querySelector('.answer4');

b4.onclick = () => {
    let check = 1;
    for (let i = 2; i < t4.value; i++){
        if (t4.value % i == 0) {
            check = 0;
            break;
        }
    }
    if (check == 1) {
        answer4.innerHTML = 'Число простое';
    }
    else {
        answer4.innerHTML = 'Число не простое';
    }
}