import type { Meta, StoryObj } from '@storybook/react';

import { ArrowDown24, ArrowUp24 } from '@/shared/ui/vivid-ui/components/Icons';

import { AccordionToggleButton } from './AccordionToggleButton';
import { Accordion, AccordionContent } from './index';

const meta: Meta<typeof Accordion> = {
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Optional CSS class to apply to the accordion',
    },
    defaultExpanded: {
      control: { type: 'boolean' },
      description: 'Whether the accordion is initially expanded',
    },
  },
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

/**
 * Basic accordion with default behavior
 */
export const Basic: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Accordion>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          <AccordionToggleButton>
            <h3>Accordion Title</h3>
          </AccordionToggleButton>
        </div>
        <AccordionContent>
          <p>
            This is the accordion content that can be expanded and collapsed. It
            demonstrates the basic functionality of the Accordion component.
          </p>
        </AccordionContent>
      </Accordion>
    </div>
  ),
};

/**
 * Accordion initially expanded
 */
export const InitiallyExpanded: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Accordion defaultExpanded={true}>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          <AccordionToggleButton>
            <h3>Expanded by Default</h3>
          </AccordionToggleButton>
        </div>
        <AccordionContent>
          <p>
            This accordion is expanded by default when it first renders. You can
            use the defaultExpanded prop to control this behavior.
          </p>
        </AccordionContent>
      </Accordion>
    </div>
  ),
};

/**
 * Accordion with custom toggle icons
 */
export const WithCustomIcons: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Accordion>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          <AccordionToggleButton
            collapsedIcon={<ArrowDown24 size={16} />}
            expandedIcon={<ArrowUp24 size={16} />}
          >
            <h3>Custom Toggle Icons</h3>
          </AccordionToggleButton>
        </div>
        <AccordionContent>
          <p>
            This example shows how to customize the toggle button icons. You can
            provide your own icons for both the expanded and collapsed states.
          </p>
        </AccordionContent>
      </Accordion>
    </div>
  ),
};

/**
 * Multiple accordions example
 */
export const MultipleAccordions: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Accordion className="mb-4">
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          <AccordionToggleButton>
            <h3>First Accordion</h3>
          </AccordionToggleButton>
        </div>
        <AccordionContent>
          <p>Content for the first accordion.</p>
        </AccordionContent>
      </Accordion>

      <Accordion className="mb-4">
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          <AccordionToggleButton>
            <h3>Second Accordion</h3>
          </AccordionToggleButton>
        </div>
        <AccordionContent>
          <p>Content for the second accordion.</p>
        </AccordionContent>
      </Accordion>

      <Accordion>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          <AccordionToggleButton>
            <h3>Third Accordion</h3>
          </AccordionToggleButton>
        </div>
        <AccordionContent>
          <p>Content for the third accordion.</p>
        </AccordionContent>
      </Accordion>
    </div>
  ),
};
