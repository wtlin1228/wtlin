import styled from '@emotion/styled';
import { Button, Box, Text } from '@wtlin/ui';

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
            padding: 4,
            bg: 'primary.main',
          }}
        >
          <Text color="common.white" fontSize={[1, 2, 3, 4]}>
            Button
          </Text>
        </Button>
      </Box>
    </StyledPage>
  );
}

export default Index;
