import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";
import { TCitizen } from "./types";

const userFactory = Factory.extend<TCitizen>({
  id() {
    return `${faker.helpers.unique(faker.random.numeric, [10])}`;
  },
  fullName() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },
  fullAddress() {
    return faker.address.streetAddress();
  },
  dateOfBirth() {
    return faker.date.birthdate();
  },
  phoneNumber() {
    return faker.phone.number('(+###) #### ####');
  },
  occupation() {
    return "Unemployed";
  },
  idCode() {
    return faker.helpers.unique(faker.random.numeric, [10]);
  },
  email() {
    return faker.internet.email(this.fullName as string, ' ');
  },
  socialCode() {
    return faker.helpers.unique(faker.random.numeric, [10]);
  }
});

export const factories = {
  user: userFactory,
};
