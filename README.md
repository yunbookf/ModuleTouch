# ModuleTouch
无延迟的手机 click 事件、scrollStart 和 scrollEnd 事件，兼容电脑和手机，使用 jQuery 3.1.0。
No delay mobile click, scrollStart and scrollEnd Events. compatible desktop browser and mobile with jQuery 3.1.0.

```html
<script src="touch.min.js"></script>
```
  
For example:  
  
TypeScript:  

```typescript
ModuleTouch.tap("#touchDiv", function(): boolen {
    $("#showDiv").append("<br>Yeah!");
    return false;
});
```
  
JavaScript:  

```javascript
ModuleTouch.tap("#touchDiv", function() {
    $("#showDiv").append("<br>Yeah!");
    return false;
});
```
  
## On mousedown or touch down

normal:  
  
```html
<div id="touchDiv">touch me</div>
```
  
touch:  
  
```html
<div id="touchDiv" class="active-mt">touch me</div>
```
  
You can use CSS to custom style.

## On desktop browser mouse hover

normal:  
  
```html
<div id="touchDiv">touch me</div>
```
  
touch:  
  
```html
<div id="touchDiv" class="hover-mt">touch me</div>
```

Only desktop browser.

## scrollStart and scrollEnd

```typescript
ModuleTouch.scrollStart("#scrollDiv", function(): void {
    $(this).addClass("scroll");
});
ModuleTouch.scrollEnd("#scrollDiv", function(): void {
    $(this).removeClass("scroll");
});
```

Support desktop browser and mobile.

## 但凡不是 a 标签，请 return false / Anyone who is not a link, return false
  
```typescript
ModuleTouch.tap("span", function(e: JQueryEventObject): any {
    // do something...
    return false;
});
```

## 浏览器兼容 / Compatibility
我们仅兼容现代浏览器，正如我们在演示的时候使用了 jQuery 3.1.0 一样。  
We are only compatible with modern browsers, like we use jQuery 3.1.0.  

## 关于 / About
本组件由韩国帅开发开源，欢迎各位PR。  
Powered by Maiyun.net, welcome to pull request.  
http://hanguoshuai.com  
  
Translation is provided by Microsoft.

## 修改记录 / ChangeLog

### v0.4
[FIX] 修复如果给 body 绑定事件的话即使滚动也响应了 tap 事件。
[CHANGE] 请将之前的 hover-mt 都变更为 active-mt，active-mt 将会在 PC 和手机的点击时间添加，hover-mt 仅仅会在 PC 上体现。
[NEW] 新增 scrollStart 和 scrollEnd 事件，兼容电脑和手机（电脑在单次滚动之后，手机在手指离开后缓动结束后）。