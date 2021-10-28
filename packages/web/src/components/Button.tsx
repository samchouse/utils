interface Props {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }: Props) => {
  return (
    <button className="mx-[6px] mt-[8px] w-48 h-10 text-center text-gray-50 text-xl font-bold bg-brand rounded">
      {children}
    </button>
  );
};

export default Button;
