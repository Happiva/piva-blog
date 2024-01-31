interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  type: 'h1' | 'h2' | 'h3';
}

const Heading = ({ type, children }: HeadingProps) => {
  const id = children
    ?.toString()
    .toLocaleLowerCase()
    .replace(/[^\w\s]/g, '')
    .replaceAll(' ', '-');

  if (type === 'h1') {
    return <h1 id={id}>{children}</h1>;
  }

  if (type === 'h2') {
    return <h2 id={id}>{children}</h2>;
  }

  return <h3 id={id}>{children}</h3>;
};

export default Heading;
