# 头像样式切换指南

在 `assets/css/geek-styles.css` 文件的 `:root` 部分，你可以轻松切换头像样式：

## 当前样式（方形圆角）
```css
--avatar-border-radius: 12px; /* 方形圆角 */
--avatar-border: none; /* 无边框 */
--avatar-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* 阴影 */
```

## 切换到圆形头像
```css
--avatar-border-radius: 50%; /* 圆形 */
--avatar-border: none; /* 无边框 */
--avatar-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* 阴影 */
```

## 切换到带边框的圆形头像
```css
--avatar-border-radius: 50%; /* 圆形 */
--avatar-border: 3px solid var(--accent-primary); /* 边框 */
--avatar-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* 阴影 */
```

## 切换到无阴影的简约风格
```css
--avatar-border-radius: 12px; /* 方形圆角 */
--avatar-border: none; /* 无边框 */
--avatar-shadow: none; /* 无阴影 */
```

## 切换到渐变边框风格
```css
--avatar-border-radius: 50%; /* 圆形 */
--avatar-border: 4px solid transparent; /* 透明边框 */
--avatar-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* 阴影 */
```

然后需要在 `.profile-avatar` 样式中添加：
```css
background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
padding: 4px;
```

并添加内部图片样式：
```css
.profile-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
```

修改后刷新浏览器即可看到效果。