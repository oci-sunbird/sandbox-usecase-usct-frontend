import { PhoneIcon } from "@chakra-ui/icons";

export const LINKS = [
  {
    name: "Experience GovStack",
    icon: "",
    children: [
      {
        path: "/experience-govstack/USCT",
        name: "USCT",
        icon: <PhoneIcon w="24px" h="24px" />,
      },
      {
        path: "experience-govstack/building-permits",
        name: "Building Permits",
        icon: <PhoneIcon w="24px" h="24px" />,
      },
      {
        path: "experience-govstack/bb-demo-authentication-id",
        name: "BB Demo Authentication & ID",
        icon: <PhoneIcon w="24px" h="24px" />,
      },
    ],
  },
  {
    name: "Settings",
    icon: "",
    children: [
      {
        path: "settings/account",
        name: "Account",
        icon: <PhoneIcon w="24px" h="24px" />,
      },
      {
        path: "settings/configuration",
        name: "Configuration",
        icon: <PhoneIcon w="24px" h="24px" />,
      },
    ],
  },
  {
    name: "Help & more",
    icon: "",
    children: [
      {
        path: "https://www.slack.com",
        name: "Slack Community",
        icon: <PhoneIcon w="24px" h="24px" />,
      },
      {
        path: "https://www.asd.com",
        name: "Implementation Playbook",
        icon: <PhoneIcon w="24px" h="24px" />,
      },
      {
        path: "https://www.google.com",
        name: "Developer Playground",
        icon: <PhoneIcon w="24px" h="24px" />,
      },
    ],
  },
];
