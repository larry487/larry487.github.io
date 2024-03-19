// 在DOM加载完成后执行
document.addEventListener("DOMContentLoaded", function() {
    // 获取所有的导航链接
    const navLinks = document.querySelectorAll('.nav-link');

    // 为每个导航链接添加点击事件监听器
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // 阻止默认链接行为
            event.preventDefault();
            // 获取目标部分的ID
            const targetId = link.getAttribute('href').substring(1);
            // 滚动到目标部分
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 获取所有的社交图标
    const socialIcons = document.querySelectorAll('.social-icon');

    // 为每个社交图标添加鼠标悬停事件监听器
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            // 在鼠标悬停时增加一些动画效果
            icon.style.transform = 'scale(1.2)';
        });
        icon.addEventListener('mouseout', function() {
            // 鼠标移开时恢复原始大小
            icon.style.transform = 'scale(1)';
        });
    });
});
