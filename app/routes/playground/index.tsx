function Playground() {
  return (
    <>
      <div className="flex h-10 w-screen items-center justify-between bg-theme-fill px-2"></div>
      <div id="MainContent" className="fixed h-[calc(100%-40px)] w-full overflow-auto bg-theme-muted">
        <div className="m-auto p-5 text-center text-4xl text-theme-base">
          Let's explore my Playground
          <img src="/img/playground.png" className="my-6 mx-auto object-fill" />
          Have Fun!
        </div>
      </div>
    </>
  );
}

export default Playground;
