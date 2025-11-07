
// 故宫寻宝：神兽大作战 - 主应用脚本
// 题库数据
const quizzesAll = [
  { "id": 1, "question": "故宫是什么时候建造的？", "options": ["1406年", "1500年", "1600年", "1700年"], "correctAnswer": 0, "explanation": "故宫是1406年开始建造的，已经有600多岁了。它是明朝永乐皇帝下令修建的，用了14年才完成。", "hint": "故宫已经600多岁了", "story": "明成祖朱棣迁都北京后，下令修建紫禁城，动用了全国无数能工巧匠和珍贵材料，是中国古代最宏大的宫殿建筑工程之一。"},
  { "id": 2, "question": "故宫有多少间房间？", "options": ["5000间", "8700多间", "10000间", "15000间"], "correctAnswer": 1, "explanation": "故宫实际上有8700多间房间。传说中故宫有9999间半的房子，是因为皇帝不能和天上的玉皇大帝一样'满一万'。", "hint": "传说是9999间半", "story": "古代传说‘天一万，地九千’，人间帝王居所不能与天宫齐数，因此建成9999间半以示尊天敬地。"},
  { "id": 3, "question": "故宫的屋顶为什么是金黄色的？", "options": ["因为很便宜", "因为黄色是皇帝专用的颜色", "因为容易清洁", "因为防水效果好"], "correctAnswer": 1, "explanation": "故宫的屋顶用金黄色琉璃瓦铺盖，因为黄色是皇帝专用的颜色。这样可以显示皇帝的尊贵身份。", "hint": "和皇帝的身份有关", "story": "黄色在五行中属土，位居中央，象征皇权至高无上。古代百姓若私自使用黄色，属于僭越之罪。"},
  { "id": 4, "question": "太和殿屋顶上的脊兽最多有几个？", "options": ["5个", "8个", "10个", "12个"], "correctAnswer": 2, "explanation": "太和殿是故宫最重要的宫殿，屋顶上有10个脊兽。脊兽越多，说明这个宫殿越尊贵。", "hint": "太和殿是最重要的宫殿", "story": "脊兽是古代宫殿屋脊上的小神兽，寓意驱邪镇宅。太和殿的10个脊兽是全国之最，象征至尊无上。"},
  { "id": 5, "question": "九龙御路上有几条龙？", "options": ["3条", "5条", "7条", "9条"], "correctAnswer": 3, "explanation": "九龙御路上有9条龙。只有皇帝才能走九龙御路，这是皇帝专用的通道。龙代表皇帝的权力和尊贵。", "hint": "从名字就能看出来", "story": "九龙御路雕刻于巨石之上，龙盘云起，象征“九五之尊”。数字‘九’在古代代表皇帝，是阳数之极。"},
  { "id": 6, "question": "故宫现在最高的古树是什么树？", "options": ["槐树", "松树", "白皮松", "柏树"], "correctAnswer": 2, "explanation": "故宫现在最高的古树是白皮松。这棵树的树根露了出来，树干是乳白色的，像一条守护的卧龙。", "hint": "树干是乳白色", "story": "白皮松象征长寿与坚韧，是皇家园林常见树种。故宫的古松已有数百年树龄，被视为宫廷的守护者。"},
  { "id": 7, "question": "日晷是用来做什么的？", "options": ["装饰用的", "看时间的", "浇水用的", "防火用的"], "correctAnswer": 1, "explanation": "日晷是古人用来看时间的钟表。", "hint": "和太阳有关", "story": "日晷是利用太阳影子测定时间的装置，象征‘以天为则’，显示出古人敬天顺时的思想。"},
  { "id": 8, "question": "故宫的护城河有多深？", "options": ["2米深", "3米深", "5米深", "8米深"], "correctAnswer": 2, "explanation": "故宫外面有宽52米、深5米的护城河。", "hint": "比游泳池还深", "story": "护城河既为防御设施，也有调节气候作用。冬天会结冰，成为御前卫士练武的地方。"},
  { "id": 9, "question": "故宫的建造材料中，石头是怎么运来的？", "options": ["用船运", "用冰路运", "用车拉", "用人抬"], "correctAnswer": 1, "explanation": "建造故宫用的石头特别大，古人利用冬天的冰路运来这些巨石。", "hint": "利用了冬天的特点", "story": "史书记载，北京修城时工匠利用冬季冰冻地面，用水结冰润滑石道，使数十吨巨石能顺利运输。"},
  { "id": 10, "question": "故宫现在是什么地方？", "options": ["皇帝的住所", "博物馆", "皇帝的办公室", "军事基地"], "correctAnswer": 1, "explanation": "1925年起，故宫变成了博物馆，现在叫'故宫博物院'。", "hint": "现在很多人去参观", "story": "故宫博物院成立于1925年，是中国第一座国家级博物馆，也是世界上最受欢迎的文化遗产地之一。"},
  { "id": 11, "question": "故宫有多少座宫殿？", "options": ["30多座", "50多座", "70多座", "100多座"], "correctAnswer": 2, "explanation": "故宫有七十多座宫殿。", "hint": "数字在70左右", "story": "故宫的建筑布局遵循严格的礼制，内廷外朝分明，形成“前朝后寝”的帝王居住制度。"},
  { "id": 12, "question": "故宫的南北长度是多少米？", "options": ["800米", "900米", "961米", "1000米"], "correctAnswer": 2, "explanation": "故宫南北长961米，东西宽753米。", "hint": "接近1000米", "story": "故宫位于北京中轴线上，是整个北京城的核心，象征国家的‘正中与平衡’。"},
  { "id": 13, "question": "故宫的城墙有多高？", "options": ["5米", "8米", "10米", "15米"], "correctAnswer": 2, "explanation": "故宫外面有高10米的城墙。", "hint": "10米相当于3层楼高", "story": "城墙采用夯土加砖结构，厚实稳固，象征皇权的威严与不可侵犯。"},
  { "id": 14, "question": "故宫准备建造材料花了多长时间？", "options": ["5年", "8年", "11年", "14年"], "correctAnswer": 2, "explanation": "光准备材料就花了11年。", "hint": "超过10年", "story": "为了修建故宫，南方的木材、苏州的金砖、云南的石材都被运送至北京，耗时极久。"},
  { "id": 15, "question": "故宫的木头主要来自哪些地方？", "options": ["北京和河北", "四川和云南", "浙江和江苏", "山东和山西"], "correctAnswer": 1, "explanation": "木头来自四川和云南，要用船和人力运到北京。", "hint": "在中国的南方", "story": "用于故宫的木材多为金丝楠木，产自四川、云南，是古代帝王专用木材，极为珍贵。"},
  { "id": 16, "question": "苏州专门为故宫烧制的砖叫什么？", "options": ["金砖", "银砖", "玉砖", "瓷砖"], "correctAnswer": 0, "explanation": "苏州专门烧制'金砖'，比普通砖坚硬光滑。", "hint": "名字里有'金'字", "story": "‘苏州金砖’制作工艺极其复杂，一块砖需历时数月，打磨后可如镜照人。"},
  { "id": 17, "question": "故宫建成后发生过火灾吗？", "options": ["没有", "只有1次", "有多次", "不清楚"], "correctAnswer": 2, "explanation": "建成后曾发生过多次大火，比如1421年和1597年的火灾。", "hint": "古代建筑容易着火", "story": "故宫多次被雷击起火，明清两代都曾重修太和殿。每次修缮都凝聚了时代的建筑艺术。"},
  { "id": 18, "question": "故宫的中间有什么特殊的线？", "options": ["红色线", "中轴线", "金色线", "蓝色线"], "correctAnswer": 1, "explanation": "故宫的中间有一条直直的'中轴线'。", "hint": "像龙脉一样", "story": "北京城的中轴线南起永定门，北至钟鼓楼，全长7.8公里，象征天地人合一的宇宙秩序。"},
  { "id": 19, "question": "故宫里最有名的宫殿是什么？", "options": ["乾清宫", "太和殿", "坤宁宫", "养心殿"], "correctAnswer": 1, "explanation": "最有名的是太和殿，皇帝举行大典的地方。", "hint": "皇帝举行大典的地方", "story": "太和殿俗称金銮殿，皇帝登基、册封、元旦朝贺等重大典礼都在此举行。"},
  { "id": 20, "question": "故宫里的石狮子有什么特点？", "options": ["都是一样的", "公狮子踩球，母狮子带小狮子", "都是母狮子", "都是公狮子"], "correctAnswer": 1, "explanation": "石狮子：公狮子踩球，母狮子带小狮子。", "hint": "有公有母", "story": "狮子象征守护与威严，公狮护国权，母狮护家业，体现阴阳平衡的皇家哲学。"},
  { "id": 21, "question": "故宫里的铜鹤和铜龟代表什么？", "options": ["皇帝的权力", "长寿和平安", "财富和繁荣", "智慧和勇气"], "correctAnswer": 1, "explanation": "铜鹤和铜龟象征长寿和平安。", "hint": "和寿命有关", "story": "鹤为仙禽、龟为灵兽，寓意‘龟鹤延年’，祈愿国家与皇帝万寿无疆。"},
  { "id": 22, "question": "故宫现在有多少件文物？", "options": ["50万件", "100万件", "150万件", "200万件"], "correctAnswer": 1, "explanation": "故宫博物馆里有一百多万件文物，全国六分之一的文物都在这里！", "hint": "超过100万件", "story": "故宫文物藏品极其丰富，包括书画、瓷器、玉器、青铜器等，是中华文明的宝库。"},
  { "id": 23, "question": "脊兽是什么？", "options": ["屋顶上的装饰动物", "门口的雕塑", "地上的图案", "墙上的壁画"], "correctAnswer": 0, "explanation": "屋脊上的动物叫脊兽。", "hint": "在屋顶上", "story": "脊兽多取自神话，如龙、凤、狮、海马等，用以镇邪避火，象征吉祥平安。"},
  { "id": 24, "question": "栏板下的龙头有什么作用？", "options": ["装饰", "排水", "防火", "防盗"], "correctAnswer": 1, "explanation": "栏板下有很多龙头，实际上是排水口。", "hint": "和水有关", "story": "故宫有‘千龙吐水’的奇景，大雨时水从龙口喷出，既美观又实用。"},
  { "id": 25, "question": "故宫里有哪些动物雕塑？", "options": ["只有狮子", "狮子、龙、凤、小马等", "只有龙", "只有鹤"], "correctAnswer": 1, "explanation": "屋顶小兽：像龙、凤、狮子、小马，排成队保护房子。", "hint": "有很多种动物", "story": "这些动物大多源于神话传说，象征驱邪避灾与祥瑞护佑，是古代工匠的智慧结晶。"},
  { "id": 26, "question": "永乐皇帝为什么要建造故宫？", "options": ["为了好玩", "为了显示权力", "想要一个安全又气派的地方办公和生活", "为了吸引游客"], "correctAnswer": 2, "explanation": "明朝永乐皇帝想要一个安全又气派的地方办公和生活。", "hint": "和皇帝的需求有关", "story": "永乐皇帝迁都北京后，为巩固政权、展示国威而建紫禁城，体现‘天子居中、统御天下’的理念。"},
  { "id": 27, "question": "故宫建造用了多少年？", "options": ["5年", "10年", "14年", "20年"], "correctAnswer": 2, "explanation": "从头到尾差不多花了14年。", "hint": "超过10年", "story": "故宫从1406年开工到1420年竣工，历经14年，耗费巨大人力物力，是当时世界上最浩大的工程之一。"},
  { "id": 28, "question": "明清皇帝在故宫住了多长时间？", "options": ["100年", "300年", "500年", "700年"], "correctAnswer": 2, "explanation": "明清皇帝在这里住了500年。", "hint": "是5个百年", "story": "自明成祖起至清宣统退位，故宫见证了24位皇帝的兴衰更替与中国封建王朝的终结。"},
  { "id": 29, "question": "故宫博物院是世界上怎样的博物馆？", "options": ["最大的", "参观人数最多的之一", "最古老的", "最贵的"], "correctAnswer": 1, "explanation": "1925年起，故宫变成博物馆，是世界上参观人数最多的博物馆之一。", "hint": "很多人去参观", "story": "故宫每年接待上千万游客，与卢浮宫、大英博物馆并称‘世界三大宫殿博物馆’。"},
  { "id": 30, "question": "故宫是什么结构的建筑？", "options": ["石头结构", "木结构", "钢铁结构", "混凝土结构"], "correctAnswer": 1, "explanation": "故宫是世界上最大的木结构建筑。", "hint": "用木头建造的", "story": "故宫采用传统榫卯结构，不用一根钉子，体现了中国古代木工技艺的巅峰。"}
];

