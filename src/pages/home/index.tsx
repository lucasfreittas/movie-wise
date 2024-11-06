import { HomeContainer, HomeContent, PopularMovies, RecentReviews, TitleContainer } from "./styles";

import { ChartLineUp } from "@phosphor-icons/react/dist/ssr";

export default function Home (){
    return(
        <HomeContainer>
            <TitleContainer>
                <ChartLineUp size={32} fill="#50B2C0" />
                <h2>Início</h2>
            </TitleContainer>
            <HomeContent>
                <RecentReviews>
                    <h1>Hello Recent Review</h1>
                </RecentReviews>
                <PopularMovies>
                    <h1>Hello Popular Movie</h1>
                </PopularMovies>
            </HomeContent>
        </HomeContainer>
    )
};