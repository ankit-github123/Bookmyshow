import story1 from "../../../images/buzz/slick/story1.png";
import story2 from "../../../images/buzz/slick/story2.png";
import story3 from "../../../images/buzz/slick/story1.png";
import story4 from "../../../images/buzz/slick/story4.png";
import story5 from "../../../images/buzz/slick/story5.png";
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

export const storyslickdata = [
  {
    bgImg: story1,
  },
  {
    bgImg: story2,
  },
  {
    bgImg: story3,
  },
  {
    bgImg: story4,
  },
  {
    bgImg: story5,
  },
  {
    bgImg: story3,
  },
  {
    bgImg: story4,
  },
  {
    bgImg: story5,
  },
];

export const storyslick = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  arrows: false,
  nextArrow: <RightArrowButton arrow={rightarrow} />,
  prevArrow: <LeftArrowButton arrow={leftarrow} />,
  slidesToShow: 5.5,
  slidesToScroll: 2,
  // fade: true,
  // cssEase: 'linear',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5.5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
