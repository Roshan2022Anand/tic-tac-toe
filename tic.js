//accessing all the element from HTML
const container = document.getElementById('container');
// const box1 = document.getElementById('box1');
// const box2 = document.getElementById('box2');
// const box3 = document.getElementById('box3');
// const box4 = document.getElementById('box4');
// const box5 = document.getElementById('box5');
// const box6 = document.getElementById('box6');
// const box7 = document.getElementById('box7');
// const box8 = document.getElementById('box8');
// const box9 = document.getElementById('box9');
const allBox = container.getElementsByTagName('div');
//setting up of global array for future use
let userTurn = 0;
let countArrX = [];
let countArrO = [];
//accessing all the tic-tac-toe box element from the HTML doc using for loop 
let boxArr = [[], [], []];
let divCount = 0;
for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
        boxArr[i][j] = allBox[divCount];
        divCount++;
    }
//function to check the current user turn and display X / O
const addToArr = (row, col, index) => {
    if (userTurn === 0) {
        if (allBox[index].innerText === "") {
            allBox[index].innerText = 'X';
            checkTicOX(row, col, 0);
            userTurn = 1;
        }
    } else {
        if (allBox[index].innerText == "") {
            allBox[index].innerText = 'O';
            checkTicOX(row, col, 1);
            userTurn = 0;
        }
    }
}
//funtion to apply the user choice marking to the array
const checkTicOX = (row, col, user) => {
    if (user == 0)
        countArrX.push(String(row) + col);
    else if (user == 1)
        countArrO.push(String(row) + col);
    // console.log(countArrO, countArrX);
    //funtion to check if the any player won the match
    const checkIfWin = (arr, player) => {
        for (let i in arr)
            for (let j in arr)
                if (j != i)
                    for (let k in arr)
                        if (k != j && k != i) {
                            let one = arr[i];
                            let two = arr[j];
                            let three = arr[k];
                            if (one === '00' && two === '01' && three === '02') {
                                
                                displayCross(one, two, three);
                            } else if (one === '10' && two === '11' && three === '12') {
                                displayCross(one, two, three);
                            } else if (one === '20' && two === '21' && three === '22') {
                                displayCross(one, two, three);
                            } else if (one === '00' && two === '10' && three === '20') {
                                displayCross(one, two, three);
                            } else if (one === '01' && two === '11' && three === '21') {
                                displayCross(one, two, three);
                            } else if (one === '02' && two === '12' && three === '22') {
                                displayCross(one, two, three);
                            } else if (one === '00' && two === '11' && three === '22') {
                                displayCross(one, two, three);
                            } else if (one === '20' && two === '11' && three === '02') {
                                displayCross(one, two, three);
                            } 
                        }
        
    }
    checkIfWin(countArrO, 'O');
    checkIfWin(countArrX, 'x');
}
//funtion to cross mark all the box with win condition
const displayCross = (one, two, three) => {
    let indexArr = [one, two, three];
    for (let i of indexArr) {
       boxArr[i.split('')[0]][i.split('')[1]].innerText="win";
    }
}
