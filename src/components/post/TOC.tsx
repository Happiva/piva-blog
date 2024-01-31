import { Heading } from '@/types';

interface TOCProps {
  tocData: Heading[];
}

const TOC = ({ tocData }: TOCProps) => {
  return (
    <div className="flex flex-col">
      {tocData.map((el) => {
        const ref = el.text
          .toLocaleLowerCase()
          .replace(/[^\w\s]/g, '')
          .trimStart()
          .replaceAll(' ', '-');

        return (
          <a href={`#${ref}`} key={el.text}>
            {el.text}
          </a>
        );
      })}
    </div>
  );
};

export default TOC;
