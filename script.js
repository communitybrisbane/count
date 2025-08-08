/* ===== GLOBAL VARIABLES ===== */
const translations = {
    ja: {
        headerSubtitle: "― 僕のワーホリ365日間 ―",
        introTitle: "Takuのワーホリ365日間",
        introBody: "大学院を休学し、オーストラリアへ。そこでは、想像もしなかった出会いと挑戦が待っていました。これは、情熱と戦略を持って生き抜いたブリスベンでのワーホリハイライトです。"
    }
};

/* ===== CONTENT RENDERING ===== */
function renderContent() {
    const T = translations.ja;
    
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Update page elements
    updatePageElements(T);
    
    // Apply fade-in animations
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

function updatePageElements(T) {
    // Update header subtitle
    const headerSubtitle = document.getElementById('header-subtitle');
    if (headerSubtitle) {
        headerSubtitle.textContent = T.headerSubtitle;
    }
    
    // Update introduction section
    const introTitle = document.getElementById('intro-title');
    const introBody = document.getElementById('intro-body');
    if (introTitle) {
        introTitle.textContent = T.introTitle;
    }
    if (introBody) {
        introBody.textContent = T.introBody;
    }
}

/* ===== MODAL FUNCTIONS ===== */
function closeModal() {
    const modal = document.getElementById('storyModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function openChapterModal(chapterIndex) {
    const modal = document.getElementById('chapterModal');
    const modalTitle = document.getElementById('chapterModalTitle');
    const modalSubtitle = document.getElementById('chapterModalSubtitle');
    const modalNumber = document.getElementById('chapterModalNumber');
    const modalBody = document.getElementById('chapterModalBody');
    const modalIcon = document.getElementById('chapterModalIcon');
    
    const chapters = [
        {
            title: "第0章：ゲームの始まり",
            subtitle: "CHAPTER 0",
            number: "00",
            icon: "🎮",
            content: "大学院を休学し、安定のレールから飛び降りた。これは、誰でもない僕が異国の地で自分だけのゲームを始めた序章。セブ島での助走を経て、片道航空券と小さな自信だけを武器に、ブリスベンに降り立った。"
        },
        {
            title: "第1章：「ないなら、作ればいい」",
            subtitle: "CHAPTER 1",
            number: "01",
            icon: "🏠",
            content: "ブリスベンでの生活は、想像を絶する孤独との戦いから始まった。家なし、仕事なし、友達なし。どん底で気づいた：「待っていても何も変わらない。欲しいものは、自分の手で作らなければ」。これがcommunity_brisbaneの原動力となった。"
        },
        {
            title: "第2章：加速するコミュニティ",
            subtitle: "CHAPTER 2",
            number: "02",
            icon: "🚀",
            content: "仲間たちとの出会いと別れを繰り返しながら、コミュニティは形を変えながら成長した。転機となった新しいイベントで最強の仲間と出会い、活動は急速に加速。"
        },
        {
            title: "第3章：集大成と不安",
            subtitle: "CHAPTER 3",
            number: "03",
            icon: "🤝",
            content: "年末に開催した大規模イベントは大成功を収めた。熱狂の渦の中心にいながら、小さな「不安」が心に芽生え始めた。残り6ヶ月。このままでは終われない。"
        },
        {
            title: "第4章：オーストラリアロードトリップ",
            subtitle: "CHAPTER 4",
            number: "04",
            icon: "🛣️",
            content: "ワーホリ最後に、僕は8週間のロードトリップに出た。オーストラリアの壮大な自然は、僕に「本当にやりたいこと」を問い続ける。"
        },
        {
            title: "第5章：僕のワーホリ 365days",
            subtitle: "CHAPTER 5",
            number: "05",
            icon: "🎯",
            content: "この365日は、僕にとっての完全なる自由。義務がない環境かでなにをするのか。なにができるのが。常に1年という制約を感じながら生きるゲーム。"
        }
    ];
    
    const chapter = chapters[chapterIndex];
    if (chapter) {
        modalTitle.textContent = chapter.title;
        modalSubtitle.textContent = chapter.subtitle;
        modalNumber.textContent = chapter.number;
        modalBody.textContent = chapter.content;
        modalIcon.textContent = chapter.icon;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeChapterModal() {
    const modal = document.getElementById('chapterModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function openBonusModal(type) {
    const modal = document.getElementById(`${type}Modal`);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeBonusModal(type) {
    const modal = document.getElementById(`${type}Modal`);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

/* ===== EVENT LISTENERS ===== */
document.addEventListener('DOMContentLoaded', function() {
    renderContent();
    
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal.show');
            modals.forEach(modal => {
                modal.classList.remove('show');
            });
            document.body.style.overflow = 'auto';
        }
    });
});