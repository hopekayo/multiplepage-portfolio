# Java 全栈开发详细学习路线图

> 从前端到全栈，循序渐进掌握 Java 后端开发技能

---

## 🗺️ 路线图总览

```
┌─────────────────────────────────────────────────────────────────┐
│                     前端工程师 → Java 全栈                        │
├─────────────────────────────────────────────────────────────────┤
│  阶段 1          阶段 2          阶段 3          阶段 4           │
│  Java 基础      Spring Boot    数据库          API 设计          │
│  (2 周)         (2 周)         (2 周)          (2 周)            │
│                                                              │
│  阶段 5          阶段 6          阶段 7                          │
│  认证授权       DevOps         综合实战                         │
│  (2 周)         (2 周)         (2 周)                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📌 阶段一：Java 语言基础（第 1-2 周）

### 1.1 Java 核心语法

#### 第一周重点

| 主题 | 具体内容 | 前端类比 |
|------|---------|---------|
| 变量与数据类型 | int, String, boolean, 类型转换 | 类似 JS 的 number, string, boolean |
| 运算符 | 算术、比较、逻辑运算符 | 与 JS 基本一致 |
| 流程控制 | if-else, switch, for, while | 与 JS 语法相似 |
| 数组 | 数组声明、遍历、常用操作 | 类似 JS Array，但类型固定 |
| 方法 | 参数、返回值、重载 | 类似 JS 函数 |

#### 第二周重点

| 主题 | 具体内容 | 重要程度 |
|------|---------|---------|
| 面向对象 | 类、对象、继承、多态 | ⭐⭐⭐⭐⭐ |
| 封装 | private/protected/public | ⭐⭐⭐⭐ |
| 抽象类与接口 | abstract class, interface | ⭐⭐⭐⭐⭐ |
| 常用类 | String, Date, Collections | ⭐⭐⭐⭐ |
| 异常处理 | try-catch-finally, 自定义异常 | ⭐⭐⭐⭐ |
| 泛型 | 泛型类、泛型方法 | ⭐⭐⭐ |
| 集合框架 | List, Set, Map | ⭐⭐⭐⭐⭐ |
| Stream API | 过滤、映射、归约 | ⭐⭐⭐⭐ |

### 1.2 前端 vs Java 概念对照

```typescript
// 前端 TypeScript
interface User {
  id: number;
  name: string;
  email: string;
}

// 后端 Java - 几乎一样！
public class User {
    private Long id;
    private String name;
    private String email;
    // getter/setter...
}
```

### 1.3 每周实践项目

**第一周**: 命令行待办事项管理器
```
- 添加任务
- 列出任务
- 标记完成
- 删除任务
```

**第二周**: 简单的图书管理系统
```
- 图书类 (Book)
- 图书馆类 (Library)
- 借书/还书功能
- 搜索功能
```

---

## 📌 阶段二：Spring Boot 核心（第 3-4 周）

### 2.1 Spring 基础概念

| 概念 | 说明 | 前端理解方式 |
|------|------|-------------|
| IoC 容器 | 控制反转，对象由 Spring 管理 | 类似 React 的依赖注入 context |
| Bean | Spring 管理的对象 | 类似单例模式的全局实例 |
| DI | 依赖注入 | 类似 props 传递依赖 |
| AOP | 面向切面编程 | 类似 HOC 高阶组件 |

### 2.2 Spring Boot 核心技能

#### 第三周：快速上手

```
Week 3
├── Spring Boot 项目结构
├── @SpringBootApplication 注解
├── application.properties/yml 配置
├── @RestController 创建 REST API
├── @GetMapping, @PostMapping 等路由注解
├── @Service, @Repository 分层
└── 第一个 CRUD 接口
```

#### 第四周：深入理解

```
Week 4
├── Spring Bean 作用域 (singleton, prototype)
├── @Autowired 依赖注入
├── @Configuration 配置类
├── @Value 读取配置
├── 异常全局处理 @ControllerAdvice
├── 统一响应格式封装
└── 日志配置 (SLF4J + Logback)
```

### 2.4 项目分层架构

```
src/main/java/com/example/demo/
├── controller/     # 控制层 - 类似 API routes
├── service/        # 服务层 - 业务逻辑
├── repository/     # 数据层 - 数据库操作
├── entity/         # 实体类 - 数据库表映射
├── dto/            # 数据传输对象 - API 入参出参
└── config/         # 配置类 - 类似 config 文件
```

### 2.5 实践项目

**任务**: 博客系统后端 API

```
功能模块:
- 文章 CRUD (增删改查)
- 分类管理
- 标签管理
- 分页查询
- 条件筛选
```

---

## 📌 阶段三：数据库与持久层（第 5-6 周）

### 3.1 SQL 基础

| 主题 | 内容 | 前端关联 |
|------|------|---------|
| 基础查询 | SELECT, WHERE, ORDER BY | 类似 Array.filter().sort() |
| 聚合函数 | COUNT, SUM, AVG, MAX, MIN | 类似 reduce |
| 分组 | GROUP BY, HAVING | 类似 groupBy |
| 连接查询 | INNER JOIN, LEFT JOIN | 类似数据关联 |
| 子查询 | 嵌套 SELECT | 类似链式调用 |

### 3.2 Spring Data JPA

```java
// 定义接口，Spring 自动实现
public interface UserRepository extends JpaRepository<User, Long> {
    // 方法名即查询
    User findByEmail(String email);
    List<User> findByNameContaining(String keyword);