const quizzesById = Object.fromEntries(quizzesAll.map(q => [q.id, q]));
const PLACEHOLDER_IMG = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
    <rect width="100%" height="100%" fill="#eee"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          fill="#999" font-size="20">No Image</text>
  </svg>
`)}`
// 基于题库生成一一对应的打卡点（使用更贴近题干的真实命名与近似坐标）
function buildCheckpointsFromQuizzes(quizzes) {

  // 30 个地标（名称 + 近似坐标）
  const landmarks30 = [
    {
      "name": "午门",
      "lat": 39.91352,
      "lng": 116.39714,
      "image": "img/wumen.jpg"
    },
    {
      "name": "太和门",
      "lat": 39.91483,
      "lng": 116.39715,
      "image": "img/taihemen.jpg"
    },
    {
      "name": "太和殿",
      "lat": 39.91634,
      "lng": 116.39716,
      "image": "img/taihedian.jpg"
    },
    {
      "name": "中和殿",
      "lat": 39.91699,
      "lng": 116.39714,
      "image": "img/zhonghedian.jpg"
    },
    {
      "name": "保和殿",
      "lat": 39.91767,
      "lng": 116.39715,
      "image": "img/baohedian.jpg"
    },
    {
      "name": "乾清宫",
      "lat": 39.91741,
      "lng": 116.39727,
      "image": "img/qianqinggong.jpg"
    },
    {
      "name": "交泰殿",
      "lat": 39.9179,
      "lng": 116.39725,
      "image": "img/jiaotaidian.jpg"
    },
    {
      "name": "坤宁宫",
      "lat": 39.91838,
      "lng": 116.39723,
      "image": "img/kunninggong.jpg"
    },
    {
      "name": "御花园",
      "lat": 39.91895,
      "lng": 116.3972,
      "image": "img/yuhuayuan.jpg"
    },
    {
      "name": "神武门",
      "lat": 39.9204,
      "lng": 116.39732,
      "image": "img/shenwumen.jpg"
    },
    {
      "name": "九龙壁",
      "lat": 39.91943,
      "lng": 116.39705,
      "image": "img/jiulongbi.jpg"
    },
    {
      "name": "文华殿",
      "lat": 39.91538,
      "lng": 116.40148,
      "image": "img/wenhuadian.jpg"
    },
    {
      "name": "武英殿",
      "lat": 39.91546,
      "lng": 116.39283,
      "image": "img/wuyingdian.jpg"
    },
    {
      "name": "养心殿",
      "lat": 39.91699,
      "lng": 116.3956,
      "image": "img/yangxindian.jpg"
    },
    {
      "name": "寿安宫",
      "lat": 39.9179,
      "lng": 116.39555,
      "image": "img/shouangong.jpg"
    },
    {
      "name": "景仁宫",
      "lat": 39.91845,
      "lng": 116.3955,
      "image": "img/jingrengong.jpg"
    },
    {
      "name": "承乾宫",
      "lat": 39.91845,
      "lng": 116.39895,
      "image": "img/chengqiangong.jpg"
    },
    {
      "name": "钟粹宫",
      "lat": 39.91793,
      "lng": 116.39905,
      "image": "img/zhongcuigong.jpg"
    },
    {
      "name": "景阳宫",
      "lat": 39.91736,
      "lng": 116.39912,
      "image": "img/jingyanggong.jpg"
    },
    {
      "name": "翊坤宫",
      "lat": 39.91685,
      "lng": 116.39545,
      "image": "img/yikungong.jpg"
    },
    {
      "name": "储秀宫",
      "lat": 39.9163,
      "lng": 116.3954,
      "image": "img/chuxiugong.jpg"
    },
    {
      "name": "咸福宫",
      "lat": 39.91578,
      "lng": 116.39533,
      "image": "img/xianfugong.jpg"
    },
    {
      "name": "永寿宫",
      "lat": 39.91635,
      "lng": 116.3991,
      "image": "img/yongshougong.jpeg"
    },
    {
      "name": "长春宫",
      "lat": 39.9169,
      "lng": 116.39898,
      "image": "img/changchungong.jpg"
    },
    {
      "name": "启祥宫",
      "lat": 39.9158,
      "lng": 116.399,
      "image": "img/qixianggong.jpg"
    },
    {
      "name": "慈宁宫",
      "lat": 39.91955,
      "lng": 116.3923,
      "image": "img/cininggong.jpg"
    },
    {
      "name": "隆宗门",
      "lat": 39.91905,
      "lng": 116.3946,
      "image": "img/longzongmen.jpg"
    },
    {
      "name": "体仁阁",
      "lat": 39.9146,
      "lng": 116.4003,
      "image": "img/tirengong.jpg"
    },
    {
      "name": "弘义阁",
      "lat": 39.91465,
      "lng": 116.3942,
      "image": "img/hongyige.jpg"
    },
    {
      "name": "东华门",
      "lat": 39.91555,
      "lng": 116.40439,
      "image": "img/donghuamen.jpg"
    }

  ];
  function getBadgeForQuiz(q) {
    const text = (q.question + ' ' + (q.explanation || '')).toLowerCase();

    // Keyword-based overrides (keep these first so they take precedence)
    if (text.includes('太和殿') || text.includes('脊兽') || text.includes('龙')) {
      return { name: '龙', img: 'img/badge_dragon.png' };
    }
    if (text.includes('凤')) {
      return { name: '凤', img: 'img/badge_phoenix.png' };
    }
    if (text.includes('狮') || text.includes('石狮')) {
      return { name: '狮', img: 'img/badge_lion.png' };
    }
    if (text.includes('河') || text.includes('水')) {
      return { name: '海马', img: 'img/badge_seahorse.png' };
    }
    if (text.includes('角楼') || text.includes('火') || text.includes('安全')) {
      return { name: '斗牛', img: 'img/badge_bull.png' };
    }

    // 默认按题目 id 分配，保证稳定
    const names = ["龙", "凤", "狮", "海马", "斗牛"];
    const imgs = [
      "img/badge_dragon.png",
      "img/badge_phoenix.png",
      "img/badge_lion.png",
      "img/badge_seahorse.png",
      "img/badge_bull.png"
    ];
    const i = (q.id - 1) % names.length;
    return { name: names[i], img: imgs[i] };
  }
  return quizzes.map((q, idx) => {
    const lm = landmarks30[idx % landmarks30.length];
    const badge = getBadgeForQuiz(q);
    return {
      id: q.id,
      name: lm.name,
      badgeName: badge.name,
      badgeImg: badge.img,
      knowledge: q.explanation,
      pose: '请摆出胜利手势（V）并露出笑容完成合影。',
      image: lm.image,
      lat: lm.lat, lng: lm.lng,
      completed: false
    };
  });
}

