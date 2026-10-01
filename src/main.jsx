import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import StudyAbroadPage from "./pages/StudyAbroadPage.jsx";
import CoworkingSpacePage from "./pages/CoworkingSpacePage.jsx";
import PersonVueBanner from "./components/Banner/PersonVueBanner.jsx";
import PersonVuePage from "./pages/PersonVuePage.jsx";
import PSIExamPage from "./pages/PSIExamPage.jsx";
import KryterionPage from "./pages/KryterionPage.jsx";
import VerificationPage from "./pages/VerificationPage.jsx";
import JobPage from "./pages/JobPage.jsx";
import AmbassadorPage from "./pages/AmbassadorPage.jsx";
import HowtoPayPage from "./pages/HowtoPayPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import ProgramPage from "./pages/ProgramPage.jsx";
import OnlineAdmission from "./pages/OnlineAdmission.jsx";

let route = createBrowserRouter([
  { path: "/", element: <Homepage />, children: [] },
  { path: "/about-us", element: <AboutPage />, children: [] },
  { path: "/contact-us", element: <ContactPage /> },
  { path: "/study-abroad", element: <StudyAbroadPage /> },
  { path: "/coworking-space", element: <CoworkingSpacePage /> },
  { path: "/person-vue", element: <PersonVuePage /> },
  { path: "/psi-exam", element: <PSIExamPage /> },
  { path: "/kryterion", element: <KryterionPage /> },
  { path: "/verification", element: <VerificationPage /> },
  { path: "/job", element: <JobPage /> },
  { path: "/ambassador", element: <AmbassadorPage /> },
  { path: "/howtopay", element: <HowtoPayPage /> },
  { path: "/success-stories", element: <SuccessPage /> },
  { path: "/program", element: <ProgramPage /> },
  { path: "/online-admission", element: <OnlineAdmission /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>,
);
