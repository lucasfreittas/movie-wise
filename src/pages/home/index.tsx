import { Comments } from "@/components/Comments";
import { HomeContainer, HomeContent, LastReview, PopularMovies, RecentReviews, ReviewsContent, TitleContainer } from "./styles";

import { ChartLineUp, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { MovieCard } from "@/components/MovieCard";

export default function Home (){
    
    return(
        <HomeContainer>
            <TitleContainer>
                <ChartLineUp size={32} fill="#50B2C0" />
                <h1>Home</h1>
            </TitleContainer>
            <HomeContent>
                <ReviewsContent>
                    <LastReview>
                        <div className="SectionTitle">
                            <h3>Your last movie</h3>
                            <button>See more <CaretRight size={16}/></button>
                        </div>
                        <MovieCard variant="detailed" />
                    </LastReview>
                    <RecentReviews>
                        <div className="titleRecentReviews">
                            <h3>Recent watched movies</h3>
                        </div>
                        <Comments variant="detailed" />
                        <Comments variant="detailed" />
                        <Comments variant="detailed" />
                        <Comments variant="detailed" />
                    </RecentReviews>
                </ReviewsContent>
                <PopularMovies>
                    <div className="SectionTitle">
                        <h3>Top movies of the week</h3>
                    </div>
                    <MovieCard variant="mini" />
                    <MovieCard variant="mini" />
                    <MovieCard variant="mini"/>
                    <MovieCard variant="mini"/>
                    <MovieCard variant="mini"/>
                </PopularMovies>
            </HomeContent>
        </HomeContainer>
    )
};