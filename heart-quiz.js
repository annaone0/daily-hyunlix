// Quiz display copy and score weights are deliberately independent.
const BASE_LOCALE = {"ui":{"pageTitle":"辰菲心動時刻｜Daily Hyunlix","metaDescription":"九道問卜，領受屬於你的辰菲神諭。萬萬靈女巫的心動時刻趣味測驗，約兩分鐘。","ogDescription":"九道問卜，六種心動時刻。來看看萬萬靈女巫為你讀出的辰菲神諭。","navLabel":"網站導覽","home":"← 返回 Daily Hyunlix","languageLabel":"語言","roseLabel":"一扇天藍色的玫瑰花窗","subtitle":"辰菲教 傳福音之夜","heroTitle":"慕道友，請入座","heroAccent":"今夜由萬萬靈女巫為你占卜","intro":"燭火已經點起，花瓣從花窗下輕輕飄落，像一場不肯醒的夢。萬萬靈女巫會問你九個問題，它們看似與那兩個男孩無關，卻都通往你心裡最柔軟的角落。答完最後一題，你將領受屬於你的辰菲神諭，從此成為教友。","start":"點燃燭火，開始受洗","meta":"約兩分鐘 · 九道問卜 · 趣味二創測驗","progress":"第 {n} / {total} 道問卜","progressLabel":"已完成題數","back":"← 回到上一道問卜","drawingTitle":"萬萬靈女巫正在解讀花瓣的軌跡","drawingSub":"你的神諭，正從花窗的光裡慢慢浮現。","dedication":"獻給 Hyunlix 的教友們 · 名場面取自教友整理的辰菲編年史，敘述為二創潤飾","privacy":"純屬粉絲二創與娛樂，非心理評估；本站不收集或保存作答資料。","rite":"BAPTISMA · 受洗禮成","congratulations":"恭喜你，慕道友。花窗的光已經落在你的肩上，從今夜起，你是辰菲教的教友了。","resultPrefix":"你的教派","sceneLabel":"神諭降下的心動時刻","readingTitle":"萬萬靈女巫為你讀的愛之卷","meterLabel":"主導與包容傾向","gentle":"溫柔包容","lead":"主導掌舵","heart":"令你心動的","weak":"你的愛之劫","need":"你該被給予的","share":"複製結果連結","again":"再領一次神諭","shareCopied":"結果連結已複製，可以貼給教友們了 ♡","shareFallback":"請複製下方連結，與教友分享你的結果。","shareInput":"結果分享連結，請選取複製","homeResult":"返回 Daily Hyunlix →","petalsOn":"花瓣：開","petalsOff":"花瓣：關","petalsEnable":"開啟飄落花瓣","petalsDisable":"關閉飄落花瓣","languageError":"語言暫時無法載入，請稍後再試。","baptismLabel":"萬萬靈女巫賜予你的洗禮名","baptismReading":"你的愛情聖典","baptismPrelude":"花窗開啟，聖光為你加冕","baptismSub":"讓光落在心上，領受你的洗禮名。","baptismSource":"洗禮名靈感歌曲","baptismNote":"稱號與愛情定義為原創二創，借用歌曲意象，並非官方歌曲解析。","pairingLabel":"你的配對信仰","archetypeLabel":"你的辰菲心動類型","kindredLabel":"花窗另一側的教友","kindredClose":"回到我的洗禮","kindredHint":"點洗禮名，認識這一派教友。","launchTitle":"辰菲心動時刻","launchStatus":"敬請期待","launchIntro":"花窗下的燭火已經備妥，萬萬靈女巫正等著與你相遇。","launchDate":"2026/12/19 11:00 正式開放遊玩","launchTimezone":"台灣時間 · UTC+8","launchClockLabel":"距離正式開放","launchDays":"天","launchHours":"時","launchMinutes":"分","launchSeconds":"秒","launchNote":"開放時間一到，本頁就會自動開啟測驗。","launchOpen":"花窗已開啟，現在可以開始測驗了。"},"pairings":{"hj":"辰攻菲受","fx":"菲攻辰受","sw":"互攻都可以","pure":"純愛不分攻受"},"leadRead":["水晶裡的指針偏向「主導」。在愛裡，你是握著船舵的那個人，你的溫柔裡帶著保護，也帶著一點不容商量的霸道。","水晶裡的指針停在正中央。你撐得起別人，也懂得撒嬌；要強還是要軟，全看站在你對面的是誰。","水晶裡的指針偏向「包容」。你的愛是退讓，是成全，你總是不自覺地把對方的冷暖，排在自己之前。"],"questions":[{"id":"pairing","q":"第一道問卜，關乎信仰：你心中的辰菲，誰攻，誰受？","sub":"不必害羞，慕道友。萬萬靈女巫只看得見真心，看不見羞恥心。","opts":["辰攻菲受，正宮就是正宮","菲攻辰受，低音炮理應在上","互攻，今夜誰心情好誰說了算","純愛不分攻受，他們是靈魂伴侶"]},{"id":"trip","q":"結伴遠行的日子，你通常是哪一個？","sub":"一個人怎麼安排旅程，就會怎麼安排愛。","opts":["行程表由我執筆，幾點吃什麼都排好了","嘴上說「都可以」，其實早就想好要吃哪家","包包裡有暈車藥、OK 繃，和每個人的零食","走到哪算哪，看見好看的花就停下來"]},{"id":"fine","q":"好友傳來一句「我沒事」，你會怎麼回應？","sub":"「沒事」是世上最常見的咒語，看你怎麼解。","opts":["直接打電話過去：「說，誰欺負你」","只回一個「喔」，然後默默叫了宵夜送到她家","傳一大串貼圖，再附上三百字的長文","先吐槽她一句，再陪她聊到天亮"]},{"id":"dessert","q":"午後的茶席上，你最想端出哪一份點心？","sub":"甜點會替你說出，那些沒說出口的溫柔。","opts":["自己烤的布朗尼，切得歪歪的也沒關係","櫥窗裡最昂貴、最好看的那一塊","不必點，我吃一口你的就好","先拍二十張照片，擺盤才是靈魂"]},{"id":"wallpaper","q":"此刻，你的手機桌布是什麼？","sub":"每天解鎖幾百次的那一眼，早已替你許下了願。","opts":["辰菲同框，一張照片就是一整個宇宙","自己最滿意的那張自拍，每天都要先愛自己","一片天空，或某座遠方小鎮的風景","一行字，可能是歌詞，也可能是只有自己懂的梗"]},{"id":"fight","q":"與重要的人起了爭執，最後通常是？","sub":"爭吵過後的那片沉默，最能照見一個人的心。","opts":["我先道歉，捨不得看他難過","等他先開口，卻一直偷看訊息","當場說清楚，誰對誰錯不能含糊","吵著吵著，兩個人就笑了出來"]},{"id":"power","q":"若萬萬靈女巫允你一種魔法，你選哪一種？","sub":"你渴望的力量，正是你在愛裡最怕失去的東西。","opts":["讀心術，看穿他嘴硬背後的真心話","讓時間停下，留住最美的那一刻","治癒別人的傷心","瞬間移動，想見誰就立刻出現在他面前"]},{"id":"weather","q":"你偏愛哪一種天色？","sub":"天空是心的倒影。","opts":["萬里無雲的天藍色晴天","細雨綿綿，窩在家裡畫畫看書","起風的黃昏，有點想念某個人","烈日當空，衝去海邊瘋上一整天"]},{"id":"seat","q":"聚會時，有人坐走了你最要好那個人身旁的位子，你會？","sub":"最後一道問卜了。誠實一點，萬萬靈女巫在看。","opts":["走過去：「不好意思，這是我的位子」","嘴上說沒差，臉卻臭了一整晚","笑笑讓開，反正他等一下會來找我","直接坐到他腿上（開玩笑的⋯⋯吧）"]}],"results":{"domspoil":{"tag":"強勢辰 × 縱容溺愛菲","name":"「衣角是他的，你也是。」","hj":["執念派辰","他愛一個人的方式，是不鬆手。"],"fx":["縱容派菲","被他抓住的時候，連逃的念頭都沒有。"],"scene":"那是一場很長的直播。燈光很亮，聊天室的字一行一行往上逃，所有人都在笑。只有少數人看見，辰的手指一直停在菲的衣服上，捻著袖口，又移到衣角，像在黑暗裡摸索一盞燈的開關，確認它還在。菲沒有回頭。他只是把身子往那隻手的方向，又挪近了一寸。","inspire":"經文出處：教友永久收藏的「那件辰摸了整場直播的菲的衣服」。","keys":["抓緊才是安全感","說了就要算數","被縱容的人才敢任性"],"you":"你走進人群的樣子是篤定的。行程由你排，方向由你定，旁人猶豫不決的事，到了你手上就有了答案。他們以為那是強大，萬萬靈女巫卻看見底下藏著一個怕被留下的孩子。你的掌控從來不是為了支配，而是為了不再失去；你握得那樣緊，是因為你比誰都清楚，鬆開的手，往往就再也牽不回來。所以你要的愛必須明亮、確定、毫不閃躲，哪怕只是一個眼神的遲疑，都足夠你徹夜難眠。","heart":"你再任性一點，他依然笑著說「好」。那一刻，你的盔甲會悄悄卸下一片。","weak":"情緒漲潮的時候，話總比心更快、更鋒利；等潮水退去，你又要繞很遠的路，才肯先說一聲對不起。","need":"不需要你證明什麼的偏愛，以及一句不必反覆確認的「我不走」。","baptism":{"song":"Thunderous","name":"雷霆誓約者","definition":"愛情來得快又洶湧，像一場颶風。你把偏愛說得響亮，也願為認定的人擋住整個世界。","facets":{"heart":"心動引信","weak":"失控風眼","need":"定心錨點"},"encounters":{"heart":{"type":"clingy","text":"你再任性一點，{type}依然會笑著說「好」。在這一派教友面前，你不必一直當那個無堅不摧的人。"},"weak":{"type":"tsundere","text":"若遇見同樣把在意藏很深的{type}，別讓一場吃醋，變成兩個人比誰更能忍著不說。"},"need":{"type":"soulmate","text":"你需要的，是{type}那種不聲不響卻一直都在的陪伴，讓颶風也有願意靠岸的地方。"}}}},"tsundere":{"tag":"口是心非佔有慾辰 × 小天使暖男菲","name":"「畫裡是你，臉我替你藏起來了。」","hj":["嘴硬派辰","越是在乎，越要用顏料蓋住。"],"fx":["小天使菲","他對誰都溫柔，唯獨在辰面前，藏不住笑。"],"scene":"2021 年 12 月 19 日，辰貼出一張畫。畫裡是一個人赤裸的背，而頭的位置，被一層顏料厚厚地抹去。那段日子他正在看《無法抗拒的他》，劇中的女孩也是這樣，畫下喜歡的人，再親手把臉藏起來。辰沒有解釋一個字。可是有些背影，不必看見臉，全世界都認得。","inspire":"經文出處：2021/12/19 名留青史的「辰菲露餡畫」。","keys":["嘴硬心軟","把愛藏進細節","吃醋只會沉默"],"you":"你是把「還好」說得最自然的人。被問起在不在意，你聳聳肩；一轉身，卻把他說過的每一句話都仔細摺好，收進心裡最深的那個抽屜。你的愛從不張揚，它躲在你默默記住的口味裡，躲在那句「剛好順路」裡，躲在你累得睜不開眼、仍然回了的那一則訊息裡。你不是不敢愛，你只是害怕，先被看穿的那個人，就輸了。","heart":"有人看穿了你的嘴硬，卻不拆穿，只是笑著，朝你走近一步。","weak":"醋意湧上來時你選擇沉默，等對方來猜；猜錯了，你又獨自把那份委屈熬成一整夜。","need":"一個不必等你開口，就讀得懂你沉默的人。","baptism":{"song":"Red Lights","name":"緋紅守望者","definition":"嘴上說著沒關係，心裡早已亮起只為一個人的紅燈。你的深情，藏在一次次不肯承認的在意裡。","facets":{"heart":"解鎖密語","weak":"緋紅警報","need":"安心通行證"},"encounters":{"heart":{"type":"clingy","text":"{type}最懂你那句「剛好順路」裡藏了多少真心。他不急著拆穿，只會把你留的位置坐滿。"},"weak":{"type":"muse","text":"遇上同樣敏感的{type}，一句沒說清楚的話，可能讓兩個人在心裡各自演完一部悲劇。"},"need":{"type":"banter","text":"有時你需要一個{type}，一邊逗你笑，一邊在你又想躲起來時，認真地說：「這次我沒有在開玩笑。」"}}}},"clingy":{"tag":"撒嬌黏人辰 × 成熟包容菲","name":"「你想要的，我替你去要。」","hj":["撒嬌派辰","舞台上他是光，回到菲身邊，只想當被照顧的那一個。"],"fx":["守護派菲","嗓音低得像大地，心卻軟得像剛出爐的布朗尼。"],"scene":"2024 年，DJ Snake 就站在不遠處。想要簽名的人是辰，可是先邁開腳步、先開口的，是菲。後來菲拿著那張簽名回頭，眼睛彎成兩道月牙，那份歡喜，比他自己見到偶像時還要滿。原來有一種愛，是把對方的願望，排在自己的願望前面。","inspire":"經文出處：2024 年菲替辰向 DJ Snake 要簽名。","keys":["照顧者人格","被需要就是被愛","溫柔而有底氣"],"you":"你是人群裡那盞不刺眼、卻一直亮著的燈。你記得誰不吃香菜，誰最近睡得不好，誰的生日又快到了。你的愛很具體，是一杯溫度剛好的水，是一句「到家跟我說」。別誤會，你一點也不軟弱。你只是更喜歡看見一個在全世界面前逞強的人，唯獨在你面前，肯放下所有武裝，像個孩子一樣朝你伸出手。","heart":"在別人面前堅不可摧，只在你懷裡撒嬌的那個人。","weak":"你太習慣當接住別人的那雙手，委屈的時候也說「沒關係」，直到某一天，連自己都接不住了。","need":"偶爾，換他來接住你。讓你也能不必那麼懂事。","baptism":{"song":"Cover Me","name":"覆光療癒者","definition":"治癒系頂級愛人。你總想先替對方遮住風雨；而你的洗禮，是學會自己也值得被溫柔覆蓋。","facets":{"heart":"療癒頻率","weak":"溫柔耗損","need":"被接住的權利"},"encounters":{"heart":{"type":"domspoil","text":"你容易被{type}吸引：在別人面前呼風喚雨，回到你身邊，卻只想當那個被抱緊的人。"},"weak":{"type":"tsundere","text":"遇到{type}時，你可能又忍不住替他讀懂所有沉默。可再溫柔的教友，也不必獨自扛起兩個人的心事。"},"need":{"type":"soulmate","text":"偶爾也讓{type}接住你吧。這一派教友會慢慢陪你練習：原來不用那麼懂事，也一樣有人留下。"}}}},"soulmate":{"tag":"靈魂伴侶辰菲","name":"「失去過一次，就再也不放手。」","hj":["深情派辰","他把在乎藏得很深，深到長進了骨頭裡。"],"fx":["陽光派菲","像天藍色，總在最暗的時候，從窗縫照進來。"],"scene":"出道戰那一年，名單上一度少了一個名字。後來，菲回來了。從練習生時期的那一次初見，到一起熬過團隊最艱難的那幾年，再到 2025 年續約的消息傳來，他們之間從沒有誰說過「永遠」，只是一年，又一年，把永遠走成了腳下的路。","inspire":"經文出處：出道戰的失而復得，與此後一路並肩、家人般的革命情感。","keys":["慢熱而長情","一起長大","靈魂相認"],"you":"你不輕易把心交出去，可一旦交出，便是一生。你對愛情沒有煙火般的想像，你在乎的是「我們一起走過了什麼」：一起淋過的雨，一起熬過的夜，一起從青澀長成大人的那些年。你相信真正的親密不在於每天說愛，而在於你最狼狽的時候回過頭，他還在原地。你的愛很深，深到偶爾連你自己都會害怕。","heart":"陪你走過低谷，不需要一句解釋，就懂你的人。","weak":"太念舊，也太難放下。受過的傷，你會記得比誰都久。","need":"安穩，長久，以及願意陪你慢慢變老的耐心。","baptism":{"song":"Sunshine","name":"恆晝共振者","definition":"你的愛不是一瞬間的強光，而是一起醒來的每個清晨。走過很長的路，仍然願意把彼此當作歸處。","facets":{"heart":"靈魂共振","weak":"慢熱迷霧","need":"長日承諾"},"encounters":{"heart":{"type":"clingy","text":"{type}會把你漫長的故事一頁頁讀完。你不用把往事解釋得漂亮，他也願意在旁邊留一盞燈。"},"weak":{"type":"tsundere","text":"和{type}一起念舊時，要小心別把共同的沉默，誤認成彼此都已經不需要開口。"},"need":{"type":"domspoil","text":"有時{type}那句響亮的「我選你」，正好替慢熱的你，補上一份不必猜測的確定。"}}}},"muse":{"tag":"浪漫藝術家辰 × 溫柔繆思菲","name":"「我們的手，一起握著雛菊。」","hj":["藝術家辰","那些說不出口的話，他用畫筆一層一層說完。"],"fx":["繆思菲","滿臉雀斑是散落的星，是辰畫了又畫的靈感。"],"scene":"2021 年菲生日，辰送了他一幅畫：兩隻手，一同握著一束雛菊。沒有寫滿字的卡片，只有顏色一筆一筆疊上去，像一句話說得很慢、很慢。後來在某場雙人直播裡，辰望著菲，望到出了神；菲說起「情侶」兩個字的時候，目光不由自主地，轉向了他。","inspire":"經文出處：2021 菲生日的雙手握雛菊畫作；2024 雙人直播辰看菲看呆。","keys":["浪漫主義者","儀式感","一個眼神就懂"],"you":"你會把電影票根夾進書頁，把乾燥花收進鐵盒，把對方隨手寫的紙條留很多年。你的愛安靜而細膩，比起盛大的告白，你更容易被一個微小的用心擊中。你是憑感覺活著的人：氣氛對了，眼神對了，你便毫無保留地交出自己；感覺錯了，再完美的條件，也點不亮你心裡的那盞燈。","heart":"願意為你花時間，記得你所有小事，並且把它們當成大事的人。","weak":"你想得太多，也想得太深。對方一點點冷淡，你就能在心裡獨自演完一整部悲劇。","need":"被放在心上的儀式感，和一次又一次溫柔的確認。","baptism":{"song":"Secret Secret","name":"藏詩繆思者","definition":"一個眼神、一束花、一張被珍藏的票根，都能成為你的情書。你把說不出口的愛，寫進只有彼此讀得懂的暗號。","facets":{"heart":"心動暗號","weak":"想像迷宮","need":"浪漫回音"},"encounters":{"heart":{"type":"tsundere","text":"{type}把喜歡藏在細節裡，而你偏偏讀得懂。一個假裝不經意，一個默默把那份用心收藏。"},"weak":{"type":"soulmate","text":"遇見步調慢一點的{type}，別急著把安靜解讀成冷淡。有些教友的愛，是用很多年慢慢說完的。"},"need":{"type":"clingy","text":"{type}會記得你為什麼留下那張票根，也會把你看似微小的願望，當成值得認真完成的大事。"}}}},"banter":{"tag":"歡喜冤家互懟辰菲","name":"「說好當鬼的，怎麼放水給我抱？」","hj":["戲精派辰","最愛鬧菲，也最捨不得別人鬧他。"],"fx":["反擊派菲","嘴上從不認輸，一轉身，卻從背後抱了上去。"],"scene":"鬼抓人開始了，辰是鬼。照規矩，他該拚了命去追，可是追到菲面前，他的腳步忽然慢了下來，慢得恰到好處，慢到菲從背後一把將他抱住。那一年，就連昇玟都說出了那句石破天驚的「Hyunjin loves Felix」。有些放水，是全世界都看得見的告白。","inspire":"經文出處：2022 鬼抓人辰放水讓菲背後抱；金昇玟的「Hyunjin loves Felix」。","keys":["朋友以上","互懟是情趣","一起瘋也一起扛"],"you":"你和喜歡的人在一起時，像兩個放學後不肯回家的孩子，互相吐槽，互相拆台，笑到肚子發疼。可是誰要是敢欺負他，你一定第一個站出來。你最怕的是無聊和客套，你要的是一個接得住你所有玩笑、陪你一起丟臉也不怕的人。你的愛很吵，吵得很真。","heart":"跟你鬥嘴鬥到最後，悄悄讓你贏的那個人。","weak":"你太習慣用玩笑包住真心，以至於最重要的那句話，總是卡在喉嚨裡。","need":"一起大笑的默契，還有某個安靜的時刻，他認真地對你說：「我是說真的。」","baptism":{"song":"CHEESE","name":"笑鬧共犯者","definition":"笑著拆台，也認真偏袒。你想要的愛，是接得住每個玩笑、陪你一起瘋，最後仍站在你這邊的人。","facets":{"heart":"默契笑點","weak":"真心消音","need":"認真告白"},"encounters":{"heart":{"type":"tsundere","text":"{type}嘴上不認輸，卻總會悄悄讓你贏。你笑得最開心的時候，往往就是看穿了他藏不住的偏心。"},"weak":{"type":"muse","text":"面對把小事都放在心上的{type}，別每次都用玩笑收尾。有些浪漫教友，真的會把你隨口一句話記很久。"},"need":{"type":"soulmate","text":"{type}能陪你笑到天亮，也能陪你安靜。這一派教友提醒你：不必一直有趣，也值得被喜歡。"}}}}}};
const QUESTIONS = [{"id":"pairing","opts":[{"p":"hj","w":{"domspoil":2,"tsundere":2}},{"p":"fx","w":{"clingy":3}},{"p":"sw","w":{"banter":2,"domspoil":1,"clingy":1}},{"p":"pure","w":{"soulmate":2,"muse":2}}]},{"id":"trip","opts":[{"w":{"domspoil":2,"banter":1},"lead":1},{"w":{"tsundere":2},"lead":0.5},{"w":{"clingy":1,"soulmate":1},"lead":-1},{"w":{"muse":2},"lead":-0.5}]},{"id":"fine","opts":[{"w":{"domspoil":1,"soulmate":1},"lead":1},{"w":{"tsundere":2},"lead":0},{"w":{"clingy":2},"lead":-0.5},{"w":{"banter":2},"lead":0}]},{"id":"dessert","opts":[{"w":{"clingy":2,"soulmate":1},"lead":-1},{"w":{"domspoil":1,"muse":1},"lead":1},{"w":{"tsundere":1,"clingy":1},"lead":0.5},{"w":{"muse":2},"lead":0}]},{"id":"wallpaper","opts":[{"w":{"soulmate":1,"clingy":1},"lead":0},{"w":{"domspoil":1,"tsundere":1},"lead":1},{"w":{"soulmate":1,"muse":2},"lead":-0.5},{"w":{"tsundere":1,"banter":1},"lead":0.5}]},{"id":"fight","opts":[{"w":{"clingy":2},"lead":-1},{"w":{"tsundere":2},"lead":0.5},{"w":{"domspoil":2},"lead":1},{"w":{"banter":2},"lead":0}]},{"id":"power","opts":[{"w":{"tsundere":1,"domspoil":1},"lead":0.5},{"w":{"soulmate":1,"muse":2},"lead":0},{"w":{"clingy":1,"soulmate":1},"lead":-1},{"w":{"soulmate":1,"banter":1},"lead":0.5}]},{"id":"weather","opts":[{"w":{"soulmate":1,"clingy":1},"lead":0},{"w":{"muse":2},"lead":-0.5},{"w":{"tsundere":1,"soulmate":1},"lead":0},{"w":{"banter":2},"lead":0.5}]},{"id":"seat","opts":[{"w":{"domspoil":2,"tsundere":1},"lead":1},{"w":{"tsundere":2},"lead":0.5},{"w":{"clingy":1,"soulmate":1},"lead":-1},{"w":{"banter":2},"lead":0.5}]}];
'use strict';
const $ = id => document.getElementById(id);
const LANGUAGES = ['zh-Hant','en','ja','ko'];
const ORDER = ['domspoil','tsundere','clingy','soulmate','muse','banter'];
const LETTERS = ['I','II','III','IV'];
const LAUNCH_AT = Date.parse('2026-12-19T11:00:00+08:00');
const localeCache = {'zh-Hant':BASE_LOCALE};
let copy = BASE_LOCALE, language = 'zh-Hant', languageRequest = 0;
let answers = [], step = 0, currentView = 'comingSoon', currentResult = null, launchOpened = false;
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const storageGet = key => {try{return localStorage.getItem(key)}catch{return null}};
const storageSet = (key,value) => {try{localStorage.setItem(key,value)}catch{}};

