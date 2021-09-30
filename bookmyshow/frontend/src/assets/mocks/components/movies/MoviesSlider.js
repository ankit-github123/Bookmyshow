import entertain from "../../../images/movies/entertain.png";
import premier from "../../../images/movies/premieres.png";
import leftarrow from "../../../images/stream/leftarrow.png";
import rightarrow from "../../../images/stream/rightarrow.png";
import premiertop from "../../../images/movies/premier_top.png";

function LeftArrowButton(props) {
  const { className, style, onClick, arrow } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        width: "40px",
        height: "40px",
        zIndex: "99",
        fontSize: "20px",
        position: "absolute",
        left: "0px",
        top: "42%",
      }}
      onClick={onClick}
    >
      <img
        src={arrow}
        alt="arrow"
        style={{ width: "42px", height: "42px", borderRadius: "20px" }}
      />
    </div>
  );
}

function RightArrowButton(props) {
  const { className, style, onClick, arrow } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        width: "40px",
        height: "40px",
        zIndex: "99",
        fontSize: "20px",
        position: "absolute",
        right: "0px",
        top: "42%",
      }}
      onClick={onClick}
    >
      <img
        src={arrow}
        alt="arrow"
        style={{ width: "42px", height: "42px", borderRadius: "20px" }}
      />
    </div>
  );
}

export const moviesentertainment = {
  dots: false,
  infinite: true,
  speed: 200,
  arrows: true,
  nextArrow: <RightArrowButton arrow={rightarrow} />,
  prevArrow: <LeftArrowButton arrow={leftarrow} />,
  slidesToShow: 5,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

export const entertainment = [
  {
    title: `The Best of Entertainment`,
    slides: [
      {
        bg: entertain,
      },
      {
        bg: entertain,
      },
      {
        bg: entertain,
      },
      {
        bg: entertain,
      },
      {
        bg: entertain,
      },
      {
        bg: entertain,
      },
      {
        bg: entertain,
      },
      {
        bg: entertain,
      },
      {
        bg: entertain,
      },
    ],
  },
];

export const premierdata = [
  {
    img: premiertop,
    title: `Premieres`,
    subtitle: `Brand new releases every Friday`,
    data: [
      {
        img: premier,
        label: `Wonder Women 1984`,
        language: `English`,
      },
      {
        img: premier,
        label: `Wonder Women 1984`,
        language: `English`,
      },
      {
        img: premier,
        label: `Wonder Women 1984`,
        language: `English`,
      },
      {
        img: premier,
        label: `Wonder Women 1984`,
        language: `English`,
      },
      {
        img: premier,
        label: `Wonder Women 1984`,
        language: `English`,
      },
      {
        img: premier,
        label: `Wonder Women 1984`,
        language: `English`,
      },
      {
        img: premier,
        label: `Wonder Women 1984`,
        language: `English`,
      },
      {
        img: premier,
        label: `Wonder Women 1984`,
        language: `English`,
      },
      {
        img: premier,
        label: `Wonder Women 1984`,
        language: `English`,
      },
      {
        img: premier,
        label: `Wonder Women 1984`,
        language: `English`,
      },
    ],
  },
];
