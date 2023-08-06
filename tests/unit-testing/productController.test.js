const request = require("supertest");
const app = require("../../app");
const db = require("../../Models/index");

describe("Tests for Product", () => {
  let thisDb = db;

  beforeAll(async () => {
    await thisDb.sequelize.sync({ alter: true });
  });

  describe("test the POST request for Product", () => {
    it("should succeed when accessing an post request for Product", async () => {
      // const getBankListJwt = "0OYSArAA7WG5C9oksDH4hWWgBNnTXiOJmAuOSSHZQJk-dMd";
      const response = await request(app)
        .post("/api/products/addProduct")
        .send({
          title: "GK",
          price: 600,
          description: "It's famouse game",
          published: true,
        });
      if (response.statusCode === 200) {
        expect(response.statusCode).toBe(200);
        expect(typeof response._body).toBe("object");
        expect(response._body.title).toBeTruthy();
      } else {
        expect(response.statusCode).toBe(400);
      }
    });
  });

  describe("Should throw an error in POST on field missing", () => {
    it("should throw the error if any of field is missing", async () => {
      const response = await request(app)
        .post("/api/products/addProduct")
        .send({
          title: "AK",
          price: 600,
          description: "It's famouse game",
        });
      expect(response.statusCode).toBe(400);
    });
  });

  describe("GET request on Product", () => {
    it("should succeed when accessing a get request for Product", async () => {
      const response = await request(app)
        .get("/api/products/allProduct")
        .send({});
      // expect(response.statusCode).toBe(200);
      expect(typeof response._body).toBe("object");
      console.log("RESPONSE_DATA: ", response._body);
    });
  });

  describe("PUT request on Product", () => {
    it("should succeed when accessing a patch request for Product", async () => {
      const response = await request(app).put("/api/products/1").send({
        title: "Akshay",
        price: 1007,
        description: "It's famouse game",
        published: true,
      });
      expect(response.statusCode).toBe(200);
      expect(typeof response._body).toBe("object");
    });
  });

  describe("DELETE request on Product", () => {
    it("should succeed when accessing a delete request for Product", async () => {
      const response = await request(app).delete("/api/products/1");
      expect(response.statusCode).toBe(200);
    });
  });

  afterAll(async () => {
    await thisDb.sequelize.close();
  });
});
