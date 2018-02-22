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
    define(['ApiClient', 'model/CreateWebHookDto', 'model/ListDtoString', 'model/ListDtoWebHookDto', 'model/UpdateWebHookDto', 'model/WebHookDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateWebHookDto'), require('../model/ListDtoString'), require('../model/ListDtoWebHookDto'), require('../model/UpdateWebHookDto'), require('../model/WebHookDto'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.WebHooksApi = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.CreateWebHookDto, root.GatewaySoftwareApi.ListDtoString, root.GatewaySoftwareApi.ListDtoWebHookDto, root.GatewaySoftwareApi.UpdateWebHookDto, root.GatewaySoftwareApi.WebHookDto);
  }
}(this, function(ApiClient, CreateWebHookDto, ListDtoString, ListDtoWebHookDto, UpdateWebHookDto, WebHookDto) {
  'use strict';

  /**
   * WebHooks service.
   * @module api/WebHooksApi
   * @version v1
   */

  /**
   * Constructs a new WebHooksApi. 
   * @alias module:api/WebHooksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the webHooksDelete operation.
     * @callback module:api/WebHooksApi~webHooksDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregisters a web hook
     * @param {Number} applicationKeyId the ID of the application key
     * @param {Number} webHookId the ID of the web hook
     * @param {module:api/WebHooksApi~webHooksDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.webHooksDelete = function(applicationKeyId, webHookId, callback) {
      var postBody = null;

      // verify the required parameter 'applicationKeyId' is set
      if (applicationKeyId === undefined || applicationKeyId === null) {
        throw new Error("Missing the required parameter 'applicationKeyId' when calling webHooksDelete");
      }

      // verify the required parameter 'webHookId' is set
      if (webHookId === undefined || webHookId === null) {
        throw new Error("Missing the required parameter 'webHookId' when calling webHooksDelete");
      }


      var pathParams = {
        'applicationKeyId': applicationKeyId,
        'webHookId': webHookId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/applicationkeys/{applicationKeyId}/webhooks/{webHookId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webHooksGetAll operation.
     * @callback module:api/WebHooksApi~webHooksGetAllCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDtoWebHookDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of all web hooks in the system
     * @param {Number} applicationKeyId the ID of the application key
     * @param {module:api/WebHooksApi~webHooksGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDtoWebHookDto}
     */
    this.webHooksGetAll = function(applicationKeyId, callback) {
      var postBody = null;

      // verify the required parameter 'applicationKeyId' is set
      if (applicationKeyId === undefined || applicationKeyId === null) {
        throw new Error("Missing the required parameter 'applicationKeyId' when calling webHooksGetAll");
      }


      var pathParams = {
        'applicationKeyId': applicationKeyId
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
      var returnType = ListDtoWebHookDto;

      return this.apiClient.callApi(
        '/applicationkeys/{applicationKeyId}/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webHooksGetById operation.
     * @callback module:api/WebHooksApi~webHooksGetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHookDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a web hook
     * @param {Number} applicationKeyId the ID of the application key
     * @param {Number} webHookId the ID of the web hook
     * @param {module:api/WebHooksApi~webHooksGetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebHookDto}
     */
    this.webHooksGetById = function(applicationKeyId, webHookId, callback) {
      var postBody = null;

      // verify the required parameter 'applicationKeyId' is set
      if (applicationKeyId === undefined || applicationKeyId === null) {
        throw new Error("Missing the required parameter 'applicationKeyId' when calling webHooksGetById");
      }

      // verify the required parameter 'webHookId' is set
      if (webHookId === undefined || webHookId === null) {
        throw new Error("Missing the required parameter 'webHookId' when calling webHooksGetById");
      }


      var pathParams = {
        'applicationKeyId': applicationKeyId,
        'webHookId': webHookId
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
      var returnType = WebHookDto;

      return this.apiClient.callApi(
        '/applicationkeys/{applicationKeyId}/webhooks/{webHookId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webHooksRegister operation.
     * @callback module:api/WebHooksApi~webHooksRegisterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registers a web hook
     * @param {Number} applicationKeyId the ID of the application key
     * @param {module:model/CreateWebHookDto} webHook the web hook to register
     * @param {module:api/WebHooksApi~webHooksRegisterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.webHooksRegister = function(applicationKeyId, webHook, callback) {
      var postBody = webHook;

      // verify the required parameter 'applicationKeyId' is set
      if (applicationKeyId === undefined || applicationKeyId === null) {
        throw new Error("Missing the required parameter 'applicationKeyId' when calling webHooksRegister");
      }

      // verify the required parameter 'webHook' is set
      if (webHook === undefined || webHook === null) {
        throw new Error("Missing the required parameter 'webHook' when calling webHooksRegister");
      }


      var pathParams = {
        'applicationKeyId': applicationKeyId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/applicationkeys/{applicationKeyId}/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webHooksSupportedEvents operation.
     * @callback module:api/WebHooksApi~webHooksSupportedEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListDtoString} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of supported web hook events
     * @param {module:api/WebHooksApi~webHooksSupportedEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListDtoString}
     */
    this.webHooksSupportedEvents = function(callback) {
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
      var returnType = ListDtoString;

      return this.apiClient.callApi(
        '/webhooks/supported-events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the webHooksUpdate operation.
     * @callback module:api/WebHooksApi~webHooksUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a web hook
     * @param {Number} applicationKeyId the ID of the application key
     * @param {Number} webHookId the ID of the web hook
     * @param {module:model/UpdateWebHookDto} webHook a web hook containing the new values
     * @param {module:api/WebHooksApi~webHooksUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.webHooksUpdate = function(applicationKeyId, webHookId, webHook, callback) {
      var postBody = webHook;

      // verify the required parameter 'applicationKeyId' is set
      if (applicationKeyId === undefined || applicationKeyId === null) {
        throw new Error("Missing the required parameter 'applicationKeyId' when calling webHooksUpdate");
      }

      // verify the required parameter 'webHookId' is set
      if (webHookId === undefined || webHookId === null) {
        throw new Error("Missing the required parameter 'webHookId' when calling webHooksUpdate");
      }

      // verify the required parameter 'webHook' is set
      if (webHook === undefined || webHook === null) {
        throw new Error("Missing the required parameter 'webHook' when calling webHooksUpdate");
      }


      var pathParams = {
        'applicationKeyId': applicationKeyId,
        'webHookId': webHookId
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
        '/applicationkeys/{applicationKeyId}/webhooks/{webHookId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));