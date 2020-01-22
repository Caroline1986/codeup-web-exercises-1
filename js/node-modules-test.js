const hello = () => console.log(`Hello World`);
const goodbye = () => console.log(`Goodbye`);

const myFunctions = {
    sum: function(num1, num2) {
        return num1 + num2;
    },
    difference: function(num1, num2) {
        return num1 - num2;
    }
};

module.exports = {hello, goodbye, myFunctions};