const locations = [
  {
    id: "friends",
    title: "Friends",
    zh: "老友记",
    type: "tv",
    tags: ["tv", "comedy"],
    area: "West Village",
    place: "Friends Apartment Building",
    address: "90 Bedford St",
    coords: [40.73242, -74.00545],
    year: "1994-2004",
    color: "#0f7b78",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/90_Bedford_Street.JPG/640px-90_Bedford_Street.JPG",
    note: "这栋楼是 Friends 的纽约想象入口。室内戏多在洛杉矶完成，但 West Village 的街角让 Monica、Rachel、Chandler、Joey 的生活有了真实坐标。",
    tip: "下午光线适合拍楼体和街角，记得给住户入口留出空间。",
    sources: ["Lonely Planet", "CineTour USA"]
  },
  {
    id: "satc",
    title: "Sex and the City",
    zh: "欲望都市",
    type: "tv",
    tags: ["tv", "romance"],
    area: "West Village",
    place: "Carrie Bradshaw's stoop",
    address: "66 Perry St",
    coords: [40.73555, -74.00305],
    year: "1998-2004",
    color: "#4e7dff",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/66_Perry_Street_Manhattan.jpg/640px-66_Perry_Street_Manhattan.jpg",
    note: "Carrie 的门阶几乎成了都市爱情叙事的图标。它把虚构的上东区住址，落到了 West Village 的褐石屋外。",
    tip: "门阶常有提示和隔离，适合在街对面取景。",
    sources: ["Screen Rant", "Discover NYC"]
  },
  {
    id: "gossipgirl",
    title: "Gossip Girl",
    zh: "绯闻女孩",
    type: "tv",
    tags: ["tv", "romance"],
    area: "Midtown East",
    place: "Lotte New York Palace",
    address: "455 Madison Ave",
    coords: [40.75848, -73.97453],
    year: "2007-2012",
    color: "#3268a8",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lotte_New_York_Palace_Hotel_2021.jpg/640px-Lotte_New_York_Palace_Hotel_2021.jpg",
    note: "Palace 是 Serena 的权力背景之一，也很适合理解 Gossip Girl 如何把酒店、学校、台阶和门童拍成阶层地图。",
    tip: "可顺路走到 Grand Central、Fifth Avenue 和 St. Patrick's Cathedral。",
    sources: ["Wonderbox"]
  },
  {
    id: "breakfast",
    title: "Breakfast at Tiffany's",
    zh: "蒂凡尼的早餐",
    type: "film",
    tags: ["film", "romance"],
    area: "Fifth Avenue",
    place: "Tiffany & Co.",
    address: "727 Fifth Ave",
    coords: [40.76248, -73.97398],
    year: "1961",
    color: "#0f7b78",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tiffany_%26_Co._Flagship_Store_727_Fifth_Avenue.jpg/640px-Tiffany_%26_Co._Flagship_Store_727_Fifth_Avenue.jpg",
    note: "Holly Golightly 清晨站在橱窗前的画面，让 Fifth Avenue 的奢华变成孤独、向往和纽约梦的混合物。",
    tip: "清晨人少，最接近电影里的空街感。",
    sources: ["Visit The USA"]
  },
  {
    id: "homealone2",
    title: "Home Alone 2: Lost in New York",
    zh: "小鬼当家2：迷失纽约",
    type: "film",
    tags: ["film", "comedy"],
    area: "Central Park South",
    place: "The Plaza Hotel",
    address: "768 Fifth Ave",
    coords: [40.76445, -73.97434],
    year: "1992",
    color: "#3268a8",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Plaza_Hotel_NYC.jpg/640px-Plaza_Hotel_NYC.jpg",
    note: "Kevin 的纽约冒险把 Plaza 和 Central Park South 变成节日片朝圣地，也把游客版纽约拍得非常浓缩。",
    tip: "和 Tiffany、Central Park 南缘、Wollman Rink 能串成一条轻松步行线。",
    sources: ["Screen Rant"]
  },
  {
    id: "ghostbusters",
    title: "Ghostbusters",
    zh: "捉鬼敢死队",
    type: "film",
    tags: ["film", "comedy"],
    area: "Tribeca",
    place: "Hook & Ladder 8",
    address: "14 N Moore St",
    coords: [40.71957, -74.00662],
    year: "1984",
    color: "#4e7dff",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Hook_%26_Ladder_8.jpg/640px-Hook_%26_Ladder_8.jpg",
    note: "这座消防站就是 Ghostbusters 总部外景，Tribeca 的低楼街景让它到今天仍然很好认。",
    tip: "消防站仍在使用，拍照时保持车道通畅。",
    sources: ["Screen Rant"]
  },
  {
    id: "spiderman",
    title: "Spider-Man",
    zh: "蜘蛛侠",
    type: "film",
    tags: ["film", "action"],
    area: "Flatiron",
    place: "Flatiron Building",
    address: "175 Fifth Ave",
    coords: [40.74106, -73.9897],
    year: "2002 onward",
    color: "#4e7dff",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flatiron_Building_from_Empire_State_Building.jpg/640px-Flatiron_Building_from_Empire_State_Building.jpg",
    note: "Flatiron Building 常被影迷和游客拿来连接 Spider-Man 的曼哈顿天际线想象，周边也很容易串到 Daily Bugle 式的报业纽约。",
    tip: "Madison Square Park 南侧最适合拍出建筑尖角。",
    sources: ["NYC MOME"]
  },
  {
    id: "avengers",
    title: "The Avengers",
    zh: "复仇者联盟",
    type: "film",
    tags: ["film", "action"],
    area: "Midtown East",
    place: "Grand Central Terminal",
    address: "89 E 42nd St",
    coords: [40.75273, -73.97723],
    year: "2012",
    color: "#3268a8",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Grand_Central_Terminal_Main_Concourse_Jan_2006.jpg/640px-Grand_Central_Terminal_Main_Concourse_Jan_2006.jpg",
    note: "Grand Central 周边是纽约被超级英雄电影放大的典型空间：交通节点、摩天楼峡谷和灾难大片尺度合在一起。",
    tip: "主大厅适合广角，外部可顺路看 Chrysler Building。",
    sources: ["Viator"]
  },
  {
    id: "seinfeld",
    title: "Seinfeld",
    zh: "宋飞正传",
    type: "tv",
    tags: ["tv", "comedy"],
    area: "Morningside Heights",
    place: "Tom's Restaurant",
    address: "2880 Broadway",
    coords: [40.80547, -73.96523],
    year: "1989-1998",
    color: "#0f7b78",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Tom%27s_Restaurant%2C_NYC.jpg/640px-Tom%27s_Restaurant%2C_NYC.jpg",
    note: "Monk's Cafe 的外景来自 Tom's Restaurant。它把一部关于日常闲聊的 sitcom 固定在 Columbia 附近的街角。",
    tip: "可和 Columbia campus、Riverside Park 放在同半天。",
    sources: ["Looper"]
  },
  {
    id: "himym",
    title: "How I Met Your Mother",
    zh: "老爸老妈的浪漫史",
    type: "tv",
    tags: ["tv", "comedy", "romance"],
    area: "Hell's Kitchen",
    place: "McGee's Pub",
    address: "240 W 55th St",
    coords: [40.7644, -73.98301],
    year: "2005-2014",
    color: "#c58a2a",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/West_55th_Street_NYC.jpg/640px-West_55th_Street_NYC.jpg",
    note: "McGee's Pub 被广泛视为 MacLaren's 的灵感来源，让 HIMYM 的群像友情有了 Midtown West 的现实锚点。",
    tip: "靠近 Broadway 剧院区，适合晚上看剧前后顺路。",
    sources: ["NYC MOME"]
  },
  {
    id: "devilwearsprada",
    title: "The Devil Wears Prada",
    zh: "穿普拉达的女王",
    type: "film",
    tags: ["film", "fashion", "comedy"],
    area: "Midtown West",
    place: "McGraw-Hill Building",
    address: "1221 Avenue of the Americas",
    coords: [40.75906, -73.98224],
    year: "2006",
    color: "#172026",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/McGraw-Hill_Building_from_49th_Street.jpg/640px-McGraw-Hill_Building_from_49th_Street.jpg",
    note: "Elias-Clarke 的杂志帝国借 Midtown 办公楼获得了冰冷、效率和时尚工业的气场。",
    tip: "和 Rockefeller Center、Bryant Park、Times Square 都很近。",
    sources: ["NYC MOME"]
  },
  {
    id: "succession",
    title: "Succession",
    zh: "继承之战",
    type: "tv",
    tags: ["tv", "drama"],
    area: "Financial District",
    place: "28 Liberty Street",
    address: "28 Liberty St",
    coords: [40.70743, -74.00974],
    year: "2018-2023",
    color: "#3268a8",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/28_Liberty_Street_2018.jpg/640px-28_Liberty_Street_2018.jpg",
    note: "Succession 的纽约不是浪漫背景，而是权力、资本、直升机和会议室的城市。Financial District 很适合承接 Waystar 式的公司神话。",
    tip: "适合和 Wall Street、NYSE、Battery Park 一起走。",
    sources: ["NYC MOME"]
  },
  {
    id: "mrrobot",
    title: "Mr. Robot",
    zh: "黑客军团",
    type: "tv",
    tags: ["tv", "crime"],
    area: "Coney Island",
    place: "Wonder Wheel / Boardwalk",
    address: "Coney Island",
    coords: [40.57493, -73.98594],
    year: "2015-2019",
    color: "#3268a8",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Coney_Island_Boardwalk.jpg/640px-Coney_Island_Boardwalk.jpg",
    note: "fsociety 的基地想象和 Coney Island 的游乐场废墟感相互强化，给科技惊悚剧加了很纽约的边缘气质。",
    tip: "夏季氛围最好，从 Manhattan 过去要预留交通时间。",
    sources: ["NYC MOME"]
  },
  {
    id: "joker",
    title: "Joker",
    zh: "小丑",
    type: "film",
    tags: ["film", "crime"],
    area: "Bronx",
    place: "Joker Stairs",
    address: "W 167th St steps",
    coords: [40.83586, -73.92368],
    year: "2019",
    color: "#4e7dff",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Joker_Stairs_2019.jpg/640px-Joker_Stairs_2019.jpg",
    note: "Arthur Fleck 的楼梯舞让 Bronx 的一段日常阶梯变成全球 meme 景点。它说明当代电影如何制造新地标。",
    tip: "尊重居民通行，不要长时间占用台阶。",
    sources: ["Wikipedia"]
  },
  {
    id: "taxidriver",
    title: "Taxi Driver",
    zh: "出租车司机",
    type: "film",
    tags: ["film", "crime"],
    area: "Times Square",
    place: "Times Square",
    address: "W 42nd St & Broadway",
    coords: [40.758, -73.9855],
    year: "1976",
    color: "#4e7dff",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg",
    note: "Taxi Driver 记录的是更粗粝的 1970s Times Square。今天区域气质变了，但这里仍是纽约银幕神话的核心。",
    tip: "夜晚霓虹强烈，更适合作为历史对照点。",
    sources: ["Rebel Atlas"]
  },
  {
    id: "johnwick",
    title: "John Wick",
    zh: "疾速追杀",
    type: "film",
    tags: ["film", "crime", "action"],
    area: "Financial District",
    place: "The Continental exterior",
    address: "1 Wall Street Court",
    coords: [40.70599, -74.00777],
    year: "2014 onward",
    color: "#172026",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/1_Wall_Street_Court.jpg/640px-1_Wall_Street_Court.jpg",
    note: "The Continental 的外景把 Financial District 的旧建筑拍成杀手世界的礼仪、规则和危险入口。",
    tip: "和 The Godfather、Succession、Wolf of Wall Street 的下城点位很好串。",
    sources: ["NYC MOME"]
  },
  {
    id: "harrysally",
    title: "When Harry Met Sally...",
    zh: "当哈利遇到莎莉",
    type: "film",
    tags: ["film", "romance", "comedy"],
    area: "Lower East Side",
    place: "Katz's Delicatessen",
    address: "205 E Houston St",
    coords: [40.72223, -73.98743],
    year: "1989",
    color: "#c58a2a",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Katz%27s_Deli%2C_New_York_City.jpg/640px-Katz%27s_Deli%2C_New_York_City.jpg",
    note: "Katz's 的餐桌戏让一家熟食店成了浪漫喜剧史的坐标，也让纽约食物、节奏和人群成为故事的一部分。",
    tip: "点餐票别丢；高峰排队长，早午餐时段更舒服。",
    sources: ["Screen Rant", "Wikipedia"]
  },
  {
    id: "youvegotmail",
    title: "You've Got Mail",
    zh: "电子情书",
    type: "film",
    tags: ["film", "romance", "comedy"],
    area: "Upper West Side",
    place: "Cafe Lalo",
    address: "201 W 83rd St",
    coords: [40.78599, -73.97613],
    year: "1998",
    color: "#c58a2a",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/W83_Amsterdam_jeh.jpg/640px-W83_Amsterdam_jeh.jpg",
    note: "Cafe Lalo 是 Kathleen 和 Joe 线下相遇的重要地点，Upper West Side 的书店、咖啡馆和街角共同构成了这部电影的温柔纽约。",
    tip: "可和 AMNH、The Belnord、American Psycho 外景一起走。",
    sources: ["Rebel Atlas"]
  },
  {
    id: "wolfofwallstreet",
    title: "The Wolf of Wall Street",
    zh: "华尔街之狼",
    type: "film",
    tags: ["film", "crime"],
    area: "Financial District",
    place: "New York Stock Exchange",
    address: "11 Wall St",
    coords: [40.70688, -74.01127],
    year: "2013",
    color: "#577a45",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/NYSE127.jpg/640px-NYSE127.jpg",
    note: "电影里的金融狂热最终要回到 Wall Street 这个符号中心。它和 Succession、John Wick 的下城空间能形成一条资本与暴力的路线。",
    tip: "NYSE 外部安保较多，适合从 Broad Street 拍建筑正面。",
    sources: ["NYC MOME"]
  },
  {
    id: "madmen",
    title: "Mad Men",
    zh: "广告狂人",
    type: "tv",
    tags: ["tv", "drama"],
    area: "Midtown West",
    place: "Time-Life Building",
    address: "1271 Avenue of the Americas",
    coords: [40.7606, -73.98194],
    year: "2007-2015",
    color: "#c58a2a",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Time-Life_Building_by_David_Shankbone.jpg/640px-Time-Life_Building_by_David_Shankbone.jpg",
    note: "Mad Men 的纽约是 Midtown 办公楼、午餐酒和广告行业的现代性。Time-Life Building 很适合承载 Sterling Cooper 的时代质感。",
    tip: "Rockefeller Center 一带非常适合做 1960s office New York 主题散步。",
    sources: ["NYC MOME"]
  },
  {
    id: "onlymurders",
    title: "Only Murders in the Building",
    zh: "大楼里只有谋杀",
    type: "tv",
    tags: ["tv", "comedy", "crime"],
    area: "Upper West Side",
    place: "The Belnord",
    address: "225 W 86th St",
    coords: [40.78856, -73.97689],
    year: "2021-present",
    color: "#577a45",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/The_Belnord_225_West_86th_Street.jpg/640px-The_Belnord_225_West_86th_Street.jpg",
    note: "The Belnord 是 Arconia 的外景。它把 Upper West Side 的大型公寓楼拍成封闭社区、邻里八卦和播客悬疑的舞台。",
    tip: "只能拍外观，适合和 Cafe Lalo、AMNH 同线。",
    sources: ["NYC MOME"]
  },
  {
    id: "b99",
    title: "Brooklyn Nine-Nine",
    zh: "神烦警探",
    type: "tv",
    tags: ["tv", "comedy", "crime"],
    area: "Brooklyn",
    place: "78th Precinct exterior",
    address: "65 6th Ave, Park Slope",
    coords: [40.6802, -73.97538],
    year: "2013-2021",
    color: "#0f7b78",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/NYPD_78th_Precinct.jpg/640px-NYPD_78th_Precinct.jpg",
    note: "剧中 99 分局的现实外景常被影迷连到 Park Slope 的警局建筑，把职场喜剧落在 Brooklyn 的社区尺度里。",
    tip: "警局仍在使用，外部快速拍照即可。",
    sources: ["NYC MOME"]
  },
  {
    id: "svu",
    title: "Law & Order: SVU",
    zh: "法律与秩序：特殊受害者",
    type: "tv",
    tags: ["tv", "crime"],
    area: "Civic Center",
    place: "New York County Supreme Court",
    address: "60 Centre St",
    coords: [40.71431, -74.00149],
    year: "1999-present",
    color: "#172026",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/New_York_County_Courthouse_60_Centre_Street.jpg/640px-New_York_County_Courthouse_60_Centre_Street.jpg",
    note: "SVU 的纽约是程序、案件、法庭和警局的城市。Civic Center 能把这类长寿犯罪剧的制度空间一次看明白。",
    tip: "法院建筑密集，适合白天步行；注意安保区域。",
    sources: ["NYC MOME"]
  },
  {
    id: "nightmuseum",
    title: "Night at the Museum",
    zh: "博物馆奇妙夜",
    type: "film",
    tags: ["film", "comedy"],
    area: "Upper West Side",
    place: "American Museum of Natural History",
    address: "200 Central Park W",
    coords: [40.78132, -73.97399],
    year: "2006",
    color: "#577a45",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/American_Museum_of_Natural_History_%2852575%29.JPG/640px-American_Museum_of_Natural_History_%2852575%29.JPG",
    note: "AMNH 把儿童奇幻、博物馆教育和纽约家庭旅游合在一起，是游客最容易把电影打卡转成真实体验的地点之一。",
    tip: "建议直接留出半天进馆，不只是在门口拍照。",
    sources: ["Visit The USA"]
  },
  {
    id: "goodfellas",
    title: "Goodfellas",
    zh: "好家伙",
    type: "film",
    tags: ["film", "crime"],
    area: "Queens",
    place: "Jackson Hole Diner",
    address: "69-35 Astoria Blvd N",
    coords: [40.76588, -73.89598],
    year: "1990",
    color: "#4e7dff",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Astoria_Blvd_North_Queens.jpg/640px-Astoria_Blvd_North_Queens.jpg",
    note: "Goodfellas 的纽约黑帮空间不只在 Manhattan。Queens 的餐馆、住宅和公路边缘感，给影片提供了更日常也更危险的地理质感。",
    tip: "Queens 点位分散，适合单独做一条外 borough 路线。",
    sources: ["NYC MOME"]
  },
  {
    id: "godfather",
    title: "The Godfather",
    zh: "教父",
    type: "film",
    tags: ["film", "crime"],
    area: "Little Italy",
    place: "St. Patrick's Old Cathedral",
    address: "263 Mulberry St",
    coords: [40.72386, -73.99544],
    year: "1972",
    color: "#172026",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/St_Patrick%27s_Old_Cathedral.jpg/640px-St_Patrick%27s_Old_Cathedral.jpg",
    note: "The Godfather 的纽约把家族、移民社区、宗教仪式和暴力秩序叠在一起。Little Italy 是理解这层银幕纽约的关键。",
    tip: "可和 Lower East Side、SoHo、Tribeca 串成下城路线。",
    sources: ["Rebel Atlas"]
  },
  {
    id: "frenchconnection",
    title: "The French Connection",
    zh: "法国贩毒网",
    type: "film",
    tags: ["film", "crime", "action"],
    area: "Brooklyn",
    place: "Bensonhurst elevated train chase area",
    address: "86th St, Brooklyn",
    coords: [40.59272, -73.97825],
    year: "1971",
    color: "#4e7dff",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/NYCS_BMT_Sea_Beach_86th_Street.jpg/640px-NYCS_BMT_Sea_Beach_86th_Street.jpg",
    note: "The French Connection 的高架列车追车戏是纽约犯罪片动作地理的经典，把 Brooklyn 街道速度感拍到极致。",
    tip: "这里离 Coney Island 不远，可和 Mr. Robot 放在同天外 borough 行程。",
    sources: ["Rebel Atlas"]
  },
  {
    id: "dotherightthing",
    title: "Do the Right Thing",
    zh: "为所应为",
    type: "film",
    tags: ["film", "drama"],
    area: "Bed-Stuy",
    place: "Stuyvesant Avenue",
    address: "Bedford-Stuyvesant",
    coords: [40.68314, -73.93109],
    year: "1989",
    color: "#c58a2a",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Stuyvesant_Avenue_Brooklyn.jpg/640px-Stuyvesant_Avenue_Brooklyn.jpg",
    note: "Spike Lee 把 Bed-Stuy 的炎热街区拍成美国城市关系的压力锅。这里不是单一门牌，更像一整段街区肌理。",
    tip: "适合白天慢走，关注褐石屋、街树和社区尺度。",
    sources: ["Reddit NYC movie discussion"]
  },
  {
    id: "kingkong",
    title: "King Kong",
    zh: "金刚",
    type: "film",
    tags: ["film", "action"],
    area: "Midtown South",
    place: "Empire State Building",
    address: "20 W 34th St",
    coords: [40.74844, -73.98566],
    year: "1933 / 2005",
    color: "#3268a8",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Empire_State_Building_%28aerial_view%29.jpg/640px-Empire_State_Building_%28aerial_view%29.jpg",
    note: "King Kong 把 Empire State Building 变成全球电影史最著名的纽约垂直地标之一，也是银幕纽约作为奇观城市的原型。",
    tip: "观景台需要预约；外部可从 34th St 或 Koreatown 一带取景。",
    sources: ["Visit The USA"]
  },
  {
    id: "americanpsycho",
    title: "American Psycho",
    zh: "美国精神病人",
    type: "film",
    tags: ["film", "crime"],
    area: "Upper West Side",
    place: "American Gardens Building exterior",
    address: "55 W 81st St",
    coords: [40.7818, -73.97692],
    year: "2000",
    color: "#172026",
    scene: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/West_81st_Street_Upper_West_Side.jpg/640px-West_81st_Street_Upper_West_Side.jpg",
    note: "American Psycho 的纽约是高薪、餐厅、名片和公寓门廊构成的冷感地图。Upper West Side 外景给 Bateman 的虚荣生活加了现实外壳。",
    tip: "和 AMNH、Only Murders、You've Got Mail 点位非常近。",
    sources: ["NYC MOME"]
  }
];

