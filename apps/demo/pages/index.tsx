import styled from '@emotion/styled';
import { Button, Box } from '@wtlin/ui';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Box
        my={2}
        sx={{
          padding: 3,
          bg: 'primary.dark',
          mx: 6,
        }}
      >
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
      </Box>
    </StyledPage>
  );
}

export default Index;
