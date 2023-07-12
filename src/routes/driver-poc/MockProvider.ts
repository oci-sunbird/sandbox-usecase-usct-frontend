import { faker } from '@faker-js/faker';
import BaseProvider from './BaseProvider';
import { DriverPOC } from './types';

const mockPackages: DriverPOC.Package[] = [
  {
    id: 1,
    name: 'Universal Basic Income (UBI)',
    description:
      'Providing a fixed cash transfer to all eligible individuals, regardless of income, for a minimum standard of living.',
  },
  {
    id: 2,
    name: 'Targeted Poverty Alleviation (TPA)',
    description:
      'Offering additional financial assistance to those living below the poverty line to alleviate poverty effectively',
  },
  {
    id: 3,
    name: 'Social Pension',
    description:
      'Ensuring economic security during retirement by providing regular cash transfers to elderly citizens.',
  },
  {
    id: 4,
    name: 'Child and Family Support (CFS)',
    description:
      'Providing financial assistance to families with children to improve child well-being and reduce child poverty.',
  },
];

const mockHouseholdDate = [
  {
    name: 'Ms Lorem Ipsum',
    personalCode: '12345678910',
    relation: 'Wife',
    dateOfBirth: '12.12.1975',
    reason: 'Data',
  },
  {
    name: 'Ms Lorem Ipsum',
    personalCode: '12345678910',
    relation: 'Wife',
    dateOfBirth: '12.12.1975',
    reason: 'Data',
  },
  {
    name: 'Ms Lorem Ipsum',
    personalCode: '12345678910',
    relation: 'Wife',
    dateOfBirth: '12.12.1975',
    reason: 'Data',
  },
  {
    name: 'Ms Lorem Ipsum',
    personalCode: '12345678910',
    relation: 'Wife',
    dateOfBirth: '12.12.1975',
    reason: 'Data',
  },
];

const mockCandidateList: DriverPOC.Candidate[] = [
  {
    id: 1,
    person: {
      id: faker.number.int(),
      foundationalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.birthdate().toString(),
      bankAccountOwnerName: faker.person.fullName(),
      financialAddress: faker.location.streetAddress(),
      iban: faker.finance.iban(),
      bankName: faker.company.name(),
      financialModality: 'Bank Account',
    },
    packages: [mockPackages[0], mockPackages[1], mockPackages[3]],
  },
  {
    id: 2,
    person: {
      id: faker.number.int(),
      foundationalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.birthdate().toString(),
      bankAccountOwnerName: faker.person.fullName(),
      financialAddress: faker.location.streetAddress(),
      iban: faker.finance.iban(),
      bankName: faker.company.name(),
      financialModality: 'Bank Account',
    },
    packages: [mockPackages[1]],
  },
  {
    id: 3,
    person: {
      id: faker.number.int(),
      foundationalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.birthdate().toString(),
      bankAccountOwnerName: faker.person.fullName(),
      financialAddress: faker.location.streetAddress(),
      iban: faker.finance.iban(),
      bankName: faker.company.name(),
      financialModality: 'Bank Account',
    },
    packages: [mockPackages[1], mockPackages[3]],
  },
  {
    id: 4,
    person: {
      id: faker.number.int(),
      foundationalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.birthdate().toString(),
      bankAccountOwnerName: faker.person.fullName(),
      financialAddress: faker.location.streetAddress(),
      iban: faker.finance.iban(),
      bankName: faker.company.name(),
      financialModality: 'Bank Account',
    },
    packages: [mockPackages[0], mockPackages[2]],
  },
  {
    id: 5,
    person: {
      id: faker.number.int(),
      foundationalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.birthdate().toString(),
      bankAccountOwnerName: faker.person.fullName(),
      financialAddress: faker.location.streetAddress(),
      iban: faker.finance.iban(),
      bankName: faker.company.name(),
      financialModality: 'Bank Account',
    },
    packages: [],
  },
];