function applyCopy(scope=document){
  scope.querySelectorAll('[data-copy]').forEach(el => {el.textContent=copy.ui[el.dataset.copy]});
}
function applyStatic(){
  document.documentElement.lang=language;
  document.title=copy.ui.pageTitle;
  document.querySelector('meta[name="description"]').content=copy.ui.metaDescription;
  document.querySelector('meta[property="og:title"]').content=copy.ui.pageTitle;
  document.querySelector('meta[property="og:description"]').content=copy.ui.ogDescription;
  $('siteNav').setAttribute('aria-label',copy.ui.navLabel);
  $('rosewin').setAttribute('aria-label',copy.ui.roseLabel);
  $('progressTrack').setAttribute('aria-label',copy.ui.progressLabel);
  $('launchCountdown').setAttribute('aria-label',copy.ui.launchClockLabel);
  $('languageSelect').setAttribute('aria-label',copy.ui.languageLabel+' / Language');
  $('languageSelect').value=language;
  applyCopy();
  syncPetalButton();
  syncLaunch();
}
function validLocale(pack){
  if(!pack || !pack.ui || !pack.results || !Array.isArray(pack.questions))return false;
  const strings=Object.keys(BASE_LOCALE.ui).every(k=>typeof pack.ui[k]==='string' && pack.ui[k].length);
  const questions=pack.questions.length===QUESTIONS.length && pack.questions.every((q,i)=>q.id===QUESTIONS[i].id && typeof q.q==='string' && typeof q.sub==='string' && q.opts?.length===4 && q.opts.every(t=>typeof t==='string'));
  const results=ORDER.every(k=>{const r=pack.results[k],b=r?.baptism;return r && ['tag','name','scene','inspire','you','heart','weak','need'].every(f=>typeof r[f]==='string') && ['hj','fx'].every(f=>r[f]?.length===2 && r[f].every(t=>typeof t==='string')) && r.keys?.length===3 && r.keys.every(t=>typeof t==='string') && b && ['song','name','definition'].every(f=>typeof b[f]==='string') && ['heart','weak','need'].every(f=>typeof b.facets?.[f]==='string' && ORDER.includes(b.encounters?.[f]?.type) && b.encounters[f].type!==k && typeof b.encounters[f].text==='string' && b.encounters[f].text.split('{type}').length===2)});
  return strings && questions && results && ['hj','fx','sw','pure'].every(k=>typeof pack.pairings?.[k]==='string') && pack.leadRead?.length===3 && pack.leadRead.every(t=>typeof t==='string');
}
async function setLanguage(code,{persist=true}={}){
  if(!LANGUAGES.includes(code))code='zh-Hant';
  const request=++languageRequest;
  try{
    if(!localeCache[code]){
      const response=await fetch(new URL('./locales/'+code+'.json',document.baseURI),{cache:'no-cache'});
      if(!response.ok)throw Error('Locale unavailable');
      const pack=await response.json();
      if(!validLocale(pack))throw Error('Invalid locale');
      localeCache[code]=pack;
    }
    if(request!==languageRequest)return;
    language=code; copy=localeCache[code];
    applyStatic();
    if(currentView==='quiz')renderQ(false);
    if(currentView==='result' && currentResult)renderResult(currentResult);
    $('languageStatus').hidden=true;
    const url=new URL(location.href);url.searchParams.set('lang',language);
    history.replaceState(null,'',url.pathname+url.search+url.hash);
    if(persist)storageSet('hyunlix-quiz-lang',language);
  }catch{
    if(request!==languageRequest)return;
    $('languageSelect').value=language;
    $('languageStatus').textContent=copy.ui.languageError;
    $('languageStatus').hidden=false;
  }
}
$('languageSelect').addEventListener('change',e=>setLanguage(e.target.value));

