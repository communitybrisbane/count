// Variable to store the current language setting
let currentLang = 'ja';

// Object containing all text content for both Japanese and English
const translations = {
    ja: {
        pageTitle: "THE BRISBANE GAME ― 休学ワーホリ、初海外、仲間と駆け抜けた365日",
        langToggle: "English",
        headerSubtitle: "― 休学ワーホリ、初海外、仲間と駆け抜けた365日 ―",
        aboutTitle: "これは、Takuの物語。",
        aboutSubtitle: "大学院を休学し、オーストラリアへ。そこでは、想像もしなかった出会いと挑戦が待っていました。これは、孤独なスタートから始まり、多くの仲間と共に「居場所」を作り上げ、自分だけの地図を描いた一年間の記録です。",
        introTitle: "これは、Takuの物語。",
        introBody: "大学院を休学し、オーストラリアへ。そこでは、想像もしなかった出会いと挑戦が待っていました。これは、孤独なスタートから始まり、多くの仲間と共に「居場所」を作り上げ、自分だけの地図を描いた一年間の記録です。",
        epilogueTitle: "感謝を込めて",
        epilogueH1: "community_brisbaneの仲間たちへ",
        epilogueP1: "一緒についてきてくれた仲間がいたから、ここまでこれた。",
        epilogueH2: "1stワーホリで出会った、すべての友達へ",
        epilogueP2: "このゲームの「365日」を創ってくれてありがとう。",
        bonusTitle: "番外編",
        bonusH1: "community_brisbane 運営の裏側",
        skillsTitle: "CLEAR REWARD",
        skillsSubtitle: "このゲームを通して、Takuは多くのスキルを手に入れた。",
        modalClose: "閉じる",
        storyData: [
            { chapter: "序章：冒険の始まり (2024年5月〜7月)", title: "2024年5月、大学院を休学", icon: "🎓", summary: "「このままじゃダメだ」― 敷かれたレールを外れる決意をした日。", details: "自分の人生を見つめなおし、「このままでは後悔する」という強い思いが込み上げてきました。周りの期待や安定した未来よりも、自分が本当に心惹かれる道を選びたい。そう決意し、休学届を提出。ここから、誰にも縛られない、自分だけの物語を描くための365日が始まりました。", image: "https://placehold.co/600x400/0B69A3/white?text=決意の日" },
            { chapter: "序章：冒険の始まり (2024年5月〜7月)", title: "最初の挑戦、セブ島へ", icon: "✈️", summary: "オーストラリアへの助走期間。英語と、海外で生きるということに初めて触れた日々。", details: "いきなりオーストラリアへ飛び込むのは不安だったので、まずはフィリピン・セブ島で3ヶ月の語学留学をすることに。ここで初めて海外で生活し、多様な文化に触れ、英語でコミュニケーションをとる楽しさと難しさを学びました。この経験が、後のブリスベンでの生活の大きな土台となります。", image: "https://placehold.co/600x400/1E88E5/white?text=セブ島での学び" },
            { chapter: "第1章：ブリスベン、孤独とサバイバル (2024年8月)", title: "片道航空券と、セブ島で得た小さな自信", icon: "🎫", summary: "オーストラリアへ。人生の本当の冒険が、ついに幕を開ける。", details: "セブ島での経験で少しだけ自信をつけ、片道航空券を握りしめてブリスベンへ。しかし、空港に降り立った瞬間、本当の挑戦はここからだと実感しました。期待と不安が入り混じる中、僕のゲームが本格的にスタートしました。", image: "https://placehold.co/600x400/299DBC/white?text=ブリスベン到着" },
            { chapter: "第1章：ブリスベン、孤独とサバイバル (2024年8月)", title: "最初の試練：生活インフラを整えよ！", icon: "🏠", summary: "家なし、仕事なし、友達なし。毎日がクエストだった、サバイバル生活のリアル。", details: "最初の1週間は本当に過酷でした。住む家を探し、銀行口座を開設し、携帯電話を契約する。一つ一つのタスクが大きな壁のように感じられました。言葉の壁にもぶつかりながら、必死で生活の基盤を築いていきました。", image: "https://placehold.co/600x400/3F51B5/white?text=サバイバル生活" },
            { chapter: "第1章：ブリスベン、孤独とサバイバル (2024年8月)", title: "「友達の作り方、教えてください！」", icon: "🗣️", summary: "孤独に耐えきれず、なにかしたい。それが、すべての始まりだった。", details: "生活は安定してきたものの、独りの日々は想像以上に辛いものでした。このままではいけない。どうすれば友達ができるんだろう？その純粋な問いと行動したいという衝動が、後のコミュニティ設立へと繋がる最初のきっかけでした。", image: "https://placehold.co/600x400/5C6BC0/white?text=孤独と向き合う" },
            { chapter: "第2章：僕らの\"居場所\"ができた日 (2024年8月25日〜10月)", title: "8月25日、community_brisbane爆誕", icon: "🎉", summary: "「ないなら、作ればいい」― 友達づくりの「機会」を創るという、人生で一番面白いゲームの始まり。", details: "待っていても何も変わらない。それなら、自分が人々が集まれる「機会」や「場所」を作ればいいんだ。最初は数人しか集まらなかったけれど、これが僕らのコミュニティの始まりでした。", image: "https://placehold.co/600x400/F47C20/white?text=コミュニティ爆誕" },
            { chapter: "第2章：僕らの\"居場所\"ができた日 (2024年8月25日〜10月)", title: "最初の仲間と、最初の壁：存続の危機", icon: "🧱", summary: "ルームメイトたちが手伝ってくれたが、彼らが去り、運営の危機。", details: "当初はルームメイトたちが運営を手伝ってくれましたが、彼らもそれぞれブリスベンを離れていきました。気づけば運営は僕一人に。「もっとやりたかった」という去った仲間の言葉を背負いながらたった一人でコミュニティを続けることに。", image: "https://placehold.co/600x400/78909C/white?text=存続の危機" },
            { chapter: "第2章：僕らの\"居場所\"ができた日 (2024年8月25日〜10月)", title: "10月17日、方向転換のおにぎりイベント", icon: "🍙", summary: "おにぎりイベントで、新たな協力者と出会う。", details: "このままではダメだ。何か新しい流れを作らなければ。そう考えて企画したのが、日本文化の象徴でもある「おにぎり」をみんなで作るイベントでした。このイベントが大当たりし、多くの人が集まってくれただけでなく、運営に協力してくれる新しい仲間との出会いにも繋がりました。", image: "https://placehold.co/600x400/4CAF50/white?text=おにぎりイベント" },
            { chapter: "第2章：僕らの\"居場所\"ができた日 (2024年8月25日〜10月)", title: "多角化への挑戦と挫折：「本気でやる」という意味", icon: "🧭", summary: "別プロジェクトの失敗が、「本気」の意味を教えてくれた。", details: "コミュニティ運営の傍ら、英会話、自転車レンタル、ワーホリ支援などにも着手してました。しかし、どれも失敗。この経験から、一つのことに「本気で」集中することの重要性を痛感しました。僕が本当にやるべきことは、コミュニティを育てることだと気づかされたのです。", image: "https://placehold.co/600x400/FFC107/white?text=挑戦と挫折" },
            { chapter: "第2章：僕らの\"居場所\"ができた日 (2024年8月25日〜10月)", title: "時給30ドルがくれた「心の余白」", icon: "💰", summary: "10月末までに、1.5ヶ月で$6000の貯金。お金の自由が、僕に行動する勇気と時間を与えてくれた。", details: "経済的な安定は、精神的な安定に直結します。お金の心配がなくなったことで、コミュニティ活動にさらに情熱を注ぐことができる「心の余白」が生まれました。", image: "https://placehold.co/600x400/8BC34A/white?text=経済的自立" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "11月2日、相棒との出会い", icon: "🤝", summary: "この仲間と何かを成し遂げたいという、新しい夢ができた。", details: "運営に悩んでいた時期に、僕の情熱に共感し、「一緒にやりたい」と言ってくれる最高の相棒に出会いました。彼との出会いがコミュニティをさらに加速させ、一人では見えなかった景色を見せてくれました。この仲間となら、もっと大きなことができる。そう確信しました。", image: "https://placehold.co/600x400/673AB7/white?text=最高の相棒" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "出会いと別れが教えてくれたこと", icon: "👣", summary: "仲間たちとの日々が、僕の価値観を広げ、人生の選択肢を教えてくれた。", details: "ワーホリでは、毎日のように新しい出会いがあり、そして同じだけ別れがあります。一期一会の関係の中で、人と比べずに自分らしくいること、限られた時間を大切にすることを学びました。国籍や文化を超えた友情は、僕の世界を何倍にも広げてくれました。", image: "https://placehold.co/600x400/9C27B0/white?text=出会いと別れ" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "コミュニティの熱狂：クリスマス会と忘年会BBQ", icon: "🎄", summary: "仲間たちと作り上げた熱狂の渦。僕らの物語は、これからもっと面白くなる。", details: "相棒や運営メンバーと共に企画したクリスマス会には50人以上が集まり、大成功を収めました。年末のBBQも大盛況。コミュニティが確かに人々の「居場所」になっていることを実感し、感動で胸が熱くなりました。この熱狂は、僕らの努力が形になった証でした。", image: "https://placehold.co/600x400/E91E63/white?text=熱狂のイベント" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "年末の決断：もう一年、ここにいる", icon: "🗓️", summary: "仲間と見つけた目標を前に、休学をもう一年延長することを決めた日。", details: "当初の計画では、1年で日本に帰国する予定でした。しかし、このコミュニティと仲間たちとの未来を考えると、どうしても離れがたい。悩んだ末に、大学や家族に連絡し、もう1年休学を延長させてもらうことに。自分の気持ちに正直に、大きな決断を下しました。", image: "https://placehold.co/600x400/F44336/white?text=大きな決断" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "誕生日に気づいた、仲間の大切さ", icon: "🎂", summary: "僕のために集まり、祝ってくれる仲間たち。彼らがいるから、今の僕がいる。", details: "自分の誕生日に、仲間たちがサプライズでパーティーを開いてくれました。異国の地で、こんなにも温かい祝福を受けるなんて。孤独だった渡航初日が嘘のようでした。このコミュニティを作って本当に良かったと、心から思えた一日でした。", image: "https://placehold.co/600x400/FF9800/white?text=最高の誕生日" },
            { chapter: "第3章：出会い、葛藤、そして大きな決断 (2024年11月〜2025年3月)", title: "2月15日、日本食マートとの縁日コラボ", icon: "🏮", summary: "地元の日本食マートを巻き込んだ、過去最大規模のイベント。", details: "僕らの活動が地域にも認められ、地元の日本食料品店とのコラボイベントが実現。企画から運営の主導までを相棒が見事にやり遂げました。彼の成長した姿を見られたことは、僕自身の喜びでもありました。コミュニティが外部と連携し、新たな価値を生んだ記念すべき日です。", image: "https://placehold.co/600x400/D32F2F/white?text=縁日コラボ" },
            { chapter: "第4章：ロードトリップ (2025年4月〜6月)", title: "僕がcommunity_brisbaneでしてきたこと", icon: "📜", summary: "僕が作ったこの場所は、たくさんの人の笑顔と「ありがとう」で溢れていた。", details: "旅立ちを前に、これまでの活動を振り返りました。毎週のイベント、SNSでの発信、数えきれないほどの出会い。僕が始めた小さな一歩が、多くの人のブリスベンでの生活を彩る一部になれたこと。その事実に、大きな達成感と感謝の気持ちが込み上げてきました。", image: "https://placehold.co/600x400/607D8B/white?text=これまでの軌跡" },
            { chapter: "第4章：ロードトリップ (2025年4月〜6月)", title: "4月、旅立ちの決意とお別れ会", icon: "👋", summary: "守りたい場所があることに気づかされた瞬間。そして迎えたお別れ会。", details: "帰国最後のロードトリップのため、ブリスベンを離れることを決意。すると仲間から「コミュニティがなくなるのは寂しい」という声が。僕が作った場所が、僕がいなくても求められている。その事実に感動し、この場所を守り続けたいと強く思いました。お別れ会は、再会を誓う温かい会になりました。", image: "https://placehold.co/600x400/546E7A/white?text=旅立ちとお別れ会" },
            { chapter: "第4章：ロードトリップ (2025年4月〜6月)", title: "4月30日、8週間の旅へ", icon: "🚗", summary: "シドニー、ウルル、ダーウィン、ケアンズ… 大自然の中で自問自答を繰り返す。", details: "車でオーストラリア大陸を巡る8週間の旅へ。壮大な自然の中に身を置くと、自分の悩みがちっぽけに思えました。これからの人生で何を成し遂げたいのか、自分はどこへ向かうべきなのか。自分自身と深く向き合う、貴重な時間となりました。", image: "https://placehold.co/600x400/C2185B/white?text=ロードトリップ" },
            { chapter: "第4章：ロードトリップ (2025年4月〜6月)", title: "旅の終わりに見つけた「次の一歩」", icon: "🗺️", summary: "旅は、僕に次の目的を与えてくれた。", details: "旅を通して見つけた答えは、シンプルでした。ブリスベンに戻り、あのコミュニティをもっと大きく、もっと素晴らしい場所にしたい。そのために、学生ビザを取得してでも挑戦を続けよう。旅は僕の迷いを断ち切り、進むべき道をはっきりと示してくれました。", image: "https://placehold.co/600x400/7B1FA2/white?text=次の一歩" },
            { chapter: "第5章：365日目の約束 (2025年7月31日〜)", title: "新たな相棒と、新たな挑戦へ", icon: "🚀", summary: "僕の決意に共感し、「一緒にやりたい」と言ってくれる新たな相棒が待っていた。", details: "ブリスベンに戻ると、僕の旅の話とこれからの計画に目を輝かせ、「ぜひ一緒にやらせてほしい」という新しい仲間が現れました。僕の情熱が、また新しい情熱に火をつけた瞬間でした。一人じゃない、僕らの第二章がここから始まります。", image: "https://placehold.co/600x400/0277BD/white?text=新たな仲間" },
            { chapter: "第5章：365日目の約束 (2025年7月31日〜)", title: "ワーホリ最終日の7月31日、「終わり」じゃない、「始まり」だ", icon: "🏁", summary: "1stワーホリ終了。でも、僕の物語はここで終わらない。", details: "ワーキングホリデービザが切れる365日目。しかし、これは決してゴールではありません。翌日からは学生ビザに切り替え、僕はブリスベンに残ります。この街で、仲間たちと共に、僕のゲームのセカンドシーズンが幕を開けるのです。", image: "https://placehold.co/600x400/004D40/white?text=新たなスタート" },
        ],
        bonusAccordionData: [
            { title: "運営の哲学：僕らが大切にしていたこと", content: "なぜ「誰でも参加できる」にこだわったのか。それは、僕自身が最初に孤独を感じていたから。国籍、年齢、英語力に関わらず、誰もが安心して来られる場所。それが僕らの目指したコミュニティの形でした。"},
            { title: "仲間集めの流儀：どうやって運営チームを作ったか", content: "スキルや経験よりも、「わくわくという挑戦したい」という気持ちと、「誰かのために」という人柄を大切にしました。同じ目標を向いて、一緒に楽しんでくれる。そんな信頼できる仲間を見つけるための、僕なりの基準でした。"},
            { title: "リーダーとしての苦悩", content: "楽しいことばかりじゃなかったです。イベントの運営で多忙を極めたり、人間関係で悩んだり。でもその度に、なぜこれを始めたのかという原点に立ち返り、仲間とともに乗り越えてきました。"},
            { title: "これからコミュニティを作りたい君へ", content: "完璧な計画ではなく具体的な戦略。まずは「こんなのやりたい」という想いを形にしてみること。小さくてもいいから、最初の一歩を踏み出す勇気が何よりも大切です。失敗を恐れずに、楽しんでください！"},
        ],
        skillsData: [
            { name: "AI & 業務効率化", description: "イベント管理や情報発信を自動化。AIツールを駆使し、限られた時間で最大の成果を出す方法を学びました。" },
            { name: "HP制作 & デザイン", description: "ワーホリ関連のウェブサイトを未経験から構築。想いを形にするデザイン力を身につけました。" },
            { name: "マーケティング", description: "どうすれば人の心に響くのか。SNSでの発信一つひとつに戦略と思いを込めて、コミュニティの輪を広げました。" },
            { name: "チームビルディング", description: "多様な仲間と一つの目標に向かう難しさと喜びを知り、実践的なチーム作りを学びました。" },
        ],
    },
    en: {
        pageTitle: "THE BRISBANE GAME - A Gap Year, First Time Abroad, and 365 Days with Mates",
        langToggle: "日本語",
        headerSubtitle: "— A Gap Year, First Time Abroad, and 365 Days with Mates —",
        aboutTitle: "This is Taku's Story.",
        aboutSubtitle: "I took a leave of absence from graduate school and went to Australia. There, unexpected encounters and challenges awaited me. This is a record of one year, starting from a lonely beginning, creating a 'place to belong' with many friends, and drawing my own map.",
        introTitle: "This is Taku's Story.",
        introBody: "I took a leave of absence from graduate school and went to Australia. There, unexpected encounters and challenges awaited me. This is a record of one year, starting from a lonely beginning, creating a 'place to belong' with many friends, and drawing my own map.",
        epilogueTitle: "With Gratitude",
        epilogueH1: "To my friends at community_brisbane",
        epilogueP1: "I couldn't have come this far without the friends who stuck with me.",
        epilogueH2: "To all the friends I met on my first working holiday",
        epilogueP2: "Thank you for creating the '365 days' of this game.",
        bonusTitle: "Bonus Content",
        bonusH1: "Behind the Scenes of community_brisbane Operations",
        skillsTitle: "CLEAR REWARD",
        skillsSubtitle: "Through this game, Taku acquired many skills.",
        modalClose: "Close",
        storyData: [
            { chapter: "Prologue: The Adventure Begins (May-July 2024)", title: "May 2024, A Leave of Absence from Grad School", icon: "🎓", summary: "'I can't go on like this.' — The day I decided to step off the beaten path.", details: "I started questioning my research life in grad school, feeling strongly that I would regret it if I continued. I wanted to choose a path that truly fascinated me over expectations and a stable future. I submitted my leave of absence form, and my 365 days of drawing my own story, unbound by anyone, began.", image: "https://placehold.co/600x400/0B69A3/white?text=Day+of+Decision" },
            { chapter: "Prologue: The Adventure Begins (May-July 2024)", title: "First Challenge, to Cebu Island", icon: "✈️", summary: "A warm-up period for Australia. The days I first touched the outlines of English and what it means to live abroad.", details: "Feeling anxious about jumping straight into Australia, I decided to study English in Cebu, Philippines, for three months. It was my first time living abroad, experiencing diverse cultures, and learning the joys and difficulties of communicating in English. This experience became a crucial foundation for my life in Brisbane.", image: "https://placehold.co/600x400/1E88E5/white?text=Learning+in+Cebu" },
            { chapter: "Chapter 1: Brisbane, Solitude and Survival (August 2024)", title: "A One-Way Ticket and a Little Confidence from Cebu", icon: "🎫", summary: "To Australia. Life's real adventure finally begins.", details: "With a little confidence gained from my Cebu experience, I flew to Brisbane with a one-way ticket. The moment I landed, I realized the real challenge was just beginning. Amidst a mix of excitement and anxiety, my game truly started.", image: "https://placehold.co/600x400/299DBC/white?text=Arriving+in+Brisbane" },
            { chapter: "Chapter 1: Brisbane, Solitude and Survival (August 2024)", title: "First Trial: Set Up Your Life Infrastructure!", icon: "🏠", summary: "No house, no job, no friends. The reality of a survival life where every day was a quest.", details: "The first week was incredibly tough. Finding a place to live, opening a bank account, getting a mobile contract—each task felt like a huge obstacle. I struggled with the language barrier while desperately building the foundations of my new life.", image: "https://placehold.co/600x400/3F51B5/white?text=Survival+Mode" },
            { chapter: "Chapter 1: Brisbane, Solitude and Survival (August 2024)", title: "'Please Teach Me How to Make Friends!'", icon: "🗣️", summary: "I couldn't stand the loneliness and wanted to do something. That was the beginning of everything.", details: "My life was settling down, but the days without anyone to talk to were harder than I imagined. I knew I had to do something. 'How do I make friends?' That simple question and the urge to act were the first sparks that led to creating the community.", image: "https://placehold.co/600x400/5C6BC0/white?text=Facing+Loneliness" },
            { chapter: "Chapter 2: The Day Our 'Place' Was Born (Aug 25 - Oct 2024)", title: "August 25, community_brisbane is Born", icon: "🎉", summary: "'If it doesn't exist, just make it.' — The start of the most interesting game of my life.", details: "Waiting changes nothing. So I thought, 'Why not create the opportunity and place for people to gather myself?' I announced an event on social media. Only a few people came at first, but that was the birth of our community.", image: "https://placehold.co/600x400/F47C20/white?text=Community+is+Born" },
            { chapter: "Chapter 2: The Day Our 'Place' Was Born (Aug 25 - Oct 2024)", title: "First Friends and First Wall: A Crisis of Survival", icon: "🧱", summary: "My roommates helped, but then they left, and I was at a loss.", details: "Initially, my roommates helped run things, but they eventually left Brisbane for their own reasons. I found myself alone, burdened by their parting words to 'keep it going.' The pressure of running the community by myself was crushing.", image: "https://placehold.co/600x400/78909C/white?text=Crisis+of+Survival" },
            { chapter: "Chapter 2: The Day Our 'Place' Was Born (Aug 25 - Oct 2024)", title: "October 17, The Game-Changing Onigiri Event", icon: "🍙", summary: "A make-or-break onigiri event led to meeting new collaborators.", details: "I had to create a new wave. I planned an event where we'd make onigiri, a symbol of Japanese culture. It was a huge success, attracting many people and, more importantly, leading me to new friends who wanted to help run the community.", image: "https://placehold.co/600x400/4CAF50/white?text=Onigiri+Event" },
            { chapter: "Chapter 2: The Day Our 'Place' Was Born (Aug 25 - Oct 2024)", title: "The Challenge and Failure of Diversification", icon: "🧭", summary: "The failure of other projects taught me the meaning of 'being serious'.", details: "I tried my hand at other ventures, like an English conversation circle and a bike rental service. But they were all half-hearted and failed. This taught me the importance of focusing seriously on one thing. I realized what I truly needed to do was nurture the community.", image: "https://placehold.co/600x400/FFC107/white?text=Challenge+and+Failure" },
            { chapter: "Chapter 2: The Day Our 'Place' Was Born (Aug 25 - Oct 2024)", title: "The 'Breathing Room' a $30/hour Wage Gave Me", icon: "💰", summary: "By the end of October, I had saved $6000 in 1.5 months. Financial freedom gave me the courage and time to act.", details: "I was lucky to find a well-paying job to cover my living expenses. Financial stability is directly linked to mental stability. With no money worries, I had the 'breathing room' to pour even more passion into the community.", image: "https://placehold.co/600x400/8BC34A/white?text=経済的自立" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "November 2, Meeting My Partner", icon: "🤝", summary: "A new dream was born: to accomplish something with this friend.", details: "During a tough time with operations, I met the perfect partner who resonated with my passion and wanted to join. Meeting him accelerated the community's growth and showed me things I couldn't have seen alone. I was convinced we could do great things together.", image: "https://placehold.co/600x400/673AB7/white?text=The+Perfect+Partner" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "What Encounters and Farewells Taught Me", icon: "👣", summary: "The days with friends broadened my values and showed me life's options.", details: "On a working holiday, you meet new people and say goodbye just as often. Through these fleeting relationships, I learned to be myself without comparing, and to cherish the limited time we have. Friendships that transcended nationality and culture expanded my world immensely.", image: "https://placehold.co/600x400/9C27B0/white?text=Encounters+and+Farewells" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "Community Frenzy: Christmas Party and Year-End BBQ", icon: "🎄", summary: "A whirlwind of excitement created with friends. Our story was just getting more interesting.", details: "The Christmas party we planned with our team drew over 50 people and was a massive success. The year-end BBQ was also a blast. I was moved to see the community had truly become a 'place to belong' for people. This frenzy was proof that our efforts had taken shape.", image: "https://placehold.co/600x400/E91E63/white?text=Event+Frenzy" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "Year-End Decision: I'll Stay Here Another Year", icon: "🗓️", summary: "Faced with the goal I found with my friends, I decided to extend my leave for another year.", details: "My original plan was to return to Japan after a year. But I couldn't bear to leave this community and my friends. After much thought, I contacted my university and family in Japan and arranged to extend my leave. I made a big decision, true to my feelings.", image: "https://placehold.co/600x400/F44336/white?text=The+Big+Decision" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "Realizing the Importance of Friends on My Birthday", icon: "🎂", summary: "Friends who gathered and celebrated for me. I am who I am today because of them.", details: "My friends threw me a surprise birthday party. To be celebrated so warmly in a foreign country... it felt like a dream compared to the loneliness of a few months ago. It was a day I was truly glad I had created this community.", image: "https://placehold.co/600x400/FF9800/white?text=Best+Birthday" },
            { chapter: "Chapter 3: Encounters, Conflicts, and a Big Decision (Nov 2024 - Mar 2025)", title: "February 15, Festival Collaboration with a Japanese Grocery Store", icon: "🏮", summary: "The largest event ever, involving a local Japanese grocery store.", details: "Our activities gained local recognition, leading to a collaboration with a Japanese grocery store. My partner brilliantly led the project from planning to execution. Seeing his growth was a joy for me as well. It was a memorable day when our community created new value by collaborating with others.", image: "https://placehold.co/600x400/D32F2F/white?text=Festival+Collaboration" },
            { chapter: "Chapter 4: Road Trip (Apr-Jun 2025)", title: "What I've Done at community_brisbane", icon: "📜", summary: "The place I created was overflowing with many people's smiles and 'thank yous.'", details: "Before my trip, I reflected on my activities. Weekly events, social media posts, countless encounters. The small step I took had become a part of many people's lives in Brisbane. I felt a great sense of accomplishment and gratitude.", image: "https://placehold.co/600x400/607D8B/white?text=Looking+Back" },
            { chapter: "Chapter 4: Road Trip (Apr-Jun 2025)", title: "April, Decision to Leave and Farewell Party", icon: "👋", summary: "The moment I realized I had a place I wanted to protect. And then the farewell party.", details: "I decided to leave Brisbane temporarily to get my second-year visa. Friends told me they'd be sad if the community disappeared. I was moved that the place I created was wanted, even without me, and I felt a strong desire to protect it. The farewell party was a warm gathering where we promised to meet again.", image: "https://placehold.co/600x400/546E7A/white?text=Farewell+Party" },
            { chapter: "Chapter 4: Road Trip (Apr-Jun 2025)", title: "April 30, To an 8-Week Journey", icon: "🚗", summary: "Sydney, Uluru, Darwin, Cairns... Repeatedly asking myself in the great outdoors.", details: "I set off on an 8-week road trip across the Australian continent. Immersed in the magnificent nature, my own worries seemed trivial. It was a precious time for deep self-reflection about what I want to achieve in life and where I should go.", image: "https://placehold.co/600x400/C2185B/white?text=The+Road+Trip" },
            { chapter: "Chapter 4: Road Trip (Apr-Jun 2025)", title: "The 'Next Step' I Found at the End of the Journey", icon: "🗺️", summary: "The journey gave me my next purpose.", details: "The answer I found on my trip was simple: I want to return to Brisbane and make that community bigger and better. To do that, I'll get a student visa and continue the challenge. The journey cleared my doubts and showed me the path forward.", image: "https://placehold.co/600x400/7B1FA2/white?text=The+Next+Step" },
            { chapter: "Chapter 5: The Promise on Day 365 (July 31, 2025 - )", title: "To a New Partner and a New Challenge", icon: "🚀", summary: "A new partner, inspired by my resolve, was waiting for me.", details: "When I returned to Brisbane, a new friend, whose eyes sparkled at my stories and future plans, said, 'I want to do it with you.' It was a moment when my passion ignited another. I'm not alone. Our second chapter starts here.", image: "https://placehold.co/600x400/0277BD/white?text=A+New+Partner" },
            { chapter: "Chapter 5: The Promise on Day 365 (July 31, 2025 - )", title: "July 31, It's Not the 'End,' It's the 'Beginning'", icon: "🏁", summary: "First working holiday ends. But my story doesn't end here.", details: "Day 365, my working holiday visa expires. But this is not the end. The very next day, I switch to a student visa and remain in Brisbane. In this city, with my friends, the second season of my game begins.", image: "https://placehold.co/600x400/004D40/white?text=A+New+Beginning" },
        ],
        bonusAccordionData: [
            { title: "Our Philosophy: What We Valued", content: "Why did we insist on 'everyone is welcome'? Because I myself felt lonely at first. A place where anyone could feel safe, regardless of nationality, age, or English ability. That was the community we aimed for." },
            { title: "The Art of Gathering Friends: How We Built Our Team", content: "More than skills or experience, we valued the excitement of wanting to take on challenges and the personality of wanting to do things for others. People who looked in the same direction and would enjoy the journey with us. That was my criteria for finding trustworthy friends." },
            { title: "Struggles as a Leader", content: "It wasn't all fun. Sometimes we were extremely busy with event operations, or had relationship issues. But each time, we overcame it by returning to our origin—why we started this—and working through it together as a team." },
            { title: "To You Who Wants to Build a Community", content: "You don't need a perfect plan, but you do need concrete strategies. First, try to give form to your thought of 'I want to do something like this.' Even if it's small, the courage to take the first step is more important than anything. Don't be afraid to fail, and just have fun with it!" },
        ],
        skillsData: [
            { name: "AI & Business Efficiency", description: "Automated event management and information dissemination. I learned how to achieve maximum results in a limited time by using AI tools." },
            { name: "Website & Design", description: "Built working holiday-related websites from scratch with no experience. I acquired the design skills to give form to my ideas." },
            { name: "Marketing", description: "How to resonate with people's hearts. I expanded the community's circle by putting strategy and thought into every social media post." },
            { name: "Team Building", description: "I learned the difficulty and the immense joy of working towards a single goal with a diverse group of friends, gaining practical team-building skills." },
        ],
    }
};

