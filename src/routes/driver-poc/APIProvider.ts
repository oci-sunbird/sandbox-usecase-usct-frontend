import BaseProvider from './BaseProvider';
import { DriverPOC } from './types';

export default class APIProvider extends BaseProvider {
  async getCandidateList() {
    try {
      const req = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/api/v1/candidates`
      );
      return req.json() as Promise<DriverPOC.Candidate[]>;
    } catch (error) {
      return [];
    }
  }
  async getPackages() {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/packages`
    );
    return req.json() as Promise<DriverPOC.Package[]>;
  }
  async getCandidateInfo(id: number) {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/candidates/${id}`
    );
    return req.json() as Promise<DriverPOC.Candidate>;
  }
  async enrollCandidate(
    person: DriverPOC.Person,
    enrolledPackage: DriverPOC.Package
  ) {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/beneficiaries`,
      {
        method: 'POST',
        body: JSON.stringify({
          person,
          enrolledPackage,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return req.json() as Promise<DriverPOC.Beneficiary>;
  }
  async getBeneficiariesList() {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/beneficiaries`
    );
    return req.json() as Promise<DriverPOC.Beneficiary[]>;
  }
  async validateBeneficiaries(beneficiaries: DriverPOC.Beneficiary[]) {
    const req = await fetch(
      `${
        import.meta.env.VITE_API_ENDPOINT
      }/api/v1/payment/prepayment-validation`,
      {
        method: 'POST',
        body: JSON.stringify({
          beneficiaries,
        }),
      }
    );
    return req.json() as Promise<DriverPOC.Beneficiary[]>;
  }
  async executePayments(beneficiaries: DriverPOC.Beneficiary[]) {
    const req = await fetch(
      `${import.meta.env.VITE_API_ENDPOINT}/api/v1/payment/order-payment`,
      {
        method: 'POST',
        body: JSON.stringify(beneficiaries),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return req.text() as Promise<string>;
  }
}
