import Artists from "./Artists";
import { API_URL, BASE_LINK } from "../../constant/ApiLinks";
import axios from "axios";

export async function getServerSideProps(context) {
  const headers = {
      refreshToken: `Bearer ${context.req.cookies.refreshToken}`,
      authorization: `Bearer ${context.req.cookies.token}`,
    };
  const artistInitialList = await axios.post(
    `${BASE_LINK}${API_URL.getArtist}`,
    { pageNumber: 1 },
    {
      headers: headers,
    }
  );
  return { props: { artistInitialList: artistInitialList.data } };
}

function ArtistIndex({ artistInitialList }) {
  
    return <Artists artistInitialList={artistInitialList} />

}

export default ArtistIndex;
