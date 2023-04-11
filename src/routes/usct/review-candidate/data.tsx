import { Flex, Tag, Text } from "@chakra-ui/react";

export const personData = {
  fullName: "Thomas Anderson",
  dateOfBirth: "03.10.1994",
  phoneNumber: "(+372) 53937064",
  occupation: "Very Cool Guy",
  idCode: "39410036813",
  email: "veryCoolGuy@gmail.com",
  socialCode: "0235920935kdtt",
  fullAddress:
    "Very long name place, Saskatchewan, Alaskan Minnesota, Finnish Sauna 14, Earth, Milky Way, Known Universe",
};

export const householdNeeds = [
  "Housing",
  "Food",
  "Health Care",
  "Education",
  "Child Care",
  "Financial Security",
  "Special Support",
];

export const householdData = [
  {
    name: "Ms Lorem Ipsum",
    personalCode: "123456728910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
    needs: [],
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12312245678910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
    needs: ["Hearing Support", "Special Support"],
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345226789310",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
    needs: ["Child Care", "Financial Security"],
  },
  {
    name: "Ms Lorem Ipsum",
    personalCode: "12345633785910",
    relation: "Wife",
    dateOfBirth: "12.12.1975",
    reason: "Data",
    needs: ["Food", "Health Care", "Education"],
  },
];

export const documentsData = [
  {
    name: "Medical Certificate",
    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
  {
    name: "Medical Certificate",

    organization: "12345678910",
    issuedOn: "Wife",
    validUntil: "12.12.1975",
    status: (
      <Flex gap="8px">
        <Tag colorScheme="green" size="sm" borderRadius="full" />
        <Text>Uploaded</Text>
      </Flex>
    ),
  },
];
