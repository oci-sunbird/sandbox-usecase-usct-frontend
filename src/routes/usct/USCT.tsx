import { Flex } from '@chakra-ui/react';
import { createContext, useReducer, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ScenarioLayout from '../../ui/ScenarioLayout/ScenarioLayout';
import { ContextualHelpContextProvider } from './ContextualHelpContext';
import Header from './Header';
import { BUILDING_BLOCK } from './utils';
import { ShepherdOptionsWithType, ShepherdTour, Tour } from 'react-shepherd';

export interface IRouteDescription {
  title: string;
  subtitle: string;
}

export enum EUserType {
  CITIZEN_SERVANT = 'CITIZEN_SERVANT',
  CITIZEN = 'CITIZEN',
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
  [BUILDING_BLOCK.SECURITY]: false,
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

  const [activeBuildingBlocks, setActiveBuildingBlocks] = useState(
    activeBuildingBlockState
  );

  const tourOptions: Tour.TourOptions = {
    useModalOverlay: true,
  }

  const steps: ShepherdOptionsWithType[] = [
    {
      id: 'intro',
      attachTo: { element: '.first-element', on: 'bottom' },
      buttons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      scrollTo: false,
      cancelIcon: {
        enabled: true,
      },
      title: 'Welcome to React-Shepherd!',
      text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
      when: {
        show: () => {
          console.log('show step');
        },
        hide: () => {
          console.log('hide step');
        }
      }
    },
  ]

  return (
    <ShepherdTour tourOptions={tourOptions} steps={steps}>
      <ActiveBuildingBlockContext.Provider
        value={{ activeBuildingBlocks, setActiveBuildingBlocks }}
      >
        <SimulationContext.Provider value={{ state, dispatch }}>
          <ContextualHelpContextProvider>
            <ScenarioLayout view="mobile">
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
                  <Outlet />
                </Flex>
              </Flex>
            </ScenarioLayout>
          </ContextualHelpContextProvider>
        </SimulationContext.Provider>
      </ActiveBuildingBlockContext.Provider>
    </ShepherdTour>
  );
}
