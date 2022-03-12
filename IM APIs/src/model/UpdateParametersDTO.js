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
import UpdateParametersDTOValues from './UpdateParametersDTOValues';

/**
 * The UpdateParametersDTO model module.
 * @module model/UpdateParametersDTO
 * @version 1.0.0
 */
class UpdateParametersDTO {
    /**
     * Constructs a new <code>UpdateParametersDTO</code>.
     * @alias module:model/UpdateParametersDTO
     */
    constructor() { 
        
        UpdateParametersDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateParametersDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateParametersDTO} obj Optional instance to populate.
     * @return {module:model/UpdateParametersDTO} The populated <code>UpdateParametersDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateParametersDTO();

            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [UpdateParametersDTOValues]);
            }
            if (data.hasOwnProperty('dateOfSurvey')) {
                obj['dateOfSurvey'] = ApiClient.convertToType(data['dateOfSurvey'], 'Date');
            }
            if (data.hasOwnProperty('updateScore')) {
                obj['updateScore'] = ApiClient.convertToType(data['updateScore'], 'Boolean');
            }
            if (data.hasOwnProperty('forceUpdate')) {
                obj['forceUpdate'] = ApiClient.convertToType(data['forceUpdate'], 'Boolean');
            }
            if (data.hasOwnProperty('complete')) {
                obj['complete'] = ApiClient.convertToType(data['complete'], 'Boolean');
            }
            if (data.hasOwnProperty('exclusionReason')) {
                obj['exclusionReason'] = ApiClient.convertToType(data['exclusionReason'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/UpdateParametersDTOValues>} values
 */
UpdateParametersDTO.prototype['values'] = undefined;

/**
 * Date of survey in the timezone of the location of the response. Can be in the format of either \"M/dd/yyyy h:mm:ss a\" (where a is AM or PM) or a ISO 8601 date time.
 * @member {Date} dateOfSurvey
 */
UpdateParametersDTO.prototype['dateOfSurvey'] = undefined;

/**
 * Recalculate response scores.
 * @member {Boolean} updateScore
 * @default false
 */
UpdateParametersDTO.prototype['updateScore'] = false;

/**
 * Force update of prompt answer even if the value has not changed. (Useful for triggering prompt events)
 * @member {Boolean} forceUpdate
 * @default false
 */
UpdateParametersDTO.prototype['forceUpdate'] = false;

/**
 * Describes this response as containing a complete set of data.
 * @member {Boolean} complete
 * @default true
 */
UpdateParametersDTO.prototype['complete'] = true;

/**
 * Describes if the data should be excluded for the specified reason.
 * @member {module:model/UpdateParametersDTO.ExclusionReasonEnum} exclusionReason
 * @default 'NONE'
 */
UpdateParametersDTO.prototype['exclusionReason'] = 'NONE';





/**
 * Allowed values for the <code>exclusionReason</code> property.
 * @enum {String}
 * @readonly
 */
UpdateParametersDTO['ExclusionReasonEnum'] = {

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",

    /**
     * value: "BLACKLISTED"
     * @const
     */
    "BLACKLISTED": "BLACKLISTED",

    /**
     * value: "GATEWAY_REPEAT_LIMIT_PER_RESPONDENT"
     * @const
     */
    "GATEWAY_REPEAT_LIMIT_PER_RESPONDENT": "GATEWAY_REPEAT_LIMIT_PER_RESPONDENT",

    /**
     * value: "OVERAGE"
     * @const
     */
    "OVERAGE": "OVERAGE",

    /**
     * value: "IP_REPEAT_LIMIT_PER_RESPONDENT"
     * @const
     */
    "IP_REPEAT_LIMIT_PER_RESPONDENT": "IP_REPEAT_LIMIT_PER_RESPONDENT",

    /**
     * value: "OFFENSIVE_LANGUAGE"
     * @const
     */
    "OFFENSIVE_LANGUAGE": "OFFENSIVE_LANGUAGE",

    /**
     * value: "SPEEDER"
     * @const
     */
    "SPEEDER": "SPEEDER",

    /**
     * value: "DELETED"
     * @const
     */
    "DELETED": "DELETED",

    /**
     * value: "LAG_TIME"
     * @const
     */
    "LAG_TIME": "LAG_TIME",

    /**
     * value: "INVALID_ANSWER"
     * @const
     */
    "INVALID_ANSWER": "INVALID_ANSWER",

    /**
     * value: "DIGITAL_FINGERPRINT_REPEAT_LIMIT_PER_RESPONDENT"
     * @const
     */
    "DIGITAL_FINGERPRINT_REPEAT_LIMIT_PER_RESPONDENT": "DIGITAL_FINGERPRINT_REPEAT_LIMIT_PER_RESPONDENT",

    /**
     * value: "LOYALTY_NUMBER_REPEAT_LIMIT_PER_RESPONDENT"
     * @const
     */
    "LOYALTY_NUMBER_REPEAT_LIMIT_PER_RESPONDENT": "LOYALTY_NUMBER_REPEAT_LIMIT_PER_RESPONDENT",

    /**
     * value: "FRAUD"
     * @const
     */
    "FRAUD": "FRAUD",

    /**
     * value: "PROBABILITY_THROTTLE"
     * @const
     */
    "PROBABILITY_THROTTLE": "PROBABILITY_THROTTLE",

    /**
     * value: "TIME_THROTTLE"
     * @const
     */
    "TIME_THROTTLE": "TIME_THROTTLE",

    /**
     * value: "REPEAT_LIMIT_PER_RESPONDENT"
     * @const
     */
    "REPEAT_LIMIT_PER_RESPONDENT": "REPEAT_LIMIT_PER_RESPONDENT",

    /**
     * value: "PERSONAL_IDENTIFYING_INFORMATION_LIMIT_PER_RESPONDENT"
     * @const
     */
    "PERSONAL_IDENTIFYING_INFORMATION_LIMIT_PER_RESPONDENT": "PERSONAL_IDENTIFYING_INFORMATION_LIMIT_PER_RESPONDENT",

    /**
     * value: "BLANK_TOMBSTONE_LIMIT_PER_RESPONDENT"
     * @const
     */
    "BLANK_TOMBSTONE_LIMIT_PER_RESPONDENT": "BLANK_TOMBSTONE_LIMIT_PER_RESPONDENT",

    /**
     * value: "EXCLUSION_PERIOD"
     * @const
     */
    "EXCLUSION_PERIOD": "EXCLUSION_PERIOD",

    /**
     * value: "CERT_CODE_REPEAT_LIMIT_PER_RESPONDENT"
     * @const
     */
    "CERT_CODE_REPEAT_LIMIT_PER_RESPONDENT": "CERT_CODE_REPEAT_LIMIT_PER_RESPONDENT",

    /**
     * value: "VIDEO_RESPONSE_LIMIT_PER_RESPONDENT"
     * @const
     */
    "VIDEO_RESPONSE_LIMIT_PER_RESPONDENT": "VIDEO_RESPONSE_LIMIT_PER_RESPONDENT",

    /**
     * value: "CONTACT_LIMIT_PER_RESPONDENT"
     * @const
     */
    "CONTACT_LIMIT_PER_RESPONDENT": "CONTACT_LIMIT_PER_RESPONDENT",

    /**
     * value: "REPEAT_LIMIT_PER_REQUEST"
     * @const
     */
    "REPEAT_LIMIT_PER_REQUEST": "REPEAT_LIMIT_PER_REQUEST"
};



export default UpdateParametersDTO;
