//kHai báo biến
let level = 0;
let dapAn;
let point = 1000;
let pointHint = 1000;


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
        point += 2000;
        draw();
        clear();
        pointHint *= 1.2;
        document.getElementById('level').innerHTML ='<b>' +'Level : ' + (level+1)+'</b>';
        document.getElementById('point').innerHTML ='<b>'+ 'Điểm thưởng : ' + point + '</b>';
    } else {
        document.getElementById('result').innerHTML = 'Bạn chưa trả lời chính xác';
    }
}