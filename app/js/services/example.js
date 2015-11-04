function helloWorld() {
    return "Hello, World!";
}

function useSomeJqueryFunctionToIncrementListOfNumbersByOne(numbers) {
    return $.map(numbers, function(v, k) {
        return v + 1;
    });
}

var someNastyVariable;

function getTheNastyVariable() {
    return someNastyVariable;
}
