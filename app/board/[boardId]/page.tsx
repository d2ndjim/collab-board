import { Room } from "@/components/room";
import { Canvax } from "./_components/canvax";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvax boardId={params.boardId} />;
    </Room>
  );
};

export default BoardIdPage;