const checkpoints = buildCheckpointsFromQuizzes(quizzesAll);

// 当前答题/拍照状态
let hasPhoto = false;
let quizAnsweredCorrectly = false;

let currentCheckpointId = null;
let lastEarnedBadgeId = null; // 最新获得的徽章ID

// 错误反馈文字数组
const wrongAnswerFeedbacks = ['再仔细想想', '不太对哦', '就差一点点'];

// 地图实例（懒加载）
let mapInstance = null;
let markerLayer = null;
let userLocationLayer = null;
let pendingIcon = null;
let completedIcon = null;
const markerShadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png';
const iconDefaults = {
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
};

// 页面切换函数
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');

  if (pageId === 'list-page') {
    renderCheckpointMap();
    renderListBadges();
  }
  // 首页不再显示徽章
}

// 更新进度条
function updateProgress() {
  const completedCount = checkpoints.filter(cp => cp.completed).length;
  const percentage = (completedCount / checkpoints.length) * 100;
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  progressFill.style.width = percentage + '%';
  progressText.textContent = completedCount + '/' + checkpoints.length;
}

// 渲染打卡点地图
function renderCheckpointMap() {
  // 更新进度条与奖励提示
  let completedCount = checkpoints.filter(cp => cp.completed).length;
  updateProgress();
  const rewardPrompt = document.getElementById('reward-prompt');
  rewardPrompt.style.display = completedCount === checkpoints.length ? 'block' : 'none';

  // 首次创建地图
  if (!mapInstance) {
    const defaultCenter = [39.9173, 116.3972]; // 故宫中轴近似
    mapInstance = L.map('map', {
      center: defaultCenter,
      zoom: 16,
      scrollWheelZoom: false
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(mapInstance);
    // 使用聚合
    markerLayer = L.markerClusterGroup({ showCoverageOnHover: false, maxClusterRadius: 50 });
    mapInstance.addLayer(markerLayer);

    // 定义两种状态的 3D 立体图标（带阴影）
    pendingIcon = L.icon({
      iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: markerShadowUrl,
      ...iconDefaults
    });
    completedIcon = L.icon({
      iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
      shadowUrl: markerShadowUrl,
      ...iconDefaults
    });
  }

  // 清空并重新绘制标记
  markerLayer.clearLayers();
  const bounds = [];
  checkpoints.forEach(cp => {
    if (typeof cp.lat !== 'number' || typeof cp.lng !== 'number') return;
    const marker = L.marker([cp.lat, cp.lng], {
      title: cp.name,
      icon: cp.completed ? completedIcon : pendingIcon
    });
    const statusText = cp.completed ? `✓ 已获得 ${cp.badgeName} 徽章` : '▶ 去打卡';
    const popupHtml = `
                <div style="min-width:200px;max-width:280px;">
                    <img src="${cp.image}" alt="缩略图" style="width:100%;height:auto;max-height:180px;object-fit:contain;border-radius:8px;margin-bottom:6px;" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}'" />
                    <div style=\"font-weight:bold;color:#8B0000;margin-bottom:6px;\">${cp.id}. ${cp.name}</div>
                    <div style=\"color:#666;margin-bottom:8px;\">${cp.knowledge.substring(0, 28)}...</div>
                    <button style=\"background:#FFD700;color:#8B0000;border:none;border-radius:16px;padding:6px 10px;font-weight:bold;cursor:pointer;width:100%;\" onclick=\"showDetail(${cp.id})\">${statusText}</button>
                    </div>
            `;
    marker.bindPopup(popupHtml, {
      maxWidth: 280,
      maxHeight: 350,
      autoPan: true,
      autoPanPadding: [50, 50],
      autoPanPaddingTopLeft: [50, 50],
      autoPanPaddingBottomRight: [50, 50],
      keepInView: true,
      closeButton: true,
      className: 'custom-popup',
      offset: [0, -10],
      autoClose: false
    });
    
    // 确保弹窗打开时自动平移地图，使弹窗完整显示
    marker.on('popupopen', function() {
      const popup = this.getPopup();
      if (popup && mapInstance) {
        // 延迟执行，确保弹窗已完全渲染
        setTimeout(() => {
          if (popup.isOpen()) {
            const popupElement = popup.getElement();
            if (popupElement) {
              const mapContainer = mapInstance.getContainer();
              const popupBounds = popupElement.getBoundingClientRect();
              const mapRect = mapContainer.getBoundingClientRect();
              
              // 计算需要的平移量（像素）
              let panX = 0;
              let panY = 0;
              const padding = 50;
              
              // 检查右边界
              if (popupBounds.right > mapRect.right - padding) {
                panX = popupBounds.right - (mapRect.right - padding);
              }
              // 检查左边界（优先处理左边界，因为通常从左往右阅读）
              else if (popupBounds.left < mapRect.left + padding) {
                panX = popupBounds.left - (mapRect.left + padding);
              }
              
              // 检查下边界
              if (popupBounds.bottom > mapRect.bottom - padding) {
                panY = popupBounds.bottom - (mapRect.bottom - padding);
              }
              // 检查上边界
              else if (popupBounds.top < mapRect.top + padding) {
                panY = popupBounds.top - (mapRect.top + padding);
              }
              
              // 如果有需要平移，执行平移
              if (panX !== 0 || panY !== 0) {
                const currentCenter = mapInstance.getCenter();
                // 将像素偏移转换为经纬度偏移
                const point = mapInstance.latLngToContainerPoint(currentCenter);
                const newPoint = L.point(point.x - panX, point.y - panY);
                const newLatLng = mapInstance.containerPointToLatLng(newPoint);
                
                mapInstance.panTo(newLatLng, {
                  animate: true,
                  duration: 0.5
                });
              }
            }
          }
        }, 150);
      }
    });
    markerLayer.addLayer(marker);
    bounds.push([cp.lat, cp.lng]);
  });
  if (bounds.length > 0) {
    mapInstance.fitBounds(bounds, { padding: [20, 20] });
  }

  // 触发地图尺寸重算（页面切换后）
  setTimeout(() => { mapInstance.invalidateSize(); }, 50);
}

// 地理定位到用户当前位置
function locateMe() {
  if (!mapInstance) return;
  if (!navigator.geolocation) {
    alert('当前设备不支持定位');
    return;
  }
  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const acc = pos.coords.accuracy || 50;
    if (!userLocationLayer) {
      userLocationLayer = L.layerGroup().addTo(mapInstance);
    }
    userLocationLayer.clearLayers();
    const me = L.marker([lat, lng], { title: '我的位置' });
    const circle = L.circle([lat, lng], { radius: acc, color: '#2E8B57', fillColor: '#3CB371', fillOpacity: 0.2, weight: 1 });
    userLocationLayer.addLayer(circle);
    userLocationLayer.addLayer(me);
    mapInstance.fitBounds(L.latLngBounds([[lat, lng], [lat, lng]]).pad(0.02));
  }, err => {
    alert('定位失败，请检查定位权限');
  }, { enableHighAccuracy: true, timeout: 8000 });
}

