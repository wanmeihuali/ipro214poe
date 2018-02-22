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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MediaTypeHeaderValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediaTypeHeaderValue'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.MediaTypeMapping = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.MediaTypeHeaderValue);
  }
}(this, function(ApiClient, MediaTypeHeaderValue) {
  'use strict';




  /**
   * The MediaTypeMapping model module.
   * @module model/MediaTypeMapping
   * @version v1
   */

  /**
   * Constructs a new <code>MediaTypeMapping</code>.
   * @alias module:model/MediaTypeMapping
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MediaTypeMapping</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaTypeMapping} obj Optional instance to populate.
   * @return {module:model/MediaTypeMapping} The populated <code>MediaTypeMapping</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mediaType')) {
        obj['mediaType'] = MediaTypeHeaderValue.constructFromObject(data['mediaType']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediaTypeHeaderValue} mediaType
   */
  exports.prototype['mediaType'] = undefined;



  return exports;
}));

