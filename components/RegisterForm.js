import { useState } from 'react';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('register', { email, password });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-400 uppercase tracking-widest mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          required
          placeholder="merchant@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl liquid-input text-slate-900 dark:text-white text-xs placeholder:text-slate-500"
        />
      </div>
      <div>
        <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-400 uppercase tracking-widest mb-1.5">
          Password
        </label>
        <input
          type="password"
          required
          placeholder="••••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl liquid-input text-slate-900 dark:text-white text-xs placeholder:text-slate-500"
        />
      </div>
      <button
        type="submit"
        className="w-full mt-2 py-3.5 px-4 rounded-xl liquid-btn-primary text-white text-xs font-bold"
      >
        Create Merchant Account
      </button>
    </form>
  );
}