const mockBeneficiaryList: DriverPOC.Beneficiary[] = [
  {
    id: 1,
    person: {
      id: faker.number.int(),
      foundationalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.birthdate().toString(),
      bankAccountOwnerName: faker.person.fullName(),
      financialAddress: faker.location.streetAddress(),
      iban: faker.finance.iban(),
      bankName: faker.company.name(),
      financialModality: 'Bank Account',
    },
    enrolledPackage: mockPackages[2],
    paymentStatus: 'INITIATE',
  },
  {
    id: 2,
    person: {
      id: faker.number.int(),
      foundationalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.birthdate().toString(),
      bankAccountOwnerName: faker.person.fullName(),
      financialAddress: faker.location.streetAddress(),
      iban: faker.finance.iban(),
      bankName: faker.company.name(),
      financialModality: 'Bank Account',
    },
    enrolledPackage: mockPackages[1],
    paymentStatus: 'INITIATE',
  },
  {
    id: 3,
    person: {
      id: faker.number.int(),
      foundationalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.birthdate().toString(),
      bankAccountOwnerName: faker.person.fullName(),
      financialAddress: faker.location.streetAddress(),
      iban: faker.finance.iban(),
      bankName: faker.company.name(),
      financialModality: 'Bank Account',
    },
    enrolledPackage: mockPackages[0],
    paymentStatus: 'INITIATE',
  },
  {
    id: 4,
    person: {
      id: faker.number.int(),
      foundationalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.birthdate().toString(),
      bankAccountOwnerName: faker.person.fullName(),
      financialAddress: faker.location.streetAddress(),
      iban: faker.finance.iban(),
      bankName: faker.company.name(),
      financialModality: 'Bank Account',
    },
    enrolledPackage: mockPackages[2],
    paymentStatus: 'INITIATE',
  },
  {
    id: 5,
    person: {
      id: faker.number.int(),
      foundationalId: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      dateOfBirth: faker.date.birthdate().toString(),
      bankAccountOwnerName: faker.person.fullName(),
      financialAddress: faker.location.streetAddress(),
      iban: faker.finance.iban(),
      bankName: faker.company.name(),
      financialModality: 'Bank Account',
    },
    enrolledPackage: mockPackages[3],
    paymentStatus: 'INITIATE',
  },
];

export default class MockProvider extends BaseProvider {
  candidateList = [...mockCandidateList];
  packagesList: DriverPOC.Package[] = [...mockPackages];
  beneficiaryList: DriverPOC.Beneficiary[] = [...mockBeneficiaryList];
  getCandidateList() {
    return new Promise<DriverPOC.Candidate[]>((resolve) =>
      setTimeout(() => {
        resolve(this.candidateList);
      }, 1000)
    );
  }
  getPackages() {
    return new Promise<DriverPOC.Package[]>((resolve) =>
      setTimeout(() => resolve(this.packagesList), 1000)
    );
  }
  getCandidateInfo(id: number) {
    return new Promise<DriverPOC.Candidate>((resolve, reject) => {
      setTimeout(() => {
        const candidate = this.candidateList.find(
          (candidate) => candidate.id === id
        );
        if (candidate) {
          resolve(candidate);
        } else {
          reject('No Candidate with ID');
        }
      }, 1000);
    });
  }
  enrollCandidate(
    person: DriverPOC.Person,
    enrolledPackage: DriverPOC.Package
  ) {
    const enrolledCandidate: DriverPOC.Beneficiary = {
      id: faker.number.int(),
      paymentStatus: 'INITIATE',
      person,
      enrolledPackage,
    };
    this.candidateList = [...this.candidateList].filter(
      (candidate) => candidate.person.id !== person.id
    );
    this.beneficiaryList = [...this.beneficiaryList, enrolledCandidate];
    return new Promise<DriverPOC.Beneficiary>((resolve) =>
      setTimeout(() => resolve(enrolledCandidate), 1000)
    );
  }
  getBeneficiariesList() {
    return new Promise<DriverPOC.Beneficiary[]>((resolve) =>
      setTimeout(() => resolve(this.beneficiaryList), 1000)
    );
  }
  validateBeneficiaries(beneficiaries: DriverPOC.Beneficiary[]) {
    return new Promise<DriverPOC.Beneficiary[]>((resolve) => {
      setTimeout(() => resolve(beneficiaries), 1000);
    });
  }
  executePayments() {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  }
}
