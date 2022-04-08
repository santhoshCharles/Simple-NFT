import GenresList from "./Genres";
import { API_URL, BASE_LINK } from "../../constant/ApiLinks";
import axios from "axios";

export async function getServerSideProps(context) {
    const headers = {
        refreshToken: `Bearer ${context.req.cookies.refreshToken}`,
        authorization: `Bearer ${context.req.cookies.token}`,
      };
    const genresInitialList = await axios.post(
      `${BASE_LINK}${API_URL.getGenres}`,
      { pageNumber: 1 },
      {
        headers: headers,
      }
    );
    return { props: { genresInitialList: genresInitialList.data } };
  }

function Genres({ genresInitialList }) {
    return ( <GenresList genresInitialList={genresInitialList} /> );
}

export default Genres;