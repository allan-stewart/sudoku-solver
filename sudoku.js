const newBoard = (initialValues) => {
    const board = [];
    initialValues.forEach((line, row) => {
        line.split('').forEach((char, col) => {
            const cell = {row, col, house: positionToHouse(row, col), value: null, candidates: [1, 2, 3, 4, 5, 6, 7, 8, 9], initial: false}
            if (char !== ' ') {
                cell.value = parseInt(char, 10)
                cell.initial = true,
                cell.candidates = []
            }
            board.push(cell)
        })
    })
    return eliminateCandidates(board)
}

const positionToHouse = (row, col) => {
    let house = 0;
    if (col > 2) house++
    if (col > 5) house++
    if (row > 2) house += 3
    if (row > 5) house += 3
    return house;
}

const eliminateCandidates = (board) => {
    return board.map(cell => {
        const clone = {...cell}
        clone.candidates = cell.value ? [] : cell.candidates.filter(x => { // bug where a cell w/ value wasn't clearing the candidates!
            return !cellsInHouse(board, cell.house).some(y => y.value == x) &&
                !cellsInRow(board, cell.row).some(y => y.value == x) &&
                !cellsInCol(board, cell.col).some(y => y.value == x)
        })
        return clone
    })
}

const cellsInHouse = (board, house) => {
    return board.filter(x => x.house === house);
}

const cellsInRow = (board, row) => {
    return board.filter(x => x.row === row);
}

const cellsInCol = (board, col) => {
    return board.filter(x => x.col === col);
}

const cellAtPosition = (row, col) => {
    return board.filter(x => x.row === row && x.col === col);
}