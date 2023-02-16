import * as React from 'react';
import { useTheme, Box, Button, Text } from '@wtlin/ui';

export function Index() {
  const { resolvedColorMode, setColorMode } = useTheme();
  const isNight = ['dark', 'night'].includes(resolvedColorMode);

  return (
    <Box
      sx={{
        height: '100vh',
        bg: 'yellow.2',
      }}
    >
      <Button
        onClick={() => setColorMode(isNight ? 'day' : 'night')}
        sx={{ bg: 'orange.3', color: 'blue.8' }}
      >
        <Text>Toggle Theme Mode</Text>
      </Button>
    </Box>
  );
}

export default Index;
