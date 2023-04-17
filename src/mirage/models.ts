import { Model } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import { TCitizen, TTask } from "./types";

const UserModel: ModelDefinition<TCitizen> = Model.extend({});
const TasksModel: ModelDefinition<TTask> = Model.extend({});

export const models = {
  user: UserModel,
  task: TasksModel,
};
