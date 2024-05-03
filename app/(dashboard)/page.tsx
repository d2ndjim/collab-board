import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div>This is an authenticated screen</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default DashboardPage;
