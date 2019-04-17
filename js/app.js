(function () {
    var activePlayer, tie, sign_0, sign_1;
    const boxes = document.querySelectorAll('.box');
    const container = document.querySelector('.container');
    const x = document.querySelector('.x');
    const o = document.querySelector('.o');
    const playerBot = document.querySelectorAll('.player');
    const winner = document.querySelector('.winner');
    const player0 = document.querySelector('.playerName0');
    const player1 = document.querySelector('.playerName1');
    const startBtn = document.querySelector('.start');
    const restartBtn = document.querySelector('.restart');
    const details = document.querySelector('.details');
    const uppCont = document.querySelector('.upp_cont');
    const cursor = document.querySelector('.cursor');
    const dispplayer0 = document.querySelector('.player-0');
    const dispplayer1 = document.querySelector('.player-1');

    var Data = {
        player1: {
            name: null,
            sign: null,
            color: null
        },
        player2: {
            name: null,
            sign: null,
            color: null
        }
    }

    const getSign = function () {
        uppCont.addEventListener('click', function (e) {
            if (e.target == x) {
                Data.player1.sign = `<p style="color: #2797A7;">X</p>`;
                Data.player2.sign = `<p style="color: #ff5e4c;">O</p>`;
                Data.player1.color = '#2797A7';
                Data.player2.color = '#ff5e4c';
                o.classList.remove('left');
                x.classList.remove('right');
                player0.classList.add('active');
                player0.classList.remove('unactive');
                player1.classList.remove('active');
                player1.classList.add('unactive');

                dispplayer0.classList.add('active');
                dispplayer0.classList.remove('unactive');
                dispplayer1.classList.remove('active');
                dispplayer1.classList.add('unactive');
            } else
            if (e.target == o) {
                Data.player2.sign = `<p style="color: #2797A7;">X</p>`;
                Data.player1.sign = `<p style="color: #ff5e4c;">O</p>`;
                Data.player1.color = '#2797A7';
                Data.player2.color = '#ff5e4c';
                o.classList.add('left');
                x.classList.add('right');
                player0.classList.remove('active');
                player0.classList.add('unactive');
                player1.classList.add('active');
                player1.classList.remove('unactive');

                dispplayer0.classList.remove('active');
                dispplayer0.classList.add('unactive');
                dispplayer1.classList.add('active');
                dispplayer1.classList.remove('unactive');
            }
        });
    }


    const playerNames = function () {
        let show0 = document.querySelector('.player-0');
        let show1 = document.querySelector('.player-1');

        player0.addEventListener('keyup', function (e) {
            show0.innerHTML = `<p>${player0.value}</p>`;
        })

        show0.innerHTML = `<p>${player0.value}</p>`;

        show1.innerHTML = `<p>${player1.value}</p>`;

        Data.player1.name = player0.value;
        Data.player2.name = player1.value;
    }

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
            showSign(Data.player2.sign);
            activePlayer = 1;
        } else
        if (activePlayer === 1) {
            showSign(Data.player1.sign);
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

        //Start the Game
        startBtn.addEventListener('click', startGame);

        // Restart the Game
        restartBtn.addEventListener('click', restartGame);
    }


    const startGame = function () {
        resetBoxes();

        // Toggling Classes
        uppCont.classList.toggle('showStart');
        player0.classList.toggle('toLeft');
        player1.classList.toggle('toRight');
        // console.log(color);

        // Restart Button
        restartBtn.classList.add('trans_hide');

        // Cursor Effects
        cursor.classList.toggle('trans_hide');
        uppCont.classList.toggle('curs_none');

        if (uppCont.classList.contains('showStart')) {
            startBtn.textContent = 'End Game';
        } else {
            startBtn.textContent = 'Start Game';

            player0.value = '';
            player1.value = '';
        }

        activePlayer = 0;
        // var thisData = updatePlayerData();
        getSign();
        playerNames();

        showSign(Data.player1.sign);
    }

    const restartGame = function () {
        resetBoxes();
        activePlayer = 0;
        getSign();
        playerNames();

        showSign(Data.player1.sign);

        // Restart Button
        restartBtn.classList.add('trans_hide');
    }

    var val = function (no) {
        return boxes[no].innerHTML;
    }

    var va = function (no) {
        return boxes[no];
    }

    var winnerBg = function (v1, v2, v3) {
        va(v1).classList.add('winner-bg');
        va(v2).classList.add('winner-bg');
        va(v3).classList.add('winner-bg');

        if (val(v1) == Data.player1.sign) {
            winner.innerHTML = `<p>${player0.value} is the winner</p>`;
        } else {
            winner.innerHTML = `<p>${player1.value} is the winner</p>`;
        }
    }

    const displayResult = function () {
        container.classList.add('disable');
        winner.classList.remove('hide');
        winner.classList.add('anim');
        playerBot[0].classList.add('hide');
        playerBot[1].classList.add('hide');

        // Restart Button
        restartBtn.classList.remove('trans_hide');
    }

    const validator = function (v1, v2, v3) {
        if (val(v1) == val(v2) && val(v2) == val(v3) && val(v2) != '') {
            winnerBg(v1, v2, v3);
            displayResult();
            tie = false;
        } else {
            tie = true;
        }
    }

    const checkWinner = function () {

        // Checking for tie
        if (tie && val(0) != '' && val(1) != '' && val(2) != '' && val(3) != '' && val(4) != '' && val(5) != '' && val(6) != '' && val(7) != '' && val(8) != '') {
            displayResult();
            winner.innerHTML = `<p>Its Draw!</p>`;
            console.log('its tie');
        }

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

    const resetBoxes = function () {
        boxes.forEach(cur => {
            cur.textContent = '';
            cur.classList.remove('disable');
            container.classList.remove('disable');

            // Showing the Active Player Names
            playerBot[0].classList.remove('hide');
            playerBot[1].classList.remove('hide');

            // Hiding the Winner Text and Classes
            winner.classList.add('hide');
            cur.classList.remove('winner-bg');
        })
    }

    const init = function () {
        // alert('Scoring and Tournament Feature will be available soon');
        events();
        startGame();
    }

    init();

})();