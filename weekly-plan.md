# 12 周 Java 全栈开发学习计划

> 专为前端工程师设计，每周都有明确目标和实践项目

---

## 📅 学习计划总览

| 阶段 | 周次 | 主题 | 核心目标 |
|------|------|------|----------|
| 一 | 1-2 | Java 基础 | 掌握 Java 语法和面向对象 |
| 二 | 3-4 | Spring Boot | 能独立开发 REST API |
| 三 | 5-6 | 数据库 | 熟练使用 JPA 和 SQL |
| 四 | 7-8 | API 设计 | 设计规范的后端接口 |
| 五 | 9-10 | 认证授权 | 实现完整用户系统 |
| 六 | 11-12 | 综合实战 | 完成毕业项目 |

---

# 第一周：Java 语言基础（上）

## 🎯 本周目标

- [ ] 理解 Java 基本语法
- [ ] 掌握变量、数据类型、运算符
- [ ] 熟悉流程控制语句
- [ ] 理解方法和数组
- [ ] 完成第一个 Java 程序

## 📚 每日学习安排

### Day 1 - Java 开发环境搭建

**任务**:
```
□ 安装 JDK 17+
□ 配置 JAVA_HOME 环境变量
□ 安装 IntelliJ IDEA 社区版
□ 创建第一个 Java 项目
□ 运行 Hello World
```

**AI 辅助提示词**:
```
"我是前端开发，刚接触 Java，请帮我：
1. 解释 JDK、JRE、JVM 的区别
2. 指导如何在 Mac/Windows 上安装 JDK 17
3. 解释如何配置环境变量"
```

**实践**:
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
        System.out.println("前端工程师来学 Java 了！");
    }
}
```

### Day 2 - 变量与数据类型

**任务**:
```
□ 理解 8 种基本数据类型
□ 掌握变量声明和命名规范
□ 理解类型转换
□ 学习 String 字符串
```

**前端对比**:
```typescript
// TypeScript          Java
number        →       int, double, long
string        →       String
boolean       →       boolean
any           →       Object (尽量少用)

// TypeScript
let age: number = 25;
let name: string = "John";

// Java
int age = 25;
String name = "John";
```

**练习**:
```java
public class VariablesPractice {
    public static void main(String[] args) {
        // 基本数据类型
        int age = 25;
        double salary = 5000.50;
        boolean isEmployed = true;
        char grade = 'A';

        // 引用类型
        String name = "张三";

        // 类型转换
        int a = 10;
        double b = a;  // 自动转换
        double c = 9.99;
        int d = (int)c;  // 强制转换

        System.out.println("姓名：" + name);
        System.out.println("年龄：" + age);
    }
}
```

### Day 3 - 运算符与表达式

**任务**:
```
□ 算术运算符：+ - * / %
□ 比较运算符：== != > < >= <=
□ 逻辑运算符：&& || !
□ 赋值运算符：= += -= *= /=
```

**练习**:
```java
public class OperatorsPractice {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        // 算术运算
        System.out.println("a + b = " + (a + b));
        System.out.println("a % b = " + (a % b));

        // 比较运算
        System.out.println("a > b: " + (a > b));
        System.out.println("a == b: " + (a == b));

        // 逻辑运算
        boolean x = true;
        boolean y = false;
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
    }
}
```

### Day 4 - 流程控制

**任务**:
```
□ if-else 条件判断
□ switch 多分支选择
□ for 循环
□ while 循环
□ break 和 continue
```

**前端对比**:
```java
// 和 JavaScript 几乎一样！

// if-else
if (score >= 90) {
    grade = "A";
} else if (score >= 60) {
    grade = "B";
} else {
    grade = "C";
}

// for 循环
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// while 循环
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}
```

### Day 5 - 数组

**任务**:
```
□ 数组声明和初始化
□ 数组遍历
□ 二维数组
□ 常用数组操作
```

**练习**:
```java
public class ArrayPractice {
    public static void main(String[] args) {
        // 声明数组
        int[] numbers = {1, 2, 3, 4, 5};
        String[] names = new String[3];
        names[0] = "Alice";
        names[1] = "Bob";
        names[2] = "Charlie";

        // 遍历数组
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }

        // 增强 for 循环（类似 for...of）
        for (String name : names) {
            System.out.println(name);
        }
    }
}
```

### Day 6 - 方法

**任务**:
```
□ 方法定义和调用
□ 参数传递
□ 返回值
□ 方法重载
```

**练习**:
```java
public class MethodPractice {

