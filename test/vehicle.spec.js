let chai = require('chai');
let chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('.././index')

chai.use(chaiHttp);


describe('Teste de Veiculos', () => {
    describe('GET /vehicles', () => {
        it('testando get vehicles' , () => {
            chai.request('app')
            .get('/vehicles')
            .end((err, res) => {
                
            })
        })
    })
})