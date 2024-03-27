const cats=["Milo","Otis","Garfield"];
function destructivelyAppendCat() {
    cats.push('Ralph');
}
function destructivelyPrependCat() {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const Blackcats=[...cats, 'Broom'];
    return Blackcats;
}
function prependCat() {
    const Blackcats=['Arnold', ...cats];
    return Blackcats;
}
function removeLastCat() {
    return cats.slice(0,2);
}
function removeFirstCat() {
    return cats.slice(1,3);
}


