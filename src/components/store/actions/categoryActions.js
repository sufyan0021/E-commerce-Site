import axios from 'axios';

export const getCategories = (categories) => {
    return ((dispatch, getState) => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=7e4a997bc25a4d1dfff18001c3730f60&language=en-US')
            .then((res) => {
                //console.log(res.data.genres);
                dispatch({type:'Categories_Received',categories:res.data.genres});
            })
            .catch(err => {
                dispatch({type:'Categories_NotReceived',error:err.message});
              });
       // console.log("Data received" + categories);
       // console.log("action reached");
    });
}