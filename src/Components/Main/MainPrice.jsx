import React from "react";

const MainPrice = ({ refs, style }) => {
  return (
    <article className="main-price">
      <section className="price-title">
        <h2>Прайс на услуги:</h2>
      </section>
      <section className="price-places">
        <div className="price-places-frame">Москва</div>
      </section>
      <section className="price-assortment" ref={refs} style={style}>
        <div className="assortment-count">
          <div className="assortment-service">
            Контурная пластика подбородка
            <br />
            <span>Стоимость указана за 1 мл</span>
          </div>
          <div className="assortment-price-few">
            <div className="assortment-price-few-item">
              Dermalax implant - 9000р
            </div>
            <div className="assortment-price-few-item">Stylage XL - 13000р</div>
            <div className="assortment-price-few-item">Hyamax - 9000р</div>
          </div>
        </div>

        <div className="assortment-count">
          <div className="assortment-service">
            Контурная пластика губ/ носогубных складок
          </div>
          <div className="assortment-price-few">
            <div className="assortment-price-few-item">
              Stylage M 1мл - 15000р
            </div>
            <div className="assortment-price-few-item">
              Stylage M 0.5мл - 13000р
            </div>
            <div className="assortment-price-few-item">
              Dermalax Deep 1мл - 10000р
            </div>
            <div className="assortment-price-few-item">
              Dermalax Deep 0.5мл - 8000р
            </div>
            <div className="assortment-price-few-item">
              E.p.t.q. S300 1мл - 12000р
            </div>
            <div className="assortment-price-few-item">
              E.p.t.q. S300 0.5мл - 9000р
            </div>
            <div className="assortment-price-few-item">Выведение - 4000р</div>
          </div>
        </div>

        <div className="assortment-count">
          <div className="assortment-service">Биоревитализация</div>
          <div className="assortment-price-few">
            <div className="assortment-price-few-item">
              REVI Silk (2ml) - 13000р
            </div>
            <div className="assortment-price-few-item">
              REVI Strong (2ml) - 14000P
            </div>
            <div className="assortment-price-few-item">
              Meso-Wharton - 13000Р
            </div>
            <div className="assortment-price-few-item">Profhilo - 15000P</div>
            <div className="assortment-price-few-item">
              Jalupro (3ml) - 10000P
            </div>
            <div className="assortment-price-few-item">
              Jalupro Hydro - 13000р
            </div>
          </div>
        </div>

        <div className="assortment-count">
          <div className="assortment-service">
            Биоревитализация вокруг глаз
            <span>
              *для устранения темных кругов под глазами и увлажнения зоны вокруг
              глаз
            </span>
          </div>
          <div className="assortment-price-few">
            <div className="assortment-price-few-item">
              Mesoeye C71 - 10000p
            </div>
            <div className="assortment-price-few-item">Revi - 8000P</div>
            <div className="assortment-price-few-item">Blumgel - 6000P</div>
          </div>
        </div>

        <div className="assortment-count">
          <div className="assortment-service">Коллагенотерапия</div>
          <div className="assortment-price-few">
            <div className="assortment-price-few-item">
              Collost micro (5ml) - 14000р
            </div>
            <div className="assortment-price-few-item">Collost 7% - 8000p</div>
            <div className="assortment-price-few-item">Collost 15% - 9000p</div>
            <div className="assortment-price-few-item">
              Сферогель medium - 13000P
            </div>
            <div className="assortment-price-few-item">
              Сферогель long - 14000р
              <br />
              <span>(устранение рубцов)</span>
            </div>
          </div>
        </div>

        <div className="assortment-count">
          <div className="assortment-service">
            Ботулинотерапия
            <br />
            <span>Ботокс/ксеомин подбирается индивидуально</span>
          </div>
          <div className="assortment-price-few">
            <div className="assortment-price-few-item">Лоб - 4000р</div>
            <div className="assortment-price-few-item">Межбровье - 3000р</div>
            <div className="assortment-price-few-item">
              Лоб+Межбровье - 6000p
            </div>
            <div className="assortment-price-few-item">
              Глаза (гусиные лапки) - 3000р
            </div>
            <div className="assortment-price-few-item">
              Лифтинг бровей - 2000р
            </div>
            <div className="assortment-price-few-item">
              Лечение гипергидроза подмышек - 9000р
            </div>
          </div>
        </div>

        <div className="assortment-count">
          <div className="assortment-service">
            Мезотерапия (лицо)
            <br />
            <span>Курс: 3-4 процедуры</span>
          </div>
          <div className="assortment-price-few">
            <div className="assortment-price-few-item">
              Healrepair 06 (против акне) - 6000р
            </div>
            <div className="assortment-price-few-item">
              Mesoline acne - 6000р
            </div>
          </div>
        </div>

        <div className="assortment-count">
          <div className="assortment-service">
            Мезотерапия (волосистой части головы)
            <br />
            <span>Курс: 4 процедуры</span>
          </div>
          <div className="assortment-price-few">
            <div className="assortment-price-few-item">
              Hair XDNA Peptide - 6000р
            </div>
            <div className="assortment-price-few-item">
              Dr Cyi Hair Filler - 12000р
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default MainPrice;
