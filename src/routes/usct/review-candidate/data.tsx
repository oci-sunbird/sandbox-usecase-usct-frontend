import { Flex, Tag, Text } from '@chakra-ui/react';
import { ReactComponent as FileQuestionIcon } from '@assets/icons/file-question.svg';
import { ReactComponent as FileWarningIcon } from '@assets/icons/file-warning.svg';
import { ReactComponent as FileXIcon } from '@assets/icons/file-x.svg';

export const personData = {
  fullName: 'Thomas Anderson',
  dateOfBirth: '12/12/1975',
  phoneNumber: '(+00) 94 843 432',
  occupation: 'Unemployed',
  idCode: '12345678910',
  email: 'tom@myspace.com',
  socialCode: '9525206274',
  fullAddress: 'Parkway 320 C',
  householdNeeds: [
    'Housing',
    'Food',
    'Health Care',
    'Education',
    'Child Care',
    'Financial Security',
    'Special Support',
  ],
};

export const bankData = {
  ownerName: 'Thomas Anderson',
  bankName: 'Sunshine Bank',
  iban: 'AA02300209000106531065',
}

export const householdData = [
  {
    name: 'Priscilla Anderson',
    personalCode: '123456728910',
    relation: 'Wife',
    dateOfBirth: '12/12/1975',
    reason: 'Data',
    needs: [],
  },
  {
    name: 'Jason Anderson',
    personalCode: '123456728910',
    relation: 'Father',
    dateOfBirth: '12/12/1955',
    reason: 'Data',
    needs: ['Hearing Support'],
  },
  {
    name: 'Angelina Anderson',
    personalCode: '123456728910',
    relation: 'Child',
    dateOfBirth: '08/10/2008',
    reason: 'Data',
    needs: ['Special Care'],
  },
  {
    name: 'Amelia Anderson',
    personalCode: '123456728910',
    relation: 'Child',
    dateOfBirth: '12/05/2014',
    reason: 'Data',
    needs: [],
  },
];

export const documentsData = [
  {
    name: 'Medical Certificate',
    organization: '12345678910',
    issuedOn: 'Wife',
    validUntil: '12.12.1975',
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: 'Medical Certificate',

    organization: '12345678910',
    issuedOn: 'Wife',
    validUntil: '12.12.1975',
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: 'Medical Certificate',

    organization: '12345678910',
    issuedOn: 'Wife',
    validUntil: '12.12.1975',
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: 'Medical Certificate',

    organization: '12345678910',
    issuedOn: 'Wife',
    validUntil: '12.12.1975',
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
];

export const historyData = [
  {
    title: 'Registration of the Citizen',
    icon: <FileQuestionIcon />,
    events: [
      {
        name: 'Interviews, Census Survey and Data Collection',
        date: '23.04.2017',
        info: '#97654321',
        completed: true,
      },
      {
        name: 'Registration to the Social Registry Information System',
        date: '23.04.2017',
        info: '#97654321',
        completed: true,
      },
      {
        name: 'Cross-referencing the data with other databases',
        date: '23.04.2017',
        info: '#97654321',
        completed: true,
      },
      {
        name: 'Verify and Validate the information',
        date: '23.04.2017',
        info: '#97654321',
        completed: true,
      },
    ],
  },
  {
    title: 'Eligibility',
    icon: <FileQuestionIcon />,
    events: [
      {
        name: 'Determining Household Needs',
        date: '23.04.2017',
        info: '#97654321',
        completed: true,
      },
      {
        name: 'Registration to the Social Registry Information System',
        date: '23.04.2017',
        info: '#97654321',
        completed: true,
      },
      {
        name: 'Determining Eligibility of the citizen to the program',
        date: '23.04.2017',
        info: 'MORE INFORMATION REQUIRED',
      },
      {
        name: 'Assigning the Benefit Package',
        date: '23.04.2017',
        info: 'MORE INFORMATION REQUIRED',
      },
    ],
  },
  {
    title: 'Enrollment',
    icon: <FileWarningIcon />,
    events: [
      {
        name: 'Program Enrollment Starts',
        date: '05.07.2023',
        info: '#97654321',
      },
    ],
  },
  {
    title: 'Payment',
    icon: <FileXIcon />,
  },
  {
    title: 'On Going Case Management',
    icon: <FileXIcon />,
  },
];