// Function to render all dynamic content based on the current language
function renderContent() {
    const T = translations[currentLang];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Update page title
    document.title = T.pageTitle;
    
    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = T.langToggle;
    }
    
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
    
    // Update epilogue section
    const epilogueTitle = document.getElementById('epilogue-title');
    const epilogueH1 = document.getElementById('epilogue-h1');
    const epilogueP1 = document.getElementById('epilogue-p1');
    const epilogueH2 = document.getElementById('epilogue-h2');
    const epilogueP2 = document.getElementById('epilogue-p2');
    
    if (epilogueTitle) epilogueTitle.textContent = T.epilogueTitle;
    if (epilogueH1) epilogueH1.textContent = T.epilogueH1;
    if (epilogueP1) epilogueP1.textContent = T.epilogueP1;
    if (epilogueH2) epilogueH2.textContent = T.epilogueH2;
    if (epilogueP2) epilogueP2.textContent = T.epilogueP2;
    
    // Update bonus section
    const bonusTitle = document.getElementById('bonus-title');
    const bonusH1 = document.getElementById('bonus-h1');
    
    if (bonusTitle) bonusTitle.textContent = T.bonusTitle;
    if (bonusH1) bonusH1.textContent = T.bonusH1;
    
    // Update skills section
    const skillsTitle = document.getElementById('skills-title');
    const skillsSubtitle = document.getElementById('skills-subtitle');
    
    if (skillsTitle) skillsTitle.textContent = T.skillsTitle;
    if (skillsSubtitle) skillsSubtitle.textContent = T.skillsSubtitle;
    
    // Update modal close button text
    const modalCloseText = document.getElementById('modal-close-text');
    if (modalCloseText) {
        modalCloseText.textContent = T.modalClose;
    }

    // Clear and re-render the story timeline
    const timelineContainer = document.getElementById('timeline-content');
    if (timelineContainer) {
        timelineContainer.innerHTML = '';
        // 章別データ
        const chapterData = [
            {
                chapter: "序章",
                number: "01",
                icon: "🎓",
                title: "序章：冒険の始まり",
                subtitle: "PROLOGUE",
                description: "大学院を休学し、オーストラリアへの準備期間。セブ島での語学留学を通じて、海外生活の基礎を築きました。",
                color: "from-cyan-400 to-blue-500",
                images: ["images/santa 169.jpg", "images/beach.JPEG", "images/bench.JPEG"],
                episodes: [
                    {
                        title: "序章：冒険の始まり",
                        description: "大学院を休学し、オーストラリアへの準備期間。",
                        details: "自分の人生を見つめなおし、「このままでは後悔する」という強い思いが込み上げてきました。周りの期待や安定した未来よりも、自分が本当に心惹かれる道を選びたい。そう決意し、休学届を提出。ここから、誰にも縛られない、自分だけの物語を描くための365日が始まりました。"
                    },
                    {
                        title: "最初の挑戦、セブ島へ",
                        description: "オーストラリアへの助走期間。英語と、海外で生きるということに初めて触れた日々。",
                        details: "いきなりオーストラリアへ飛び込むのは不安だったので、まずはフィリピン・セブ島で3ヶ月の語学留学をすることに。ここで初めて海外で生活し、多様な文化に触れ、英語でコミュニケーションをとる楽しさと難しさを学びました。"
                    },
                    {
                        title: "片道航空券と、セブ島で得た小さな自信",
                        description: "オーストラリアへ。人生の本当の冒険が、ついに幕を開ける。",
                        details: "セブ島での経験で少しだけ自信をつけ、片道航空券を握りしめてブリスベンへ。しかし、空港に降り立った瞬間、本当の挑戦はここからだと実感しました。期待と不安が入り混じる中、僕のゲームが本格的にスタートしました。"
                    }
                ]
            },
            {
                chapter: "第1章",
                number: "02",
                icon: "🏠",
                title: "第1章：ブリスベン、孤独とサバイバル",
                subtitle: "CHAPTER 1",
                description: "ブリスベン到着後のサバイバル生活。生活インフラの整備と友達作りへの挑戦が始まりました。",
                color: "from-red-400 to-pink-500",
                images: ["images/castle.JPEG", "images/fusya7.JPEG", "images/simonada.JPEG"],
                episodes: [
                    {
                        title: "最初の試練：生活インフラを整えよ！",
                        description: "家なし、仕事なし、友達なし。毎日がクエストだった、サバイバル生活のリアル。",
                        details: "最初の1週間は本当に過酷でした。住む家を探し、銀行口座を開設し、携帯電話を契約する。一つ一つのタスクが大きな壁のように感じられました。言葉の壁にもぶつかりながら、必死で生活の基盤を築いていきました。"
                    },
                    {
                        title: "「友達の作り方、教えてください！」",
                        description: "孤独に耐えきれず、なにかしたい。それが、すべての始まりだった。",
                        details: "生活は安定してきたものの、独りの日々は想像以上に辛いものでした。このままではいけない。どうすれば友達ができるんだろう？その純粋な問いと行動したいという衝動が、後のコミュニティ設立へと繋がる最初のきっかけでした。"
                    },
                    {
                        title: "8月25日、community_brisbane爆誕",
                        description: "「ないなら、作ればいい」― 友達づくりの「機会」を創るという、人生で一番面白いゲームの始まり。",
                        details: "待っていても何も変わらない。それなら、自分が人々が集まれる「機会」や「場所」を作ればいいんだ。最初は数人しか集まらなかったけれど、これが僕らのコミュニティの始まりでした。"
                    }
                ]
            },
            {
                chapter: "第2章",
                number: "03",
                icon: "🎉",
                title: "第2章：僕らの\"居場所\"ができた日",
                subtitle: "CHAPTER 2",
                description: "community_brisbaneの誕生と成長。おにぎりイベントを通じて、多くの仲間との出会いが生まれました。",
                color: "from-green-400 to-teal-500",
                images: ["images/takusenaka.jpg", "images/takuroadtrip.jpg", "images/koala.jpg"],
                episodes: [
                    {
                        title: "最初の仲間と、最初の壁：存続の危機",
                        description: "ルームメイトたちが手伝ってくれたが、彼らが去り、運営の危機。",
                        details: "当初はルームメイトたちが運営を手伝ってくれましたが、彼らもそれぞれブリスベンを離れていきました。気づけば運営は僕一人に。「もっとやりたかった」という去った仲間の言葉を背負いながらたった一人でコミュニティを続けることに。"
                    },
                    {
                        title: "10月17日、方向転換のおにぎりイベント",
                        description: "おにぎりイベントで、新たな協力者と出会う。",
                        details: "このままではダメだ。何か新しい流れを作らなければ。そう考えて企画したのが、日本文化の象徴でもある「おにぎり」をみんなで作るイベントでした。このイベントが大当たりし、多くの人が集まってくれただけでなく、運営に協力してくれる新しい仲間との出会いにも繋がりました。"
                    },
                    {
                        title: "11月2日、相棒との出会い",
                        description: "この仲間と何かを成し遂げたいという、新しい夢ができた。",
                        details: "運営に悩んでいた時期に、僕の情熱に共感し、「一緒にやりたい」と言ってくれる最高の相棒に出会いました。彼との出会いがコミュニティをさらに加速させ、一人では見えなかった景色を見せてくれました。この仲間となら、もっと大きなことができる。そう確信しました。"
                    }
                ]
            },
            {
                chapter: "第3章",
                number: "04",
                icon: "🤝",
                title: "第3章：出会い、葛藤、そして大きな決断",
                subtitle: "CHAPTER 3",
                description: "仲間との出会いと成長。クリスマス会やBBQを通じて、深い絆が育まれました。",
                color: "from-purple-400 to-indigo-500",
                images: ["images/bbqniku.jpg", "images/urulu.jpg", "images/takubluemountain.JPG"],
                episodes: [
                    {
                        title: "コミュニティの熱狂：クリスマス会と忘年会BBQ",
                        description: "仲間たちと作り上げた熱狂の渦。僕らの物語は、これからもっと面白くなる。",
                        details: "相棒や運営メンバーと共に企画したクリスマス会には50人以上が集まり、大成功を収めました。年末のBBQも大盛況。コミュニティが確かに人々の「居場所」になっていることを実感し、感動で胸が熱くなりました。この熱狂は、僕らの努力が形になった証でした。"
                    },
                    {
                        title: "年末の決断：もう一年、ここにいる",
                        description: "仲間と見つけた目標を前に、休学をもう一年延長することを決めた日。",
                        details: "当初の計画では、1年で日本に帰国する予定でした。しかし、このコミュニティと仲間たちとの未来を考えると、どうしても離れがたい。悩んだ末に、大学や家族に連絡し、もう1年休学を延長させてもらうことに。自分の気持ちに正直に、大きな決断を下しました。"
                    },
                    {
                        title: "4月30日、8週間の旅へ",
                        description: "シドニー、ウルル、ダーウィン、ケアンズ… 大自然の中で自問自答を繰り返す。",
                        details: "車でオーストラリア大陸を巡る8週間の旅へ。壮大な自然の中に身を置くと、自分の悩みがちっぽけに思えました。これからの人生で何を成し遂げたいのか、自分はどこへ向かうべきなのか。自分自身と深く向き合う、貴重な時間となりました。"
                    }
                ]
            },
            {
                chapter: "第4章",
                number: "05",
                icon: "🚀",
                title: "第4章：365日目の約束",
                subtitle: "CHAPTER 4",
                description: "旅の終わりに見つけた「次の一歩」。新たな相棒との出会いと、新たな挑戦への決意。",
                color: "from-orange-400 to-yellow-500",
                images: ["images/takusmile.JPG", "images/train.JPEG", "images/brisblue.JPEG"],
                episodes: [
                    {
                        title: "旅の終わりに見つけた「次の一歩」",
                        description: "旅は、僕に次の目的を与えてくれた。",
                        details: "旅を通して見つけた答えは、シンプルでした。ブリスベンに戻り、あのコミュニティをもっと大きく、もっと素晴らしい場所にしたい。そのために、学生ビザを取得してでも挑戦を続けよう。旅は僕の迷いを断ち切り、進むべき道をはっきりと示してくれました。"
                    },
                    {
                        title: "新たな相棒と、新たな挑戦へ",
                        description: "僕の決意に共感し、「一緒にやりたい」と言ってくれる新たな相棒が待っていた。",
                        details: "ブリスベンに戻ると、僕の旅の話とこれからの計画に目を輝かせ、「ぜひ一緒にやらせてほしい」という新しい仲間が現れました。僕の情熱が、また新しい情熱に火をつけた瞬間でした。一人じゃない、僕らの第二章がここから始まります。"
                    },
                    {
                        title: "ワーホリ最終日の7月31日、「終わり」じゃない、「始まり」だ",
                        description: "1stワーホリ終了。でも、僕の物語はここで終わらない。",
                        details: "ワーキングホリデービザが切れる365日目。しかし、これは決してゴールではありません。翌日からは学生ビザに切り替え、僕はブリスベンに残ります。この街で、仲間たちと共に、僕のゲームのセカンドシーズンが幕を開けるのです。"
                    }
                ]
            }
        ];

        // 章ごとにカードを生成
        chapterData.forEach((chapter, index) => {
            const chapterCard = document.createElement('div');
            chapterCard.className = `chapter-card relative mb-12 fade-in-up`;
            chapterCard.style.transitionDelay = `${index * 200}ms`;
            chapterCard.innerHTML = `
                <div class="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div class="bg-gradient-to-r ${chapter.color} text-white p-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="text-4xl mr-4">${chapter.icon}</div>
                                <div>
                                    <div class="text-sm font-medium opacity-90">${chapter.subtitle}</div>
                                    <h3 class="text-2xl font-bold">${chapter.title}</h3>
                                </div>
                            </div>
                            <div class="text-6xl font-bold opacity-30">${chapter.number}</div>
                        </div>
                        <p class="mt-4 text-white opacity-90 leading-relaxed">${chapter.description}</p>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-3 gap-4 mb-6">
                            ${chapter.images.map((image, imgIndex) => `
                                <div class="relative group cursor-pointer">
                                    <div class="w-full h-32 rounded-lg overflow-hidden shadow-md">
                                        <img src="${image}" alt="Chapter ${chapter.number} Image ${imgIndex + 1}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                                    </div>
                                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 rounded-lg flex items-center justify-center">
                                        <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-3">
                                            <div class="text-xs">${chapter.episodes[imgIndex].title}</div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="space-y-4">
                            ${chapter.episodes.map((episode, episodeIndex) => `
                                <div class="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                                    <div class="flex items-start justify-between">
                                        <div class="flex-1">
                                            <h4 class="font-semibold text-gray-800 mb-2">${episode.title}</h4>
                                            <p class="text-sm text-gray-600">${episode.description}</p>
                                        </div>
                                        <div class="ml-4 text-2xl opacity-60">${episodeIndex + 1}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
            timelineContainer.appendChild(chapterCard);
            observer.observe(chapterCard);
        });
    } else {
        console.error('Timeline container not found');
    }

    // Clear and re-render the accordion section
    const accordionContainer = document.getElementById('accordion-container');
    if (accordionContainer) {
        accordionContainer.innerHTML = '';
        T.bonusAccordionData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'border border-gray-200 rounded-lg bg-white shadow-sm';
            div.innerHTML = `
                <button class="accordion-header w-full flex justify-between items-center p-5 text-left font-bold text-[#212529] hover:bg-gray-50 transition-colors">
                    <span>${item.title}</span>
                    <svg class="w-5 h-5 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="accordion-content">
                    <p class="p-5 pt-0 text-[#495057]">${item.content}</p>
                </div>
            `;
            accordionContainer.appendChild(div);
        });
        
        // Add event listeners to the new accordion headers
        document.querySelectorAll('.accordion-header').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('svg');
                const isOpening = !content.style.maxHeight || content.style.maxHeight === "0px";
                
                // Close all other accordions first
                document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = "0px");
                document.querySelectorAll('.accordion-header svg').forEach(i => i.style.transform = 'rotate(0deg)');

                // Open the clicked accordion if it was closed
                if (isOpening) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    } else {
        console.error('Accordion container not found');
    }

    // Clear and re-render the skills grid
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = '';
        T.skillsData.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'flex items-start space-x-4 text-left';
            skillCard.innerHTML = `
                <div class="flex-shrink-0 w-12 h-12 rounded-full ${skill.name.includes('AI') ? 'bg-purple-100' : skill.name.includes('HP') || skill.name.includes('Website') ? 'bg-pink-100' : skill.name.includes('マーケティング') || skill.name.includes('Marketing') ? 'bg-sky-100' : 'bg-indigo-100'} flex items-center justify-center">
                    ${getSkillIcon(skill.name)}
                </div>
                <div>
                    <h4 class="font-bold text-lg text-[#212529] mb-1">${skill.name}</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">${skill.description}</p>
                </div>
            `;
            skillsGrid.appendChild(skillCard);
        });
    } else {
        console.error('Skills grid not found');
    }




    // Re-apply the observer to all elements that need the fade-in animation
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
    

}

// Function to get the appropriate SVG icon based on the skill name
function getSkillIcon(skillName) {
    if (skillName.includes('AI')) {
        return `<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 12a4 4 0 118 0 4 4 0 01-8 0z"></path></svg>`;
    } else if (skillName.includes('HP') || skillName.includes('Website')) {
        return `<svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`;
    } else if (skillName.includes('マーケティング') || skillName.includes('Marketing')) {
        return `<svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`;
    } else { // Team Building
        return `<svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`;
    }
}

// --- Modal Handling ---
    const modal = document.getElementById('storyModal');
const modalContent = document.getElementById('modalContent');
    const modalImage = document.getElementById('modalImage');
    
// Function to open the modal with content for a specific story item
function openModal(index) {
    const modal = document.getElementById('storyModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const T = translations[currentLang];
    const story = T.storyData[index];
    
    // 画像のエラーハンドリングを改善
    if (story.image && story.image !== '') {
        modalImage.src = story.image;
        modalImage.style.display = 'block';
        modalImage.onerror = function() {
            this.style.display = 'none';
        };
    } else {
        modalImage.style.display = 'none';
    }
    
    modalTitle.textContent = story.title;
    modalBody.textContent = story.details;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('storyModal');
    const modalContent = document.getElementById('modalContent');
    
    modal.classList.remove('show');
    document.body.style.overflow = '';
    
    // モーダルが完全に閉じた後にコンテンツをリセット
    setTimeout(() => {
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        modalImage.src = '';
        modalImage.alt = '';
        modalTitle.textContent = '';
        modalBody.textContent = '';
    }, 300);
}

// Global function for modal close button
window.closeModal = closeModal;

// Timeline modal function
function openTimelineModal(index) {
    const timelineData = [
        {
            title: "序章：冒険の始まり",
            description: "大学院を休学し、オーストラリアへの準備期間。セブ島での語学留学を通じて、海外生活の基礎を築きました。",
            image: "images/santa 169.jpg",
            details: "自分の人生を見つめなおし、「このままでは後悔する」という強い思いが込み上げてきました。周りの期待や安定した未来よりも、自分が本当に心惹かれる道を選びたい。そう決意し、休学届を提出。ここから、誰にも縛られない、自分だけの物語を描くための365日が始まりました。"
        },
        {
            title: "最初の挑戦、セブ島へ",
            description: "オーストラリアへの助走期間。英語と、海外で生きるということに初めて触れた日々。",
            image: "images/beach.JPEG",
            details: "いきなりオーストラリアへ飛び込むのは不安だったので、まずはフィリピン・セブ島で3ヶ月の語学留学をすることに。ここで初めて海外で生活し、多様な文化に触れ、英語でコミュニケーションをとる楽しさと難しさを学びました。"
        },
        {
            title: "片道航空券と、セブ島で得た小さな自信",
            description: "オーストラリアへ。人生の本当の冒険が、ついに幕を開ける。",
            image: "images/bench.JPEG",
            details: "セブ島での経験で少しだけ自信をつけ、片道航空券を握りしめてブリスベンへ。しかし、空港に降り立った瞬間、本当の挑戦はここからだと実感しました。期待と不安が入り混じる中、僕のゲームが本格的にスタートしました。"
        },
        {
            title: "最初の試練：生活インフラを整えよ！",
            description: "家なし、仕事なし、友達なし。毎日がクエストだった、サバイバル生活のリアル。",
            image: "images/castle.JPEG",
            details: "最初の1週間は本当に過酷でした。住む家を探し、銀行口座を開設し、携帯電話を契約する。一つ一つのタスクが大きな壁のように感じられました。言葉の壁にもぶつかりながら、必死で生活の基盤を築いていきました。"
        },
        {
            title: "「友達の作り方、教えてください！」",
            description: "孤独に耐えきれず、なにかしたい。それが、すべての始まりだった。",
            image: "images/fusya7.JPEG",
            details: "生活は安定してきたものの、独りの日々は想像以上に辛いものでした。このままではいけない。どうすれば友達ができるんだろう？その純粋な問いと行動したいという衝動が、後のコミュニティ設立へと繋がる最初のきっかけでした。"
        },
        {
            title: "8月25日、community_brisbane爆誕",
            description: "「ないなら、作ればいい」― 友達づくりの「機会」を創るという、人生で一番面白いゲームの始まり。",
            image: "images/simonada.JPEG",
            details: "待っていても何も変わらない。それなら、自分が人々が集まれる「機会」や「場所」を作ればいいんだ。最初は数人しか集まらなかったけれど、これが僕らのコミュニティの始まりでした。"
        },
        {
            title: "最初の仲間と、最初の壁：存続の危機",
            description: "ルームメイトたちが手伝ってくれたが、彼らが去り、運営の危機。",
            image: "images/takusenaka.jpg",
            details: "当初はルームメイトたちが運営を手伝ってくれましたが、彼らもそれぞれブリスベンを離れていきました。気づけば運営は僕一人に。「もっとやりたかった」という去った仲間の言葉を背負いながらたった一人でコミュニティを続けることに。"
        },
        {
            title: "10月17日、方向転換のおにぎりイベント",
            description: "おにぎりイベントで、新たな協力者と出会う。",
            image: "images/takuroadtrip.jpg",
            details: "このままではダメだ。何か新しい流れを作らなければ。そう考えて企画したのが、日本文化の象徴でもある「おにぎり」をみんなで作るイベントでした。このイベントが大当たりし、多くの人が集まってくれただけでなく、運営に協力してくれる新しい仲間との出会いにも繋がりました。"
        },
        {
            title: "11月2日、相棒との出会い",
            description: "この仲間と何かを成し遂げたいという、新しい夢ができた。",
            image: "images/koala.jpg",
            details: "運営に悩んでいた時期に、僕の情熱に共感し、「一緒にやりたい」と言ってくれる最高の相棒に出会いました。彼との出会いがコミュニティをさらに加速させ、一人では見えなかった景色を見せてくれました。この仲間となら、もっと大きなことができる。そう確信しました。"
        },
        {
            title: "コミュニティの熱狂：クリスマス会と忘年会BBQ",
            description: "仲間たちと作り上げた熱狂の渦。僕らの物語は、これからもっと面白くなる。",
            image: "images/bbqniku.jpg",
            details: "相棒や運営メンバーと共に企画したクリスマス会には50人以上が集まり、大成功を収めました。年末のBBQも大盛況。コミュニティが確かに人々の「居場所」になっていることを実感し、感動で胸が熱くなりました。この熱狂は、僕らの努力が形になった証でした。"
        },
        {
            title: "年末の決断：もう一年、ここにいる",
            description: "仲間と見つけた目標を前に、休学をもう一年延長することを決めた日。",
            image: "images/urulu.jpg",
            details: "当初の計画では、1年で日本に帰国する予定でした。しかし、このコミュニティと仲間たちとの未来を考えると、どうしても離れがたい。悩んだ末に、大学や家族に連絡し、もう1年休学を延長させてもらうことに。自分の気持ちに正直に、大きな決断を下しました。"
        },
        {
            title: "4月30日、8週間の旅へ",
            description: "シドニー、ウルル、ダーウィン、ケアンズ… 大自然の中で自問自答を繰り返す。",
            image: "images/takubluemountain.JPG",
            details: "車でオーストラリア大陸を巡る8週間の旅へ。壮大な自然の中に身を置くと、自分の悩みがちっぽけに思えました。これからの人生で何を成し遂げたいのか、自分はどこへ向かうべきなのか。自分自身と深く向き合う、貴重な時間となりました。"
        },
        {
            title: "旅の終わりに見つけた「次の一歩」",
            description: "旅は、僕に次の目的を与えてくれた。",
            image: "images/takusmile.JPG",
            details: "旅を通して見つけた答えは、シンプルでした。ブリスベンに戻り、あのコミュニティをもっと大きく、もっと素晴らしい場所にしたい。そのために、学生ビザを取得してでも挑戦を続けよう。旅は僕の迷いを断ち切り、進むべき道をはっきりと示してくれました。"
        },
        {
            title: "新たな相棒と、新たな挑戦へ",
            description: "僕の決意に共感し、「一緒にやりたい」と言ってくれる新たな相棒が待っていた。",
            image: "images/train.JPEG",
            details: "ブリスベンに戻ると、僕の旅の話とこれからの計画に目を輝かせ、「ぜひ一緒にやらせてほしい」という新しい仲間が現れました。僕の情熱が、また新しい情熱に火をつけた瞬間でした。一人じゃない、僕らの第二章がここから始まります。"
        },
        {
            title: "ワーホリ最終日の7月31日、「終わり」じゃない、「始まり」だ",
            description: "1stワーホリ終了。でも、僕の物語はここで終わらない。",
            image: "images/brisblue.JPEG",
            details: "ワーキングホリデービザが切れる365日目。しかし、これは決してゴールではありません。翌日からは学生ビザに切り替え、僕はブリスベンに残ります。この街で、仲間たちと共に、僕のゲームのセカンドシーズンが幕を開けるのです。"
        }
    ];
    
    const item = timelineData[index];
    const modal = document.getElementById('storyModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalImage.src = item.image;
    modalImage.style.display = 'block';
    modalTitle.textContent = item.title;
    modalBody.textContent = item.details;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Global function for timeline modal
window.openTimelineModal = openTimelineModal;

// Global function for timeline modal
window.openTimelineModal = openTimelineModal;

// Add keyboard navigation for modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const storyModal = document.getElementById('storyModal');
        const chapterModal = document.getElementById('chapterModal');
        const philosophyModal = document.getElementById('philosophyModal');
        const teamModal = document.getElementById('teamModal');
        const leaderModal = document.getElementById('leaderModal');
        const messageModal = document.getElementById('messageModal');
        const aiModal = document.getElementById('aiModal');
        const designModal = document.getElementById('designModal');
        const marketingModal = document.getElementById('marketingModal');
        const teamSkillModal = document.getElementById('teamSkillModal');
        const communityModal = document.getElementById('communityModal');
        
        if (storyModal.classList.contains('show')) {
            closeModal();
        } else if (chapterModal.classList.contains('show')) {
            closeChapterModal();
        } else if (philosophyModal.classList.contains('show')) {
            closeBonusModal('philosophy');
        } else if (teamModal.classList.contains('show')) {
            closeBonusModal('team');
        } else if (leaderModal.classList.contains('show')) {
            closeBonusModal('leader');
        } else if (messageModal.classList.contains('show')) {
            closeBonusModal('message');
        } else if (aiModal.classList.contains('show')) {
            closeSkillModal('ai');
        } else if (designModal.classList.contains('show')) {
            closeSkillModal('design');
        } else if (marketingModal.classList.contains('show')) {
            closeSkillModal('marketing');
        } else if (teamSkillModal.classList.contains('show')) {
            closeSkillModal('team');
        } else if (communityModal.classList.contains('show')) {
            closeThanksModal('community');
        }
    }
});

// Add click outside modal to close
document.addEventListener('click', function(e) {
    const storyModal = document.getElementById('storyModal');
    const chapterModal = document.getElementById('chapterModal');
    const philosophyModal = document.getElementById('philosophyModal');
    const teamModal = document.getElementById('teamModal');
    const leaderModal = document.getElementById('leaderModal');
    const messageModal = document.getElementById('messageModal');
    const aiModal = document.getElementById('aiModal');
    const designModal = document.getElementById('designModal');
    const marketingModal = document.getElementById('marketingModal');
            const teamSkillModal = document.getElementById('teamSkillModal');
    const communityModal = document.getElementById('communityModal');
    
    if (e.target === storyModal) {
        closeModal();
    } else if (e.target === chapterModal) {
        closeChapterModal();
    } else if (e.target === philosophyModal) {
        closeBonusModal('philosophy');
    } else if (e.target === teamModal) {
        closeBonusModal('team');
    } else if (e.target === leaderModal) {
        closeBonusModal('leader');
    } else if (e.target === messageModal) {
        closeBonusModal('message');
    } else if (e.target === aiModal) {
        closeSkillModal('ai');
    } else if (e.target === designModal) {
        closeSkillModal('design');
    } else if (e.target === marketingModal) {
        closeSkillModal('marketing');
    } else if (e.target === teamSkillModal) {
        closeSkillModal('team');
    } else if (e.target === communityModal) {
        closeThanksModal('community');
    }
});

// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page with Japanese content
    renderContent();
    
    // Add event listener for language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            // Toggle language
            currentLang = currentLang === 'ja' ? 'en' : 'ja';
            // Re-render content with new language
            renderContent();
        });
    }
    
    // Initialize fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // Timeline photo hover effects and click functionality
    initializeTimelinePhotos();
});

