import { Model } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import { TBeneficiaryCases, TCandidates, TCitizen } from "./types";

const UserModel: ModelDefinition<TCitizen> = Model.extend({})
const BeneficiaryCaseModel: ModelDefinition<TBeneficiaryCases> = Model.extend({});
const CandidatesModel: ModelDefinition<TCandidates> = Model.extend({});

export const models = {
  user: UserModel,
  cases: BeneficiaryCaseModel,
  candidates: CandidatesModel,
}