/**
 * Gateway Software API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GatewaySoftwareApi);
  }
}(this, function(expect, GatewaySoftwareApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GatewaySoftwareApi.ZoneDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ZoneDto', function() {
    it('should create an instance of ZoneDto', function() {
      // uncomment below and update the code to test ZoneDto
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be.a(GatewaySoftwareApi.ZoneDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be();
    });

    it('should have the property setpoint (base name: "setpoint")', function() {
      // uncomment below and update the code to test the property setpoint
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be();
    });

    it('should have the property deadband (base name: "deadband")', function() {
      // uncomment below and update the code to test the property deadband
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be();
    });

    it('should have the property bias (base name: "bias")', function() {
      // uncomment below and update the code to test the property bias
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be();
    });

    it('should have the property gain (base name: "gain")', function() {
      // uncomment below and update the code to test the property gain
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be();
    });

    it('should have the property timeDelay (base name: "timeDelay")', function() {
      // uncomment below and update the code to test the property timeDelay
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be();
    });

    it('should have the property raiseDimRate (base name: "raiseDimRate")', function() {
      // uncomment below and update the code to test the property raiseDimRate
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be();
    });

    it('should have the property lowerDimRate (base name: "lowerDimRate")', function() {
      // uncomment below and update the code to test the property lowerDimRate
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new GatewaySoftwareApi.ZoneDto();
      //expect(instance).to.be();
    });

  });

}));
