const testFile = require('../testFile');

describe('Test', () => {
    it('Can debug', () => {
        testFile.setSomethingInWindow();

        expect(testFile.getSomethingFromWindow()).toEqual(true);
    });
});
