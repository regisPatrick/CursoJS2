var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var toHackerCase = function (text) {
    var hackerTextArray = [];
    for (var i = 0; i < text.length; i++) {
        
        if (text.charAt(i) === "o") {
            hackerTextArray.push(0);
        } else if (text.charAt(i) === "l") {
            hackerTextArray.push(1);
        } else if (text.charAt(i) === "e") {
            hackerTextArray.push(3);
        } else if (text.charAt(i) === "a") {
            hackerTextArray.push(4);
        } else if (text.charAt(i) === "s") {
            hackerTextArray.push(5);
        } else if (text.charAt(i) === "t") {
            hackerTextArray.push(7);
        } else {
            hackerTextArray.push(text.charAt(i));
        }
    }
    return hackerTextArray.join("");
};

console.log(toHackerCase(text));