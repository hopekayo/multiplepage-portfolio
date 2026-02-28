---
title: "高频高级前端开发面试题"
description: "面向高级/资深前端工程师岗位的面试题整理，涵盖 JavaScript、框架原理、性能优化、工程化等"
author: "朱后凯"
date: "2026-02-27"
tags: ["frontend", "interview", "javascript", "react", "vue", "performance"]
image: "/assets/images/posts/post1.jpg"
---

# 高频高级前端开发面试题

> 整理于 2026-02-27 | 面向高级/资深前端工程师岗位

---

## 一、JavaScript 核心

### 1. 事件循环与异步编程

**Q: 请详细描述 JavaScript 的事件循环机制，宏任务与微任务的区别？**

**考察点：**
- 调用栈、任务队列、事件循环的关系
- 宏任务（setTimeout、setInterval、I/O、UI 渲染）
- 微任务（Promise.then、MutationObserver、process.nextTick）
- 执行顺序：当前同步代码 → 微任务队列清空 → 渲染 → 宏任务

**Q: Promise.all 与 Promise.allSettled 的区别？手写一个 Promise.all**

**考察点：**
- Promise.all 任一失败则整体失败
- Promise.allSettled 等待所有完成，返回状态数组
- 手写实现考察对 Promise 的理解

```javascript
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    
    if (promises.length === 0) {
      resolve(results);
      return;
    }
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(result => {
        results[index] = result;
        completed++;
        if (completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}
```

### 2. 闭包与作用域

**Q: 闭包的本质是什么？举例说明闭包的实际应用场景**

**考察点：**
- 函数 + 词法环境的组合
- 变量持久化、数据私有化
- 应用场景：防抖节流、模块模式、迭代器、回调函数

