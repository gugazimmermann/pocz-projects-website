/* eslint-disable @typescript-eslint/no-unused-vars */
import { lazy, ReactElement, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from './routes';
import Loading from './components/loading/Loading';

const Layout = lazy(() => import('./pages/layout/Layout'));
const AboutUs = lazy(() => import('./pages/about-us/AboutUs'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Faq = lazy(() => import('./pages/faq/Faq'));
const Features = lazy(() => import('./pages/features/Features'));
const Help = lazy(() => import('./pages/help/Help'));
const Main = lazy(() => import('./pages/main/Main'));
const Plans = lazy(() => import('./pages/plans/Plans'));
const Privacity = lazy(() => import('./pages/privacity/Privacity'));
const Suport = lazy(() => import('./pages/suport/Suport'));
const Terms = lazy(() => import('./pages/terms/Terms'));

function App(): ReactElement {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Layout>
              <Main />
            </Layout>
          )}
        />
        <Route
          exact
          path={Routes.Features}
          render={() => (
            <Layout>
              <Features />
            </Layout>
          )}
        />
        <Route
          exact
          path={Routes.Plans}
          render={() => (
            <Layout>
              <Plans />
            </Layout>
          )}
        />
        <Route
          exact
          path={Routes.Faq}
          render={() => (
            <Layout>
              <Faq />
            </Layout>
          )}
        />
        <Route
          exact
          path={Routes.Help}
          render={() => (
            <Layout>
              <Help />
            </Layout>
          )}
        />
        <Route
          exact
          path={Routes.Suport}
          render={() => (
            <Layout>
              <Suport />
            </Layout>
          )}
        />
        <Route
          exact
          path={Routes.Terms}
          render={() => (
            <Layout>
              <Terms />
            </Layout>
          )}
        />
        <Route
          exact
          path={Routes.Privacity}
          render={() => (
            <Layout>
              <Privacity />
            </Layout>
          )}
        />
        <Route
          exact
          path={Routes.AboutUs}
          render={() => (
            <Layout>
              <AboutUs />
            </Layout>
          )}
        />
        <Route
          exact
          path={Routes.Contact}
          render={() => (
            <Layout>
              <Contact />
            </Layout>
          )}
        />
      </Switch>
    </Suspense>
  );
}

export default App;
