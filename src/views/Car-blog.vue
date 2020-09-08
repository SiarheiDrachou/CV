<template>
    <div>
        <Header />

        <div class="container-main">
            <UpperSection />

            <div class="container">
                <main class="main">
                    <CentralSection />
            
                    <PagePaginationSection />
                </main>
            
                <aside class="aside">
                    <h3 class="aside-header"> Popular posts </h3>
                    
                    <AsidePostsSection />
                    
                    <AsideInstagram />

                    <AsideTagsSection />

                    <AsideEmailSection />
                </aside>
            </div>
        </div>
    
        <footer class="footer">
            <div class="footer__upper-section">
                <FooterSection1 />

                <FooterSection2 />

                <FooterSection3 />
            </div>

            <FooterNav />
        </footer>
    </div>
</template>

<style lang="scss" scoped>
    .container-main {
        display: flex;
        flex-direction: column;
        align-items: center;

        .container {
            display: flex;
            justify-content: space-between;
            width: 1170px;

            @media (max-width: 1280px) {
                flex-direction: column;
                width: 766px;
            }

            @media (max-width: 768px) {
                width: 370px;
            }

            .main {
                font-family: 'PtSans';
                margin-bottom: 68px;
                width: 766px;

                @media (max-width: 1280px) {
                    margin-bottom: 0;
                }

                @media (max-width: 768px) {
                    width: 370px;
                }
            }

            .aside {
                display: flex;
                flex-wrap: nowrap;
                flex-direction: column;
                margin-bottom: 68px;
                width: 280px;

                @media (max-width: 1280px) {
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-left: 80px;
                    width: 604px;
                }

                @media (max-width: 768px) {
                    flex-direction: column;
                    flex-wrap: nowrap;
                    margin-left: 0;
                    width: 320px;
                    margin-left: 50px;
                }

                .aside-header {
                    line-height: 23px;
                    width: 270px;
                    color: #171717;
                    margin-top: 0;
                    margin-bottom: 23px;
                }
            }
        }
    }

    .footer {
        width: 100%;
        font-size: 14px;
        color: white;
        padding: 0;
        margin: 0;
        font-family: 'PtSans';

        .footer__upper-section {
            display: grid;
            grid-template-columns: repeat(3, 370px);
            grid-template-rows: 523px;
            grid-template-areas: "footer__section-1 footer__section-2 footer__section-3";
            grid-gap: 29px;
            justify-content: center;
            background-color: #171717;
            padding: 0;
            margin: 0;

            @media (max-width: 1280px) {
                grid-template-columns: 270px 293px;
                grid-template-rows: 474px 246px;
                grid-template-areas: "footer__section-1 footer__section-2"
                                    "footer__section-3 footer__section-3";
                grid-gap: 48px 28px;
                height: 795px;
            }

            @media (max-width: 768px) {
                grid-template-columns: 293px;
                grid-template-rows: 300px 293px 293px;
                grid-template-areas: "footer__section-1"
                                    "footer__section-2"
                                    "footer__section-3";
                grid-gap: 48px;
                height: 1063px;
            }
        }
    }
</style>

<script>
import Header from '../components/car-blog/Header'
import UpperSection from '../components/car-blog/UpperSection'
import CentralSection from '../components/car-blog/CentralSection'
import PagePaginationSection from '../components/car-blog/PagePaginationSection'
import AsidePostsSection from '../components/car-blog/AsidePostsSection'
import AsideInstagram from '../components/car-blog/AsideInstagram'
import AsideTagsSection from '../components/car-blog/AsideTagsSection'
import AsideEmailSection from '../components/car-blog/AsideEmailSection'
import FooterSection1 from '../components/car-blog/FooterSection1'
import FooterSection2 from '../components/car-blog/FooterSection2'
import FooterSection3 from '../components/car-blog/FooterSection3'
import FooterNav from '../components/car-blog/FooterNav'




export default {
    components: {
        Header,
        UpperSection,
        CentralSection,
        PagePaginationSection,
        AsidePostsSection,
        AsideInstagram,
        AsideTagsSection,
        AsideEmailSection,
        FooterSection1,
        FooterSection2,
        FooterSection3,
        FooterNav
    }
}
</script>