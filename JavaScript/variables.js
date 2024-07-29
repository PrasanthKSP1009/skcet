{
    console.log(a); //Hoisting
    var a = 10;
    console.log(a);
    {
        var b = 20;
        let c = 10;
        console.log(b);
        console.log(c);
    }
    console.log(b);
    const d = "abc";
    console.log(d);
    d = 10;
    console.log(d);
}