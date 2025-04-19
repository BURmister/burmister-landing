import parse from 'html-react-parser';

const Text = ({ children, data, className, isHtml }) => {
   return <p className={`text-pretty ${className && className}`}>{data ? (isHtml ? parse(data) : data) : children}</p>;
};

export default Text;
