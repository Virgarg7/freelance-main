import { MdInput, MdOutput } from "react-icons/md";
import { AiFillMerge } from "react-icons/ai";
import { RiText } from "react-icons/ri";
import { FaRandom } from "react-icons/fa";

const ICON = {
  input: MdInput,
  output: MdOutput,
  llm: AiFillMerge,
  text: RiText,
};
export const Icons = ({ name, size, color }) => {
  const IconComponent = ICON[name];
  if (!IconComponent) {
    return <FaRandom size={size} color={color} />;
  }
  return <IconComponent size={size} color={color} />;
};
