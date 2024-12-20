import Slider from "react-slick";
import styles from "./index.module.scss";
import Skeleton from "../../Skeleton";
import { TBook } from "../../../App";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SubSearch = ({ data, title, isLoading, isError, isSuccess, setModal }: { isSuccess: boolean, isLoading: boolean, isError: boolean; title: string; data?: TBook[], setModal(data: TBook): void }) => {
  const settings = {

    dots: true,
    infinite: false,
    speed: 500,
    //adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (isError) return <p>There was an error. Please try again later</p>;

  if (isSuccess && data?.length == 0) return <></>;

  return (
    <div style={{
      width: "90%",
      maxWidth: "1200px",
      margin: "0 auto",
      marginTop: "50px"
    }}>
      <p style={{
        textAlign: "left",
        color: "black",
        fontWeight: "bold"
      }}>{title}</p>
      <Slider {...settings}>
        {
          isLoading &&
          Array.from({ length: 10 }).map((_, index) => (


            <Skeleton key={index} height="300px" width="200px" />
          ))

        }
        {data &&
          data.map((el) => (
            <div className={styles.slide_root} onClick={() => setModal(el)} key={el.key} >
              <div className={styles.slide}>

                <LazyLoadImage
                  effect="blur"

                  alt={`${el.title}: Book Cover`}
                  height="200px"
                  placeholderSrc={"https://archive.org/download/placeholder-image/placeholder-image.jpg"}
                  src={`https://covers.openlibrary.org/b/id/${el.cover_i}-M.jpg`} />
                <p style={{ color: "black" }}>{el.title}</p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default SubSearch;