    // 自定义查询
    @Query("SELECT u FROM User u WHERE u.status = :status")
    List<User> findActiveUsers(@Param("status") String status);
}
```

### 3.3 MyBatis (可选)

```xml
<!-- XML 方式写 SQL -->
<mapper namespace="com.example.UserMapper">
    <select id="selectUser" resultType="User">
        SELECT * FROM users WHERE id = #{id}
    </select>
</mapper>
```

### 3.4 数据库设计

```
Week 5-6 数据库主题:
├── ER 图设计
├── 一对一、一对多、多对多关系
├── 索引优化
├── 事务管理 @Transactional
├── 数据库迁移 (Flyway/Liquibase)
└── Redis 缓存 (基础)
```

### 3.5 实践项目

**任务**: 电商系统数据库设计

```
核心表:
- users (用户表)
- products (商品表)
- categories (分类表)
- orders (订单表)
- order_items (订单明细)
- cart (购物车)

关系:
- 用户 → 订单 (一对多)
- 订单 → 商品 (多对多)
- 分类 → 商品 (一对多)
```

---

## 📌 阶段四：API 设计与规范（第 7-8 周）

### 4.1 RESTful API 设计规范

```
RESTful 风格:

GET    /api/users          # 获取用户列表
GET    /api/users/1        # 获取 ID 为 1 的用户
POST   /api/users          # 创建新用户
PUT    /api/users/1        # 更新用户 (全量)
PATCH  /api/users/1        # 更新用户 (部分)
DELETE /api/users/1        # 删除用户
```

### 4.2 响应格式规范

```java
// 统一响应格式
{
    "code": 200,
    "message": "success",
    "data": { ... },
    "timestamp": 1234567890
}

// 错误响应
{
    "code": 400,
    "message": "参数错误：邮箱格式不正确",
    "data": null,
    "timestamp": 1234567890
}
```

### 4.3 参数验证

```java
@PostMapping("/users")
public ResponseEntity<UserDTO> createUser(
    @Valid @RequestBody CreateUserRequest request
) {
    // @Valid 触发验证
}

// DTO 验证注解
public class CreateUserRequest {
    @NotBlank
    private String name;

    @Email
    @NotBlank
    private String email;

