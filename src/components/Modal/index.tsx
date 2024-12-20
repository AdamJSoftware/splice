import { TBook } from "@/App";
import styles from "./index.module.scss";
import Rating from "@components/Rating";
import SubSearch from "./SubSearch";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useEffect } from "react";
import { searchByAuthor, searchBySimilarity } from "@query";


const Modal = ({ modal, close, setModal }: { modal?: TBook, close(): void, setModal(modal: TBook): void }) => {

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        close()
      }
    }
    window.addEventListener('keydown', closeModal)
    return () => window.removeEventListener('keydown', closeModal)
  }, [])


  const { data, isSuccess, isLoading, isError } = searchByAuthor({ author: modal?.author_name?.[0] });

  const { data: similar, isLoading: similarIsLoading, isError: similarIsError, isSuccess: similarIsSuccess } = searchBySimilarity({ ddc_sort: modal?.ddc?.[0] });



  if (!modal) {
    return <></>
  }
  return (<div className={styles.modal}>

    <div className={styles.modal__container}>
      <div className={styles.modal__exit}>
        <FaRegCircleXmark onClick={close} />
      </div>
      <div className={styles.modal__content}>
        <div>
          <img
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "https://archive.org/download/placeholder-image/placeholder-image.jpg";
            }}
            src={`https://covers.openlibrary.org/b/id/${modal.cover_i}-M.jpg`} />

        </div>
        <div>
          <h3 style={{
            textAlign: "left"
          }}>
            {modal.title}&nbsp;({modal.first_publish_year})
          </h3>
          <div style={{
            display: "flex",
            gap: "20px"
          }}>
            <Rating rating={modal.ratings_average} /> {modal.ratings_count && <>({modal.ratings_count})</>}
          </div>
          <p style={{
            textAlign: "left",
            marginTop: "1rem"
          }}>{modal.first_sentence?.[0]}..</p>
        </div>
      </div>

      <SubSearch setModal={setModal} isSuccess={isSuccess} isError={isError} isLoading={isLoading} title={`More from ${modal.author_name}...`} data={data?.docs} />

      {
        modal?.ddc_sort && (

          <SubSearch setModal={setModal} isSuccess={similarIsSuccess} isError={similarIsError} isLoading={similarIsLoading} title="Similar books..." data={similar?.docs} />
        )
      }

    </div>
  </div>);
}

export default Modal;
