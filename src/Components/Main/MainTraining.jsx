import React from "react";
import PlusSvg from "./PlusSvg";
import { useRef, useState } from "react";

const MainTraining = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentEl = useRef(null);

  function handleHeadingClick() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="training-section">
      <h2 className="training-section__title">Обучение</h2>
      <ul className="training-section__list">
        <li className="training-service-row">
          <div
            className="training-service-row__heading"
            onClick={handleHeadingClick}
          >
            <h3 className="training-service-row__name">
              Контурная пластика губ
            </h3>
            <button className="training-service-row__trigger-button">
              <PlusSvg
                className={`training-service-row__icon ${
                  isOpen ? "training-service-row__icon_rotated" : ""
                }`}
              />
            </button>
          </div>
          <div
            ref={contentEl}
            className="training-service-row__content"
            style={{
              maxHeight: isOpen ? contentEl.current.scrollHeight : "0px",
            }}
          >
            <span className="training-service-row__topic-title">
              В обучение входит:
            </span>
            <span className="training-service-row__subtopic-title">
              Теоретическая часть:
            </span>
            <ul className="training-service-row__list">
              <li>Разбор всех техник контурной пластики губ</li>
              <li>Блок по первой мед.помощи</li>
              <li>Блок по ведению инстаграмма</li>
              <li>Портфолио с обучения</li>
            </ul>
            <span className="training-service-row__subtopic-title">
              Практическая часть:
            </span>
            <ul className="training-service-row__list">
              <li>1 показательная модель</li>
              <li>3-4 модели для Вас</li>
            </ul>
            <span className="training-service-row__note">
              Продолжительность обучения: <strong>1 день</strong>
            </span>
            <div className="training-service-row__price">
              <span className="training-service-row__price-label">
                Стоимость обучения:
              </span>
              <div className="training-service-row__price-value-wrapper">
                <strong>50000 рублей (Москва)</strong>
                <strong>45000 рублей (Махачкала)</strong>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MainTraining;