// Function to initialize timeline photos with individual hover effects
function initializeTimelinePhotos() {
    const timelinePhotos = [
        {
            id: 'timeline-photo-1',
            title: '序章：冒険の始まり',
            description: '自分の人生を見つめなおし、「このままでは後悔する」という強い思いが込み上げてきました。周りの期待や安定した未来よりも、自分が本当に心惹かれる道を選びたい。そう決意し、休学届を提出。ここから、誰にも縛られない、自分だけの物語を描くための365日が始まりました。',
            image: 'images/santa 169.jpg'
        },
        {
            id: 'timeline-photo-2',
            title: '最初の挑戦、セブ島へ',
            description: 'いきなりオーストラリアへ飛び込むのは不安だったので、まずはフィリピン・セブ島で3ヶ月の語学留学をすることに。ここで初めて海外で生活し、多様な文化に触れ、英語でコミュニケーションをとる楽しさと難しさを学びました。この経験が、後のブリスベンでの生活の大きな土台となります。',
            image: 'images/beach.JPEG'
        },
        {
            id: 'timeline-photo-3',
            title: '片道航空券と、セブ島で得た小さな自信',
            description: 'セブ島での経験で少しだけ自信をつけ、片道航空券を握りしめてブリスベンへ。しかし、空港に降り立った瞬間、本当の挑戦はここからだと実感しました。期待と不安が入り混じる中、僕のゲームが本格的にスタートしました。',
            image: 'images/bench.JPEG'
        },
        {
            id: 'timeline-photo-4',
            title: '最初の試練：生活インフラを整えよ！',
            description: '最初の1週間は本当に過酷でした。住む家を探し、銀行口座を開設し、携帯電話を契約する。一つ一つのタスクが大きな壁のように感じられました。言葉の壁にもぶつかりながら、必死で生活の基盤を築いていきました。',
            image: 'images/castle.JPEG'
        },
        {
            id: 'timeline-photo-5',
            title: '"友達の作り方、教えてください！"',
            description: '生活は安定してきたものの、独りの日々は想像以上に辛いものでした。このままではいけない。どうすれば友達ができるんだろう？その純粋な問いと行動したいという衝動が、後のコミュニティ設立へと繋がる最初のきっかけでした。',
            image: 'images/fusya7.JPEG'
        },
        {
            id: 'timeline-photo-6',
            title: '8月25日、community_brisbane爆誕',
            description: '待っていても何も変わらない。それなら、自分が人々が集まれる「機会」や「場所」を作ればいいんだ。最初は数人しか集まらなかったけれど、これが僕らのコミュニティの始まりでした。',
            image: 'images/simonada.JPEG'
        },
        {
            id: 'timeline-photo-7',
            title: 'おにぎりイベントの成功',
            description: '日本文化の象徴でもある「おにぎり」をみんなで作るイベントが大当たりし、多くの人が集まってくれただけでなく、運営に協力してくれる新しい仲間との出会いにも繋がりました。',
            image: 'images/takusenaka.jpg'
        },
        {
            id: 'timeline-photo-8',
            title: '仲間との絆',
            description: '当初はルームメイトたちが運営を手伝ってくれましたが、彼らもそれぞれブリスベンを離れていきました。気づけば運営は僕一人に。',
            image: 'images/takuroadtrip.jpg'
        },
        {
            id: 'timeline-photo-9',
            title: '一人での運営',
            description: '「もっとやりたかった」という去った仲間の言葉を背負いながらたった一人でコミュニティを続けることに。これが僕らの「居場所」の始まりでした。',
            image: 'images/koala.jpg'
        },
        {
            id: 'timeline-photo-10',
            title: 'クリスマス会の大成功',
            description: '相棒や運営メンバーと共に企画したクリスマス会には50人以上が集まり、大成功を収めました。コミュニティが確かに人々の「居場所」になっていることを実感しました。',
            image: 'images/bbqniku.jpg'
        },
        {
            id: 'timeline-photo-11',
            title: '年末BBQの大盛況',
            description: '年末のBBQも大盛況。仲間との出会いと成長を通じて、深い絆が育まれました。感動で胸が熱くなりました。',
            image: 'images/urulu.jpg'
        },
        {
            id: 'timeline-photo-12',
            title: '大きな決断',
            description: '当初の計画では、1年で日本に帰国する予定でした。しかし、このコミュニティと仲間たちとの未来を考えると、どうしても離れがたい。悩んだ末に、大学や家族に連絡し、もう1年休学を延長させてもらうことに。',
            image: 'images/takubluemountain.JPG'
        },
        {
            id: 'timeline-photo-13',
            title: '新たな相棒との出会い',
            description: '旅の終わりに見つけた「次の一歩」。新たな相棒との出会いと、新たな挑戦への決意。旅を通して見つけた答えは、シンプルでした。',
            image: 'images/takusmile.JPG'
        },
        {
            id: 'timeline-photo-14',
            title: '進むべき道',
            description: 'ブリスベンに戻り、あのコミュニティをもっと大きく、もっと素晴らしい場所にしたい。そのために、学生ビザを取得してでも挑戦を続けよう。',
            image: 'images/train.JPEG'
        },
        {
            id: 'timeline-photo-15',
            title: '365日目の約束',
            description: 'ワーキングホリデービザが切れる365日目。しかし、これは決してゴールではありません。翌日からは学生ビザに切り替え、僕はブリスベンに残ります。この街で、仲間たちと共に、僕のゲームのセカンドシーズンが幕を開けるのです。',
            image: 'images/brisblue.JPEG'
        }
    ];

    timelinePhotos.forEach((photo, index) => {
        const photoElement = document.getElementById(photo.id);
        if (photoElement) {
            // Add individual hover effects
            photoElement.addEventListener('mouseenter', function() {
                // Add individual hover animation
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
                
                // Show overlay with details
                const overlay = this.querySelector('.absolute.inset-0');
                if (overlay) {
                    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                }
                
                // Show text content
                const textContent = this.querySelector('.text-white.opacity-0');
                if (textContent) {
                    textContent.style.opacity = '1';
                }
                
                // Hide bottom caption
                const bottomCaption = this.querySelector('.absolute.bottom-0');
                if (bottomCaption) {
                    bottomCaption.style.opacity = '0';
                }
            });

            photoElement.addEventListener('mouseleave', function() {
                // Reset hover effects
                this.style.transform = 'scale(1)';
                
                // Hide overlay
                const overlay = this.querySelector('.absolute.inset-0');
                if (overlay) {
                    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                }
                
                // Hide text content
                const textContent = this.querySelector('.text-white.opacity-0');
                if (textContent) {
                    textContent.style.opacity = '0';
                }
                
                // Show bottom caption
                const bottomCaption = this.querySelector('.absolute.bottom-0');
                if (bottomCaption) {
                    bottomCaption.style.opacity = '1';
                }
            });

            // Add click functionality
            photoElement.addEventListener('click', function() {
                openTimelinePhotoModal(photo);
            });
        }
    });
}