// 回到打卡区域（包含所有打卡点的范围）
function resetToCheckpoints() {
  if (!mapInstance) return;
  const points = checkpoints
    .filter(cp => typeof cp.lat === 'number' && typeof cp.lng === 'number')
    .map(cp => [cp.lat, cp.lng]);
  if (points.length === 0) return;
  const bounds = L.latLngBounds(points);
  mapInstance.fitBounds(bounds, { padding: [20, 20] });
}

// 显示打卡详情
function showDetail(id) {
  const cp = checkpoints.find(c => c.id === id);
  if (!cp) return;

  currentCheckpointId = id;

  document.getElementById('detail-title').textContent = cp.name;
  const detailImg = document.getElementById('detail-image');
  detailImg.onerror = () => { detailImg.onerror = null; detailImg.src = PLACEHOLDER_IMG; };
  detailImg.src = cp.image;
  document.getElementById('detail-knowledge').textContent = cp.knowledge;
  const poseTextEl = document.getElementById('detail-pose');
  if (poseTextEl) {
    poseTextEl.textContent = cp.pose;
  }
  // 初始化拍照与答题区
  const checkInBtn = document.getElementById('check-in-btn');
  hasPhoto = false;
  quizAnsweredCorrectly = false;
  const photoPreview = document.getElementById('photo-preview');
  const photoInput = document.getElementById('photo-input');
  if (photoPreview) {
    photoPreview.src = '';
    photoPreview.classList.remove('has-image');
  }
  const photoHint = document.getElementById('photo-upload-hint');
  if (photoHint) photoHint.classList.remove('hidden');
  if (photoInput) photoInput.value = '';

  // 渲染题目
  const quiz = quizzesById[id];
  const quizImg = document.getElementById('quiz-image');
  const quizQ = document.getElementById('quiz-question');
  const quizList = document.getElementById('quiz-options');
  const quizHint = document.getElementById('quiz-hint');
  const quizFeedback = document.getElementById('quiz-feedback');
  quizQ.textContent = quiz ? quiz.question : '';
  quizHint.textContent = quiz && quiz.hint ? `提示：${quiz.hint}` : '';
  if (quizFeedback) {
    quizFeedback.textContent = '';
    quizFeedback.style.display = 'none';
  }
  // 清除之前选项的样式
  const previousLabels = document.querySelectorAll('.quiz-options label');
  previousLabels.forEach(label => {
    label.style.borderColor = '';
    label.style.background = '';
  });
  if (quiz && quiz.image) {
    quizImg.style.display = 'block';
    quizImg.onerror = () => { quizImg.onerror = null; quizImg.src = PLACEHOLDER_IMG; };
    quizImg.src = quiz.image;
  } else {
    quizImg.style.display = 'none';
    quizImg.src = '';
  }
  quizList.innerHTML = '';
  if (quiz) {
    quiz.options.forEach((opt, idx) => {
      const li = document.createElement('li');
      li.innerHTML = `<label><input type="radio" name="quizOpt" value="${idx}"><span>${opt}</span></label>`;
      quizList.appendChild(li);
    });
  }

  // 设置按钮状态
  if (cp.completed) {
    checkInBtn.textContent = `✓ 已完成！你已获得 ${cp.badgeName} 徽章`;
    checkInBtn.disabled = true;
  } else {
    checkInBtn.textContent = '完成拍照并答题正确后可完成打卡';
    checkInBtn.disabled = true;
  }

  // 事件绑定
  if (photoInput) {
    photoInput.onchange = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      
      let displayFile = file;
      let saveFile = file;
      
      try {
        // 在照片上添加水印（日期和地标名称）
        const watermarkedFile = await addWatermarkToPhoto(file, cp);
        displayFile = watermarkedFile;
        saveFile = watermarkedFile;
      } catch (error) {
        console.error('添加水印失败，使用原图:', error);
        // 如果添加水印失败，使用原图
      }
      
      const url = URL.createObjectURL(displayFile);
      photoPreview.src = url;
      photoPreview.classList.add('has-image');
      const photoHint = document.getElementById('photo-upload-hint');
      if (photoHint) photoHint.classList.add('hidden');
      hasPhoto = true;
      updateCheckInEnable();
      
      // 自动保存带水印的照片到本地
      savePhotoToLocal(saveFile, cp);
    };
  }
  if (quizList) {
    quizList.onchange = (e) => {
      const selected = document.querySelector('input[name="quizOpt"]:checked');
      if (!selected) return;
      const idx = Number(selected.value);
      quizAnsweredCorrectly = quiz && idx === quiz.correctAnswer;
      
      // 更新反馈信息
      if (quizFeedback) {
        if (quizAnsweredCorrectly) {
          quizFeedback.textContent = '';
          quizFeedback.style.display = 'none';
          // 添加成功提示样式
          const label = selected.closest('label');
          if (label) {
            label.style.borderColor = '#3CB371';
            label.style.background = 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)';
          }
        } else {
          // 随机选择一个错误反馈文字
          const randomFeedback = wrongAnswerFeedbacks[Math.floor(Math.random() * wrongAnswerFeedbacks.length)];
          quizFeedback.textContent = randomFeedback;
          quizFeedback.style.display = 'flex';
          // 添加错误提示样式
          const label = selected.closest('label');
          if (label) {
            label.style.borderColor = '#DC143C';
            label.style.background = 'rgba(220, 20, 60, 0.1)';
            // 1秒后恢复
            setTimeout(() => {
              label.style.borderColor = '';
              label.style.background = '';
            }, 1000);
          }
        }
      }
      updateCheckInEnable();
    };
  }

  showPage('detail-page');
}