    // 定义方法
    public static int add(int a, int b) {
        return a + b;
    }

    // 方法重载（相同方法名，不同参数）
    public static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("5 + 3 = " + result);

        double doubleResult = add(5.5, 3.3);
        System.out.println("5.5 + 3.3 = " + doubleResult);
    }
}
```

### Day 7 - 第一周复习与小项目

**复习内容**:
```
□ 回顾本周所有知识点
□ 整理笔记
□ 解决遗留问题
```

**小项目：控制台待办事项管理器**

```java
import java.util.Scanner;

public class TodoManager {
    private static String[] todos = new String[10];
    private static int count = 0;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n=== 待办事项管理器 ===");
            System.out.println("1. 添加任务");
            System.out.println("2. 查看任务");
            System.out.println("3. 退出");
            System.out.print("请选择：");

            int choice = scanner.nextInt();
            scanner.nextLine(); // 消耗换行符

            switch (choice) {
                case 1:
                    addTodo(scanner);
                    break;
                case 2:
                    viewTodos();
                    break;
                case 3:
                    System.out.println("再见！");
                    return;
                default:
                    System.out.println("无效选择");
            }
        }
    }

    private static void addTodo(Scanner scanner) {
        if (count >= todos.length) {
            System.out.println("任务已满！");
            return;
        }
        System.out.print("请输入任务：");
        todos[count++] = scanner.nextLine();
        System.out.println("任务添加成功！");
    }

    private static void viewTodos() {
        if (count == 0) {
            System.out.println("暂无任务");
            return;
        }
        for (int i = 0; i < count; i++) {
            System.out.println((i + 1) + ". " + todos[i]);
        }
    }
}
```

---

# 第二周：Java 语言基础（下）

## 🎯 本周目标

- [ ] 掌握面向对象编程
- [ ] 理解类、对象、继承、多态
- [ ] 学会使用接口和抽象类
- [ ] 理解异常处理
- [ ] 初步了解集合框架

## 📚 每日学习安排

### Day 8 - 类和对象

**任务**:
```
□ 理解类的概念
□ 学会定义类
□ 创建和使用对象
□ 理解构造方法
```

**前端对比**:
```typescript
// TypeScript Class
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

// Java Class - 几乎一样！
public class User {
    private String name;
    private int age;

    // 构造方法
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void sayHello() {
        System.out.println("Hello, I'm " + name);
    }

    // Getter/Setter
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
```

### Day 9 - 封装与访问控制

**任务**:
```
□ private 私有成员
□ protected 受保护成员
□ public 公共成员
□ 默认（包级）访问
□ Getter/Setter 方法
```

**练习**:
```java
public class Person {
    // 私有属性，只能内部访问
    private String name;
    private int age;

    // 公共方法，外部可访问
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // 带验证的 Setter
    public void setAge(int age) {
        if (age > 0 && age < 150) {
            this.age = age;
        } else {
            System.out.println("年龄不合法！");
        }
    }
}
```

### Day 10 - 继承与多态

**任务**:
```
□ extends 继承
□ super 关键字
□ 方法重写（Override）
□ 多态的概念
```

**练习**:
```java
// 父类
public class Animal {
    public void makeSound() {
        System.out.println("动物发声");
    }
}

// 子类
public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("汪汪汪！");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("喵喵喵！");
    }
}

// 测试多态
public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();  // 父类引用，子类对象
        Animal myCat = new Cat();

        myDog.makeSound();  // 输出：汪汪汪！
        myCat.makeSound();  // 输出：喵喵喵！
    }
}
```

### Day 11 - 抽象类与接口

**任务**:
```
□ abstract 抽象类
□ 抽象方法
□ interface 接口
□ 实现接口
□ 默认方法和静态方法
```

**前端对比**:
```typescript
// TypeScript Interface
interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

// Java Interface - 类似但更严格
public interface Flyable {
    void fly();  // 隐含 public abstract
}

public interface Swimmable {
    void swim();
}

// 实现多个接口
public class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("鸭子在飞");
    }

    @Override
    public void swim() {
        System.out.println("鸭子在游泳");
    }
}
```

### Day 12 - 异常处理

**任务**:
```
□ try-catch-finally
□ throws 声明异常
□ throw 抛出异常
□ 自定义异常
□ 异常分类
```

**练习**:
```java
// 自定义异常
public class InsufficientBalanceException extends Exception {
    public InsufficientBalanceException(String message) {
        super(message);
    }
}

