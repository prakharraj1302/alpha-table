
function assign_alpha(){
    for (let i = 97; i <= 122; i++) {
        var div = document.getElementById(
            String.fromCharCode(i)
            );
        div.innerHTML = String.fromCharCode(i);
        console.log(div);
        console.log(String.fromCharCode(i));
    }
}
var list = [
    "A - Alpha",
"B - Bravo",
"C - Charlie",
"D - Delta",
"E - Echo",
"F - Foxtrot",
"G - Golf",
"H - Hotel",
"I - India",
"J - Juliet",
"K - Kilo",
"L - Lima",
"M - Mike",
"N - November",
"O - Oscar",
"P - Papa",
"Q - Quebec",
"R - Romeo",
"S - Sierra",
'T - Tango',
'U - Uniform',
"V - Victor",
"W - Whisky",
"X - X-ray",
"Y - Yankee",
"Z - Zulu",
];
function get_id(){
    document.onmouseover = function(e) {
        var div = e.target.id;
        console.log(div);
        document.getElementById(div).innerHTML = list[div.charCodeAt(0) - 97];
        // div.innerHTML = "test";
    }
    document.onmouseout =  function(e) {
        var div = e.target.id;
        console.log(div);
        document.getElementById(div).innerHTML = div;
        // div.innerHTML = "test";
    }
    
}

assign_alpha();
get_id();