function updateCheckInEnable() {
  const checkInBtn = document.getElementById('check-in-btn');
  if (!checkInBtn) return;
  if (hasPhoto && quizAnsweredCorrectly) {
    checkInBtn.disabled = false;
    checkInBtn.textContent = '✅ 条件达成，完成打卡！';
  } else {
    checkInBtn.disabled = true;
    checkInBtn.textContent = '完成拍照并答题正确后可完成打卡';
  }
}

// 模拟完成打卡
function completeCheckpoint() {
  if (currentCheckpointId === null) return;

  const cp = checkpoints.find(c => c.id === currentCheckpointId);
  if (cp && !cp.completed) {
    cp.completed = true;
    lastEarnedBadgeId = cp.id; // 记录最新获得的徽章ID
    const hint = getHint(cp.id);
    const quiz = quizzesById[cp.id];
    const story = quiz && quiz.story ? quiz.story : '';
    showBadgeEarned(cp, hint, story);
    // 不再自动返回列表页，等待用户点击后返回
  }
}

// 在照片上添加水印（日期和地标名称）
function addWatermarkToPhoto(file, checkpoint) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    
    reader.onload = (e) => {
      img.onload = () => {
        // 创建 Canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // 设置 Canvas 尺寸为图片尺寸
        canvas.width = img.width;
        canvas.height = img.height;
        
        // 绘制原图片
        ctx.drawImage(img, 0, 0);
        
        // 设置文字样式
        const fontSize = Math.max(canvas.width * 0.03, 20); // 根据图片大小调整字体
        ctx.font = `bold ${fontSize}px Arial, "Microsoft YaHei", sans-serif`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = Math.max(fontSize * 0.1, 2);
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';
        
        // 获取当前日期
        const now = new Date();
        const dateStr = `${now.getFullYear()}年${String(now.getMonth() + 1).padStart(2, '0')}月${String(now.getDate()).padStart(2, '0')}日`;
        const locationStr = checkpoint.name;
        
        // 计算文字位置（右下角，留出边距）
        const padding = fontSize * 1.5;
        const x = canvas.width - padding;
        const y = canvas.height - padding;
        const lineHeight = fontSize * 1.3;
        
        // 绘制地标名称（带描边）
        ctx.strokeText(locationStr, x, y);
        ctx.fillText(locationStr, x, y);
        
        // 绘制日期（带描边）
        ctx.strokeText(dateStr, x, y - lineHeight);
        ctx.fillText(dateStr, x, y - lineHeight);
        
        // 将 Canvas 转换为 Blob
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('无法生成水印图片'));
          }
        }, 'image/jpeg', 0.95);
      };
      
      img.onerror = () => reject(new Error('图片加载失败'));
      img.src = e.target.result;
    };
    
    reader.onerror = () => reject(new Error('文件读取失败'));
    reader.readAsDataURL(file);
  });
}