    @Size(min = 6, max = 20)
    private String password;
}
```

### 4.4 API 文档 (Swagger/OpenAPI)

```java
@Api(tags = "用户管理")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @ApiOperation("获取用户列表")
    @GetMapping
    public List<UserDTO> getUsers() { ... }
}
```

### 4.5 实践项目

**任务**: 完整的博客系统 API

```
API 端点:
POST   /api/auth/register     # 注册
POST   /api/auth/login        # 登录
GET    /api/posts             # 文章列表
GET    /api/posts/{id}        # 文章详情
POST   /api/posts             # 创建文章
PUT    /api/posts/{id}        # 更新文章
DELETE /api/posts/{id}        # 删除文章
GET    /api/categories        # 分类列表
GET    /api/tags              # 标签列表
```

---

## 📌 阶段五：认证授权（第 9-10 周）

### 5.1 认证基础

| 概念 | 说明 |
|------|------|
| 认证 (Authentication) | 验证用户身份 (你是谁) |
| 授权 (Authorization) | 验证用户权限 (你能做什么) |
| Session | 服务器端会话存储 |
| Token | 客户端令牌 (JWT) |

### 5.2 Spring Security 核心

```
Week 9-10 学习主题:
├── Spring Security 基础配置
├── UserDetailsService 自定义用户认证
├── 密码加密 (BCrypt)
├── JWT Token 生成与验证
├── @PreAuthorize 方法级权限控制
├── CORS 跨域配置
└── OAuth2 第三方登录 (可选)
```

### 5.3 JWT 认证流程

```
1. 用户登录 → 发送账号密码
2. 服务器验证 → 生成 JWT Token
3. 客户端存储 → localStorage/cookie
4. 后续请求 → Header 携带 Token
5. 服务器验证 → 解析 Token 获取用户信息
```

### 5.4 实践项目

**任务**: 为博客系统添加认证授权

```
功能:
- 用户注册/登录
- JWT Token 认证
- 角色系统 (USER, ADMIN)
- 权限控制：
  - 普通用户：只能管理自己的文章
  - 管理员：可以管理所有文章
```

---

## 📌 阶段六：DevOps 与部署（第 11 周）

### 6.1 构建工具

| 工具 | 前端对应 | 用途 |
|------|---------|------|
| Maven | npm | 项目构建、依赖管理 |
| Gradle | webpack | 更灵活的构建配置 |

### 6.2 Docker 容器化

```dockerfile
# Dockerfile 示例
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY target/demo.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### 6.3 CI/CD 流程

```
GitHub Actions 示例:
name: Build & Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
      - name: Build with Maven
        run: mvn clean package
      - name: Run tests
        run: mvn test
```

### 6.4 部署选项

| 平台 | 类型 | 难度 |
|------|------|------|
| 腾讯云云开发 | Serverless | ⭐⭐ |
| 阿里云 ECS | VPS | ⭐⭐⭐ |
| Docker + 云服务器 | 容器化 | ⭐⭐⭐ |
| Kubernetes | 容器编排 | ⭐⭐⭐⭐⭐ |

### 6.5 监控与日志

```
监控工具:
- Spring Boot Actuator (健康检查)
- Prometheus + Grafana (监控面板)
- ELK Stack (日志收集)
```

---

## 📌 阶段七：综合实战（第 12 周）

### 7.1 毕业项目：全栈博客系统

```
技术栈:
后端: Spring Boot + JPA + MySQL
认证：JWT
前端：React/Vue(已有技能)
部署：Docker + 云服务器

功能模块:
├── 用户系统
│   ├── 注册/登录
│   ├── 个人信息管理
│   └── 权限控制
├── 文章管理
│   ├── CRUD 操作
│   ├── Markdown 编辑
│   ├── 分类/标签
│   └── 草稿箱
├── 评论系统
│   ├── 发表评论
│   ├── 回复评论
│   └── 评论审核
└── 管理后台
    ├── 用户管理
    ├── 文章审核
    └── 数据统计
```

### 7.2 项目结构

```
blog-system/
├── blog-backend/          # Spring Boot 后端
│   ├── src/main/java/
│   │   └── com.example.blog/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       ├── entity/
│   │       ├── dto/
│   │       ├── security/
│   │       └── config/
│   └── src/main/resources/
│       ├── application.yml
│       └── application-prod.yml
├── blog-frontend/         # React/Vue 前端
├── docker-compose.yml     # Docker 编排
└── README.md             # 项目文档
```

---

## 🎯 学完后的下一步

### 进阶学习方向

```
1. 微服务架构
   - Spring Cloud
   - 服务注册与发现
   - 配置中心
   - 网关

2. 消息队列
   - RabbitMQ
   - Kafka
   - Redis Streams

3. 搜索引擎
   - Elasticsearch
   - 全文检索

4. 性能优化
   - 缓存策略
   - 数据库优化
   - 并发处理

5. 云原生
   - Kubernetes
   - Service Mesh
   - Serverless
```

### 求职准备

- ✅ 整理 GitHub 项目
- ✅ 写技术博客总结学习
- ✅ 刷 LeetCode Java 题
- ✅ 准备面试题
- ✅ 简历突出全栈能力

---

> **提示**: 学习过程中遇到任何问题，善用 AI 工具辅助理解和调试！