**Q: 以下代码输出什么？为什么？**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
```

**答案：** 第一个输出 3,3,3（var 函数作用域）；第二个输出 0,1,2（let 块级作用域）

### 3. this 绑定与原型链

**Q: 详细说明 this 的绑定规则（默认、隐式、显式、new、箭头函数）**

**考察点：**
- 默认绑定：严格模式 undefined，非严格 window/global
- 隐式绑定：obj.fn() → this 指向 obj
- 显式绑定：call/apply/bind
- new 绑定：指向新创建的对象
- 箭头函数：词法 this，不绑定自己的 this

**Q: 实现一个 instanceof 操作符**

```javascript
function myInstanceof(obj, constructor) {
  let proto = Object.getPrototypeOf(obj);
  const prototype = constructor.prototype;
  
  while (proto !== null) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
```

### 4. 深拷贝与浅拷贝

**Q: 实现一个完整的深拷贝函数，考虑循环引用、Date、RegExp 等**

**考察点：**
- JSON.parse/stringify 的局限性
- WeakMap 处理循环引用
- 特殊类型处理（Date、RegExp、Map、Set）

```javascript
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (hash.has(obj)) return hash.get(obj);
  
  const clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }
  return clone;
}
```

---

## 二、框架原理（React/Vue）

### 1. React 核心

**Q: React Fiber 架构解决了什么问题？核心原理是什么？**

**考察点：**
- 解决大组件渲染阻塞问题
- 可中断的渲染任务
- 优先级调度（Lane 模型）
- 双缓存树（current tree / workInProgress tree）

**Q: useEffect 与 useLayoutEffect 的区别？**

**考察点：**
- useEffect：异步执行，不阻塞渲染
- useLayoutEffect：同步执行，DOM 更新后、浏览器绘制前
- 使用场景：useLayoutEffect 用于测量 DOM、同步更新

**Q: 手写一个简化的 useState**

**考察点：**
- 闭包保存状态
- 更新触发重新渲染
- 状态队列管理

### 2. Vue 核心

**Q: Vue 2 与 Vue 3 响应式原理的区别？**

**考察点：**
- Vue 2：Object.defineProperty，无法检测新增/删除属性
- Vue 3：Proxy，完整拦截对象操作
- Performance 提升，内存占用降低

**Q: Vue 的 nextTick 原理是什么？**

**考察点：**
- 异步更新队列
- 微任务优先（Promise.then）
- 降级方案（MutationObserver → setTimeout）

**Q: 虚拟 DOM 的 diff 算法核心优化点？**

**考察点：**
- 同层比较，不跨层级
- key 的作用与最佳实践
- 四种指针比较（新旧头尾）
- 最长递增子序列优化移动操作

---

## 三、性能优化

### 1. 加载性能

**Q: 首屏优化有哪些手段？**

**考察点：**
- 代码分割（Route-based、Component-based）
- 懒加载（图片、组件、路由）
- SSR/SSG/ISR
- 预加载（preload、prefetch、prerender）
- CDN 与资源压缩
- Tree Shaking

**Q: Webpack/Vite 打包优化策略？**

**考察点：**
- SplitChunks 提取公共代码
- 压缩与混淆
- 缓存策略（contenthash）
- 按需加载
- Vite 的 ESM 开发服务器优势

### 2. 运行时性能

**Q: 如何优化长列表渲染？**

**考察点：**
- 虚拟滚动（react-window、vue-virtual-scroller）
- 时间分片（requestIdleCallback）
- 分页加载
- DOM 回收复用

**Q: 防抖与节流的实现与应用场景？**

```javascript
// 防抖
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 节流
function throttle(fn, delay) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
```

**应用场景：**
- 防抖：搜索框输入、窗口 resize
- 节流：滚动加载、按钮点击

### 3. 性能监控

**Q: 核心 Web Vitals 指标有哪些？如何监控？**

**考察点：**
- LCP（最大内容绘制）< 2.5s
- FID/INP（交互延迟）< 100ms
- CLS（累积布局偏移）< 0.1
- web-vitals 库 + 上报服务

---

## 四、CSS 与布局

### 1. 现代布局

**Q: Grid 与 Flexbox 的区别与使用场景？**

**考察点：**
- Flexbox：一维布局，适合组件内部
- Grid：二维布局，适合整体页面结构
- 实际项目中的组合使用

**Q: 实现一个水平垂直居中的方案（至少 3 种）**

**考察点：**
- Flexbox：`justify-content + align-items`
- Grid：`place-items: center`
- absolute + transform
- margin: auto（Flex 容器内）

### 2. CSS 原理

**Q: BFC 是什么？如何触发？应用场景？**

**考察点：**
- Block Formatting Context
- 触发条件：float、overflow、display、position 等
- 应用：清除浮动、防止 margin 重叠、自适应布局

**Q: CSS 选择器优先级计算规则？**

**考察点：**
- !important > 内联 > ID > Class/属性/伪类 > 元素/伪元素
- 优先级计算：(a,b,c,d)
- !important 不推荐使用

---

## 五、网络与安全

### 1. HTTP 与浏览器

**Q: HTTP/2 与 HTTP/1.1 的核心区别？**

**考察点：**
- 多路复用（解决队头阻塞）
- 头部压缩（HPACK）
- 服务器推送
- 二进制分帧

**Q: 浏览器缓存策略？**

**考察点：**
- 强缓存：Cache-Control、Expires
- 协商缓存：ETag/If-None-Match、Last-Modified/If-Modified-Since
- 缓存优先级与配合使用

**Q: 从输入 URL 到页面展示的全过程？**

**考察点：**
- DNS 解析
- TCP 握手
- HTTP 请求/响应
- 渲染流程（HTML → DOM，CSS → CSSOM，合成 Layer，绘制）
- 回流与重绘

### 2. 安全

**Q: XSS 攻击的原理与防御？**

**考察点：**
- 类型：存储型、反射型、DOM 型
- 防御：转义、CSP、HttpOnly、框架自动转义

**Q: CSRF 攻击的原理与防御？**

**考察点：**
- 原理：利用用户已登录状态
- 防御：SameSite Cookie、CSRF Token、验证 Referer

**Q: 前端常见的安全实践？**

**考察点：**
- 输入验证与输出编码
- 敏感信息不存本地
- HTTPS 强制
- 内容安全策略（CSP）
- 依赖安全审计（npm audit）

---

## 六、工程化

### 1. 构建工具

**Q: Webpack 的构建流程？**

**考察点：**
- 初始化参数 → 创建编译器
- 确定入口 → 编译模块
- 完成编译 → 输出资源

**Q: Loader 与 Plugin 的区别？手写一个简单的 Loader**

**考察点：**
- Loader：文件转换器（链式调用）
- Plugin：扩展功能（监听钩子）

```javascript
// 简单的 Loader 示例
module.exports = function(source) {
  return source.replace(/console\.log/g, '// console.log');
};
```

### 2. 代码质量

**Q: TypeScript 的泛型、工具类型、条件类型？**

**考察点：**
- 泛型约束与推断
- Partial、Pick、Omit、Record 等工具类型
- infer 关键字
- 类型守卫

**Q: ESLint + Prettier 如何配合？**

**考察点：**
- ESLint 负责代码质量
- Prettier 负责代码格式
- eslint-config-prettier 关闭冲突规则

### 3. 测试

**Q: 单元测试、集成测试、E2E 测试的区别？**

**考察点：**
- 单元测试：Jest、Vitest（函数/组件）
- 集成测试：Testing Library（组件交互）
- E2E 测试：Cypress、Playwright（完整流程）

---

## 七、系统设计与架构

### 1. 组件设计

**Q: 如何设计一个高复用的 UI 组件库？**

**考察点：**
- 原子设计理论（Atom → Molecule → Organism）
- 受控/非受控组件
- 组合优于继承
- 设计系统（Design Token）
- 文档与示例

### 2. 状态管理

**Q: Redux、Zustand、Jotai 的选型考量？**

**考察点：**
- 应用规模与复杂度
- 开发体验与调试
- 性能考量（重渲染优化）
- 团队熟悉度

**Q: 服务端状态 vs 客户端状态如何管理？**

**考察点：**
- React Query / SWR 管理服务端状态
- 缓存策略与同步
- 乐观更新

### 3. 微前端

**Q: 微前端的实现方案与优缺点？**

**考察点：**
- 方案：iframe、Web Components、Module Federation、qiankun
- 优点：独立部署、技术栈无关、团队自治
- 缺点：复杂度增加、样式隔离、通信成本

---

## 八、手写代码题（高频）

### 1. 数组/对象操作

```javascript
// 1. 数组扁平化
function flatten(arr, depth = 1) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) && depth > 0 
      ? [...acc, ...flatten(val, depth - 1)] 
      : [...acc, val], []);
}

