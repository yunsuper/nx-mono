export function SharedUi() {
  return (
    <div className="group p-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl shadow-2xl transform hover:scale-[1.03] transition-all duration-500 ease-out border border-white/10">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-black text-white tracking-tighter drop-shadow-md">
          NX-MONO <span className="text-yellow-300">SUCCESS</span>
        </h2>
        <div className="h-1 w-20 bg-white/30 mx-auto rounded-full group-hover:w-32 transition-all duration-500" />
        <p className="text-lg text-purple-100 font-medium">
          공유 라이브러리가 완벽하게 연결되었습니다.
          <br />
          이제 팀원들과 함께 개발을 시작하세요! 🚀
        </p>
      </div>
    </div>
  );
}
