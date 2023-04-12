const { capitalizeText, createArray } = require("../index.js");
const { expect, assert } = require("chai");
const should = require("chai").should();

describe("capitalizeText", () => {
  //? test that the function takes a string  it will return a string
  it("should return a string", () => {
    expect(typeof capitalizeText("ziad")).to.be.an("string");

    assert.typeOf(capitalizeText("ziad"), "string");

    capitalizeText("ziad").should.be.a("string");
  });
  //? test that the function takes a string and return it after capitalize it
  it("should return a string after capitalize it", () => {
    expect(capitalizeText("ziad")).to.be.equal("ZIAD");

    assert.equal(capitalizeText("ziad"), "ZIAD");

    capitalizeText("ziad").should.be.equal("ZIAD");
  });
  //? test if the function takes number it will throw type error says parameter should be string
  it("should throw an error if the parameter is not a string", () => {
    expect(() => capitalizeText(123)).to.throw(TypeError, "parameter should be string");

    assert.throw(() => capitalizeText(123), TypeError, "parameter should be string");

    (() => capitalizeText(123)).should.throw(TypeError, "parameter should be string");
  });
});

describe.skip("createArray", () => {
  //? test that the return value of type array
  it("should return an array", () => {
    expect(Array.isArray(createArray(3))).to.be.true;

    assert.isArray(createArray(3));

    createArray(3).should.be.an("array");
  });
  //? test if we pass 3 it will return array of length 3 and test it's include 1
  it("should return an array of length 3 and test it's include 1", () => {
    assert.isArray(createArray(3));
    assert.lengthOf(createArray(3), 3);
    assert.include(createArray(3), 1);

    expect(createArray(3)).to.be.an("array").to.have.lengthOf(3).that.includes(1);

    createArray(3).should.be.an("array").to.have.lengthOf(3).that.includes(1);
  });
});

setTimeout(() => {
  run();
}, 5000);