// 2. 数组去重
function unique(arr) {
  return [...new Set(arr)];
}

// 3. 对象深度合并
function merge(obj1, obj2) {
  const result = { ...obj1 };
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === 'object' && obj2[key] !== null) {
        result[key] = merge(obj1[key] || {}, obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
}
```

### 2. 函数工具

```javascript
// 4. 函数柯里化
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

// 5. 函数组合
function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

// 6. 发布订阅模式
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, fn) {
    (this.events[event] = this.events[event] || []).push(fn);
  }
  emit(event, ...args) {
    (this.events[event] || []).forEach(fn => fn(...args));
  }
  off(event, fn) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(f => f !== fn);
  }
}
```

### 3. 异步工具

```javascript
// 7. 并发限制请求
async function requestWithLimit(tasks, limit) {
  const results = [];
  const running = [];
  
  for (let i = 0; i < tasks.length; i++) {
    const p = tasks[i]().then(res => {
      results[i] = res;
      running.splice(running.indexOf(p), 1);
      return res;
    });
    running.push(p);
    
    if (running.length >= limit) {
      await Promise.race(running);
    }
  }
  
  await Promise.all(running);
  return results;
}

// 8. 异步队列
class AsyncQueue {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.running = 0;
  }
  
  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.run();
    });
  }
  
  run() {
    while (this.running < this.limit && this.queue.length) {
      const { task, resolve, reject } = this.queue.shift();
      this.running++;
      task().then(resolve).catch(reject).finally(() => {
        this.running--;
        this.run();
      });
    }
  }
}
```

---

## 九、开放性问题

### 1. 项目经验

- 你做过最有挑战的技术项目是什么？如何解决的？
- 描述一次你主导的技术重构，收益是什么？
- 你如何平衡技术债务与业务需求？

### 2. 技术视野

- 你最近在关注什么前端新技术？
- 如何看待 AI 对前端开发的影响？
- 你理想的前端技术栈是什么样的？

### 3. 团队协作

- 如何推动团队的技术规范落地？
- 你如何做 Code Review？关注哪些点？
- 如何帮助团队中的初级工程师成长？

---

## 备考建议

1. **理解优先于背诵**：面试官更看重思考过程
2. **准备项目案例**：用 STAR 法则描述（情境、任务、行动、结果）
3. **手写代码要练习**：白板/在线编辑器环境与 IDE 不同
4. **保持好奇心**：展示学习热情比完美答案更重要
5. **反问环节要准备**：问团队、问技术、问成长

---

*持续更新中... 建议结合目标公司 JD 针对性准备*
