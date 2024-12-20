document.addEventListener('DOMContentLoaded', function() {
    var enterButton = document.querySelector('.button .text');
    var flipContainer = document.querySelector('body');

    enterButton.addEventListener('click', function(event) {
        event.preventDefault(); // 防止链接默认行为
        
        // 为body添加翻转类
        flipContainer.classList.add('flip-container');
        flipContainer.classList.add('flipped');

        // 动画完成后跳转页面（假设动画持续时间为0.5秒）
        setTimeout(function() {
            window.location.href = "Main page.html";
        }, 500); // 与CSS中的动画时间相匹配
    });
});