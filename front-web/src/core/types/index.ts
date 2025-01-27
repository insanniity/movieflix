
export type MoviesResponse ={
    content: Movie[];
    totalPages: number;
    totalElements: number;
}

export type Movie ={
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genreId: number;
}

export type ReviewResponse = {
    content : Review[];
    totalPages: number;
    totalElements: number;
}

export type Review={
    id: number;
    text: string;
    movieId: number;
    user : User;
}

export type Genre ={
    id:number;
    name: string;
}

export type User ={
    id : number;
    name : string;
    email : string;
}