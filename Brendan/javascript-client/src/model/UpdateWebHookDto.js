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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.UpdateWebHookDto = factory(root.GatewaySoftwareApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateWebHookDto model module.
   * @module model/UpdateWebHookDto
   * @version v1
   */

  /**
   * Constructs a new <code>UpdateWebHookDto</code>.
   * The web hook
   * @alias module:model/UpdateWebHookDto
   * @class
   * @param domainEvents {Array.<String>} The domain events associated with this web hook
   * @param callbackUrl {String} The callback URL
   */
  var exports = function(domainEvents, callbackUrl) {
    var _this = this;

    _this['domainEvents'] = domainEvents;
    _this['callbackUrl'] = callbackUrl;
  };

  /**
   * Constructs a <code>UpdateWebHookDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateWebHookDto} obj Optional instance to populate.
   * @return {module:model/UpdateWebHookDto} The populated <code>UpdateWebHookDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('domainEvents')) {
        obj['domainEvents'] = ApiClient.convertToType(data['domainEvents'], ['String']);
      }
      if (data.hasOwnProperty('callbackUrl')) {
        obj['callbackUrl'] = ApiClient.convertToType(data['callbackUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * The domain events associated with this web hook
   * @member {Array.<String>} domainEvents
   */
  exports.prototype['domainEvents'] = undefined;
  /**
   * The callback URL
   * @member {String} callbackUrl
   */
  exports.prototype['callbackUrl'] = undefined;



  return exports;
}));

