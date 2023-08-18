import { createContext } from 'react';
import RPCProviderFactory from './RPCProviderFactory';
import { DriverPOC } from './types';

export default class RPC {
  RPCProviderFactory: RPCProviderFactory = new RPCProviderFactory();
  getCandidateList = () =>
    this.RPCProviderFactory.getProvider('getCandidateList').getCandidateList();
  getPackages = () =>
    this.RPCProviderFactory.getProvider('getPackages').getPackages();
  getCandidateInfo = (id: number) =>
    this.RPCProviderFactory.getProvider('getCandidateInfo').getCandidateInfo(
      id
    );
  enrollCandidate = (
    candidate: DriverPOC.Candidate,
    selectedPackage: DriverPOC.Package
  ) =>
    this.RPCProviderFactory.getProvider('enrollCandidate').enrollCandidate(
      candidate,
      selectedPackage
    );
  getBeneficiariesList = () =>
    this.RPCProviderFactory.getProvider(
      'getBeneficiariesList'
    ).getBeneficiariesList();
  validateBeneficiaries = (beneficiaries: DriverPOC.Beneficiary[]) =>
    this.RPCProviderFactory.getProvider(
      'validateBeneficiaries'
    ).validateBeneficiaries(beneficiaries);
  executePayments = (beneficiaries: DriverPOC.Beneficiary[]) =>
    this.RPCProviderFactory.getProvider('executePayments').executePayments(
      beneficiaries
    );
  login = (email: string, password: string) =>
    this.RPCProviderFactory.getProvider('login').login(email, password);
  getRoles = () => this.RPCProviderFactory.getProvider('getRoles').getRoles();
  createCandidate = (candidate: DriverPOC.Candidate) => this.RPCProviderFactory.getProvider('createCandidate').createCandidate(candidate);
  updateCandidate = (candidate: DriverPOC.Candidate) => this.RPCProviderFactory.getProvider('updateCandidate').updateCandidate(candidate);
  deleteCandidate = (id: number) => this.RPCProviderFactory.getProvider('deleteCandidate').deleteCandidate(id);
}

export const RPCContext = createContext(new RPC());
