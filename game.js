//kHai báo biến
let level = 0;
let dapAn;

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


//----------Next----------//
function next() {
    if (dapAn === q[level].correct) {
        level++;
        draw();
        clear();
    }
}