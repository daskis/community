window.addEventListener("DOMContentLoaded", () => {
    const names = [
        "Борисов Захар Станиславович", 
        "Мамонтов Натан Эльдарович", 
        "Лебедев Харитон Германович", 
        "Калашников Дональд Романович", 
        "Смирнов Пантелеймон Сергеевич", 
        "Лаврентьев Владлен Протасьевич", 
        "Доронин Велорий Робертович", 
        "Попов Парамон Вячеславович", 
        "Жданов Артем Кимович", 
        "Иванов Иван Иванович"
    ]
    class Person {
        constructor(parent, title, commentary, awards, photo, name, position, located, rating, tagOne, tagTwo) {
            this.parent = parent;
            this.title = title;
            this.commentary = commentary;
            this.rating = rating;
            this.awards = awards;
            this.photo = photo;
            this.name = name;
            this.position = position;
            this.located = located;
            this.tagOne = tagOne;
            this.tagTwo = tagTwo;
        }
        build() {
            const parentEl = document.querySelector(this.parent);
            const item = document.createElement("li");
            item.classList.add('community__list__item');
            item.innerHTML = `
                <span class="community__tag tag__yellow">
                    ${this.tagOne}
                </span>
                <span class="community__tag tag__green">
                    ${this.tagTwo}
                </span>
                <h3 class="community__list__item__title">${this.title}</h3>
                <div class="community__list__item__commentary">
                    <p>Комментарий</p>
                    <span id="comment">${this.commentary}</span>
                </div>
                <div class="community__awards">
                    <p>Вознаграждение</p>
                    <span class="community__award">${this.awards}</span>
                </div>
                <div class="community__person">
                    
                    <div class="community__person__wrapper">
                        <img src=${this.photo} alt="person" class="community__person__photo">
                        <div class="community__person__info">
                            <h5 class="community__person__name">
                                ${this.name}
                            </h5>
                            <p class="community__person__position">${this.position}</p>
                            <p class="community__person__located">${this.located}</p>
                        </div>
                    </div>
                    <a href="#" class="community__person__rate">
                        <span>
                            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" fill="#FFD600"/>
                            </svg>
                        </span>
                        <p class="community__person__rating">${this.rating}</p>
                    </a>
                </div>
                <div class="community__btn__wrapper">
                    <button class="btn community__btn">Предложить сотрудничество</button>
                    <button class="btn btn-primary community__btn__more">
                        <span>
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 8.5L1.00161 16" stroke="#3A85F4" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </span>
                    </button>
                </div>
             `;
            parentEl.append(item);
        }
    }

    const seeMoreBtn = document.querySelector('.community__seemore');
    let k = 1;
    for (let i = 0; i < 3; i++) {
        const Item = new Person('#parent', "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, praesentium!", `commentary ${k}`, `${Math.round((Math.random()*100))}$`, "files/img/person.jpg", `${names[Math.round((Math.random() * 10))]}`, "Role: boy next door", "Located in dungeon", `${(Math.random() * 10).toFixed(1)}`, 'boss', 'vansama').build();
        k++;
    }
    seeMoreBtn.addEventListener("click", (e) => {
        for (let i = 0; i < 3; i++) {
            const Item = new Person('#parent', "Lorem 1ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, praesentium!", `commentary ${k}`, `${Math.round((Math.random()*100))}$`, "files/img/person.jpg", `${names[Math.round((Math.random() * 10))]}`, "Role: boy next door", "Located in dungeon", `${(Math.random() * 10).toFixed(1)}`, 'vansama', "boss").build();
            k++;
        }
    })
    const closeModalBtn = document.querySelector("#modal__close");
    const showModalBtn = document.querySelector('.singin');
    const modal = document.querySelector('.modal')
    function showModal() {
        modal.classList.toggle('show')
        document.body.style.overflow = "hidden"
    }
    function hideModal() {
        modal.classList.toggle('show')
        document.body.style.overflow = "auto"
    }
    closeModalBtn.addEventListener('click', () => {
        hideModal()
    })
    showModalBtn.addEventListener('click', () => {
        showModal()
    })


    const modalTabSingIn = document.querySelector(".modal__tab__singin"),
          modalTabSingUp = document.querySelector('.modal__tab__singup'),
          modalSingIn = document.querySelector('.modal__singin__wrapper'),
          modalSingUp = document.querySelector('.modal__singup__wrapper')
    
    function showSingUp() {
        modalSingIn.classList.toggle('show');
        modalSingUp.classList.toggle('show');
        modalTabSingIn.classList.toggle('disabled')
        modalTabSingUp.classList.toggle('disabled')
    }
    modalTabSingIn.addEventListener('click', () => {
        showSingUp();
    })
    modalTabSingUp.addEventListener('click', () => {
        showSingUp();
    })
})