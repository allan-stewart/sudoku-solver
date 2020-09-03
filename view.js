const createHtmlBoard = (elementId) => {
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    html = ['<table>']
    numbers.forEach(row => {
        html.push('<tr>')
        numbers.forEach(col => {
            html.push(`<td class="${toBoardKey(row, col)}"></td>`)
        })
        html.push('</tr>')
    })
    html.push('</table>')
    document.getElementById(elementId).innerHTML = html.join('\n')
}

const toBoardKey = (row, col) => `${row}.${col}`

const updateHtmlBoard = (board) => {
    board.forEach(cell => {
        const display = cell.value ? cell.value : buildCandidates(cell.candidates)
        document.getElementsByClassName(toBoardKey(cell.row, cell.col))[0].innerHTML = display
    })
}

const buildCandidates = (candidates) => {
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => candidates.includes(x) ? x : '&nbsp;')
    values.splice(6, 0, '<br/>')
    values.splice(3, 0, '<br/>')
    return `<span class="candidates">${values.join(' ')}</span>`
}

const highlight = (cell) => {
    console.log(cell)
    Array.from(document.getElementsByClassName('highlight')).forEach(x => x.classList.remove('highlight'))
    document.getElementsByClassName(toBoardKey(cell.row, cell.col))[0].classList.add('highlight')
}

const highlightCells = (highlights) => {
    Array.from(document.getElementsByClassName('highlight')).forEach(x => x.classList.remove('highlight', 'emphasis', 'notice'))
    highlights.forEach(cell => {
        document.getElementsByClassName(toBoardKey(cell.row, cell.col))[0].classList.add('highlight', cell.highlight)
    })
}