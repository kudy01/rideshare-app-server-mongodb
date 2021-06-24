const assert = require("assert");
const request = require("supertest");
const { response } = require("../app");
const app = require("../app");

describe("The express app", () => {
  it("handles a get request to api", (done) => {
    request(app)
      .get("/api")
      .end((err, response) => {
        assert(response.body.hi === "there");
        done();
      });
  });
});
