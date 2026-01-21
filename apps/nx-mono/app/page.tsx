import { SharedUi } from '@nx-mono/shared-ui';

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6">
      {/* 배경에 은은한 빛 효과 추가 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <SharedUi />
      </div>
    </main>
  );
}
