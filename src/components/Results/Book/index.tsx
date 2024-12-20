import { LazyLoadImage, ScrollPosition, trackWindowScroll } from "react-lazy-load-image-component";

import styles from "../index.module.scss";
import { TBook } from "../../../App";

const Book = ({ book, setModal, scrollPosition }: { book: TBook, setModal(modal?: TBook): void, scrollPosition: ScrollPosition  }) => {

  return <div className={styles.grid__item} onClick={() => setModal({ ...book })}>

    <LazyLoadImage
      alt={`${book.title}: Book Cover`}
      effect="blur"
      scrollPosition={scrollPosition}

      placeholderSrc={"https://archive.org/download/placeholder-image/placeholder-image.jpg"}
      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} // use normal <img> attributes as props
    />
    <h3>
      {book.title}
    </h3>
  </div>;
}

export default trackWindowScroll(Book); 
