console.clear;

const str1 = "Hello World";
console.log(str1.replaceAll('l', '~')); // He~~o Wor~d
console.log(str1.replace(/l/g,'~')); // He~~o Wor~d

const str2 = "I'm [Mike]. This is Tom's [car].";
console.log(str2.replaceAll("[", "~").replaceAll("]", "~")); // I'm ~Mike~. This is Tom's ~car~.
console.log(str2.replace(/\[/g, "~").replace(/\]/g, "~")); // I'm ~Mike~. This is Tom's ~car~.