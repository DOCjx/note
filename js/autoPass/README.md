# 一键登录教务在线Chrome插件

## 解决的问题

    登录教务在线时只能记住两个输入框的值，但是选择运营商这个选择菜单的值却无法被记住，每次登录都要手动选择

## 开发中遇到的问题

- 1.程序页面和插入的脚本之间的通信
- 2.处理用户未进行设置便点击登录的交互逻辑

## 还未解决的问题

- 1.刷新页面会使页面出现bug

    分析：刷新页面后插入的脚本没有在新刷新的页面执行

- 2.插件是在后台运行，并不是在指定页面才运行

    分析：配置match字段