const sourceLinks = {
  "Screen Rant": "https://screenrant.com/most-iconic-nyc-filming-locations/",
  "Discover NYC": "https://discovernyc.tours/blog/sex-and-the-city-locations-in-nyc/",
  "Lonely Planet": "https://www.lonelyplanet.com/articles/friends-nyc-itinerary",
  "CineTour USA": "https://cinetourusa.com/tour/friends-filming-locations-tour-explore-the-real-nyc-behind-the-iconic-sitcom",
  Wikipedia: "https://en.wikipedia.org/wiki/Joker_Stairs",
  "Visit The USA": "https://traveltrade.visittheusa.com/sites/default/files/itineraries/2023-04/RoadTripsUSA_At%20the%20Movies.pdf",
  Wonderbox: "https://www.wonderbox.com/blog/p/from-gossip-girl-to-sex-the-city-the-best-movie-and-tv-show-locations-tour-in-nyc/",
  Looper: "https://www.looper.com/1800220/seinfeld-filming-locations/",
  Viator: "https://www.viator.com/blog/Iconic-TV-Film-Film-Locations-in-New-York-City/l50124",
  "Rebel Atlas": "https://rebelatlas.com/destinations/usa/new-york/new-york-27-must-visit-tv-film-locations-in-nyc-lights-camera-sidewalk/",
  "Reddit NYC movie discussion": "https://www.reddit.com/r/AskNYC/comments/1s0p64q/movies/",
  "NYC MOME": "https://www.nyc.gov/site/mome/industries/filming-in-nyc.page"
};

