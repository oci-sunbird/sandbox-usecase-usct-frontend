import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const BeneficiaryList = lazy(() => import('./driver-poc/BeneficiaryList'));
const CandidateDetail = lazy(() => import('./driver-poc/CandidateDetail'));
const CandidatesList = lazy(() => import('./driver-poc/CandidatesList'));
const DriverPoc = lazy(() => import('./driver-poc/DriverPoc'));
const USCT = lazy(() => import('./usct/USCT'));
const ActiveProgram = lazy(() => import('./usct/active-program/ActiveProgram'));
const AuthoriseCitizen = lazy(
  () => import('./usct/authorise-citizen/AuthoriseCitizen')
);
const CandidateList = lazy(() => import('./usct/candidate-list/CandidateList'));
const CaseList = lazy(() => import('./usct/case-list/CaseList'));
const CaseManagement = lazy(
  () => import('./usct/case-management/CaseManagement')
);
const Conversation = lazy(() => import('./usct/conversation/Conversation'));
const Enrolment = lazy(() => import('./usct/enrolment/Enrolment'));
const Info = lazy(() => import('./usct/info/Info'));
const Personal = lazy(() => import('./usct/personal/Personal'));
const ReviewCandidate = lazy(
  () => import('./usct/review-candidate/ReviewCandidate')
);
const ReviewCase = lazy(() => import('./usct/review-case/ReviewCase'));
const Review = lazy(() => import('./usct/review/Review'));
const StartNewConversation = lazy(
  () => import('./usct/start-new-conversation/StartNewConversation')
);
const Feedback = lazy(() => import('./usct/feedback/Feedback'));

export const router = createBrowserRouter([
  {
    path: '',
    children: [
      {
        path: 'driver-poc',
        element: (
          <React.Suspense>
            <DriverPoc />
          </React.Suspense>
        ),
        children: [
          {
            index: true,
            element: <CandidatesList />,
          },
          {
            path: 'candidate/:id',
            children: [
              {
                index: true,
                element: <CandidateDetail />,
              },
              {
                path: 'enroll',
                // element: <CandidateEnroll />,
              },
            ],
          },
          {
            path: 'beneficiary-list',
            element: <BeneficiaryList />,
          },
        ],
      },
      {
        element: (
          <React.Suspense>
            <USCT />
          </React.Suspense>
        ),
        children: [
          {
            element: (
              <React.Suspense>
                <CaseManagement />
              </React.Suspense>
            ),
            path: 'case-management',
            index: true,
          },
          {
            element: (
              <React.Suspense>
                <CandidateList />
              </React.Suspense>
            ),
            path: 'candidate-list',
          },
          {
            element: (
              <React.Suspense>
                <CaseList />
              </React.Suspense>
            ),
            path: 'case-list',
          },
          {
            element: (
              <React.Suspense>
                <ReviewCandidate />
              </React.Suspense>
            ),
            path: 'review-candidate/:id',
          },
          {
            element: (
              <React.Suspense>
                <Enrolment />
              </React.Suspense>
            ),
            path: 'enrolment',
          },
          {
            element: (
              <React.Suspense>
                <ActiveProgram />
              </React.Suspense>
            ),
            path: 'active-program',
          },
          {
            element: (
              <React.Suspense>
                <ReviewCase />
              </React.Suspense>
            ),
            path: 'review-case/:id',
          },
          {
            element: (
              <React.Suspense>
                <Conversation />
              </React.Suspense>
            ),
            path: 'conversation/:id',
          },
          {
            element: (
              <React.Suspense>
                <StartNewConversation />
              </React.Suspense>
            ),
            path: 'new-conversation',
          },
          {
            element: (
              <React.Suspense>
                <AuthoriseCitizen />
              </React.Suspense>
            ),
            path: 'authorise-citizen',
          },
          {
            element: (
              <React.Suspense>
                <Info />
              </React.Suspense>
            ),
            path: 'info',
          },
          {
            element: (
              <React.Suspense>
                <Personal />
              </React.Suspense>
            ),
            path: 'personal',
          },
          {
            element: (
              <React.Suspense>
                <Review />
              </React.Suspense>
            ),
            path: 'review',
          },
          {
            element: (
              <React.Suspense>
                <Feedback />
              </React.Suspense>
            ),
            path: 'feedback',
          },
        ],
      },
    ],
  },
]);
