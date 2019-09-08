function init() {
    document.write('A square filled with numbers so that the total of each row, each column and each main diagonal are all the same <i>(15)</i>.<br><br>');
    document.write('<form>');

    for (let i = 0; i< 4; i++) {
        for (let j = 0; j < 4; j++) {
            document.write('<input type="number" min="1" max="9" style="text-align:center; width:38px; height:38px">');
        }
        document.write('<br>');
    }

    document.write('<br><button type="button" onclick="check()" style="cursor:pointer">Check</button> ');
    document.write('<button type="reset" style="cursor:pointer">Again</button> ');
    document.write('<button type="button" onclick="solution()" style="cursor:pointer">Solution</button>');
    document.write('</form>');

    for (let i = 12; i < 16; i++) {
        document.forms[0][i].style.background = '#ddd';
        document.forms[0][i].style.fontWeight = 'bold';
        document.forms[0][i].readOnly = true;
    }

    for (let i = 3; i < 16; i += 4) {
        document.forms[0][i].style.background = '#ddd';
        document.forms[0][i].style.fontWeight = 'bold';
        document.forms[0][i].readOnly = true;
    }
}

function check() {
    let x = 0,
        y = 0,
        z = 0,
        p = 0,
        q = 0,
        r = 0,
        m = 0,
        n = 0;

    for (let i = 0; i < 3; i++) {
        x += parseInt(document.forms[0][i].value);
    }
    document.forms[0][3].value = x;

    for (let i = 4; i < 7; i++) {
        y += parseInt(document.forms[0][i].value);
    }
    document.forms[0][7].value = y;

    for (let i = 8; i < 11; i++) {
        z += parseInt(document.forms[0][i].value);
    }
    document.forms[0][11].value = z;

    for (let i = 0; i < 9; i += 4) {
        p += parseInt(document.forms[0][i].value);
    }
    document.forms[0][12].value = p;

    for (let i = 1; i < 10; i += 4) {
        q += parseInt(document.forms[0][i].value);
    }
    document.forms[0][13].value = q;

    for (let i = 2; i < 11; i += 4) {
        r += parseInt(document.forms[0][i].value);
    }
    document.forms[0][14].value = r;

    for (let i = 0; i < 11; i += 5) {
        m += parseInt(document.forms[0][i].value);
    }
    document.forms[0][15].value = m;

    for (let i = 2; i < 9; i += 3) {
        n += parseInt(document.forms[0][i].value);
    }

    if (x === y && y === z && z === 15 && p === q && q === r && r === 15 && m === n && n === 15) {
        alert('Congratulations, your solution is good!');
    }
    else {
        alert('Sorry, your solution is wrong!');
    }
}

function solution() {
    let solutions = new Map([
            [0, [8, 1, 6, 3, 5, 7, 4, 9, 2]],
            [1, [6, 1, 8, 7, 5, 3, 2, 9, 4]],
            [2, [4, 9, 2, 3, 5, 7, 8, 1, 6]],
            [3, [2, 9, 4, 7, 5, 3, 6, 1, 8]],
            [4, [8, 3, 4, 1, 5, 9, 6, 7, 2]],
            [5, [4, 3, 8, 9, 5, 1, 2, 7, 6]],
            [6, [6, 7, 2, 1, 5, 9, 8, 3, 4]],
            [7, [2, 7, 6, 9, 5, 1, 4, 3, 8]]
        ]),
        rnd = getRndInt(0, solutions.size - 1),
        array = solutions.get(rnd);

    document.forms[0][0].value = array[0];
    document.forms[0][1].value = array[1];
    document.forms[0][2].value = array[2];
    document.forms[0][4].value = array[3];
    document.forms[0][5].value = array[4];
    document.forms[0][6].value = array[5];
    document.forms[0][8].value = array[6];
    document.forms[0][9].value = array[7];
    document.forms[0][10].value = array[8];
}

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}