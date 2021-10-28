import Link from 'next/link';

type Props = { href: string } & Omit<
  React.HTMLProps<HTMLAnchorElement>,
  'href'
>;

const Button: React.FC<Props> = ({
  href,
  className,
  children,
  ...props
}: Props) => {
  return (
    <div>
      <Link passHref href={href}>
        <a
          className={`mx-[6px] mt-[8px] block py-1 pb-2 w-48 text-center text-gray-50 text-xl font-bold bg-brand hover:bg-transparent focus:bg-transparent border-2 border-brand rounded focus:outline-none box-border transition duration-200 ${
            className ?? ''
          }`}
          {...props}
        >
          {children}
        </a>
      </Link>
    </div>
  );
};

export default Button;