const map = L.map("map", {
  zoomControl: false,
  minZoom: 10
}).setView([40.742, -73.965], 11);
window.screenAtlasMap = map;

L.control.zoom({ position: "topright" }).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const regionLayer = L.layerGroup().addTo(map);
const routeLayer = L.layerGroup().addTo(map);
const markers = new Map();
let activeTheme = null;
let activeId = null;
let didInitialFit = false;
let routeFocusIds = null;
const selectedIds = new Set();

const list = document.querySelector("#locationList");
const detailCard = document.querySelector("#detailCard");
const visibleCount = document.querySelector("#visibleCount");
const searchInput = document.querySelector("#searchInput");
const selectedSummary = document.querySelector("#selectedSummary");
const selectedTitles = document.querySelector("#selectedTitles");
const selectedCount = document.querySelector("#selectedCount");
const buildSelectedRoute = document.querySelector("#buildSelectedRoute");
const routeCard = document.querySelector("#routeCard");
const themeRoutes = document.querySelector("#themeRoutes");
const panelToggle = document.querySelector("#panelToggle");

const themes = {
  romance: {
    label: "❤️ 纽约爱情",
    works: ["Friends", "Sex and the City", "You've Got Mail", "When Harry Met Sally..."],
    ids: ["friends", "satc", "youvegotmail", "harrysally"],
    routeTitle: "半日步行路线",
    route: ["Friends Apartment", "Carrie Bradshaw Apartment", "Cafe Lalo", "Katz's Delicatessen"]
  },
  work: {
    label: "💼 职场纽约",
    works: ["Succession", "Mad Men", "The Devil Wears Prada", "The Wolf of Wall Street"],
    ids: ["succession", "madmen", "devilwearsprada", "wolfofwallstreet"],
    routeTitle: "职场权力一日路线",
    route: ["Rockefeller Center", "Conde Nast Building", "Wall Street", "Battery Park"]
  },
  crime: {
    label: "🚔 黑帮与犯罪",
    works: ["The Godfather", "Goodfellas", "Law & Order: SVU", "The French Connection"],
    ids: ["godfather", "goodfellas", "svu", "frenchconnection"],
    routeTitle: "犯罪电影地理路线",
    route: ["Little Italy", "Mulberry Street", "Brooklyn Waterfront", "Lower East Side"]
  },
  lonely: {
    label: "🌃 城市孤独",
    works: ["Taxi Driver", "Mr. Robot", "Joker", "John Wick"],
    ids: ["taxidriver", "mrrobot", "joker", "johnwick"],
    routeTitle: "夜色与边缘路线",
    route: ["Joker Stairs", "Times Square", "Washington Square Park", "Coney Island"]
  },
  hero: {
    label: "🕸️ 超级英雄",
    works: ["Spider-Man", "The Avengers", "Daredevil"],
    ids: ["spiderman", "avengers"],
    routeTitle: "超级英雄纽约路线",
    route: ["Flatiron Building", "Grand Central", "Chrysler Building", "Stark Tower Location"]
  },
  landmark: {
    label: "🏛️ 经典地标",
    works: ["Breakfast at Tiffany's", "Home Alone 2: Lost in New York", "Night at the Museum", "King Kong"],
    ids: ["breakfast", "homealone2", "nightmuseum", "kingkong"],
    routeTitle: "经典地标路线",
    route: ["Tiffany's", "Plaza Hotel", "American Museum of Natural History", "Empire State Building"]
  },
  first: {
    label: "👋 第一次来纽约",
    works: ["Friends", "Ghostbusters", "Breakfast at Tiffany's", "The Avengers", "Taxi Driver", "Home Alone 2: Lost in New York"],
    ids: ["friends", "ghostbusters", "breakfast", "avengers", "taxidriver", "homealone2"],
    routeTitle: "纽约影视经典一日路线",
    route: ["Friends Apartment", "Ghostbusters Firehouse", "Tiffany's", "Grand Central", "Times Square", "Plaza Hotel", "Central Park"]
  }
};

