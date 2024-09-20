const productX = {
  type: "typeA",
  modPrime: true,
  numOfcolors: 4,
  numOfphotos: 4,
  mediaSrc: "/media_assets/test/checks/",
  carrentColor: 3,
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
    subtitle: "جامب سوت جامب سوت",
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
};
const productXX = {
  type: "typeB",

  details: {
    imgsrc: "media_assets/test/9.png",
    title: "جامب سوت",
    subtitle: "جامب سوت جامب سوت",
    crossedPrice: 100,
    price: 570,
  },
  mod: {
    section1: {
      clo1: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/9.png",
          isRound: true,
          figcaption: "أنيق -- مريح -- وعملى",
        },
      },
      clo2: {
        type: "text",
        details: {
          title: "ماسك ستاركي✨",
          subTitle: "يزيل الجلد الميت ويجدد خلايا الوجه 👈",
          paragraph:
            "ماسك ستاركي قناع للبشره يزيل الجلد الميت ويجدد خلاياالوجه و يقوم بتفتيح البشره و يزيل الرؤوس السوداء 😊",
        },
      },
    },
    section2: {
      clo1: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/starky/1.png",
          isRound: true,
          figcaption: "يقوم بتفتيح لون البشرة خلال 15 دقيقة فقط🕓🕓",
        },
      },
      clo2: {
        type: "text",
        details: {
          title: "طريقة الإستخدام 👇👇",
          paragraph:
            "بعد التنظيف ضعي منشفة ساخنة لمدة خمس دقائق لفتح المسامات الوجة ثم ضعي القناع من اعلي الي اسفل اتركيه 15 دقيقة او حتي يجف القناع ثم تتم إزالته من أسفل إلى أعلى ",
        },
      },
    },
    section3: {
      clo1: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/starky/3.png",
          figcaption:
            "رائع في تنظيف البشرة وازالة اثار الحبوب والبثور السوداء 😍😍💯",
        },
      },
      clo2: {
        type: "text",
        details: {
          paragraph:
            " يرطب البشرة لتصبح نقية وناعمة ومشرقة وخالية من الشوائب والدهون العالقة🌺💁🏻‍♀️",
        },
      },
    },
    section4: {
      clo1: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/starky/2.png",
          figcaption: "ينصح باستخدامه مرتين أسبوعيا✌🏻",
        },
      },
      clo2: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/starky/4.png",
          figcaption: "تدوم نتائجه مع الاستخدام 😉",
        },
      },
    },
  },
};
const productV = {
  type: "typeC",
  details: {
    imgsrc: "media_assets/test/55.png",
    title: "جامب سوت",
    price: 570,
  },
  mod: {
    section1: {
      clo1: {
        type: "img",
        details: {
          imgsrc: "media_assets/test/55.png",
          isRound: true,
        },
      },
      clo2: {
        type: "text",
        details: {
          title: "أسكرانشي قطن✨",
          subTitle: "علبة 👈 100 قطعة أربطة شعر مرنة متعددة الألوان",
          paragraph:
            "ربطة شعر قطنية ناعمة - صغيرة أنيقة - لطيفة على الشعر، مرونة عالية، مثالية للتصفيف و اكسسوارات الشعر للفتيات وللنساء",
        },
      },
    },
  },
};

function renderMod(product) {
  // Retrieve templates for the main layout
  const modTemp = document
    .querySelector(`[data-type="modal-elements-temp"]`)
    .content.cloneNode(true);
  const modal = modTemp.querySelector(`[data-type="mod"]`);
  const sectionsContainer = modTemp.querySelector(
    `[data-type="sections-container"]`
  );
  const modBody = modal.querySelector(`[data-type="mod-body"]`);
  const modCard = modal.querySelector(`[data-type="mod-card"]`);
  modal.setAttribute("product", `mod_${product.id}`);

  // Create a DocumentFragment to hold the cloned content and minimize reflows
  const fragment = document.createDocumentFragment();

  modal.classList.add(viewType);

  if (product.mod && product.modPrime) {
    renderModPrime(product, modBody);
  }

  modBody.appendChild(sectionsContainer);
  renderModSection(product, modBody, modTemp);
  createModFooter(product.details, modTemp, modCard);

  // Append the populated modal to the fragment
  fragment.appendChild(modal);
  modal.classList.add("is-active");

  // Append the fragment to the body in one operation to minimize reflows
  document.body.appendChild(fragment);

  // Select the modal and the exit button
  const mod = document.querySelector(`[product="mod_${product.id}"]`);
  const exit = mod.querySelector(`[data-id="exit"]`);

  // Set up event listeners after the content is appended to the DOM
  addClickListenerToExit(exit, mod);
}

function addClickListenerToExit(element, mod) {
  // Attach a click event listener to the exit button
  element.addEventListener("click", function () {
    exitMod(mod);
  });
}

function exitMod(mod) {
  mod.classList.remove("is-active");
  document.body.removeChild(mod); // Optionally remove the modal after closing
}

// Placeholder function as mentioned in the prompt
