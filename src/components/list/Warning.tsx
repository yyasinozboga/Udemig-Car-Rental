type Props = {
  children: String | JSX.Element;
};

const Warning = ({ children }: Props) => {
  return <h1 className="font-medium text-5xl mx-auto mt-10">{children}</h1>;
};

export default Warning;
