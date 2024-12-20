document.addEventListener("DOMContentLoaded", function() {
   
    // 图片轮换逻辑（保持不变）
    let left = document.querySelector(".button-left");
    let right = document.querySelector(".button-right");
    let m = document.querySelectorAll(".m");
    let images = document.querySelector(".images");
    let index = 0;
    let time;

    function position() {
        images.style.left = (index * -100) + "%";
        updateIndicators();
    }

    function add() {
        if (index >= m.length - 1) {
            index = 0;
        } else {
            index++;
        }
    }

    function desc() {
        if (index <= 0) {
            index = m.length - 1;
        } else {
            index--;
        }
    }

    function timer() {
        time = setInterval(() => {
            add();
            position();
        }, 3000);
    }

    function updateIndicators() {
        m.forEach((item, i) => item.classList.remove('active'));
        m[index].classList.add('active');
    }

    updateIndicators();

    left.addEventListener("click", () => {
        desc();
        position();
        clearInterval(time);
        timer();
    });

    right.addEventListener("click", () => {
        add();
        position();
        clearInterval(time);
        timer();
    });

    for (let i = 0; i < m.length; i++) {
        m[i].addEventListener("click", () => {
            index = i;
            position();
            clearInterval(time);
            timer();
        });
    }

    timer();

    // 中间圆形导航动画效果（保持不变）
    const items = document.querySelectorAll('.middle > .item');
    const observerOptions = {
        root: null, // 使用视窗作为根元素
        rootMargin: '0px',
        threshold: 0.2 // 当元素 20% 进入视口时触发
    };

    const animateItems = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('visible');
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // 每个元素之间延迟 100ms
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(animateItems, observerOptions);

    items.forEach(item => {
        observer.observe(item);
    });

    // 随机音频播放控制
    let currentlyPlayingAudio = null;

    items.forEach(item => {
        const audioSrcs = item.getAttribute('data-audio-src').split(' ');

        item.addEventListener('mouseenter', function() {
            if (currentlyPlayingAudio) {
                currentlyPlayingAudio.pause();
                currentlyPlayingAudio.currentTime = 0;
            }

            // 随机选择一个音频文件并创建 Audio 对象
            const randomSrc = audioSrcs[Math.floor(Math.random() * audioSrcs.length)];
            const audioPlayer = new Audio(randomSrc);

            audioPlayer.currentTime = 0;
            audioPlayer.play();
            currentlyPlayingAudio = audioPlayer;
        });

        item.addEventListener('mouseleave', function() {
            // 当鼠标移出.item时，允许音频继续播放
        });
    });
});


// 历史切换
// 历史切换
// 历史切换

document.addEventListener("DOMContentLoaded", function() {
    // 页面切换逻辑
    const leftButton = document.querySelector(".his-button-left");
    const rightButton = document.querySelector(".his-button-right");
    const indicators = document.querySelectorAll(".h");
    const pages = document.querySelectorAll(".his-writting");
    let pageIndex = 0;

    function updatePageVisibility() {
        pages.forEach((page, index) => {
            page.classList.toggle('active', index === pageIndex);
        });
        updateIndicators();
    }

    function nextPage() {
        pageIndex = (pageIndex + 1) % pages.length;
        updatePageVisibility();
    }

    function prevPage() {
        pageIndex = (pageIndex - 1 + pages.length) % pages.length;
        updatePageVisibility();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => indicator.classList.toggle('active', index === pageIndex));
    }

    // 初始化显示第一页
    updatePageVisibility();

    leftButton.addEventListener("click", prevPage);
    rightButton.addEventListener("click", nextPage);

    for (let i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", () => {
            pageIndex = i;
            updatePageVisibility();
        });
    }


});


// 表演形式切换
document.addEventListener("DOMContentLoaded", function() {
    // 页面切换逻辑
    const leftButton = document.querySelector(".form-button-left");
    const rightButton = document.querySelector(".form-button-right");
    const indicators = document.querySelectorAll(".f");
    const pages = document.querySelectorAll(".form-writting");
    let pageIndex = 0;

    function updatePageVisibility() {
        pages.forEach((page, index) => {
            page.classList.toggle('active', index === pageIndex);
        });
        updateIndicators();
    }

    function nextPage() {
        pageIndex = (pageIndex + 1) % pages.length;
        updatePageVisibility();
    }

    function prevPage() {
        pageIndex = (pageIndex - 1 + pages.length) % pages.length;
        updatePageVisibility();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => indicator.classList.toggle('active', index === pageIndex));
    }

    // 初始化显示第一页
    updatePageVisibility();

    leftButton.addEventListener("click", prevPage);
    rightButton.addEventListener("click", nextPage);

    for (let i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", () => {
            pageIndex = i;
            updatePageVisibility();
        });
    }


});