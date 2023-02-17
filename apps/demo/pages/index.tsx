import { useTheme, Box, Button, Text } from '@wtlin/ui';

export function Index() {
  const { colorMode, setColorMode } = useTheme();
  const isDark = colorMode === 'dark';

  return (
    <Box
      sx={{
        height: '100vh',
        bg: 'bg',
        color: 'text',
      }}
    >
      <Text as="h1" m={0}>
        Hello, This is Leo&apos;s demo site
      </Text>
      <Button
        onClick={() => setColorMode(isDark ? 'light' : 'dark')}
        sx={{
          color: 'btn.text',
          bg: 'btn.bg',
        }}
      >
        <Text>Toggle Theme Mode</Text>
      </Button>
    </Box>
  );
}

export default Index;
