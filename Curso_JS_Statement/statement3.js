var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var toHackerCase = function (text) {
    var hackerTextArray = [];
    for (var i = 0; i < text.length; i++) {
        switch (text.charAt(i)) {
            case "o":
                hackerTextArray.push(0);
                break;
            case "l":
                hackerTextArray.push(1);
                break;
            case "e":
                hackerTextArray.push(3);
                break;    
            case "a":
                hackerTextArray.push(4);
                break;
            case "s":
                hackerTextArray.push(5);
                break;
            case "t":
                hackerTextArray.push(7);
                break;
            default:
                hackerTextArray.push(text.charAt(i));
        }
    }
    return hackerTextArray.join("");
};

console.log(toHackerCase(text));