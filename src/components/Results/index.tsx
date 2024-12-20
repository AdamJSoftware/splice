import { TBook } from "../../App";
import styles from "./index.module.scss";
import Skeleton from "../Skeleton";
import { searchByText } from "../../query";
import Book from "./Book";

const Results = ({ setModal, search }: { setModal(modal?: TBook): void, search: string }) => {
  const { data, isLoading, isSuccess, isError } = searchByText({ search });

  if (isLoading) {
    return <div className={styles.grid}>

      {Array.from({ length: 30 }).map((_, index) => (

        <Skeleton key={index} height="300px" />
      ))}
    </div>
  }

  if (isError) {
    return <p style={{
      color: "red"
    }}>There was an error searching for your book. Please try again later</p>
  }

  if (isSuccess) {

    return (<div className={styles.grid}> {data.docs.map((book) => <Book setModal={setModal} book={book} key={book.key} />)}</div>);
  }
  return <></>

}



export default Results;
