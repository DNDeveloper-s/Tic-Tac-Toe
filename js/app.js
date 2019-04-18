(function () {
    var activePlayer, tie, flipTimes, flipResult;
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
    const score0 = document.querySelector('.score-1');
    const score1 = document.querySelector('.score-2');
    const coinFront = document.querySelector('.coin_front');
    const coinBack = document.querySelector('.coin_back');
    const flipBtn = document.querySelector('.flipBtn');
    const openFlip = document.querySelector('.flipOption');
    const closeFlip = document.querySelector('.close_coin');
    const coinContainer = document.querySelector('.coin');
    const player1Coin = document.querySelector('.player1Coin');
    const player2Coin = document.querySelector('.player2Coin');
    const choiceContainer = document.querySelector('.choices');
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');
    const coinWinner = document.querySelector('.coinWinner');
    const coinDetailsContainer = document.querySelector('.coin_details');
    const coinChoicesContainer = document.querySelector('.coin_choices');
    const coinWinnerContainer = document.querySelector('.coin_winner');

    var Data = {
        player1: {
            name: null,
            sign: `<p style="color: #2797A7;">X</p>`,
            color: null,
            score: 0,
            tossWinner: null,
        },
        player2: {
            name: null,
            sign: `<p style="color: #ff5e4c;">O</p>`,
            color: null,
            score: 0,
            tossWinner: null,
            choice: null
        }
    }

    const flipCoin = function () {
        flipTimes = Math.floor(Math.random() * 10 + 380) * 180;

        // console.log(flipTimes);

        var result = flipTimes / 180;

        if ((result % 2) === 0) {
            flipResult = 0;
        } else {
            flipResult = 1;
        }

        coinFront.style.transform = `translate(-50%, -50%) rotateY(${flipTimes}deg)`;
        coinBack.style.transform = `translate(-50%, -50%) rotateY(${flipTimes - 180}deg)`;

        return flipResult;
    }

    const updateWinnerUI = function() {
        coinDetailsContainer.classList.add('trans_hide');
        coinChoicesContainer.classList.add('trans_hide');
        coinFront.classList.add('trans_hide');
        coinBack.classList.add('trans_hide');
        flipBtn.classList.add('trans_hide');

        coinWinnerContainer.classList.remove('trans_hide');
    }

    const removeWinnerUI = function() {
        coinDetailsContainer.classList.remove('trans_hide');
        coinChoicesContainer.classList.remove('trans_hide');
        coinFront.classList.remove('trans_hide');
        coinBack.classList.remove('trans_hide');
        flipBtn.classList.add('trans_hide');

        coinFront.style.transform = `translate(-50%, -50%) rotateY(0deg)`;
        coinBack.style.transform = `translate(-50%, -50%) rotateY(0deg)`;

        coinWinnerContainer.classList.add('trans_hide');
    }
    
    const ChooseTossWinner = function() {

        var checkResult = flipCoin();

        setTimeout(() => {

            if(Data.player2.choice == checkResult) {
                Data.player2.tossWinner = true;
                Data.player1.tossWinner = false;

                coinWinner.textContent = Data.player2.name;
            } else {
                Data.player1.tossWinner = true;
                Data.player2.tossWinner = false;

                coinWinner.textContent = Data.player1.name;
            }
            
            updateWinnerUI();
        }, 800);
    }

    const getChoice = function() {
        choiceContainer.addEventListener('click', function(e) {
            if(e.target == front) {

                // Toggling CLasses
                front.classList.add('unactive');
                front.classList.remove('active');
                back.classList.add('active');
                back.classList.remove('unactive');

                Data.player2.choice = 0;

            } else if(e.target == back) {

                // Toggling CLasses
                back.classList.add('unactive');
                back.classList.remove('active');
                front.classList.add('active');
                front.classList.remove('unactive');

                Data.player2.choice = 1;
            }
            
            flipBtn.classList.remove('trans_hide');
        })
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

                // Player Display Colors
                dispplayer0.classList.add('active');
                dispplayer0.classList.remove('unactive');
                dispplayer1.classList.remove('active');
                dispplayer1.classList.add('unactive');

                // Scoring Colors
                score0.classList.add('active');
                score0.classList.remove('unactive');
                score1.classList.add('unactive');
                score1.classList.remove('active');

                // Coin Container Colors
                player1Coin.classList.add('active');
                player1Coin.classList.remove('unactive');
                player2Coin.classList.remove('active');
                player2Coin.classList.add('unactive');

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

                // Player Display Colors
                dispplayer0.classList.remove('active');
                dispplayer0.classList.add('unactive');
                dispplayer1.classList.add('active');
                dispplayer1.classList.remove('unactive');

                // Scoring Colors
                score0.classList.remove('active');
                score0.classList.add('unactive');
                score1.classList.remove('unactive');
                score1.classList.add('active');

                // Coin Container Colors
                player1Coin.classList.remove('active');
                player1Coin.classList.add('unactive');
                player2Coin.classList.add('active');
                player2Coin.classList.remove('unactive');
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

    const toggleCoinContainer = function () {
        playerNames();
        
        if (player0.value != '' && player1.value != '') {
            coinContainer.classList.toggle('trans_hide');
            uppCont.classList.toggle('blur');

            // Filling up the Name
            const coin1Details = document.querySelector('.coin1_content');
            const coin2Details = document.querySelector('.coin2_content');
            
            player1Coin.textContent = `${player0.value}`;
            coin1Details.textContent = ', Flip the Coin';
            
            player2Coin.textContent = `${player1.value}`;
            coin2Details.textContent = ', Make your choice';
        } else {
            validateNames();
        }
    }

    const events = function () {

        // Handling events
        boxes.forEach(cur => {
            cur.addEventListener('click', function () {
                updateUI();
            })
        })

        player0.addEventListener('focus', function () {
            player0.classList.remove('red');
        })

        player1.addEventListener('focus', function () {
            player1.classList.remove('red');
        })

        // Checking Winner
        container.addEventListener('click', checkWinner);

        //Start the Game
        startBtn.addEventListener('click', startGame);

        // Restart the Game
        restartBtn.addEventListener('click', restartGame);

        // Flipping Coin
        flipBtn.addEventListener('click', function() {
            // flipCoin();
            ChooseTossWinner();
        });

        // Toggling Coin Container
        openFlip.addEventListener('click', toggleCoinContainer);
        closeFlip.addEventListener('click', toggleCoinContainer);


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
            Data.player1.score += 1;

            // Displaying Score
            score0.innerHTML = `<p>${Data.player1.score}</p>`;
        } else if (val(v1) == Data.player2.sign) {
            winner.innerHTML = `<p>${player1.value} is the winner</p>`;
            Data.player2.score += 1;

            // Displaying Score
            score1.innerHTML = `<p>${Data.player2.score}</p>`;
        }
    }

    var resetScores = function () {

        Data.player1.score = 0;
        Data.player2.score = 0;

        score0.innerHTML = `<p></p>`;
        score1.innerHTML = `<p></p>`;
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

    const validateNames = function () {
        if (player0.value === '') {
            player0.classList.add('red');
        } else if (player1.value === '') {
            player1.classList.add('red');
        }
    }

    const getActivePlayer = function () {
        if(Data.player1.tossWinner) {
            activePlayer = 0;

            showSign(Data.player1.sign);
        } else {
            activePlayer = 1;

            showSign(Data.player2.sign);
        }
    }

    const startGame = function () {
        resetBoxes();
        resetScores();

        if (player0.value != '' && player1.value != '') {

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
        } else {
            validateNames();
        }
        removeWinnerUI();

        getActivePlayer();
        getSign();
        playerNames();
        getChoice();
    }

    const restartGame = function () {
        resetBoxes();
        getSign();
        playerNames();

        getActivePlayer();

        // Restart Button
        restartBtn.classList.add('trans_hide');
    }

    const init = function () {
        // alert('Scoring and Tournament Feature will be available soon');
        events();
        startGame();
    }

    init();

})();