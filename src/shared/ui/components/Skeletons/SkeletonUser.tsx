import { ListItem } from '@/shared/ui/vivid-ui/components/ListItem';
import { Skeleton } from '@/shared/ui/vivid-ui/components/Skeleton';

export const SkeletonUser = () => {
  return (
    <ListItem
      label={<Skeleton animated height={14} variant="rounded" width={100} />}
      leftIcon={<Skeleton animated height={40} variant="circular" width={40} />}
      size="medium"
      title={<Skeleton animated height={18} variant="rounded" width={200} />}
    />
  );
};