const guideData = {
  friends: { placeName: "Friends Apartment（Monica & Rachel Apartment）", address: "90 Bedford St, West Village", memory: "剧中 Monica 和 Rachel 公寓外景所在地，是整部剧最著名的纽约地标。", value: "★★★★★", access: "公共街景", duration: "10分钟", nearby: ["Carrie Bradshaw Apartment", "Ghostbusters Firehouse", "Washington Square Park"] },
  satc: { placeName: "Carrie Bradshaw Apartment", address: "66 Perry St, West Village", memory: "Carrie 经典公寓门口，几乎每季都出现。", value: "★★★★★", access: "公共街景（禁止坐台阶）", duration: "10分钟", nearby: ["Friends Apartment", "Magnolia Bakery", "Washington Square Park"] },
  gossipgirl: { placeName: "Metropolitan Museum Steps", address: "1000 5th Ave", memory: "Blair 和朋友们每天聚集的“大都会台阶”。", value: "★★★★★", access: "公共区域", duration: "20分钟", nearby: ["Central Park", "Bethesda Terrace", "Fifth Avenue"] },
  breakfast: { placeName: "Tiffany & Co. Flagship Store", address: "727 Fifth Avenue", memory: "Holly Golightly 清晨凝视橱窗的经典镜头。", value: "★★★★★", access: "公开营业", duration: "30分钟", nearby: ["Rockefeller Center", "St. Patrick's Cathedral"] },
  homealone2: { placeName: "The Plaza Hotel", address: "768 Fifth Avenue", memory: "Kevin 独自在纽约入住 Plaza Hotel。", value: "★★★★★", access: "酒店大堂可进入", duration: "30分钟", nearby: ["Central Park South", "Tiffany's", "FAO Schwarz"] },
  ghostbusters: { placeName: "Ghostbusters Firehouse", address: "14 N Moore St, Tribeca", memory: "捉鬼敢死队总部。", value: "★★★★★", access: "仅外观", duration: "10分钟", nearby: ["Hudson River Park", "Tribeca"] },
  spiderman: { placeName: "Flatiron Building", address: "175 Fifth Avenue", memory: "多部蜘蛛侠电影中的经典纽约背景。", value: "★★★★★", access: "公共区域", duration: "15分钟", nearby: ["Madison Square Park", "Union Square"] },
  avengers: { placeName: "Grand Central Terminal", address: "89 E 42nd St", memory: "纽约大战期间的重要背景区域。", value: "★★★★★", access: "公共区域", duration: "30分钟", nearby: ["Chrysler Building", "Bryant Park"] },
  seinfeld: { placeName: "Tom's Restaurant", address: "2880 Broadway", memory: "Monk's Cafe 外景原型。", value: "★★★★☆", access: "营业餐厅", duration: "30分钟", nearby: ["Columbia University"] },
  himym: { placeName: "McGee's Pub", address: "240 W 55th St", memory: "MacLaren's Pub 灵感来源。", value: "★★★★☆", access: "营业酒吧", duration: "45分钟", nearby: ["Broadway", "Times Square"] },
  devilwearsprada: { placeName: "Hearst Tower", address: "300 W 57th St", memory: "Runway Magazine 办公楼原型。", value: "★★★★☆", access: "仅外观", duration: "10分钟", nearby: ["Columbus Circle"] },
  succession: { placeName: "One World Trade Center", address: "285 Fulton St", memory: "Waystar Royco 权力世界的象征。", value: "★★★★★", access: "观景台开放", duration: "1小时", nearby: ["Oculus", "9/11 Memorial"] },
  mrrobot: { placeName: "Coney Island", address: "Brooklyn", memory: "Elliot 经常出现的重要空间。", value: "★★★★★", access: "公共区域", duration: "2小时", nearby: ["Wonder Wheel", "Boardwalk"] },
  joker: { placeName: "Joker Stairs", address: "W 167th St, Bronx", memory: "Arthur 跳舞的经典楼梯。", value: "★★★★★", access: "公共街区", duration: "15分钟", nearby: ["Yankee Stadium"] },
  taxidriver: { placeName: "Times Square", address: "Midtown Manhattan", memory: "1970年代纽约黑暗都市象征。", value: "★★★★★", access: "公共区域", duration: "1小时", nearby: ["Broadway", "Bryant Park"] },
  johnwick: { placeName: "New York Public Library", address: "476 Fifth Ave", memory: "系列重要场景取景地。", value: "★★★★☆", access: "开放", duration: "30分钟", nearby: ["Bryant Park"] },
  harrysally: { placeName: "Katz's Delicatessen", address: "205 E Houston St", memory: "“I'll have what she's having.”", value: "★★★★★", access: "营业餐厅", duration: "45分钟", nearby: ["Lower East Side"] },
  youvegotmail: { placeName: "Cafe Lalo", address: "201 W 83rd St", memory: "电影最著名约会地点。", value: "★★★★☆", access: "营业咖啡馆", duration: "45分钟", nearby: ["Central Park West"] },
  wolfofwallstreet: { placeName: "Wall Street", address: "Financial District", memory: "Jordan Belfort 金融帝国象征。", value: "★★★★★", access: "公共区域", duration: "45分钟", nearby: ["Charging Bull", "NYSE"] },
  madmen: { placeName: "Time-Life Building", address: "1271 Avenue of the Americas", memory: "1960年代广告业黄金时代氛围。", value: "★★★★☆", access: "外观", duration: "10分钟", nearby: ["Rockefeller Center"] },
  onlymurders: { placeName: "The Belnord", address: "225 W 86th St", memory: "Arconia 公寓原型。", value: "★★★★★", access: "外观", duration: "10分钟", nearby: [] },
  b99: { placeName: "78th Precinct", address: "Brooklyn", memory: "99分局外景原型之一。", value: "★★★☆☆", access: "外观", duration: "10分钟", nearby: [] },
  svu: { placeName: "New York County Courthouse", address: "60 Centre St", memory: "大量法庭镜头取景地。", value: "★★★★☆", access: "外观", duration: "10分钟", nearby: [] },
  nightmuseum: { placeName: "American Museum of Natural History", address: "Central Park West", memory: "整部电影核心场景。", value: "★★★★★", access: "开放", duration: "3小时", nearby: [] },
  goodfellas: { placeName: "Bamboo Lounge 原址区域", address: "Brooklyn", memory: "Henry Hill 黑帮生活起点。", value: "★★★★☆", access: "部分已改变", duration: "20分钟", nearby: [] },
  godfather: { placeName: "St. Patrick's Old Cathedral", address: "Mulberry St", memory: "经典教堂场景。", value: "★★★★★", access: "开放", duration: "30分钟", nearby: [] },
  frenchconnection: { placeName: "Bensonhurst", address: "Brooklyn", memory: "著名追车戏区域。", value: "★★★★☆", access: "公共街区", duration: "30分钟", nearby: [] },
  dotherightthing: { placeName: "Stuyvesant Avenue", address: "Bedford-Stuyvesant, Brooklyn", memory: "Spike Lee 塑造的布鲁克林社区。", value: "★★★★★", access: "公共街区", duration: "45分钟", nearby: [] },
  kingkong: { placeName: "Empire State Building", address: "20 W 34th St", memory: "King Kong 最经典结局。", value: "★★★★★", access: "观景台开放", duration: "1小时", nearby: [] },
  americanpsycho: { placeName: "Wall Street & Midtown Business District", address: "Midtown Manhattan", memory: "Patrick Bateman 的金融精英生活圈。", value: "★★★★☆", access: "公共区域", duration: "45分钟", nearby: ["Trump Tower", "St. Patrick's Cathedral", "Rockefeller Center"] }
};

