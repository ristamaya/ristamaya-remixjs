import WorkOnIt from "~/components/workonit";

export default function Setup() {
  return (
    <>
      <div className="flex h-10 w-screen items-center justify-between bg-theme-fill px-2"></div>
      <div
        id="MainContent"
        className="fixed h-[calc(100%-40px)] w-full overflow-auto bg-theme-muted"
      >
        <WorkOnIt text="Setup" />
      </div>
    </>
  );
}
