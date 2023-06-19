import twMerge from "@/twMerge";
import IPropsWithClassName from "@interfaces/IPropsWithClassName";

export default function Rainbow(props: IPropsWithClassName) {
  return (
    <div className={twMerge("flex h-full w-full", props.className)}>
      <div className="flex-1 bg-[#5461C9]" />
      <div className="flex-1 bg-[#C724B1]" />
      <div className="flex-1 bg-[#E5002B]" />
      <div className="flex-1 bg-[#FF6900]" />
      <div className="flex-1 bg-[#F5BE01]" />
      <div className="flex-1 bg-[#96D700]" />
      <div className="flex-1 bg-[#00AA83]" />
      <div className="flex-1 bg-[#00A2E0]" />
    </div>
  );
}
