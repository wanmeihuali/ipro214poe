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
    instance = new GatewaySoftwareApi.UrlHelper();
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

  describe('UrlHelper', function() {
    it('should create an instance of UrlHelper', function() {
      // uncomment below and update the code to test UrlHelper
      //var instane = new GatewaySoftwareApi.UrlHelper();
      //expect(instance).to.be.a(GatewaySoftwareApi.UrlHelper);
    });

    it('should have the property request (base name: "request")', function() {
      // uncomment below and update the code to test the property request
      //var instane = new GatewaySoftwareApi.UrlHelper();
      //expect(instance).to.be();
    });

  });

}));
