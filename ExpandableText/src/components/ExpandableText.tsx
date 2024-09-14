import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: ExpandableTextProps) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
