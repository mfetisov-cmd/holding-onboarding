import type { Meta, StoryObj } from '@storybook/react';

import { ComponentProps, useEffect, useState } from 'react';

import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { TabContent } from '@/shared/ui/vivid-ui/drafts/TabsList/TabContent';

import { TabsList } from './TabsList';

const StateFullTabList = (args: ComponentProps<typeof TabsList>) => {
  const [selectedTabKey, setSelectedTabKey] = useState<string>(
    typeof args?.selectedTabKey === 'string'
      ? args?.selectedTabKey
      : String(args.tabsList[0].key) || '',
  );

  useEffect(() => {
    setSelectedTabKey(String(args.tabsList[0].key));
  }, [args.tabsList]);

  const handleChangeTabKey = (key: string) => {
    setSelectedTabKey(key);
    args?.onSelectedTabChange?.(key);
  };

  return (
    <div>
      <TabsList
        selectedTabKey={selectedTabKey}
        tabsList={args.tabsList as any}
        onSelectedTabChange={handleChangeTabKey}
      />
      <Spacer size={2} />
      <TabContent key={selectedTabKey} selectedTabKey={selectedTabKey}>
        {
          (args?.tabsList as any[] | undefined)?.find(
            (it) => it?.key === selectedTabKey,
          )?.title
        }
      </TabContent>
    </div>
  );
};

const meta: Meta<typeof StateFullTabList> = {
  component: StateFullTabList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StateFullTabList>;

export const Default: Story = {
  args: {
    onSelectedTabChange: console.log,
    selectedTabKey: 'bill-inbox',
    tabsList: [
      {
        key: 'bill-inbox',
        title: 'Bill inbox · 9',
      },
      {
        key: 'pending-approval',
        title: 'Pending approval · 4',
      },
      {
        key: 'scheduled',
        title: 'Scheduled transfers · 12',
      },
    ],
  },
};
