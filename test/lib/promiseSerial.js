export default ps => ps.reduce(
    async (acc, cur) => ([...await acc, await cur]),
    Promise.resolve([])
);