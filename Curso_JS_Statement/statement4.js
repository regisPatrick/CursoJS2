var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var HackerTextError = function (message) {
    this.message = message;
    this.name = "HackerTextError";
};

var toHackerCase = function (text) {
    // 0 NaN "" false null undefined
    if (!text) throw new HackerTextError("Invalid text.");
    if (typeof text !== "string") throw new HackerTextError("Invalid type.");
    var hackerTextArray = [];
    var i = 0;
    while (i < text.length) {
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
        i++;
    }
    return hackerTextArray.join("");
};

try {

    console.log(toHackerCase());
} catch (e) {
    console.log("Error: " + e.message + " " + e.name);
}

try {

    console.log(toHackerCase(10));
} catch (e) {
    console.log("Error: " + e.message + " " + e.name);
}

console.log(toHackerCase(text));