// Function to open timeline photo modal
function openTimelinePhotoModal(photo) {
    const modal = document.getElementById('storyModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalImage.src = photo.image;
    modalImage.style.display = 'block';
    modalTitle.textContent = photo.title;
    modalBody.textContent = photo.description;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Global function for timeline photo modal
window.openTimelinePhotoModal = openTimelinePhotoModal;

// Chapter modal data removed as it is no longer needed

// Variables removed as they are no longer needed

// Modal functions removed as they are no longer needed

// Global functions
// Removed modal functions as they are no longer needed

// Chapter details data
const chapterDetails = {
    prologue: {
        icon: "🎓",
        subtitle: "PROLOGUE",
        title: "序章：冒険の始まり",
        content: `
            <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">大学院休学の決断</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        自分の人生を見つめなおし、「このままでは後悔する」という強い思いが込み上げてきました。周りの期待や安定した未来よりも、自分が本当に心惹かれる道を選びたい。そう決意し、休学届を提出。ここから、誰にも縛られない、自分だけの物語を描くための365日が始まりました。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        大学院での研究生活に疑問を感じ始めたのは、3年生の春でした。毎日同じことを繰り返し、将来への不安が日に日に大きくなっていきました。「このままでは、本当に自分がやりたいことを見つける前に人生が終わってしまう」そんな恐怖が僕を襲いました。
                    </p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">セブ島での語学留学</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        いきなりオーストラリアへ飛び込むのは不安だったので、まずはフィリピン・セブ島で3ヶ月の語学留学をすることに。ここで初めて海外で生活し、多様な文化に触れ、英語でコミュニケーションをとる楽しさと難しさを学びました。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        セブ島での生活は、想像以上に刺激的でした。毎日新しい発見があり、自分の英語力の向上を実感できました。特に印象的だったのは、現地の人々の温かさです。言葉が通じなくても、心で通じ合えることを学びました。
                    </p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">片道航空券と小さな自信</h3>
                    <p class="text-gray-700 leading-relaxed">
                        セブ島での経験で少しだけ自信をつけ、片道航空券を握りしめてブリスベンへ。しかし、空港に降り立った瞬間、本当の挑戦はここからだと実感しました。期待と不安が入り混じる中、僕のゲームが本格的にスタートしました。
                    </p>
                </div>
            </div>
        `
    },
    chapter1: {
        icon: "🏠",
        subtitle: "CHAPTER 1",
        title: "第1章：ブリスベン、孤独とサバイバル",
        content: `
            <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">生活インフラの整備</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        最初の1週間は本当に過酷でした。住む家を探し、銀行口座を開設し、携帯電話を契約する。一つ一つのタスクが大きな壁のように感じられました。言葉の壁にもぶつかりながら、必死で生活の基盤を築いていきました。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        最初の日は、空港から市内への移動だけで精一杯でした。重い荷物を抱えて、知らない街を歩くのは本当に大変でした。銀行口座の開設では、英語での説明が理解できず、何度も聞き返しました。でも、銀行員の方はとても親切で、ゆっくり説明してくれました。
                    </p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">友達作りへの挑戦</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        生活は安定してきたものの、独りの日々は想像以上に辛いものでした。このままではいけない。どうすれば友達ができるんだろう？その純粋な問いと行動したいという衝動が、後のコミュニティ設立へと繋がる最初のきっかけでした。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        最初の1ヶ月は、本当に孤独でした。仕事場では英語でコミュニケーションを取るのが精一杯で、深い会話ができませんでした。休日は一人で街を歩いたり、カフェで本を読んだりしていましたが、誰かと話したいという気持ちが日に日に強くなっていきました。
                    </p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">community_brisbaneの誕生</h3>
                    <p class="text-gray-700 leading-relaxed">
                        待っていても何も変わらない。それなら、自分が人々が集まれる「機会」や「場所」を作ればいいんだ。最初は数人しか集まらなかったけれど、これが僕らのコミュニティの始まりでした。SNSでイベントを企画した時は、本当に不安でした。「誰も来ないんじゃないか」「変に思われるんじゃないか」そんな気持ちが頭をよぎりました。でも、最初のイベントに来てくれた人たちの笑顔を見て、この活動を続けようと決意しました。
                    </p>
                </div>
            </div>
        `
    },
    chapter2: {
        icon: "🎉",
        subtitle: "CHAPTER 2",
        title: "第2章：僕らの\"居場所\"ができた日",
        content: `
            <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">存続の危機</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        当初はルームメイトたちが運営を手伝ってくれましたが、彼らもそれぞれブリスベンを離れていきました。気づけば運営は僕一人に。「もっとやりたかった」という去った仲間の言葉を背負いながらたった一人でコミュニティを続けることに。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        ルームメイトたちが去っていく時、本当に寂しかったです。一緒に始めた活動なのに、一人になってしまうのは辛かったです。でも、彼らが「もっと続けたい」と言ってくれたことが、僕の支えになりました。
                    </p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">おにぎりイベントの成功</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        このままではダメだ。何か新しい流れを作らなければ。そう考えて企画したのが、日本文化の象徴でもある「おにぎり」をみんなで作るイベントでした。このイベントが大当たりし、多くの人が集まってくれただけでなく、運営に協力してくれる新しい仲間との出会いにも繋がりました。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        おにぎりイベントを企画した時は、本当に緊張しました。日本の文化を紹介するのは初めてだったからです。でも、参加してくれた人たちが「おいしい！」と言ってくれた時、本当に嬉しかったです。
                    </p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">相棒との出会い</h3>
                    <p class="text-gray-700 leading-relaxed">
                        運営に悩んでいた時期に、僕の情熱に共感し、「一緒にやりたい」と言ってくれる最高の相棒に出会いました。彼との出会いがコミュニティをさらに加速させ、一人では見えなかった景色を見せてくれました。この仲間となら、もっと大きなことができる。そう確信しました。
                    </p>
                </div>
            </div>
        `
    },
    chapter3: {
        icon: "🤝",
        subtitle: "CHAPTER 3",
        title: "第3章：出会い、葛藤、そして大きな決断",
        content: `
            <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">クリスマス会とBBQの成功</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        相棒や運営メンバーと共に企画したクリスマス会には50人以上が集まり、大成功を収めました。年末のBBQも大盛況。コミュニティが確かに人々の「居場所」になっていることを実感し、感動で胸が熱くなりました。この熱狂は、僕らの努力が形になった証でした。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        クリスマス会の準備は本当に大変でした。50人以上の参加者を想定して、会場の確保から料理の準備まで、すべて手探りでした。でも、当日の参加者たちの笑顔を見て、すべての苦労が報われました。
                    </p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">もう一年の決断</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        当初の計画では、1年で日本に帰国する予定でした。しかし、このコミュニティと仲間たちとの未来を考えると、どうしても離れがたい。悩んだ末に、大学や家族に連絡し、もう1年休学を延長させてもらうことに。自分の気持ちに正直に、大きな決断を下しました。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        帰国を決める時は、本当に悩みました。家族や友人の期待、将来への不安、様々な感情が入り混じっていました。でも、このコミュニティで過ごした時間を思い出すと、まだやりたいことがたくさんあることに気づきました。
                    </p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">8週間の旅</h3>
                    <p class="text-gray-700 leading-relaxed">
                        車でオーストラリア大陸を巡る8週間の旅へ。壮大な自然の中に身を置くと、自分の悩みがちっぽけに思えました。これからの人生で何を成し遂げたいのか、自分はどこへ向かうべきなのか。自分自身と深く向き合う、貴重な時間となりました。
                    </p>
                </div>
            </div>
        `
    },
    chapter4: {
        icon: "🚀",
        subtitle: "CHAPTER 4",
        title: "第4章：365日目の約束",
        content: `
            <div class="space-y-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">次の一歩を見つけた</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        旅を通して見つけた答えは、シンプルでした。ブリスベンに戻り、あのコミュニティをもっと大きく、もっと素晴らしい場所にしたい。そのために、学生ビザを取得してでも挑戦を続けよう。旅は僕の迷いを断ち切り、進むべき道をはっきりと示してくれました。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        旅の最後の日、ブリスベンに戻る飛行機の中で、これからの計画を具体的に考えました。「このコミュニティを、もっと多くの人にとっての居場所にしたい」そんな思いが強くなりました。
                    </p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">新しい仲間との出会い</h3>
                    <p class="text-gray-700 leading-relaxed mb-4">
                        ブリスベンに戻ると、僕の旅の話とこれからの計画に目を輝かせ、「ぜひ一緒にやらせてほしい」という新しい仲間が現れました。僕の情熱が、また新しい情熱に火をつけた瞬間でした。一人じゃない、僕らの第二章がここから始まります。
                    </p>
                    <p class="text-gray-700 leading-relaxed">
                        新しい仲間との出会いは、本当に嬉しかったです。僕の話を聞いて、同じようにワクワクしてくれる人がいることが、何よりの励みになりました。彼女のアイデアは、僕には思いつかないような素晴らしいものでした。
                    </p>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-black mb-4">365日目の約束</h3>
                    <p class="text-gray-700 leading-relaxed">
                        ワーキングホリデービザが切れる365日目。しかし、これは決してゴールではありません。翌日からは学生ビザに切り替え、僕はブリスベンに残ります。この街で、仲間たちと共に、僕のゲームのセカンドシーズンが幕を開けるのです。
                    </p>
                </div>
            </div>
        `
    }
};

// Function to open chapter details modal
function openChapterDetails(chapter) {
    const data = chapterDetails[chapter];
    const modal = document.getElementById('chapterModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalIcon.textContent = data.icon;
    modalSubtitle.textContent = data.subtitle;
    modalTitle.textContent = data.title;
    modalContent.innerHTML = data.content;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Function to close chapter modal
function closeChapterModal() {
    const modal = document.getElementById('chapterModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Global functions
window.openChapterDetails = openChapterDetails;
window.closeChapterModal = closeChapterModal;

// Bonus content modal data
const bonusModalData = {
    philosophy: {
        title: "運営の哲学",
        image: "images/beach.JPEG",
        content: `
            僕らが大切にしていたこと。コミュニティの根幹となる価値観と、それを実現するための具体的な取り組みについて。

            なぜ「誰でも参加できる」にこだわったのか。それは、僕自身が最初に孤独を感じていたから。国籍、年齢、英語力に関わらず、誰もが安心して来られる場所。それが僕らの目指したコミュニティの形でした。

            運営の哲学として、以下の3つの原則を大切にしていました：

            1. オープン性
            誰でも参加できる、ということを最優先に考えました。国籍や年齢、英語力に関係なく、誰もが安心して参加できる環境を作ることを心がけました。

            2. 継続性
            一度だけのイベントではなく、定期的に開催することで、参加者同士の関係性を深められるようにしました。毎週の定例イベントを設けることで、コミュニティの結束力を高めました。

            3. 成長性
            参加者だけでなく、運営側も一緒に成長できる環境を作りました。新しいアイデアを積極的に取り入れ、常に進化し続けるコミュニティを目指しました。

            これらの原則を基に、具体的な取り組みとして、定期的なイベントの開催、SNSでの情報発信、参加者同士の交流促進などを行いました。結果として、多くの人にとっての「居場所」を作ることができました。
        `
    },
    team: {
        title: "仲間集めの流儀",
        image: "images/bench.JPEG",
        content: `
            どうやって運営チームを作ったか。信頼できる仲間を見つけ、チームとして機能させるための秘訣を公開。

            スキルや経験よりも、「わくわくという挑戦したい」という気持ちと、「誰かのために」という人柄を大切にしました。同じ目標を向いて、一緒に楽しんでくれる。そんな信頼できる仲間を見つけるための、僕なりの基準でした。

            仲間集めの具体的な方法：

            1. 共通の価値観を持つ人を見つける
            コミュニティ作りに興味があり、人を喜ばせることにやりがいを感じる人を探しました。技術的なスキルよりも、人としての魅力を重視しました。

            2. 小さなことから始める
            いきなり大きな責任を任せるのではなく、小さなタスクから始めて、その人の能力や意欲を確認しました。段階的に責任を増やしていくことで、信頼関係を築きました。

            3. お互いの強みを活かす
            それぞれの得意分野を把握し、それを活かせる役割を任せました。一人ひとりの個性を活かすことで、チーム全体の力を最大化しました。

            4. 定期的なコミュニケーション
            週に一度の運営ミーティングを設け、お互いの状況やアイデアを共有しました。これにより、チームの一体感を高めることができました。

            結果として、多様なバックグラウンドを持つ素晴らしい仲間たちと出会うことができました。彼らがいなければ、このコミュニティはここまで成長しなかったと思います。
        `
    },
    leader: {
        title: "リーダーとしての苦悩",
        image: "images/castle.JPEG",
        content: `
            コミュニティを率いる立場として直面した課題と、それを乗り越えるために学んだこと。失敗から得た貴重な教訓。

            楽しいことばかりじゃなかったです。イベントの運営で多忙を極めたり、人間関係で悩んだり。でもその度に、なぜこれを始めたのかという原点に立ち返り、仲間とともに乗り越えてきました。

            直面した主な課題：

            1. 時間管理の難しさ
            イベントの企画、準備、運営、そして日常的なコミュニティ管理。すべてを一人でやろうとすると、時間が足りませんでした。優先順位をつけて、効率的に作業を進めることの重要性を学びました。

            2. 人間関係の複雑さ
            多様な価値観を持つ人々が集まる中で、時には意見の対立が起こりました。そんな時は、お互いの立場を理解し、共通の目標を見失わないようにすることが大切でした。

            3. 責任の重さ
            参加者たちの期待に応えたいという気持ちが強すぎて、プレッシャーを感じることがありました。完璧を求めすぎず、できる範囲で精一杯やることを心がけました。

            4. 燃え尽き症候群
            最初は情熱に任せて全力で取り組んでいましたが、徐々に疲労が蓄積していきました。適度な休憩を取り、長期的な視点で活動を続けることの大切さを実感しました。

            これらの課題を乗り越えるために、以下のことを心がけました：

            - 仲間との協力体制を築く
            - 定期的な振り返りと改善
            - 自分自身のケアを忘れない
            - 原点に立ち返る時間を作る

            リーダーとしての経験を通じて、人をまとめることの難しさと、それ以上に大きなやりがいを感じることができました。
        `
    },
    message: {
        title: "これからコミュニティを作りたい君へ",
        image: "images/fusya7.JPEG",
        content: `
            同じ志を持つ仲間たちへのメッセージ。コミュニティ作りに挑戦する人たちに贈る、実践的なアドバイスと心構え。

            完璧な計画ではなく具体的な戦略。まずは「こんなのやりたい」という想いを形にしてみること。小さくてもいいから、最初の一歩を踏み出す勇気が何よりも大切です。失敗を恐れずに、楽しんでください！

            コミュニティ作りを始める前に知っておいてほしいこと：

            1. 完璧を求めすぎない
            最初から完璧なコミュニティを作ろうとする必要はありません。小さく始めて、参加者からのフィードバックを聞きながら、少しずつ改善していけばいいのです。

            2. 自分の「なぜ」を明確にする
            なぜコミュニティを作りたいのか。その理由が明確であればあるほど、困難な時でも続けることができます。自分の想いを大切にしてください。

            3. 一人で抱え込まない
            最初は一人で始めても、徐々に仲間を見つけていきましょう。一人でできることには限界があります。お互いの強みを活かせる仲間と出会うことで、より素晴らしいコミュニティを作ることができます。

            4. 継続性を考える
            一度だけのイベントではなく、継続的に活動できる仕組みを作りましょう。定期的なイベントや、参加者同士が交流できる場を設けることで、コミュニティの結束力が高まります。

            5. 楽しむことを忘れない
            コミュニティ作りは大変なこともありますが、楽しむことを忘れないでください。自分が楽しめなければ、参加者も楽しめません。無理をせず、自分のペースで進めましょう。

            最後に、失敗を恐れないでください。失敗から学ぶことはたくさんあります。大切なのは、諦めずに続けることです。あなたの想いが、きっと素晴らしいコミュニティを作り上げるはずです。

            応援しています！
        `
    }
};

// Function to open bonus modal
function openBonusModal(type) {
    const modal = document.getElementById(type + 'Modal');
    const modalTitle = document.getElementById(type + 'ModalTitle');
    const modalBody = document.getElementById(type + 'ModalBody');
    const modalImage = modal.querySelector('img');
    
    const data = bonusModalData[type];
    
    modalTitle.textContent = data.title;
    modalBody.textContent = data.content;
    modalImage.src = data.image;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Function to close bonus modal
function closeBonusModal(type) {
    const modal = document.getElementById(type + 'Modal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Global functions for bonus modals
window.openBonusModal = openBonusModal;
window.closeBonusModal = closeBonusModal;

// Skills modal data
const skillModalData = {
    ai: {
        title: "AI & 業務効率化",
        content: `
            イベント管理や情報発信を自動化。AIツールを駆使し、限られた時間で最大の成果を出す方法を学びました。

            コミュニティ運営において、時間は最も貴重なリソースでした。限られた時間で最大の成果を出すために、AIツールを積極的に活用しました。

            具体的に活用したAIツールとその効果：

            1. ChatGPT for コンテンツ作成
            イベントの告知文やSNS投稿の文案作成に活用。アイデアの幅を広げ、より魅力的な文章を作成できるようになりました。特に、異なるターゲット層に向けたメッセージの調整が効率的になりました。

            2. Canva AI for デザイン
            イベントのポスターやSNS投稿用の画像作成を自動化。AIが提案するデザインテンプレートを基に、オリジナリティのあるビジュアルを作成しました。

            3. 自動化ツール for 情報発信
            定期的なイベント告知やコミュニティ情報の共有を自動化。これにより、運営に費やす時間を大幅に削減し、より創造的な活動に集中できるようになりました。

            4. データ分析ツール
            イベントの参加率やSNS投稿のエンゲージメントを分析し、効果的な戦略を立てるためのデータを収集。これにより、より多くの人に響くコンテンツを作成できるようになりました。

            これらのツールを活用することで、一人で運営していた時期でも、質の高いコンテンツを継続的に発信することができました。AIは人間の創造性を補完するツールとして、非常に効果的に活用できました。
        `
    },
    design: {
        title: "HP制作 & デザイン",
        content: `
            ワーホリ関連のウェブサイトを未経験から構築。想いを形にするデザイン力を身につけました。

            プログラミングの経験が全くない状態から、ワーホリ関連のウェブサイトを構築しました。この経験を通じて、デザインの重要性と、想いを形にする技術を学びました。

            学んだ主なスキルと経験：

            1. HTML/CSS/JavaScript の基礎
            最初は全くの初心者でしたが、独学でHTML、CSS、JavaScriptの基礎を学びました。特に、レスポンシブデザインの重要性を実感し、様々なデバイスで見やすいサイトを作ることを心がけました。

            2. デザインの原則
            ユーザビリティを重視したデザインを心がけました。色の使い方、フォントの選択、レイアウトの構成など、見た目だけでなく使いやすさも考慮したデザインを学びました。

            3. ブランディング
            コミュニティの価値観や想いを表現するデザインを作ることを心がけました。一貫性のあるブランディングにより、コミュニティのアイデンティティを強化することができました。

            4. ユーザー体験の向上
            訪問者が迷わずに情報を得られるよう、直感的なナビゲーションと分かりやすい情報構造を設計しました。

            この経験を通じて、技術的なスキルだけでなく、デザインを通じて想いを伝えることの大切さを学びました。美しいデザインは、それだけで人々の心を動かす力があることを実感しました。
        `
    },
    marketing: {
        title: "マーケティング",
        content: `
            どうすれば人の心に響くのか。SNSでの発信一つひとつに戦略と思いを込めて、コミュニティの輪を広げました。

            コミュニティの成長には、効果的なマーケティング戦略が不可欠でした。SNSを中心とした情報発信を通じて、多くの人にコミュニティの価値を伝えることができました。

            実践したマーケティング戦略：

            1. ストーリーテリング
            単なるイベント告知ではなく、参加者の体験談やコミュニティの成長ストーリーを発信しました。これにより、潜在的な参加者に共感を呼び起こし、コミュニティへの参加意欲を高めることができました。

            2. ターゲット層の明確化
            ワーホリ経験者、日本文化に興味がある人、新しい友達を作りたい人など、具体的なターゲット層を設定し、それぞれに響くメッセージを作成しました。

            3. エンゲージメントの向上
            一方的な情報発信ではなく、フォロワーとの対話を重視しました。コメントへの返信や、フォロワーの投稿への反応を通じて、コミュニティの温かさを伝えました。

            4. ビジュアルコンテンツの活用
            写真や動画を効果的に活用し、イベントの雰囲気や参加者の笑顔を伝えることで、参加したいという気持ちを高めました。

            5. タイミングの戦略
            投稿のタイミングを分析し、最も多くの人に届く時間帯に投稿することを心がけました。また、イベント前後の投稿スケジュールを戦略的に立てました。

            これらの戦略により、フォロワー数だけでなく、実際のイベント参加者数も着実に増加させることができました。何より大切だったのは、数字だけでなく、人と人とのつながりを大切にしたマーケティングでした。
        `
    },
    team: {
        title: "チームビルディング",
        content: `
            多様な仲間と一つの目標に向かう難しさと喜びを知り、実践的なチーム作りを学びました。

            コミュニティ運営を通じて、国籍や文化、価値観の異なる仲間たちと一つの目標に向かって活動する経験を積みました。この経験は、チームビルディングの実践的なスキルを身につける貴重な機会でした。

            学んだチームビルディングのポイント：

            1. 共通のビジョンの共有
            チームメンバー全員が同じ目標に向かって進むために、コミュニティのビジョンとミッションを明確にし、定期的に共有しました。これにより、個人の目標とチームの目標を一致させることができました。

            2. 多様性の活用
            国籍や文化、専門分野の異なるメンバーの多様性を、チームの強みとして活用しました。それぞれの得意分野を活かすことで、より豊かなアイデアと活動を生み出すことができました。

            3. コミュニケーションの重要性
            定期的なミーティングや、日常的なコミュニケーションを通じて、メンバー間の理解を深めました。特に、異なる文化背景を持つメンバー間でのコミュニケーションには細心の注意を払いました。

            4. 役割の明確化
            各メンバーの得意分野や興味を考慮して、適切な役割を割り当てました。これにより、メンバーが自分の能力を最大限に発揮できる環境を作りました。

            5. 信頼関係の構築
            お互いを信頼し、支え合える関係を築くことを重視しました。失敗を恐れずに挑戦できる環境を作ることで、チームの創造性と実行力を高めることができました。

            6. 継続的な学習と成長
            チーム全体で学び合い、お互いの成長をサポートする文化を作りました。新しいスキルや知識を共有することで、チーム全体の能力向上を図りました。

            この経験を通じて、チームビルディングは技術的なスキルだけでなく、人としての魅力やリーダーシップが重要であることを学びました。何より大切だったのは、お互いを思いやり、支え合う心でした。
        `
    }
};

// Function to open skill modal
function openSkillModal(type) {
    let modal, modalTitle, modalBody;
    
    if (type === 'team') {
        modal = document.getElementById('teamSkillModal');
        modalTitle = document.getElementById('teamSkillModalTitle');
        modalBody = document.getElementById('teamSkillModalBody');
    } else {
        modal = document.getElementById(type + 'Modal');
        modalTitle = document.getElementById(type + 'ModalTitle');
        modalBody = document.getElementById(type + 'ModalBody');
    }
    
    const data = skillModalData[type];
    
    modalTitle.textContent = data.title;
    modalBody.textContent = data.content;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Function to close skill modal
function closeSkillModal(type) {
    let modal;
    
    if (type === 'team') {
        modal = document.getElementById('teamSkillModal');
    } else {
        modal = document.getElementById(type + 'Modal');
    }
    
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Global functions for skill modals
window.openSkillModal = openSkillModal;
window.closeSkillModal = closeSkillModal;

// Thanks modal data
const thanksModalData = {
    community: {
        title: "感謝を込めて",
        content: `
            community_brisbaneの仲間たちへ

            一緒についてきてくれた仲間がいたから、ここまでこれた。

            このコミュニティを作り上げる過程で、本当に多くの素晴らしい仲間たちと出会いました。最初は一人で始めた活動でしたが、徐々に運営チームができ、それぞれが自分の得意分野を活かして協力してくれるようになりました。

            特に印象的だったのは、みんなが「誰かのために」という気持ちを持って活動してくれたことです。イベントの準備、SNSでの発信、参加者のサポートなど、すべてにおいて献身的に協力してくれました。そのおかげで、多くの人にとっての「居場所」を作ることができました。

            一人では決して成し遂げられなかったことを、みんなと一緒に実現できたことに、心から感謝しています。この経験は、僕の人生で最も貴重な宝物になりました。

            ---

            1stワーホリで出会った、すべての友達へ

            このゲームの「365日」を創ってくれてありがとう。

            ワーホリという特別な環境で出会ったすべての友達に、心から感謝の気持ちを伝えたいと思います。国籍や文化、年齢を超えて、同じ時間を共有できたことは、本当に幸せでした。

            毎週のイベントに参加してくれた人、SNSで応援してくれた人、新しい友達を紹介してくれた人、そして何より、このコミュニティを「居場所」として認めてくれたすべての人に感謝しています。

            この365日間で経験したすべてのことが、僕の人生を豊かにしてくれました。笑いあり、涙あり、そして何より、たくさんの愛に包まれた時間でした。みんながいてくれたから、この素晴らしい物語を創ることができました。

            これからも、それぞれの道を歩んでいくと思いますが、このブリスベンで過ごした時間は、きっとみんなの心に残り続けるでしょう。またどこかで会える日を楽しみにしています。

            本当にありがとうございました。
        `
    }
};

// Function to open thanks modal
function openThanksModal(type) {
    const modal = document.getElementById(type + 'Modal');
    const modalTitle = document.getElementById(type + 'ModalTitle');
    const modalBody = document.getElementById(type + 'ModalBody');
    
    const data = thanksModalData[type];
    
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.content.split('\n\n').map(paragraph => {
        if (paragraph.includes('---')) {
            return '<div class="border-t border-gray-200 pt-6 mt-6"></div>';
        } else if (paragraph.startsWith('community_brisbaneの仲間たちへ') || paragraph.startsWith('1stワーホリで出会った、すべての友達へ')) {
            return `<h4 class="text-lg font-bold text-black mb-3">${paragraph}</h4>`;
        } else if (paragraph.includes('本当にありがとうございました。')) {
            return `<p class="text-gray-700 leading-relaxed mt-6 font-bold">${paragraph}</p>`;
        } else {
            return `<p class="text-gray-700 leading-relaxed mb-4">${paragraph}</p>`;
        }
    }).join('');
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Function to close thanks modal
function closeThanksModal(type) {
    const modal = document.getElementById(type + 'Modal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Global functions for thanks modals
window.openThanksModal = openThanksModal;
window.closeThanksModal = closeThanksModal;