export default function AuthCard({ children, title, subtitle, logo }) {
  return (
    <div className="px-6 flex flex-col items-start md:px-20 md:w-1/2 w-full m-auto p-16 rounded-md border border-zinc-900 border-opacity-5">
      {logo && <img src={logo} alt="logo" className="mb-10" />}
      <h1 className="lg:text-3xl tracking-tight text-stone-950 text-2xl font-bold leading-9">
        {title}
      </h1>
      <p className="leading-snug tracking-tight mt-2 text-neutral-400 text-sm font-light">
        {subtitle}
      </p>
      {children}
    </div>
  );
}
