import sanitizeHtml from 'sanitize-html';

import {
  Typography,
  TypographyProps,
} from '@/shared/ui/vivid-ui/components/Typography';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

export type SafeHtmlProps = TypographyProps & {
  html?: string;
};

export const _SafeHtml = ({ html, ...props }: SafeHtmlProps) => (
  <Typography
    {...props}
    dangerouslySetInnerHTML={{ __html: sanitizeHtml(html || '') }}
  />
);

export const SafeHtml = createPolymorphicComponent<'span', SafeHtmlProps>(
  _SafeHtml,
);
