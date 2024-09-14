interface ExpandableTextProps {
  children: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  return <div>{children}</div>;
};

export default ExpandableText;
