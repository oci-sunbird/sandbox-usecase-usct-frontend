import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { USCTUser } from "../../ui/USCTUser/USCTUser";
import { EUserType } from "./USCT";

interface HeaderProps {
  userType: EUserType | null;
  userAuthorized: boolean;
}

export default function Header(props: HeaderProps) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      height={props.userType === EUserType.CITIZEN ? "100px" : "72px"}
      flexShrink="0"
      borderBottom={
        props.userType === EUserType.CITIZEN_SERVANT
          ? "1px solid secondary.1000"
          : ""
      }
      paddingLeft={
        props.userType === EUserType.CITIZEN_SERVANT ? "80px" : "61px"
      }
      marginBottom="20px"
    >
      <Flex alignItems="center" gap="12px">
        <Image
          src={
            props.userType === EUserType.CITIZEN_SERVANT
              ? "/images/open-island-citizen-servant.svg"
              : "/images/open-island-citizen.svg"
          }
          alt=""
          w="38px"
          h="38px"
        />
        <Box>
          <Heading fontSize="12px" fontWeight="900" lineHeight="15px">
            Open Island
          </Heading>
          <Text fontSize="10px" fontWeight="400" lineHeight="12px">
            Ministry of Social Welfare
            {props.userType === EUserType.CITIZEN && (
              <>
                <br />
                Self-Service Portal
              </>
            )}
          </Text>
        </Box>
      </Flex>
      {props.userAuthorized && <USCTUser userType={props.userType} />}
    </Flex>
  );
}