// 使用异常
public class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public void withdraw(double amount) throws InsufficientBalanceException {
        if (amount > balance) {
            throw new InsufficientBalanceException(
                "余额不足！当前余额：" + balance
            );
        }
        balance -= amount;
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);

        try {
            account.withdraw(500);  // 成功
            account.withdraw(600);  // 抛出异常
        } catch (InsufficientBalanceException e) {
            System.out.println("取款失败：" + e.getMessage());
        } finally {
            System.out.println("交易结束");
        }
    }
}
```

### Day 13 - 集合框架入门

**任务**:
```
□ List 接口和 ArrayList
□ Set 接口和 HashSet
□ Map 接口和 HashMap
□ 集合遍历
```

**前端对比**:
```typescript
// TypeScript
const list: number[] = [1, 2, 3];           → ArrayList<Integer>
const set: Set<number> = new Set();         → HashSet<Integer>
const map: Map<string, number> = new Map(); → HashMap<String, Integer>
```

**练习**:
```java
import java.util.*;

public class CollectionPractice {
    public static void main(String[] args) {
        // List - 有序列表
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Orange");

        for (String fruit : list) {
            System.out.println(fruit);
        }

        // Set - 不重复
        Set<String> set = new HashSet<>();
        set.add("Red");
        set.add("Blue");
        set.add("Red");  // 不会添加

        // Map - 键值对
        Map<String, Integer> map = new HashMap<>();
        map.put("Alice", 25);
        map.put("Bob", 30);

        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
```

### Day 14 - 第二周复习与项目

**复习内容**:
```
□ 面向对象三大特性（封装、继承、多态）
□ 抽象类 vs 接口
□ 异常处理机制
□ 集合框架基础
```

**小项目：简单图书管理系统**

```java
import java.util.*;

class Book {
    private String isbn;
    private String title;
    private String author;
    private boolean isBorrowed;

    public Book(String isbn, String title, String author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    }

    // getter/setter 省略...

    public void borrow() {
        if (isBorrowed) {
            System.out.println("《" + title + "》已被借出");
        } else {
            isBorrowed = true;
            System.out.println("借阅成功：《" + title + "》");
        }
    }

    public void returnBook() {
        isBorrowed = false;
        System.out.println("归还成功：《" + title + "》");
    }
}

class Library {
    private Map<String, Book> books = new HashMap<>();

    public void addBook(Book book) {
        books.put(book.getIsbn(), book);
        System.out.println("添加图书：《" + book.getTitle() + "》");
    }

    public Book searchBook(String keyword) {
        for (Book book : books.values()) {
            if (book.getTitle().contains(keyword)) {
                return book;
            }
        }
        return null;
    }

    public void showAllBooks() {
        System.out.println("=== 馆藏图书 ===");
        for (Book book : books.values()) {
            String status = book.isBorrowed() ? "(已借出)" : "(可借)";
            System.out.println("《" + book.getTitle() + "》" + status);
        }
    }
}

public class LibrarySystem {
    public static void main(String[] args) {
        Library library = new Library();

        library.addBook(new Book("001", "Java 编程思想", "Bruce Eckel"));
        library.addBook(new Book("002", "Effective Java", "Joshua Bloch"));
        library.addBook(new Book("003", "深入理解 JVM", "周志明"));

        library.showAllBooks();

        Book found = library.searchBook("Java");
        if (found != null) {
            found.borrow();
        }
    }
}
```

---

# 第三周：Spring Boot 核心（上）

## 🎯 本周目标

- [ ] 理解 Spring 和 Spring Boot 的区别
- [ ] 掌握 Spring Boot 项目结构
- [ ] 学会创建 REST API
- [ ] 理解 IoC 和 DI
- [ ] 完成第一个 CRUD 接口

## 📚 每日学习安排

### Day 15 - Spring Boot 简介与环境搭建

**任务**:
```
□ 理解 Spring 生态
□ 使用 Spring Initializr 创建项目
□ 了解项目结构
□ 运行第一个 Spring Boot 应用
```

**前端对比**:
```
Spring Boot ≈ Express + 一堆内置功能

Express:  npm install express
Spring:   Spring Initializr 选择依赖

Express:  app.get('/', handler)
Spring:   @GetMapping("/") handler()
```

**实践**:
1. 访问 https://start.spring.io/
2. 配置项目:
   - Project: Maven
   - Language: Java
   - Spring Boot: 最新稳定版
   - Dependencies: Spring Web, Spring Data JPA, H2 Database
3. 生成并导入 IDEA

### Day 16 - 第一个 REST Controller

**任务**:
```
□ @RestController 注解
□ @GetMapping 处理 GET 请求
□ @PostMapping 处理 POST 请求
□ @PathVariable 路径参数
□ @RequestParam 查询参数
```

**练习**:
```java
@RestController
@RequestMapping("/api/hello")
public class HelloController {

    // GET /api/hello
    @GetMapping
    public String sayHello() {
        return "Hello, Spring Boot!";
    }

    // GET /api/hello/John
    @GetMapping("/{name}")
    public String sayHelloToName(@PathVariable String name) {
        return "Hello, " + name + "!";
    }

    // GET /api/hello/greeting?name=John
    @GetMapping("/greeting")
    public String greeting(@RequestParam String name) {
        return "Good morning, " + name + "!";
    }
}
```

### Day 17 - 统一响应格式

**任务**:
```
□ 创建统一响应类
□ 使用 ResponseEntity
□ 处理不同 HTTP 状态码
```

**练习**:
```java
// 统一响应格式
@Data
@AllArgsConstructor
public class ApiResponse<T> {
    private int code;
    private String message;
    private T data;
    private long timestamp;

    public static <T> ApiResponse<T> success(T data) {
        return new ApiResponse<>(200, "success", data, System.currentTimeMillis());
    }

    public static <T> ApiResponse<T> error(int code, String message) {
        return new ApiResponse<>(code, message, null, System.currentTimeMillis());
    }
}

// 使用
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    public ApiResponse<List<User>> getAllUsers() {
        List<User> users = Arrays.asList(
            new User(1L, "Alice"),
            new User(2L, "Bob")
        );
        return ApiResponse.success(users);
    }
}
```

### Day 18 - Spring IoC 与依赖注入

**任务**:
```
□ 理解 IoC（控制反转）
□ @Component 标注组件
□ @Autowired 自动注入
□ @Service 服务层注解
□ @Repository 数据层注解
```

**前端对比**:
```typescript
// React Context - 类似概念
const UserService = useContext(UserServiceContext);

// Spring DI - 更简洁
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
}
```

**练习**:
```java
// Service 层
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("用户不存在"));
    }
}

