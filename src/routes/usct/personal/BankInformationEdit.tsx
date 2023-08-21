import { Box, Flex, Heading, Text, Button, ButtonGroup, Input, Grid, Center, VStack, CircularProgress, Icon, Spinner, } from '@chakra-ui/react';
import { useNavigate, useParams, useLocation, Link, Form } from 'react-router-dom';
import { ReactComponent as SaveIcon} from '@assets/icons/save.svg';
import { RPCContext } from '../../driver-poc/rpc';
import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { DriverPOC } from '../../driver-poc/types';

export default function BankInformationEdit(
  {candidatei,
    setCandidateData,
    handleBack,
    handleContinue
  }: {candidatei?:DriverPOC.Candidate,
    setCandidateData?: any,
    handleBack?: any,
  handleContinue?: any},
  ) {
  const {id} = useParams<{ id: string }>();
  const rpc = useContext(RPCContext);
  const state = useLocation().state;
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  const [candidate, setCandidate] = useState<DriverPOC.Candidate>(candidatei?candidatei:state.candidate);
  const { isFetching } = useQuery(
    `candidate-${id}`,
    async () => {
      if (id) {
        return setCandidate(await rpc.getCandidateInfo(+id));
      }
    }
  );

    if (isFetching) {
      <Center>
        <Spinner />
      </Center>
    }

    const updateData = (e: { target: { name: any; value: any; }; }) => {
      if (!candidatei) {
        candidate.person = Object.assign({}, candidate.person,
        { [e.target.name]: e.target.value });
      } else {
        setCandidateData(e);
      }
      validateFields();
    }

  const updateCandidate = async () => {
    rpc.updateCandidate(candidate);
    return navigate('/driver-poc/candidate/'+id);
  };

  const validateFields = () => {
    const inputs = Array.from(document.querySelectorAll('input'));
    setEnabled(inputs.every((target) => target.value !== ""));
  }

  return (
        <Box>
          {!isFetching ? (
          <>
        <Flex><Heading variant="h3" size="sm" mb="24px">
          Bank Information
        </Heading>
        </Flex>
        <Flex>
         <Grid
          w="100%"
          gridTemplateRows="repeat(4, min-content)"
          gridTemplateColumns={{ sm: 'repeat(2, 1fr)' }}
          gap="20px"
        >
        <Box>
          <Text fontWeight="600">Bank Account Owner Name</Text>
          <Input placeholder="Bank Account Owner Name" name="bankAccountOwnerName" onChange={(e) => updateData(e)} defaultValue={candidatei?candidatei.person.bankAccountOwnerName:candidate.person.bankAccountOwnerName}/>
        </Box>
        <Box>
          <Text fontWeight="600">International Bank Account Number (IBAN)</Text>
          <Input placeholder="International Bank Account Number" name="iban"  onChange={(e) => updateData(e)} defaultValue={candidatei?candidatei.person.iban:candidate.person.iban}/>
        </Box>
        <Box>
          <Text fontWeight="600">Bank Name</Text>
          <Input placeholder="Bank Name" name="bankName" onChange={(e) => updateData(e)} defaultValue={candidatei?candidatei.person.bankName:candidate.person.bankName}/>
        </Box></Grid>
      </Flex>
      <Flex justifyContent="flex-end">
        <ButtonGroup colorScheme="admin" >
          {/* To be figured out */}
        <Button onClick={() => candidatei?handleBack():navigate(-1)} w="180px" variant="outline">
            Back
          </Button>
          <Button disabled={!enabled}  colorScheme={!enabled?"disabled":"admin"} onClick={() => enabled?(!candidatei?updateCandidate():handleContinue()):""} w="180px" leftIcon={<SaveIcon/>}>{!candidatei?"Save":"Next"}</Button>
        </ButtonGroup>
      </Flex>
      </>
          ) : ("")
          }
    </Box>
  );
}
