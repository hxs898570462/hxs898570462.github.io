/* Bilingual content. Owner confirmation is required before publication. */
window.SITE_CONTENT = {
  profile: { name: 'Yucheng.Han', github: 'https://github.com/hxs898570462', email: 'Yucheng.Han23@student.xjtlu.edu.cn', contentApproved: false },
  zh: {
    strings: {
      skip: '跳转到内容', navigation: '主导航',
      navEducation: '教育经历', navSkills: '能力地图', navLearning: '当前学习', navContact: '联系', eyebrow: '个人主页',
      avatarAlt: 'Yucheng.Han 的头像', educationTitle: '教育经历', educationUniversity: '西交利物浦大学', educationMajor: '本科 · 大数据与数据科学', educationPeriod: '2023 年至今 · 在读',
      heroDescription: '学习机器学习与强化学习，实践 Python、信号处理和分布式系统。这里记录我的技术学习与项目实践。',
      explore: '查看能力地图', skillsTitle: '能力地图', skillsIntro: '学习领域与相关实践。',
      learningTitle: '当前学习', learningIntro: '正在学习的技术与内容。',
      contactTitle: '联系', contactDescription: '欢迎交流技术与项目。', contactButton: '在 GitHub 找到我',
      footer: '学习与实践', backTop: '回到顶部',
      title: 'Yucheng.Han — 个人主页', description: 'Yucheng.Han 的个人主页：机器学习、强化学习、信号处理与技术实践。'
    },
    skills: [
      { title: '编程与工具', description: '使用 Python 做数据处理、数值实验和可视化，通过 Jupyter 与 Git 组织学习代码。', tags: ['Python', 'NumPy', 'Jupyter', 'Git'] },
      { title: '机器学习', description: '学习 SVM、KNN、特征缩放与模型评估，理解核函数和特征映射。', tags: ['SVM', 'KNN', 'Kernels', 'scikit-learn'] },
      { title: '强化学习', description: '在 CartPole 项目中练习轨迹采样、Actor–Critic、GAE 和 PPO 裁剪目标；完整训练循环仍在完善。', tags: ['PPO', 'PyTorch', 'Gymnasium'], project: { label: 'CartPole PPO 项目', href: 'https://github.com/hxs898570462/RL_practice_cartpole' } },
      { title: '信号处理', description: '进行 DFT / FFT、窗函数与频谱分析实验，比较不同实现的计算效率。', tags: ['DFT / FFT', 'Hann / Hamming', 'NumPy'] },
      { title: '网络与分布式系统', description: '学习 TCP/IP、子网与 Linux 网络配置，进行 Hadoop / Spark 环境搭建和通信检查。', tags: ['TCP / IP', 'Linux', 'Hadoop', 'Spark'] },
      { title: '产品与 AI 工具', description: '迭代 Learning Companion 学习辅助插件，使用 Softr 探索数据库与低代码原型。', tags: ['Learning Companion', 'Softr', 'AI Workflows'], project: { label: 'Learning Companion 项目', href: 'https://github.com/hxs898570462/learning-companion-marketplace' } }
    ],
    learning: [
      { title: 'PPO · Actor–Critic · GAE', description: '使用 PyTorch 与 Gymnasium 练习 CartPole-v1：轨迹采样、优势估计与 PPO 参数更新，继续完善训练循环。' },
      { title: 'SVM · 核函数 · KNN', description: '学习核函数、特征映射、特征缩放，以及分类与回归模型的评估。' },
      { title: 'FFT · 窗函数', description: '学习频谱分析、Hann / Hamming 窗，以及 DFT 与 FFT 的计算效率。' },
      { title: 'HDFS · Hadoop · PySpark', description: '学习 HDFS 配置、节点通信与 PySpark 数据处理，检查多节点环境中的连接。' }
    ]
  },
  en: {
    strings: {
      skip: 'Skip to content', navigation: 'Main navigation',
      navEducation: 'Education', navSkills: 'Capabilities', navLearning: 'Learning', navContact: 'Contact', eyebrow: 'PERSONAL WEBSITE',
      avatarAlt: 'Yucheng.Han’s avatar', educationTitle: 'Education', educationUniversity: 'Xi’an Jiaotong-Liverpool University', educationMajor: 'Undergraduate · Big Data and Data Science', educationPeriod: '2023 – Present · Currently enrolled',
      heroDescription: 'Learning machine learning and reinforcement learning, with practical work in Python, signal processing, and distributed systems. A record of my technical learning and projects.',
      explore: 'View capabilities', skillsTitle: 'Capabilities', skillsIntro: 'Learning areas and related practice.',
      learningTitle: 'Currently learning', learningIntro: 'Technologies and topics I am studying.',
      contactTitle: 'Contact', contactDescription: 'Happy to exchange ideas about technology and projects.', contactButton: 'Find me on GitHub',
      footer: 'Learning & practice', backTop: 'Back to top',
      title: 'Yucheng.Han — Personal website', description: 'Yucheng.Han: machine learning, reinforcement learning, signal processing, and technical projects.'
    },
    skills: [
      { title: 'Programming & tools', description: 'Using Python for data processing, numerical experiments, and visualization, with Jupyter and Git to organize learning code.', tags: ['Python', 'NumPy', 'Jupyter', 'Git'] },
      { title: 'Machine learning', description: 'Studying SVM, KNN, feature scaling, and model evaluation, including kernels and feature mappings.', tags: ['SVM', 'KNN', 'Kernels', 'scikit-learn'] },
      { title: 'Reinforcement learning', description: 'Practicing trajectory collection, Actor–Critic, GAE, and the clipped PPO objective in CartPole. The full training loop is still in progress.', tags: ['PPO', 'PyTorch', 'Gymnasium'], project: { label: 'CartPole PPO project', href: 'https://github.com/hxs898570462/RL_practice_cartpole' } },
      { title: 'Signal processing', description: 'Experimenting with DFT / FFT, window functions, and spectrum analysis, comparing computational efficiency across implementations.', tags: ['DFT / FFT', 'Hann / Hamming', 'NumPy'] },
      { title: 'Networks & distributed systems', description: 'Studying TCP/IP, subnets, and Linux networking, with Hadoop / Spark environment setup and communication checks.', tags: ['TCP / IP', 'Linux', 'Hadoop', 'Spark'] },
      { title: 'Product & AI tools', description: 'Iterating on the Learning Companion plugin and exploring databases and low-code prototypes with Softr.', tags: ['Learning Companion', 'Softr', 'AI Workflows'], project: { label: 'Learning Companion project', href: 'https://github.com/hxs898570462/learning-companion-marketplace' } }
    ],
    learning: [
      { title: 'PPO · Actor–Critic · GAE', description: 'Using PyTorch and Gymnasium in CartPole-v1 to practice trajectory collection, advantage estimation, and PPO updates, while developing the training loop.' },
      { title: 'SVM · Kernels · KNN', description: 'Studying kernels, feature mappings, feature scaling, and the evaluation of classification and regression models.' },
      { title: 'FFT · Window functions', description: 'Studying spectrum analysis, Hann / Hamming windows, and the computational efficiency of DFT and FFT.' },
      { title: 'HDFS · Hadoop · PySpark', description: 'Studying HDFS configuration, node communication, and PySpark data processing, with connection checks across multiple nodes.' }
    ]
  }
};
