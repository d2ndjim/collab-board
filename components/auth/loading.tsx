import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-y-4">
      <Image
        className="animate-pulse duration-700"
        src="/butterflies@2x.png"
        alt="Logo"
        width={120}
        height={120}
      />
    </div>
  );
};