const posterCatalog = {
  friends: { slug: "friends", tmdbId: 1668, mediaType: "tv", wikiPage: "Friends (TV series)", tvMaze: "Friends" },
  satc: { slug: "sex-and-the-city", tmdbId: 105, mediaType: "tv", wikiPage: "Sex and the City", tvMaze: "Sex and the City" },
  gossipgirl: { slug: "gossip-girl", tmdbId: 1395, mediaType: "tv", wikiPage: "Gossip Girl (2007 TV series)", tvMaze: "Gossip Girl" },
  breakfast: { slug: "breakfast-at-tiffanys", tmdbId: 164, mediaType: "movie", wikiPage: "Breakfast at Tiffany's (film)" },
  homealone2: { slug: "home-alone-2", tmdbId: 772, mediaType: "movie", wikiPage: "Home Alone 2: Lost in New York" },
  ghostbusters: { slug: "ghostbusters", tmdbId: 620, mediaType: "movie", wikiPage: "Ghostbusters (1984 film)" },
  spiderman: { slug: "spiderman", tmdbId: 557, mediaType: "movie", wikiPage: "Spider-Man (2002 film)" },
  avengers: { slug: "avengers", tmdbId: 24428, mediaType: "movie", wikiPage: "The Avengers (2012 film)" },
  seinfeld: { slug: "seinfeld", tmdbId: 1400, mediaType: "tv", wikiPage: "Seinfeld", tvMaze: "Seinfeld" },
  himym: { slug: "how-i-met-your-mother", tmdbId: 1100, mediaType: "tv", wikiPage: "How I Met Your Mother", tvMaze: "How I Met Your Mother" },
  devilwearsprada: { slug: "devil-wears-prada", tmdbId: 350, mediaType: "movie", wikiPage: "The Devil Wears Prada (film)" },
  succession: { slug: "succession", tmdbId: 76331, mediaType: "tv", wikiPage: "Succession (TV series)", tvMaze: "Succession" },
  mrrobot: { slug: "mr-robot", tmdbId: 62560, mediaType: "tv", wikiPage: "Mr. Robot", tvMaze: "Mr. Robot" },
  joker: { slug: "joker", tmdbId: 475557, mediaType: "movie", wikiPage: "Joker (2019 film)" },
  taxidriver: { slug: "taxi-driver", tmdbId: 103, mediaType: "movie", wikiPage: "Taxi Driver" },
  johnwick: { slug: "john-wick", tmdbId: 245891, mediaType: "movie", wikiPage: "John Wick (film)" },
  harrysally: { slug: "when-harry-met-sally", tmdbId: 639, mediaType: "movie", wikiPage: "When Harry Met Sally..." },
  youvegotmail: { slug: "youve-got-mail", tmdbId: 9489, mediaType: "movie", wikiPage: "You've Got Mail" },
  wolfofwallstreet: { slug: "wolf-of-wall-street", tmdbId: 106646, mediaType: "movie", wikiPage: "The Wolf of Wall Street (2013 film)" },
  madmen: { slug: "mad-men", tmdbId: 1104, mediaType: "tv", wikiPage: "Mad Men", tvMaze: "Mad Men" },
  onlymurders: { slug: "only-murders", tmdbId: 107113, mediaType: "tv", wikiPage: "Only Murders in the Building", tvMaze: "Only Murders in the Building" },
  b99: { slug: "brooklyn-nine-nine", tmdbId: 48891, mediaType: "tv", wikiPage: "Brooklyn Nine-Nine", tvMaze: "Brooklyn Nine-Nine" },
  svu: { slug: "law-and-order-svu", tmdbId: 2734, mediaType: "tv", wikiPage: "Law & Order: Special Victims Unit", tvMaze: "Law & Order: Special Victims Unit" },
  nightmuseum: { slug: "night-at-the-museum", tmdbId: 1593, mediaType: "movie", wikiPage: "Night at the Museum" },
  goodfellas: { slug: "goodfellas", tmdbId: 769, mediaType: "movie", wikiPage: "Goodfellas" },
  godfather: { slug: "godfather", tmdbId: 238, mediaType: "movie", wikiPage: "The Godfather (film)" },
  frenchconnection: { slug: "french-connection", tmdbId: 1051, mediaType: "movie", wikiPage: "The French Connection (film)" },
  dotherightthing: { slug: "do-the-right-thing", tmdbId: 925, mediaType: "movie", wikiPage: "Do the Right Thing" },
  kingkong: { slug: "king-kong", tmdbId: 244, mediaType: "movie", wikiPage: "King Kong (1933 film)" },
  americanpsycho: { slug: "american-psycho", tmdbId: 1359, mediaType: "movie", wikiPage: "American Psycho (film)" }
};

function localPosterUrl(slug = "default") {
  const prefix = window.location.protocol === "file:" ? "./public/posters" : "/public/posters";
  return `${prefix}/${slug}.svg`;
}

function posterUrlFor(location) {
  return location.posterUrl || localPosterUrl(posterCatalog[location.id]?.slug);
}

locations.forEach((location) => {
  const poster = posterCatalog[location.id] || { slug: "default" };
  location.tmdbId = poster.tmdbId || null;
  location.tmdbMediaType = poster.mediaType || (location.type === "tv" ? "tv" : "movie");
  location.posterUrl = localPosterUrl(poster.slug);
  location.checkinUrl = location.scene;
});

async function hydratePostersFromWikipedia() {
  const requests = locations.map(async (location) => {
    const page = posterCatalog[location.id]?.wikiPage;
    if (!page) return;
    try {
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(page)}`);
      if (!response.ok) return;
      const data = await response.json();
      const thumbnail = data?.thumbnail?.source || data?.originalimage?.source;
      if (thumbnail) {
        location.posterUrl = thumbnail.replace(/\/\d+px-/, "/500px-");
        location.posterSource = data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(page)}`;
      }
    } catch {
      location.posterUrl = localPosterUrl(posterCatalog[location.id]?.slug);
    }
  });
  await Promise.allSettled(requests);
  render();
  if (activeId) renderDetail(locationById(activeId));
}

