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
    define(['ApiClient', 'model/DashboardDeviceStatusByDeviceTypeDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DashboardDeviceStatusByDeviceTypeDto'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.ListDtoDashboardDeviceStatusByDeviceTypeDto = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.DashboardDeviceStatusByDeviceTypeDto);
  }
}(this, function(ApiClient, DashboardDeviceStatusByDeviceTypeDto) {
  'use strict';




  /**
   * The ListDtoDashboardDeviceStatusByDeviceTypeDto model module.
   * @module model/ListDtoDashboardDeviceStatusByDeviceTypeDto
   * @version v1
   */

  /**
   * Constructs a new <code>ListDtoDashboardDeviceStatusByDeviceTypeDto</code>.
   * @alias module:model/ListDtoDashboardDeviceStatusByDeviceTypeDto
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ListDtoDashboardDeviceStatusByDeviceTypeDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListDtoDashboardDeviceStatusByDeviceTypeDto} obj Optional instance to populate.
   * @return {module:model/ListDtoDashboardDeviceStatusByDeviceTypeDto} The populated <code>ListDtoDashboardDeviceStatusByDeviceTypeDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ApiClient.convertToType(data['list'], [DashboardDeviceStatusByDeviceTypeDto]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DashboardDeviceStatusByDeviceTypeDto>} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


