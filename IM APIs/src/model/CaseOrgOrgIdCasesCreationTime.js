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
 * The CaseOrgOrgIdCasesCreationTime model module.
 * @module model/CaseOrgOrgIdCasesCreationTime
 * @version 1.0.0
 */
class CaseOrgOrgIdCasesCreationTime {
    /**
     * Constructs a new <code>CaseOrgOrgIdCasesCreationTime</code>.
     * @alias module:model/CaseOrgOrgIdCasesCreationTime
     */
    constructor() { 
        
        CaseOrgOrgIdCasesCreationTime.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CaseOrgOrgIdCasesCreationTime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CaseOrgOrgIdCasesCreationTime} obj Optional instance to populate.
     * @return {module:model/CaseOrgOrgIdCasesCreationTime} The populated <code>CaseOrgOrgIdCasesCreationTime</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CaseOrgOrgIdCasesCreationTime();

            if (data.hasOwnProperty('begin')) {
                obj['begin'] = ApiClient.convertToType(data['begin'], 'Number');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} begin
 */
CaseOrgOrgIdCasesCreationTime.prototype['begin'] = undefined;

/**
 * @member {Number} end
 */
CaseOrgOrgIdCasesCreationTime.prototype['end'] = undefined;






export default CaseOrgOrgIdCasesCreationTime;
