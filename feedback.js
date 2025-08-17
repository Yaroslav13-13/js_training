class FeedbackSlider {
  constructor() {
    this.feedbackData = [];
    this.currentSlide = 0;
    this.swiper = null;
    this.init();
  }

  async init() {
    try {
      await this.fetchFeedbacks();
      this.initSwiper();
      this.createPagination();
      this.bindEvents();
    } catch (error) {
      console.error("Помилка ініціалізації:", error);
      this.showFallbackData();
    }
  }

  async fetchFeedbacks() {
    try {
      // Використовуємо JSONPlaceholder як приклад API
      // В реальному проекті замініть на ваш API endpoint
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const posts = await response.json();

      // Створюємо тестові дані відгуків на основі отриманих постів
      this.feedbackData = posts.map((post, index) => ({
        id: post.id,
        rating: this.generateRandomRating(),
        text: this.generateFeedbackText(post.title, post.body),
        userName: this.generateUserName(index),
      }));
    } catch (error) {
      console.error("Помилка отримання відгуків:", error);
      throw error;
    }
  }

  generateRandomRating() {
    // Генеруємо рейтинг від 3.0 до 5.0
    const rating = Math.random() * 2 + 3;
    return this.roundRating(rating);
  }

  roundRating(rating) {
    // Округлення рейтингу за правилами завдання
    if (rating >= 3.3 && rating <= 3.7) {
      return 3.5;
    } else if (rating >= 3.8 && rating <= 4.2) {
      return 4.0;
    } else if (rating >= 4.3 && rating <= 4.7) {
      return 4.5;
    } else if (rating >= 4.8 && rating <= 5.0) {
      return 5.0;
    } else {
      return Math.round(rating * 2) / 2; // Округлення до 0.5
    }
  }

  generateFeedbackText(title, body) {
    const feedbackTemplates = [
      "Дуже задоволена покупкою! Меблі не тільки стильні, а й неймовірно зручні. Доставка була швидкою, все без жодної подряпини.",
      "Замовляв шафу й ліжко — все приїхало раніше терміну. Якість перевершила очікування, збирання зайняло мінімум часу.",
      "Нарешті знайшли меблі, які ідеально вписались у наш інтер'єр. Сайт зручний, підтримка завжди на зв'язку.",
      "Відмінна якість за розумну ціну! Меблі виглядають набагато краще, ніж на фото. Рекомендую всім!",
      "Швидка доставка, якісна збірка. Меблі відповідають опису на 100%. Дуже задоволений покупкою.",
      "Професійний підхід до клієнтів. Консультант допоміг підібрати ідеальні меблі для нашої квартири.",
      "Меблі прибули в ідеальному стані. Збірка була простою, інструкції зрозумілі. Дякую за якісний товар!",
      "Великий вибір, приємні ціни. Замовлення обробили швидко, доставили вчасно. Рекомендую цей магазин!",
      "Меблі виглядають стильно та сучасно. Матеріали якісні, збірка міцна. Дуже задоволена результатом.",
      "Відмінний сервіс від початку до кінця. Меблі ідеально підійшли до нашого інтер'єру. Дякую!",
    ];

    return feedbackTemplates[
      Math.floor(Math.random() * feedbackTemplates.length)
    ];
  }

  generateUserName(index) {
    const names = [
      "Олена Коваль",
      "Андрій Шевченко",
      "Іванна Петренко",
      "Михайло Іваненко",
      "Тетяна Сидоренко",
      "Віктор Мороз",
      "Наталія Бондаренко",
      "Сергій Кравченко",
      "Марія Мельник",
      "Олександр Романенко",
    ];

    return names[index] || `Користувач ${index + 1}`;
  }

  showFallbackData() {
    // Показуємо тестові дані якщо API недоступний
    this.feedbackData = [
      {
        id: 1,
        rating: 4.5,
        text: "Дуже задоволена покупкою! Диван не тільки стильний, а й неймовірно зручний. Доставка була швидкою, все без жодної подряпини.",
        userName: "Олена Коваль",
      },
      {
        id: 2,
        rating: 4.5,
        text: "Замовляв шафу й ліжко — все приїхало раніше терміну. Якість перевершила очікування, збирання зайняло мінімум часу.",
        userName: "Андрій Шевченко",
      },
      {
        id: 3,
        rating: 4.0,
        text: "Нарешті знайшли меблі, які ідеально вписались у наш інтер'єр. Сайт зручний, підтримка завжди на зв'язку.",
        userName: "Іванна Петренко",
      },
      {
        id: 4,
        rating: 5.0,
        text: "Відмінна якість за розумну ціну! Меблі виглядають набагато краще, ніж на фото. Рекомендую всім!",
        userName: "Михайло Іваненко",
      },
      {
        id: 5,
        rating: 4.0,
        text: "Швидка доставка, якісна збірка. Меблі відповідають опису на 100%. Дуже задоволений покупкою.",
        userName: "Тетяна Сидоренко",
      },
      {
        id: 6,
        rating: 4.5,
        text: "Професійний підхід до клієнтів. Консультант допоміг підібрати ідеальні меблі для нашої квартири.",
        userName: "Віктор Мороз",
      },
      {
        id: 7,
        rating: 4.0,
        text: "Меблі прибули в ідеальному стані. Збірка була простою, інструкції зрозумілі. Дякую за якісний товар!",
        userName: "Наталія Бондаренко",
      },
      {
        id: 8,
        rating: 4.5,
        text: "Великий вибір, приємні ціни. Замовлення обробили швидко, доставили вчасно. Рекомендую цей магазин!",
        userName: "Сергій Кравченко",
      },
      {
        id: 9,
        rating: 5.0,
        text: "Меблі виглядають стильно та сучасно. Матеріали якісні, збірка міцна. Дуже задоволена результатом.",
        userName: "Марія Мельник",
      },
      {
        id: 10,
        rating: 4.5,
        text: "Відмінний сервіс від початку до кінця. Меблі ідеально підійшли до нашого інтер'єру. Дякую!",
        userName: "Олександр Романенко",
      },
    ];
  }

  createFeedbackCard(feedback) {
    return `
            <div class="swiper-slide">
                <div class="feedback-card">
                    <div class="feedback-rating" data-rating="${feedback.rating}">
                        <div class="rateyo" data-rateyo-rating="${feedback.rating}" data-rateyo-num-stars="5" data-rateyo-score="3"></div>
                    </div>
                    <p class="feedback-text">${feedback.text}</p>
                    <div class="feedback-user">${feedback.userName}</div>
                </div>
            </div>
        `;
  }

  initSwiper() {
    const wrapper = document.getElementById("feedback-wrapper");
    wrapper.innerHTML = this.feedbackData
      .map((feedback) => this.createFeedbackCard(feedback))
      .join("");

    this.swiper = new Swiper(".feedback-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      autoplay: false,
      navigation: {
        nextEl: ".nav-next",
        prevEl: ".nav-prev",
      },
      pagination: {
        el: ".feedback-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return `<button class="pagination-dot ${className}" data-slide="${index}"></button>`;
        },
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      on: {
        slideChange: () => {
          this.currentSlide = this.swiper.activeIndex;
          this.updateNavigationButtons();
          this.updatePagination();
        },
        init: () => {
          this.updateNavigationButtons();
          this.updatePagination();
        },
      },
    });

    // Ініціалізуємо рейтинги після створення слайдера з невеликою затримкою
    setTimeout(() => {
      this.initRatings();
    }, 100);
  }

  initRatings() {
    console.log("Ініціалізація рейтингів...");
    console.log("jQuery доступний:", typeof $ !== "undefined");
    console.log(
      "RateYo доступний:",
      typeof $.fn !== "undefined" && typeof $.fn.rateYo !== "undefined"
    );

    // Перевіряємо чи завантажений jQuery та RateYo
    if (
      typeof $ !== "undefined" &&
      typeof $.fn !== "undefined" &&
      typeof $.fn.rateYo !== "undefined"
    ) {
      console.log("Використовуємо RateYo для рейтингів");
      // Ініціалізуємо рейтинги за допомогою RateYo
      $(".rateyo").each(function () {
        $(this).rateYo({
          rating: $(this).data("rateyo-rating"),
          numStars: 5,
          readOnly: true,
          starWidth: "24px",
          spacing: "4px",
          normalFill: "#ddd",
          ratedFill: "#ffd700",
          starSvg:
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
        });
      });
    } else {
      console.log("Використовуємо ручні зірочки");
      // Fallback: створюємо зірочки вручну
      this.createManualStars();
    }
  }

  createManualStars() {
    const ratingElements = document.querySelectorAll(".feedback-rating");

    ratingElements.forEach((element) => {
      const rating = parseFloat(element.dataset.rating);
      const starsContainer = element.querySelector(".rateyo");

      if (starsContainer) {
        starsContainer.innerHTML = "";

        for (let i = 1; i <= 5; i++) {
          const star = document.createElement("span");

          if (i <= Math.floor(rating)) {
            // Повна зірка
            star.innerHTML = "★";
            star.className = "star filled";
          } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            // Половина зірки (тільки якщо рейтинг має десяткову частину)
            star.innerHTML = "★";
            star.className = "star half";
          } else {
            // Порожня зірка
            star.innerHTML = "☆";
            star.className = "star empty";
          }

          starsContainer.appendChild(star);
        }
      }
    });
  }

  createPagination() {
    const paginationContainer = document.querySelector(".feedback-pagination");
    paginationContainer.innerHTML = "";

    for (let i = 0; i < this.feedbackData.length; i++) {
      const dot = document.createElement("button");
      dot.className = `pagination-dot ${i === 0 ? "active" : ""}`;
      dot.setAttribute("data-slide", i);
      dot.addEventListener("click", () => {
        this.swiper.slideTo(i);
      });
      paginationContainer.appendChild(dot);
    }
  }

  updateNavigationButtons() {
    const prevBtn = document.querySelector(".nav-prev");
    const nextBtn = document.querySelector(".nav-next");

    if (this.currentSlide === 0) {
      prevBtn.classList.add("swiper-button-disabled");
    } else {
      prevBtn.classList.remove("swiper-button-disabled");
    }

    if (this.currentSlide === this.feedbackData.length - 1) {
      nextBtn.classList.add("swiper-button-disabled");
    } else {
      nextBtn.classList.remove("swiper-button-disabled");
    }
  }

  updatePagination() {
    const dots = document.querySelectorAll(".pagination-dot");
    dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  bindEvents() {
    // Додаткові обробники подій для навігації
    document.querySelector(".nav-prev").addEventListener("click", () => {
      if (this.currentSlide > 0) {
        this.swiper.slidePrev();
      }
    });

    document.querySelector(".nav-next").addEventListener("click", () => {
      if (this.currentSlide < this.feedbackData.length - 1) {
        this.swiper.slideNext();
      }
    });

    // Обробники для пагінації
    document.querySelectorAll(".pagination-dot").forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.swiper.slideTo(index);
      });
    });

    // Обробники для свайпу (вже налаштовані в Swiper)
    this.swiper.on("slideChange", () => {
      this.currentSlide = this.swiper.activeIndex;
      this.updateNavigationButtons();
      this.updatePagination();
    });
  }
}

// Функція для ініціалізації після завантаження всіх бібліотек
function initializeFeedbackSlider() {
  // Перевіряємо чи завантажені всі необхідні бібліотеки
  if (typeof Swiper !== "undefined") {
    new FeedbackSlider();
  } else {
    // Якщо Swiper не завантажений, чекаємо ще трохи
    setTimeout(initializeFeedbackSlider, 100);
  }
}

// Ініціалізація після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  initializeFeedbackSlider();
});

// Альтернативна ініціалізація якщо DOM вже завантажений
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initializeFeedbackSlider();
  });
} else {
  initializeFeedbackSlider();
}
