let chai = require('chai');
let chaiHttp = require('chai-http');
let mocha = require('mocha');
let expect = chai.expect;
const baseUrl = 'http://localhost:8008';

chai.use(chaiHttp);

let vehicleTest = {
    name: "Celta",
    brand: "Fiat",
    color: "green",
    year: 2002,
    board: "NOOB001"
}

describe('vehicles test', () => {
    it('search all vehicles', (done) => {
        chai.request(baseUrl)
        .get('/vehicles')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        })
    });
})