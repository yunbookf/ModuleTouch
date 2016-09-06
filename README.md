# ModuleTouch
Event extend for mobile and compatible with PC browser.  
  
For example:  
  
TypeScript:  

```typescript
ModuleTouch.tap("#touchDiv", function(): void {
    $("#showDiv").append("<br>Yeah!");
});
```
  
JavaScript:  

```javascript
ModuleTouch.tap("#touchDiv", function() {
    $("#showDiv").append("<br>Yeah!");
});
```
  
## On mousedown or touch down

normal:  
  
```html
<div id="touchDiv">touch me</div>
```
  
touch:  
  
```html
<div id="touchDiv" class="hover">touch me</div>
```
  
You can use CSS to custom style.

## 浏览器兼容 / Compatibility
我们仅兼容现代浏览器，正如我们在演示的时候使用了 jQuery 3.1.0 一样。  
We are only compatible with modern browsers, like we use jQuery 3.1.0.  

## 关于 / About
本组件由韩国帅开发开源，欢迎各位PR。  
Powered by Maiyun.net, welcome to pull request.  
http://hanguoshuai.com  
  
Translation is provided by Microsoft.