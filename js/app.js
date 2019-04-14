
/************************
** Line 86, Create a startgame function and it has been called as a callback function in line 86
***************/

(function () {
    var activePlayer, player, playerSign;
    const boxes = document.querySelectorAll('.box');
    const container = document.querySelector('.container');
    const x = document.querySelector('.x');
    const o = document.querySelector('.o');
    const playerBot = document.querySelectorAll('.player');
    const winner = document.querySelector('.winner'); 
    const player0 = document.querySelector('.playerName0');
    const player1 = document.querySelector('.playerName1');
    const startBtn = document.querySelector('.start');
    const details = document.querySelector('.details');

    player = [1, 2];

    const choosePlayer = function (sign) {
        
    }

    const playerNames = function() {
        let show0 = document.querySelector('.player-0');
        let show1 = document.querySelector('.player-1');

        player0.addEventListener('keyup', function(e) {
            // if(e.keyCode == 13 || e.keyCode == 9) {
                show0.innerHTML = `<p>${player0.value}</p>`;
            // }
        })

        player1.addEventListener('keyup', function(e) {
            // if(e.keyCode == 13 || e.keyCode == 9) {
                show1.innerHTML = `<p>${player1.value}</p>`;
            // }
        })
    }

    playerNames();

    const showSign = function (sign) {

        // Assigning the Characters either 'X' or 'O'
        boxes.forEach(cur => {
            if (cur.innerHTML == '') {
                cur.addEventListener('click', function () {
                    cur.innerHTML = sign;
                    cur.classList.add('disable');
                })
            }
        })
    }

    const updateUI = function () {

        // Updating the UI
        if (activePlayer === 0) {
            showSign('X');
            activePlayer = 1;
        } else
        if (activePlayer === 1) {
            showSign('O');
            activePlayer = 0;
        }
    }

    const events = function () {

        // Handling events
        boxes.forEach(cur => {
            cur.addEventListener('click', function () {
                updateUI();
            })
        })

        // Checking Winner
        container.addEventListener('click', checkWinner);

        // Choosing Player
        x.addEventListener('click', function () {
            choosePlayer('X');
        });
        o.addEventListener('click', function () {
            choosePlayer('O');
        });

        //Start the Game
        startBtn.addEventListener('click', startGame);
    }

    var val = function (no) {
        return boxes[no].innerHTML;
    }

    var va = function(no) {
        return boxes[no];
    }

    var winnerBg = function(v1, v2, v3) {
        if(val(v1) == 'O') {
            va(v1).classList.add('winner-bg');
            va(v2).classList.add('winner-bg');
            va(v3).classList.add('winner-bg');
            winner.innerHTML = `<p>${player1.value} is the winner</p>`
        } else { 
            va(v1).classList.add('winner-bgBlue');
            va(v2).classList.add('winner-bgBlue');
            va(v3).classList.add('winner-bgBlue');
            winner.innerHTML = `<p>${player0.value} is the winner</p>`
        }
    }

    const validator = function (v1, v2, v3) {
        if(val(v1) == val(v2) && val(v2) == val(v3) && val(v2) != '') {
            winnerBg(v1, v2, v3);
            container.classList.add('disable');
            winner.classList.remove('hide');
            winner.classList.add('anim');
            playerBot[0].classList.add('hide');
            playerBot[1].classList.add('hide');
            return;
        }
    }

    const checkWinner = function() {
        
        // Checking for Horizontal Values
        validator(0, 1, 2);   
        validator(3, 4, 5);   
        validator(6, 7, 8);
        
        // Checking for Vertical Values
        validator(0, 3, 6);   
        validator(1, 4, 7);   
        validator(2, 5, 8);   
        
        // Checking for Diagonal Values
        validator(0, 4, 8);   
        validator(2, 4, 6);   
    }

    const init = function () {
        activePlayer = 1;
        showSign('X');
        events();
    }

    init();

})();