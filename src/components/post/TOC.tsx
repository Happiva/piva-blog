import { Heading } from '@/types';

interface TOCProps {
  tocData: Heading[];
}

const tocStyle: { [key: number]: string } = {
  1: 'pl-[0px] font-bold',
  2: 'pl-[4px]',
  3: 'pl-[8px]',
  4: 'pl-[12px]',
};

const TOC = ({ tocData }: TOCProps) => {
  return (
    <div className="card flex flex-col fixed rounded-[10px] h-fit ml-[16px] p-[12px] text-[14px] gap-y-1">
      {tocData.map((el) => {
        const ref = el.text
          .toLocaleLowerCase()
          .replace(/[^\w\sㄱ-힣-]/g, ' ')
          .trimStart()
          .replaceAll(' ', '-');

        return (
          <a href={`#${ref}`} key={el.text} className={tocStyle[el.level]}>
            {el.text}
          </a>
        );
      })}
    </div>
  );
};

export default TOC;
