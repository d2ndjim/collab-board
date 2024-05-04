"use client";

import { EmptyBoard } from "./empty-board";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

interface BoardlistProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}
export const BoardList = ({ orgId, query }: BoardlistProps) => {
  const data = [];

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) return <EmptyFavorites />;

  if (!data?.length) {
    return <EmptyBoard />;
  }

  return (
    <div>
      {JSON.stringify(query)}
    </div>
  )
};