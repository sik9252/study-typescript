## TypeScript 공부하기

### 타입스크립트를 사용하는 이유?

- 브라우저에서 에러가 발생하기 전에 코드의 에러를 미리 식별할 수 있는 기회를 제공함
- 즉, 개발중에 런타임 에러로 인해 발생하는 에러를 초기 개발 과정에서 발견하고 수정할 수 있도록 해줌

(코드 작성 예시)

```ts
const button = document.querySelector("button");
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;

function add(num1: number, num2: number) {
	return num1 + num2;
}

button.addEventListener("click", function() {
	console.log(add(input1.value, input2.value));
}
```

**결론: 더욱 깔끔하고 에러가 적은 코드를 작성할 수 있게 해줌**

---

npx 같은걸로 프로젝트를 생성하지 않고 생 html로 시작하는 경우 package.json을 설정하기 위해 아래와 같은 과정을 거친다.

1. npm init
2. 출력되는 모든 질문에 Enter를 사용하면 기본값으로 설정
3. 그럼 package.json이 생성됨
4. npm install ...을 사용해 필요한 모듈 다운이 가능

npm install --save-dev를 하면 devDependencies에 추가되는데 이는 배포 시 굳이 설치될 필요가 없는 개발단계에서만 사용하는 패키지를 추가할 수 있다.

---

xxx.ts 파일에서 코드 작업을 한 뒤 `tsc xxx.ts`를 이용해 자바스크립트 코드로 컴파일하여 작업한 기능을 확인할 수 있다.

---

### Using Types

<br>

**core types**

1. `number`  
   정수형, 실수형 구분 X

2. `string`  
   'Hi', "Hi", \`Hi\` 등 모든 문자 값

3. `boolean`  
   true, false

<br>

**타입 지정을 해야하는 이유**  
아래와 같이 코드를 작성하는 경우 개발자가 의도한 5+2.8=7.8이 아닌 52.8이 출력되게 되어 버그를 발생시킬 수 있다.

```ts
function add(num1, num2) {
  return num1 + num2;
}

const n1 = "5";
const n2 = 2.8;

const result = add(n1, n2);
console.log(result);
```

따라서 아래 코드와 같이 타입을 명시해주면 n1은 "5"로 number 타입이 아니기 때문에 오류가 발생함을 개발도중에 알 수 있다.

```ts
function add(num1: number, num2: number) {
  return num1 + num2;
}

const n1 = "5";
const n2 = 2.8;

const result = add(n1, n2); // n1에 오류 발생
console.log(result);
```

즉, 이러한 오류를 사전에 미리 알아채고 수정할 수 있다.

---