// 保存照片到本地
function savePhotoToLocal(file, checkpoint) {
  try {
    // 生成文件名：打卡点名称_时间戳.jpg
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const filename = `故宫打卡_${checkpoint.name}_${timestamp}.jpg`;
    
    // 创建下载链接
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    
    // 触发下载
    a.click();
    
    // 清理
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  } catch (error) {
    console.error('保存照片失败:', error);
    // 如果自动下载失败，可以提示用户手动保存
  }
}

// 获取线索提示
function getHint(id) {
  const q = quizzesById[id];
  return q && q.hint ? q.hint.replace(/^提示：?/, '') : '';
}

// 重新开始游戏
function resetGame() {
  checkpoints.forEach(cp => cp.completed = false);
  lastEarnedBadgeId = null; // 清除最新徽章标记
  showPage('home-page');
}

// 初始化图片错误处理
function setupImageErrorHandlers() {
  const hero = document.querySelector('.home-hero');
  if (hero) {
    hero.onerror = () => { hero.onerror = null; hero.src = PLACEHOLDER_IMG; };
  }
  const seal = document.getElementById('seal-image');
  if (seal) {
    seal.onerror = () => { seal.onerror = null; seal.src = PLACEHOLDER_IMG; };
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  showPage('home-page');
  setupImageErrorHandlers();
});


