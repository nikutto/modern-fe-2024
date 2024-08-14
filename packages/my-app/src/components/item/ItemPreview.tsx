import Image from "next/image";
import Link from "next/link";

type ItemPreviewProps = {
  title: string;  
  imageSrc: string;
  detailPageUrl: string;
  size: number;
};

export const ItemPreview = (props: ItemPreviewProps) => (
  <div className="p-3 border rounded">
    <Link href={props.detailPageUrl}>
      <Image
        src={props.imageSrc} alt={props.title} width={props.size} height={props.size}
      />
      <div className="my-1">
        {props.title}
      </div>
    </Link>
  </div>
)
