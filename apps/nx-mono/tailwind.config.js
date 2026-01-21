/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 1. 현재 Next.js 앱의 파일들
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',

    // 2. 공유 라이브러리(shared-ui)의 파일들을 수동으로 추가 (Turbopack 대응)
    '../../libs/shared-ui/src/**/*.{ts,tsx,js,jsx,html}',
    '!../../libs/shared-ui/src/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
