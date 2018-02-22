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
    instance = new GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultSpaceDto();
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

  describe('CreatedAtRouteNegotiatedContentResultSpaceDto', function() {
    it('should create an instance of CreatedAtRouteNegotiatedContentResultSpaceDto', function() {
      // uncomment below and update the code to test CreatedAtRouteNegotiatedContentResultSpaceDto
      //var instane = new GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultSpaceDto();
      //expect(instance).to.be.a(GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultSpaceDto);
    });

    it('should have the property routeName (base name: "routeName")', function() {
      // uncomment below and update the code to test the property routeName
      //var instane = new GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultSpaceDto();
      //expect(instance).to.be();
    });

    it('should have the property routeValues (base name: "routeValues")', function() {
      // uncomment below and update the code to test the property routeValues
      //var instane = new GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultSpaceDto();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultSpaceDto();
      //expect(instance).to.be();
    });

    it('should have the property urlFactory (base name: "urlFactory")', function() {
      // uncomment below and update the code to test the property urlFactory
      //var instane = new GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultSpaceDto();
      //expect(instance).to.be();
    });

    it('should have the property contentNegotiator (base name: "contentNegotiator")', function() {
      // uncomment below and update the code to test the property contentNegotiator
      //var instane = new GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultSpaceDto();
      //expect(instance).to.be();
    });

    it('should have the property request (base name: "request")', function() {
      // uncomment below and update the code to test the property request
      //var instane = new GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultSpaceDto();
      //expect(instance).to.be();
    });

    it('should have the property formatters (base name: "formatters")', function() {
      // uncomment below and update the code to test the property formatters
      //var instane = new GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultSpaceDto();
      //expect(instance).to.be();
    });

  });

}));
