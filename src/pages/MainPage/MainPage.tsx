import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./MainPage.module.sass"

import Map from "../../assets/map.png"
import Recycling from "../../assets/recycling.png"
import RecyclingArrows from "../../assets/recycling-arrows.png"
import Garbage from "../../assets/garbage.png"
import Masks from "../../assets/masks.png"

import {Carousel} from "react-responsive-carousel";
import {SmallCard} from "../../components/Cards/Small/SmallCard";
import {BigCard, cardProps} from "../../components/Cards/Big/BigCard";
import {Arrow} from "../../components/Cards/Arrow";

const bigCards: Array<cardProps> = [
    {
        bigText: "Сделаем мир чище",
        smallText: "Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов",
        image: RecyclingArrows,
        imageAlt: "Переработка",
        textButton: "Условия сервиса",
        color: "#B3EDC8",
        linkTo: "/terms"
    },
    {
        bigText: "А вы знали...",
        smallText: "что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет?",
        image: Garbage,
        imageAlt: "Мусор",
        textButton: "Узнать больше",
        color: "#FFE48F",
        linkTo: "/about-garbage"
    },
    {
        bigText: "Что с масками?",
        smallText: "Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.",
        image: Masks,
        imageAlt: "Маски",
        textButton: "Пункты сбора масок",
        color: "#BFF0DE",
        linkTo: "/terms"
    },
]
export const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bigCards}>
                <Carousel infiniteLoop={true} showIndicators={false} showStatus={false}
                          renderArrowPrev={(clickHandler) =>
                              <div onClick={clickHandler} className={styles.left}><Arrow type={"leftArrow"}/></div>}
                          renderArrowNext={(clickHandler) =>
                              <div onClick={clickHandler} className={styles.right}><Arrow type={"rightArrow"}/></div>}>
                    {bigCards.map((item, i) => <BigCard key={i} {...item}/>)}
                </Carousel>
            </div>
            <div className={styles.smallCards}>
                <SmallCard bigText="Пункты сбора"
                           smallText="Посмотри, где в твоем городе можно сдать вторсырье на переработку"
                           image={Map}
                           imageAlt="Карта"
                           linkTo="/collection-points"
                />
                <SmallCard bigText="ЭкоМаркет"
                           smallText="Используй заработанные экокоины для покупки товаров из переработанных материалов"
                           image={Recycling}
                           imageAlt="Переработка"
                           linkTo="/market"
                />
            </div>
        </div>
    )
}