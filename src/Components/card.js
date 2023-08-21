export default function Card({ title, content }) {
  return (
    <div className="group rounded-md border border-slate-100 bg-slate-800 text-slate-200 px-5 py-4 !group-hover:-translate-y-5">
      <h2 className="mb-3 text-2xl font-semibold">
        <span className="tracking-widest">{title}</span>
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50  tracking-widest">
        {content}
      </p>
    </div>
  );
}
