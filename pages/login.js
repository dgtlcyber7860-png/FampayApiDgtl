import { useState } from 'react';
import BackHomeLink from '../components/BackHomeLink';
import ThemeToggle from '../components/ThemeToggle';
import Logo from '../components/Logo';
import TabSwitcher from '../components/TabSwitcher';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default function LoginPage() {
  const [tab, setTab] = useState('signin');

  return (
    <>
      <div className="liquid-atmosphere" aria-hidden="true"></div>
      <div className="liquid-mesh-grid" aria-hidden="true"></div>

      <div className="relative z-10 min-h-screen">
        <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 relative">
          <div className="w-full max-w-[440px] relative z-10 animate-fadeUp">
            <div className="liquid-glass-elevated rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10">

              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <BackHomeLink />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Logo />
                </div>
              </div>

              {/* Title */}
              <div className="mb-6">
                <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Merchant Portal
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  Sign in to access live UPI transactions, configure IMAP automation, and view API keys.
                </p>
              </div>

              {/* Tabs */}
              <TabSwitcher tab={tab} setTab={setTab} />

              {/* Forms */}
              {tab === 'signin' ? <LoginForm /> : <RegisterForm />}

              {/* Footer */}
              <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>256-Bit Encrypted Session · Zero Gateway Intermediaries</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
