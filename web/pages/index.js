import MainWrapper from './layouts/mainWrapper';

import Accolades from './components/Accolades';
import Pricing from './components/Princing';
import RecentWork from './components/RecentWork';
import WhyHireMe from './components/WhyHireMe';

import './scss/global.scss';

const Index = () => (
  <MainWrapper>
    <WhyHireMe />
    <RecentWork />
    <Pricing />
    <Accolades />
  </MainWrapper>
);

export default Index;
