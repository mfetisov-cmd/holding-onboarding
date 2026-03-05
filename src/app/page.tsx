'use client';

import { useTheme } from 'styled-components';
import { Button, ButtonGroup } from '@/shared/ui/vivid-ui/components/ButtonV2';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';
import { Flex } from '@/shared/ui/vivid-ui/components/Layout';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Divider } from '@/shared/ui/vivid-ui/components/Divider';

export default function Home() {
  const theme = useTheme();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: theme.token.spacingXL }}>
      <Typography variant="h3">Vivid Vibe UI</Typography>
      <Spacer size={2} />
      <Typography variant="bodyM" style={{ color: theme.token.color.c2 }}>
        Prototyping environment with real SME design system components
      </Typography>

      <Spacer size={12} />
      <Divider />
      <Spacer size={12} />

      <Typography variant="h5">Buttons</Typography>
      <Spacer size={4} />

      <Flex direction="row" gap="16px" wrap="wrap">
        <Button variant="primary" size="large">Primary</Button>
        <Button variant="secondary" size="large">Secondary</Button>
        <Button variant="ghost" size="large">Ghost</Button>
        <Button variant="destructive" size="large">Destructive</Button>
      </Flex>

      <Spacer size={8} />

      <Flex direction="row" gap="16px" wrap="wrap">
        <Button variant="primary" size="medium">Medium</Button>
        <Button variant="primary" size="small">Small</Button>
      </Flex>

      <Spacer size={8} />

      <ButtonGroup type="vertical">
        <Button fullWidth variant="primary" size="large">Full Width Primary</Button>
        <Button fullWidth variant="secondary" size="large">Full Width Secondary</Button>
      </ButtonGroup>

      <Spacer size={12} />
      <Divider />
      <Spacer size={12} />

      <Typography variant="h5">Typography</Typography>
      <Spacer size={4} />

      <Flex direction="column" gap="8px">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Spacer size={2} />
        <Typography variant="bodyL">Body Large - The quick brown fox</Typography>
        <Typography variant="bodyM">Body Medium - The quick brown fox</Typography>
        <Typography variant="bodyS">Body Small - The quick brown fox</Typography>
        <Typography variant="bodyXS">Body Extra Small - The quick brown fox</Typography>
      </Flex>

      <Spacer size={12} />
      <Divider />
      <Spacer size={12} />

      <Typography variant="h5">Color Palette</Typography>
      <Spacer size={4} />

      <Flex direction="row" gap="8px" wrap="wrap">
        {(['c6', 'c8', 'c9', 'c7', 'c10', 'c13', 'c16'] as const).map((c) => (
          <div
            key={c}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: theme.token.borderRadiusS,
              backgroundColor: theme.token.color[c],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="bodyXS" style={{ color: '#fff' }}>{c}</Typography>
          </div>
        ))}
      </Flex>
    </div>
  );
}
