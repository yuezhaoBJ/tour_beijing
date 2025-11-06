export interface Quiz {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint?: string;
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    question: "故宫是什么时候建造的？",
    image: "/images/waEnlcjssQLU.jpg",
    options: ["1406年", "1500年", "1600年", "1700年"],
    correctAnswer: 0,
    explanation: "故宫是1406年开始建造的，已经有600多岁了。它是明朝永乐皇帝下令修建的，用了14年才完成。",
    hint: "提示：故宫已经600多岁了"
  },
  {
    id: 2,
    question: "故宫有多少间房间？",
    image: "/images/r8qKgZ34csJe.jpg",
    options: ["5000间", "8700多间", "10000间", "15000间"],
    correctAnswer: 1,
    explanation: "故宫实际上有8700多间房间。传说中故宫有9999间半的房子，是因为皇帝不能和天上的玉皇大帝一样'满一万'。",
    hint: "提示：传说是9999间半"
  },
  {
    id: 3,
    question: "故宫的屋顶为什么是金黄色的？",
    image: "/images/VauNHyUsVJIx.jpg",
    options: ["因为很便宜", "因为黄色是皇帝专用的颜色", "因为容易清洁", "因为防水效果好"],
    correctAnswer: 1,
    explanation: "故宫的屋顶用金黄色琉璃瓦铺盖，因为黄色是皇帝专用的颜色。这样可以显示皇帝的尊贵身份。",
    hint: "提示：和皇帝的身份有关"
  },
  {
    id: 4,
    question: "太和殿屋顶上的脊兽最多有几个？",
    image: "/images/4GWHx7IJLrEM.jpg",
    options: ["5个", "8个", "10个", "12个"],
    correctAnswer: 2,
    explanation: "太和殿是故宫最重要的宫殿，屋顶上有10个脊兽。脊兽越多，说明这个宫殿越尊贵。还有一个特别的脊兽叫'行什'，是骑凤的小人，只有太和殿才有。",
    hint: "提示：太和殿是最重要的宫殿"
  },
  {
    id: 5,
    question: "九龙御路上有几条龙？",
    image: "/images/8MfONm6QiKfL.jpg",
    options: ["3条", "5条", "7条", "9条"],
    correctAnswer: 3,
    explanation: "九龙御路上有9条龙。只有皇帝才能走九龙御路，这是皇帝专用的通道。龙代表皇帝的权力和尊贵。",
    hint: "提示：从名字就能看出来"
  },
  {
    id: 6,
    question: "故宫现在最高的古树是什么树？",
    image: "/images/9V70tcb19xtL.jpg",
    options: ["槐树", "松树", "白皮松", "柏树"],
    correctAnswer: 2,
    explanation: "故宫现在最高的古树是白皮松。这棵树的树根露了出来，树干是乳白色的，像一条守护的卧龙。",
    hint: "提示：树干是乳白色的"
  },
  {
    id: 7,
    question: "日晷是用来做什么的？",
    image: "/images/qTin7AhjPmwu.jpg",
    options: ["装饰用的", "看时间的", "浇水用的", "防火用的"],
    correctAnswer: 1,
    explanation: "日晷是古人用来看时间的钟表。太阳动，指针的影子也会动，根据影子的变化就能知道时间。没有太阳时，古人还有其他方法来知道时间。",
    hint: "提示：和太阳有关"
  },
  {
    id: 8,
    question: "故宫的护城河有多深？",
    image: "/images/C3HC4qwesypV.jpg",
    options: ["2米深", "3米深", "5米深", "8米深"],
    correctAnswer: 2,
    explanation: "故宫外面有宽52米、深5米的护城河。这比游泳池还深，是用来保护皇帝安全的。",
    hint: "提示：比游泳池还深"
  },
  {
    id: 9,
    question: "故宫的建造材料中，石头是怎么运来的？",
    image: "/images/ofi0kGjYpUac.jpg",
    options: ["用船运", "用冰路运", "用车拉", "用人抬"],
    correctAnswer: 1,
    explanation: "建造故宫用的石头特别大，有的比小汽车还大。古人很聪明，在冬天用'冰路'运来这些巨大的石头。",
    hint: "提示：利用了冬天的特点"
  },
  {
    id: 10,
    question: "故宫现在是什么地方？",
    image: "/images/RSLd3GVM1kgU.jpg",
    options: ["皇帝的住所", "博物馆", "皇帝的办公室", "军事基地"],
    correctAnswer: 1,
    explanation: "1925年起，故宫变成了博物馆，现在叫'故宫博物院'。它是世界上参观人数最多的博物馆之一，里面有一百多万件文物！",
    hint: "提示：现在很多人去参观"
  },
  {
    id: 11,
    question: "故宫有多少座宫殿？",
    image: "/images/fX5irFESSqG0.jpg",
    options: ["30多座", "50多座", "70多座", "100多座"],
    correctAnswer: 2,
    explanation: "故宫有七十多座宫殿。除了宫殿，还有三个大殿和八千多间房间。它是世界上最大的木结构建筑。",
    hint: "提示：数字在70左右"
  },
  {
    id: 12,
    question: "故宫的南北长度是多少米？",
    image: "/images/gMth0EwZwNf5.jpg",
    options: ["800米", "900米", "961米", "1000米"],
    correctAnswer: 2,
    explanation: "故宫南北长961米，东西宽753米。走一圈要几个小时，相当于十几个足球场那么大。",
    hint: "提示：接近1000米"
  },
  {
    id: 13,
    question: "故宫的城墙有多高？",
    image: "/images/gMth0EwZwNf5.jpg",
    options: ["5米", "8米", "10米", "15米"],
    correctAnswer: 2,
    explanation: "故宫外面有高10米的城墙。城墙外还有宽52米、深5米的护城河，这样的设计可以很好地保护皇帝的安全。",
    hint: "提示：10米相当于3层楼高"
  },
  {
    id: 14,
    question: "故宫准备建造材料花了多长时间？",
    image: "/images/waEnlcjssQLU.jpg",
    options: ["5年", "8年", "11年", "14年"],
    correctAnswer: 2,
    explanation: "光准备材料就花了11年。1417年正式开工，三年后基本建好。所以从头到尾差不多花了14年。",
    hint: "提示：超过10年"
  },
  {
    id: 15,
    question: "故宫的木头主要来自哪些地方？",
    image: "/images/r8qKgZ34csJe.jpg",
    options: ["北京和河北", "四川和云南", "浙江和江苏", "山东和山西"],
    correctAnswer: 1,
    explanation: "木头来自四川和云南，要用船和人力运到北京，可能要几个月。这说明古人为了建造故宫付出了很大的努力。",
    hint: "提示：在中国的南方"
  },
  {
    id: 16,
    question: "苏州专门为故宫烧制的砖叫什么？",
    image: "/images/VauNHyUsVJIx.jpg",
    options: ["金砖", "银砖", "玉砖", "瓷砖"],
    correctAnswer: 0,
    explanation: "苏州专门烧制'金砖'，比普通砖坚硬光滑。这种特殊的砖被用在故宫最重要的地方。",
    hint: "提示：名字里有'金'字"
  },
  {
    id: 17,
    question: "故宫建成后发生过火灾吗？",
    image: "/images/waEnlcjssQLU.jpg",
    options: ["没有", "只有1次", "有多次", "不清楚"],
    correctAnswer: 2,
    explanation: "建成后曾发生过多次大火，比如1421年和1597年的火灾。后来不断修建，明清皇帝在这里住了500年。",
    hint: "提示：古代建筑容易着火"
  },
  {
    id: 18,
    question: "故宫的中间有什么特殊的线？",
    image: "/images/r8qKgZ34csJe.jpg",
    options: ["红色线", "中轴线", "金色线", "蓝色线"],
    correctAnswer: 1,
    explanation: "故宫的中间有一条直直的'中轴线'，像一条龙脉，从南到北贯穿北京城。这条线是故宫建筑的中心。",
    hint: "提示：像龙脉一样"
  },
  {
    id: 19,
    question: "故宫里最有名的宫殿是什么？",
    image: "/images/VauNHyUsVJIx.jpg",
    options: ["乾清宫", "太和殿", "坤宁宫", "养心殿"],
    correctAnswer: 1,
    explanation: "最有名的是太和殿，皇帝举行大典的地方。太和殿是故宫最重要的宫殿，屋顶上有10个脊兽。",
    hint: "提示：皇帝举行大典的地方"
  },
  {
    id: 20,
    question: "故宫里的石狮子有什么特点？",
    image: "/images/FQMebA4lKk4g.jpg",
    options: ["都是一样的", "公狮子踩球，母狮子带小狮子", "都是母狮子", "都是公狮子"],
    correctAnswer: 1,
    explanation: "石狮子：站在门口，公狮子踩球，母狮子带小狮子。这样的设计代表了皇帝的权力和家族的兴旺。",
    hint: "提示：有公有母"
  },
  {
    id: 21,
    question: "故宫里的铜鹤和铜龟代表什么？",
    image: "/images/3Yrt7SKqFSxI.jpg",
    options: ["皇帝的权力", "长寿和平安", "财富和繁荣", "智慧和勇气"],
    correctAnswer: 1,
    explanation: "铜鹤和铜龟：在太和殿前，代表长寿和平安。这些动物雕塑都有特殊的象征意义。",
    hint: "提示：和寿命有关"
  },
  {
    id: 22,
    question: "故宫现在有多少件文物？",
    image: "/images/RSLd3GVM1kgU.jpg",
    options: ["50万件", "100万件", "150万件", "200万件"],
    correctAnswer: 1,
    explanation: "故宫博物馆里有一百多万件文物，全国六分之一的文物都在这里！这些文物都是珍贵的历史遗产。",
    hint: "提示：超过100万件"
  },
  {
    id: 23,
    question: "脊兽是什么？",
    image: "/images/MfvlNxOP6O6R.jpeg",
    options: ["屋顶上的装饰动物", "门口的雕塑", "地上的图案", "墙上的壁画"],
    correctAnswer: 0,
    explanation: "屋脊上的动物叫脊兽。脊兽越多，就表示这个宫殿越尊贵。太和殿的脊兽最多，有10个。",
    hint: "提示：在屋顶上"
  },
  {
    id: 24,
    question: "栏板下的龙头有什么作用？",
    image: "/images/2SEkVDlnzD77.jpg",
    options: ["装饰", "排水", "防火", "防盗"],
    correctAnswer: 1,
    explanation: "栏板下有很多龙头，实际上是排水口。下大雨后就会有'千龙吐水'的景观，这是古人聪明的设计。",
    hint: "提示：和水有关"
  },
  {
    id: 25,
    question: "故宫里有哪些动物雕塑？",
    image: "/images/lRYwLlDN7Q8V.jpg",
    options: ["只有狮子", "狮子、龙、凤、小马等", "只有龙", "只有鹤"],
    correctAnswer: 1,
    explanation: "屋顶小兽：像龙、凤、狮子、小马，排成队保护房子。这些动物都有特殊的象征意义。",
    hint: "提示：有很多种动物"
  },
  {
    id: 26,
    question: "永乐皇帝为什么要建造故宫？",
    image: "/images/waEnlcjssQLU.jpg",
    options: ["为了好玩", "为了显示权力", "想要一个安全又气派的地方办公和生活", "为了吸引游客"],
    correctAnswer: 2,
    explanation: "明朝永乐皇帝想要一个安全又气派的地方办公和生活，就下令修建故宫。这反映了皇帝对安全和尊贵的追求。",
    hint: "提示：和皇帝的需求有关"
  },
  {
    id: 27,
    question: "故宫建造用了多少年？",
    image: "/images/r8qKgZ34csJe.jpg",
    options: ["5年", "10年", "14年", "20年"],
    correctAnswer: 2,
    explanation: "从头到尾差不多花了14年。其中光准备材料就花了11年，1417年正式开工，三年后基本建好。",
    hint: "提示：超过10年"
  },
  {
    id: 28,
    question: "明清皇帝在故宫住了多长时间？",
    image: "/images/VauNHyUsVJIx.jpg",
    options: ["100年", "300年", "500年", "700年"],
    correctAnswer: 2,
    explanation: "后来不断修建，明清皇帝在这里住了500年。直到1925年，故宫才变成了博物馆。",
    hint: "提示：是5个百年"
  },
  {
    id: 29,
    question: "故宫博物院是世界上怎样的博物馆？",
    image: "/images/RSLd3GVM1kgU.jpg",
    options: ["最大的", "参观人数最多的之一", "最古老的", "最贵的"],
    correctAnswer: 1,
    explanation: "1925年起，故宫变成博物馆。现在叫'故宫博物院'，是世界上参观人数最多的博物馆之一。",
    hint: "提示：很多人去参观"
  },
  {
    id: 30,
    question: "故宫是什么结构的建筑？",
    image: "/images/waEnlcjssQLU.jpg",
    options: ["石头结构", "木结构", "钢铁结构", "混凝土结构"],
    correctAnswer: 1,
    explanation: "故宫是世界上最大的木结构建筑。这说明古人的木工技术非常高超。",
    hint: "提示：用木头建造的"
  }
];
