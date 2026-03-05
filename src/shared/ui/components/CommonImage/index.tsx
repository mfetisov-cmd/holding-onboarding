import Image, { ImageProps } from 'next/image';

export enum CommonImageName {
  baloon = 'baloon',
  bin = 'bin',
  bookkeeping = 'bookkeeping',
  cards = 'cards',
  cards_delivery = 'cards_delivery',
  cardWithoutCash = 'cardWithoutCash',
  cashback = 'cashback',
  coins = 'coins',
  compass = 'compass',
  crypto_placeholder = 'crypto_placeholder',
  done_dots = 'done_dots',
  error_dots = 'error_dots',
  eyes = 'eyes',
  flash = 'flash',
  hourglass = 'hourglass',
  info3d = 'info3d',
  loading = 'loading',
  lock = 'lock',
  mail_new = 'mail_new',
  migration_sa_welcome_2 = 'migration_sa_welcome_2',
  money_pocket = 'money_pocket',
  multi_currency = 'multi_currency',
  payment_link = 'payment_link',
  percent = 'percent',
  person = 'person',
  plan_plus = 'plan_plus',
  prime = 'prime',
  refresh = 'refresh',
  reject = 'reject',
  reject3d = 'reject3d',
  salaryMoney = 'salary_money',
  simpleCalendar3d = 'simple_calendar',
  snowflake = 'snowflake',
  spinning = 'spinning',
  star = 'star',
  success = 'success',
  success3d = 'success3d',
  suitcase = 'suitcase',
  sun = 'sun',
  taxes = 'taxes',
  terminal = 'terminal',
  transfer = 'transfer',
  user = 'user',
  warning = 'warning',
  warning3d = 'warning3d',
  watch3d = 'watch',
}

const commonImageFiles: Record<
  CommonImageName,
  `${string}.png` | `${string}.webp`
> = {
  [CommonImageName.baloon]: 'baloon.webp',
  [CommonImageName.bin]: 'bin.png',
  [CommonImageName.bookkeeping]: 'bookkeeping.webp',
  [CommonImageName.cards]: 'cards.png',
  [CommonImageName.cards_delivery]: 'cards_delivery.png',
  [CommonImageName.cardWithoutCash]: 'card_without_cash.webp',
  [CommonImageName.cashback]: 'cashback.png',
  [CommonImageName.coins]: 'coins.png',
  [CommonImageName.compass]: 'compass.png',
  [CommonImageName.crypto_placeholder]: 'crypto_placeholder.webp',
  [CommonImageName.done_dots]: 'done_dots.png',
  [CommonImageName.error_dots]: 'error_dots.png',
  [CommonImageName.eyes]: 'eyes.png',
  [CommonImageName.flash]: 'flash.png',
  [CommonImageName.hourglass]: 'hourglass.png',
  [CommonImageName.info3d]: '3d/info.webp',
  [CommonImageName.loading]: 'loading.webp',
  [CommonImageName.lock]: 'lock.png',
  [CommonImageName.mail_new]: 'mail_new.png',
  [CommonImageName.migration_sa_welcome_2]: 'migration_sa_welcome_2.png',
  [CommonImageName.money_pocket]: 'money_pocket.png',
  [CommonImageName.multi_currency]: 'multi_currency.webp',
  [CommonImageName.payment_link]: 'payment_link.png',
  [CommonImageName.percent]: 'percent.png',
  [CommonImageName.person]: 'person.png',
  [CommonImageName.plan_plus]: 'plan_plus.png',
  [CommonImageName.prime]: 'prime.png',
  [CommonImageName.refresh]: 'refresh.png',
  [CommonImageName.reject]: 'reject.png',
  [CommonImageName.reject3d]: '3d/reject.webp',
  [CommonImageName.salaryMoney]: 'salary_money.webp',
  [CommonImageName.simpleCalendar3d]: '3d/simple_calendar.webp',
  [CommonImageName.snowflake]: 'snowflake.png',
  [CommonImageName.spinning]: 'spinning.webp',
  [CommonImageName.star]: 'star.png',
  [CommonImageName.success]: 'success.webp',
  [CommonImageName.success3d]: '3d/success.webp',
  [CommonImageName.suitcase]: 'suitcase.png',
  [CommonImageName.sun]: 'sun.png',
  [CommonImageName.taxes]: 'taxes.webp',
  [CommonImageName.terminal]: 'terminal.png',
  [CommonImageName.transfer]: 'transfer.png',
  [CommonImageName.user]: 'user.png',
  [CommonImageName.warning]: 'warning.png',
  [CommonImageName.warning3d]: '3d/warning.webp',
  [CommonImageName.watch3d]: '3d/watch.webp',
};

type CommonImageProps = Omit<ImageProps, 'alt' | 'src'> & {
  alt?: string;
  image: CommonImageName;
  size?: number;
};

export const CommonImage = ({
  alt,
  fill,
  image,
  size: sizeProp,
  ...restProps
}: CommonImageProps) => {
  const size = sizeProp === undefined && !fill ? 200 : sizeProp;

  return (
    <Image
      alt={alt || image}
      fetchPriority="high"
      fill={fill}
      height={size}
      quality={100}
      src={`/images/common/${commonImageFiles[image]}`}
      style={{ objectFit: 'cover' }}
      width={size}
      {...restProps}
    />
  );
};
