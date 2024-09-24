const productBB = {
  isDisabled: false,
  modPrime: true,
  numOfcolors: 4,
  numOfphotos: 4,
  mediaSrc: "/media_assets/test/checks/",
  carrentColor: 3,
  carrentimgNum: 1,
  sizeList: ["1X", "2X", "3X", "4X", "5X"],

  colors: {
    color_1: {
      name: "خراوى",
      colorVal: ["#00ffff", "#ff00bb"],
      colorId: "color_1",
    },
    color_2: {
      name: "خراوى",
      colorVal: ["#00ff5e"],
    },
    color_3: {
      name: "خراوى",
      colorVal: ["#ff00bb"],
    },
    color_4: {
      name: "خراوى",
      colorVal: ["#00ffff"],
    },
    color_5: {
      name: "خراوى",
      colorVal: ["#00ff5e"],
    },
    color_6: {
      name: "خراوى",
      colorVal: ["#ff00bb"],
    },
  },
  details: {
    imgsrc: "media_assets/test/1.png",
    title: "جامب سوت",
    subTitle: "جامب سوت جامب سوت",
    paragraph:
      "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
    crossedPrice: 100,
    price: 570,
  },
  mod: {
    section1: {
      clo1: { type: "sizeTable" },
      clo2: {
        type: "text",
        details: {
          title: "1جامب سوت",
          subTitle: "جامب سوت جامب سوت",
          paragraph:
            "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
        },
      },
    },
    section2: {
      clo1: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/1.png",
        },
      },
      clo2: {
        type: "text",
        details: {
          title: "جامب سوت",
          subTitle: "جامب سوت جامب سوت",
          paragraph:
            "الخامة عشرة على عشرة و شوية كلام تمام بخصوص المنتج وكدة - مع عرض وبتاع و اى حوار فىسطرين والسلام واحنا جايين نعمل قلبان ونمشى وبلاش اندهاش علشان التقيل لسه مجاش اوى هرى وخلاص ",
        },
      },
    },
    section3: {
      clo1: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/sub/1.png",
          isRound: true,
          figcaption: "أنيق -- مريح -- وعملى",
        },
      },
      clo2: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/sub/2.png",
          isRound: true,
          figcaption: "أنيق -- مريح -- وعملى",
        },
      },
      clo3: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/sub/3.png",
          isRound: true,
          figcaption: "أنيق -- مريح -- وعملى",
        },
      },
    },
  },
  cartOptionsDetails: {
    imgSrc: "media_assets/test/1.png",
  },
  initialShoppingListOptions: {
    price: 250,
    size: "--",
    colorId: "",
    quantity: 1,
    colorName: "--",
  },
};

const params = {
  currentColorId: "color_1",
  colors: [
    {
      name: "خراوى",
      value: ["#00ffff", "#ff00bb"],
      id: "color_1",
      isDisabled: true,
      rank: 7,
      tags: [""],
      segments: 1,
      numOfphotos: 4,
      disabledSizes: ["XL", "2X"],
    },

    {
      name: "خراوى",
      valule: ["#00ffff", "#ff00bb"],
      id: "color_2",
      rank: 1,
      tags: [""],
      segments: 1,
      numOfphotos: 4,
    },

    {
      name: "بنى",
      value: ["#00ff5e"],
      id: "color_2",
      isDisabled: false,
      rank: 2,
      tags: [""],
      segments: 1,
      numOfphotos: 4,
    },

    {
      name: "رمادى",
      value: ["#ff00bb"],
      id: "color_3",
      isDisabled: false,
      rank: 3,
      tags: [""],
      segments: 1,
      numOfphotos: 4,
    },
    {
      name: "رمادى",
      value: ["#ff00bb"],
      id: "color_3",
      isDisabled: false,
      rank: 5,
      tags: [""],
      segments: 1,
      numOfphotos: 4,
    },
  ],

  sizes: [
    {
      sizeOrder: 1,
      name: "L",
      isDisabled: false,
      table: ["L", "50 CM", "60 CM", "70 CM"],
    },
    {
      sizeOrder: 2,
      name: "XL",
      isDisabled: false,
      table: ["XL", "80 CM", "90 CM", "100 CM"],
    },
    {
      sizeOrder: 3,
      name: "2X",
      isDisabled: false,
      table: ["2XL", "110 CM", "120 CM", "130 CM"],
    },
    {
      sizeOrder: 4,
      name: "3X",
      isDisabled: false,
      table: ["3XL", "105 CM", "107 CM", "180 CM"],
    },
    {
      sizeOrder: 5,
      name: "4X",
      isDisabled: false,
      table: ["4XL", "100 CM", "100 CM", "150 CM"],
    },
    {
      sizeOrder: 6,
      name: "5X",
      isDisabled: false,
      table: ["5XL", "100 CM", "140 CM", "111 CM"],
    },
  ],

  sizeTable: {
    head: ["مقاس", "الصدر", "الخصر", "الطول"],
    rows: [],
  },
};

const item = new Item(params);
console.log(item.getColors(3));
console.log(item.getSizes(5));
// console.log(item.get("sizeTable"));
console.log(item.getSizeTable());
