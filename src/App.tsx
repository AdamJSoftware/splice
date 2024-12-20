import './App.css';
import Search from '@components/Search';
import { useState } from 'react';
import Results from '@components/Results';
import Modal from '@components/Modal';


export type TBook = {
  author_alternative_name: string[]
  author_key: string[]
  author_name: string[]
  contributor: string[]
  cover_i: number
  ddc: string[]
  ebook_access: string
  ebook_count_i: number
  edition_count: number
  edition_key: string[]
  first_publish_year: number
  format: string[]
  has_fulltext: boolean
  ia: string[]
  ia_collection: string[]
  ia_collection_s: string
  isbn: string[]
  key: string
  language: string[]
  last_modified_i: number
  lcc: string[]
  lccn: string[]
  lending_edition_s: string
  lending_identifier_s: string
  number_of_pages_median: number
  oclc: string[]
  osp_count: number
  printdisabled_s: string
  public_scan_b: boolean
  publish_date: string[]
  publish_place: string[]
  publish_year: number[]
  publisher: string[]
  seed: string[]
  title: string
  title_sort: string
  title_suggest: string
  type: string
  id_amazon: string[]
  id_goodreads: string[]
  id_librarything: string[]
  id_overdrive: string[]
  subject: string[]
  place: string[]
  ia_box_id: string[]
  ratings_average: number
  ratings_sortable: number
  ratings_count: number
  ratings_count_1: number
  ratings_count_2: number
  ratings_count_3: number
  ratings_count_4: number
  ratings_count_5: number
  readinglog_count: number
  want_to_read_count: number
  currently_reading_count: number
  already_read_count: number
  publisher_facet: string[]
  place_key: string[]
  subject_facet: string[]
  _version_: number
  place_facet: string[]
  lcc_sort: string
  author_facet: string[]
  subject_key: string[]
  first_sentence?: string[]
  ddc_sort: string
};

const App = () => {

  const [search, setSearch] = useState<string | undefined>(undefined);

  const [modal, setModal] = useState<TBook | undefined>(undefined);

  return (
    <div className="content">
      <h1>Open Library Search</h1>

      {
        modal && <Modal setModal={setModal} modal={modal} close={() => setModal(undefined)} />

      }
      <Search setSearch={setSearch} />
      <div style={{
        minHeight: "90vh"
      }}>
        <Results setModal={setModal} search={search} />
      </div>
    </div>
  );
};

export default App;
