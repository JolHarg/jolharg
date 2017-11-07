export default classes => thisclass => classes.reduce((acc, cur, idx, arr) => class extends cur {}, thisclass)
