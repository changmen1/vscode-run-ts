# 在vscode中运行ts

## 1.全局安装ts-node包

```bash
npm install -g ts-node
```

## 2.在vscode商店安装Code Runner插件

![Code Runner](/assets/codeRunner.png)

## 3.创建TypeScript项目

> 在VS Code中创建一个新的文件夹,然后打开终端(快捷键Ctrl+Shift+`),然后出入以下命令:

```bash
tsc --init
```

> 这将会创建一个tsconfig.json的文件,这个文件包含了TypeScript编译器的配置选项。

## 5.编写TypeScript代码

> 在项目中创建一个.ts文件,然后编写代码:

```typescript
let data: string = '朱昕龙';
console.log(data);
```

## 6.运行TypeScript代码

> 点击右上角的运行按钮可以看到控制面板运行结果 或者快捷键 ```CTRL+ALT+N```

![out](/assets/out.png)

- 此时会发现在运行时,创建了tempCodeRunnerFile.ts文件,这个文件是ts-node自动生成的,用于临时存储TypeScript代码的编译结果。

- 如果想关闭自动生成,可以在设置中搜索 ```ignoreSelection```  ,选中就可以取消了

![delete](/assets/delete.png)

## 7.出现乱码如何解决

> 设置>Extensions 找到```Run Code configuration```,勾上```Run In Terminal```选项,即可解决

![seeting](/assets/seeting.png)