function show(id){
  if(!isOpen() && id!=='comingSoon')id='comingSoon';
  currentView=id;
  ['comingSoon','intro','quiz','drawing','result'].forEach(k=>$(k).hidden=k!==id);
  window.scrollTo({top:0,behavior:'auto'});
}
function renderQ(focus=true){
  const model=QUESTIONS[step], q=copy.questions[step];
  $('progText').textContent=copy.ui.progress.replace('{n}',String(step+1)).replace('{total}',String(QUESTIONS.length));
  $('progBar').style.width=(step/QUESTIONS.length*100)+'%';
  $('progressTrack').setAttribute('aria-valuenow',String(step));
  $('qTitle').textContent=q.q; $('qSub').textContent=q.sub;
  $('opts').replaceChildren();
  q.opts.forEach((text,i)=>{
    const button=document.createElement('button');
    button.type='button';button.className='opt';button.id='opt-'+model.id+'-'+i;
    button.setAttribute('aria-pressed',String(answers[step]===i));
    const letter=document.createElement('b');letter.textContent=LETTERS[i];
    const label=document.createElement('span');label.textContent=text;
    button.append(letter,label);button.addEventListener('click',()=>pick(i));
    $('opts').append(button);
  });
  $('backBtn').hidden=step===0;
  if(focus){$('qTitle').focus({preventScroll:true});window.scrollTo({top:0,behavior:'auto'})}
}
function pick(i){
  if(!isOpen()){syncLaunch();return}
  answers[step]=i;
  if(step<QUESTIONS.length-1){step++;renderQ()}else finish();
}
function score(ans){
  const scores=Object.fromEntries(ORDER.map(k=>[k,0]));let lead=0;
  ans.forEach((option,qi)=>{const o=QUESTIONS[qi].opts[option];for(const k in o.w)scores[k]+=o.w[k];lead+=o.lead||0});
  const first=QUESTIONS[0].opts[ans[0]],prefer=first.w;
  const result=ORDER.slice().sort((a,b)=>(scores[b]-scores[a])||((prefer[b]||0)-(prefer[a]||0))||(ORDER.indexOf(a)-ORDER.indexOf(b)))[0];
  return {result,pairing:first.p,lead:Math.max(-1,Math.min(1,lead/((QUESTIONS.length-1)*.6)))};
}
function finish(){
  $('progBar').style.width='100%';$('progressTrack').setAttribute('aria-valuenow',String(QUESTIONS.length));
  const r=score(answers);show('drawing');
  const light=$('baptismLight');
  if(!motion.matches){light.hidden=false;light.classList.remove('fading');light.classList.add('blessing')}
  setTimeout(()=>{
    renderResult(r);show('result');
    $('result').classList.toggle('newly-baptized',!motion.matches);
    $('result').querySelector('.baptism-name').focus({preventScroll:true});
    light.classList.add('fading');
    setTimeout(()=>{light.hidden=true;light.classList.remove('blessing','fading')},motion.matches?0:1000);
  },motion.matches?0:2800);
}
function restart(){
  if(!isOpen()){syncLaunch();return}
  const url=new URL(location.href);url.hash='';history.replaceState(null,'',url.pathname+url.search);
  answers=[];step=0;currentResult=null;show('quiz');renderQ();
}
function renderResult(r){
  currentResult=r;
  const data=copy.results[r.result], pct=(r.lead+1)/2*100,el=$('result');
  el.innerHTML=`
    <div class="rite"><span class="k" data-copy="rite"></span><p data-copy="congratulations"></p></div>
    <section class="baptism-certificate" aria-labelledby="baptismName">
      <p class="baptism-label" data-copy="baptismLabel"></p><p class="baptism-song"></p>
      <h2 class="baptism-name" id="baptismName" tabindex="-1"></h2><p class="baptism-definition"></p>
    </section>
    <div class="type-details"><p class="archetype"></p><p class="rtag"></p></div>
    <div class="roles"><div class="role hj"><h3></h3><p></p></div><div class="role fx"><h3></h3><p></p></div></div>
    <div class="scene"><span class="label" data-copy="sceneLabel"></span><h3 class="rname"></h3><p class="story"></p><p class="inspire"></p></div>
    <div class="you"><h3 data-copy="readingTitle"></h3><div class="chips"></div><p class="para"></p>
      <div class="meter"><div class="track"><span class="dot" style="left:${pct}%"></span></div>
      <div class="ends"><span data-copy="gentle"></span><span data-copy="lead"></span></div><p class="read"></p></div>
      <p class="kindred-hint" data-copy="kindredHint"></p>
      <dl class="facets"><div class="facet"><dt><small data-copy="heart"></small><span data-term="heart"></span></dt><dd data-k="heart"></dd></div><div class="facet"><dt><small data-copy="weak"></small><span data-term="weak"></span></dt><dd data-k="weak"></dd></div><div class="facet"><dt><small data-copy="need"></small><span data-term="need"></span></dt><dd data-k="need"></dd></div></dl>
    </div>
    <div class="actions"><button class="btn" type="button" id="shareBtn" data-copy="share"></button><button class="btn" type="button" id="againBtn" data-copy="again"></button></div>
    <p class="share-note" id="shareNote" role="status" aria-live="polite"></p><input class="share-fallback" id="shareFallback" readonly hidden>
    <a class="home-link" href="./#heart-quiz" data-copy="homeResult"></a>
    <p class="baptism-source"><a target="_blank" rel="noopener" class="song-source"></a><span data-copy="baptismNote"></span></p>`;
  applyCopy(el);el.querySelector('.meter').setAttribute('aria-label',copy.ui.meterLabel);
  $('shareFallback').setAttribute('aria-label',copy.ui.shareInput);
  el.querySelector('.baptism-song').textContent=data.baptism.song;
  el.querySelector('.baptism-name').textContent=data.baptism.name;
  el.querySelector('.baptism-definition').textContent=data.baptism.definition;
  el.querySelector('.archetype').textContent=copy.ui.archetypeLabel+' · '+data.tag;
  el.querySelector('.rtag').textContent=copy.ui.pairingLabel+' · '+copy.pairings[r.pairing];
  el.querySelectorAll('[data-term]').forEach(term=>term.textContent=data.baptism.facets[term.dataset.term]);
  const source=el.querySelector('.song-source');source.textContent=copy.ui.baptismSource+' · '+data.baptism.song+' ↗';
  source.href=r.result==='clingy'?'https://straykids.jype.com/discography/8b5tq25d':r.result==='soulmate'?'https://m.cn.thejypshop.com/product/stray-kids-cle-levanter/94/':'https://straykids.jype.com/discography/916opkff';
  el.querySelector('.rname').textContent=data.name;
  ['hj','fx'].forEach(key=>{const role=el.querySelector('.role.'+key);role.querySelector('h3').textContent=data[key][0];role.querySelector('p').textContent=data[key][1]});
  el.querySelector('.story').textContent=data.scene;el.querySelector('.inspire').textContent=data.inspire;
  data.keys.forEach(key=>{const chip=document.createElement('span');chip.textContent='#'+key;el.querySelector('.chips').append(chip)});
  el.querySelector('.para').textContent=data.you;
  el.querySelector('.read').textContent=copy.leadRead[r.lead>=.35?0:r.lead>=-.35?1:2];
  el.querySelectorAll('.facet dd').forEach(dd=>{
    const encounter=data.baptism.encounters[dd.dataset.k],other=copy.results[encounter.type].baptism;
    const [before,after]=encounter.text.split('{type}');
    const link=document.createElement('button');link.type='button';link.className='kindred-link';
    link.textContent=other.song+' · '+other.name;link.setAttribute('aria-haspopup','dialog');
    link.addEventListener('click',()=>openKindred(encounter.type));
    dd.append(document.createTextNode(before),link,document.createTextNode(after));
  });
  $('againBtn').addEventListener('click',restart);
  $('shareBtn').addEventListener('click',async()=>{
    const url=new URL(location.href);url.searchParams.set('lang',language);
    url.hash='result='+[r.result,r.pairing,Math.round(r.lead*100)].join('.');
    try{await navigator.clipboard.writeText(url.href);$('shareNote').textContent=copy.ui.shareCopied}
    catch{const input=$('shareFallback');input.value=url.href;input.hidden=false;input.focus();input.select();$('shareNote').textContent=copy.ui.shareFallback}
  });
}
$('startBtn').addEventListener('click',restart);
$('backBtn').addEventListener('click',()=>{if(step>0){step--;renderQ()}});
function openKindred(type){
  const data=copy.results[type],dialog=$('kindredDialog');
  $('kindredSong').textContent=data.baptism.song;
  $('kindredName').textContent=data.baptism.name;
  $('kindredDefinition').textContent=data.baptism.definition;
  $('kindredChips').replaceChildren();
  data.keys.forEach(text=>{const chip=document.createElement('span');chip.textContent='#'+text;$('kindredChips').append(chip)});
  dialog.showModal();
}
$('kindredClose').addEventListener('click',()=>$('kindredDialog').close());
$('kindredDialog').addEventListener('click',event=>{
  const box=event.currentTarget.getBoundingClientRect();
  if(event.target===event.currentTarget && (event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom))event.currentTarget.close();
});
for(let i=0;i<22;i++){
  const dust=document.createElement('span');dust.className='blessing-dust';
  dust.style.setProperty('--x',((i*43+13)%100)+'%');dust.style.setProperty('--delay',((i%6)*.16)+'s');
  $('baptismLight').append(dust);
}