async function hydratePostersFromTVMaze() {
  const requests = locations.map(async (location) => {
    const query = posterCatalog[location.id]?.tvMaze;
    if (!query) return;
    try {
      const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(query)}`);
      if (!response.ok) return;
      const data = await response.json();
      const image = data?.image?.original || data?.image?.medium;
      if (image) {
        location.posterUrl = image;
        location.posterSource = data?.url || location.posterSource;
      }
    } catch {
      location.posterUrl = localPosterUrl(posterCatalog[location.id]?.slug);
    }
  });
  await Promise.allSettled(requests);
  render();
  if (activeId) renderDetail(locationById(activeId));
}

async function hydratePostersFromTMDB() {
  const apiKey = window.TMDB_API_KEY || window.__TMDB_API_KEY__;
  if (!apiKey) return;
  const requests = locations.map(async (location) => {
    if (!location.tmdbId) return;
    try {
      const url = `https://api.themoviedb.org/3/${location.tmdbMediaType}/${location.tmdbId}?api_key=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) return;
      const data = await response.json();
      if (data.poster_path) {
        location.posterUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
      }
    } catch {
      location.posterUrl = localPosterUrl(posterCatalog[location.id]?.slug);
    }
  });
  await Promise.allSettled(requests);
  render();
  renderDetail(locationById(activeId) || locations[0]);
}

const zoomMode = () => {
  const zoom = map.getZoom();
  if (zoom <= 11) return "density";
  if (zoom <= 13) return "representative";
  return "exact";
};

const modeText = {
  density: "影视密度",
  representative: "代表作品",
  exact: "具体拍摄点"
};

const boroughRegions = [
  {
    name: "MANHATTAN",
    zh: "曼哈顿",
    color: "#f15b55",
    coords: [[40.7007, -74.0188], [40.7075, -74.0104], [40.7355, -74.0001], [40.7728, -73.9605], [40.8786, -73.9226], [40.8815, -73.9347], [40.806, -73.9685], [40.748, -74.012], [40.704, -74.0198]]
  },
  {
    name: "THE BRONX",
    zh: "布朗克斯",
    color: "#b78ad7",
    coords: [[40.785, -73.935], [40.815, -73.885], [40.878, -73.835], [40.915, -73.765], [40.918, -73.91], [40.878, -73.935], [40.815, -73.935]]
  },
  {
    name: "QUEENS",
    zh: "皇后区",
    color: "#9bd37d",
    coords: [[40.548, -73.958], [40.592, -73.745], [40.735, -73.705], [40.804, -73.79], [40.785, -73.92], [40.734, -73.962], [40.66, -73.94]]
  },
  {
    name: "BROOKLYN",
    zh: "布鲁克林",
    color: "#6db7df",
    coords: [[40.565, -74.04], [40.59, -73.86], [40.68, -73.845], [40.735, -73.955], [40.704, -74.02], [40.62, -74.04]]
  },
  {
    name: "STATEN ISLAND",
    zh: "史泰登岛",
    color: "#d9bb8a",
    coords: [[40.48, -74.25], [40.51, -74.07], [40.64, -74.06], [40.65, -74.22], [40.58, -74.28]]
  }
];

const manhattanRegions = [
  { name: "Inwood", color: "#f6a84d", coords: [[40.852, -73.935], [40.875, -73.922], [40.879, -73.934], [40.858, -73.946]] },
  { name: "Harlem", color: "#ef3e43", coords: [[40.799, -73.958], [40.829, -73.939], [40.814, -73.932], [40.785, -73.948]] },
  { name: "Upper West Side", color: "#f5bd7c", coords: [[40.772, -73.988], [40.800, -73.969], [40.785, -73.948], [40.758, -73.967]] },
  { name: "Central Park", color: "#b7a7d6", coords: [[40.768, -73.982], [40.800, -73.958], [40.796, -73.949], [40.764, -73.973]] },
  { name: "Upper East Side", color: "#85cd82", coords: [[40.765, -73.964], [40.795, -73.942], [40.785, -73.928], [40.758, -73.949]] },
  { name: "Midtown", color: "#b6a6d2", coords: [[40.744, -74.005], [40.767, -73.984], [40.758, -73.949], [40.735, -73.982]] },
  { name: "Hell's Kitchen", color: "#61c4da", coords: [[40.755, -74.01], [40.767, -73.994], [40.744, -73.985], [40.735, -74.004]] },
  { name: "Chelsea", color: "#1fa37b", coords: [[40.735, -74.008], [40.747, -73.999], [40.733, -73.987], [40.719, -74.0]] },
  { name: "Greenwich Village", color: "#78b83e", coords: [[40.721, -74.006], [40.735, -73.997], [40.727, -73.982], [40.714, -73.993]] },
  { name: "East Village", color: "#f68fc6", coords: [[40.718, -73.992], [40.73, -73.983], [40.723, -73.971], [40.711, -73.982]] },
  { name: "SoHo / NoHo", color: "#c7e4bb", coords: [[40.713, -74.009], [40.724, -73.998], [40.715, -73.988], [40.704, -74.0]] },
  { name: "Lower East Side", color: "#78cfc5", coords: [[40.707, -73.997], [40.72, -73.984], [40.711, -73.969], [40.697, -73.984]] },
  { name: "Tribeca", color: "#63b8af", coords: [[40.704, -74.018], [40.718, -74.008], [40.707, -73.998], [40.696, -74.008]] },
  { name: "Financial District", color: "#f2a6a2", coords: [[40.696, -74.018], [40.707, -74.006], [40.699, -73.997], [40.688, -74.01]] }
];

function pinClass(location) {
  return location.type === "tv" ? "pin-tv" : "pin-film";
}

function markerKind(location) {
  if (["breakfast", "homealone2", "avengers", "nightmuseum", "kingkong", "ghostbusters"].includes(location.id)) return "landmark";
  return location.type === "tv" ? "tv" : "film";
}

function posterLayers(location, overlay = "") {
  const local = localPosterUrl(posterCatalog[location.id]?.slug);
  const layers = [`url('${posterUrlFor(location)}')`, `url('${local}')`];
  return overlay ? `${overlay}, ${layers.join(", ")}` : layers.join(", ");
}

function iconFor(location, mode) {
  const label = location.title.split(" ").map((word) => word[0]).join("").slice(0, 3);
  const kind = markerKind(location);
  return L.divIcon({
    className: "",
    html: `<div class="poster-pin ${pinClass(location)} marker-${kind} ${mode === "representative" ? "poster-pin-rep" : ""}" style="background-image:${posterLayers(location)}"><em>${kind}</em><span>${label}</span></div>`,
    iconSize: mode === "representative" ? [108, 152] : [88, 124],
    iconAnchor: mode === "representative" ? [54, 152] : [44, 124],
    popupAnchor: [0, -30]
  });
}

function posterTooltip(location) {
  return `
    <div class="poster-tooltip">
      <div class="tooltip-poster" style="background-image:${posterLayers(location)}"></div>
      <div>
        <strong>${location.title}</strong>
        <span>${guideData[location.id]?.placeName || location.place}</span>
      </div>
    </div>
  `;
}

function posterBackground(location) {
  return posterLayers(location);
}

function regionStyle(region, isNeighborhood = false) {
  return {
    color: "#ffffff",
    weight: isNeighborhood ? 1.6 : 2.4,
    opacity: 0.95,
    fillColor: region.color,
    fillOpacity: isNeighborhood ? 0.56 : 0.48,
    dashArray: isNeighborhood ? "0" : "5 5",
    className: "atlas-region"
  };
}

function regionLabel(region, center, isNeighborhood = false) {
  return L.marker(center, {
    interactive: false,
    icon: L.divIcon({
      className: "",
      html: `<div class="${isNeighborhood ? "region-label small" : "region-label"}"><strong>${region.zh || region.name}</strong><span>${region.name}</span></div>`,
      iconSize: isNeighborhood ? [92, 34] : [132, 44],
      iconAnchor: isNeighborhood ? [46, 17] : [66, 22]
    })
  });
}

function renderRegions() {
  regionLayer.clearLayers();
  const zoom = map.getZoom();
  const regions = zoom >= 13 ? manhattanRegions : boroughRegions;
  const isNeighborhood = zoom >= 13;

  regions.forEach((region) => {
    const polygon = L.polygon(region.coords, regionStyle(region, isNeighborhood));
    polygon.addTo(regionLayer);
    const center = polygon.getBounds().getCenter();
    regionLabel(region, center, isNeighborhood).addTo(regionLayer);
  });
}

