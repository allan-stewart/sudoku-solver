var expect = chai.expect;

describe('solver', () => {
    const testBoardA = newBoard([
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

    describe('single candidate (cell)', () => {
        const strategy = strategies.find(x => x.name === 'single candidate (cell)')
        describe('detect', () => {
            it('returns the first cell where the cell has only one candidate', () => {
                const result = strategy.detect(testBoardA)
                const expected = {
                    cell: testBoardA.find(c => c.row == 4 && c.col == 4),
                    candidate: 5
                }
                expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
            })
        })
        describe('process', () => {
            it('sets the value of the single cell', () => {
                const detectResult = {
                    cell: testBoardA.find(c => c.row == 4 && c.col == 4),
                    candidate: 5
                }
                const result = strategy.process(testBoardA, detectResult)
                const expected = testBoardA.map(x => ({...x}))
                expected.find(c => c.row == 4 && c.col == 4).value = detectResult.candidate

                expect(result).to.deep.equal(expected)
            })
        })
    })

    describe('single candidate (row)', () => {
        const strategy = strategies.find(x => x.name === 'single candidate (row)')
        describe('detect', () => {
            it('returns the first cell where the row has only one candidate', () => {
                const result = strategy.detect(testBoardA)
                const expected = {
                    cell: testBoardA.find(c => c.row == 2 && c.col == 6),
                    candidate: 5
                }
                expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
            })
        })
    })

    describe('single candidate (col)', () => {
        const strategy = strategies.find(x => x.name === 'single candidate (col)')
        describe('detect', () => {
            it('returns the first cell where the column has only one candidate', () => {
                const result = strategy.detect(testBoardA)
                const expected = {
                    cell: testBoardA.find(c => c.row == 0 && c.col == 5),
                    candidate: 8
                }
                expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
            })
        })
    })

    describe('single candidate (house)', () => {
        const strategy = strategies.find(x => x.name === 'single candidate (house)')
        describe('detect', () => {
            it('returns the first cell where the house has only one candidate', () => {
                const result = strategy.detect(testBoardA)
                const expected = {
                    cell: testBoardA.find(c => c.row == 0 && c.col == 5),
                    candidate: 8
                }
                expect(JSON.stringify(result)).to.equal(JSON.stringify(expected))
            })
        })
    })

    describe('solve', () => {
        it('does something', () => {
            const result = solve(testBoardA)
            console.log(result)
        })
    })
})