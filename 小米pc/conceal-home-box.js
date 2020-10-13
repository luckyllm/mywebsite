var boxA = (document.getElementByClassName("conceal-home-box-conture"))[0];
var boxB = (document.getElementByClassName("conceal-home-box"))[0];

// 当鼠标移入元素A时
boxA.addEventListener("mouseover", function() {
  boxB.style.display = "block";
});
// 当鼠标移出元素A时
boxA.addEventListener("mouseout", function() {
  boxB.style.display = "none";
})