// 获得徽章动画
function showBadgeEarned(cp, hint, story) {
  let overlay = document.getElementById('badge-earned-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'badge-earned-overlay';
    overlay.className = 'badge-earned-overlay';
    overlay.innerHTML = '<div class="badge-earned-card"><img id="badge-earned-img" src="" alt="徽章"><h4 id="badge-earned-text"></h4><p id="badge-earned-story" class="badge-earned-story"></p><p class="badge-earned-tip">点击任意位置继续</p></div>';
    document.body.appendChild(overlay);
  }
  
  // 添加点击事件，点击任意位置后隐藏并返回列表页
  overlay.onclick = () => {
    overlay.style.display = 'none';
    showPage('list-page');
  };
  
  const img = overlay.querySelector('#badge-earned-img');
  const text = overlay.querySelector('#badge-earned-text');
  const storyEl = overlay.querySelector('#badge-earned-story');
  img.src = cp.badgeImg;
  text.textContent = `🎉 获得 ${cp.badgeName} 徽章`;
  storyEl.textContent = story || '';
  overlay.style.display = 'flex';
  // 移除自动隐藏，改为用户点击后隐藏
}

// 渲染徽章网格（通用函数）
function renderBadgeGrid(containerId, checkpoints) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';
  checkpoints.forEach(cp => {
    // 列表页只显示已完成的徽章，所以不需要 badge-locked 类
    const item = document.createElement('div');
    item.className = 'badge-item';
    item.setAttribute('data-checkpoint-id', cp.id);
    item.innerHTML = `
      <img src="${cp.badgeImg}" alt="${cp.badgeName}徽章" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}'" />
      <span>${cp.badgeName}</span>
    `;
    grid.appendChild(item);
  });
}