// Controller 层
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
```

### Day 19 - 配置文件

**任务**:
```
□ application.properties
□ application.yml
□ @Value 读取配置
□ 多环境配置
```

**练习**:
```yaml
# application.yml
server:
  port: 8080

spring:
  application:
    name: blog-system
  datasource:
    url: jdbc:h2:mem:testdb
    username: sa
    password:
  h2:
    console:
      enabled: true

app:
  name: 博客系统
  version: 1.0.0
```

```java
// 读取配置
@Component
public class AppConfig {

    @Value("${app.name}")
    private String appName;

    @Value("${app.version}")
    private String version;
}
```

### Day 20 - 全局异常处理

**任务**:
```
□ @ControllerAdvice
□ @ExceptionHandler
□ 自定义异常
□ 错误响应格式
```

**练习**:
```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiResponse<Void>> handleRuntimeException(
            RuntimeException e) {
        ApiResponse<Void> response = ApiResponse.error(500, e.getMessage());
        return ResponseEntity.status(500).body(response);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ApiResponse<Void>> handleIllegalArgumentException(
            IllegalArgumentException e) {
        ApiResponse<Void> response = ApiResponse.error(400, e.getMessage());
        return ResponseEntity.status(400).body(response);
    }
}
```

### Day 21 - 第三周复习与项目

**复习内容**:
```
□ Spring Boot 项目结构
□ REST Controller 编写
□ IoC 和 DI
□ 配置管理
□ 异常处理
```

**实践项目：博客系统 API（基础版）**

```java
// 实体类
@Entity
@Table(name = "posts")
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

// Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByTitleContaining(String keyword);
}

// Service
@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {
        return postRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("文章不存在"));
    }

    public Post createPost(Post post) {
        post.setCreatedAt(LocalDateTime.now());
        return postRepository.save(post);
    }

    public Post updatePost(Long id, Post post) {
        Post existing = getPostById(id);
        existing.setTitle(post.getTitle());
        existing.setContent(post.getContent());
        existing.setUpdatedAt(LocalDateTime.now());
        return postRepository.save(existing);
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }
}

