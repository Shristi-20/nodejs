function sum(x, y, z, p) {
    if (z == undefined)
        console.log(x + y);
    else
        console.log(x + y + z + p);
}
sum(1, 1);
sum(1.1, 1.1);
sum("string", " eg");
sum(1, 2, 3, 4);
