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

tsc는 brew install tsc로 설치한다.

---

### 기본 타입

<br>

**basic types**

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

퀴즈

**Q. "타입"이 바닐라 자바스크립트보다 유용하며 큰 이점을 제공하는 이유는?**

A. 타입을 사용하면 오류를 미리 감지하고 일부 런타임 오류를 방지할 수 있다.

**Q. 다음 코드는 컴파일 오류를 발생시키나?**

```ts
let username: string;
userName = "kevin";
userName = false;
```

A. 발생한다. string 타입이 할당된 변수 userName에 false 라는 boolean 값을 재할당 하였으므로 컴파일 오류가 발생한다.

**Q. 이 코드는 타입 추론에 의존하나?**

```ts
const age: number = 29;
```

A. 타입스크립트는 타입을 추론할 수도 있지만(ex. :number을 생략하는 경우), 해당 코드에서는 명시적으로 타입 할당이 사용되었다.

**Q. 자바스크립트 타입 `typeof 'Max' => 'string'`과 타입스크립트 타입 `const name: string = 'kevin'`의 차이는?**

A. 타입스크립트 타입은 컴파일 중에 확인되는 반면, 자바스크립트 타입은 런타임 중에 확인된다.

---

### 객체 타입

아래 코드처럼 person은 객체이므로 object 타입을 명시해주면 `'object' 형식에 'name' 속성이 없습니다.`라는 오류가 발생하게 된다.

```ts
const person: object = {
  name: "Kevin",
  age: 30,
};

console.log(person.name); // 오류 발생
```

위 코드를 아래왁 같이 수정해줘야 코드가 제대로 실행되게 된다.

```ts
const person: {
  name: string;
  age: number;
} = {
  name: "Kevin",
  age: 30,
};

console.log(person.name);
```

다만, 해당 코드는 작업중인 객체를 타입스크립트가 이해할 수 있도록 해주는 타입스크립티의 객체 타입의 표현일 뿐이므로 아래와 같은 코드가 더 나은 구문이다.

```ts
const person = {
  name: "Kevin",
  age: 30,
};

console.log(person.name);
```

**중첩된 객체의 타입**

아래와 같은 자바스크립트 객체가 있다고 가정해보면,

```ts
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
```

해당 객체의 타입은 다음과 같다.

```ts
const product: {
  id: string;
  price: number;
  tags: string[];
  // 객체 타입 안에 객체 타입이 있다.
  details: {
    title: string;
    description: string;
  };
};
```

---

### 배열 타입

```ts
const person = {
  name: "Kevin",
  age: 30,
  hobbies: ["Sports", "Cooking"], // 배열 타입: string[]
};

for (const hobby of person.hobbies) {
  console.log(hobby); // Sports, Cooking
}
```

hobbies 배열 안에 문자열이 들어있기 때문에 hobbies의 타입은 string[]이다.

---

### 튜플 타입

튜플은 [1,2]와 같은 형태인데 배열과 동일하다. 다만, `길이가 고정된 배열`이다. 또한 `타입도 고정`된다.

```ts
const person = {
  name: "Kevin",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
```

위처럼 role이란 배열이 있을때 첫번째 인덱스에는 number이, 두번째 인덱스에는 string이 들어가야 한다고 가정하면 해당 구조는 타입스크립트는 모르고 나만이 알고 있는 구조이기 때문에 이러한 경우 `어떤 role이어야 하는지 role의 타입을 명시적으로 설정`해줌으로써 타입스크립트에 인식을 시켜줘야한다. 이럴때 `튜플이 유용`하다.

```ts
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // 튜플 타입
} = {
  name: "kevin",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role[1] = 10; // 오류
```

위 코드처럼 role의 타입을 튜플 타입으로 명시해주면 person.role[1] = 10에 오류가 발생하게 된다. role[1]에 들어갈 수 있는 타입은 string인데 10이라는 number 타입의 값을 입력했기 때문이다.

```ts
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // 튜플 타입
} = {
  name: "kevin",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin"); // role에는 2개의 요소만 있어야 한다고 명시했는데 왜 admin이 push가 되나?
person.role = [0, "admin", "aaa"]; // 얘는 안됨. 오류 발생
```

아예 값을 재할당 할때는 제한되지만, push를 사용할때는 걸러내지 못함에 주의해야한다.

