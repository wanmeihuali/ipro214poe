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
    define(['ApiClient', 'model/ListDtoPolicyDto', 'model/PolicyDto', 'model/UpdatePolicyDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListDtoPolicyDto'), require('../model/PolicyDto'), require('../model/UpdatePolicyDto'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.PoliciesApi = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.ListDtoPolicyDto, root.GatewaySoftwareApi.PolicyDto, root.GatewaySoftwareApi.UpdatePolicyDto);
  }
}(this, function(ApiClient, ListDtoPolicyDto, PolicyDto, UpdatePolicyDto) {
  'use strict';

  /**
   * Policies service.
   * @module api/PoliciesApi
   * @version v1
   */

  /**
   * Constructs a new PoliciesApi. 
   * @alias module:api/PoliciesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the policiesGet operation.
     * @callback module:api/PoliciesApi~policiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDtoPolicyDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets all policies in the system
     * @param {module:api/PoliciesApi~policiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDtoPolicyDto}
     */
    this.policiesGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = ListDtoPolicyDto;

      return this.apiClient.callApi(
        '/policies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the policiesGetPolicy operation.
     * @callback module:api/PoliciesApi~policiesGetPolicyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PolicyDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a policy
     * @param {Number} id the ID of the policy to be retrieved
     * @param {module:api/PoliciesApi~policiesGetPolicyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PolicyDto}
     */
    this.policiesGetPolicy = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling policiesGetPolicy");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json'];
      var returnType = PolicyDto;

      return this.apiClient.callApi(
        '/policies/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the policiesPut operation.
     * @callback module:api/PoliciesApi~policiesPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a policy
     * @param {Number} id the ID of the policy to be updated
     * @param {module:model/UpdatePolicyDto} policy the updated values for the policy
     * @param {module:api/PoliciesApi~policiesPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.policiesPut = function(id, policy, callback) {
      var postBody = policy;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling policiesPut");
      }

      // verify the required parameter 'policy' is set
      if (policy === undefined || policy === null) {
        throw new Error("Missing the required parameter 'policy' when calling policiesPut");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/policies/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
