// تعريف المحتوى لكل قسم
const sections = {
    home: `
        <h1>Hoş Geldiniz!</h1>
        <p>Kişisel web siteme hoş geldiniz. Burada hakkımda bilgi bulabilir, projelerimi inceleyebilir ve iletişim kurabilirsiniz.</p>
    `,
    about: `
        <h1>Hakkımda</h1>
        <p>Ben [Adınız]. Yazılım geliştirme, web tasarımı ve teknolojiye ilgim var. Hedefim sürekli öğrenmek ve yaratıcı projeler geliştirmek.</p>
    `,
    
    hobbies: `
        <h1>Hobilerim</h1>
        <ul>
            <li>Yazılım geliştirme</li>
            <li>Yeni şeyler öğrenme</li>
            <li>Kitap okuma</li>
            <li>Seyahat etme</li>
        </ul>
    `,
    contact: `
        <h1>İletişim</h1>
        <p>Bana ulaşmak için aşağıdaki bağlantıları kullanabilirsiniz:</p>
        <ul>
            <li>E-posta: <a href="mailto:youremail@example.com">youremail@example.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank">Profilimi Ziyaret Et</a></li>
            <li>GitHub: <a href="https://github.com/yourprofile" target="_blank">Projelerimi Gör</a></li>
        </ul>
    `
};

// التحكم في تغيير المحتوى
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.getAttribute('data-section');
        document.getElementById('content').innerHTML = sections[section];
    });
});



