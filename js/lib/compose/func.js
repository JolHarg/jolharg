// This function does this with its hands.
export default funcs => func => funcs.reduce((acc, cur, idx, arr) => cur(acc), func);
