export const HTML_TEST = `
  <!-- Комментарий -->
  <hr>
  <div id="inner2" class="header_block some_junk_class">
      Оригинальный контейнер
  </div>
  <hr>

  <div class="container" id="container-original">

      <div class="inner_block some_class_1 some_class_2 some_class_3 some_class_4" id="inner1">
          Lorem ipsum dolor sit amet.

          <ul>
            <li>kek</li>
            <li id="as_in_example">lol</li>
            <li>azaza</li>
          </ul>

          <div class="inner_block" id="inner2">
              Lorem ipsum dolor sit amet.
              <div class="inner_block" id="inner2">
                  Lorem ipsum dolor sit amet.
                  <div class="inner_block" id="inner2">
                      Lorem ipsum dolor sit amet.
                      <div class="inner_block" id="inner2">
                          Lorem ipsum dolor sit amet.

                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="inner_block" id="inner2">
          Lorem ipsum dolor sit amet.
          <div class="inner_block" id="inner2">
              Lorem ipsum dolor sit amet.
              <div class="inner_block" id="inner2">
                  Lorem ipsum dolor sit amet.
                  <div class="inner_block lol_kek_azaza" id="inner2">
                      Lorem ipsum dolor sit amet.

                  </div>
              </div>
          </div>
      </div>
      <div class="inner_block" id="inner3">
          Lorem ipsum dolor sit amet.
          <div class="inner_block" id="inner2">
              Lorem ipsum dolor sit amet.
              <div class="inner_block" id="inner2">
                  Lorem ipsum dolor sit amet.
                  <div class="inner_block" id="inner2">
                      Lorem ipsum dolor sit amet.

                  </div>
              </div>
          </div>
      </div>
      <div class="inner_block" id="inner4">
          Lorem ipsum dolor sit amet.
      </div>
      <div class="inner_block" id="inner5">
          Lorem ipsum dolor sit amet.
      </div>

  </div>

  <hr>
  <div class="header_block">
      Контейнер после работы функции удалающей текстовые узлы
  </div>
  <hr>

  <div class="container" id="container-changed">

      <div class="inner_block" id="inner1">
          Lorem ipsum dolor sit amet.
          <div class="inner_block" id="inner2">
              Lorem ipsum dolor sit amet.
              <div class="inner_block" id="inner2">
                  Lorem ipsum dolor sit amet.
                  <div class="inner_block" id="inner2">
                      Lorem ipsum dolor sit amet.
                      <div class="inner_block" id="inner2">
                          Lorem ipsum dolor sit amet.

                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="inner_block" id="inner2">
          Lorem ipsum dolor sit amet.
          <div class="inner_block" id="inner2">
              Lorem ipsum dolor sit amet.
              <div class="inner_block" id="inner2">
                  Lorem ipsum dolor sit amet.
                  <div class="inner_block" id="inner2">
                      Lorem ipsum dolor sit amet.

                  </div>
              </div>
          </div>
      </div>
      <div class="inner_block" id="inner3">
          Lorem ipsum dolor sit amet.
          <div class="inner_block" id="inner2">
              Lorem ipsum dolor sit amet.
              <div class="inner_block" id="inner2">
                  Lorem ipsum dolor sit amet.
                  <div class="inner_block_000" id="inner2">
                      Lorem ipsum dolor sit amet.

                  </div>
              </div>
          </div>
      </div>
      <div class="inner_block_998" id="inner998">
          Lorem ipsum dolor sit amet.
      </div>
      <div class="inner_block_999" id="inner999">
          Lorem ipsum dolor sit amet.
      </div>

  </div>
`;