// Falling petals use the same lifecycle as the homepage snow: preference,
// reduced motion, visibility pause, bounded density and a small settled layer.
const canvas=$('petalCanvas'),context=canvas.getContext('2d');
const petalPreference=storageGet('hyunlix-quiz-petals');
let petalsEnabled=petalPreference===null?!motion.matches:petalPreference==='on';
if(motion.matches)petalsEnabled=false;
let width=0,height=0,petals=[],settled=[],frame=0,previous=0,landed=0;
const petalColors=['#f8cfdf','#efb5d0','#d9cff4','#fff1ef'];
function syncPetalButton(){
  $('petalToggle').textContent=petalsEnabled?copy.ui.petalsOn:copy.ui.petalsOff;
  $('petalToggle').setAttribute('aria-label',petalsEnabled?copy.ui.petalsDisable:copy.ui.petalsEnable);
  $('petalToggle').setAttribute('aria-pressed',String(petalsEnabled));
}
function makePetal(initial=false){return{x:Math.random()*width,y:initial?Math.random()*height:-25,size:6+Math.random()*7,speed:18+Math.random()*25,sway:10+Math.random()*22,phase:Math.random()*Math.PI*2,angle:Math.random()*Math.PI*2,spin:(Math.random()-.5)*1.2,color:petalColors[Math.floor(Math.random()*petalColors.length)]}}
function drawPetal(p,time,resting=false){
  context.save();context.translate(p.x,p.y);context.rotate(p.angle);context.scale(resting?1:.45+Math.abs(Math.sin(time/1600+p.phase))*.55,1);
  context.fillStyle=p.color;context.globalAlpha=resting?.78:.65;
  const s=p.size;context.beginPath();context.moveTo(-s*.65,s*.4);context.bezierCurveTo(-s*1.15,-s*.8,s*.35,-s*1.2,s*.72,-s*.45);context.bezierCurveTo(s*1.05,s*.35,s*.05,s*.85,-s*.65,s*.4);context.fill();
  context.globalAlpha=.28;context.strokeStyle='#c58bad';context.lineWidth=.6;context.beginPath();context.moveTo(-s*.55,s*.35);context.quadraticCurveTo(0,0,s*.6,-s*.4);context.stroke();context.restore();
}
function resizePetals(){
  width=innerWidth;height=innerHeight;const ratio=Math.min(devicePixelRatio||1,1.5);
  canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);context?.setTransform(ratio,0,0,ratio,0,0);
  petals=Array.from({length:width<600?28:48},()=>makePetal(true));settled=[];
}
function drawPetals(time){
  if(!petalsEnabled||document.hidden||!context){frame=0;previous=0;return}
  const dt=previous?Math.min((time-previous)/1000,.05):0;previous=time;context.clearRect(0,0,width,height);
  for(let i=0;i<petals.length;i++){
    const p=petals[i];p.y+=p.speed*dt;p.x+=Math.sin(time/1400+p.phase)*p.sway*dt+3*dt;p.angle+=p.spin*dt;
    if(p.x>width+25)p.x=-25;if(p.x<-25)p.x=width+25;
    if(p.y>height-p.size*.4){settled.push({...p,x:Math.max(0,Math.min(width,p.x)),y:height-3-Math.random()*12});if(settled.length>36)settled.shift();landed++;canvas.dataset.landed=String(landed);petals[i]=makePetal();continue}
    drawPetal(p,time);
  }
  settled.forEach(p=>drawPetal(p,time,true));frame=requestAnimationFrame(drawPetals);
}
function syncPetals(){
  syncPetalButton();canvas.hidden=!petalsEnabled;
  if(frame)cancelAnimationFrame(frame);frame=0;previous=0;
  if(petalsEnabled&&!document.hidden&&context)frame=requestAnimationFrame(drawPetals);
  else context?.clearRect(0,0,width,height);
}
$('petalToggle').addEventListener('click',()=>{petalsEnabled=!petalsEnabled;storageSet('hyunlix-quiz-petals',petalsEnabled?'on':'off');syncPetals()});
motion.addEventListener('change',()=>{petalsEnabled=motion.matches?false:storageGet('hyunlix-quiz-petals')!=='off';syncPetals()});
document.addEventListener('visibilitychange',syncPetals);
window.addEventListener('resize',resizePetals,{passive:true});resizePetals();syncPetals();
if(!context)$('petalToggle').hidden=true;

