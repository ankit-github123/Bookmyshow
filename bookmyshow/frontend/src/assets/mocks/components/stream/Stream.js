// carousal
import streamcarousal from "../../../images/stream/streamcarousal.png";
import imgLabel from "../../../images/stream/carousalpre.png";
// slick
import premier from "../../../images/stream/premier.png";
import oscar from "../../../images/stream/oscar.png";
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

export const settings = {
  dots: false,
  // rows:"2",
  infinite: true,
  speed: 500,
  arrows: true,
  centerMode: true,
  centerPadding: "20%",
  nextArrow: (
    <RightArrowButton
      arrow={rightarrow}
      style={{ height: "auto", width: "auto" }}
    />
  ),
  prevArrow: <LeftArrowButton arrow={leftarrow} />,
  slidesToShow: 3,
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

export const moviesdata = [
  {
    title: `Premiere of the week`,
    screens: [
      {
        img: premier,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: premier,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: premier,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: premier,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: premier,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: premier,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: premier,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: premier,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: premier,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
    ],
  },
  {
    title: `2021 Oscar winners`,
    screens: [
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
      {
        img: oscar,
        label: `Batman: The Long Halloween Part 1`,
        language: `English`,
      },
    ],
  },
];

export const steamcarousalsettings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  nextArrow: <RightArrowButton arrow={rightarrow} />,
  prevArrow: <LeftArrowButton arrow={leftarrow} />,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
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

export const steamcarousaldata = [
  {
    bgimg: streamcarousal,
    img:premier,
    label_img: imgLabel,
    release_time:`Brand new releases every Friday`,
    name:`Radioactive`,
    time:`1hr 51min`,
    type:`Action`,
    age:`19+`,
    language:`English`,
    description:`When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers.`,
  },
  {
    bgimg: streamcarousal,
    img:premier,
    label_img: imgLabel,
    release_time:`Brand new releases every Friday`,
    name:`Radioactive`,
    time:`1hr 51min`,
    type:`Action`,
    age:`19+`,
    language:`English`,
    description:`When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers.`,
 
  },
  {
    bgimg: streamcarousal,
    img:premier,
    label_img: imgLabel,
    release_time:`Brand new releases every Friday`,
    name:`Radioactive`,
    time:`1hr 51min`,
    type:`Action`,
    age:`19+`,
    language:`English`,
    description:`When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers.`,
 
  },
  {
    bgimg: streamcarousal,
    img:premier,
    label_img: imgLabel,
    release_time:`Brand new releases every Friday`,
    name:`Radioactive`,
    time:`1hr 51min`,
    type:`Action`,
    age:`19+`,
    language:`English`,
    description:`When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers.`,
 
  },
  {
    bgimg: streamcarousal,
    img:premier,
    label_img: imgLabel,
    release_time:`Brand new releases every Friday`,
    name:`Radioactive`,
    time:`1hr 51min`,
    type:`Action`,
    age:`19+`,
    language:`English`,
    description:`When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers.`,
  
  },
];
