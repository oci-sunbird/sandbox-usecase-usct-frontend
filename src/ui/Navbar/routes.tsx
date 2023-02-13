import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { ReactComponent as CodeIcon } from "../../assets/icons/code.svg";
import { ReactComponent as DocumentsIcon } from "../../assets/icons/documents.svg";
import { ReactComponent as FaqIcon } from "../../assets/icons/faq.svg";
import { ReactComponent as HatIcon } from "../../assets/icons/hat.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import { ReactComponent as PaperIcon } from "../../assets/icons/paper.svg";
import { ReactComponent as SlackIcon } from "../../assets/icons/slack.svg";

import { ReactComponent as USCTIcon } from "../../assets/icons/usct-icon.svg";
export const LINKS = [
  {
    name: "Experience GovStack",
    icon: "",
    children: [
      {
        path: "/experience-govstack/USCT",
        name: "USCT",
        icon: <USCTIcon />,
      },
      {
        path: "experience-govstack/building-permits",
        name: "Building Permits",
        icon: <PaperIcon />,
      },
      {
        path: "experience-govstack/bb-demo-authentication-id",
        name: "BB Demo Authentication & ID",
        icon: <DocumentsIcon />,
      },
    ],
  },
  {
    name: "Support",
    icon: "",
    children: [
      {
        path: "faq",
        name: "FAQ",
        icon: <FaqIcon />,
      },
      {
        path: "https://www.slack.com",
        name: "Slack Community",
        icon: <SlackIcon />,
      },
      {
        path: "mailto:kalapea@gmail.com",
        name: "Contact",
        icon: <ChatIcon />,
      },
    ],
  },
  {
    name: "Technical Insights",
    icon: "",
    children: [
      {
        path: "https://www.asd.com",
        name: "Private Sandbox",
        icon: <LockIcon />,
      },
      {
        path: "https://www.asd.com",
        name: "Implementation Playbook",
        icon: <HatIcon />,
      },
      {
        path: "https://www.google.com",
        name: "Developer Insights",
        icon: <CodeIcon />,
      },
    ],
  },
];
