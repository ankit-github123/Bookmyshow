import carousal1 from "../../../images/activities/carousal1.png";
import carousal2 from "../../../images/activities/carousal2.png";
import carousal3 from "../../../images/activities/carousal3.png";
import leftarrow from "../../../images/stream/leftarrow.png";
import rightarrow from "../../../images/stream/rightarrow.png";

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

export const moviescaurasaldata = [
  {
    bgImg: carousal1,
  },
  {
    bgImg: carousal2,
  },
  {
    bgImg: carousal3,
  },
  {
    bgImg: carousal1,
  },
  {
    bgImg: carousal2,
  },
  {
    bgImg: carousal3,
  },
  {
    bgImg: carousal2,
  },
];

export const moviescarousalsettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  arrows: true,
  nextArrow: <RightArrowButton arrow={rightarrow} />,
  prevArrow: <LeftArrowButton arrow={leftarrow} />,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0.8,
  centerMode: true,
  centerPadding: '60px',
  // fade: true,
  // cssEase: 'linear',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
