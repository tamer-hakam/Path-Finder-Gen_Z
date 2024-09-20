const prime = {
  numOfcolors: 4,
  numOfphotos: 4,
  mediaSrc: "/media_assets/test/checks/",
  carrentColor: 3,
  carrentimgNum: 1,
  details: {
    imgsrc: "media_assets/test/1.png",
    title: "جامب سوت",
    subTitle: "جامب سوت جامب سوت",
    paragraph:
      "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
    crossedPrice: 100,
    price: 570,
    colors: ["#00ffff", "#00ff5e", "#ff00bb"],
  },
};
const products = {
  idA: {
    type: "typeA",

    details: {
      imgsrc: "media_assets/test/1.png",
      title: "جامب سوت",
      subtitle: "جامب سوتggg جامب سوت",
      paragraph:
        "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
      crossedprice: 100,
      price: 570,
      colors: ["#00ffff", "#00ff5e", "#00ff5e", "#ff00bb"],
    },
  },
  idA1: {
    type: "typeA",
    modPrime: true,
    numOfcolors: 4,
    numOfphotos: 4,
    mediaSrc: "/media_assets/test/checks/",
    carrentColor: 1,
    carrentimgNum: 1,
    sizeTable: {
      head: ["مقاس", "الصدر", "الخصر", "الطول"],
      rows: [
        ["L", "50 CM", "60 CM", "70 CM"],
        ["XL", "80 CM", "90 CM", "100 CM"],
        ["2XL", "110 CM", "120 CM", "130 CM"],
        ["3XL", "105 CM", "107 CM", "180 CM"],
        ["4XL", "100 CM", "100 CM", "150 CM"],
        ["5XL", "100 CM", "140 CM", "111 CM"],
      ],
    },
    details: {
      imgsrc: "media_assets/test/1.png",
      title: "جامب سوت",
      subTitle: "جامب سوت جامب سوت",
      paragraph:
        "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
      crossedPrice: 100,

      price: 570,
      colors: ["#00ffff", "#00ff5e", "#ff00bb"],
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
  },
  idA2: {
    type: "typeA",

    details: {
      imgsrc: "media_assets/test/1.png",
      title: "جامب Bسوت",
      subTitle: "جامب سوت جامب سوت",
      paragraph:
        "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
      crossedPrice: 500,
      price: 570,
      colors: ["#00ffff", "#00ff5e", "#ff00bb"],
    },
  },
  idA3: {
    type: "typeA",

    details: {
      imgsrc: "media_assets/test/1.png",
      title: "جامب سوت",
      subTitle: "جامب سوت جامب سوت",
      paragraph:
        "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
      crossedPrice: 700,
      price: 570,
      colors: ["#00aeff", "#00ff5e", "#ff00bb"],
    },
  },
  idB1: {
    type: "typeB",

    details: {
      imgsrc: "media_assets/test/9.png",
      title: "جامب سوت",
      subTitle: "جامب سوت جامب سوت",
      crossedPrice: 700,
      price: 570,
    },
  },
  idB2: {
    type: "typeB",

    details: {
      imgsrc: "media_assets/test/9.png",
      title: "جامب سوت",
      subTitle: "جامب سوت جامب سوت",
      crossedPrice: 700,
      price: 570,
    },
  },
  idB3: {
    type: "typeB",

    details: {
      imgsrc: "media_assets/test/9.png",
      title: "جامب سوت",
      subTitle: "جامب سوت جامب سوت",
      paragraph:
        "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
      crossedPrice: 700,
      price: 570,
    },
  },
  idB4: {
    type: "typeB",

    details: {
      imgsrc: "media_assets/test/9.png",
      title: "جامب سوت",
      subTitle: "جامب سوت جامب سوت",
      paragraph:
        "افضل خامات القطن - ميلتون 🔥🔥 عالى الجودة☝️ ☝️ فرصة بجد✨قبل اسعار الشتاء  من حديث الولادة حتى عمر سنتين",
      crossedPrice: 700,
      price: 570,
    },
  },
  idC1: {
    type: "typeC",
    details: {
      imgsrc: "media_assets/test/55.png",
      title: "جامب سوت",
      price: 570,
    },
  },
  idC2: {
    type: "typeC",

    details: {
      imgsrc: "media_assets/test/55.png",
      title: "جامب سوت",
      price: 570,
    },
  },
  idC3: {
    type: "typeC",

    details: {
      imgsrc: "media_assets/test/55.png",
      title: "جامب سوت",
      price: 570,
    },
  },
  idC4: {
    type: "typeC",

    details: {
      imgsrc: "media_assets/test/55.png",
      title: "جامب سوت",
      price: 570,
    },
  },
  idC5: {
    type: "typeC",

    details: {
      imgsrc: "media_assets/test/55.png",
      title: "جامب سوت",
      price: 570,
    },
  },
  idC6: {
    type: "typeC",

    details: {
      imgsrc: "media_assets/test/55.png",
      title: "جامب سوت",
      price: 570,
    },
  },
};
