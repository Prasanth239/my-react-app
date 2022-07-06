import peru from "../../images/peru.jpg";
import arizona from "../../images/arizona.jpg";
import italy from "../../images/italy.jpg";
import hawai from "../../images/hawai.jpg";


export default [
    {
        id: 1,
        title: "Machu Picchu",
        description: " Capital city of the Inca Empire",
        price: 136,
        coverImg: peru,
        stats: {
            rating: 5.0,
            reviewCount: 50
        },
        location: "Peru",
        openSpots: 0,
    },
    {
        id: 2,
        title: "The Grand Canyon",
        description: "one of the seven natural wonders of the world",
        price: 125,
        coverImg: arizona,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Arizona",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Rome",
        description: "EThe Eternal City is more like a giant, living museum",
        price: 50,
        coverImg: italy,
        stats: {
            rating: 4.8,
            reviewCount: 20
        },
        location: "Italy",
        openSpots: 14,
    },
    {
        id: 4,
        title: "Maui",
        description: "A lush tropical beach on Maui",
        price: 25,
        coverImg: hawai,
        stats: {
            rating: 4.5,
            reviewCount: 7
        },
        location: "Hawaii",
        openSpots:5,
    },
    
]