import { Flex } from "@chakra-ui/react";
import { createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import ScenarioLayout from "../../ui/ScenarioLayout/ScenarioLayout";
import Header from "./Header";

export interface IRouteDescription {
  title: string;
  subtitle: string;
}

export enum EUserType {
  CITIZEN_SERVANT = "CITIZEN_SERVANT",
  CITIZEN = "CITIZEN",
}

export interface ISimulationState {
  progress: number;
  description: IRouteDescription;
  overlays: boolean;
  userType: EUserType | null;
  userAuthorized: boolean;
}

export interface ISimulationAction extends ISimulationState {
  type:
    | "SET_PROGRESS"
    | "SET_DESCRIPTION"
    | "SET_OVERLAYS"
    | "SET_USERTYPE"
    | "SET_ALL";
}

const initialSimulationState: ISimulationState = {
  progress: 0,
  description: {
    title: "",
    subtitle: "",
  },
  overlays: true,
  userType: null,
  userAuthorized: false,
};

const simulationReducer = (
  state: ISimulationState,
  action: ISimulationAction
) => {
  switch (action.type) {
    case "SET_ALL":
      return {
        ...state,
        progress: action.progress,
        description: {
          title: action.description.title,
          subtitle: action.description.subtitle,
        },
        userType: action.userType,
        userAuthorized: action.userAuthorized,
      };
    case "SET_PROGRESS":
      return {
        ...state,
        progress: action.progress,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: {
          title: action.description?.title,
          subtitle: action.description?.subtitle,
        },
      };
    case "SET_OVERLAYS":
      return {
        ...state,
        overlays: action.overlays,
      };
    case "SET_USERTYPE":
      return {
        ...state,
        userType: action.userType,
      };
    default:
      return state;
  }
};

export interface ISimulationContext {
  state: ISimulationState;
  dispatch: (args: ISimulationAction) => void;
}

export const SimulationContext = createContext<ISimulationContext>({
  state: initialSimulationState,
  dispatch: () => {},
});

export default function USCT() {
  const [state, dispatch] = useReducer(
    simulationReducer,
    initialSimulationState
  );

  return (
    <SimulationContext.Provider value={{ state, dispatch }}>
      <ScenarioLayout view="mobile">
        <Flex direction="column" height="100%">
          <Header
            userType={state.userType}
            userAuthorized={state.userAuthorized}
          />
          <Flex
            paddingRight="60px"
            paddingLeft="60px"
            paddingBottom="80px"
            flexGrow="1"
          >
            <Outlet />
          </Flex>
        </Flex>
      </ScenarioLayout>
    </SimulationContext.Provider>
  );
}