// Controller
@RestController
@RequestMapping("/api/posts")
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/{id}")
    public Post getPost(@PathVariable Long id) {
        return postService.getPostById(id);
    }

    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postService.createPost(post);
    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable Long id, @RequestBody Post post) {
        return postService.updatePost(id, post);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id) {
        postService.deletePost(id);
    }
}
```

---

# 第四周：Spring Boot 核心（下）

## 🎯 本周目标

- [ ] 深入理解 Bean 作用域
- [ ] 掌握参数验证
- [ ] 学习日志记录
- [ ] 了解拦截器和过滤器
- [ ] 完成博客系统 API 进阶功能

## 📚 每日学习安排

### Day 22 - Bean 作用域

**任务**:
```
□ Singleton 单例（默认）
□ Prototype 原型
□ Request 请求作用域
□ Session 会话作用域
□ @Scope 注解
```

### Day 23 - 参数验证

**任务**:
```
□ @Valid 注解
□ Hibernate Validator
□ 常用验证注解
□ 自定义验证器
```

**练习**:
```java
// DTO 验证
@Data
public class CreatePostRequest {

    @NotBlank(message = "标题不能为空")
    @Size(max = 200, message = "标题最多 200 字")
    private String title;

    @NotBlank(message = "内容不能为空")
    private String content;

    @Email(message = "邮箱格式不正确")
    private String authorEmail;
}

// Controller 使用
@PostMapping
public ResponseEntity<Post> createPost(
        @Valid @RequestBody CreatePostRequest request) {
    // 验证失败会自动抛出异常
    Post post = new Post();
    post.setTitle(request.getTitle());
    post.setContent(request.getContent());
    return ResponseEntity.ok(postService.createPost(post));
}
```

### Day 24 - 日志记录

**任务**:
```
□ SLF4J 日志接口
□ Logback 日志实现
□ 日志级别：DEBUG, INFO, WARN, ERROR
□ 日志配置
```

**练习**:
```java
@Service
@Slf4j  // Lombok 注解，自动生成 logger
public class PostService {

    public List<Post> getAllPosts() {
        log.info("获取所有文章");
        log.debug("查询数据库...");
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {
        log.info("获取文章，ID: {}", id);
        return postRepository.findById(id)
            .orElseThrow(() -> {
                log.error("文章不存在，ID: {}", id);
                return new RuntimeException("文章不存在");
            });
    }
}
```

### Day 25 - 拦截器与过滤器

**任务**:
```
□ HandlerInterceptor
□ Filter 过滤器
□ 使用场景
□ 执行顺序
```

**练习**:
```java
// 日志拦截器
@Component
public class LoggingInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request,
                            HttpServletResponse response,
                            Object handler) {
        long startTime = System.currentTimeMillis();
        request.setAttribute("startTime", startTime);
        return true;
    }

    @Override
    public void afterCompletion(HttpServletRequest request,
                               HttpServletResponse response,
                               Object handler,
                               Exception ex) {
        long startTime = (Long) request.getAttribute("startTime");
        long duration = System.currentTimeMillis() - startTime;
        log.info("{} {} - {}ms",
            request.getMethod(),
            request.getRequestURI(),
            duration);
    }
}

// 配置拦截器
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private LoggingInterceptor loggingInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loggingInterceptor)
                .addPathPatterns("/api/**");
    }
}
```

### Day 26 - 分页与排序

**任务**:
```
□ PageRequest 分页
□ Sort 排序
□ Page 响应
□ 自定义分页响应
```

**练习**:
```java
// Service
public Page<Post> getPosts(int page, int size, String sortBy) {
    Sort sort = Sort.by(sortBy).descending();
    PageRequest pageRequest = PageRequest.of(page, size, sort);
    return postRepository.findAll(pageRequest);
}

