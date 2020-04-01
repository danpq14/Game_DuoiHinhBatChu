//kHai báo biến
let level = 0;
let dapAn;
let point = 1000;
let pointHint = 1000;

//-------Level and Point---------//
function levelAndPoint() {
    switch (level) {
        case 0 :
            point = 1000;
            break;
        case 1 :
            point = 2000;
            break;
        case 2 :
            point = 4000;
            break;
        case 3 :
            point = 8000;
            break;
        case 4 :
            point = 12000;
            break;
    }
}


//----------drawQuestion---------//
function draw() {
    document.images['game'].src = q[level].diachi;
}

//Cài đặt hàm cho nút button chọn chữ
function fill(text) {
    document.getElementById('answer').value += text;
    dapAn = document.getElementById('answer').value;
    console.log(dapAn);
}
//Clear
function clear() {
    document.getElementById('answer').value = '';
    document.getElementById('result').innerHTML = '';
}


//----------Kiểm tra đáp án-----------//
function check() {
    if (dapAn === q[level].correct) {
        document.getElementById('result').innerHTML = ' Bạn đã trả lời chính xác ';
    }
    else {
        document.getElementById('result').innerHTML = 'Bạn chưa trả lời chính xác';
    }
}


//--------Hint---------//
function hint() {
    document.getElementById('result').innerHTML = q[level].hint;
    point = point - pointHint;
    document.getElementById('point').innerHTML ='<b>' + 'Điểm thưởng : ' + point + '</b>';
}


//----------Next----------//
function next() {
    if (dapAn === q[level].correct) {
        level++;
        draw();
        clear();
        levelAndPoint();
        pointHint *= 1.5;
        document.getElementById('level').innerHTML ='<b>' +'Level : ' + (level+1)+'</b>';
        document.getElementById('point').innerHTML ='<b>'+ 'Điểm thưởng : ' + point + '</b>';
    } else {
        document.getElementById('result').innerHTML = 'Bạn chưa trả lời chính xác';
    }
}