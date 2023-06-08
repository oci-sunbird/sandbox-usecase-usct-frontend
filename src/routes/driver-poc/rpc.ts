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
  async getCandidates(callback: Function) {
    const request = fetch(`${this.apiEndpoint}/users`).then(async (res) =>
      callback(await res.json())
    );
    return request;
  }
  async getCandidate(id: string, callback: Function) {
    const request = fetch(`${this.apiEndpoint}/user/${id}`).then(async (res) =>
      callback(await res.json())
    );
    return request;
  }
  async createCandidate() {}
  async getPaymentInformation() {}
  async updatePaymentInformation() {}
}
