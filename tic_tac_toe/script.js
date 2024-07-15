let board;
let currentPlayer;
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');

function init() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleCellClick, { once: true });
    });
}

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] === '') {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add('occupied');
        if (checkWin(currentPlayer)) {
            setTimeout(() => {
                alert(`${currentPlayer} wins!`);
                resetGame();
            }, 100);
        } else if (board.every(cell => cell !== '')) {
            setTimeout(() => {
                alert('It\'s a draw!');
                resetGame();
            }, 100);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === player);
    });
}

function resetGame() {
    setTimeout(init, 100);
}

resetButton.addEventListener('click', resetGame);

init();
