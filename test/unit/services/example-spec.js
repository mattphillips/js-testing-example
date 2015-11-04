describe("A suite of suites of tests, each suite is using a different set of matchers", function() {

    describe("Testing a function that uses jquery", function() {
        it("should increment numbers by 1", function() {
            var numbers = [1,2,3,4,5];
            var actual = useSomeJqueryFunctionToIncrementListOfNumbersByOne(numbers);
            expect(actual).toEqual([2,3,4,5,6]);
        });
    });

    describe("Testing setup with beforeEach", function() {
        beforeEach(function () {
           someNastyVariable = "yuck!";
        });

        it("nasty variable should equal yuck!", function() {
            expect(getTheNastyVariable()).toEqual("yuck!");
        });
    });

    describe("Testing teardown with afterEach", function() {
        afterEach(function () {
           someNastyVariable = "yuck!";
        });

        it("nasty variable should equal penguins!", function() {
            someNastyVariable = "penguins!"
            expect(getTheNastyVariable()).toEqual("penguins!");
        });

        it("nasty variable should equal yuck!", function() {
            expect(getTheNastyVariable()).toEqual("yuck!");
        });
    });

    describe("Testing if a variable or function is defined", function() {
        it("is defined", function () {
            expect(useSomeJqueryFunctionToIncrementListOfNumbersByOne).toBeDefined();
        });
    });

    describe("Testing to be and not to be (not can be used to negate any matcher)", function() {
        it("true should be true", function() {
            expect(true).toBe(true);
        });

        it("false should not be true", function() {
            expect(false).not.toBe(true);
            expect(false).toBe(false);
        });
    });

    describe("Testing equal and contain", function() {
        it("message should contain hello and equal hello world", function() {

            var message = helloWorld();
            expect(message).toEqual("Hello, World!");
            expect(message).toContain("Hello");
        });
    });

    describe("Testing less than and greater than", function() {
        it("is less than 10", function () {
            expect(5).toBeLessThan(10);
        });

        it("is greater than 10", function () {
            expect(20).toBeGreaterThan(10);
        });
    });
});
