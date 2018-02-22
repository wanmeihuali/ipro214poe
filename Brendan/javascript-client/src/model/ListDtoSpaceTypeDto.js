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
    define(['ApiClient', 'model/SpaceTypeDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SpaceTypeDto'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.ListDtoSpaceTypeDto = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.SpaceTypeDto);
  }
}(this, function(ApiClient, SpaceTypeDto) {
  'use strict';




  /**
   * The ListDtoSpaceTypeDto model module.
   * @module model/ListDtoSpaceTypeDto
   * @version v1
   */

  /**
   * Constructs a new <code>ListDtoSpaceTypeDto</code>.
   * @alias module:model/ListDtoSpaceTypeDto
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ListDtoSpaceTypeDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListDtoSpaceTypeDto} obj Optional instance to populate.
   * @return {module:model/ListDtoSpaceTypeDto} The populated <code>ListDtoSpaceTypeDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ApiClient.convertToType(data['list'], [SpaceTypeDto]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SpaceTypeDto>} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));

