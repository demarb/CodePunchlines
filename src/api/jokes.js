import axios from "axios";

export function getJokes() {
    return axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist&type=twopart&amount=10")
        .then((res) => res.data)
}

export function getJoke(id) {
    return axios.get(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist&type=twopart&idRange=${id}&amount=10`)
        .then((res) => res.data.jokes)
}