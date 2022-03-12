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
import SurveyInitOutboundMergeBindings from './SurveyInitOutboundMergeBindings';
import SurveyInitOutboundParameters from './SurveyInitOutboundParameters';

/**
 * The InlineObject5 model module.
 * @module model/InlineObject5
 * @version 1.0.0
 */
class InlineObject5 {
    /**
     * Constructs a new <code>InlineObject5</code>.
     * @alias module:model/InlineObject5
     * @param gatewayAlias {String} The alias of an outbound survey gateway.
     */
    constructor(gatewayAlias) { 
        
        InlineObject5.initialize(this, gatewayAlias);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gatewayAlias) { 
        obj['gatewayAlias'] = gatewayAlias;
    }

    /**
     * Constructs a <code>InlineObject5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject5} obj Optional instance to populate.
     * @return {module:model/InlineObject5} The populated <code>InlineObject5</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject5();

            if (data.hasOwnProperty('gatewayAlias')) {
                obj['gatewayAlias'] = ApiClient.convertToType(data['gatewayAlias'], 'String');
            }
            if (data.hasOwnProperty('callerId')) {
                obj['callerId'] = ApiClient.convertToType(data['callerId'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('secondaryPhoneNumber')) {
                obj['secondaryPhoneNumber'] = ApiClient.convertToType(data['secondaryPhoneNumber'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('mergeBindings')) {
                obj['mergeBindings'] = ApiClient.convertToType(data['mergeBindings'], [SurveyInitOutboundMergeBindings]);
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [SurveyInitOutboundParameters]);
            }
        }
        return obj;
    }


}

/**
 * The alias of an outbound survey gateway.
 * @member {String} gatewayAlias
 */
InlineObject5.prototype['gatewayAlias'] = undefined;

/**
 * Caller ID for phone campaigns. Required if there is no default configured on the campaign.
 * @member {String} callerId
 */
InlineObject5.prototype['callerId'] = undefined;

/**
 * Phone number to recieve call or SMS if gateway has phone or SMS campaign
 * @member {String} phoneNumber
 */
InlineObject5.prototype['phoneNumber'] = undefined;

/**
 * @member {String} secondaryPhoneNumber
 */
InlineObject5.prototype['secondaryPhoneNumber'] = undefined;

/**
 * Email to be used if gateway has email campaign
 * @member {String} email
 */
InlineObject5.prototype['email'] = undefined;

/**
 * Set of key values to used when generating texts (email subject, email body, sms body, etc)
 * @member {Array.<module:model/SurveyInitOutboundMergeBindings>} mergeBindings
 */
InlineObject5.prototype['mergeBindings'] = undefined;

/**
 * @member {Array.<module:model/SurveyInitOutboundParameters>} parameters
 */
InlineObject5.prototype['parameters'] = undefined;






export default InlineObject5;

