const request = require("request");

const endpoint1 = "http://localhost:3000/";
const endpoint2 = "http://localhost:3000/products";

describe("Endpoints", () => {
  beforeAll(() => {
    server = require("../app");
  });

  describe("GET /endpoint1", () => {
    it("should return status code 200", (done) => {
      request.get(endpoint1, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("GET /endpoint2", () => {
    it("should return status code 200", (done) => {
      request.get(endpoint2, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        expect(body).toEqual("Products");
        done();
      });
    });
  });
});
