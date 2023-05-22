'use strict';

const app = require('../app');
const request = require('supertest');
const { expect } = require('chai');

describe('Testing basic functionality', () => { // mocha

    it('GET /yondu', () => { // mocha
        request(app)
            .get('/yondu?distance=1000.0&time=10.0')
            .expect('Content-type', 'application/json; charset=utf-8') // supertest
            .end((err, res) => {
                if (err) throw err;
                expect(res.status).eql(200);    // chai
                expect(res.body).to.exist;
                expect(res.body).to.have.property('distance');
                expect(res.body.distance).eql('1000.0');
                expect(res.body).to.have.property('time');
                expect(res.body.time).eql('10.0');
                expect(res.body).to.have.property('speed');
                expect(res.body.speed).eql(100);
            })
    });

    it('GET /yondu with error message', () => { // mocha
        request(app)
            .get('/yondu')
            .expect('Content-type', 'application/json; charset=utf-8') // supertest
            .end((err, res) => {
                if (err) throw err;
                expect(res.status).eql(403);    // chai
                expect(res.body).to.exist;
                expect(res.body).to.have.property('error');
                expect(res.body.error).eql('Not given parameters!');
            })
    });
});