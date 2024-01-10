# 로컬에서 동작 확인

- `npx nx serve my-nest-app`
- http://localhost:3000/api/hello
- http://localhost:3000/api/world

# 코드 생성 명령어

- `yarn create nx-workspace my-workspace --preset=nest`: nest.js 기반의 nx workspace 생성
- `yarn add -D @nx/nest`: 기존 workspace 에 nest.js 플러그인 추가
- `npx nx g @nx/nest:app my-nest-app`: my-nest-app 애플리케이션 생성
- `npx nx g @nx/nest:lib my-nest-lib`: my-nest-lib 라이브러리 생성
