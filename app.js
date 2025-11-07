
// 将所有函数定义放在全局作用域，确保onclick事件可以访问
// 故宫打卡点数据
// 题库（取自 quizzes.ts）
const quizzesAll = [
  { id: 1, question: "故宫是什么时候建造的？", image: "img/waEnlcjssQLU.jpg", options: ["1406年", "1500年", "1600年", "1700年"], correctAnswer: 0, explanation: "故宫是1406年开始建造的，已经有600多岁了。它是明朝永乐皇帝下令修建的，用了14年才完成。", hint: "提示：故宫已经600多岁了" },
  { id: 2, question: "故宫有多少间房间？", image: "img/r8qKgZ34csJe.jpg", options: ["5000间", "8700多间", "10000间", "15000间"], correctAnswer: 1, explanation: "故宫实际上有8700多间房间。传说中故宫有9999间半的房子，是因为皇帝不能和天上的玉皇大帝一样'满一万'。", hint: "提示：传说是9999间半" },
  { id: 3, question: "故宫的屋顶为什么是金黄色的？", image: "img/VauNHyUsVJIx.jpg", options: ["因为很便宜", "因为黄色是皇帝专用的颜色", "因为容易清洁", "因为防水效果好"], correctAnswer: 1, explanation: "故宫的屋顶用金黄色琉璃瓦铺盖，因为黄色是皇帝专用的颜色。这样可以显示皇帝的尊贵身份。", hint: "提示：和皇帝的身份有关" },
  { id: 4, question: "太和殿屋顶上的脊兽最多有几个？", image: "img/4GWHx7IJLrEM.jpg", options: ["5个", "8个", "10个", "12个"], correctAnswer: 2, explanation: "太和殿是故宫最重要的宫殿，屋顶上有10个脊兽。脊兽越多，说明这个宫殿越尊贵。还有一个特别的脊兽叫'行什'，是骑凤的小人，只有太和殿才有。", hint: "提示：太和殿是最重要的宫殿" },
  { id: 5, question: "九龙御路上有几条龙？", image: "img/8MfONm6QiKfL.jpg", options: ["3条", "5条", "7条", "9条"], correctAnswer: 3, explanation: "九龙御路上有9条龙。只有皇帝才能走九龙御路，这是皇帝专用的通道。龙代表皇帝的权力和尊贵。", hint: "提示：从名字就能看出来" },
  { id: 6, question: "故宫现在最高的古树是什么树？", image: "img/9V70tcb19xtL.jpg", options: ["槐树", "松树", "白皮松", "柏树"], correctAnswer: 2, explanation: "故宫现在最高的古树是白皮松。这棵树的树根露了出来，树干是乳白色的，像一条守护的卧龙。", hint: "提示：树干是乳白色" },
  { id: 7, question: "日晷是用来做什么的？", image: "img/qTin7AhjPmwu.jpg", options: ["装饰用的", "看时间的", "浇水用的", "防火用的"], correctAnswer: 1, explanation: "日晷是古人用来看时间的钟表。太阳动，指针的影子也会动，根据影子的变化就能知道时间。没有太阳时，古人还有其他方法来知道时间。", hint: "提示：和太阳有关" },
  { id: 8, question: "故宫的护城河有多深？", image: "img/C3HC4qwesypV.jpg", options: ["2米深", "3米深", "5米深", "8米深"], correctAnswer: 2, explanation: "故宫外面有宽52米、深5米的护城河。这比游泳池还深，是用来保护皇帝安全的。", hint: "提示：比游泳池还深" },
  { id: 9, question: "故宫的建造材料中，石头是怎么运来的？", image: "img/ofi0kGjYpUac.jpg", options: ["用船运", "用冰路运", "用车拉", "用人抬"], correctAnswer: 1, explanation: "建造故宫用的石头特别大，有的比小汽车还大。古人很聪明，在冬天用'冰路'运来这些巨大的石头。", hint: "提示：利用了冬天的特点" },
  { id: 10, question: "故宫现在是什么地方？", image: "img/RSLd3GVM1kgU.jpg", options: ["皇帝的住所", "博物馆", "皇帝的办公室", "军事基地"], correctAnswer: 1, explanation: "1925年起，故宫变成了博物馆，现在叫'故宫博物院'。它是世界上参观人数最多的博物馆之一，里面有一百多万件文物！", hint: "提示：现在很多人去参观" },
  { id: 11, question: "故宫有多少座宫殿？", image: "img/fX5irFESSqG0.jpg", options: ["30多座", "50多座", "70多座", "100多座"], correctAnswer: 2, explanation: "故宫有七十多座宫殿。除了宫殿，还有三个大殿和八千多间房间。它是世界上最大的木结构建筑。", hint: "提示：数字在70左右" },
  { id: 12, question: "故宫的南北长度是多少米？", image: "img/gMth0EwZwNf5.jpg", options: ["800米", "900米", "961米", "1000米"], correctAnswer: 2, explanation: "故宫南北长961米，东西宽753米。走一圈要几个小时，相当于十几个足球场那么大。", hint: "提示：接近1000米" },
  { id: 13, question: "故宫的城墙有多高？", image: "img/gMth0EwZwNf5.jpg", options: ["5米", "8米", "10米", "15米"], correctAnswer: 2, explanation: "故宫外面有高10米的城墙。城墙外还有宽52米、深5米的护城河，这样的设计可以很好地保护皇帝的安全。", hint: "提示：10米相当于3层楼高" },
  { id: 14, question: "故宫准备建造材料花了多长时间？", image: "img/waEnlcjssQLU.jpg", options: ["5年", "8年", "11年", "14年"], correctAnswer: 2, explanation: "光准备材料就花了11年。1417年正式开工，三年后基本建好。所以从头到尾差不多花了14年。", hint: "提示：超过10年" },
  { id: 15, question: "故宫的木头主要来自哪些地方？", image: "img/r8qKgZ34csJe.jpg", options: ["北京和河北", "四川和云南", "浙江和江苏", "山东和山西"], correctAnswer: 1, explanation: "木头来自四川和云南，要用船和人力运到北京，可能要几个月。这说明古人为了建造故宫付出了很大的努力。", hint: "提示：在中国的南方" },
  { id: 16, question: "苏州专门为故宫烧制的砖叫什么？", image: "img/VauNHyUsVJIx.jpg", options: ["金砖", "银砖", "玉砖", "瓷砖"], correctAnswer: 0, explanation: "苏州专门烧制'金砖'，比普通砖坚硬光滑。这种特殊的砖被用在故宫最重要的地方。", hint: "提示：名字里有'金'字" },
  { id: 17, question: "故宫建成后发生过火灾吗？", image: "img/waEnlcjssQLU.jpg", options: ["没有", "只有1次", "有多次", "不清楚"], correctAnswer: 2, explanation: "建成后曾发生过多次大火，比如1421年和1597年的火灾。后来不断修建，明清皇帝在这里住了500年。", hint: "提示：古代建筑容易着火" },
  { id: 18, question: "故宫的中间有什么特殊的线？", image: "img/r8qKgZ34csJe.jpg", options: ["红色线", "中轴线", "金色线", "蓝色线"], correctAnswer: 1, explanation: "故宫的中间有一条直直的'中轴线'，像一条龙脉，从南到北贯穿北京城。这条线是故宫建筑的中心。", hint: "提示：像龙脉一样" },
  { id: 19, question: "故宫里最有名的宫殿是什么？", image: "img/VauNHyUsVJIx.jpg", options: ["乾清宫", "太和殿", "坤宁宫", "养心殿"], correctAnswer: 1, explanation: "最有名的是太和殿，皇帝举行大典的地方。太和殿是故宫最重要的宫殿，屋顶上有10个脊兽。", hint: "提示：皇帝举行大典的地方" },
  { id: 20, question: "故宫里的石狮子有什么特点？", image: "img/FQMebA4lKk4g.jpg", options: ["都是一样的", "公狮子踩球，母狮子带小狮子", "都是母狮子", "都是公狮子"], correctAnswer: 1, explanation: "石狮子：站在门口，公狮子踩球，母狮子带小狮子。这样的设计代表了皇帝的权力和家族的兴旺。", hint: "提示：有公有母" },
  { id: 21, question: "故宫里的铜鹤和铜龟代表什么？", image: "img/3Yrt7SKqFSxI.jpg", options: ["皇帝的权力", "长寿和平安", "财富和繁荣", "智慧和勇气"], correctAnswer: 1, explanation: "铜鹤和铜龟：在太和殿前，代表长寿和平安。这些动物雕塑都有特殊的象征意义。", hint: "提示：和寿命有关" },
  { id: 22, question: "故宫现在有多少件文物？", image: "img/RSLd3GVM1kgU.jpg", options: ["50万件", "100万件", "150万件", "200万件"], correctAnswer: 1, explanation: "故宫博物馆里有一百多万件文物，全国六分之一的文物都在这里！这些文物都是珍贵的历史遗产。", hint: "提示：超过100万件" },
  { id: 23, question: "脊兽是什么？", image: "img/MfvlNxOP6O6R.jpeg", options: ["屋顶上的装饰动物", "门口的雕塑", "地上的图案", "墙上的壁画"], correctAnswer: 0, explanation: "屋脊上的动物叫脊兽。脊兽越多，就表示这个宫殿越尊贵。太和殿的脊兽最多，有10个。", hint: "提示：在屋顶上" },
  { id: 24, question: "栏板下的龙头有什么作用？", image: "img/2SEkVDlnzD77.jpg", options: ["装饰", "排水", "防火", "防盗"], correctAnswer: 1, explanation: "栏板下有很多龙头，实际上是排水口。下大雨后就会有'千龙吐水'的景观，这是古人聪明的设计。", hint: "提示：和水有关" },
  { id: 25, question: "故宫里有哪些动物雕塑？", image: "img/lRYwLlDN7Q8V.jpg", options: ["只有狮子", "狮子、龙、凤、小马等", "只有龙", "只有鹤"], correctAnswer: 1, explanation: "屋顶小兽：像龙、凤、狮子、小马，排成队保护房子。这些动物都有特殊的象征意义。", hint: "提示：有很多种动物" },
  { id: 26, question: "永乐皇帝为什么要建造故宫？", image: "img/waEnlcjssQLU.jpg", options: ["为了好玩", "为了显示权力", "想要一个安全又气派的地方办公和生活", "为了吸引游客"], correctAnswer: 2, explanation: "明朝永乐皇帝想要一个安全又气派的地方办公和生活，就下令修建故宫。这反映了皇帝对安全和尊贵的追求。", hint: "提示：和皇帝的需求有关" },
  { id: 27, question: "故宫建造用了多少年？", image: "img/r8qKgZ34csJe.jpg", options: ["5年", "10年", "14年", "20年"], correctAnswer: 2, explanation: "从头到尾差不多花了14年。其中光准备材料就花了11年，1417年正式开工，三年后基本建好。", hint: "提示：超过10年" },
  { id: 28, question: "明清皇帝在故宫住了多长时间？", image: "img/VauNHyUsVJIx.jpg", options: ["100年", "300年", "500年", "700年"], correctAnswer: 2, explanation: "后来不断修建，明清皇帝在这里住了500年。直到1925年，故宫才变成了博物馆。", hint: "提示：是5个百年" },
  { id: 29, question: "故宫博物院是世界上怎样的博物馆？", image: "img/RSLd3GVM1kgU.jpg", options: ["最大的", "参观人数最多的之一", "最古老的", "最贵的"], correctAnswer: 1, explanation: "1925年起，故宫变成博物馆。现在叫'故宫博物院'，是世界上参观人数最多的博物馆之一。", hint: "提示：很多人去参观" },
  { id: 30, question: "故宫是什么结构的建筑？", image: "img/waEnlcjssQLU.jpg", options: ["石头结构", "木结构", "钢铁结构", "混凝土结构"], correctAnswer: 1, explanation: "故宫是世界上最大的木结构建筑。这说明古人的木工技术非常高超。", hint: "提示：用木头建造的" }
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
  if (pageId === 'home-page') {
    renderHomeBadges();
  }
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
                <div style="min-width:200px">
                    <img src="${cp.image}" alt="缩略图" style="width:100%;height:90px;object-fit:cover;border-radius:8px;margin-bottom:6px;" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}'" />
                    <div style=\"font-weight:bold;color:#8B0000;margin-bottom:6px;\">${cp.id}. ${cp.name}</div>
                    <div style=\"color:#666;margin-bottom:8px;\">${cp.knowledge.substring(0, 28)}...</div>
                    <button style=\"background:#FFD700;color:#8B0000;border:none;border-radius:16px;padding:6px 10px;font-weight:bold;cursor:pointer;\" onclick=\"showDetail(${cp.id})\">${statusText}</button>
                    </div>
            `;
    marker.bindPopup(popupHtml);
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
  // 详情页不再展示徽章

  // 初始化拍照与答题区
  const checkInBtn = document.getElementById('check-in-btn');
  hasPhoto = false;
  quizAnsweredCorrectly = false;
  const photoPreview = document.getElementById('photo-preview');
  const photoInput = document.getElementById('photo-input');
  if (photoPreview) photoPreview.src = PLACEHOLDER_IMG;
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
  if (quizFeedback) quizFeedback.textContent = '';
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
      li.innerHTML = `<label style=\"display:flex;gap:8px;align-items:flex-start;\"><input type=\"radio\" name=\"quizOpt\" value=\"${idx}\"> <span>${opt}</span></label>`;
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
    photoInput.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      photoPreview.src = url;
      hasPhoto = true;
      updateCheckInEnable();
    };
  }
  if (quizList) {
    quizList.onchange = (e) => {
      const selected = document.querySelector('input[name="quizOpt"]:checked');
      if (!selected) return;
      const idx = Number(selected.value);
      quizAnsweredCorrectly = quiz && idx === quiz.correctAnswer;
      if (quizFeedback) {
        quizFeedback.textContent = quizAnsweredCorrectly ? '' : '再仔细想想？';
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
    const hint = getHint(cp.id);
    showBadgeEarned(cp, hint);
    showPage('list-page'); // 返回列表页
  }
}

// 获取线索提示
function getHint(id) {
  const q = quizzesById[id];
  if (q && q.hint) return q.hint.replace(/^提示：?/, '');
  const hints = {
    1: "玉玺藏在中轴线上，它守护着最高的宝座。",
    2: "玉玺在皇帝休息的地方，那里有秘密的盒子。",
    3: "玉玺在花园的中心，被最古老的树看着。",
    4: "玉玺在九条龙的旁边，它们面朝北方。",
    5: "玉玺在故宫的角落，它能看到整个皇宫。"
  };
  return hints[id] || "";
}

// 重新开始游戏
function resetGame() {
  checkpoints.forEach(cp => cp.completed = false);
  showPage('home-page');
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  // 首次加载时，显示首页
  showPage('home-page');
  // 切到列表页时再渲染地图
  renderHomeBadges();
  const hero = document.querySelector('.home-hero');
  if (hero) { hero.onerror = () => { hero.onerror = null; hero.src = PLACEHOLDER_IMG; }; }
  const seal = document.getElementById('seal-image');
  if (seal) { seal.onerror = () => { seal.onerror = null; seal.src = PLACEHOLDER_IMG; }; }
});

