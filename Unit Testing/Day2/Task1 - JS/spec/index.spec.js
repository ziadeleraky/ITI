const { MathUtils, obj, sayHelloWorld } = require("../index");

// test MathUtils cases
describe("test MathUtils function", () => {
  var math1;
  beforeEach(() => {
    math1 = new MathUtils();
  });

  it("test MathUtils sum", () => {
    // expect(math1.sum(2, 5)).toEqual(7);
    // expect(math1.sum(2, 5)).toBe(7);
    // expect(math1.sum(2, 5)).toEqual(jasmine.any(Number));

    // expect(math1.sum(2, 5)).toEqual(Number);
    // test return type of sum
    expect(math1.sum(2, 5)).not.toEqual(jasmine.any(String));
    // test sum with undefined
    expect(math1.sum(undefined, 5)).toEqual(NaN);
    expect(math1.sum(undefined, 5)).toEqual(jasmine.any(Number));
    // test sum with negative number
    expect(math1.sum(-2, 5)).toEqual(3);
  });

  it("test MathUtils substract", () => {
    // test substract with positive number
    expect(math1.substract(2, 5)).toEqual(-3);
    // test substract with negative number
    expect(math1.substract(-2, 5)).toEqual(-7);
  });

  it("test MathUtils multiply", () => {
    // test multiply with positive number
    expect(math1.multiply(2, 5)).toEqual(10);

    // test multiply with zero
    expect(math1.multiply(0, 5)).toEqual(0);

    // test multiply with negative number
    expect(math1.multiply(-2, 5)).toEqual(-10);
  });

  it("test MathUtils divide", () => {
    // test divide with positive number
    expect(math1.divide(6, 3)).toEqual(2);
    // test divide with zero
    expect(math1.divide(6, 0)).toEqual(Infinity);
    // test divide with negative number
    expect(math1.divide(-6, 3)).toEqual(-2);
  });
});

// test toBe and toEqual
// describe("study diff btn toEqual and toBe", () => {
//   var user = { id: 1 };
//   var a = { x: user };
//   var b = { x: user };
//   it("", () => {
//     expect(a).toEqual(b);
//     //  expect(a).toBe(b)  //? test value with ref
//   });
// });

// test spyOn
// describe("study spyOn", () => {
//   it("", () => {
//     spyOn(obj, "hello");
//     sayHelloWorld(obj);
//     expect(obj.hello).toHaveBeenCalled();
//     expect(obj.hello).toHaveBeenCalledTimes(1);
//     expect(obj.hello).toHaveBeenCalledWith(3);
//     expect(obj.hello).toHaveBeenCalledOnceWith(3);
//   });
// });

// custom matcher
// describe("create custom matcher", () => {
//   beforeEach(() => {
//     jasmine.addMatchers({
//       toBeLarge: function () {
//         return {
//           compare: function (actual) {
//             let result = {};
//             result.pass = actual > 5000;
//             result.message = "num must be > 5000";
//             return result;
//           },
//         };
//       },
//     });
//   });
//   it("", () => {
//     expect(60000).toBeLarge();
//   });
// });

// test delay
// describe("delay in jasmine ", () => {
//   beforeAll(() => {
//     jasmine.clock().install();
//   });
//   afterAll(() => {
//     jasmine.clock().uninstall();
//   });
//   it("", () => {
//     var x = 5;
//     setTimeout(() => {
//       x = 10;
//     }, 3000);
//     jasmine.clock().tick(6000);
//     expect(x).toEqual(10);
//   });
// });

// create tests
// describe("Lab", () => {});
