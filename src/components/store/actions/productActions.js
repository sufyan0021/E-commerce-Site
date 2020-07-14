import axios from 'axios';

export const getProducts = (products) => {
    return ((dispatch, getState) => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=7e4a997bc25a4d1dfff18001c3730f60&language=en-US&page=1')
            .then((res) => {
                dispatch({type:'Products_Received',products:res.data.results});
            })
            .catch(err => {
                dispatch({type:'Products_NotReceived',error:err.message});
              });
       // console.log("Data received" + categories);
       // console.log("action reached");
    });
}

export default getProducts;