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
import UserAccountDTOLocale from './UserAccountDTOLocale';
import UserAccountDTOOrganizations from './UserAccountDTOOrganizations';

/**
 * The UserAccountDTO model module.
 * @module model/UserAccountDTO
 * @version 1.0.0
 */
class UserAccountDTO {
    /**
     * Constructs a new <code>UserAccountDTO</code>.
     * @alias module:model/UserAccountDTO
     */
    constructor() { 
        
        UserAccountDTO.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserAccountDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserAccountDTO} obj Optional instance to populate.
     * @return {module:model/UserAccountDTO} The populated <code>UserAccountDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAccountDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = UserAccountDTOLocale.constructFromObject(data['locale']);
            }
            if (data.hasOwnProperty('userRoles')) {
                obj['userRoles'] = ApiClient.convertToType(data['userRoles'], ['String']);
            }
            if (data.hasOwnProperty('organizations')) {
                obj['organizations'] = ApiClient.convertToType(data['organizations'], [UserAccountDTOOrganizations]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
UserAccountDTO.prototype['id'] = undefined;

/**
 * @member {String} firstName
 */
UserAccountDTO.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
UserAccountDTO.prototype['lastName'] = undefined;

/**
 * @member {String} email
 */
UserAccountDTO.prototype['email'] = undefined;

/**
 * @member {String} timeZone
 */
UserAccountDTO.prototype['timeZone'] = undefined;

/**
 * @member {module:model/UserAccountDTOLocale} locale
 */
UserAccountDTO.prototype['locale'] = undefined;

/**
 * @member {Array.<String>} userRoles
 */
UserAccountDTO.prototype['userRoles'] = undefined;

/**
 * @member {Array.<module:model/UserAccountDTOOrganizations>} organizations
 */
UserAccountDTO.prototype['organizations'] = undefined;






export default UserAccountDTO;
