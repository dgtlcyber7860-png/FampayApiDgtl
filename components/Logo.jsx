export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-700 flex items-center justify-center shadow-md shadow-purple-500/30">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white fill-white/20" aria-hidden="true">
          <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"></path>
        </svg>
      </div>
      <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white">
        FamPay<span className="text-purple-600 dark:text-purple-400">Api</span>
      </span>
    </div>
  );
}