import quota from "../../assets/quota.svg";

export function Header() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
            <img src={quota} alt="" />
          </div>
          <h1 className="leading-none">Quota</h1>
        </div>
      </div>
    </header>
  );
}
