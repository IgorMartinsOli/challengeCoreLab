const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
let expect = chai.expect;
const baseUrl = 'http://localhost:8008/vechicle';

chai.use(chaiHttp);

let vehicleTest = {
    name: "Celta",
    brand: "Fiat",
    color: "green",
    year: 2000,
    board: "NOOB001"
}

describe('vehicles test', () => {
    it('search all vehicles', (done) => {
        chai.request(baseUrl)
        .get('/')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        })
    })
})