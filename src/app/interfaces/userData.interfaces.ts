export interface MovieScore {
    idMovie: number,
    Score: number
}

export interface UserData {
    idUser: number,
    scores: MovieScore[];
}
