import APIProvider from './APIProvider';
import BaseProvider from './BaseProvider';
import MockProvider from './MockProvider';

export default class RPCProviderConfig {
  providers = {
    MOCK: new MockProvider(),
    API: new APIProvider(),
  };
  map: Record<string, BaseProvider> = {
    getCandidateList: this.providers.API,
    getPackages: this.providers.API,
    getCandidateInfo: this.providers.API,
    enrollCandidate: this.providers.API,
    getBeneficiariesList: this.providers.API,
    validateBeneficiaries: this.providers.API,
    executePayments: this.providers.API,
    login: this.providers.API,
    getRoles: this.providers.API,
    createCandidate: this.providers.API,
    updateCandidate: this.providers.API,
    deleteCandidate: this.providers.API,
  };
  addProvider = (key: string, provider: BaseProvider) => {
    this.providers = { ...this.providers, [key]: provider };
  };
  getProvider = (method: string) => {
    return this.map[method];
  };
}
