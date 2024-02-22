import { Heading } from '@/types';

interface TOCProps {
  tocData: Heading[];
}

const TOC = ({ tocData }: TOCProps) => {
  return (
    <div className="card flex flex-col fixed rounded-[10px] h-fit ml-[16px] p-[12px] text-[14px] gap-y-1">
      {tocData.map((el) => {
        const ref = el.text
          .toLocaleLowerCase()
          .replace(/[^\w\s]/g, '')
          .trimStart()
          .replaceAll(' ', '-');
        const tocStyle = `ml-[${(el.level - 1) * 4}px]${
          el.level === 1 ? ' font-bold' : ''
        }`;

        return (
          <a href={`#${ref}`} key={el.text} className={tocStyle}>
            {el.text}
          </a>
        );
      })}
    </div>
  );
};

export default TOC;
