module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: 'airbnb-base',
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
    },
};
