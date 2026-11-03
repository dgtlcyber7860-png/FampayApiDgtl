export default function TabSwitcher({ tab, setTab }) {
  return (
    <div className="flex p-1 bg-black/20 dark:bg-black/40 rounded-2xl border border-black/10 dark:border-white/[0.08] mb-6 relative">
      <button
        type="button"
        onClick={() => setTab('signin')}
        className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl transition-all relative z-10 cursor-pointer ${
          tab === 'signin'
            ? 'text-purple-700 dark:text-purple-300 font-extrabold'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m10 17 5-5-5-5"></path>
          <path d="M15 12H3"></path>
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
        </svg>
        <span>Sign In</span>
      </button>

      <button
        type="button"
        onClick={() => setTab('register')}
        className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl transition-all relative z-10 cursor-pointer ${
          tab === 'register'
            ? 'text-purple-700 dark:text-purple-300 font-extrabold'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <line x1="19" x2="19" y1="8" y2="14"></line>
          <line x1="22" x2="16" y1="11" y2="11"></line>
        </svg>
        <span>Register</span>
      </button>

      <div
        className="absolute top-1 bottom-1 rounded-xl liquid-dock border border-purple-400/40 shadow-md shadow-purple-900/40 transition-all duration-300"
        style={{
          left: tab === 'signin' ? '4px' : 'calc(50% + 0px)',
          width: 'calc(50% - 4px)',
        }}
      />
    </div>
  );
}