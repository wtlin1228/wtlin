import styled from '@emotion/styled';
import { Button } from '@wtlin/ui';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Button
        sx={{
          fontSize: [4, 3, 2, 1],
          padding: 4,
          color: 'common.white',
          bg: 'primary.main',
        }}
      >
        Button
      </Button>
    </StyledPage>
  );
}

export default Index;
