import { Flex } from '@chakra-ui/react';
import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ScenarioLayout from '../../ui/ScenarioLayout/ScenarioLayout';
import { ContextualHelpContextProvider } from './ContextualHelpContext';
import Header from './Header';
import { BUILDING_BLOCK } from './utils';
import { HelpOverlay } from '@ui/HelpOverlay/HelpOverlayContext';
import { DIALBuildingBlockContextProvider } from '@ui/DIAL/BuildingBlocks/DIALBuildingBlockContext';
import FakeLoader from '@ui/FakeLoader/FakeLoader';

export interface IRouteDescription {
  title: string;
  subtitle: string;
}

export enum EUserType {
  CITIZEN_SERVANT = 'CITIZEN_SERVANT',
  CITIZEN = 'CITIZEN',
}

const getLoaderLabel = (userType: EUserType | null) => {
  if (!userType) {
    return '';
  }
  if (userType === EUserType.CITIZEN) {
    return 'Changing perspective to Applicant...'
  } else {
    return 'Changing perspective to Civil Servant...'
  }
}

export interface ISimulationState {
  progress: number;
  description: IRouteDescription;
  overlays: boolean;
  userType: EUserType | null;
  userAuthorized: boolean;
  nextStep: string;
  previousStep: string;
}

export interface ISimulationAction extends ISimulationState {
  type:
    | 'SET_PROGRESS'
    | 'SET_DESCRIPTION'
    | 'SET_OVERLAYS'
    | 'SET_USERTYPE'
    | 'SET_ALL';
}

const initialSimulationState: ISimulationState = {
  progress: 0,
  description: {
    title: '',
    subtitle: '',
  },
  overlays: true,
  userType: null,
  userAuthorized: false,
  nextStep: '',
  previousStep: '',
};

const simulationReducer = (
  state: ISimulationState,
  action: ISimulationAction
) => {
  switch (action.type) {
    case 'SET_ALL':
      return {
        ...state,
        progress: action.progress,
        description: {
          title: action.description.title,
          subtitle: action.description.subtitle,
        },
        userType: action.userType,
        userAuthorized: action.userAuthorized,
        previousStep: action.previousStep,
        nextStep: action.nextStep,
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

const activeBuildingBlockState = {
  [BUILDING_BLOCK.CONSENT]: false,
  [BUILDING_BLOCK.AUTHENTICATION]: false,
  [BUILDING_BLOCK.INFORMATION_MEDIATOR]: false,
  [BUILDING_BLOCK.DIGITAL_REGISTRIES]: false,
  [BUILDING_BLOCK.MESSAGING]: false,
  [BUILDING_BLOCK.PAYMENT]: false,
  [BUILDING_BLOCK.REGISTRATION]: false,
  [BUILDING_BLOCK.SCHEDULING]: false,
  [BUILDING_BLOCK.WORKFLOW]: false,
};

export interface ActiveBuildingBlockContext {
  activeBuildingBlocks: Record<BUILDING_BLOCK, boolean>;
  setActiveBuildingBlocks: Function;
}

export const ActiveBuildingBlockContext =
  createContext<ActiveBuildingBlockContext>({
    activeBuildingBlocks: activeBuildingBlockState,
    setActiveBuildingBlocks: () => {},
  });

export default function USCT() {
  const [state, dispatch] = useReducer(
    simulationReducer,
    initialSimulationState
  );
  const [showLoader, setShowLoader] = useState(false);
  const prevUserType = useRef<EUserType | null>(null);

  const [activeBuildingBlocks, setActiveBuildingBlocks] = useState(
    activeBuildingBlockState
  );

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  useEffect(() => {
    if (prevUserType.current) {
      setShowLoader(true);
    }
    prevUserType.current = state.userType;
  }, [state.userType]);

  return (
    <HelpOverlay>
      <ActiveBuildingBlockContext.Provider
        value={{ activeBuildingBlocks, setActiveBuildingBlocks }}
      >
        <SimulationContext.Provider value={{ state, dispatch }}>
          <DIALBuildingBlockContextProvider>
            <ContextualHelpContextProvider>
              <ScenarioLayout width={width}>
                <Flex direction="column" height="100%">
                  <Header
                    userType={state.userType}
                    userAuthorized={state.userAuthorized}
                  />
                  <Flex
                    paddingRight={{ base: '15px', lg: '60px' }}
                    paddingLeft={{ base: '15px', lg: '60px' }}
                    paddingBottom="80px"
                    flexGrow="1"
                  >
                    <FakeLoader
                      label={getLoaderLabel(state.userType)}
                      loading={showLoader}
                      onLoadEnd={() => setShowLoader(false)}
                    >
                      <Outlet />
                    </FakeLoader>
                  </Flex>
                </Flex>
              </ScenarioLayout>
            </ContextualHelpContextProvider>
          </DIALBuildingBlockContextProvider>
        </SimulationContext.Provider>
      </ActiveBuildingBlockContext.Provider>
    </HelpOverlay>
  );
}
