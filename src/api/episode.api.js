import axios from "axios";
import Cookies from "js-cookie";

// insert episode
const insertEpisode = async (episode) => {
  const token = Cookies.get("token");
  console.log("episodeInsert", episode);
  const response = await axios.post(
    "http://localhost:8000/api/v1/private/episode",
    episode,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 200) return true;
  else return false;
};

// update episode
const updateEpisode = async (episodeId, episode) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.put(
      "http://localhost:8000/api/v1/private/episode/" + episodeId,
      episode,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) return true;
    else return false;
  } catch (error) {
    console.log(error);
  }
};

// delete a episode
const deleteEpisode = async (episodeId) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.delete(
      "http://localhost:8000/api/v1/private/episode/" + episodeId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) return true;
    else return false;
  } catch (error) {
    console.log(error);
  }
};

const getAllEpisodes = async (filmId) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/public/episode/film/" + filmId
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAllEpisodes,
  insertEpisode,
  updateEpisode,
  deleteEpisode,
};
