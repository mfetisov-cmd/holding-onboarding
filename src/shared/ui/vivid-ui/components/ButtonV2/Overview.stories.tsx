import type { Meta, StoryObj } from '@storybook/react';

import styled, { useTheme } from 'styled-components';

import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import {
  ArrowRight24,
  Flash24,
  Income24,
  MoreVertical24,
  Send24,
} from '@/shared/ui/vivid-ui/components/Icons';
import { Flex } from '@/shared/ui/vivid-ui/components/Layout';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

import { Button, ButtonGroup } from './index';

const Row = styled.div<{ $count?: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$count || 3}, 1fr);
  gap: ${(props) => props.theme.token.spacingM};
`;

const FIGMA_LINK =
  'https://www.figma.com/design/4YO3FXVNBSrFOna4sENVxf/%5BLibrary%5D-Web-UI?node-id=7254-7387&m=dev';

const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const ButtonOverview = () => {
  const theme = useTheme();

  const { execute: onAsyncClick, isLoading: loading } = useAsyncFunction(
    async () => await wait(5000),
  );

  return (
    <Flex direction="column" gap="40px" wrap="wrap">
      <div>
        <div>
          <Typography variant="h4">Component Structure</Typography>
          <Spacer size={2} />
          <Typography
            component="a"
            href={FIGMA_LINK}
            style={{ color: theme.token.color.c6, cursor: 'pointer' }}
            variant="bodyXS"
          >
            See full specification in Figma
          </Typography>
          <Spacer size={8} />
          <Typography variant="bodyMAcc">
            The component is available in 3 sizes
          </Typography>
          <Spacer size={4} />
          <Row>
            <div>
              <Typography variant="bodySAcc">Large</Typography>
              <Spacer size={1} />
              <Button
                LeftIconComponent={Flash24}
                placeholderAction="Placeholder Action"
                placeholderLabel="Placeholder Label"
                size="large"
                variant="ghost"
              />
            </div>
            <div>
              <Typography variant="bodySAcc">Medium</Typography>
              <Spacer size={1} />
              <Button
                LeftIconComponent={Flash24}
                placeholderAction="Placeholder Action"
                placeholderLabel="Placeholder Label"
                size="medium"
                variant="ghost"
              />
            </div>
            <div>
              <Typography variant="bodySAcc">Small</Typography>
              <Spacer size={1} />
              <Button
                LeftIconComponent={Flash24}
                placeholderAction="Placeholder Action"
                size="small"
                variant="ghost"
              />
            </div>
          </Row>
        </div>
        <div>
          <Spacer size={4} />
          <Typography variant="bodyMAcc">Buttons resize</Typography>
          <Spacer size={4} />
          <ButtonGroup type="vertical">
            <div style={{ overflow: 'hidden', width: '130px' }}>
              <Button
                LeftIconComponent={Flash24}
                loading={loading}
                size="large"
                variant="primary"
                onClick={onAsyncClick}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Button>
            </div>
            <div style={{ overflow: 'hidden', width: '50%' }}>
              <Button
                LeftIconComponent={Flash24}
                loading={loading}
                size="large"
                variant="primary"
                onClick={onAsyncClick}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Button>
            </div>
            <Button
              fullWidth
              LeftIconComponent={Flash24}
              loading={loading}
              size="large"
              variant="primary"
              onClick={onAsyncClick}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <Spacer size={4} />
          <Typography variant="bodyMAcc">
            By adjusting the visibility of each slot, you can achieve greater
            flexibility
          </Typography>
          <Spacer size={4} />
          <ButtonGroup type="horizontal">
            <Button
              LeftIconComponent={Send24}
              loading={loading}
              placeholderAction="Send payment"
              size="large"
              variant="primary"
              onClick={onAsyncClick}
            />
            <Button
              loading={loading}
              placeholderAction="Send payment"
              size="large"
              variant="primary"
              onClick={onAsyncClick}
            />
            <Button
              loading={loading}
              placeholderAction="Send payment"
              RightIconComponent={ArrowRight24}
              size="large"
              variant="primary"
              onClick={onAsyncClick}
            />
            <Button
              loading={loading}
              placeholderAction="Send payment"
              placeholderLabel="1.000 €"
              RightIconComponent={ArrowRight24}
              size="large"
              variant="primary"
              onClick={onAsyncClick}
            />
            <Button
              loading={loading}
              RightIconComponent={Send24}
              size="large"
              variant="primary"
              onClick={onAsyncClick}
            />
          </ButtonGroup>
        </div>
      </div>
      <div>
        <Spacer size={4} />
        <Typography variant="h4">Button types</Typography>
        <Spacer size={4} />
        <Flex direction="row" gap="40px" wrap="wrap">
          <div>
            <Typography variant="bodySAcc">Primary</Typography>
            <Spacer size={2} />
            <ButtonGroup type="horizontal">
              <Button
                LeftIconComponent={Income24}
                loading={loading}
                size="medium"
                variant="primary"
                onClick={onAsyncClick}
              >
                Add money
              </Button>
              <Button
                LeftIconComponent={Income24}
                loading={loading}
                size="medium"
                variant="primary"
                onClick={onAsyncClick}
              />
            </ButtonGroup>
          </div>
          <div>
            <Typography variant="bodySAcc">Secondary</Typography>
            <Spacer size={2} />
            <ButtonGroup type="horizontal">
              <Button
                LeftIconComponent={Income24}
                loading={loading}
                size="medium"
                variant="secondary"
                onClick={onAsyncClick}
              >
                Add money
              </Button>
              <Button
                LeftIconComponent={Income24}
                loading={loading}
                size="medium"
                variant="secondary"
                onClick={onAsyncClick}
              />
            </ButtonGroup>
          </div>
          <div>
            <Typography variant="bodySAcc">Ghost</Typography>
            <Spacer size={2} />
            <ButtonGroup type="horizontal">
              <Button
                LeftIconComponent={Income24}
                loading={loading}
                size="medium"
                variant="ghost"
                onClick={onAsyncClick}
              >
                Add money
              </Button>
              <Button
                LeftIconComponent={Income24}
                loading={loading}
                size="medium"
                variant="ghost"
                onClick={onAsyncClick}
              />
            </ButtonGroup>
          </div>
          <div>
            <Typography variant="bodySAcc">Destructive</Typography>
            <Spacer size={2} />
            <ButtonGroup type="horizontal">
              <Button
                LeftIconComponent={Income24}
                loading={loading}
                size="medium"
                variant="destructive"
                onClick={onAsyncClick}
              >
                Add money
              </Button>
              <Button
                LeftIconComponent={Income24}
                loading={loading}
                size="medium"
                variant="destructive"
                onClick={onAsyncClick}
              />
            </ButtonGroup>
          </div>
          <div>
            <Typography variant="bodySAcc">Shimmer</Typography>
            <Spacer size={2} />
            <ButtonGroup type="horizontal">
              <Button
                LeftIconComponent={Income24}
                loading={loading}
                size="medium"
                variant="shimmer"
                onClick={onAsyncClick}
              >
                Add money
              </Button>
              <Button
                LeftIconComponent={Income24}
                loading={loading}
                size="medium"
                variant="shimmer"
                onClick={onAsyncClick}
              />
            </ButtonGroup>
          </div>
          <div>
            <Typography variant="bodySAcc">
              Loading (for async actions)
            </Typography>
            <Spacer size={2} />
            <ButtonGroup type="horizontal">
              <Button
                LeftIconComponent={Income24}
                loading
                size="medium"
                variant="primary"
              >
                Add money
              </Button>
              <Button
                LeftIconComponent={Income24}
                loading
                size="medium"
                variant="primary"
              />
            </ButtonGroup>
          </div>
        </Flex>
      </div>
      <div>
        <Spacer size={4} />
        <Typography variant="h4">Corners: semi-rounded</Typography>
        <Spacer size={4} />
        <Flex direction="column" gap="16px" wrap="wrap">
          <ButtonGroup type="horizontal">
            <Button LeftIconComponent={Income24} size="large" variant="primary">
              Add money
            </Button>
            <Button LeftIconComponent={Send24} size="large" variant="secondary">
              Send Payment
            </Button>
            <Button
              LeftIconComponent={MoreVertical24}
              size="large"
              variant="ghost"
            >
              More
            </Button>
          </ButtonGroup>
          <ButtonGroup type="horizontal">
            <Button
              LeftIconComponent={Income24}
              size="medium"
              variant="primary"
            >
              Add money
            </Button>
            <Button
              LeftIconComponent={Send24}
              size="medium"
              variant="secondary"
            >
              Send Payment
            </Button>
            <Button
              LeftIconComponent={MoreVertical24}
              size="medium"
              variant="ghost"
            >
              More
            </Button>
          </ButtonGroup>
          <ButtonGroup type="horizontal">
            <Button LeftIconComponent={Income24} size="small" variant="primary">
              Add money
            </Button>
            <Button LeftIconComponent={Send24} size="small" variant="secondary">
              Send Payment
            </Button>
            <Button
              LeftIconComponent={MoreVertical24}
              size="small"
              variant="ghost"
            >
              More
            </Button>
          </ButtonGroup>
        </Flex>
      </div>
      <div>
        <Spacer size={4} />
        <Typography variant="h4">Corners: fully rounded</Typography>
        <Spacer size={4} />
        <div>
          <Flex direction="column" gap="16px" wrap="wrap">
            <ButtonGroup type="horizontal">
              <Button
                corners="fully-rounded"
                LeftIconComponent={Income24}
                size="large"
                variant="primary"
              />
              <Button
                corners="fully-rounded"
                LeftIconComponent={Send24}
                size="large"
                variant="secondary"
              />
              <Button
                corners="fully-rounded"
                LeftIconComponent={MoreVertical24}
                size="large"
                variant="ghost"
              />
            </ButtonGroup>
            <ButtonGroup type="horizontal">
              <Button
                corners="fully-rounded"
                LeftIconComponent={Income24}
                size="medium"
                variant="primary"
              />
              <Button
                corners="fully-rounded"
                LeftIconComponent={Send24}
                size="medium"
                variant="secondary"
              />
              <Button
                corners="fully-rounded"
                LeftIconComponent={MoreVertical24}
                size="medium"
                variant="ghost"
              />
            </ButtonGroup>
            <ButtonGroup type="horizontal">
              <Button
                corners="fully-rounded"
                LeftIconComponent={Income24}
                size="small"
                variant="primary"
              />
              <Button
                corners="fully-rounded"
                LeftIconComponent={Send24}
                size="small"
                variant="secondary"
              />
              <Button
                corners="fully-rounded"
                LeftIconComponent={MoreVertical24}
                size="small"
                variant="ghost"
              />
            </ButtonGroup>
          </Flex>
        </div>
      </div>
      <div>
        <Spacer size={4} />
        <Typography variant="h4">Button groups</Typography>
        <Spacer size={4} />
        <div>
          <Flex direction="row" gap="40px" grow="1" wrap="wrap">
            <div>
              <Typography variant="bodyMAcc">Horizontal</Typography>
              <Spacer size={4} />
              <ButtonGroup type="horizontal">
                <Button size="large" variant="primary">
                  Add money
                </Button>
                <Button size="large" variant="secondary">
                  Send Payment
                </Button>
                <Button size="large" variant="ghost">
                  More
                </Button>
              </ButtonGroup>
            </div>
            <div>
              <Typography variant="bodyMAcc">Vertical</Typography>
              <Spacer size={4} />
              <ButtonGroup type="vertical">
                <Button fullWidth size="large" variant="primary">
                  Add money
                </Button>
                <Button fullWidth size="large" variant="secondary">
                  Send Payment
                </Button>
                <Button fullWidth size="large" variant="ghost">
                  More
                </Button>
              </ButtonGroup>
            </div>
          </Flex>
        </div>
      </div>
    </Flex>
  );
};

const meta: Meta<typeof ButtonOverview> = {
  argTypes: {},
  component: ButtonOverview,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonOverview>;

export const Default: Story = {
  args: {},
};