// The rose window is decorative and stays independent of the selected language.
(function(){
  const NS='http://www.w3.org/2000/svg',glass=['#9fd3f6','#c8b9f3','#f5c3d6','#b4e6d6','#f6dfa0','#a9c8f7'];
  for(const svg of [$('rosewin'),$('launchRosewin')]){
  const el=(tag,attrs)=>{const n=document.createElementNS(NS,tag);for(const k in attrs)n.setAttribute(k,attrs[k]);svg.appendChild(n)};
  el('circle',{r:97,fill:'#eaf4ff','fill-opacity':.6,stroke:'#c6a15a','stroke-width':2});
  el('circle',{r:90,fill:'none',stroke:'#c6a15a','stroke-width':.8,'stroke-opacity':.7});
  for(let i=0;i<16;i++){el('path',{d:'M0 -88 C14 -80 15 -60 0 -50 C-15 -60 -14 -80 0 -88Z',fill:glass[i%6],'fill-opacity':.9,stroke:'#c6a15a','stroke-width':1.2,transform:`rotate(${i*22.5})`});el('circle',{cx:0,cy:-92,r:3,fill:'#fff',stroke:'#c6a15a','stroke-width':.8,transform:`rotate(${i*22.5+11.25})`})}
  el('circle',{r:48,fill:'#f4f8ff','fill-opacity':.7,stroke:'#c6a15a','stroke-width':1.4});
  for(let i=0;i<8;i++)el('path',{d:'M0 -46 C12 -40 12 -24 0 -18 C-12 -24 -12 -40 0 -46Z',fill:glass[(i+2)%6],'fill-opacity':.95,stroke:'#c6a15a','stroke-width':1.1,transform:`rotate(${i*45+22.5})`});
  el('circle',{r:17,fill:'#7cc2f2',stroke:'#c6a15a','stroke-width':1.4});
  for(let i=0;i<5;i++)el('circle',{cx:0,cy:-7,r:5,fill:'#fff','fill-opacity':.95,transform:`rotate(${i*72})`});
  el('circle',{r:4,fill:'#f6dc94'});
  }
})();

