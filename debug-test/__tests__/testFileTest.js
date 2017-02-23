const testFile = require('../testFile');

describe('Test', () => {
    it('Can debug', () => {
        debugger;

        testFile.setSomethingInWindow();

        expect(testFile.getSomethingFromWindow()).toEqual(true);
    });
});
