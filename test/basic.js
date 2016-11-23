var request = require('request');
var expect  = require("chai").expect;
var sinon = require('sinon');

describe("API", function() {

  describe("Ping endpoint tests", function() {

    var url = "http://localhost:3000/ping";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns has success in response body", function(done) {
      request(url, function(error, response, body) {
        expect(response.body).to.equal('Success');
        done();
      });
    });

  });


  describe("whattime endpoint tests", function() {

    var url = "http://localhost:3000/whattime";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    request("http://localhost:3005/settime?timestamp=1479873129", function(error, response, body) {
      it("returns has correct timestamp", function(done) {
        request(url, function(error, response, body) {
          expect(response.body).to.equal('1479873129');
          done();
        });
      });
    });



    //2016-10-30T16:00:00 1477861200 October 31st High noon eastern
    request("http://localhost:3005/settime?timestamp=1477861200", function(error, response, body) {
      it("returns eastern time", function(done) {
        request("http://localhost:3000/whattime?city=new_york", function(error, response, body) {
          expect(response.body).to.equal('2016-10-30T16:00:00-5:00');
          done();
        });
      });
    });

  });

});