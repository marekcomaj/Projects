'use strict';

const app = require('../app');
const request = require('supertest');
const { expect } = require('chai');

describe('Testing basic functionality', () => { // mocha

    it('GET /groot', () => { // mocha
        request(app)
            .get('/groot?message=test')
            .expect('Content-type', 'application/json; charset=utf-8') // supertest
            .end((err, res) => {
                if (err) throw err;
                expect(res.status).eql(200);    // chai
                expect(res.body).to.exist;
                expect(res.body).to.have.property('recieved');
                expect(res.body.recieved).eql('test');
                expect(res.body).to.have.property('translated');
                expect(res.body.translated).eql('I am Groot!');
            })
    });

    it('GET /groot with error message', () => { // mocha
        request(app)
            .get('/groot?message=')
            .expect('Content-type', 'application/json; charset=utf-8') // supertest
            .end((err, res) => {
                if (err) throw err;
                expect(res.status).eql(403);    // chai
                expect(res.body).to.exist;
                expect(res.body).to.have.property('error');
                expect(res.body.error).eql('I am Groot!');
            })
    });
});
//    //"test": "echo \"Error: no test specified\" && exit 1"