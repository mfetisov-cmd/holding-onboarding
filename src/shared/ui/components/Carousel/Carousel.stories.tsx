import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './Carousel';

/**
 * A reusable carousel component that supports mouse and touch swiping, navigation arrows, and pagination dots.
 *
 * ## Features
 *
 * - Mouse and touch swipe navigation
 * - Navigation arrows
 * - Pagination dots
 * - Configurable number of items per page
 * - Configurable gap between items
 * - Smooth animations and transitions
 */
const meta: Meta<typeof Carousel> = {
  argTypes: {
    gap: {
      control: { max: 32, min: 0, type: 'number' },
      description: 'Gap between carousel items in size units',
      table: {
        defaultValue: { summary: '8' },
        type: { summary: 'number' },
      },
    },
    items: {
      control: 'object',
      description: 'Array of React nodes to display as carousel items',
      table: {
        type: { summary: 'ReactNode[]' },
      },
    },
    itemsToShow: {
      control: { max: 10, min: 1, type: 'number' },
      description: 'Number of items to show per page',
      table: {
        defaultValue: { summary: '1' },
        type: { summary: 'number' },
      },
    },
    showDots: {
      control: 'boolean',
      description: 'Whether to show navigation dots',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
  },
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component:
          'A reusable carousel component that supports mouse and touch swiping, navigation arrows, and pagination dots.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Components/Carousel',
};

export default meta;

type Story = StoryObj<typeof Carousel>;

// Helper function to create styled slides
const createStyledSlides = (count: number, height: string = '200px') => {
  const colors = [
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightseagreen',
    'lightsalmon',
    'lightyellow',
  ];

  return Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      style={{
        alignItems: 'center',
        backgroundColor: colors[i % colors.length],
        borderRadius: '8px',
        display: 'flex',
        fontSize: '24px',
        fontWeight: 'bold',
        height,
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div>
        <p>Slide {i + 1}</p>
        <p style={{ fontSize: '14px' }}>Text</p>
      </div>
    </div>
  ));
};

/**
 * Default carousel with multiple items per page
 */
export const Default: Story = {
  args: {
    gap: 16,
    items: createStyledSlides(9),
    itemsToShow: 3,
    showDots: true,
  },
};

/**
 * Single item per page carousel
 */
export const SingleItem: Story = {
  args: {
    gap: 8,
    items: createStyledSlides(5, '300px'),
    itemsToShow: 1,
    showDots: true,
  },
};

/**
 * Carousel with many items and small gap
 */
export const ManyItems: Story = {
  args: {
    gap: 4,
    items: createStyledSlides(12),
    itemsToShow: 4,
    showDots: true,
  },
};

/**
 * Carousel without navigation dots
 */
export const WithoutDots: Story = {
  args: {
    gap: 16,
    items: createStyledSlides(6),
    itemsToShow: 2,
    showDots: false,
  },
};
