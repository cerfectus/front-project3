import axios from "axios";

const base_url = "http://localhost:3000/api";

export const login = (auth, history) => {
  axios
    .post(`${base_url}/auth/login`, auth)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      history.push("/home");
    })
    .catch(err => {
      console.error(err);
    });
};

export const register = (register, history) => {
  axios
    .post(`${base_url}/auth/register`, register)
    .then(res => {
      history.push("/login");
    })
    .catch(err => {
      console.error(err);
    });
};
export const games = (games, history) => {
  axios
    .post(`${base_url}/posts`, games)
    .then(res => {
      history.push("/");
      console.log( 'err')
    })
    .catch(err => {
      console.error("este:", err.response);
    });
};

export const getPosts = token => {
  return axios
    .get(`${base_url}/posts`, {
      headers: {
        "x-access-token": token
      }
    })
    .then(posts => {
      return posts;
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateUser = (id, form) => {
  console.log(form);
  let formData = new FormData();
  Object.keys(form).forEach(key => {
    formData.append(key, form[key]);
  });
  axios
    .patch(`${base_url}/auth/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(user => {
      console.log(user);
    });
};
