import { createContext } from 'react';
import RPCProviderFactory from './RPCProviderFactory';
import { DriverPOC } from './types';

export default class RPC {
  RPCProviderFactory: RPCProviderFactory = new RPCProviderFactory();
  getCandidateList = () => {
    return this.RPCProviderFactory.getProvider(
      'getCandidateList'
    ).getCandidateList();
  };
  getPackages = () => {
    return this.RPCProviderFactory.getProvider('getPackages').getPackages();
  };
  getCandidateInfo = (id: number) => {
    return this.RPCProviderFactory.getProvider(
      'getCandidateInfo'
    ).getCandidateInfo(id);
  };
  enrollCandidate = (
    candidate: DriverPOC.Candidate,
    selectedPackage: DriverPOC.Package
  ) => {
    return this.RPCProviderFactory.getProvider(
      'enrollCandidate'
    ).enrollCandidate(candidate, selectedPackage);
  };
  getBeneficiariesList = () => {
    return this.RPCProviderFactory.getProvider(
      'getBeneficiariesList'
    ).getBeneficiariesList();
  };
  validateBeneficiaries = (beneficiaries: DriverPOC.Beneficiary[]) => {
    return this.RPCProviderFactory.getProvider(
      'validateBeneficiaries'
    ).validateBeneficiaries(beneficiaries);
  };
  executePayments = (beneficiaries: DriverPOC.Beneficiary[]) => {
    return this.RPCProviderFactory.getProvider(
      'executePayments'
    ).executePayments(beneficiaries);
  };
  login = (email: string, password: string) =>
    this.RPCProviderFactory.getProvider('login').login(email, password);
}

export const RPCContext = createContext(new RPC());
