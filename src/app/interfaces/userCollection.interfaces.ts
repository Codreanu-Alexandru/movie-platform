export interface MovieScore {
    idMovie: number,
    Score: number
}

export interface UserCollection {
    idUser: number,
    scores: MovieScore[];
}
