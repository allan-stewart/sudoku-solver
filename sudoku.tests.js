var expect = chai.expect;

describe('sudoku', () => {
    describe('newBoard', () => {
        it('creates an array from initial values', () => {
            const result = newBoard([
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

            var expected = [
                {row: 0, col: 0, house: 0, value: 5, candidates: [], initial: true},
                {row: 0, col: 1, house: 0, value: 3, candidates: [], initial: true},
                {row: 0, col: 2, house: 0, value: null, candidates: [1, 2, 4], initial: false},
                {row: 0, col: 3, house: 1, value: null, candidates: [2, 6], initial: false},
                {row: 0, col: 4, house: 1, value: 7, candidates: [], initial: true},
                {row: 0, col: 5, house: 1, value: null, candidates: [2, 4, 6, 8], initial: false},
                {row: 0, col: 6, house: 2, value: null, candidates: [1, 4, 8, 9], initial: false},
                {row: 0, col: 7, house: 2, value: null, candidates: [1, 2, 4, 9], initial: false},
                {row: 0, col: 8, house: 2, value: null, candidates: [2, 4, 8], initial: false},
                {row: 1, col: 0, house: 0, value: 6, candidates: [], initial: true},
                {row: 1, col: 1, house: 0, value: null, candidates: [2, 4, 7], initial: false},
                {row: 1, col: 2, house: 0, value: null, candidates: [2, 4, 7], initial: false},
                {row: 1, col: 3, house: 1, value: 1, candidates: [], initial: true},
                {row: 1, col: 4, house: 1, value: 9, candidates: [], initial: true},
                {row: 1, col: 5, house: 1, value: 5, candidates: [], initial: true},
                {row: 1, col: 6, house: 2, value: null, candidates: [3, 4, 7, 8], initial: false},
                {row: 1, col: 7, house: 2, value: null, candidates: [2, 3, 4], initial: false},
                {row: 1, col: 8, house: 2, value: null, candidates: [2, 4, 7, 8], initial: false},
                {row: 2, col: 0, house: 0, value: null, candidates: [1, 2], initial: false},
                {row: 2, col: 1, house: 0, value: 9, candidates: [], initial: true},
                {row: 2, col: 2, house: 0, value: 8, candidates: [], initial: true},
                {row: 2, col: 3, house: 1, value: null, candidates: [2, 3], initial: false},
                {row: 2, col: 4, house: 1, value: null, candidates: [3, 4], initial: false},
                {row: 2, col: 5, house: 1, value: null, candidates: [2, 4], initial: false},
                {row: 2, col: 6, house: 2, value: null, candidates: [1, 3, 4, 5, 7], initial: false},
                {row: 2, col: 7, house: 2, value: 6, candidates: [], initial: true},
                {row: 2, col: 8, house: 2, value: null, candidates: [2, 4, 7], initial: false},
                {row: 3, col: 0, house: 3, value: 8, candidates: [], initial: true},
                {row: 3, col: 1, house: 3, value: null, candidates: [1, 2, 5], initial: false},
                {row: 3, col: 2, house: 3, value: null, candidates: [1, 2, 5, 9], initial: false},
                {row: 3, col: 3, house: 4, value: null, candidates: [5, 7, 9], initial: false},
                {row: 3, col: 4, house: 4, value: 6, candidates: [], initial: true},
                {row: 3, col: 5, house: 4, value: null, candidates: [1, 4, 7], initial: false},
                {row: 3, col: 6, house: 5, value: null, candidates: [4, 5, 7, 9], initial: false},
                {row: 3, col: 7, house: 5, value: null, candidates: [2, 4, 5, 9], initial: false},
                {row: 3, col: 8, house: 5, value: 3, candidates: [], initial: true},
                {row: 4, col: 0, house: 3, value: 4, candidates: [], initial: true},
                {row: 4, col: 1, house: 3, value: null, candidates: [2, 5], initial: false},
                {row: 4, col: 2, house: 3, value: null, candidates: [2, 5, 6, 9], initial: false},
                {row: 4, col: 3, house: 4, value: 8, candidates: [], initial: true},
                {row: 4, col: 4, house: 4, value: null, candidates: [5], initial: false},
                {row: 4, col: 5, house: 4, value: 3, candidates: [], initial: true},
                {row: 4, col: 6, house: 5, value: null, candidates: [5, 7, 9], initial: false},
                {row: 4, col: 7, house: 5, value: null, candidates: [2, 5, 9], initial: false},
                {row: 4, col: 8, house: 5, value: 1, candidates: [], initial: true},
                {row: 5, col: 0, house: 3, value: 7, candidates: [], initial: true},
                {row: 5, col: 1, house: 3, value: null, candidates: [1, 5], initial: false},
                {row: 5, col: 2, house: 3, value: null, candidates: [1, 3, 5, 9], initial: false},
                {row: 5, col: 3, house: 4, value: null, candidates: [5, 9], initial: false},
                {row: 5, col: 4, house: 4, value: 2, candidates: [], initial: true},
                {row: 5, col: 5, house: 4, value: null, candidates: [1, 4], initial: false},
                {row: 5, col: 6, house: 5, value: null, candidates: [4, 5, 8, 9], initial: false},
                {row: 5, col: 7, house: 5, value: null, candidates: [4, 5, 9], initial: false},
                {row: 5, col: 8, house: 5, value: 6, candidates: [], initial: true},
                {row: 6, col: 0, house: 6, value: null, candidates: [1, 3, 9], initial: false},
                {row: 6, col: 1, house: 6, value: 6, candidates: [], initial: true},
                {row: 6, col: 2, house: 6, value: null, candidates: [1, 3, 4, 5, 7, 9], initial: false},
                {row: 6, col: 3, house: 7, value: null, candidates: [3, 5, 7], initial: false},
                {row: 6, col: 4, house: 7, value: null, candidates: [3, 5], initial: false},
                {row: 6, col: 5, house: 7, value: null, candidates: [7], initial: false},
                {row: 6, col: 6, house: 8, value: 2, candidates: [], initial: true},
                {row: 6, col: 7, house: 8, value: 8, candidates: [], initial: true},
                {row: 6, col: 8, house: 8, value: null, candidates: [4], initial: false},
                {row: 7, col: 0, house: 6, value: null, candidates: [2, 3], initial: false},
                {row: 7, col: 1, house: 6, value: null, candidates: [2, 7, 8], initial: false},
                {row: 7, col: 2, house: 6, value: null, candidates: [2, 3, 7], initial: false},
                {row: 7, col: 3, house: 7, value: 4, candidates: [], initial: true},
                {row: 7, col: 4, house: 7, value: 1, candidates: [], initial: true},
                {row: 7, col: 5, house: 7, value: 9, candidates: [], initial: true},
                {row: 7, col: 6, house: 8, value: null, candidates: [3, 6], initial: false},
                {row: 7, col: 7, house: 8, value: null, candidates: [3], initial: false},
                {row: 7, col: 8, house: 8, value: 5, candidates: [], initial: true},
                {row: 8, col: 0, house: 6, value: null, candidates: [1, 2, 3], initial: false},
                {row: 8, col: 1, house: 6, value: null, candidates: [1, 2, 4, 5], initial: false},
                {row: 8, col: 2, house: 6, value: null, candidates: [1, 2, 3, 4, 5], initial: false},
                {row: 8, col: 3, house: 7, value: null, candidates: [2, 3, 5, 6], initial: false},
                {row: 8, col: 4, house: 7, value: 8, candidates: [], initial: true},
                {row: 8, col: 5, house: 7, value: null, candidates: [2, 6], initial: false},
                {row: 8, col: 6, house: 8, value: null, candidates: [1, 3, 4, 6], initial: false},
                {row: 8, col: 7, house: 8, value: 7, candidates: [], initial: true},
                {row: 8, col: 8, house: 8, value: 9, candidates: [], initial: true}
            ];

            expected.forEach((x, i) => {
                expect(JSON.stringify(result[i])).to.equal(JSON.stringify(x))
            })
    
            expect(result).to.deep.equal(expected)
        })
    })
})