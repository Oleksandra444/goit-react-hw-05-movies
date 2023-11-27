import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Container, Header, HeaderMenu, StyledNavLink } from './SharedLayout.styled';

export const SharedLayout = () => {

return (
    <Container>
      <Header>
        <nav>
          <HeaderMenu>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </HeaderMenu>
        </nav>
        </Header>
        
        <main>
            <Outlet/>
        </main>

        <GlobalStyle/>
      
    </Container>
  );
};



