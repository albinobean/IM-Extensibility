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
* Enum class IncidentManagementState.
* @enum {}
* @readonly
*/
export default class IncidentManagementState {
    
        /**
         * value: "OPEN"
         * @const
         */
        "OPEN" = "OPEN";

    
        /**
         * value: "IN_PROCESS"
         * @const
         */
        "IN_PROCESS" = "IN_PROCESS";

    
        /**
         * value: "CLOSED"
         * @const
         */
        "CLOSED" = "CLOSED";

    

    /**
    * Returns a <code>IncidentManagementState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/IncidentManagementState} The enum <code>IncidentManagementState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