// Controller
@GetMapping
public Page<Post> getPosts(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "createdAt") String sortBy) {
    return postService.getPosts(page, size, sortBy);
}
```

### Day 27 - CORS 跨域配置

**任务**:
```
□ 理解 CORS
□ @CrossOrigin 注解
□ 全局 CORS 配置
□ 生产环境配置
```

**练习**:
```java
@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:3000");  // 前端地址
        config.addAllowedMethod("*");
        config.addAllowedHeader("*");
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
            new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);

        return new CorsFilter(source);
    }
}
```

### Day 28 - 第四周复习与项目完善

**复习内容**:
```
□ Bean 作用域
□ 参数验证
□ 日志记录
□ 拦截器
□ 分页排序
□ CORS 配置
```

**完善博客系统**:
```
□ 添加文章分类
□ 添加标签系统
□ 实现搜索功能
□ 添加分页
□ 完善错误处理
□ 添加请求日志
```

---

# 第五周：数据库与 JPA

## 🎯 本周目标

- [ ] 复习 SQL 基础
- [ ] 掌握 Spring Data JPA
- [ ] 理解实体关系映射
- [ ] 学会数据库设计
- [ ] 完成博客系统数据库层

## 📚 每日学习安排

### Day 29 - SQL 基础复习

**重点复习**:
```
□ SELECT 查询
□ WHERE 条件
□ JOIN 连接
□ GROUP BY 分组
□ INSERT/UPDATE/DELETE
```

### Day 30-31 - JPA 基础

**任务**:
```
□ @Entity 实体类
□ @Table 表映射
□ @Id @GeneratedValue 主键
□ @Column 列映射
□ JpaRepository 接口
```

### Day 32-33 - 实体关系

**任务**:
```
□ @OneToMany 一对多
□ @ManyToOne 多对一
□ @ManyToMany 多对多
□ 级联操作
□ 懒加载 vs 急加载
```

### Day 34 - 自定义查询

**任务**:
```
□ 方法名查询
□ @Query 自定义 SQL
□ 参数绑定
□ 原生查询
```

### Day 35 - 事务管理

**任务**:
```
□ @Transactional 注解
□ 事务传播
□ 事务隔离级别
□ 回滚规则
```

### Day 36 - 实践项目

**完善博客系统数据库层**:
```
□ 添加分类实体
□ 添加标签实体
□ 实现关系映射
□ 编写自定义查询
□ 添加事务管理
```

---

# 第六周：MySQL 与数据库进阶

## 🎯 本周目标

- [ ] 掌握 MySQL 基础
- [ ] 学会数据库设计
- [ ] 理解索引和优化
- [ ] 掌握数据库迁移
- [ ] 了解 Redis 缓存

## 📚 学习安排

### Day 37-38 - MySQL 基础

```
□ 安装和配置
□ 数据类型
□ 表操作
□ 索引基础
```

### Day 39-40 - 数据库设计

```
□ ER 图设计
□ 范式理论
□ 一对多设计
□ 多对多设计
```

### Day 41 - 数据库迁移

```
□ Flyway 基础
□ 迁移脚本编写
□ 版本管理
```

### Day 42-43 - 查询优化

```
□ EXPLAIN 分析
□ 索引优化
□ 慢查询日志
```

### Day 44 - Redis 缓存

```
□ Redis 基础
□ Spring Data Redis
□ 缓存注解
```

### Day 45 - 实践项目

**设计电商数据库**:
```
□ 用户表
□ 商品表
□ 订单表
□ 订单明细表
□ 分类表
```

---

# 第七周：API 设计进阶

## 🎯 本周目标

- [ ] 深入理解 RESTful
- [ ] 掌握 API 版本控制
- [ ] 学会 API 文档
- [ ] 理解幂等性
- [ ] 完成博客系统完整 API

## 📚 学习安排

### Day 46-47 - RESTful 进阶

```
□ REST 原则
□ 资源命名
□ HTTP 方法语义
□ 状态码使用
```

### Day 48 - API 版本控制

```
□ URL 版本
□ Header 版本
□ 版本兼容性
```

### Day 49-50 - Swagger 文档

```
□ OpenAPI 规范
□ Swagger 注解
□ Knife4j 增强
```

### Day 51 - 幂等性设计

```
□ 幂等概念
□ 实现方案
□ Token 机制
```

### Day 52 - 实践项目

**完善博客 API 文档**:
```
□ 添加 Swagger 注解
□ 编写 API 文档
□ 测试所有接口
```

---

# 第八周：认证与授权

## 🎯 本周目标

- [ ] 理解 Spring Security
- [ ] 掌握 JWT 认证
- [ ] 实现角色权限
- [ ] 完成用户系统

## 📚 学习安排

### Day 53-54 - Spring Security 基础

```
□ Security 核心概念
□ UserDetailsService
□ 密码加密
□ 认证流程
```

### Day 55-56 - JWT 实现

```
□ JWT 结构
□ Token 生成
□ Token 验证
□ 刷新机制
```

### Day 57-58 - 权限控制

```
□ 角色定义
□ 权限注解
□ 方法级安全
□ URL 安全
```

### Day 59 - 实践项目

**实现博客系统认证**:
```
□ 用户注册
□ 用户登录
□ JWT 认证
□ 权限控制
```

---

# 第九周：DevOps 基础

## 🎯 本周目标

- [ ] 掌握 Maven 构建
- [ ] 学会 Docker 基础
- [ ] 了解 CI/CD
- [ ] 完成项目容器化

## 📚 学习安排

### Day 60-61 - Maven 进阶

```
□ pom.xml 配置
□ 依赖管理
□ 多模块项目
□ 构建生命周期
```

### Day 62-63 - Docker 基础

```
□ Docker 概念
□ 镜像和容器
□ Dockerfile 编写
□ Docker Compose
```

### Day 64-65 - CI/CD

```
□ GitHub Actions
□ 自动化测试
□ 自动化部署
```

### Day 66 - 实践项目

**容器化博客系统**:
```
□ 编写 Dockerfile
□ 配置 docker-compose
□ 本地运行测试
```

---

# 第十周：部署与监控

## 🎯 本周目标

- [ ] 学会云服务器部署
- [ ] 掌握日志管理
- [ ] 了解监控告警
- [ ] 完成项目上线

## 📚 学习安排

### Day 67-68 - 云服务器

```
□ 选购云服务器
□ SSH 连接
□ 环境配置
□ 应用部署
```

### Day 69-70 - 日志管理

```
□ 日志收集
□ ELK Stack
□ 日志分析
```

### Day 71-72 - 监控告警

```
□ Spring Actuator
□ Prometheus
□ Grafana
```

### Day 73 - 实践项目

**部署博客系统**:
```
□ 购买云服务器
□ 配置生产环境
□ 部署应用
□ 配置域名
```

---

# 第十一周：综合实战（上）

## 🎯 本周目标

- [ ] 设计完整项目
- [ ] 实现核心功能
- [ ] 编写测试用例
- [ ] 代码审查优化

## 📚 学习安排

### Day 74-75 - 项目设计

```
□ 需求分析
□ 数据库设计
□ API 设计
□ 技术选型
```

### Day 76-78 - 核心功能开发

```
□ 用户模块
□ 业务模块
□ 管理模块
```

### Day 79-80 - 测试与优化

```
□ 单元测试
□ 集成测试
□ 性能测试
□ 代码优化
```

---

# 第十二周：综合实战（下）

## 🎯 本周目标

- [ ] 完成所有功能
- [ ] 编写项目文档
- [ ] 部署上线
- [ ] 准备求职作品

## 📚 学习安排

### Day 81-83 - 功能完善

```
□ 补充边缘功能
□ 修复 Bug
□ 性能优化
```

### Day 84-85 - 文档编写

```
□ README 文档
□ API 文档
□ 部署文档
```

### Day 86-87 - 部署上线

```
□ 生产环境部署
□ 域名配置
□ 监控配置
```

### Day 88 - 总结与求职准备

```
□ 整理 GitHub
□ 写技术博客
□ 准备面试题
□ 更新简历
```

---

## 📋 每周时间分配建议

```
工作日（周一至周五）:
- 早上 30 分钟：复习前一天内容
- 晚上 1.5 小时：学习新知识 + 实践

周末（周六、周日）:
- 上午 2 小时：实践项目
- 下午 1 小时：复习总结
```

## 💡 学习提示

1. **不要追求完美**：先完成再完美，快速迭代
2. **善用 AI 工具**：遇到不懂就问，但要先自己思考
3. **动手实践**：只看教程不写代码是学不会的
4. **记录问题**：建立自己的问题知识库
5. **加入社区**：遇到问题多交流，少走弯路

## 🎯 检查清单

完成学习后，你应该能够：

```
□ 独立创建 Spring Boot 项目
□ 设计并实现 REST API
□ 使用 JPA 操作数据库
□ 实现用户认证和授权
□ 配置 Docker 容器化
□ 部署应用到云服务器
□ 借助 AI 解决开发问题
```

---

> **恭喜你完成 12 周学习！现在你已经是一名 Java 全栈开发者了！**
