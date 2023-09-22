const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1524450239752-ddd212cac0b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHw3Mnx8Y2l0eXxlbnwwfHx8fDE2OTUxNjQwMTV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["city", "architecture"],
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxNnx8YXJjaGl0ZWN0dXJlfGVufDB8fHx8MTY5NTE2NTY5Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["city", "architecture"],
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1694946345674-144211392f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5NTM3NTM4OXw&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["nature", "landscape"],
  },

  {
    id: 10,
    img: "https://images.unsplash.com/photo-1682685797140-c17807f8f217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5NTM3NTM4OXw&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["nature", "landscape"],
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxMXx8bmF0dXJlfGVufDB8fHx8MTY5NTM3NTQ3MXww&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["nature", "landscape"],
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1484406566174-9da000fda645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxfHxhbmltYWx8ZW58MHx8fHwxNjk1MTY1MTY3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["animal"],
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwzfHxhbmltYWx8ZW58MHx8fHwxNjk1MTY1MTY3fDA&ixlib=rb-4.0.3&q=80&w=108",
    tags: ["animal"],
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1555169062-013468b47731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHw1fHxhbmltYWx8ZW58MHx8fHwxNjk1MTY1MTY3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["animal"],
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHw2fHxhbmltYWx8ZW58MHx8fHwxNjk1MTY1MTY3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["animal"],
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHw3fHxhbmltYWx8ZW58MHx8fHwxNjk1MTY1MTY3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["animals"],
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHw5fHxhbmltYWx8ZW58MHx8fHwxNjk1MTY1MTY3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["animal"],
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxfHxjYXJzfGVufDB8fHx8MTY5NTE2NTQ4OHww&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["cars"],
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwzfHxjYXJzfGVufDB8fHx8MTY5NTE2NTQ4OHww&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["cars"],
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxMHx8Y2Fyc3xlbnwwfHx8fDE2OTUxNjU0ODh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["cars"],
  },
  {
    id: 21,
    img: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxNXx8Y2Fyc3xlbnwwfHx8fDE2OTUxNjU1NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["cars"],
  },
  {
    id: 22,
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHw1fHxhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNjk1MTY1NjE0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["cars"],
  },
  {
    id: 23,
    img: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxfHxidWlsZGluZ3xlbnwwfHx8fDE2OTUzNzU1MzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["house"],
  },
  {
    id: 24,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHw0fHxidWlsZGluZ3xlbnwwfHx8fDE2OTUzNzU1MzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["house"],
  },
  {
    id: 25,
    img: "https://images.unsplash.com/photo-1554435493-93422e8220c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHw4fHxidWlsZGluZ3xlbnwwfHx8fDE2OTUzNzU1MzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["house"],
  },
  {
    id: 26,
    img: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxNXx8YnVpbGRpbmd8ZW58MHx8fHwxNjk1Mzc1NTQxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["house"],
  },
  {
    id: 27,
    img: "https://images.unsplash.com/photo-1461695008884-244cb4543d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwyMHx8YnVpbGRpbmd8ZW58MHx8fHwxNjk1Mzc1NTQxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["house"],
  },
  {
    id: 28,
    img: "https://images.unsplash.com/photo-1565992441121-4367c2967103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwyfHxzcG9ydHxlbnwwfHx8fDE2OTUzNzU2MjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["sport"],
  },
  {
    id: 29,
    img: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHw2fHxzcG9ydHxlbnwwfHx8fDE2OTUzNzU2MjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["sport"],
  },
  {
    id: 30,
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxMHx8c3BvcnR8ZW58MHx8fHwxNjk1Mzc1NjIwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["sport"],
  },
  {
    id: 31,
    img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxNHx8c3BvcnR8ZW58MHx8fHwxNjk1Mzc1NjY0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["sport"],
  },
  {
    id: 32,
    img: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwxOHx8c3BvcnR8ZW58MHx8fHwxNjk1Mzc1NjY0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["sport"],
  },
  {
    id: 33,
    img: "https://images.unsplash.com/photo-1562771379-eafdca7a02f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwyMnx8c3BvcnR8ZW58MHx8fHwxNjk1Mzc1NzA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["sport"],
  },
  {
    id: 34,
    img: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwyMnx8aG91c2V8ZW58MHx8fHwxNjk1MTY3MjIwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["house"],
  },
  {
    id: 35,
    img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwyNnx8aG91c2V8ZW58MHx8fHwxNjk1MTY3MjIwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["house"],
  },
  {
    id: 36,
    img: "https://images.unsplash.com/photo-1430285561322-7808604715df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwyOHx8aG91c2V8ZW58MHx8fHwxNjk1MTY3MjIwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["house"],
  },
  {
    id: 37,
    img: "https://images.unsplash.com/photo-1560026301-88340cf16be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwzMHx8aG91c2V8ZW58MHx8fHwxNjk1MTY3MjIwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["house"],
  },
  {
    id: 38,
    img: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwzMXx8aG91c2V8ZW58MHx8fHwxNjk1MTY3NDA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["house"],
  },
  {
    id: 39,
    img: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDQ1NzR8MHwxfHNlYXJjaHwzNHx8aG91c2V8ZW58MHx8fHwxNjk1MTY3NDA5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    tags: ["houses"],
  },
];
export default data;