// 首页徽章渲染（已移除，徽章只在列表页显示）
// function renderHomeBadges() {
//   renderBadgeGrid('badge-grid', checkpoints);
// }

// 列表页徽章渲染（只显示已完成的徽章）
function renderListBadges() {
  // 只渲染已完成的徽章
  const completedCheckpoints = checkpoints.filter(cp => cp.completed);
  renderBadgeGrid('list-badge-grid', completedCheckpoints);
  // 如果有最新获得的徽章，延迟高亮（等待DOM渲染完成）
  if (lastEarnedBadgeId !== null) {
    setTimeout(() => {
      highlightLatestBadge();
    }, 100);
  }
}

// 高亮最新获得的徽章并滚动到该位置
function highlightLatestBadge() {
  if (lastEarnedBadgeId === null) return;
  
  const grid = document.getElementById('list-badge-grid');
  if (!grid) return;
  
  const badgeItem = grid.querySelector(`[data-checkpoint-id="${lastEarnedBadgeId}"]`);
  if (!badgeItem) return;
  
  // 滚动到徽章位置
  badgeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  
  // 添加高亮动画
  badgeItem.classList.add('badge-highlight');
  
  // 3秒后移除高亮
  setTimeout(() => {
    badgeItem.classList.remove('badge-highlight');
    lastEarnedBadgeId = null; // 清除标记
  }, 3000);
}