function renderDetail(location) {
  activeId = location.id;
  detailCard.classList.remove("hidden");
  document.querySelectorAll(".location-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.id === activeId);
  });
  const guide = guideData[location.id] || {
    placeName: location.place,
    address: location.address,
    memory: location.note,
    value: "★★★★☆",
    access: "公共区域",
    duration: "30分钟",
    nearby: []
  };

  const sourceHtml = location.sources
    .map((source) => {
      const href = sourceLinks[source] || "#";
      return `<a href="${href}" target="_blank" rel="noreferrer">${source}</a>`;
    })
    .join("");

  detailCard.innerHTML = `
    <button class="detail-close" type="button" aria-label="关闭详情卡">×</button>
    <div class="media-grid hero-media-grid">
      <div class="poster hero-poster" style="background-image:${posterBackground(location)}">
        <div class="poster-content">
          <span class="media-kind">电影 / 剧集海报</span>
          <strong>${location.title}</strong>
          <span>${location.zh} · ${location.year}</span>
        </div>
      </div>
      <div class="scene hero-scene" style="background-image:linear-gradient(135deg, rgba(23,32,38,0.08), rgba(23,32,38,0.58)), url('${location.checkinUrl || location.scene}')">
        <div class="scene-label"><span class="media-kind">打卡点剧照 / 地点图</span>${location.place}</div>
      </div>
    </div>
    <div class="detail-body">
      <p class="eyebrow">Fan Check-in Guide · ${location.area}</p>
      <h2>${location.title}</h2>
      <p class="meta">${location.zh} · ${guide.placeName}</p>
      <div class="guide-grid">
        <div class="guide-stat"><span>地点名</span><strong>${guide.placeName}</strong></div>
        <div class="guide-stat"><span>地址</span><strong>${guide.address}</strong></div>
        <div class="guide-stat"><span>打卡价值</span><strong>${guide.value}</strong></div>
        <div class="guide-stat"><span>可访问性</span><strong>${guide.access}</strong></div>
        <div class="guide-stat"><span>停留时间</span><strong>${guide.duration}</strong></div>
        <div class="guide-stat"><span>类型</span><strong>${location.type === "tv" ? "电视剧" : "电影"}</strong></div>
      </div>
      <div class="memory-point"><strong>场景记忆点</strong>${guide.memory}</div>
      ${guide.nearby.length ? `<div class="nearby-list"><strong>附近景点</strong>${guide.nearby.join("、")}</div>` : ""}
      <div class="tags">${location.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="tip">${location.tip}</div>
      <div class="sources">${sourceHtml}</div>
    </div>
  `;
  detailCard.querySelector(".detail-close").addEventListener("click", () => {
    detailCard.classList.add("hidden");
    activeId = null;
    document.querySelectorAll(".location-item").forEach((item) => item.classList.remove("active"));
  });
}

function matches(location, query) {
  const haystack = `${location.title} ${location.zh} ${location.place} ${location.address} ${location.area} ${location.tags.join(" ")}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function filteredLocations() {
  return locations.filter((location) => matches(location, searchInput.value.trim()));
}

function densityRegion(location) {
  if (["Financial District"].includes(location.area)) return "Financial District";
  if (["West Village", "Tribeca", "Lower East Side", "Little Italy", "Civic Center"].includes(location.area)) return "Downtown";
  if (["Midtown East", "Fifth Avenue", "Central Park South", "Flatiron", "Hell's Kitchen", "Midtown West", "Times Square", "Midtown South"].includes(location.area)) return "Midtown";
  if (["Upper West Side", "Morningside Heights"].includes(location.area)) return "Upper West Side";
  if (["Brooklyn", "Bed-Stuy"].includes(location.area)) return "Brooklyn";
  if (["Queens", "Coney Island"].includes(location.area)) return "Queens / Coney";
  if (location.area === "Bronx") return "Bronx";
  return location.area;
}

function areaGroups(visible) {
  const groups = new Map();
  visible.forEach((location) => {
    const region = densityRegion(location);
    if (!groups.has(region)) {
      groups.set(region, {
        area: region,
        color: location.color,
        locations: [],
        lat: 0,
        lng: 0
      });
    }
    const group = groups.get(region);
    group.locations.push(location);
    group.lat += location.coords[0];
    group.lng += location.coords[1];
  });

  return [...groups.values()].map((group) => ({
    ...group,
    coords: [group.lat / group.locations.length, group.lng / group.locations.length],
    count: group.locations.length
  }));
}

const extraStops = {
  "Friends Apartment": [40.73242, -74.00545],
  "Carrie Bradshaw Apartment": [40.73555, -74.00305],
  "Cafe Lalo": [40.78599, -73.97613],
  "Katz's Delicatessen": [40.72223, -73.98743],
  "Rockefeller Center": [40.75874, -73.97867],
  "Conde Nast Building": [40.75875, -73.98512],
  "Wall Street": [40.70696, -74.01122],
  "Battery Park": [40.70328, -74.01703],
  "Little Italy": [40.71914, -73.99733],
  "Mulberry Street": [40.71958, -73.99758],
  "Brooklyn Waterfront": [40.70029, -73.99674],
  "Lower East Side": [40.71892, -73.99036],
  "Joker Stairs": [40.83586, -73.92368],
  "Times Square": [40.758, -73.9855],
  "Washington Square Park": [40.73082, -73.99733],
  "Coney Island": [40.57493, -73.98594],
  "Flatiron Building": [40.74106, -73.9897],
  "Grand Central": [40.75273, -73.97723],
  "Chrysler Building": [40.75162, -73.9755],
  "Stark Tower Location": [40.7549, -73.9767],
  "Tiffany's": [40.76248, -73.97398],
  "Plaza Hotel": [40.76445, -73.97434],
  "American Museum of Natural History": [40.78132, -73.97399],
  "Empire State Building": [40.74844, -73.98566],
  "Ghostbusters Firehouse": [40.71957, -74.00662],
  "Central Park": [40.77404, -73.97073]
};

function locationById(id) {
  return locations.find((location) => location.id === id);
}

function routeCoordsFromTheme(theme) {
  const coords = theme.route.map((stop) => extraStops[stop]).filter(Boolean);
  return coords.length >= 2 ? coords : theme.ids.map((id) => locationById(id)?.coords).filter(Boolean);
}

function visibleForRoute(ids) {
  if (!ids?.length) return filteredLocations();
  const allowed = new Set(ids);
  return filteredLocations().filter((location) => allowed.has(location.id));
}

function focusRouteMarkers(ids) {
  routeFocusIds = ids?.length ? [...new Set(ids)] : null;
  renderMarkers(visibleForRoute(routeFocusIds));
}

function clearRouteFocus() {
  routeFocusIds = null;
  renderMarkers(filteredLocations());
}

function drawRoute(coords) {
  routeLayer.clearLayers();
  if (coords.length < 2) return;
  const glow = L.polyline(coords, {
    color: "#77d8ff",
    weight: 15,
    opacity: 0.2,
    lineCap: "round",
    lineJoin: "round",
    interactive: false
  }).addTo(routeLayer);
  const route = L.polyline(coords, {
    color: "#7fc7ff",
    weight: 7,
    opacity: 0.96,
    lineCap: "round",
    lineJoin: "round"
  }).addTo(routeLayer);
  L.polyline(coords, {
    color: "#f8fbff",
    weight: 2.5,
    opacity: 0.82,
    dashArray: "1 14",
    lineCap: "round",
    interactive: false
  }).addTo(routeLayer);
  coords.forEach((coord, index) => {
    L.marker(coord, {
      interactive: false,
      icon: L.divIcon({
        className: "",
        html: `<div class="route-marker"><span>${index + 1}</span></div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      })
    }).addTo(routeLayer);
  });
  map.fitBounds(glow.getBounds().pad(0.18), { animate: true, maxZoom: 13 });
}

function renderRouteCard(title, works, route, duration) {
  routeCard.classList.add("active");
  routeCard.innerHTML = `
    <p class="eyebrow">${duration}</p>
    <h3>${title}</h3>
    <div class="route-works">${works.map((work) => `<span>${work}</span>`).join("")}</div>
    <ol class="route-steps">${route.map((stop) => `<li>${stop}</li>`).join("")}</ol>
  `;
}

