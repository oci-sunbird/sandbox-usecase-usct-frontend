import {
  Button,
  IconButton,
  Flex,
  Heading,
  HStack,
  Spinner,
  Table,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Spacer,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../chakra-overrides/colors';
import { RPCContext } from './rpc';
import { ReactComponent as PlusIcon } from '@assets/icons/plus.svg';
import { ReactComponent as EditIcon } from '@assets/icons/edit.svg';
import { getRole } from './utils/token';

export default function CandidatesList() {
  const rpc = useContext(RPCContext);
  const navigate = useNavigate();
  const isRegistryAdministrator = (getRole() === "ROLE_REGISTRY_ADMINISTRATION");
  const { data: candidates, isLoading } = useQuery(
    'candidates',
    rpc.getCandidateList
  );
  return (
    <>
      <Heading mb="40px">Candidate List</Heading>
      <Text mb="40px">
      Please choose a candidate from the list of program candidates to modify their information. If you wish to register a new candidate, please use the 'Create Candidate' option.
      </Text>
      <Heading mb="20px" size="md">
        Program Candidates
      </Heading>
      <Flex alignItems="center" mb="20px" gap="10px">
        <Flex
          w="24px"
          h="24px"
          alignItems="center'"
          justifyContent="center"
          borderRadius="100%"
          backgroundColor={colors.secondary[1000]}
          color={colors.secondary[0]}
        >
          <Text>{candidates?.length}</Text>
        </Flex>
        <Text variant="caps" color={colors.secondary[800]}>
          CANDIDATES
        </Text>
        <Spacer />
        {(isRegistryAdministrator)?(
        <Flex>
          <Button onClick={() => navigate(`/driver-poc/candidate/create`)} colorScheme='admin' leftIcon={<PlusIcon />}>Create Candidate</Button>
        </Flex>
        ):""}
      </Flex>
      <Table variant="simple">
        <Thead
          backgroundColor={colors.secondary[800]}
          color={colors.secondary[0]}
        >
          <Tr>
            <Th color={colors.secondary[0]}>#</Th>
            <Th color={colors.secondary[0]}>Name</Th>
            <Th color={colors.secondary[0]}>ID Number</Th>
            <Th color={colors.secondary[0]}>Eligible Packages</Th>
            {(isRegistryAdministrator)?(
            <Th color={colors.secondary[0]}></Th>
            ):""}
          </Tr>
        </Thead>
        <Tbody>
          {isLoading && (
            <Tr>
              <Td colSpan={(isRegistryAdministrator)?5:4}>
                <Flex justifyContent="center" alignItems="center" w="100%">
                  <Spinner size="md" />
                </Flex>
              </Td>
            </Tr>
          )}
          {candidates?.map((candidate, index) => (
            <Tr
              key={candidate.id}
              onClick={() => navigate(`/driver-poc/candidate/${candidate.id}`)}
              _hover={{
                cursor: 'pointer',
                background: colors.secondary[100],
              }}
            >
              <Td borderStartRadius={16} >{index + 1}</Td>
              <Td>
                <Text>{`${candidate.person.firstName} ${candidate.person.lastName}`}</Text>
              </Td>
              <Td>
                <Text>{candidate.person.personalIdCode}</Text>
              </Td>
              <Td>
                {candidate.packages?.length > 0 ? (
                  <HStack gap="10px">
                    {candidate?.packages
                      .sort((a, b) => b.name.localeCompare(a.name))
                      .map((p) => {
                        return (
                          <Tag
                            justifyContent="center"
                            color={colors.secondary[0]}
                            backgroundColor={colors.secondary[800]}
                            w="140px"
                            key={p.id}
                          >
                            {p.name}
                          </Tag>
                        );
                      })}
                  </HStack>
                ) : (
                  <Tag
                    justifyContent="center"
                    color={colors.secondary[0]}
                    backgroundColor={colors.info[600]}
                    w="140px"
                  >
                    Not Eligible
                  </Tag>
                )}
              </Td>
              {(isRegistryAdministrator)?(
               <Td borderEndRadius={16}>
                <IconButton
                    variant="borderless"
                    aria-label='Edit candidate'
                    icon={<EditIcon />}
                    onClick={() => navigate(`/driver-poc/candidate/${candidate.id}`)}
                />
                </Td>
              ):""}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