---

### 열거형 타입

enum{NEW, OLD}

만약, role이 Admin인지 Read only인지 Author인지 판단해주는 구문이 필요한 경우 전역 변수를 이용해 설정해줄수 있긴하다.

```ts
// 전역변수
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
  role: ADMIN,
};

if (person.role === ADMIN) {
  console.log("is admin...");
}
```

하지만, 이러면 모든 역할을 정의하고 관리해야한다. 또한 타입스크립트는 role: number로 추론한다.

이런 경우 enum을 사용하면 유용하다.

```ts
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
```

열거형은 가장 처음에 나오는 멤버를 기준으로 뒤따르는 멤버들은 자동으로 1씩 증가된 값을 갖는다. 즉 ADMIN = 1로 초기화 했다면 자동으로 READ_ONLY = 2, AUTHOR = 3이 되고, 초기화를 하지 않은 경우 ADMIN = 0, READ_ONLY = 1, AUTHOR = 2가 된다.

그리고 꼭 숫자 아니고 ADMIN = "ADMIN" 이런식으로 문자열 할당도 가능하다.

```ts
// 전역변수
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is admin...");
}
```

컴파일된 자바스크립트에서는 enum이 아래와 같이 관리되고 있음.

```js
var Role;

(function (Role) {
  Role[(Role["ADMIN"] = 0)] = "ADMIN";
  Role[(Role["READ_ONLY"] = 1)] = "READ_ONLY";
  Role[(Role["AUTHOR"] = 2)] = "AUTHOR";
})(Role || (Role = {}));

var person = {
  name: "kevin",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is author...");
}
```

---

### ANY type

일단, 남발하면 타입스크립트의 의미를 해치게 되므로 되도록이면 사용하지 않는 것이 좋은 타입이다.

다만, 어떤 값이나 종류의 데이터가 어디에 저장될지 전혀 알 수 없는 경우에 대비하거나 런타임 도중 특정 값에 수행하고자 하는 작업의 범위를 좁히기 위해 사용하는 경우가 있다.

타입스크립트가 제 역할을 다하도록 작업 도중 어떤 종류의 데이터를 사용하는지 확실하게 정리하자!

---

### UNION type

아래와 같이 입력값 2개를 combine 해주는 함수가 있다고 가정하자.

```ts
function combine(input1: number, input2: number) {
  const result = input1 + input2;
  return result;
}
```

input1, input2에 각각 20과 30이란 숫자를 넣으면 result 값이 50으로 제대로 출력되지만, input1, input2에 'ABC', 'DEF'라는 문자열을 넣으면 input1과 input2의 타입이 각각 number로 설정되어있기 때문에 오류가 발생한다.

그러나 나는 input1, input2에 `숫자도 넣을 수 있고 문자로 넣을 수` 있길 바란다. 이러한 경우 `조합 타입(UNION TYPE)을 사용`한다.

```ts
function combine(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}
```

**[정리] UNION type**  
타입을 조금 더 유연하게 사용할 수 있도록 해주는 역할

<사용법>

타입1 | 타입2 | 타입3  
ex) input1: number | string

---

### Literal type

단순한 특정 변수나 매개변수 또는 숫자나 문자열도 아니며 정확한 값을 가지는 타입

앞서 공부했던 코드에 resultConversion이란 매개변수를 추가하고 최종적으로는 아래 코드처럼 수정해보자. resultConversion은 입력된 두 값(input1, input2)이 number인지 string인지 판단하게 해주는 값을 적는 곳이다.

```ts
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    // input 앞에 +는 parseFloat을 대신할 수 있는 기호
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges); // 56

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges); // 56

const combinedNames = combine("ABC", "DEF", "as-string");
console.log(combinedNames); // ABCDEF
```

input1, input2에 각각 "30", "26"의 string 값을 줘도 resultConversion 값으로 as-number을 주면 정상적으로 56으로 출력됨을 알 수 있다.

하지만, 이렇게 작성할 경우 사용할 때마다 매번 as-number인지 as-string인지 값을 기억하고 있어야 하는 번거로움이 있는데 이는 enum으로 개선할 수 있지만 값이 해당 예시처럼 2, 3개정도뿐이라면 literal type을 이용할 수 있다.

```ts
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-string" // 이렇게 !
) {
  //...
}
```

---
