const request = require("supertest");
const server = require("../app");

test("GET /", () => {
  request(server)
    .get("/")
    .expect(200);
});

test("GET /functions", () => {
  request(server)
    .get("/functions")
    .expect(200);
});

test("GET /variables", () => {
  request(server)
    .get("/variables")
    .expect(200);
});

test("GET /html-express", async () => {
  const response = await request(server)
    .get("/html-express")
    .expect(200);
    // eslint-disable-next-line no-undef
  expect(response.text).toContain("This is data from express !");
});
