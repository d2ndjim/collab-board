import { Canvax } from "./_components/canvax";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({params}: BoardIdPageProps) => {
  return <Canvax boardId={params.boardId} />;
};

export default BoardIdPage;
