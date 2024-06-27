const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Agendamentos", () => {
  describe("GET /api/appointments", () => {
    it("Deve retornar todos os agendamentos", (done) => {
      chai
        .request(app)
        .get("/api/appointments")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        });
    });
  });
});
