import { Center, Fade } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import ChallengeForm, {
  CHALLENGE_FLOW,
} from '../../ui/ChallengeForm/ChallengeForm';
import { useAuthentication } from '../../utils/useAuthentication';
import EmailForm from './EmailForm';

enum STATES {
  CHALLENGE = 'CHALLENGE',
  USERNAME = 'USERNAME',
}

export default function SignIn() {
  const location = useLocation();
  useAuthentication();
  const [step, setStep] = useState(STATES.USERNAME);
  const [email, setEmail] = useState<string>('');
  const loaderData = useLoaderData() as {
    user?: null | boolean;
    error?: null | string;
  };
  if (loaderData) {
    if (loaderData.user) {
      return <Navigate to="/" />;
    }
  }

  useEffect(() => {
    if (email) {
      setStep(STATES.CHALLENGE);
    } else {
      setStep(STATES.USERNAME);
    }
  }, [email]);

  const RenderLogin = () => {
    switch (step) {
      case STATES.CHALLENGE:
        return (
          <Fade in={!!email}>
            <Center marginTop="96px">
              <ChallengeForm email={email} flow={CHALLENGE_FLOW.SIGN_IN} />
            </Center>
          </Fade>
        );
      default:
        return (
          <Fade in={!email}>
            <Center marginTop="96px">
              <EmailForm setEmail={setEmail} />
            </Center>
          </Fade>
        );
    }
  };

  return <RenderLogin />;
}
