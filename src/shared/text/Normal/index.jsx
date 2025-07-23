import parse from 'html-react-parser';
import { preprocessHTML } from '@hooks/html';

const Text = ({ children, data, className, isHtml, ...props }) => {
   return (
      <p className={`text-pretty ${className && className}`} {...props}>
         {data ? (isHtml ? parse(preprocessHTML(data)) : data) : children}
      </p>
   );
};

export default Text;