// Toast 提示
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.display = 'block';
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.style.display = 'none';
  }, 2600);
}

// 获得徽章动画
function showBadgeEarned(cp, hint) {
  let overlay = document.getElementById('badge-earned-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'badge-earned-overlay';
    overlay.className = 'badge-earned-overlay';
    overlay.innerHTML = '<div class="badge-earned-card"><img id="badge-earned-img" src="" alt="徽章"><h4 id="badge-earned-text"></h4><p id="badge-earned-hint" class="badge-earned-hint"></p></div>';
    document.body.appendChild(overlay);
  }
  const img = overlay.querySelector('#badge-earned-img');
  const text = overlay.querySelector('#badge-earned-text');
  const hintEl = overlay.querySelector('#badge-earned-hint');
  img.src = cp.badgeImg;
  text.textContent = `🎉 获得 ${cp.badgeName} 徽章`;
  hintEl.textContent = hint ? `线索：${hint}` : '';
  overlay.style.display = 'flex';
  clearTimeout(showBadgeEarned._timer);
  showBadgeEarned._timer = setTimeout(() => {
    overlay.style.display = 'none';
  }, 1600);
}

// 首页徽章渲染
function renderHomeBadges() {
  const grid = document.getElementById('badge-grid');
  if (!grid) return;
  grid.innerHTML = '';
  checkpoints.forEach(cp => {
    const item = document.createElement('div');
    item.className = 'badge-item' + (cp.completed ? '' : ' badge-locked');
    item.innerHTML = `
                <img src="${cp.badgeImg}" alt="${cp.badgeName}徽章" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}'" />
                <span>${cp.badgeName}</span>
            `;
    grid.appendChild(item);
  });
}

// 列表页徽章渲染
function renderListBadges() {
  const grid = document.getElementById('list-badge-grid');
  if (!grid) return;
  grid.innerHTML = '';
  checkpoints.forEach(cp => {
    const item = document.createElement('div');
    item.className = 'badge-item' + (cp.completed ? '' : ' badge-locked');
    item.innerHTML = `
                <img src="${cp.badgeImg}" alt="${cp.badgeName}徽章" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}'" />
                <span>${cp.badgeName}</span>
            `;
    grid.appendChild(item);
  });
}
