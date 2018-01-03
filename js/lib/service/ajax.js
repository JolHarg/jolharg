export async function fetchjson(strURL) {
    const response = await fetch(strURL);
    return await response.json();
}

export async function fetchtext(strURL) {
    const response = await fetch(strURL);
    return await response.text();
}
