import { FC } from 'react';

import Navbar from './navbar';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    );
  }
};

export default Layout;
