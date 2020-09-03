const firstResult = (array, delegate) => {
    let result = null
    array.find(item => {
        result = delegate(item)
        return result
    })
    return result
}

const findSingle = (board, cellsInX, highlight) => {
    return firstResult(board, (cell => firstResult(cell.candidates, (candidate => {
        var hasSingle = cellsInX(cell).filter(y => y.candidates.some(z => z === candidate)).length === 1
        return hasSingle ? ({cell, candidate, highlight}) : false
    }))))
}

const highlightSingle = (board, detectResult) => {
    var highlightOptions = {
        'single': () => [detectResult.cell],
        'row': () => cellsInRow(board, detectResult.cell.row),
        'col': () => cellsInCol(board, detectResult.cell.col),
        'house': () => cellsInHouse(board, detectResult.cell.house)
    }
    var cells = highlightOptions[detectResult.highlight]()
    return cells.map(c => ({row: c.row, col: c.col, highlight: c == detectResult.cell ? 'emphasis' : 'notice'}))
}

const processSingle = (board, detectResult) => {
    return board.map(cell => {
        const clone = {...cell}
        if (clone.row === detectResult.cell.row && clone.col === detectResult.cell.col) {
            clone.value = detectResult.candidate
        }
        return clone
    })
}

const strategies = [
    {
        name: 'single candidate (house)',
        detect: (board) => findSingle(board, (cell) => cellsInHouse(board, cell.house), 'house'),
        highlight: highlightSingle,
        process: processSingle
    },
    {
        name: 'single candidate (col)',
        detect: (board) => findSingle(board, (cell) => cellsInCol(board, cell.col), 'col'),
        highlight: highlightSingle,
        process: processSingle
    },
    {
        name: 'single candidate (row)',
        detect: (board) => findSingle(board, (cell) => cellsInRow(board, cell.row), 'row'),
        highlight: highlightSingle,
        process: processSingle
    },
    {
        name: 'single candidate (cell)',
        detect: (board) => {
            var single = board.find(c => c.candidates.length === 1)
            return single ? {cell: single, candidate: single.candidates[0], highlight: 'single'} : null
        },
        highlight: highlightSingle,
        process: processSingle
    }
]

const solve = (board) => {
    return {
        board,
        next: () => nextDetectStrategy(board)
    }
}

const nextDetectStrategy = (board) => {
    const result = firstResult(strategies, (strategy) => {
        const detectResult = strategy.detect(board)
        return detectResult ? {strategy, detectResult} : null
    })
    return {
        board,
        strategy: result.strategy.name,
        detail: result.detectResult,
        highlights: result.strategy.highlight(board, result.detectResult),
        next: () => nextProcessStrategy(board, result)
    }
}

const nextProcessStrategy = (board, result) => {
    const nextBoard = eliminateCandidates(result.strategy.process(board, result.detectResult))
    return {
        board: nextBoard,
        strategy: '',
        next: () => nextDetectStrategy(nextBoard)
    }
}


const myTestBoard = newBoard([
    '53  7    ',
    '6  195   ',
    ' 98    6 ',
    '8   6   3',
    '4  8 3  1',
    '7   2   6',
    ' 6    28 ',
    '   419  5',
    '    8  79'
])

let result
const goNext = () => {
    result = result ? result.next() : solve(myTestBoard)
    console.log(result)
}