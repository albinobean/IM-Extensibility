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

import ApiClient from '../ApiClient';

/**
 * The PublicKasePageClosedSurveyResponse model module.
 * @module model/PublicKasePageClosedSurveyResponse
 * @version 1.0.0
 */
class PublicKasePageClosedSurveyResponse {
    /**
     * Constructs a new <code>PublicKasePageClosedSurveyResponse</code>.
     * @alias module:model/PublicKasePageClosedSurveyResponse
     */
    constructor() { 
        
        PublicKasePageClosedSurveyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PublicKasePageClosedSurveyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicKasePageClosedSurveyResponse} obj Optional instance to populate.
     * @return {module:model/PublicKasePageClosedSurveyResponse} The populated <code>PublicKasePageClosedSurveyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublicKasePageClosedSurveyResponse();

            if (data.hasOwnProperty('resolved')) {
                obj['resolved'] = ApiClient.convertToType(data['resolved'], 'Boolean');
            }
            if (data.hasOwnProperty('reasonClosedWithoutResolution')) {
                obj['reasonClosedWithoutResolution'] = ApiClient.convertToType(data['reasonClosedWithoutResolution'], 'String');
            }
            if (data.hasOwnProperty('customerContacted')) {
                obj['customerContacted'] = ApiClient.convertToType(data['customerContacted'], 'Boolean');
            }
            if (data.hasOwnProperty('reasonClosedWithoutContact')) {
                obj['reasonClosedWithoutContact'] = ApiClient.convertToType(data['reasonClosedWithoutContact'], 'String');
            }
            if (data.hasOwnProperty('customerMood')) {
                obj['customerMood'] = ApiClient.convertToType(data['customerMood'], 'Number');
            }
            if (data.hasOwnProperty('employeeMood')) {
                obj['employeeMood'] = ApiClient.convertToType(data['employeeMood'], 'Number');
            }
            if (data.hasOwnProperty('recommendations')) {
                obj['recommendations'] = ApiClient.convertToType(data['recommendations'], 'String');
            }
            if (data.hasOwnProperty('rootCause')) {
                obj['rootCause'] = ApiClient.convertToType(data['rootCause'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} resolved
 * @default false
 */
PublicKasePageClosedSurveyResponse.prototype['resolved'] = false;

/**
 * @member {String} reasonClosedWithoutResolution
 */
PublicKasePageClosedSurveyResponse.prototype['reasonClosedWithoutResolution'] = undefined;

/**
 * @member {Boolean} customerContacted
 * @default false
 */
PublicKasePageClosedSurveyResponse.prototype['customerContacted'] = false;

/**
 * @member {String} reasonClosedWithoutContact
 */
PublicKasePageClosedSurveyResponse.prototype['reasonClosedWithoutContact'] = undefined;

/**
 * @member {Number} customerMood
 */
PublicKasePageClosedSurveyResponse.prototype['customerMood'] = undefined;

/**
 * @member {Number} employeeMood
 */
PublicKasePageClosedSurveyResponse.prototype['employeeMood'] = undefined;

/**
 * @member {String} recommendations
 */
PublicKasePageClosedSurveyResponse.prototype['recommendations'] = undefined;

/**
 * @member {String} rootCause
 */
PublicKasePageClosedSurveyResponse.prototype['rootCause'] = undefined;

/**
 * @member {String} comments
 */
PublicKasePageClosedSurveyResponse.prototype['comments'] = undefined;






export default PublicKasePageClosedSurveyResponse;

