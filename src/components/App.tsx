// import { useIntegration } from "@telegram-apps/react-router-integration";
// import {
//   bindMiniAppCSSVars,
//   bindThemeParamsCSSVars,
//   bindViewportCSSVars,
//   initNavigator,
//   useLaunchParams,
//   useMiniApp,
//   useThemeParams,
//   useViewport,
// } from "@telegram-apps/sdk-react";
// import { AppRoot, FixedLayout } from "@telegram-apps/telegram-ui";

// import { type FC, useCallback, useEffect, useMemo } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

// import { routes } from "@/navigation/routes.tsx";
import Sign from "./Sign/Sign";
import Layout from "./Layout/Layout";
import HomePage from "./HomePage/HomePage";
import { Suspense } from "react";

// export const App: FC = () => {
//   const lp = useLaunchParams();
//   const miniApp = useMiniApp();
//   const themeParams = useThemeParams();
//   const viewport = useViewport();

//   useEffect(() => {
//     return bindMiniAppCSSVars(miniApp, themeParams);
//   }, [miniApp, themeParams]);

//   useEffect(() => {
//     return bindThemeParamsCSSVars(themeParams);
//   }, [themeParams]);

//   useEffect(() => {
//     return viewport && bindViewportCSSVars(viewport);
//   }, [viewport]);

//   // Create a new application navigator and attach it to the browser history, so it could modify
//   // it and listen to its changes.
//   const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
//   const [location, reactNavigator] = useIntegration(navigator);

//   // Don't forget to attach the navigator to allow it to control the BackButton state as well
//   // as browser history.
//   useEffect(() => {
//     navigator.attach();
//     return () => navigator.detach();
//   }, [navigator]);

//   return (
//     <AppRoot
//       appearance={miniApp.isDark ? 'dark' : 'light'}
//       platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
//     >
//       <Router location={location} navigator={reactNavigator}>
//         <Routes>
//           {routes.map((route) => <Route key={route.path} {...route} />)}
//           <Route path='*' element={<Navigate to='/'/>}/>
//         </Routes>
//       </Router>
//     </AppRoot>
//   );
// };

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path=":sign" element={<Sign />} />
              {/* <Route path="*" element={<NotFound />}/> */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
