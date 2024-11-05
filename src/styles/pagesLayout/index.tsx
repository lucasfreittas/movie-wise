import { Menu } from "@/components/Menu";
import { PageContainer } from "./styles";

export function PagesLayout({children}: any){
    return(
        <PageContainer>
            <Menu />
            {children}
        </PageContainer>
    )
}