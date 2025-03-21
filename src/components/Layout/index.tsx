import { ReactNode } from 'react';
import Navigation from '../Navigation';
import Section from '../Section';

interface IProps {
  children: ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <>
      <Navigation />
      <Section>{children}</Section>
    </>
  );
}

export default Layout;
