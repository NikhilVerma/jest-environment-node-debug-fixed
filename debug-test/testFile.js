module.exports = {
    setSomethingInWindow() {
        const div = document.createElement('div');
        window.something = true;
        debugger;
    },

    getSomethingFromWindow() {
        return window.something;
    }
};
