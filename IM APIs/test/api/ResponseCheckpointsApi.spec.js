/**
 * InMoment Public REST API
 * Welcome to the InMoment Public REST API. Access is restricted to clients of InMoment. Contact your InMoment account manager for more information or visit [https://inmoment.com/](https://inmoment.com/) to learn what InMoment can do for you.   To help you get started, application client libraries for some popular languages and frameworks have been included below. - [csharp-dotnet2](/api/documentation/client/csharp-dotnet2.zip) - [go](/api/documentation/client/go.zip) - [java](/api/documentation/client/java.zip) - [javascript](/api/documentation/client/javascript.zip) - [php](/api/documentation/client/php.zip) - [python](/api/documentation/client/python.zip) - [typescript-angular](/api/documentation/client/typescript-angular.zip) - [typescript-angularjs](/api/documentation/client/typescript-angularjs.zip) - [typescript-jquery](/api/documentation/client/typescript-jquery.zip) - [typescript-node](/api/documentation/client/typescript-node.zip)  Additionally you can use many opensource tools to generate libraries yourself using the [OpenApi 3.0 Spec](/api/documentation/openapi.json)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@inmoment.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.InMomentPublicRestApi);
  }
}(this, function(expect, InMomentPublicRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new InMomentPublicRestApi.ResponseCheckpointsApi();
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

  describe('ResponseCheckpointsApi', function() {
    describe('getInitialAllCheckpoint', function() {
      it('should call getInitialAllCheckpoint successfully', function(done) {
        //uncomment below and update the code to test getInitialAllCheckpoint
        //instance.getInitialAllCheckpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInitialCheckpoint', function() {
      it('should call getInitialCheckpoint successfully', function(done) {
        //uncomment below and update the code to test getInitialCheckpoint
        //instance.getInitialCheckpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSyncBatch', function() {
      it('should call getSyncBatch successfully', function(done) {
        //uncomment below and update the code to test getSyncBatch
        //instance.getSyncBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV2InitialCheckpoint', function() {
      it('should call getV2InitialCheckpoint successfully', function(done) {
        //uncomment below and update the code to test getV2InitialCheckpoint
        //instance.getV2InitialCheckpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV2SyncBatch', function() {
      it('should call getV2SyncBatch successfully', function(done) {
        //uncomment below and update the code to test getV2SyncBatch
        //instance.getV2SyncBatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
