const request = require("supertest");
const server = require("../server");

describe("GET /", function () {
  it("responds with status 200", function (done) {
    request(server).get("/").expect(200, done);
  });
});

describe("GET /functions", function () {
  it("responds with status 200", function (done) {
    request(server).get("/functions").expect(200, done);
  });
});

describe("GET /variables", function () {
  it("responds with status 200", function (done) {
    request(server).get("/variables").expect(200, done);
  });
});

describe("GET /html-express", function () {
  it("responds with HTML and correct message", function (done) {
    request(server)
      .get("/html-express")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);

        if (!res.text.includes("This is data from express !")) {
          return done(new Error("Expected message not found in response body"));
        }

        done();
      });
  });
});
