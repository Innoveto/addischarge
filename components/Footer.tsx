export default function Footer() {
  return (
    <footer className="border-t border-charcoal-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ethio-green text-[10px] font-bold text-white">
            AC
          </span>
          <div>
            <p className="text-sm font-semibold text-white">AddisCharge</p>
            <p className="text-xs text-muted">
              Demo · Innoveto · not a live network
            </p>
          </div>
        </div>
        <p className="text-xs text-muted">
          Built as a product exploration microsite. No real stations, payments,
          or map APIs.
        </p>
      </div>
    </footer>
  );
}