function isOpen(now=Date.now()){return now>=LAUNCH_AT}
function launchCountdownValues(now){
  const seconds=Math.ceil(Math.max(0,LAUNCH_AT-now)/1000);
  return [Math.floor(seconds/86400),Math.floor(seconds%86400/3600),Math.floor(seconds%3600/60),seconds%60];
}
function openLaunchDestination(){
  const shared=/^#result=([a-z]+)\.([a-z]+)\.(-?\d{1,3})$/.exec(location.hash);
  if(shared){
    const [,result,pairing,value]=shared,lead=Number(value)/100;
    if(Object.hasOwn(BASE_LOCALE.results,result)&&Object.hasOwn(BASE_LOCALE.pairings,pairing)&&Math.abs(lead)<=1){renderResult({result,pairing,lead});show('result');return}
  }
  show('intro');
}
function syncLaunch(){
  const now=Date.now(),open=isOpen(now);
  $('startBtn').disabled=!open;
  if(!open){
    if(currentView!=='comingSoon')show('comingSoon');
    const values=launchCountdownValues(now);
    ['Days','Hours','Minutes','Seconds'].forEach((unit,i)=>$('launch'+unit).textContent=String(values[i]).padStart(2,'0'));
    return;
  }
  if(!launchOpened){
    const wasWaiting=currentView==='comingSoon';launchOpened=true;openLaunchDestination();
    if(wasWaiting)$('launchAnnouncement').textContent=copy.ui.launchOpen;
  }
}
applyStatic();
const requested=new URL(location.href).searchParams.get('lang')||storageGet('hyunlix-quiz-lang')||'zh-Hant';
setLanguage(requested,{persist:false});
setInterval(syncLaunch,1000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncLaunch()});
