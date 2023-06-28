import BaseProvider from "./BaseProvider";
import MockProvider from "./MockProvider";

export default class RPCProviderConfig {
  providers = {
    MOCK: new MockProvider(),
  };
  map: Record<string, BaseProvider> = {
    getCandidateList: this.providers.MOCK,
    getPackages: this.providers.MOCK,
    getCandidateInfo: this.providers.MOCK,
    enrollCandidate: this.providers.MOCK,
    getBeneficiariesList: this.providers.MOCK,
    validateBeneficiaries: this.providers.MOCK,
    executePayments: this.providers.MOCK,
  };
  addProvider = (key: string, provider: BaseProvider) => {
    this.providers = { ...this.providers, [key]: provider };
  };
  getProvider = (method: string) => {
    return this.map[method];
  };
}
