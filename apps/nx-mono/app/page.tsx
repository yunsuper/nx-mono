/* eslint-disable @nx/enforce-module-boundaries */
import { supabase } from '@nx-mono/supabase-shared';
import { SharedUi } from '@nx-mono/shared-ui';

// 서버 컴포넌트에서 실시간성 유지를 위해 설정
export const dynamic = 'force-dynamic';

export default async function Index() {
  // DB에서 데이터 가져오기
  const { data, error } = await supabase.from('profiles').select('*');

  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-start p-10 relative overflow-hidden">
      {/* 은은한 배경 빛 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl space-y-12">
        {/* 1. 어제 만든 SUCCESS 공유 UI */}
        <section className="animate-in fade-in slide-in-from-top-4 duration-1000">
          <SharedUi />
        </section>

        {/* 2. 오늘 성공한 Supabase 데이터 목록 */}
        <section className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-700 delay-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold tracking-tight text-white/90">
              📊 Real-time Database
            </h2>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${error ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}`}
            >
              {error ? 'CONNECTION ERROR' : 'CONNECTED'}
            </span>
          </div>

          <div className="space-y-4">
            {error ? (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                {error.message}
              </div>
            ) : data && data.length > 0 ? (
              <div className="grid gap-4">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-colors"
                  >
                    <p className="text-white/80 leading-relaxed">
                      {item.content}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-[10px] font-medium text-white/40 uppercase tracking-widest">
                      <span>Row ID: {item.id}</span>
                      <span>
                        {new Date(item.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-10 text-white/30 italic">
                표시할 데이터가 없습니다.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
