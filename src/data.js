export const API_KEY = 'AIzaSyBlEcixDo9IX90Cca8XNyoqnaekNr9rXgY';

export const value_converter = (value) => {
    if(value>=100000){
        return Math.floor(value/100000) + "M"
    }else if(value>=1000){
       return Math.floor(value/1000) + "K"
    }else{
        return value
    }
}