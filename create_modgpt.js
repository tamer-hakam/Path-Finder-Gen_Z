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
// A variable to hold the main modal element once created
let modTemp = null;

function renderMod(product, options = {}) {
  // If the main modal has not been built before, create it
  if (!mainModal) {
    const mainModal = document
      .querySelector(`[data-type="modal-temp"]`)
      .content.cloneNode(true);
    modTemp = mainModal.querySelector(`[data-type="mod"]`);
    document.body.appendChild(modTemp); // Append it once to the DOM
  }
  // Get references to necessary elements
  const modBody = modTemp.querySelector(`[data-type="mod-body"]`);
  const modCard = modTemp.querySelector(`[data-type="mod-card"]`);

  // Ensure no old dynamic content
  removeDynamicContent(modBody, modCard);

  // Apply classes to modBody and modCard based on options
  updateClasses(modBody, modCard, options);

  // Render prime content if applicable
  if (product.mod && product.modPrime) {
    renderModPrime(product, modBody);
  }

  // Render sections container and append it to the modal body
  const sectionsContainer = document
    .querySelector(`[data-type="modal-elements-temp-container"]`)
    .content.cloneNode(true);
  modBody.appendChild(sectionsContainer);

  // Render sections and footer
  renderModSection(product, modBody, modTemp, modElementsTemp);
  // createModFooter(product.details, modCard);

  // Activate modal
  modTemp.classList.add("is-active");

  // Add event listener to the exit button
  const exit = modTemp.querySelector(`[data-id="exit"]`);
  exit.removeEventListener("click", handleExit); // Prevent duplicate listeners
  exit.addEventListener("click", handleExit);
}

function handleExit() {
  // Hide modal and clean up dynamic content
  modTemp.classList.remove("is-active");
  const modBody = modTemp.querySelector(`[data-type="mod-body"]`);
  const modCard = modTemp.querySelector(`[data-type="mod-card"]`);

  // Remove dynamic content
  removeDynamicContent(modBody, modCard);
}

function removeDynamicContent(modBody, modCard) {
  // Remove all previously added sections, prime, and footer
  while (modBody.firstChild) {
    modBody.removeChild(modBody.firstChild);
  }
  while (modCard.firstChild) {
    modCard.removeChild(modCard.firstChild);
  }
}

function updateClasses(modBody, modCard, options) {
  // Remove old classes and apply new ones if provided
  if (options.modBodyClass) {
    modBody.className = ""; // Remove all classes
    modBody.classList.add(...options.modBodyClass);
  }
  if (options.modCardClass) {
    modCard.className = ""; // Remove all classes
    modCard.classList.add(...options.modCardClass);
  }
}
