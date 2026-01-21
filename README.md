# 🚀 nx-mono: Nx Monorepo Project

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Nx 워크스페이스 기반의 팀 프로젝트입니다.** ✨
공통 UI와 로직은 `libs`에서 관리하고, 서비스는 `apps`에서 조립하는 효율적인 모노레포 구조를 사용합니다.

---

## 🏃‍♂️ 팀원분들을 위한 빠른 시작 가이드 (Quick Start)

### 1. 레포지토리 클론

```
git clone [https://github.com/yunsuper/nx-mono.git](https://github.com/yunsuper/nx-mono.git)
cd nx-mono
```

### 2. 패키지 설치

모든 라이브러리와 의존성을 한 번에 설치합니다.

```
npm install
```

### 3. 로컬 개발 서버 실행

메인 앱인 nx-mono를 실행합니다. (성공 시 http://localhost:3000 접속 가능)

```
npm run dev
```

### 4. 프로젝트 구조 확인 (의존성 그래프)

앱과 라이브러리가 어떻게 연결되어 있는지 시각적으로 확인합니다.

```
npm run graph
```

---

## 🛠 주요 명령어 (Nx Commands)

1. 신규 라이브러리 생성 새로운 기능을 만들 때는 **libs 폴더 안에 라이브러리를 생성**하여 작업합니다.

```
npx nx g @nx/react:lib [라이브러리이름] --directory=libs/[라이브러리이름] --style=tailwind --importPath=@nx-mono/[라이브러리이름]
```

2. 캐시 리셋 (에러 발생 시) 빌드가 꼬이거나 유령 에러가 발생할 때 사용하세요.

```
npm run reset
```

3. 빌드 및 테스트

```
npm run build  # 전체 빌드
npm run test   # 전체 테스트
```

---

## 💡 개발 가이드 (중요!)

### 1. VS Code 확장 프로그램:

Nx Console 설치를 강력 권장합니다. 클릭 몇 번으로 라이브러리 생성 및 실행이 가능합니다.

### 2. 공유 컴포넌트 활용:

`libs/shared-ui` 폴더 내의 컴포넌트를 수정하거나 활용하세요. 메인 앱에서는 `import { SharedUi } from '@nx-mono/shared-ui';`로 간편하게 불러올 수 있습니다.

### 3. 스타일 적용 (Tailwind CSS):

Next.js 16 Turbopack 사용 시 새로운 라이브러리를 추가하면 스타일이 자동으로 적용되지 않을 수 있습니다. 이 경우 `apps/nx-mono/tailwind.config.js의 content` 배열에 해당 라이브러리 경로를 수동으로 추가해 주세요.

```
// 예시:
'../../libs/[신규라이브러리]/src/**/*.{ts,tsx,js,jsx,html}'
```

### 4. 코드 구현:

서비스의 유지보수를 위해 실제 기능 및 UI 구현은 가급적 libs 폴더 내에서 진행해 주시길 바랍니다.

---

## 📬 협업 규칙

- 브랜치 생성 시 `feat:기능이름` 또는 `fix:버그수정` 형식을 사용해 주세요.

- 모든 Pull Request는 빌드 및 린트 테스트를 통과해야 합니다.
