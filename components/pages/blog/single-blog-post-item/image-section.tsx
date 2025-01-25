import exp from "constants";
import { BlogPostType } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { shimmer, toBase64 } from "utils/helpers";

const ImageSection: FC<{ post: BlogPostType }> = ({ post }) => {
  return (
    <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
      <Image
        src={post.image ?? "/images/cover-photo.jpg"}
        alt={post.title ?? "Cover"}
        height={256}
        width={256}
        priority
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(256, 256))}`}
        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </div>
  );
};

export default ImageSection;
