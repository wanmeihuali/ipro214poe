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
    instance = new GatewaySoftwareApi.SpacesApi();
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

  describe('SpacesApi', function() {
    describe('spacesDelete', function() {
      it('should call spacesDelete successfully', function(done) {
        //uncomment below and update the code to test spacesDelete
        //instance.spacesDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesDeleteDimmer', function() {
      it('should call spacesDeleteDimmer successfully', function(done) {
        //uncomment below and update the code to test spacesDeleteDimmer
        //instance.spacesDeleteDimmer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesDeleteLight', function() {
      it('should call spacesDeleteLight successfully', function(done) {
        //uncomment below and update the code to test spacesDeleteLight
        //instance.spacesDeleteLight(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesDeleteLightSensor', function() {
      it('should call spacesDeleteLightSensor successfully', function(done) {
        //uncomment below and update the code to test spacesDeleteLightSensor
        //instance.spacesDeleteLightSensor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesDeleteMotionSensor', function() {
      it('should call spacesDeleteMotionSensor successfully', function(done) {
        //uncomment below and update the code to test spacesDeleteMotionSensor
        //instance.spacesDeleteMotionSensor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesDeletePolicy', function() {
      it('should call spacesDeletePolicy successfully', function(done) {
        //uncomment below and update the code to test spacesDeletePolicy
        //instance.spacesDeletePolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesDeleteRelay', function() {
      it('should call spacesDeleteRelay successfully', function(done) {
        //uncomment below and update the code to test spacesDeleteRelay
        //instance.spacesDeleteRelay(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesDeleteSwitch', function() {
      it('should call spacesDeleteSwitch successfully', function(done) {
        //uncomment below and update the code to test spacesDeleteSwitch
        //instance.spacesDeleteSwitch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesDeleteTemperatureSensor', function() {
      it('should call spacesDeleteTemperatureSensor successfully', function(done) {
        //uncomment below and update the code to test spacesDeleteTemperatureSensor
        //instance.spacesDeleteTemperatureSensor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGet', function() {
      it('should call spacesGet successfully', function(done) {
        //uncomment below and update the code to test spacesGet
        //instance.spacesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetActivePolicy', function() {
      it('should call spacesGetActivePolicy successfully', function(done) {
        //uncomment below and update the code to test spacesGetActivePolicy
        //instance.spacesGetActivePolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetAllSpaceEvents', function() {
      it('should call spacesGetAllSpaceEvents successfully', function(done) {
        //uncomment below and update the code to test spacesGetAllSpaceEvents
        //instance.spacesGetAllSpaceEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetDevices', function() {
      it('should call spacesGetDevices successfully', function(done) {
        //uncomment below and update the code to test spacesGetDevices
        //instance.spacesGetDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetDimmers', function() {
      it('should call spacesGetDimmers successfully', function(done) {
        //uncomment below and update the code to test spacesGetDimmers
        //instance.spacesGetDimmers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetLightSensors', function() {
      it('should call spacesGetLightSensors successfully', function(done) {
        //uncomment below and update the code to test spacesGetLightSensors
        //instance.spacesGetLightSensors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetLights', function() {
      it('should call spacesGetLights successfully', function(done) {
        //uncomment below and update the code to test spacesGetLights
        //instance.spacesGetLights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetMotionSensors', function() {
      it('should call spacesGetMotionSensors successfully', function(done) {
        //uncomment below and update the code to test spacesGetMotionSensors
        //instance.spacesGetMotionSensors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetRelays', function() {
      it('should call spacesGetRelays successfully', function(done) {
        //uncomment below and update the code to test spacesGetRelays
        //instance.spacesGetRelays(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetSpace', function() {
      it('should call spacesGetSpace successfully', function(done) {
        //uncomment below and update the code to test spacesGetSpace
        //instance.spacesGetSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetSpaceEvents', function() {
      it('should call spacesGetSpaceEvents successfully', function(done) {
        //uncomment below and update the code to test spacesGetSpaceEvents
        //instance.spacesGetSpaceEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetSpacePolicy', function() {
      it('should call spacesGetSpacePolicy successfully', function(done) {
        //uncomment below and update the code to test spacesGetSpacePolicy
        //instance.spacesGetSpacePolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetSwitches', function() {
      it('should call spacesGetSwitches successfully', function(done) {
        //uncomment below and update the code to test spacesGetSwitches
        //instance.spacesGetSwitches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetTemperatureSensors', function() {
      it('should call spacesGetTemperatureSensors successfully', function(done) {
        //uncomment below and update the code to test spacesGetTemperatureSensors
        //instance.spacesGetTemperatureSensors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetTimer', function() {
      it('should call spacesGetTimer successfully', function(done) {
        //uncomment below and update the code to test spacesGetTimer
        //instance.spacesGetTimer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetType', function() {
      it('should call spacesGetType successfully', function(done) {
        //uncomment below and update the code to test spacesGetType
        //instance.spacesGetType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesGetZones', function() {
      it('should call spacesGetZones successfully', function(done) {
        //uncomment below and update the code to test spacesGetZones
        //instance.spacesGetZones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesLighting', function() {
      it('should call spacesLighting successfully', function(done) {
        //uncomment below and update the code to test spacesLighting
        //instance.spacesLighting(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesPost', function() {
      it('should call spacesPost successfully', function(done) {
        //uncomment below and update the code to test spacesPost
        //instance.spacesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesPostClearZoneConfig', function() {
      it('should call spacesPostClearZoneConfig successfully', function(done) {
        //uncomment below and update the code to test spacesPostClearZoneConfig
        //instance.spacesPostClearZoneConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesPostPolicy', function() {
      it('should call spacesPostPolicy successfully', function(done) {
        //uncomment below and update the code to test spacesPostPolicy
        //instance.spacesPostPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesPostSaveZoneConfig', function() {
      it('should call spacesPostSaveZoneConfig successfully', function(done) {
        //uncomment below and update the code to test spacesPostSaveZoneConfig
        //instance.spacesPostSaveZoneConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesPostSetZoneConfig', function() {
      it('should call spacesPostSetZoneConfig successfully', function(done) {
        //uncomment below and update the code to test spacesPostSetZoneConfig
        //instance.spacesPostSetZoneConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesPostZone', function() {
      it('should call spacesPostZone successfully', function(done) {
        //uncomment below and update the code to test spacesPostZone
        //instance.spacesPostZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesPut', function() {
      it('should call spacesPut successfully', function(done) {
        //uncomment below and update the code to test spacesPut
        //instance.spacesPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesPutDevices', function() {
      it('should call spacesPutDevices successfully', function(done) {
        //uncomment below and update the code to test spacesPutDevices
        //instance.spacesPutDevices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesPutPolicy', function() {
      it('should call spacesPutPolicy successfully', function(done) {
        //uncomment below and update the code to test spacesPutPolicy
        //instance.spacesPutPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesPutType', function() {
      it('should call spacesPutType successfully', function(done) {
        //uncomment below and update the code to test spacesPutType
        //instance.spacesPutType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesSynchronize', function() {
      it('should call spacesSynchronize successfully', function(done) {
        //uncomment below and update the code to test spacesSynchronize
        //instance.spacesSynchronize(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesTurnOff', function() {
      it('should call spacesTurnOff successfully', function(done) {
        //uncomment below and update the code to test spacesTurnOff
        //instance.spacesTurnOff(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spacesTurnOn', function() {
      it('should call spacesTurnOn successfully', function(done) {
        //uncomment below and update the code to test spacesTurnOn
        //instance.spacesTurnOn(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));