function showTheme(themeKey) {
  if (activeTheme === themeKey) {
    clearTheme();
    return;
  }
  activeTheme = themeKey;
  const theme = themes[themeKey];
  document.querySelectorAll(".chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === themeKey);
  });
  document.querySelectorAll(".theme-route").forEach((item) => {
    item.classList.toggle("expanded", item.dataset.theme === themeKey);
  });
  renderRouteCard(theme.label, theme.works, theme.route, theme.routeTitle);
  drawRoute(routeCoordsFromTheme(theme));
  focusRouteMarkers(theme.ids);
}

function clearTheme() {
  activeTheme = null;
  document.querySelectorAll(".chip").forEach((button) => button.classList.remove("active"));
  document.querySelectorAll(".theme-route").forEach((item) => item.classList.remove("expanded"));
  routeCard.classList.remove("active");
  routeCard.innerHTML = "";
  routeLayer.clearLayers();
  clearRouteFocus();
}

function renderThemeRoutes() {
  themeRoutes.innerHTML = Object.entries(themes)
    .map(([key, theme]) => `
      <article class="theme-route ${key === activeTheme ? "expanded" : ""}" data-theme="${key}">
        <button class="theme-toggle" type="button">${theme.label}<span>查看路线 →</span></button>
        <div class="theme-detail">
          <p>作品：</p>
          <ul>${theme.works.map((work) => `<li>${work}</li>`).join("")}</ul>
          <p>路线：</p>
          <ol>${theme.route.map((stop) => `<li>${stop}</li>`).join("")}</ol>
        </div>
      </article>
    `)
    .join("");

  themeRoutes.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      showTheme(button.closest(".theme-route").dataset.theme);
    });
  });
}

function renderSelected() {
  const selected = [...selectedIds].map(locationById).filter(Boolean);
  selectedCount.textContent = selected.length;
  selectedSummary.textContent = selected.length
    ? `${selected.length} 部已选，点击生成路线`
    : "选 2 部以上，自动生成打卡路线";
  selectedTitles.innerHTML = selected
    .map((location) => `<button type="button" data-id="${location.id}">${location.title}</button>`)
    .join("");
  selectedTitles.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => toggleSelected(button.dataset.id));
  });
  document.querySelectorAll(".select-title").forEach((button) => {
    const id = button.closest(".location-item").dataset.id;
    button.classList.toggle("selected", selectedIds.has(id));
    button.textContent = selectedIds.has(id) ? "已选" : "喜欢";
  });
}

function toggleSelected(id) {
  if (selectedIds.has(id)) selectedIds.delete(id);
  else selectedIds.add(id);
  renderSelected();
}

function orderedSelectedLocations() {
  const rank = {
    Downtown: 1,
    Midtown: 2,
    "Upper West Side": 3,
    "Financial District": 4,
    Brooklyn: 5,
    "Queens / Coney": 6,
    Bronx: 7
  };
  return [...selectedIds]
    .map(locationById)
    .filter(Boolean)
    .sort((a, b) => {
      const regionA = densityRegion(a);
      const regionB = densityRegion(b);
      return (rank[regionA] || 99) - (rank[regionB] || 99) || b.coords[0] - a.coords[0];
    });
}

function buildRouteFromSelected() {
  const selected = orderedSelectedLocations();
  if (selected.length < 2) {
    routeLayer.clearLayers();
    clearRouteFocus();
    routeCard.classList.add("active");
    routeCard.innerHTML = `
      <p class="eyebrow">自选路线</p>
      <h3>先选 2 部以上作品</h3>
      <p class="route-empty">在地点索引里点“喜欢”，例如 Friends + Gossip Girl + Mr. Robot。</p>
    `;
    return;
  }
  const duration = selected.length <= 4 ? "自动生成：半日路线" : "自动生成：一日路线";
  renderRouteCard("我喜欢这部剧 → 纽约打卡路线", selected.map((item) => item.title), selected.map((item) => item.place), duration);
  activeTheme = null;
  document.querySelectorAll(".chip").forEach((button) => button.classList.remove("active"));
  document.querySelectorAll(".theme-route").forEach((item) => item.classList.remove("expanded"));
  drawRoute(selected.map((item) => item.coords));
  focusRouteMarkers(selected.map((item) => item.id));
}

function renderList(visible) {
  list.innerHTML = "";
  visible.forEach((location) => {
    const item = document.createElement("div");
    item.className = `location-item ${location.id === activeId ? "active" : ""}`;
    item.dataset.id = location.id;
    item.innerHTML = `
      <button class="location-main" type="button">
        <span class="location-poster" style="background-image:${posterLayers(location)}"></span>
        <span class="location-copy">
          <strong>${location.title}</strong>
          <span>${location.zh} · ${location.area}</span>
          <small>${guideData[location.id]?.placeName || location.place}</small>
        </span>
      </button>
      <button class="select-title ${selectedIds.has(location.id) ? "selected" : ""}" type="button" aria-label="选择 ${location.title}">喜欢</button>
    `;
    item.addEventListener("mouseenter", () => renderDetail(location));
    item.querySelector(".location-main").addEventListener("click", () => {
      renderDetail(location);
      map.flyTo(location.coords, 15, { duration: 0.7 });
    });
    item.querySelector(".select-title").addEventListener("click", () => {
      toggleSelected(location.id);
    });
    list.appendChild(item);
  });
}

function renderMarkers(visible) {
  const mode = zoomMode();
  markerLayer.clearLayers();
  markers.clear();
  document.body.dataset.mapMode = mode;
  document.body.dataset.visibleTitles = String(visible.length);

  document.body.dataset.drawnMarkers = String(visible.length);
  visible.forEach((location) => {
    const marker = L.marker(location.coords, {
      icon: iconFor(location, mode),
      title: `${location.title} · ${location.place}`
    });
    marker.bindTooltip(posterTooltip(location), {
      direction: "top",
      offset: [0, -18],
      opacity: 1,
      className: "screen-tooltip"
    });
    marker.on("mouseover", () => marker.openTooltip());
    marker.on("mouseout", () => marker.closeTooltip());
    marker.on("click", () => {
      marker.closeTooltip();
      renderDetail(location);
      map.flyTo(location.coords, mode === "exact" ? Math.max(map.getZoom(), 15) : 14, { duration: 0.6 });
    });
    marker.addTo(markerLayer);
    markers.set(location.id, marker);
  });
}

function render(options = {}) {
  const visible = filteredLocations();
  visibleCount.textContent = visible.length;
  renderList(visible);
  renderRegions();

  if (visible.length && !visible.some((location) => location.id === activeId)) {
    renderDetail(visible[0]);
  }

  if (visible.length && (options.fit || !didInitialFit)) {
    const bounds = L.latLngBounds(visible.map((location) => location.coords));
    map.fitBounds(bounds.pad(0.18), { animate: true, maxZoom: searchInput.value.trim() ? 14 : 11 });
    didInitialFit = true;
  }

  renderMarkers(visibleForRoute(routeFocusIds));
}

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    showTheme(chip.dataset.theme);
  });
});

buildSelectedRoute.addEventListener("click", buildRouteFromSelected);

panelToggle.addEventListener("click", () => {
  document.body.classList.toggle("panel-collapsed");
  setTimeout(() => map.invalidateSize(), 190);
});

searchInput.addEventListener("input", () => {
  activeId = null;
  activeTheme = null;
  routeLayer.clearLayers();
  routeCard.classList.remove("active");
  routeCard.innerHTML = "";
  document.querySelectorAll(".chip").forEach((button) => button.classList.remove("active"));
  document.querySelectorAll(".theme-route").forEach((item) => item.classList.remove("expanded"));
  routeFocusIds = null;
  render({ fit: true });
});

map.on("zoomend", () => {
  renderRegions();
  renderMarkers(visibleForRoute(routeFocusIds));
});
map.on("moveend", () => document.body.dataset.mapMode = zoomMode());

renderThemeRoutes();
renderSelected();
render();
renderDetail(locations[0]);
hydratePostersFromWikipedia();
hydratePostersFromTVMaze();
hydratePostersFromTMDB();

window.addEventListener("load", () => {
  map.invalidateSize();
  render({ fit: true });
});

window.addEventListener("resize", () => {
  map.invalidateSize();
});
