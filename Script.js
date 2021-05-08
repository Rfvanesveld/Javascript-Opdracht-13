// DIT IS DE WHILE LOOP

var colors = ['yellow', 'blue', 'red', 'orange'];
var i = 0
while (i < colors.length) {
    console.log(colors[i])
    i++;
}

// DIT IS DE FOR LOOP

var colors = ['yellow', 'blue', 'red', 'orange'];
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

// FOR EACH

var colors = ['yellow', 'blue', 'red', 'orange'];
colors.forEach(colorsPack)
function colorsPack(item, index, arr) {
    console.log(item)
}

// Vraag 1: 5 regels, 3 regels
// Vraag 2: 4 regels
// Vraag 3: Door het gebruik van, item, index en arra, kan je eea makkelijker lezen, de code is makkelijker leesbaar. 
// Vraag 3: De For loop is makkelijker leesbaar dan de While loop, minder regels. Met ForEach pak je ieder item makkelijker apart.

const colors = {
    color1: "yellow",
    color2: "blue",
    color3: "red",
    color4: "orange",
    color5: "green"
};
console.log(Object.keys(colors))
console.log(Object.values(colors))
console.log(Object.entries(colors))

// Antwoord: dit is itereren.