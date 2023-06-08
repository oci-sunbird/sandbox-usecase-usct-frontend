export default class RPC {
  private readonly apiEndpoint: string;
  constructor({ apiEndpoint = import.meta.env.VITE_API_ENDPOINT as string }) {
    this.apiEndpoint = apiEndpoint;
  }
  serializeLocalStorage(key: string, data: unknown) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  deserializeLocalStorage(key: string) {
    const rpc = localStorage.getItem(key);
    if (!rpc) {
      throw Error(`Nothing available in localStorage at ${key}`);
    }
    return JSON.parse(rpc);
  }
  async getCandidates() {
    const request = await fetch(`${this.apiEndpoint}/users`);
    const response = await request.json();
    return response;
  }
  async getCandidate(id: string) {
    const request = await fetch(`${this.apiEndpoint}/user/${id}`);
    const response = await request.json();
    return response;
  }
  async getRegisteredPrograms(id: string) {
    // fetch registered programs
    return {
      key: "value",
    };
  }
  async getPaymentInformation(id: string) {
    // fetch payment information
    return {
      key: "value",
    };
  }
  async updatePaymentInformation(id: string, paymentInformation: any) {
    // update payment information
  }
  async getCandidateInfo(id: string) {
    const promises = await Promise.all([this.getCandidate(id), this.getPaymentInformation(id), this.getRegisteredPrograms(id)]);
    return { information: promises[0], payment: promises[1], programs: promises[2] };
  }
}
