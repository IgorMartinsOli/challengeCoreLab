const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const expect = chai.expect;
const baseUrl = 'http://localhost:8008/';

chai.use(chaiHttp);

const vehicleTest = {
    name: "Celta",
    brand: "Fiat",
    color: "green",
    year: 2002,
    board: "NOOB001"
}

describe('vehicles test', () => {
    it('search all vehicles', (done) => {
        chai.request(baseUrl)
        .get('')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            done();
        })
    });
})