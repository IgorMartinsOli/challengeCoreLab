let chai = require('chai');
let chaiHttp = require('chai-http');
const chaiThings = require('chai-things');
var expect = chai.expect;
var app = require('.././index')

chai.use(chaiHttp);

var vehicleTest = {
    name: "test",
    brand: "testt",
    color: "test white",
    year: 2010,
    board: "NOOB004"
}

describe('vehicle route test', () => {
    it('GET /aaa "Not found route"', () => {
        chai.request(app)
        .get('/aaa')
        .end((err, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.have.property('error');
        })
    }),
    it('GET /vehicles' , () => {
        chai.request(app)
        .get('/vehicles')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
        })
    }),
    it('POST /vehicles/new', () => {
        chai.request(app)
        .post('/vehicles/new')
        .send(vehicleTest)
        .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.an('object');
        })
    })
})