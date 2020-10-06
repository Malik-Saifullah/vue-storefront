import { UserShippingGetters } from '@vue-storefront/core';

export const getUserFirstName = (user: any): string => user ? user.firstName : '';

export const getUserLastName = (user: any): string => user ? user.lastName : '';

export const getUserFullName = (user: any): string => user ? `${user.firstName} ${user.lastName}` : '';

const userGetters: UserShippingGetters<any> = {
  getFiltered: (addresses, criteria: Record<string, any>) => {
    return addresses.filter(address => {
      for (const [key, value] of Object.entries(criteria)) {
        if (address[key] !== value) {
          return false;
        }
      }
      return true;
    });
  },
  getDefault: addresses => addresses.find(address => address.isDefault),
  getTotal: addresses => addresses.length,
  getPostCode: address => address ? address.zipCode : '',
  getStreetName: address => address ? address.streetName : '',
  getCity: address => address ? address.city : '',
  getFirstName: address => address ? address.firstName : '',
  getLastName: address => address ? address.lastName : '',
  getCountry: address => address ? address.country : '',
  getStreetNumber: address => address ? address.apartment : '',
  getPhone: address => address ? address.phoneNumber : '',
  getEmail: address => address ? address.email : '',
  getProvince: address => address ? address.state : ''
};

export default userGetters;