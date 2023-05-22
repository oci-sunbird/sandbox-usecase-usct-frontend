import { Amplify } from "aws-amplify";
import { createBrowserRouter } from "react-router-dom";
import ActiveProgram from "./usct/active-program/ActiveProgram";
import AuthoriseCitizen from "./usct/authorise-citizen/AuthoriseCitizen";
import CandidateList from "./usct/candidate-list/CandidateList";
import CaseList from "./usct/case-list/CaseList";
import CaseManagement from "./usct/case-management/CaseManagement";
import Conversation from "./usct/conversation/Conversation";
import Enrolment from "./usct/enrolment/Enrolment";
import Info from "./usct/info/Info";
import Personal from "./usct/personal/Personal";
import ReviewCandidate from "./usct/review-candidate/ReviewCandidate";
import ReviewCase from "./usct/review-case/ReviewCase";
import Review from "./usct/review/Review";
import StartNewConversation from "./usct/start-new-conversation/StartNewConversation";
import USCT from "./usct/USCT";

Amplify.configure({
  Auth: {
    region: "eu-central-1",
    userPoolId: "eu-central-1_r6tpMB1Kk",
    userPoolWebClientId: "64qi51ecoi6invhnp745v5qqjj",
  },
});

export const router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "",
        element: <USCT />,
        children: [
          // {
          //   element: <AuthoriseCitizenServant />,
          //   path: "",
          // },
          {
            element: <CaseManagement />,
            path: "case-management",
          },
          {
            element: <CandidateList />,
            path: "candidate-list",
          },
          {
            element: <CaseList />,
            path: "case-list",
          },
          {
            element: <ReviewCandidate />,
            path: "review-candidate/:id",
          },
          {
            element: <Enrolment />,
            path: "enrolment",
          },
          {
            element: <ActiveProgram />,
            path: "active-program",
          },
          {
            element: <ReviewCase />,
            path: "review-case/:id",
          },
          {
            element: <Conversation />,
            path: "conversation/:id",
          },
          { element: <StartNewConversation />, path: "new-conversation" },
          {
            element: <AuthoriseCitizen />,
            path: "authorise-citizen",
          },
          {
            element: <Info />,
            path: "info",
          },
          {
            element: <Personal />,
            path: "personal",
          },
          {
            element: <Review />,
            path: "review",
          },
        ],
      },
    ],
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: "/dashboard",
//     element: <Root />,
//     loader: async () => {
//       try {
//         // await authentication.isLoggedIn();
//       } catch (error) {
//         return redirect("/sign-in");
//       }
//     },
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Dashboard />,
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <Public />,
//     loader: async () => {
//       try {
//         const user = await authentication.isLoggedIn();
//         if (user) {
//           return redirect("/dashboard");
//         }
//       } catch (error) {
//         return;
//       }
//     },
//     children: [
//       {
//         index: true,
//         element: <Landing />,
//       },
//       {
//         path: "sign-in",
//         element: <SignIn />,
//       },
//       {
//         path: "sign-up",
//         element: <SignUp />,
//       },
//     ],
//   },
//   {
//     loader: async () => {
//       try {
//         // await authentication.isLoggedIn();
//       } catch (error) {
//         return redirect("/sign-in");
//       }
//     },
//     path: "experience-govstack",
//     children: [
//       {
//         path: "USCT",
//         element: <USCT />,
//         children: [
//           {
//             element: <AuthoriseCitizenServant />,
//             path: "",
//           },
//           {
//             element: <CaseManagement />,
//             path: "case-management",
//           },
//           {
//             element: <CandidateList />,
//             path: "candidate-list",
//           },
//           {
//             element: <CaseList />,
//             path: "case-list",
//           },
//           {
//             element: <ReviewCandidate />,
//             path: "review-candidate/:id",
//           },
//           {
//             element: <Enrolment />,
//             path: "enrolment",
//           },
//           {
//             element: <ActiveProgram />,
//             path: "active-program",
//           },
//           {
//             element: <ReviewCase />,
//             path: "review-case/:id",
//           },
//           {
//             element: <Conversation />,
//             path: "conversation/:id",
//           },
//           { element: <StartNewConversation />, path: "new-conversation" },
//           {
//             element: <AuthoriseCitizen />,
//             path: "authorise-citizen",
//           },
//           {
//             element: <Info />,
//             path: "info",
//           },
//           {
//             element: <Personal />,
//             path: "personal",
//           },
//           {
//             element: <Review />,
//             path: "review",
//           },
//         ],
//       },
//     ],
//   },
// ]);
