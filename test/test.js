var supertest = require('supertest');
var assert = require('assert');
var app = require('../app');


describe('simpleApp test', function () {

    it('should return 200 OK and html format on main page', function (done) {
        supertest(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('should display Coffee,Milk', function (done) {
        supertest(app)
            .get('/')
            .end(function (err, res) {
                if (err) return done(err);

                var html = res.text;
                assert.ok(html.includes('Coffee'), 'Coffee is missing');
                assert.ok(html.includes('Milk'), 'Milk is missing');
                done();
            });
    });

});