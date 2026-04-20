export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2A2A2A] py-8">
      <div className="container-x flex flex-wrap justify-between items-center gap-4">
        <p className="text-[13px] text-[#A0A0A0] max-w-[300px]">
          I bring innovative ideas to life through my designs and collaborations.
        </p>
        <p className="text-[13px] text-[#A0A0A0] whitespace-nowrap">
          Copyright © Baskara {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
