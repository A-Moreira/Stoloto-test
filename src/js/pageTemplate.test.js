const pageGame = require('./pageTemplate.js').default;

const stateApp = {
    headerTabs: document.getElementById('header_tabs'),   
    container: document.getElementById('container'),
    applyBtn: () => document.getElementById('apply-btn'),
    apply: false,
    showGamePage: true,
    selectPage: 0,
    gamePages: {
        0: {
            activeFieldItem1: [],
            activeFieldItem2: [],
            betValue: 0,
            quantity: 1,
            circulation: 1
        }
    },
    betValue: 0,
    render: () => {}
}

const testTrue =`<div id="game-page" class="main">
    <div class="main__rules">
        <div class="logo">
            <img src="./src/img/logo.png" alt="Logo" class="logo__logotype">
            <span class="logo__text">«Гослото «4 из 20»</span>
            <button id="rules-btn" class="logo__rules">Правила</button>
        </div>
        <div class="description">
            <span class="description__heading">Суперприз</span>
            <span class="description__heading description__heading--big">300 000 000</span>
            <span class="description__heading">рублей</span>
            <div class="description__text">
                <p class="descritption__text-paragraph">Чтобы принять участие в лотерее, вы должны выбрать числа сразу в двух игровых полях.</p>
                <p class="descritption__text-paragraph">Минимальная лотерейная комбинация — это 4 числа в диапазоне от 1 до 20 в первом поле и 4 числа от 1 до 20 во втором поле.</p>
            </div>
        </div>
    </div>
    <div class="main__fields fields">
        <div class="main__field field">
            <div class="field__heading">Отметьте не менее 4 чисел в первой части поля</div>
            <div id="field-game-1" class="field__game">
                <div class="field__game-item">1</div><div class="field__game-item">2</div><div class="field__game-item">3</div><div class="field__game-item">4</div><div class="field__game-item">5</div><div class="field__game-item">6</div><div class="field__game-item">7</div><div class="field__game-item">8</div><div class="field__game-item">9</div><div class="field__game-item">10</div><div class="field__game-item">11</div><div class="field__game-item">12</div><div class="field__game-item">13</div><div class="field__game-item">14</div><div class="field__game-item">15</div><div class="field__game-item">16</div><div class="field__game-item">17</div><div class="field__game-item">18</div><div class="field__game-item">19</div><div class="field__game-item">20</div>
            </div>
        </div>
        <div class="main__field field">
            <div class="field__heading">Отметьте не менее 4 чисел во второй части поля</div>
            <div id="field-game-2" class="field__game">
               <div class="field__game-item">1</div><div class="field__game-item">2</div><div class="field__game-item">3</div><div class="field__game-item">4</div><div class="field__game-item">5</div><div class="field__game-item">6</div><div class="field__game-item">7</div><div class="field__game-item">8</div><div class="field__game-item">9</div><div class="field__game-item">10</div><div class="field__game-item">11</div><div class="field__game-item">12</div><div class="field__game-item">13</div><div class="field__game-item">14</div><div class="field__game-item">15</div><div class="field__game-item">16</div><div class="field__game-item">17</div><div class="field__game-item">18</div><div class="field__game-item">19</div><div class="field__game-item">20</div>
            </div>
        </div>
        <div class="fields__buttons">
            <button id="random-numbers" class="button fields__button"><span class="fas fa-magic"></span>Случайные числа</button>
            <button id="clear-numbers" class="button fields__button"><span class="fas fa-times"></span>Очистить</button>
        </div>
    </div>
    <div class="main__control control">
        <button id="exit-btn" class="button control__button"><span class="fas fa-times"></span>Выйти</button>
        <div class="control__selectors selectors">
            <div class="selectors__circulation">
                <span class="control__text">Тираж</span>
                <select class="control__selector--m" name="circulation" id="circulation-selector">
                    <option value="0">№ 1291</option>
                    <option value="1">№ 1292</option>
                    <option value="2">№ 1293</option>
                </select>
                <span id="date-str" class="control__text">8 мая 10:30</span>
            </div>

            <div class="selectors__quantity">
                <span class="control__text">Кол-во тиражей:</span>
                <select class="control__selector--s" name="quantity" id="quantity-selector">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div class="selectors__value">
                <span class="control__text">Стоимость ставки</span>
                <span id="bet-value" class="control__text control__text--big">3 000 000</span>
                <span class="control__text">рублей</span>
            </div>
        </div>
        <button id="apply-btn" class="button control__button">Подтвердить</button>
    </div>
</div>`

test('render window game', () => {
  expect(pageGame(stateApp.gamePages[stateApp.selectPage])).toBe(testTrue);
});