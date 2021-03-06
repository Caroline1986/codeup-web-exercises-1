// OPTION 1
// export const hello = () => console.log(`Hello World`);
// export const goodbye = () => console.log(`Goodbye`);
//
// export const myFunctions = {
//     sum: function(num1, num2) {
//         return num1 + num2;
//     },
//     difference: function(num1, num2) {
//         return num1 - num2;
//     }
// };
//
// OPTION 2
const funcs = {
    hello:  function() {
        console.log(`Hello World`)
    },
    goodbye: () => console.log(`Goodbye`),
    myFunctions: {
        sum: function(num1, num2) {
            return num1 + num2;
        },
        difference: function(num1, num2) {
            return num1 - num2;
        }
    }
};
export default {funcs};
//
